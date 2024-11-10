// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

/**
 * The admin user making the request. Extensions do not see this user in the Users table.
 */
export interface RequestContextAdminUser {
  id: string;
  email: string;
  permissions: string[];
}
