// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export type BooleanExpression =
  | All
  | ArrayIncludes1
  | BooleanValue1
  | Both1
  | GreaterThan1
  | BooleanLiteral1
  | Either1
  | Equals1
  | Exists1
  | InputChangeEventBooleanValue1
  | InputDataBoolean1
  | Not1
  | PropsBoolean1
  | Some1;
export type ArrayExpression =
  | ArrayLiteral
  | Filter
  | InputChangeEventArrayValue
  | InputDataArray
  | Map
  | PropsArray
  | UserFeatureTags;
export type Expression = ArrayExpression | BooleanExpression1 | NumberExpression | StringExpression;
export type BooleanExpression1 =
  | All1
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
  | UserRole;

export interface All {
  operator: 'all';
  arrayExpression: ArrayExpression;
  condition: BooleanExpression;
}
export interface ArrayLiteral {
  operator: 'arrayLiteral';
  value: Expression[];
}
export interface All1 {
  operator: 'all';
  arrayExpression: ArrayExpression;
  condition: BooleanExpression1;
}
export interface ArrayIncludes {
  operator: 'arrayIncludes';
  arrayExpression: ArrayExpression;
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
  left: BooleanExpression1;
  right: BooleanExpression1;
}
export interface GreaterThan {
  operator: 'greaterThan';
  left: NumberExpression;
  right: NumberExpression;
}
export interface Count {
  operator: 'count';
  arrayExpression: ArrayExpression;
}
/**
 * A timestamp in milliseconds since epoch
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
  arrayExpression: ArrayExpression;
}
/**
 * A timestamp in milliseconds since epoch
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
  left: BooleanExpression1;
  right: BooleanExpression1;
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
  expression: BooleanExpression1;
}
export interface PropsBoolean {
  operator: 'propsBoolean';
  prop: string;
}
export interface Some {
  operator: 'some';
  arrayExpression: ArrayExpression;
  condition: BooleanExpression1;
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
export interface UserRole {
  operator: 'userRole';
}
export interface Filter {
  operator: 'filter';
  arrayExpression: ArrayExpression;
  filterExpression: BooleanExpression1;
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
  arrayExpression: ArrayExpression;
  mapExpression: Expression;
}
export interface PropsArray {
  operator: 'propsArray';
  prop: string;
}
export interface UserFeatureTags {
  operator: 'userFeatureTags';
}
export interface ArrayIncludes1 {
  operator: 'arrayIncludes';
  arrayExpression: ArrayExpression;
  value: Expression;
}
export interface BooleanValue1 {
  operator: 'booleanValue';
  model: {
    model: 'dataPropertyBoolean';
    fieldKey: string;
  };
}
export interface Both1 {
  operator: 'both';
  left: BooleanExpression;
  right: BooleanExpression;
}
export interface GreaterThan1 {
  operator: 'greaterThan';
  left: NumberExpression;
  right: NumberExpression;
}
export interface BooleanLiteral1 {
  operator: 'booleanLiteral';
  value: boolean;
}
export interface Either1 {
  operator: 'either';
  left: BooleanExpression;
  right: BooleanExpression;
}
export interface Equals1 {
  operator: 'equals';
  left: Expression;
  right: Expression;
}
export interface Exists1 {
  operator: 'exists';
  expression: Expression;
}
export interface InputChangeEventBooleanValue1 {
  operator: 'inputChangeEventBooleanValue';
}
export interface InputDataBoolean1 {
  operator: 'inputDataBoolean';
  fieldKey: string;
}
export interface Not1 {
  operator: 'not';
  expression: BooleanExpression;
}
export interface PropsBoolean1 {
  operator: 'propsBoolean';
  prop: string;
}
export interface Some1 {
  operator: 'some';
  arrayExpression: ArrayExpression;
  condition: BooleanExpression;
}
