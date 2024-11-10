// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export type BeforeEditSiteResult =
  | {
      value: BeforeEditSiteValue;
      /**
       * If true, this is the last handler that will be called for the hook, and the result value will be used as the final result.
       */
      stop?: boolean | null;
    }
  | HookRejectResult;
export type CustomField =
  | BooleanCustomField
  | IntCustomField
  | RichTextCustomField
  | StringCustomField
  | OptionalBooleanCustomField
  | OptionalIntCustomField
  | OptionalRichTextCustomField
  | OptionalStringCustomField;
export type RichText = Delta;

export interface BeforeEditSiteValue {
  name: string;
  domain: string;
  /**
   * The ID of the org that will own the site.
   */
  orgId?: string;
  customFields: CustomField[];
}
export interface BooleanCustomField {
  type: 'Boolean';
  key: string;
  value: boolean;
}
export interface IntCustomField {
  type: 'Int';
  key: string;
  value: number;
}
export interface RichTextCustomField {
  type: 'RichText';
  key: string;
  value: RichText;
}
export interface Delta {
  delta: {
    ops: {
      insert: string | {};
      attributes?: {};
    }[];
  };
}
export interface StringCustomField {
  type: 'String';
  key: string;
  value: string;
}
export interface OptionalBooleanCustomField {
  type: 'OptionalBoolean';
  key: string;
  value: boolean | null;
}
export interface OptionalIntCustomField {
  type: 'OptionalInt';
  key: string;
  value: number | null;
}
export interface OptionalRichTextCustomField {
  type: 'OptionalRichText';
  key: string;
  value: RichText | null;
}
export interface OptionalStringCustomField {
  type: 'OptionalString';
  key: string;
  value: string | null;
}
export interface HookRejectResult {
  reject: string;
}
