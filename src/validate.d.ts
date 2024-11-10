import type { AuthorizeHookResult } from './authorize-hook-result/authorize-hook-result.js';
import type { ContextData } from './context-data/context-data.js';
import type { CustomField } from './custom-field/custom-field.js';
import type { HookRejectResult } from './hook-reject-result/hook-reject-result.js';
import type { RequestContextSite } from './request-context/request-context-site.js';
import type { RequestContextUser } from './request-context/request-context-user.js';
import type { RichText } from './custom-field/rich-text.js';
import type { AuthorizeCreateSiteContext } from './hooks/authorize-create-site/context.js';
import type { AuthorizeCreateSiteValue } from './hooks/authorize-create-site/value.js';
import type { AuthorizeCreateSiteInput } from './hooks/authorize-create-site/input.js';
import type { AuthorizeCreateSiteResult } from './hooks/authorize-create-site/result.js';
import type { AuthorizeEditSiteContext } from './hooks/authorize-edit-site/context.js';
import type { AuthorizeEditSiteValue } from './hooks/authorize-edit-site/value.js';
import type { AuthorizeEditSiteInput } from './hooks/authorize-edit-site/input.js';
import type { AuthorizeEditSiteResult } from './hooks/authorize-edit-site/result.js';
import type { AuthorizeEditSiteDomainContext } from './hooks/authorize-edit-site-domain/context.js';
import type { AuthorizeEditSiteDomainValue } from './hooks/authorize-edit-site-domain/value.js';
import type { AuthorizeEditSiteDomainInput } from './hooks/authorize-edit-site-domain/input.js';
import type { AuthorizeEditSiteDomainResult } from './hooks/authorize-edit-site-domain/result.js';
import type { BeforeCreateSiteContext } from './hooks/before-create-site/context.js';
import type { BeforeCreateSiteValue } from './hooks/before-create-site/value.js';
import type { BeforeCreateSiteInput } from './hooks/before-create-site/input.js';
import type { BeforeCreateSiteResult } from './hooks/before-create-site/result.js';
import type { BeforeEditSiteContext } from './hooks/before-edit-site/context.js';
import type { BeforeEditSiteValue } from './hooks/before-edit-site/value.js';
import type { BeforeEditSiteInput } from './hooks/before-edit-site/input.js';
import type { BeforeEditSiteResult } from './hooks/before-edit-site/result.js';
import type { BeforeSubmitFormContext } from './hooks/before-submit-form/context.js';
import type { BeforeSubmitFormValue } from './hooks/before-submit-form/value.js';
import type { BeforeSubmitFormInput } from './hooks/before-submit-form/input.js';
import type { BeforeSubmitFormResult } from './hooks/before-submit-form/result.js';
import type { InitialFormDataContext } from './hooks/initial-form-data/context.js';
import type { InitialFormDataValue } from './hooks/initial-form-data/value.js';
import type { InitialFormDataInput } from './hooks/initial-form-data/input.js';
import type { InitialFormDataResult } from './hooks/initial-form-data/result.js';

export type SchemaValidationError = {
  keyword: string;
  instancePath: string;
  schemaPath: string;
  params: Record<string, unknown>;
  message?: string;
};

export declare const validateAuthorizeHookResult: {
  (value: unknown): value is AuthorizeHookResult;
  errors?: SchemaValidationError[] | null;
};
export declare const validateContextData: {
  (value: unknown): value is ContextData;
  errors?: SchemaValidationError[] | null;
};
export declare const validateCustomField: {
  (value: unknown): value is CustomField;
  errors?: SchemaValidationError[] | null;
};
export declare const validateHookRejectResult: {
  (value: unknown): value is HookRejectResult;
  errors?: SchemaValidationError[] | null;
};
export declare const validateRequestContextSite: {
  (value: unknown): value is RequestContextSite;
  errors?: SchemaValidationError[] | null;
};
export declare const validateRequestContextUser: {
  (value: unknown): value is RequestContextUser;
  errors?: SchemaValidationError[] | null;
};
export declare const validateRichText: {
  (value: unknown): value is RichText;
  errors?: SchemaValidationError[] | null;
};
export declare const validateAuthorizeCreateSiteContext: {
  (value: unknown): value is AuthorizeCreateSiteContext;
  errors?: SchemaValidationError[] | null;
};
export declare const validateAuthorizeCreateSiteValue: {
  (value: unknown): value is AuthorizeCreateSiteValue;
  errors?: SchemaValidationError[] | null;
};
export declare const validateAuthorizeCreateSiteInput: {
  (value: unknown): value is AuthorizeCreateSiteInput;
  errors?: SchemaValidationError[] | null;
};
export declare const validateAuthorizeCreateSiteResult: {
  (value: unknown): value is AuthorizeCreateSiteResult;
  errors?: SchemaValidationError[] | null;
};
export declare const validateAuthorizeEditSiteContext: {
  (value: unknown): value is AuthorizeEditSiteContext;
  errors?: SchemaValidationError[] | null;
};
export declare const validateAuthorizeEditSiteValue: {
  (value: unknown): value is AuthorizeEditSiteValue;
  errors?: SchemaValidationError[] | null;
};
export declare const validateAuthorizeEditSiteInput: {
  (value: unknown): value is AuthorizeEditSiteInput;
  errors?: SchemaValidationError[] | null;
};
export declare const validateAuthorizeEditSiteResult: {
  (value: unknown): value is AuthorizeEditSiteResult;
  errors?: SchemaValidationError[] | null;
};
export declare const validateAuthorizeEditSiteDomainContext: {
  (value: unknown): value is AuthorizeEditSiteDomainContext;
  errors?: SchemaValidationError[] | null;
};
export declare const validateAuthorizeEditSiteDomainValue: {
  (value: unknown): value is AuthorizeEditSiteDomainValue;
  errors?: SchemaValidationError[] | null;
};
export declare const validateAuthorizeEditSiteDomainInput: {
  (value: unknown): value is AuthorizeEditSiteDomainInput;
  errors?: SchemaValidationError[] | null;
};
export declare const validateAuthorizeEditSiteDomainResult: {
  (value: unknown): value is AuthorizeEditSiteDomainResult;
  errors?: SchemaValidationError[] | null;
};
export declare const validateBeforeCreateSiteContext: {
  (value: unknown): value is BeforeCreateSiteContext;
  errors?: SchemaValidationError[] | null;
};
export declare const validateBeforeCreateSiteValue: {
  (value: unknown): value is BeforeCreateSiteValue;
  errors?: SchemaValidationError[] | null;
};
export declare const validateBeforeCreateSiteInput: {
  (value: unknown): value is BeforeCreateSiteInput;
  errors?: SchemaValidationError[] | null;
};
export declare const validateBeforeCreateSiteResult: {
  (value: unknown): value is BeforeCreateSiteResult;
  errors?: SchemaValidationError[] | null;
};
export declare const validateBeforeEditSiteContext: {
  (value: unknown): value is BeforeEditSiteContext;
  errors?: SchemaValidationError[] | null;
};
export declare const validateBeforeEditSiteValue: {
  (value: unknown): value is BeforeEditSiteValue;
  errors?: SchemaValidationError[] | null;
};
export declare const validateBeforeEditSiteInput: {
  (value: unknown): value is BeforeEditSiteInput;
  errors?: SchemaValidationError[] | null;
};
export declare const validateBeforeEditSiteResult: {
  (value: unknown): value is BeforeEditSiteResult;
  errors?: SchemaValidationError[] | null;
};
export declare const validateBeforeSubmitFormContext: {
  (value: unknown): value is BeforeSubmitFormContext;
  errors?: SchemaValidationError[] | null;
};
export declare const validateBeforeSubmitFormValue: {
  (value: unknown): value is BeforeSubmitFormValue;
  errors?: SchemaValidationError[] | null;
};
export declare const validateBeforeSubmitFormInput: {
  (value: unknown): value is BeforeSubmitFormInput;
  errors?: SchemaValidationError[] | null;
};
export declare const validateBeforeSubmitFormResult: {
  (value: unknown): value is BeforeSubmitFormResult;
  errors?: SchemaValidationError[] | null;
};
export declare const validateInitialFormDataContext: {
  (value: unknown): value is InitialFormDataContext;
  errors?: SchemaValidationError[] | null;
};
export declare const validateInitialFormDataValue: {
  (value: unknown): value is InitialFormDataValue;
  errors?: SchemaValidationError[] | null;
};
export declare const validateInitialFormDataInput: {
  (value: unknown): value is InitialFormDataInput;
  errors?: SchemaValidationError[] | null;
};
export declare const validateInitialFormDataResult: {
  (value: unknown): value is InitialFormDataResult;
  errors?: SchemaValidationError[] | null;
};
