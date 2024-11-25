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
import type { Automation } from './Automation';
import {
    AutomationFromJSON,
    AutomationFromJSONTyped,
    AutomationToJSON,
} from './Automation';

/**
 * 
 * @export
 * @interface PaginatedAutomationList
 */
export interface PaginatedAutomationList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedAutomationList
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedAutomationList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedAutomationList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Automation>}
     * @memberof PaginatedAutomationList
     */
    results: Array<Automation>;
    /**
     * 
     * @type {Date}
     * @memberof PaginatedAutomationList
     */
    timestamp?: Date;
}

/**
 * Check if a given object implements the PaginatedAutomationList interface.
 */
export function instanceOfPaginatedAutomationList(value: object): value is PaginatedAutomationList {
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('results' in value) || value['results'] === undefined) return false;
    return true;
}

export function PaginatedAutomationListFromJSON(json: any): PaginatedAutomationList {
    return PaginatedAutomationListFromJSONTyped(json, false);
}

export function PaginatedAutomationListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedAutomationList {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'],
        'next': json['next'] == null ? undefined : json['next'],
        'previous': json['previous'] == null ? undefined : json['previous'],
        'results': ((json['results'] as Array<any>).map(AutomationFromJSON)),
        'timestamp': json['timestamp'] == null ? undefined : (new Date(json['timestamp'])),
    };
}

export function PaginatedAutomationListToJSON(value?: PaginatedAutomationList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
        'next': value['next'],
        'previous': value['previous'],
        'results': ((value['results'] as Array<any>).map(AutomationToJSON)),
        'timestamp': value['timestamp'] == null ? undefined : ((value['timestamp']).toISOString()),
    };
}
// ----------------------------------------------------------------------
// Custom model functions added by custom openapi-generator template
// ----------------------------------------------------------------------
import {ApiApi, ApiPaginatedAutomationListListRequest, PaginatedPaginatedAutomationListList} from "@/openapi";

/**
 * query list endpoint using the provided request parameters
 */
export function list(requestParameters: ApiPaginatedAutomationListListRequest = {}): Promise<PaginatedPaginatedAutomationListList> {
    const api = new ApiApi()
    return api.apiPaginatedAutomationListList(requestParameters)
}
