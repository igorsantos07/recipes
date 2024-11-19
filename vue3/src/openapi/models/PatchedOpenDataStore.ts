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
import type { OpenDataStoreCategory } from './OpenDataStoreCategory';
import {
    OpenDataStoreCategoryFromJSON,
    OpenDataStoreCategoryFromJSONTyped,
    OpenDataStoreCategoryToJSON,
} from './OpenDataStoreCategory';
import type { OpenDataVersion } from './OpenDataVersion';
import {
    OpenDataVersionFromJSON,
    OpenDataVersionFromJSONTyped,
    OpenDataVersionToJSON,
} from './OpenDataVersion';

/**
 * Adds nested create feature
 * @export
 * @interface PatchedOpenDataStore
 */
export interface PatchedOpenDataStore {
    /**
     * 
     * @type {number}
     * @memberof PatchedOpenDataStore
     */
    id?: number;
    /**
     * 
     * @type {OpenDataVersion}
     * @memberof PatchedOpenDataStore
     */
    version?: OpenDataVersion;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataStore
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataStore
     */
    name?: string;
    /**
     * 
     * @type {Array<OpenDataStoreCategory>}
     * @memberof PatchedOpenDataStore
     */
    categoryToStore?: Array<OpenDataStoreCategory> | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataStore
     */
    comment?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataStore
     */
    readonly createdBy?: string;
}

/**
 * Check if a given object implements the PatchedOpenDataStore interface.
 */
export function instanceOfPatchedOpenDataStore(value: object): value is PatchedOpenDataStore {
    return true;
}

export function PatchedOpenDataStoreFromJSON(json: any): PatchedOpenDataStore {
    return PatchedOpenDataStoreFromJSONTyped(json, false);
}

export function PatchedOpenDataStoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedOpenDataStore {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'version': json['version'] == null ? undefined : OpenDataVersionFromJSON(json['version']),
        'slug': json['slug'] == null ? undefined : json['slug'],
        'name': json['name'] == null ? undefined : json['name'],
        'categoryToStore': json['category_to_store'] == null ? undefined : ((json['category_to_store'] as Array<any>).map(OpenDataStoreCategoryFromJSON)),
        'comment': json['comment'] == null ? undefined : json['comment'],
        'createdBy': json['created_by'] == null ? undefined : json['created_by'],
    };
}

export function PatchedOpenDataStoreToJSON(value?: Omit<PatchedOpenDataStore, 'created_by'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'version': OpenDataVersionToJSON(value['version']),
        'slug': value['slug'],
        'name': value['name'],
        'category_to_store': value['categoryToStore'] == null ? undefined : ((value['categoryToStore'] as Array<any>).map(OpenDataStoreCategoryToJSON)),
        'comment': value['comment'],
    };
}
// ----------------------------------------------------------------------
// Custom model functions added by custom openapi-generator template
// ----------------------------------------------------------------------
import {ApiApi, ApiPatchedOpenDataStoreListRequest, PaginatedPatchedOpenDataStoreList} from "@/openapi";

/**
 * query list endpoint using the provided request parameters
 */
export function list(requestParameters: ApiPatchedOpenDataStoreListRequest = {}): Promise<PaginatedPatchedOpenDataStoreList> {
    const api = new ApiApi()
    return api.apiPatchedOpenDataStoreList(requestParameters)
}
