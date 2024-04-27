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
 * @interface PatchedMealType
 */
export interface PatchedMealType {
    /**
     * 
     * @type {number}
     * @memberof PatchedMealType
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedMealType
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedMealType
     */
    order?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedMealType
     */
    color?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedMealType
     */
    _default?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PatchedMealType
     */
    readonly createdBy?: number;
}

/**
 * Check if a given object implements the PatchedMealType interface.
 */
export function instanceOfPatchedMealType(value: object): boolean {
    return true;
}

export function PatchedMealTypeFromJSON(json: any): PatchedMealType {
    return PatchedMealTypeFromJSONTyped(json, false);
}

export function PatchedMealTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedMealType {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'order': json['order'] == null ? undefined : json['order'],
        'color': json['color'] == null ? undefined : json['color'],
        '_default': json['default'] == null ? undefined : json['default'],
        'createdBy': json['created_by'] == null ? undefined : json['created_by'],
    };
}

export function PatchedMealTypeToJSON(value?: PatchedMealType | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'order': value['order'],
        'color': value['color'],
        'default': value['_default'],
    };
}

