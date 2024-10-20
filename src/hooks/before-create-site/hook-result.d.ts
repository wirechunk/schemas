// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export type BeforeCreateSiteHookResult =
  | BeforeCreateSiteHookResultContinue
  | BeforeCreateSiteHookResultStop;

export interface BeforeCreateSiteHookResultContinue {
  continue: BeforeCreateSiteValue;
}
export interface BeforeCreateSiteValue {
  input: {
    name: string;
    domain?: string;
    /**
     * The ID of the org that will own the site.
     */
    orgId?: string;
  };
  requestContext: {
    /**
     * The user making the request.
     */
    user: {
      id: string;
    };
    /**
     * The site from which the request originated.
     */
    site: {
      id: string;
      domain: string;
    };
  };
}
export interface BeforeCreateSiteHookResultStop {
  stop: BeforeCreateSiteStopValue;
}
export interface BeforeCreateSiteStopValue {
  action: 'reject';
  /**
   * Do not create a site. Respond with an error message that will be shown to the user.
   */
  message: string;
}
