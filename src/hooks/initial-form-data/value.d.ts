// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export interface InitialFormDataValue {
  form: {
    id: string;
    title: string;
  };
  formData: ContextData;
  userId?: string;
  site: {
    id: string;
    domain: string;
  };
}
/**
 * The initial data for the form.
 */
export interface ContextData {
  [k: string]:
    | (boolean | string | number | null | TimeDuration | DataTableRow[] | UploadedFile | string[])
    | undefined;
}
export interface TimeDuration {
  hours: number | null;
  minutes: number | null;
}
export interface DataTableRow {
  id: string;
  data: ContextData1;
}
export interface ContextData1 {
  [k: string]:
    | (boolean | string | number | null | TimeDuration | DataTableRow[] | UploadedFile | string[])
    | undefined;
}
export interface UploadedFile {
  fileId: string;
}