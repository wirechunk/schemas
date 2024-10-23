// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export type BeforeCreateSiteResult =
  | {
      value: BeforeCreateSiteValue;
      /**
       * If true, this is the last handler that will be called for the hook, and the result value will be used as the final result.
       */
      stop?: boolean | null;
    }
  | HookRejectResult;
export type CustomField = BooleanCustomField | IntCustomField | StringCustomField;

export interface BeforeCreateSiteValue {
  name: string;
  domain?: string;
  /**
   * The ID of the org that will own the site.
   */
  orgId?: string;
  customFields: CustomField[];
}
export interface BooleanCustomField {
  type: 'Boolean';
  key: string;
  value: string;
}
export interface IntCustomField {
  type: 'Int';
  key: string;
  value: string;
}
export interface StringCustomField {
  type: 'String';
  key: string;
  value: string;
}
export interface HookRejectResult {
  reject: string;
}
