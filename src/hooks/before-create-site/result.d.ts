// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export type BeforeCreateSiteResult =
  | {
      value: BeforeCreateSiteValue;
      /**
       * If true, this is the last handler that will be called for the hook, and the result value will be used as the final result.
       */
      stop?: boolean | null;
    }
  | HookRejectResult;

export interface BeforeCreateSiteValue {
  name: string;
  domain?: string;
  /**
   * The ID of the org that will own the site.
   */
  orgId?: string;
}
export interface HookRejectResult {
  reject: string;
}
