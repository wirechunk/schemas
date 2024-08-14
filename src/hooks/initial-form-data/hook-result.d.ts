// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export type InitialFormDataHookResult =
  | InitialFormDataHookResultContinue
  | InitialFormDataHookResultStop;

export interface InitialFormDataHookResultContinue {
  continue: InitialFormDataValue;
}
export interface InitialFormDataValue {
  form: {
    id: string;
    title: string;
  };
  formData: ContextData;
  /**
   * The page where the form is being shown.
   */
  page: {
    id: string;
    /**
     * The path of the page as saved in the database. This does not include a leading slash.
     */
    path: string;
  };
  user?: {
    id: string;
    orgId: string;
  };
  /**
   * The site where the form is being shown.
   */
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
export interface InitialFormDataHookResultStop {
  stop: InitialFormDataValue;
}
