// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export interface BeforeSubmitFormContext {
  sessionId: string;
  stepId?: string;
  finalStep: boolean;
  submitterIpAddress?: string;
  form: {
    id: string;
  };
  /**
   * The page where the form is being shown.
   */
  page: {
    id: string;
    /**
     * The path of the page as saved in the database. This does not include a leading slash.
     */
    path: string;
  };
  user?: RequestContextUser;
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
