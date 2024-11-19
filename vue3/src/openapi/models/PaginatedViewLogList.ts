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
import type { ViewLog } from './ViewLog';
import {
    ViewLogFromJSON,
    ViewLogFromJSONTyped,
    ViewLogToJSON,
} from './ViewLog';

/**
 * 
 * @export
 * @interface PaginatedViewLogList
 */
export interface PaginatedViewLogList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedViewLogList
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedViewLogList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedViewLogList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<ViewLog>}
     * @memberof PaginatedViewLogList
     */
    results: Array<ViewLog>;
}

/**
 * Check if a given object implements the PaginatedViewLogList interface.
 */
export function instanceOfPaginatedViewLogList(value: object): value is PaginatedViewLogList {
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('results' in value) || value['results'] === undefined) return false;
    return true;
}

export function PaginatedViewLogListFromJSON(json: any): PaginatedViewLogList {
    return PaginatedViewLogListFromJSONTyped(json, false);
}

export function PaginatedViewLogListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedViewLogList {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'],
        'next': json['next'] == null ? undefined : json['next'],
        'previous': json['previous'] == null ? undefined : json['previous'],
        'results': ((json['results'] as Array<any>).map(ViewLogFromJSON)),
    };
}

export function PaginatedViewLogListToJSON(value?: PaginatedViewLogList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
        'next': value['next'],
        'previous': value['previous'],
        'results': ((value['results'] as Array<any>).map(ViewLogToJSON)),
    };
}
// ----------------------------------------------------------------------
// Custom model functions added by custom openapi-generator template
// ----------------------------------------------------------------------
import {ApiApi, ApiPaginatedViewLogListListRequest, PaginatedPaginatedViewLogListList} from "@/openapi";

/**
 * query list endpoint using the provided request parameters
 */
export function list(requestParameters: ApiPaginatedViewLogListListRequest = {}): Promise<PaginatedPaginatedViewLogListList> {
    const api = new ApiApi()
    return api.apiPaginatedViewLogListList(requestParameters)
}
