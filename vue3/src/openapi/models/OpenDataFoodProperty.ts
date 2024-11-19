/* tslint:disable */
/* eslint-disable */
/**
 * Tandoor
 * Tandoor API Docs
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { OpenDataProperty } from './OpenDataProperty';
import {
    OpenDataPropertyFromJSON,
    OpenDataPropertyFromJSONTyped,
    OpenDataPropertyToJSON,
} from './OpenDataProperty';

/**
 * Adds nested create feature
 * @export
 * @interface OpenDataFoodProperty
 */
export interface OpenDataFoodProperty {
    /**
     * 
     * @type {number}
     * @memberof OpenDataFoodProperty
     */
    id?: number;
    /**
     * 
     * @type {OpenDataProperty}
     * @memberof OpenDataFoodProperty
     */
    property: OpenDataProperty;
    /**
     * 
     * @type {number}
     * @memberof OpenDataFoodProperty
     */
    propertyAmount: number;
}

/**
 * Check if a given object implements the OpenDataFoodProperty interface.
 */
export function instanceOfOpenDataFoodProperty(value: object): value is OpenDataFoodProperty {
    if (!('property' in value) || value['property'] === undefined) return false;
    if (!('propertyAmount' in value) || value['propertyAmount'] === undefined) return false;
    return true;
}

export function OpenDataFoodPropertyFromJSON(json: any): OpenDataFoodProperty {
    return OpenDataFoodPropertyFromJSONTyped(json, false);
}

export function OpenDataFoodPropertyFromJSONTyped(json: any, ignoreDiscriminator: boolean): OpenDataFoodProperty {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'property': OpenDataPropertyFromJSON(json['property']),
        'propertyAmount': json['property_amount'],
    };
}

export function OpenDataFoodPropertyToJSON(value?: OpenDataFoodProperty | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'property': OpenDataPropertyToJSON(value['property']),
        'property_amount': value['propertyAmount'],
    };
}
// ----------------------------------------------------------------------
// Custom model functions added by custom openapi-generator template
// ----------------------------------------------------------------------
import {ApiApi, ApiOpenDataFoodPropertyListRequest, PaginatedOpenDataFoodPropertyList} from "@/openapi";

/**
 * query list endpoint using the provided request parameters
 */
export function list(requestParameters: ApiOpenDataFoodPropertyListRequest = {}): Promise<PaginatedOpenDataFoodPropertyList> {
    const api = new ApiApi()
    return api.apiOpenDataFoodPropertyList(requestParameters)
}
