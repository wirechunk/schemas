/**
 * A HookResult is the type of the response that a hook returns. It signals either to continue
 * execution of the hook chain or to stop with a specific value. The meaning of a stop result
 * depends on the specific hook.
 */
export type HookResult<ContinueValue, StopValue> =
  | HookResultContinue<ContinueValue>
  | HookResultStop<StopValue>;

export type HookResultContinue<ContinueValue> = {
  continue: ContinueValue;
};

export type HookResultStop<StopValue> = {
  stop: StopValue;
};
