// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export type BeforeCreateUserResult =
  | {
      value: BeforeCreateUserValue;
      /**
       * If true, this is the last handler that will be called for the hook, and the result value will be used as the final result.
       */
      stop?: boolean | null;
    }
  | HookRejectResult;

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
export interface HookRejectResult {
  reject: string;
}
