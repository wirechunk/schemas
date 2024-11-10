// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

/**
 * The context of the request. Either adminUser or user will be set.
 */
export interface AuthorizeEditSiteContext {
  input: {
    /**
     * The ID of the site being edited.
     */
    id: string;
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
