// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export type DataValue =
  | (boolean | string | number | null | DataTableRow[] | UploadedFile | string[])
  | undefined;

export interface ContextData {
  [k: string]: DataValue | undefined;
}
export interface DataTableRow {
  id: string;
  data: ContextData;
}
export interface UploadedFile {
  fileId: string;
}
