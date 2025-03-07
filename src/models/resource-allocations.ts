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
import type { Resources } from './resources';
import {
    ResourcesFromJSON,
    ResourcesFromJSONTyped,
    ResourcesToJSON,
} from './resources';

/**
 * 
 * @export
 * @interface ResourceAllocations
 */
export interface ResourceAllocations {
    /**
     * The limits set for the server
     * @type {Resources}
     * @memberof ResourceAllocations
     */
    limits: Resources;
    /**
     * The resources that are reserved for the server
     * @type {Resources}
     * @memberof ResourceAllocations
     */
    reservations: Resources;
}

/**
 * Check if a given object implements the ResourceAllocations interface.
 */
export function instanceOfResourceAllocations(value: object): value is ResourceAllocations {
    if (!('limits' in value) || value['limits'] === undefined) return false;
    if (!('reservations' in value) || value['reservations'] === undefined) return false;
    return true;
}

export function ResourceAllocationsFromJSON(json: any): ResourceAllocations {
    return ResourceAllocationsFromJSONTyped(json, false);
}

export function ResourceAllocationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceAllocations {
    if (json == null) {
        return json;
    }
    return {
        
        'limits': ResourcesFromJSON(json['limits']),
        'reservations': ResourcesFromJSON(json['reservations']),
    };
}

export function ResourceAllocationsToJSON(value?: ResourceAllocations | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'limits': ResourcesToJSON(value['limits']),
        'reservations': ResourcesToJSON(value['reservations']),
    };
}

