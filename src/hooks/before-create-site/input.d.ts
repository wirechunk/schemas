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

export interface BeforeCreateSiteInput {
  value: BeforeCreateSiteValue;
  context: BeforeCreateSiteContext;
}
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
/**
 * The context of the request. Either adminUser or user will be set.
 */
export interface BeforeCreateSiteContext {
  /**
   * The admin user making the request. Extensions do not see this user in the Users table.
   */
  adminUser?: {
    id: string;
    email: string;
  };
  /**
   * The user making the request. This user belongs to the platform on which the request is being made.
   */
  user?: {
    id: string;
  };
  /**
   * The site from which the request originated. This field will be set only if the site belongs to the platform (is not the admin site).
   */
  site?: {
    id: string;
  };
}
