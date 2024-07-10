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
 * @interface Port
 */
export interface Port {
    /**
     * The name of the port
     * @type {string}
     * @memberof Port
     */
    name: string;
    /**
     * The exposed protocol
     * @type {Protocol}
     * @memberof Port
     */
    protocol: Protocol;
    /**
     * The port to expose
     * @type {number}
     * @memberof Port
     */
    targetPort: number;
    /**
     * Published Port Where the port is mapped to
     * @type {number}
     * @memberof Port
     */
    publishedPort: number;
    /**
     * Defines whether the port uses the hosts network or the ingress network
     * @type {PublishMode}
     * @memberof Port
     */
    publishMode: PublishMode;
}

/**
 * Check if a given object implements the Port interface.
 */
export function instanceOfPort(value: object): value is Port {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('protocol' in value) || value['protocol'] === undefined) return false;
    if (!('targetPort' in value) || value['targetPort'] === undefined) return false;
    if (!('publishedPort' in value) || value['publishedPort'] === undefined) return false;
    if (!('publishMode' in value) || value['publishMode'] === undefined) return false;
    return true;
}

export function PortFromJSON(json: any): Port {
    return PortFromJSONTyped(json, false);
}

export function PortFromJSONTyped(json: any, ignoreDiscriminator: boolean): Port {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'protocol': ProtocolFromJSON(json['protocol']),
        'targetPort': json['targetPort'],
        'publishedPort': json['publishedPort'],
        'publishMode': PublishModeFromJSON(json['publishMode']),
    };
}

export function PortToJSON(value?: Port | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'protocol': ProtocolToJSON(value['protocol']),
        'targetPort': value['targetPort'],
        'publishedPort': value['publishedPort'],
        'publishMode': PublishModeToJSON(value['publishMode']),
    };
}

