// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export interface BeforeSubmitFormWebhookInput {
  value: BeforeSubmitFormWebhookValue;
  context: BeforeSubmitFormWebhookContext;
}
export interface BeforeSubmitFormWebhookValue {
  payload: {
    formId: string;
    formSubmissionSessionId: string;
    /**
     * The submission data from all of the steps, or just from the form itself if there are no steps.
     */
    formData: {
      [k: string]: unknown | undefined;
    };
    /**
     * Whether this submission came from the final step of the form. This is set to true if the form doesn't have any steps.
     */
    finalStep: boolean;
    /**
     * The full URL of the page where the form was submitted.
     */
    submissionPageUrl: string | null;
    /**
     * The timestamp of the submission.
     */
    createdAt: string;
    /**
     * The IP address from which the submission was made.
     */
    submitterIpAddress: string | null;
    submitterUser: {
      id: string;
      email: string;
      firstName: string;
      lastName: string;
    } | null;
    /**
     * The latest submissions for the same session by step. The idea behind “latest” is that users can submit a step and then go back and change their input, if the form allows it. This is an empty array if the form has no steps.
     */
    latestSubmissionsByStep: {
      /**
       * The ID of the form submission.
       */
      id: string;
      step: {
        /**
         * The ID of the step.
         */
        id: string;
        /**
         * The name of the step.
         */
        name: string;
        /**
         * The relative position of the step in the form, a string that can be be used to sort the steps lexicographically.
         */
        position: string;
      };
      /**
       * The submission data from just the step.
       */
      formData: {
        [k: string]: unknown | undefined;
      };
      /**
       * The IP address from which the submission was made.
       */
      submitterIpAddress: string | null;
      /**
       * The timestamp of the submission.
       */
      createdAt: string;
    }[];
    [k: string]: unknown | undefined;
  };
}
/**
 * The context of the form submission webhook action.
 */
export interface BeforeSubmitFormWebhookContext {
  /**
   * The ID of the form submission action being executed.
   */
  formSubmissionActionId: string;
}
