// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export interface AfterEditUserStatusValue {
  /**
   * The user whose status was changed.
   */
  user: {
    /**
     * The ID of the user whose status was changed.
     */
    id: string;
    /**
     * The new status of the user.
     */
    status: string;
    /**
     * The previous status of the user.
     */
    previousStatus: string;
  };
}
