// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

/**
 * An object indicating whether a user is authorized to perform a specific action. The initial value is determined by the user’s permissions on the platform on which the action is being made.
 */
export type AuthorizeHookResult =
  | {
      ok: true;
    }
  | {
      ok: false;
      message: string;
    };
