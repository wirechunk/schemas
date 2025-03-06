// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export type AfterEditUserStatusResult =
  | {
      value: AfterEditUserStatusValue;
      /**
       * If true, this is the last handler that will be called for the hook, and the result value will be used as the final result.
       */
      stop?: boolean | null;
    }
  | HookRejectResult;

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
export interface HookRejectResult {
  reject: string;
}
