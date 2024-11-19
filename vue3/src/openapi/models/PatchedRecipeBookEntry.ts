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
import type { RecipeBook } from './RecipeBook';
import {
    RecipeBookFromJSON,
    RecipeBookFromJSONTyped,
    RecipeBookToJSON,
} from './RecipeBook';
import type { RecipeOverview } from './RecipeOverview';
import {
    RecipeOverviewFromJSON,
    RecipeOverviewFromJSONTyped,
    RecipeOverviewToJSON,
} from './RecipeOverview';

/**
 * 
 * @export
 * @interface PatchedRecipeBookEntry
 */
export interface PatchedRecipeBookEntry {
    /**
     * 
     * @type {number}
     * @memberof PatchedRecipeBookEntry
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedRecipeBookEntry
     */
    book?: number;
    /**
     * 
     * @type {RecipeBook}
     * @memberof PatchedRecipeBookEntry
     */
    readonly bookContent?: RecipeBook;
    /**
     * 
     * @type {number}
     * @memberof PatchedRecipeBookEntry
     */
    recipe?: number;
    /**
     * 
     * @type {RecipeOverview}
     * @memberof PatchedRecipeBookEntry
     */
    readonly recipeContent?: RecipeOverview;
}

/**
 * Check if a given object implements the PatchedRecipeBookEntry interface.
 */
export function instanceOfPatchedRecipeBookEntry(value: object): value is PatchedRecipeBookEntry {
    return true;
}

export function PatchedRecipeBookEntryFromJSON(json: any): PatchedRecipeBookEntry {
    return PatchedRecipeBookEntryFromJSONTyped(json, false);
}

export function PatchedRecipeBookEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedRecipeBookEntry {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'book': json['book'] == null ? undefined : json['book'],
        'bookContent': json['book_content'] == null ? undefined : RecipeBookFromJSON(json['book_content']),
        'recipe': json['recipe'] == null ? undefined : json['recipe'],
        'recipeContent': json['recipe_content'] == null ? undefined : RecipeOverviewFromJSON(json['recipe_content']),
    };
}

export function PatchedRecipeBookEntryToJSON(value?: Omit<PatchedRecipeBookEntry, 'book_content'|'recipe_content'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'book': value['book'],
        'recipe': value['recipe'],
    };
}
// ----------------------------------------------------------------------
// Custom model functions added by custom openapi-generator template
// ----------------------------------------------------------------------
import {ApiApi, ApiPatchedRecipeBookEntryListRequest, PaginatedPatchedRecipeBookEntryList} from "@/openapi";

/**
 * query list endpoint using the provided request parameters
 */
export function list(requestParameters: ApiPatchedRecipeBookEntryListRequest = {}): Promise<PaginatedPatchedRecipeBookEntryList> {
    const api = new ApiApi()
    return api.apiPatchedRecipeBookEntryList(requestParameters)
}
