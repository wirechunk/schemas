// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export type BeforeSubmitFormResult =
  | {
      value: BeforeSubmitFormValue;
      /**
       * If true, this is the last handler that will be called for the hook, and the result value will be used as the final result.
       */
      stop?: boolean | null;
    }
  | HookRejectResult;

export interface BeforeSubmitFormValue {
  formData: ContextData;
  /**
   * Whether the form submission should be saved to the database. If there are multiple extensions handling this hook, the value of the last hook is used.
   */
  saveToDatabase: boolean;
}
/**
 * The data that was submitted in the form.
 */
export interface ContextData {
  [k: string]:
    | (boolean | string | number | null | DataTableRow[] | UploadedFile | string[])
    | undefined;
}
export interface DataTableRow {
  id: string;
  data: ContextData1;
}
export interface ContextData1 {
  [k: string]:
    | (boolean | string | number | null | DataTableRow[] | UploadedFile | string[])
    | undefined;
}
export interface UploadedFile {
  fileId: string;
}
export interface HookRejectResult {
  reject: string;
}
