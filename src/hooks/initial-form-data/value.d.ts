// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export interface InitialFormDataValue {
  formData: ContextData;
}
/**
 * The initial data for the form.
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
