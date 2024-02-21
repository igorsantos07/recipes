/* tslint:disable */
/* eslint-disable */
/**
 * Django Recipes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CustomFilterSharedInner } from './CustomFilterSharedInner';
import {
    CustomFilterSharedInnerFromJSON,
    CustomFilterSharedInnerFromJSONTyped,
    CustomFilterSharedInnerToJSON,
} from './CustomFilterSharedInner';

/**
 * 
 * @export
 * @interface CustomFilter
 */
export interface CustomFilter {
    /**
     * 
     * @type {number}
     * @memberof CustomFilter
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomFilter
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFilter
     */
    search: string;
    /**
     * 
     * @type {Array<CustomFilterSharedInner>}
     * @memberof CustomFilter
     */
    shared?: Array<CustomFilterSharedInner>;
    /**
     * 
     * @type {string}
     * @memberof CustomFilter
     */
    readonly createdBy?: string;
}

/**
 * Check if a given object implements the CustomFilter interface.
 */
export function instanceOfCustomFilter(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "search" in value;

    return isInstance;
}

export function CustomFilterFromJSON(json: any): CustomFilter {
    return CustomFilterFromJSONTyped(json, false);
}

export function CustomFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'search': json['search'],
        'shared': !exists(json, 'shared') ? undefined : ((json['shared'] as Array<any>).map(CustomFilterSharedInnerFromJSON)),
        'createdBy': !exists(json, 'created_by') ? undefined : json['created_by'],
    };
}

export function CustomFilterToJSON(value?: CustomFilter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'search': value.search,
        'shared': value.shared === undefined ? undefined : ((value.shared as Array<any>).map(CustomFilterSharedInnerToJSON)),
    };
}

