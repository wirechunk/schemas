// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export type FormSubmissionHookResult =
  | FormSubmissionHookResultContinue
  | FormSubmissionHookResultStop;
export type FormSubmissionStopAction =
  | FormSubmissionStopActionReject
  | FormSubmissionStopActionSkipSave;

export interface FormSubmissionHookResultContinue {
  continue: true;
  value: FormSubmissionValue;
}
export interface FormSubmissionValue {
  form: {
    id: string;
    title: string;
  };
  formData: ContextData;
  sessionId: string;
  userId?: string;
  stepId?: string;
  finalStep: boolean;
  submitterIpAddress?: string;
  site?: {
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
export interface FormSubmissionHookResultStop {
  continue: false;
  value?: FormSubmissionValue;
  stopAction: FormSubmissionStopAction;
}
/**
 * Do not save the form submission. Respond with an error message that will be shown to the end-user. This is a terminating response.
 */
export interface FormSubmissionStopActionReject {
  action: 'reject';
  message: string;
}
/**
 * Continue to other hooks (if any), but do not save the form submission. This is a terminating response.
 */
export interface FormSubmissionStopActionSkipSave {
  action: 'skipSave';
}
