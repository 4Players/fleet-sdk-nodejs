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
 * @interface CreateServerConfigRequest
 */
export interface CreateServerConfigRequest {
    /**
     * The name of the server configuration
     * @type {string}
     * @memberof CreateServerConfigRequest
     */
    name: string;
    /**
     * The arguments to pass to the command (overrides CMD of the Dockerfile)
     * @type {string}
     * @memberof CreateServerConfigRequest
     */
    args?: string | null;
    /**
     * The command to run in the container (overrides ENTRYPOINT of the Dockerfile)
     * @type {string}
     * @memberof CreateServerConfigRequest
     */
    command?: string | null;
    /**
     * The notes of the server config - to keep track of things and to inform colleagues
     * @type {string}
     * @memberof CreateServerConfigRequest
     */
    notes?: string | null;
    /**
     * The binary id of the server configuration
     * @type {number}
     * @memberof CreateServerConfigRequest
     */
    binaryId: number;
    /**
     * The config files used in this server configuration
     * @type {Array<ConfigFile>}
     * @memberof CreateServerConfigRequest
     */
    configFiles?: Array<ConfigFile>;
    /**
     * The secret files used in this server configuration
     * @type {Array<SecretFile>}
     * @memberof CreateServerConfigRequest
     */
    secretFiles?: Array<SecretFile>;
    /**
     * The resources used in this server configuration
     * @type {ResourceAllocations}
     * @memberof CreateServerConfigRequest
     */
    resources?: ResourceAllocations;
    /**
     * The restart policy of the server configuration
     * @type {RestartPolicy}
     * @memberof CreateServerConfigRequest
     */
    restartPolicy?: RestartPolicy;
    /**
     * The environment variables used in this server configuration
     * @type {Array<EnvironmentVariableDefinition>}
     * @memberof CreateServerConfigRequest
     */
    env?: Array<EnvironmentVariableDefinition>;
    /**
     * The mounts used in this server configuration
     * @type {Array<Mount>}
     * @memberof CreateServerConfigRequest
     */
    mounts?: Array<Mount>;
    /**
     * The port definitions
     * @type {Array<PortDefinition>}
     * @memberof CreateServerConfigRequest
     */
    ports?: Array<PortDefinition>;
}

/**
 * Check if a given object implements the CreateServerConfigRequest interface.
 */
export function instanceOfCreateServerConfigRequest(value: object): value is CreateServerConfigRequest {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('binaryId' in value) || value['binaryId'] === undefined) return false;
    return true;
}

export function CreateServerConfigRequestFromJSON(json: any): CreateServerConfigRequest {
    return CreateServerConfigRequestFromJSONTyped(json, false);
}

export function CreateServerConfigRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateServerConfigRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'args': json['args'] == null ? undefined : json['args'],
        'command': json['command'] == null ? undefined : json['command'],
        'notes': json['notes'] == null ? undefined : json['notes'],
        'binaryId': json['binaryId'],
        'configFiles': json['configFiles'] == null ? undefined : ((json['configFiles'] as Array<any>).map(ConfigFileFromJSON)),
        'secretFiles': json['secretFiles'] == null ? undefined : ((json['secretFiles'] as Array<any>).map(SecretFileFromJSON)),
        'resources': json['resources'] == null ? undefined : ResourceAllocationsFromJSON(json['resources']),
        'restartPolicy': json['restartPolicy'] == null ? undefined : RestartPolicyFromJSON(json['restartPolicy']),
        'env': json['env'] == null ? undefined : ((json['env'] as Array<any>).map(EnvironmentVariableDefinitionFromJSON)),
        'mounts': json['mounts'] == null ? undefined : ((json['mounts'] as Array<any>).map(MountFromJSON)),
        'ports': json['ports'] == null ? undefined : ((json['ports'] as Array<any>).map(PortDefinitionFromJSON)),
    };
}

export function CreateServerConfigRequestToJSON(value?: CreateServerConfigRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'args': value['args'],
        'command': value['command'],
        'notes': value['notes'],
        'binaryId': value['binaryId'],
        'configFiles': value['configFiles'] == null ? undefined : ((value['configFiles'] as Array<any>).map(ConfigFileToJSON)),
        'secretFiles': value['secretFiles'] == null ? undefined : ((value['secretFiles'] as Array<any>).map(SecretFileToJSON)),
        'resources': ResourceAllocationsToJSON(value['resources']),
        'restartPolicy': RestartPolicyToJSON(value['restartPolicy']),
        'env': value['env'] == null ? undefined : ((value['env'] as Array<any>).map(EnvironmentVariableDefinitionToJSON)),
        'mounts': value['mounts'] == null ? undefined : ((value['mounts'] as Array<any>).map(MountToJSON)),
        'ports': value['ports'] == null ? undefined : ((value['ports'] as Array<any>).map(PortDefinitionToJSON)),
    };
}

