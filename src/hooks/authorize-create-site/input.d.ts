// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

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
export interface AuthorizeCreateSiteContext {
  input: {
    name: string;
    domain?: string;
  };
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
