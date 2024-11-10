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
   * The full URL of the page where the form is being shown.
   */
  pageUrl: string;
  user?: RequestContextUser;
  site: RequestContextSite;
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
