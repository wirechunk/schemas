// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

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
}
export interface BeforeCreateSiteContext {
  user: RequestContextUser;
  site: RequestContextSite;
}
/**
 * The user making the request.
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
