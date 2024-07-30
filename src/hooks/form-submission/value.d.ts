// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export interface FormSubmissionValue {
  form: {
    id: string;
    title: string;
  };
  formData: ContextData;
  sessionId: string;
  stepId?: string;
  finalStep: boolean;
  submitterIpAddress?: string;
  /**
   * Whether the form submission should be saved to the database. If there are multiple extensions handling this hook, the value of the last hook is used.
   */
  saveToDatabase: boolean;
  user?: {
    id: string;
  };
  site: {
    id: string;
    domain: string;
  };
}
/**
 * The data that was submitted in the form.
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
