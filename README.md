# ODIN Fleet SDK for Node.js

## Overview

This is the Node.js SDK designed to interact with the [ODIN Fleet REST API](https://docs.4players.io/fleet/api/restapi/), enabling developers to manage game servers efficiently. This SDK leverages the robust and scalable solutions offered by [ODIN Fleet](https://odin.4players.io/fleet/), making it easier to deploy and manage game servers across a global network.
You can find further technical information on **ODIN Fleet** in our [developer documentation](https://docs.4players.io/fleet/).

## Features

- **Server Management**: Create, configure, deploy, and autoscale game servers.
- **CI/CD Integration**: Seamlessly integrate into CI/CD pipelines for automated server management.
- **Cross-Platform Support**: Compatible with various game engines and platforms.
- **Real-Time Scaling**: Dynamically adjust the number of servers based on demand.
- **User-Friendly Interface**: Simple API, dashboard, and CLI for easy server management.
- **Security**: Built-in DDoS protection and GDPR/DSGVO compliance.

## Installation

Install the SDK using npm:

```bash
npm install @4players/fleet-nodejs
```

## Usage

### Initialization

First, import and initialize the `FleetApiClient` with your API key:

```javascript
const FleetApiClient = require('@4players/fleet-nodejs');

const client = new FleetApiClient("__YOUR_ACCESS_TOKEN__");
```

In TypeScript, you can import the SDK as follows:

```typescript
import { FleetApiClient } from '@4players/fleet-nodejs';
const client = new FleetApiClient("__YOUR_ACCESS_TOKEN__");
```

## Dashboard

Using our dashboard is an easy way of managing your game servers and applications. It's also a good way to see which
items are created by the examples and how they are structured.

You'll find the dashboard at [https://console.4players.io](https://console.4players.io). All you need is a 4Players account
which you can also create on the dashboard. 

## Next Steps

The following examples demonstrate how to use the FleetApiClient SDK to manage game servers using the Fleet API.

### Example: Deploying a Minecraft Server

Depending on your business model you typically have your own docker image or have server binaries in Steam, but in this case we'll use an existing Minecraft Docker image to deploy a Minecraft server.

Although you can create an App via Script, it's easier to understand and to follow if we create the app in the dashboard as
we need an API key for the script to work, so let's create an app in the dashboard.

Navigate to the dashboard and create a new app. You can name it whatever you want, but for this example we'll name it `Minecraft`.
Once you have created the App, you'll be routed to the apps dashboard where the App-ID is displayed. You'll need this ID for the script.
Click on the Copy button to copy the App-ID to your clipboard.

Let's start with the initial part of the script:

```typescript
import { FleetApiClient } from '@4players/fleet-nodejs';

var appId = __YOUR_APP_ID__;
```

Next, click on "Settings" on the left sidebar and choose "API-Keys" from the list. You'll see your personal
Access Token. Click the copy icon again and paste it into the script.

```typescript
import { FleetApiClient } from '@4players/fleet-nodejs';

// Setup the client
var appId = __YOUR_APP_ID__;
var accessToken = "__YOUR_ACCESS_TOKEN__";
var client = new FleetApiClient(accessToken);

// Select our app so we don't need to provide the app id for every request
client.selectAppId(appId);
```

Now we need to create an image. We'll use the Minecraft image from the Docker Hub. You can find the image [here](https://hub.docker.com/r/itzg/minecraft-server).

```typescript
const version = '2024.6.1';

// We need to load the available docker registries to get the id of the default (docker hub) docker registry
let dockerRegistry: DockerRegistry = await client.getDockerRegistries().then((registries) => {
  return registries.find((registry) => registry.type === 'default');
});

// Setup the payload for the binary
const payload = {
  name: 'Minecraft',
  version: version,
  type: BinaryType.DockerImage,
  os: OperatingSystem.Linux,
  appId: app.id,
  dockerImage: {
    imageName: `itzg/minecraft-server:${version}`,
    registryId: dockerRegistry.id,
  },
};

// Create the binary structure within ODIN Fleet - this image will later be deployed
let binary = null;
try {
  binary = await client.createBinary(payload);  
} catch (error) {
  console.error('Error creating binary:', error);
  process.exit(0);
}
```

Next, we'll need to create a server config. A server config is a blueprint for a server. It defines the image, required resources, persistence, and other settings.
This is a bit more complex and it might be helpful to play around with the dashboard to understand the structure of the server config.

As with most docker images, they are configured via environment variables. Which environment variables are available
is defined in the Dockerfile. In this case, we'll set the EULA to true, the server name to "ODIN Fleet", the MOTD to "Welcome to our ODIN Fleet Minecraft Server", the max players to 10, and disable the snooper.

You'll find more info in these variables [here](https://docker-minecraft-server.readthedocs.io/en/latest/variables/).

```typescript
let config = null;
try {
  config = await client.createServerConfig({
    name: `Minecraft Production ${version}`,
    binaryId: binary.id,  // We'll use the binary we just created
      resources: {          // This defines resources, 1 shared CPU and 2 GB of memory are enough
        limits: {
          cpu: 1,
          memory: 2,
        },
        reservations: {
          cpu: 0,
          memory: 0,
        },
      },
      restartPolicy: {
        condition: RestartPolicyCondition.Any,
      },
      mounts: [
        {
          target: '/data',    // This is where the server stores its data and we want to make sure it's backuped
          readOnly: false,
        },
      ],
      ports: [                // We need to expose the game port and tell the system that it's a TCP port
        {
          name: 'gamePort',
          targetPort: 25565,
          protocols: [Protocol.Tcp],
          publishMode: PublishMode.Ingress,
        },
      ],
      env: [                  // These are the environment variables (EULA is required). You can play around with different values
        {
          key: 'EULA',
          type: EnvironmentVariableType.Static,
          value: 'true',
        },
        {
          key: 'SERVER_NAME',
          type: EnvironmentVariableType.Static,
          value: 'ODIN Fleet',
        },
        {
          key: 'MOTD',
          type: EnvironmentVariableType.Static,
          value: 'Welcome to our ODIN Fleet Minecraft Server',
        },
        {
          key: 'MAX_PLAYERS',
          type: EnvironmentVariableType.Static,
          value: '10',
        },
        {
          key: 'SNOOPER_ENABLED',
          type: EnvironmentVariableType.Static,
          value: 'false',
        },
      ],
    });
} catch (error) {
  console.error('Error creating server config:', error);
  process.exit(0);
}
```

Now we can deploy the server. We'll deploy 1 server in this example. We'll use the german region to deploy it.

```typescript
// Find first location in Germany
const location = await client.getLocations().then(({data}) => {
  return data.find((location) => location.country === 'de');
});

if (!location) {
  throw new Error('Location not found');
  process.exit(0);
}

let deployment = null;
try {
  deployment = await client.createDeployment({
    name: 'Minecraft Production',
    serverConfigId: config.id,
    autoScalerEnabled: false,
    numInstances: 1,
    placement: {
      constraints: {
        country: location.country,
        city: location.city,
      },
    },
  });
} catch (error) {
  console.error('Error creating deployment:', error);
  process.exit(0);
}
```

That's it. You should now have a Minecraft server running in the german region. You can now connect to it using the IP address of the server.

Make sure to delete the deployment and the server config if you don't need them anymore. You can also delete the binary if you don't need it anymore.

You'll find a list of deployed servers in the dashboard under "Servers". 

## Getting a servers IP and Port

When you create a server config you define which ports need to be routed to the internet. In the above server config we created a port definition named "Game Port" and defining a TCP port at 25565. Our system will find a free port on the maschine and will route that port to the internal port where the gameserver is listening. 
To find out which port is used you can get the server details:

```typescript
const servers = await client.getServers();
for (let server of servers) {
  // The server.ports map contains all ports that are exposed to the internet named by the port definition name
  var gamePort = server.ports["Game Port"]?.publishedPort;
  var ip = server.addr;
  
  console.log(`Server ${server.id} is available at ${ip}:${gamePort}`);
}
```

## Development

We are using OpenAPI to document our APIs and use generators to automatically build client code. However, as these generators have their weaknesses, we create a custom wrapper around the generated code to make it more user-friendly. In this case it's the `FleetApiClient`. You can update the internal code by running the following command:

```bash
npm run generate-api-from-backend
```

This will download the current API specs from the backend and generate the client code. Typically some minor changes or additions are then required to `FleetApiClient`.

## API Documentation

The full API documentation is available in the OpenAPI specs: [Fleet API Documentation](https://docs.4players.io/fleet/api/).

## Support

For additional support, get in touch on our [Discord server](https://4np.de/discord). 

[Book a meeting](https://www.4players.io/company/contact_us/) or join a live presentation to learn more about ODIN Fleet and how it can help manage your game servers efficiently.

## License

The NodeJS SDK is MIT License.
