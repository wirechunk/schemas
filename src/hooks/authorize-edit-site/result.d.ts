// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export type AuthorizeEditSiteValue =
  | {
      ok: true;
    }
  | {
      ok: false;
      message: string;
    };

export interface AuthorizeEditSiteResult {
  value: AuthorizeEditSiteValue;
  /**
   * If true, this is the last handler that will be called for the hook, and the result value will be used as the final result.
   */
  stop?: boolean | null;
}
