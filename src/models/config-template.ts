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
/**
 * 
 * @export
 * @interface ConfigTemplate
 */
export interface ConfigTemplate {
    /**
     * The id of the config template
     * @type {string}
     * @memberof ConfigTemplate
     */
    id: string;
    /**
     * The binary id of the config template
     * @type {string}
     * @memberof ConfigTemplate
     */
    binaryId: string;
    /**
     * The name of the config template
     * @type {string}
     * @memberof ConfigTemplate
     */
    name: string;
    /**
     * The path in the container
     * @type {string}
     * @memberof ConfigTemplate
     */
    content: string;
}

/**
 * Check if a given object implements the ConfigTemplate interface.
 */
export function instanceOfConfigTemplate(value: object): value is ConfigTemplate {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('binaryId' in value) || value['binaryId'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('content' in value) || value['content'] === undefined) return false;
    return true;
}

export function ConfigTemplateFromJSON(json: any): ConfigTemplate {
    return ConfigTemplateFromJSONTyped(json, false);
}

export function ConfigTemplateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigTemplate {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'binaryId': json['binaryId'],
        'name': json['name'],
        'content': json['content'],
    };
}

export function ConfigTemplateToJSON(value?: ConfigTemplate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'binaryId': value['binaryId'],
        'name': value['name'],
        'content': value['content'],
    };
}

