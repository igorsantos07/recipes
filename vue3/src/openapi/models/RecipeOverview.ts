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
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
    UserToJSONTyped,
} from './User';
import type { KeywordLabel } from './KeywordLabel';
import {
    KeywordLabelFromJSON,
    KeywordLabelFromJSONTyped,
    KeywordLabelToJSON,
    KeywordLabelToJSONTyped,
} from './KeywordLabel';

/**
 * Adds nested create feature
 * @export
 * @interface RecipeOverview
 */
export interface RecipeOverview {
    /**
     * 
     * @type {number}
     * @memberof RecipeOverview
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RecipeOverview
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RecipeOverview
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RecipeOverview
     */
    readonly image: string | null;
    /**
     * 
     * @type {Array<KeywordLabel>}
     * @memberof RecipeOverview
     */
    readonly keywords: Array<KeywordLabel>;
    /**
     * 
     * @type {number}
     * @memberof RecipeOverview
     */
    readonly workingTime: number;
    /**
     * 
     * @type {number}
     * @memberof RecipeOverview
     */
    readonly waitingTime: number;
    /**
     * 
     * @type {User}
     * @memberof RecipeOverview
     */
    readonly createdBy: User;
    /**
     * 
     * @type {Date}
     * @memberof RecipeOverview
     */
    readonly createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof RecipeOverview
     */
    readonly updatedAt: Date;
    /**
     * 
     * @type {boolean}
     * @memberof RecipeOverview
     */
    readonly internal: boolean;
    /**
     * 
     * @type {number}
     * @memberof RecipeOverview
     */
    readonly servings: number;
    /**
     * 
     * @type {string}
     * @memberof RecipeOverview
     */
    readonly servingsText: string;
    /**
     * 
     * @type {number}
     * @memberof RecipeOverview
     */
    readonly rating: number | null;
    /**
     * 
     * @type {Date}
     * @memberof RecipeOverview
     */
    readonly lastCooked: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof RecipeOverview
     */
    readonly _new: boolean;
    /**
     * 
     * @type {string}
     * @memberof RecipeOverview
     */
    readonly recent: string;
}

/**
 * Check if a given object implements the RecipeOverview interface.
 */
export function instanceOfRecipeOverview(value: object): value is RecipeOverview {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('image' in value) || value['image'] === undefined) return false;
    if (!('keywords' in value) || value['keywords'] === undefined) return false;
    if (!('workingTime' in value) || value['workingTime'] === undefined) return false;
    if (!('waitingTime' in value) || value['waitingTime'] === undefined) return false;
    if (!('createdBy' in value) || value['createdBy'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    if (!('internal' in value) || value['internal'] === undefined) return false;
    if (!('servings' in value) || value['servings'] === undefined) return false;
    if (!('servingsText' in value) || value['servingsText'] === undefined) return false;
    if (!('rating' in value) || value['rating'] === undefined) return false;
    if (!('lastCooked' in value) || value['lastCooked'] === undefined) return false;
    if (!('_new' in value) || value['_new'] === undefined) return false;
    if (!('recent' in value) || value['recent'] === undefined) return false;
    return true;
}

export function RecipeOverviewFromJSON(json: any): RecipeOverview {
    return RecipeOverviewFromJSONTyped(json, false);
}

export function RecipeOverviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecipeOverview {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'image': json['image'],
        'keywords': ((json['keywords'] as Array<any>).map(KeywordLabelFromJSON)),
        'workingTime': json['working_time'],
        'waitingTime': json['waiting_time'],
        'createdBy': UserFromJSON(json['created_by']),
        'createdAt': (new Date(json['created_at'])),
        'updatedAt': (new Date(json['updated_at'])),
        'internal': json['internal'],
        'servings': json['servings'],
        'servingsText': json['servings_text'],
        'rating': json['rating'],
        'lastCooked': (json['last_cooked'] == null ? null : new Date(json['last_cooked'])),
        '_new': json['new'],
        'recent': json['recent'],
    };
}

export function RecipeOverviewToJSON(json: any): RecipeOverview {
    return RecipeOverviewToJSONTyped(json, false);
}

export function RecipeOverviewToJSONTyped(value?: Omit<RecipeOverview, 'image'|'keywords'|'working_time'|'waiting_time'|'created_by'|'created_at'|'updated_at'|'internal'|'servings'|'servings_text'|'rating'|'last_cooked'|'new'|'recent'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'description': value['description'],
    };
}

