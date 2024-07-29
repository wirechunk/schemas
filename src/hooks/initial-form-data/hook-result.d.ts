// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export type InitialFormDataHookResult =
  | InitialFormDataHookResultContinue
  | InitialFormDataHookResultStop;

export interface InitialFormDataHookResultContinue {
  continue: true;
  value: InitialFormDataValue;
}
export interface InitialFormDataValue {
  form: {
    id: string;
    title: string;
  };
  formData: ContextData;
  page?: {
    id: string;
    /**
     * The full path (i.e., pathname) of the page, including the leading slash, where the form is being shown.
     */
    path: string;
  };
  user?: {
    id: string;
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
  continue: false;
  value?: InitialFormDataValue;
  stopAction: InitialFormDataStopAction;
}
export interface InitialFormDataStopAction {}
