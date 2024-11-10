// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

/**
 * An object indicating whether a user is authorized to perform a specific action. The initial value is determined by the user’s permissions on the platform where the action is happening.
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
 * The context of the createSite request. Either adminUser or user will be set.
 */
export interface AuthorizeCreateSiteContext {
  input: {
    name: string;
    domain?: string;
  };
  adminUser?: RequestContextAdminUser;
  user?: RequestContextUser;
  site: RequestContextSite;
}
/**
 * The admin user making the request. Extensions do not see this user in the Users table.
 */
export interface RequestContextAdminUser {
  id: string;
  email: string;
  permissions: string[];
}
/**
 * The user making the request. This user belongs to the platform on which the request is being made.
 */
export interface RequestContextUser {
  id: string;
}
/**
 * The site from which the request originated.
 */
export interface RequestContextSite {
  id: string;
  domain: string;
}
