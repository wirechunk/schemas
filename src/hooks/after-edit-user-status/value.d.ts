// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

/**
 * The new status of the user.
 */
export type UserStatus = 'Pending' | 'Active' | 'Deactivated';
/**
 * The previous status of the user.
 */
export type UserStatus1 = 'Pending' | 'Active' | 'Deactivated';

export interface AfterEditUserStatusValue {
  /**
   * The user whose status was changed.
   */
  user: {
    /**
     * The ID of the user whose status was changed.
     */
    id: string;
    status: UserStatus;
    previousStatus: UserStatus1;
  };
}
