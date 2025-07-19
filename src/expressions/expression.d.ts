// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export type Expression = ArrayExpression | BooleanExpression | NumberExpression | StringExpression;
export type ArrayExpression = ArrayLiteral | Filter | Map | UserProductItems | DynamicValue;
export type BooleanExpression =
  | All
  | ArrayIncludes
  | Both
  | BooleanLiteral
  | Either
  | Equals
  | Exists
  | GreaterThan
  | Not
  | Some
  | DynamicValue;
export type NumberExpression =
  | ArrayLength
  | Count
  | CurrentTime
  | NumberLiteral
  | Sum
  | SumArray
  | TimeLiteral
  | DynamicValue;
export type DynamicValue = DataValue | Prop;
export type StringExpression =
  | EventType
  | StringLiteral
  | UserEmail
  | UserOrgId
  | UserRole
  | DynamicValue;

export interface ArrayLiteral {
  operator: 'arrayLiteral';
  value: Expression[];
}
export interface Filter {
  operator: 'filter';
  arrayExpression: ArrayExpression;
  filterExpression: BooleanExpression;
}
export interface All {
  operator: 'all';
  arrayExpression: ArrayExpression;
  condition: BooleanExpression;
}
export interface ArrayIncludes {
  operator: 'arrayIncludes';
  arrayExpression: ArrayExpression;
  value: Expression;
}
export interface Both {
  operator: 'both';
  left: BooleanExpression;
  right: BooleanExpression;
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
export interface GreaterThan {
  operator: 'greaterThan';
  left: NumberExpression;
  right: NumberExpression;
}
export interface ArrayLength {
  operator: 'arrayLength';
  arrayExpression: ArrayExpression;
}
export interface Count {
  operator: 'count';
  arrayExpression: ArrayExpression;
}
/**
 * A timestamp in milliseconds since epoch.
 */
export interface CurrentTime {
  operator: 'currentTime';
}
export interface NumberLiteral {
  operator: 'numberLiteral';
  value: number;
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
 * A timestamp in milliseconds since epoch.
 */
export interface TimeLiteral {
  operator: 'timeLiteral';
  value: number;
}
/**
 * Access a value from the data object. The source of the data depends on the context. For example, in a form the data object is the form data and the name is the name of the input component.
 */
export interface DataValue {
  operator: 'dataValue';
  name: string;
}
/**
 * Access a value from props. Applicable only in contexts where the expression deals with props.
 */
export interface Prop {
  operator: 'prop';
  name: string;
}
export interface Not {
  operator: 'not';
  expression: BooleanExpression;
}
export interface Some {
  operator: 'some';
  arrayExpression: ArrayExpression;
  condition: BooleanExpression;
}
export interface Map {
  operator: 'map';
  arrayExpression: ArrayExpression;
  mapExpression: Expression;
}
export interface UserProductItems {
  operator: 'userProductItems';
}
/**
 * Access the type set on an event. Applicable only in contexts where the expression deals with an event.
 */
export interface EventType {
  operator: 'eventType';
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
