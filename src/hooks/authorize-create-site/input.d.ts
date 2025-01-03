// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

/**
 * An object indicating whether a user is authorized to perform a specific action. The initial value is determined by the user’s permissions on the platform on which the action is being made.
 */
export type AuthorizeCreateSiteValue =
  | {
      ok: true;
    }
  | {
      ok: false;
      message: string;
    };

export interface AuthorizeCreateSiteInput {
  value: AuthorizeCreateSiteValue;
  context: AuthorizeCreateSiteContext;
}
/**
 * The context of the request. Either adminUser or user will be set.
 */
export interface AuthorizeCreateSiteContext {
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
