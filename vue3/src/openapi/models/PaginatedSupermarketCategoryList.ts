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
import type { SupermarketCategory } from './SupermarketCategory';
import {
    SupermarketCategoryFromJSON,
    SupermarketCategoryFromJSONTyped,
    SupermarketCategoryToJSON,
} from './SupermarketCategory';

/**
 * 
 * @export
 * @interface PaginatedSupermarketCategoryList
 */
export interface PaginatedSupermarketCategoryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedSupermarketCategoryList
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedSupermarketCategoryList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedSupermarketCategoryList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<SupermarketCategory>}
     * @memberof PaginatedSupermarketCategoryList
     */
    results: Array<SupermarketCategory>;
    /**
     * 
     * @type {Date}
     * @memberof PaginatedSupermarketCategoryList
     */
    timestamp?: Date;
}

/**
 * Check if a given object implements the PaginatedSupermarketCategoryList interface.
 */
export function instanceOfPaginatedSupermarketCategoryList(value: object): value is PaginatedSupermarketCategoryList {
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('results' in value) || value['results'] === undefined) return false;
    return true;
}

export function PaginatedSupermarketCategoryListFromJSON(json: any): PaginatedSupermarketCategoryList {
    return PaginatedSupermarketCategoryListFromJSONTyped(json, false);
}

export function PaginatedSupermarketCategoryListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedSupermarketCategoryList {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'],
        'next': json['next'] == null ? undefined : json['next'],
        'previous': json['previous'] == null ? undefined : json['previous'],
        'results': ((json['results'] as Array<any>).map(SupermarketCategoryFromJSON)),
        'timestamp': json['timestamp'] == null ? undefined : (new Date(json['timestamp'])),
    };
}

export function PaginatedSupermarketCategoryListToJSON(value?: PaginatedSupermarketCategoryList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
        'next': value['next'],
        'previous': value['previous'],
        'results': ((value['results'] as Array<any>).map(SupermarketCategoryToJSON)),
        'timestamp': value['timestamp'] == null ? undefined : ((value['timestamp']).toISOString()),
    };
}
// ----------------------------------------------------------------------
// Custom model functions added by custom openapi-generator template
// ----------------------------------------------------------------------
import {ApiApi, ApiPaginatedSupermarketCategoryListListRequest, PaginatedPaginatedSupermarketCategoryListList} from "@/openapi";

/**
 * query list endpoint using the provided request parameters
 */
export function list(requestParameters: ApiPaginatedSupermarketCategoryListListRequest = {}): Promise<PaginatedPaginatedSupermarketCategoryListList> {
    const api = new ApiApi()
    return api.apiPaginatedSupermarketCategoryListList(requestParameters)
}
