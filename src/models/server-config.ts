/* tslint:disable */
/* eslint-disable */
/**
 * ODIN Fleet API
 * API to access Odin Fleet, empowering developers to deploy gameservers all around the world in just a few lines of code.
 *
 * The version of the OpenAPI document: 0.8.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { PortDefinition } from './port-definition';
import {
    PortDefinitionFromJSON,
    PortDefinitionFromJSONTyped,
    PortDefinitionToJSON,
} from './port-definition';
import type { ConfigFile } from './config-file';
import {
    ConfigFileFromJSON,
    ConfigFileFromJSONTyped,
    ConfigFileToJSON,
} from './config-file';
import type { Mount } from './mount';
import {
    MountFromJSON,
    MountFromJSONTyped,
    MountToJSON,
} from './mount';
import type { RestartPolicy } from './restart-policy';
import {
    RestartPolicyFromJSON,
    RestartPolicyFromJSONTyped,
    RestartPolicyToJSON,
} from './restart-policy';
import type { Binary } from './binary';
import {
    BinaryFromJSON,
    BinaryFromJSONTyped,
    BinaryToJSON,
} from './binary';
import type { ResourceAllocations } from './resource-allocations';
import {
    ResourceAllocationsFromJSON,
    ResourceAllocationsFromJSONTyped,
    ResourceAllocationsToJSON,
} from './resource-allocations';
import type { SecretFile } from './secret-file';
import {
    SecretFileFromJSON,
    SecretFileFromJSONTyped,
    SecretFileToJSON,
} from './secret-file';
import type { EnvironmentVariableDefinition } from './environment-variable-definition';
import {
    EnvironmentVariableDefinitionFromJSON,
    EnvironmentVariableDefinitionFromJSONTyped,
    EnvironmentVariableDefinitionToJSON,
} from './environment-variable-definition';

/**
 * 
 * @export
 * @interface ServerConfig
 */
export interface ServerConfig {
    /**
     * The id of the server configuration
     * @type {number}
     * @memberof ServerConfig
     */
    id: number;
    /**
     * The binary id of the server configuration
     * @type {number}
     * @memberof ServerConfig
     */
    binaryId: number;
    /**
     * The app id of the server configuration
     * @type {number}
     * @memberof ServerConfig
     */
    appId: number;
    /**
     * The name of the server config
     * @type {string}
     * @memberof ServerConfig
     */
    name: string;
    /**
     * The command to run in the container (overrides ENTRYPOINT of the Dockerfile)
     * @type {string}
     * @memberof ServerConfig
     */
    command: string | null;
    /**
     * The arguments to pass to the command (overrides CMD of the Dockerfile)
     * @type {string}
     * @memberof ServerConfig
     */
    args: string | null;
    /**
     * The notes of the server config - to keep track of things and to inform colleagues
     * @type {string}
     * @memberof ServerConfig
     */
    notes: string | null;
    /**
     * The policy used to restart this server
     * @type {RestartPolicy}
     * @memberof ServerConfig
     */
    restartPolicy: RestartPolicy;
    /**
     * The resources to be used in this config
     * @type {ResourceAllocations}
     * @memberof ServerConfig
     */
    resources: ResourceAllocations;
    /**
     * The environment variable definitions to be used in this config
     * @type {Array<EnvironmentVariableDefinition>}
     * @memberof ServerConfig
     */
    env: Array<EnvironmentVariableDefinition>;
    /**
     * The mounts to use
     * @type {Array<Mount>}
     * @memberof ServerConfig
     */
    mounts: Array<Mount>;
    /**
     * The ports to expose
     * @type {Array<PortDefinition>}
     * @memberof ServerConfig
     */
    ports: Array<PortDefinition>;
    /**
     * The config files to use
     * @type {Array<ConfigFile>}
     * @memberof ServerConfig
     */
    configFiles: Array<ConfigFile>;
    /**
     * The secret files to use
     * @type {Array<SecretFile>}
     * @memberof ServerConfig
     */
    secretFiles: Array<SecretFile>;
    /**
     * The image that is used in this server config
     * @type {Binary}
     * @memberof ServerConfig
     */
    binary?: Binary;
}

/**
 * Check if a given object implements the ServerConfig interface.
 */
export function instanceOfServerConfig(value: object): value is ServerConfig {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('binaryId' in value) || value['binaryId'] === undefined) return false;
    if (!('appId' in value) || value['appId'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('command' in value) || value['command'] === undefined) return false;
    if (!('args' in value) || value['args'] === undefined) return false;
    if (!('notes' in value) || value['notes'] === undefined) return false;
    if (!('restartPolicy' in value) || value['restartPolicy'] === undefined) return false;
    if (!('resources' in value) || value['resources'] === undefined) return false;
    if (!('env' in value) || value['env'] === undefined) return false;
    if (!('mounts' in value) || value['mounts'] === undefined) return false;
    if (!('ports' in value) || value['ports'] === undefined) return false;
    if (!('configFiles' in value) || value['configFiles'] === undefined) return false;
    if (!('secretFiles' in value) || value['secretFiles'] === undefined) return false;
    return true;
}

export function ServerConfigFromJSON(json: any): ServerConfig {
    return ServerConfigFromJSONTyped(json, false);
}

export function ServerConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServerConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'binaryId': json['binaryId'],
        'appId': json['appId'],
        'name': json['name'],
        'command': json['command'],
        'args': json['args'],
        'notes': json['notes'],
        'restartPolicy': RestartPolicyFromJSON(json['restartPolicy']),
        'resources': ResourceAllocationsFromJSON(json['resources']),
        'env': ((json['env'] as Array<any>).map(EnvironmentVariableDefinitionFromJSON)),
        'mounts': ((json['mounts'] as Array<any>).map(MountFromJSON)),
        'ports': ((json['ports'] as Array<any>).map(PortDefinitionFromJSON)),
        'configFiles': ((json['configFiles'] as Array<any>).map(ConfigFileFromJSON)),
        'secretFiles': ((json['secretFiles'] as Array<any>).map(SecretFileFromJSON)),
        'binary': json['binary'] == null ? undefined : BinaryFromJSON(json['binary']),
    };
}

export function ServerConfigToJSON(value?: ServerConfig | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'binaryId': value['binaryId'],
        'appId': value['appId'],
        'name': value['name'],
        'command': value['command'],
        'args': value['args'],
        'notes': value['notes'],
        'restartPolicy': RestartPolicyToJSON(value['restartPolicy']),
        'resources': ResourceAllocationsToJSON(value['resources']),
        'env': ((value['env'] as Array<any>).map(EnvironmentVariableDefinitionToJSON)),
        'mounts': ((value['mounts'] as Array<any>).map(MountToJSON)),
        'ports': ((value['ports'] as Array<any>).map(PortDefinitionToJSON)),
        'configFiles': ((value['configFiles'] as Array<any>).map(ConfigFileToJSON)),
        'secretFiles': ((value['secretFiles'] as Array<any>).map(SecretFileToJSON)),
        'binary': BinaryToJSON(value['binary']),
    };
}

