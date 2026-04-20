// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

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
    | (
        | boolean
        | string
        | number
        | null
        | DataTableRow[]
        | UploadedFile
        | string[]
        | RichText
        | Asset
      )
    | undefined;
}
export interface DataTableRow {
  type?: 'DataTableRow';
  id: string;
  data: ContextData1;
}
export interface ContextData1 {
  [k: string]:
    | (
        | boolean
        | string
        | number
        | null
        | DataTableRow[]
        | UploadedFile
        | string[]
        | RichText
        | Asset
      )
    | undefined;
}
export interface UploadedFile {
  type?: 'UploadedFile';
  fileId: string;
}
export interface RichText {
  type: 'RichText';
  delta: Delta;
}
export interface Delta {
  ops: {
    insert:
      | string
      | {
          [k: string]: unknown | undefined;
        };
    attributes?: {
      [k: string]: unknown | undefined;
    };
  }[];
}
export interface Asset {
  type: 'Asset';
  assetId: string;
  variantId: string;
}
