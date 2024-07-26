/**
 * A HookResult is the type of the response that a hook returns. It signals either to continue
 * execution of the hook chain or to stop execution with a specific action.
 */
export type HookResult<TValue, TStopAction> =
  | HookResultContinue<TValue>
  | HookResultStop<TValue, TStopAction>;

export type HookResultContinue<TValue> = {
  continue: true;
  value: TValue;
};

export type HookResultStop<TValue, TStopAction> = {
  continue: false;
  value?: TValue;
  stopAction: TStopAction;
};
