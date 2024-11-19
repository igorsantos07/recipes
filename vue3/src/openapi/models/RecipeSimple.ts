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
/**
 * Adds nested create feature
 * @export
 * @interface RecipeSimple
 */
export interface RecipeSimple {
    /**
     * 
     * @type {number}
     * @memberof RecipeSimple
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RecipeSimple
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RecipeSimple
     */
    readonly url: string;
}

/**
 * Check if a given object implements the RecipeSimple interface.
 */
export function instanceOfRecipeSimple(value: object): value is RecipeSimple {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('url' in value) || value['url'] === undefined) return false;
    return true;
}

export function RecipeSimpleFromJSON(json: any): RecipeSimple {
    return RecipeSimpleFromJSONTyped(json, false);
}

export function RecipeSimpleFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecipeSimple {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'],
        'url': json['url'],
    };
}

export function RecipeSimpleToJSON(value?: Omit<RecipeSimple, 'url'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
    };
}
// ----------------------------------------------------------------------
// Custom model functions added by custom openapi-generator template
// ----------------------------------------------------------------------
import {ApiApi, ApiRecipeSimpleListRequest, PaginatedRecipeSimpleList} from "@/openapi";

/**
 * query list endpoint using the provided request parameters
 */
export function list(requestParameters: ApiRecipeSimpleListRequest = {}): Promise<PaginatedRecipeSimpleList> {
    const api = new ApiApi()
    return api.apiRecipeSimpleList(requestParameters)
}
