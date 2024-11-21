// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export interface BeforeCreateUserInput {
  value: BeforeCreateUserValue;
  context: BeforeCreateUserContext;
}
export interface BeforeCreateUserValue {
  email: string;
  firstName: string;
  lastName: string;
  /**
   * The ID of the org that the user will be under.
   */
  orgId?: string;
  status: 'Pending' | 'Active' | 'Deactivated';
}
/**
 * The context of the request. Either adminUser or user will be set.
 */
export interface BeforeCreateUserContext {
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
