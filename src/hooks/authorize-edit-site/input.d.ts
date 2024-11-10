// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export type AuthorizeEditSiteValue =
  | {
      ok: true;
    }
  | {
      ok: false;
      message: string;
    };

export interface AuthorizeEditSiteInput {
  value: AuthorizeEditSiteValue;
  context: AuthorizeEditSiteContext;
}
export interface AuthorizeEditSiteContext {
  input: {
    /**
     * The ID of the site being edited.
     */
    id: string;
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
