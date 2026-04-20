// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export type DataValue =
  | (boolean | string | number | null | DataTableRow[] | UploadedFile | string[] | RichText | Asset)
  | undefined;

export interface ContextData {
  [k: string]: DataValue | undefined;
}
export interface DataTableRow {
  type?: 'DataTableRow';
  id: string;
  data: ContextData;
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
