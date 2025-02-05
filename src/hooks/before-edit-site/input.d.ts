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
/**
 * The context of the request.
 */
export type BeforeEditSiteContext = BaseRequestContext & Principal & Site;

export interface BeforeEditSiteInput {
  value: BeforeEditSiteValue;
  context: BeforeEditSiteContext;
}
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
export interface BaseRequestContext {
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
export interface Principal {
  principal:
    | {
        user: User;
        adminUser?: null;
        platformApiToken?: null;
      }
    | {
        user?: null;
        adminUser: AdminUser;
        platformApiToken?: null;
      }
    | {
        user?: null;
        adminUser?: null;
        platformApiToken: PlatformApiToken;
      }
    | null;
}
/**
 * The user making the request. This is a regular user who belongs to the platform on which the request is being made.
 */
export interface User {
  id: string;
}
/**
 * The admin user making the request. Extensions do not see this user in the Users table.
 */
export interface AdminUser {
  id: string;
  email: string;
}
/**
 * The platform API token that can be used to authenticate requests. This token is not tied to an admin or regular user.
 */
export interface PlatformApiToken {
  id: string;
}
export interface Site {
  /**
   * The site from which the request originated. This field will be set only if the site belongs to the platform on which the extension is installed (is not the admin site).
   */
  site?: {
    id: string;
  };
}
