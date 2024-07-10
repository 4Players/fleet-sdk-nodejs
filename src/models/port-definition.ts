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
import type { PublishMode } from './publish-mode';
import {
    PublishModeFromJSON,
    PublishModeFromJSONTyped,
    PublishModeToJSON,
} from './publish-mode';
import type { Protocol } from './protocol';
import {
    ProtocolFromJSON,
    ProtocolFromJSONTyped,
    ProtocolToJSON,
} from './protocol';

/**
 * 
 * @export
 * @interface PortDefinition
 */
export interface PortDefinition {
    /**
     * The name of the server config
     * @type {string}
     * @memberof PortDefinition
     */
    name: string;
    /**
     * The protocols to expose
     * @type {Array<Protocol>}
     * @memberof PortDefinition
     */
    protocols: Array<Protocol>;
    /**
     * The port to expose
     * @type {number}
     * @memberof PortDefinition
     */
    targetPort: number;
    /**
     * Defines whether the port uses the hosts network or the ingress network
     * @type {PublishMode}
     * @memberof PortDefinition
     */
    publishMode: PublishMode;
}

/**
 * Check if a given object implements the PortDefinition interface.
 */
export function instanceOfPortDefinition(value: object): value is PortDefinition {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('protocols' in value) || value['protocols'] === undefined) return false;
    if (!('targetPort' in value) || value['targetPort'] === undefined) return false;
    if (!('publishMode' in value) || value['publishMode'] === undefined) return false;
    return true;
}

export function PortDefinitionFromJSON(json: any): PortDefinition {
    return PortDefinitionFromJSONTyped(json, false);
}

export function PortDefinitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PortDefinition {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'protocols': ((json['protocols'] as Array<any>).map(ProtocolFromJSON)),
        'targetPort': json['targetPort'],
        'publishMode': PublishModeFromJSON(json['publishMode']),
    };
}

export function PortDefinitionToJSON(value?: PortDefinition | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'protocols': ((value['protocols'] as Array<any>).map(ProtocolToJSON)),
        'targetPort': value['targetPort'],
        'publishMode': PublishModeToJSON(value['publishMode']),
    };
}

