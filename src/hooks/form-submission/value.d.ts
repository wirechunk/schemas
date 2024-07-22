// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export interface FormSubmissionValue {
  formId: string;
  formData: ContextData;
  sessionId: string;
  userId?: string;
  stepId?: string;
  finalStep: boolean;
  submitterIpAddress?: string;
}
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
  data: ContextData;
}
export interface UploadedFile {
  fileId: string;
}
