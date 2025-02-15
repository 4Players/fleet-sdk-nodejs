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
 * @interface DockerImage
 */
export interface DockerImage {
    /**
     * The name of the docker image
     * @type {string}
     * @memberof DockerImage
     */
    imageName: string;
    /**
     * The id of the registry to load the image
     * @type {number}
     * @memberof DockerImage
     */
    registryId: number;
}

/**
 * Check if a given object implements the DockerImage interface.
 */
export function instanceOfDockerImage(value: object): value is DockerImage {
    if (!('imageName' in value) || value['imageName'] === undefined) return false;
    if (!('registryId' in value) || value['registryId'] === undefined) return false;
    return true;
}

export function DockerImageFromJSON(json: any): DockerImage {
    return DockerImageFromJSONTyped(json, false);
}

export function DockerImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): DockerImage {
    if (json == null) {
        return json;
    }
    return {
        
        'imageName': json['imageName'],
        'registryId': json['registryId'],
    };
}

export function DockerImageToJSON(value?: DockerImage | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'imageName': value['imageName'],
        'registryId': value['registryId'],
    };
}

