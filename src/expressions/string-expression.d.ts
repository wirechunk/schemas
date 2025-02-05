// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

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
