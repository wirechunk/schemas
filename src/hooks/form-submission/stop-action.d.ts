// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export type FormSubmissionStopAction =
  | FormSubmissionStopActionReject
  | FormSubmissionStopActionSkipSave;

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
