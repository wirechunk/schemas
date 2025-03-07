// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export type ArrayExpression =
  | ArrayLiteral
  | Filter1
  | InputChangeEventArrayValue1
  | InputDataArray1
  | Map1
  | PropsArray1
  | UserFeatureTags1;
export type Expression = ArrayExpression1 | BooleanExpression | NumberExpression | StringExpression;
export type ArrayExpression1 =
  | ArrayLiteral1
  | Filter
  | InputChangeEventArrayValue
  | InputDataArray
  | Map
  | PropsArray
  | UserFeatureTags;
export type BooleanExpression =
  | All
  | ArrayIncludes
  | BooleanValue
  | Both
  | GreaterThan
  | BooleanLiteral
  | Either
  | Equals
  | Exists
  | InputChangeEventBooleanValue
  | InputDataBoolean
  | Not
  | PropsBoolean
  | Some;
export type NumberExpression =
  | Count
  | CurrentTime
  | InputChangeEventNumberValue
  | InputDataNumber
  | NumberLiteral
  | PropsNumber
  | Sum
  | SumArray
  | TimeLiteral;
export type StringExpression =
  | EventSourceComponentName
  | EventSourceComponentType
  | FeatureTag
  | InputChangeEventStringValue
  | InputDataString
  | PropsString
  | StringLiteral
  | UserEmail
  | UserOrgId
  | UserRole;

export interface ArrayLiteral {
  operator: 'arrayLiteral';
  value: Expression[];
}
export interface ArrayLiteral1 {
  operator: 'arrayLiteral';
  value: Expression[];
}
export interface Filter {
  operator: 'filter';
  arrayExpression: ArrayExpression1;
  filterExpression: BooleanExpression;
}
export interface All {
  operator: 'all';
  arrayExpression: ArrayExpression1;
  condition: BooleanExpression;
}
export interface ArrayIncludes {
  operator: 'arrayIncludes';
  arrayExpression: ArrayExpression1;
  value: Expression;
}
export interface BooleanValue {
  operator: 'booleanValue';
  model: {
    model: 'dataPropertyBoolean';
    fieldKey: string;
  };
}
export interface Both {
  operator: 'both';
  left: BooleanExpression;
  right: BooleanExpression;
}
export interface GreaterThan {
  operator: 'greaterThan';
  left: NumberExpression;
  right: NumberExpression;
}
export interface Count {
  operator: 'count';
  arrayExpression: ArrayExpression1;
}
/**
 * A timestamp in milliseconds since epoch.
 */
export interface CurrentTime {
  operator: 'currentTime';
}
export interface InputChangeEventNumberValue {
  operator: 'inputChangeEventNumberValue';
}
export interface InputDataNumber {
  operator: 'inputDataNumber';
  fieldKey: string;
}
export interface NumberLiteral {
  operator: 'numberLiteral';
  value: number;
}
export interface PropsNumber {
  operator: 'propsNumber';
  prop: string;
}
export interface Sum {
  operator: 'sum';
  left: NumberExpression;
  right: NumberExpression;
}
export interface SumArray {
  operator: 'sumArray';
  arrayExpression: ArrayExpression1;
}
/**
 * A timestamp in milliseconds since epoch.
 */
export interface TimeLiteral {
  operator: 'timeLiteral';
  value: number;
}
export interface BooleanLiteral {
  operator: 'booleanLiteral';
  value: boolean;
}
export interface Either {
  operator: 'either';
  left: BooleanExpression;
  right: BooleanExpression;
}
export interface Equals {
  operator: 'equals';
  left: Expression;
  right: Expression;
}
export interface Exists {
  operator: 'exists';
  expression: Expression;
}
export interface InputChangeEventBooleanValue {
  operator: 'inputChangeEventBooleanValue';
}
export interface InputDataBoolean {
  operator: 'inputDataBoolean';
  fieldKey: string;
}
export interface Not {
  operator: 'not';
  expression: BooleanExpression;
}
export interface PropsBoolean {
  operator: 'propsBoolean';
  prop: string;
}
export interface Some {
  operator: 'some';
  arrayExpression: ArrayExpression1;
  condition: BooleanExpression;
}
export interface InputChangeEventArrayValue {
  operator: 'inputChangeEventArrayValue';
}
export interface InputDataArray {
  operator: 'inputDataArray';
  fieldKey: string;
}
export interface Map {
  operator: 'map';
  arrayExpression: ArrayExpression1;
  mapExpression: Expression;
}
export interface PropsArray {
  operator: 'propsArray';
  prop: string;
}
export interface UserFeatureTags {
  operator: 'userFeatureTags';
}
export interface EventSourceComponentName {
  operator: 'eventSourceComponentName';
}
export interface EventSourceComponentType {
  operator: 'eventSourceComponentType';
}
export interface FeatureTag {
  operator: 'featureTag';
  tag: string;
}
export interface InputChangeEventStringValue {
  operator: 'inputChangeEventStringValue';
}
export interface InputDataString {
  operator: 'inputDataString';
  fieldKey: string;
}
export interface PropsString {
  operator: 'propsString';
  prop: string;
}
export interface StringLiteral {
  operator: 'stringLiteral';
  value: string;
}
export interface UserEmail {
  operator: 'userEmail';
}
export interface UserOrgId {
  operator: 'userOrgId';
}
export interface UserRole {
  operator: 'userRole';
}
export interface Filter1 {
  operator: 'filter';
  arrayExpression: ArrayExpression;
  filterExpression: BooleanExpression;
}
export interface InputChangeEventArrayValue1 {
  operator: 'inputChangeEventArrayValue';
}
export interface InputDataArray1 {
  operator: 'inputDataArray';
  fieldKey: string;
}
export interface Map1 {
  operator: 'map';
  arrayExpression: ArrayExpression;
  mapExpression: Expression;
}
export interface PropsArray1 {
  operator: 'propsArray';
  prop: string;
}
export interface UserFeatureTags1 {
  operator: 'userFeatureTags';
}
