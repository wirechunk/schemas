// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

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
  /**
   * The new name. If this field is not set, the name is not being edited.
   */
  name?: {
    value: string;
  };
  /**
   * The new domain. If this field is not set, the domain is not being edited.
   */
  domain?: {
    value: string;
  };
  /**
   * The new ID of the org that will own the site. If this field is not set, the org is not being edited.
   */
  orgId?: {
    value: string;
  };
  /**
   * The custom fields to edit. If this field is not set or is an empty array, no custom fields are being edited.
   */
  customFields?: CustomField[];
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
