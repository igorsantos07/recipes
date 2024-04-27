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
import type { AutomationTypeEnum } from './AutomationTypeEnum';
import {
    AutomationTypeEnumFromJSON,
    AutomationTypeEnumFromJSONTyped,
    AutomationTypeEnumToJSON,
} from './AutomationTypeEnum';

/**
 * 
 * @export
 * @interface Automation
 */
export interface Automation {
    /**
     * 
     * @type {number}
     * @memberof Automation
     */
    id?: number;
    /**
     * 
     * @type {AutomationTypeEnum}
     * @memberof Automation
     */
    type: AutomationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Automation
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Automation
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Automation
     */
    param1?: string;
    /**
     * 
     * @type {string}
     * @memberof Automation
     */
    param2?: string;
    /**
     * 
     * @type {string}
     * @memberof Automation
     */
    param3?: string;
    /**
     * 
     * @type {number}
     * @memberof Automation
     */
    order?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Automation
     */
    disabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Automation
     */
    readonly createdBy: number;
}

/**
 * Check if a given object implements the Automation interface.
 */
export function instanceOfAutomation(value: object): boolean {
    if (!('type' in value)) return false;
    if (!('createdBy' in value)) return false;
    return true;
}

export function AutomationFromJSON(json: any): Automation {
    return AutomationFromJSONTyped(json, false);
}

export function AutomationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Automation {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'type': AutomationTypeEnumFromJSON(json['type']),
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'param1': json['param_1'] == null ? undefined : json['param_1'],
        'param2': json['param_2'] == null ? undefined : json['param_2'],
        'param3': json['param_3'] == null ? undefined : json['param_3'],
        'order': json['order'] == null ? undefined : json['order'],
        'disabled': json['disabled'] == null ? undefined : json['disabled'],
        'createdBy': json['created_by'],
    };
}

export function AutomationToJSON(value?: Automation | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'type': AutomationTypeEnumToJSON(value['type']),
        'name': value['name'],
        'description': value['description'],
        'param_1': value['param1'],
        'param_2': value['param2'],
        'param_3': value['param3'],
        'order': value['order'],
        'disabled': value['disabled'],
    };
}

