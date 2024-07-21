// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export type FormSubmissionStopAction =
  | FormSubmissionStopActionReject
  | FormSubmissionStopActionSkipSave;

export interface FormSubmissionStopActionReject {
  action: 'reject';
  message: string;
}
export interface FormSubmissionStopActionSkipSave {
  action: 'skipSave';
}
