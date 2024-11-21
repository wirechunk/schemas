// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

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
