// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export type InitialFormDataContext = BaseRequestContext & {
  form: {
    id: string;
  };
  /**
   * The full URL of the page where the form is being shown.
   */
  pageUrl: string;
};

export interface BaseRequestContext {
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
