// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

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
