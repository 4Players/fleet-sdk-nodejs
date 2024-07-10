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
import type { EnvironmentVariableType } from './environment-variable-type';
import {
    EnvironmentVariableTypeFromJSON,
    EnvironmentVariableTypeFromJSONTyped,
    EnvironmentVariableTypeToJSON,
} from './environment-variable-type';

/**
 * 
 * @export
 * @interface EnvironmentVariableDefinition
 */
export interface EnvironmentVariableDefinition {
    /**
     * The type of the environment variable
     * @type {EnvironmentVariableType}
     * @memberof EnvironmentVariableDefinition
     */
    type: EnvironmentVariableType;
    /**
     * The key of the variable
     * @type {string}
     * @memberof EnvironmentVariableDefinition
     */
    key: string;
    /**
     * The value of the variable
     * @type {string}
     * @memberof EnvironmentVariableDefinition
     */
    value?: string;
    /**
     * The variable definition of the environment variable
     * @type {string}
     * @memberof EnvironmentVariableDefinition
     */
    variable?: string;
}

/**
 * Check if a given object implements the EnvironmentVariableDefinition interface.
 */
export function instanceOfEnvironmentVariableDefinition(value: object): value is EnvironmentVariableDefinition {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('key' in value) || value['key'] === undefined) return false;
    return true;
}

export function EnvironmentVariableDefinitionFromJSON(json: any): EnvironmentVariableDefinition {
    return EnvironmentVariableDefinitionFromJSONTyped(json, false);
}

export function EnvironmentVariableDefinitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnvironmentVariableDefinition {
    if (json == null) {
        return json;
    }
    return {
        
        'type': EnvironmentVariableTypeFromJSON(json['type']),
        'key': json['key'],
        'value': json['value'] == null ? undefined : json['value'],
        'variable': json['variable'] == null ? undefined : json['variable'],
    };
}

export function EnvironmentVariableDefinitionToJSON(value?: EnvironmentVariableDefinition | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': EnvironmentVariableTypeToJSON(value['type']),
        'key': value['key'],
        'value': value['value'],
        'variable': value['variable'],
    };
}

