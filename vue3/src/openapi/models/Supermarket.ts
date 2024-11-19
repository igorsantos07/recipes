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
import type { SupermarketCategoryRelation } from './SupermarketCategoryRelation';
import {
    SupermarketCategoryRelationFromJSON,
    SupermarketCategoryRelationFromJSONTyped,
    SupermarketCategoryRelationToJSON,
} from './SupermarketCategoryRelation';

/**
 * Moves `UniqueValidator`'s from the validation stage to the save stage.
 * It solves the problem with nested validation for unique fields on update.
 * 
 * If you want more details, you can read related issues and articles:
 * https://github.com/beda-software/drf-writable-nested/issues/1
 * http://www.django-rest-framework.org/api-guide/validators/#updating-nested-serializers
 * 
 * Example of usage:
 * ```
 *     class Child(models.Model):
 *     field = models.CharField(unique=True)
 * 
 * 
 * class Parent(models.Model):
 *     child = models.ForeignKey('Child')
 * 
 * 
 * class ChildSerializer(UniqueFieldsMixin, serializers.ModelSerializer):
 *     class Meta:
 *         model = Child
 * 
 * 
 * class ParentSerializer(NestedUpdateMixin, serializers.ModelSerializer):
 *     child = ChildSerializer()
 * 
 *     class Meta:
 *         model = Parent
 * ```
 * 
 * Note: `UniqueFieldsMixin` must be applied only on the serializer
 * which has unique fields.
 * 
 * Note: When you are using both mixins
 * (`UniqueFieldsMixin` and `NestedCreateMixin` or `NestedUpdateMixin`)
 * you should put `UniqueFieldsMixin` ahead.
 * @export
 * @interface Supermarket
 */
export interface Supermarket {
    /**
     * 
     * @type {number}
     * @memberof Supermarket
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Supermarket
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Supermarket
     */
    description?: string | null;
    /**
     * 
     * @type {Array<SupermarketCategoryRelation>}
     * @memberof Supermarket
     */
    readonly categoryToSupermarket: Array<SupermarketCategoryRelation>;
    /**
     * 
     * @type {string}
     * @memberof Supermarket
     */
    openDataSlug?: string | null;
}

/**
 * Check if a given object implements the Supermarket interface.
 */
export function instanceOfSupermarket(value: object): value is Supermarket {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('categoryToSupermarket' in value) || value['categoryToSupermarket'] === undefined) return false;
    return true;
}

export function SupermarketFromJSON(json: any): Supermarket {
    return SupermarketFromJSONTyped(json, false);
}

export function SupermarketFromJSONTyped(json: any, ignoreDiscriminator: boolean): Supermarket {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'categoryToSupermarket': ((json['category_to_supermarket'] as Array<any>).map(SupermarketCategoryRelationFromJSON)),
        'openDataSlug': json['open_data_slug'] == null ? undefined : json['open_data_slug'],
    };
}

export function SupermarketToJSON(value?: Omit<Supermarket, 'category_to_supermarket'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'description': value['description'],
        'open_data_slug': value['openDataSlug'],
    };
}
// ----------------------------------------------------------------------
// Custom model functions added by custom openapi-generator template
// ----------------------------------------------------------------------
import {ApiApi, ApiSupermarketListRequest, PaginatedSupermarketList} from "@/openapi";

/**
 * query list endpoint using the provided request parameters
 */
export function list(requestParameters: ApiSupermarketListRequest = {}): Promise<PaginatedSupermarketList> {
    const api = new ApiApi()
    return api.apiSupermarketList(requestParameters)
}
