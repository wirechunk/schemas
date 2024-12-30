import type { ContextData } from './context-data/context-data.js';
import type { ExtensionConfig } from './meta/extension-config.js';
import type { RichText } from './custom-field/rich-text.js';
import type { AuthorizeCreateSiteInput } from './hooks/authorize-create-site/input.js';
import type { AuthorizeCreateSiteResult } from './hooks/authorize-create-site/result.js';
import type { AuthorizeEditSiteInput } from './hooks/authorize-edit-site/input.js';
import type { AuthorizeEditSiteResult } from './hooks/authorize-edit-site/result.js';
import type { AuthorizeEditSiteDomainInput } from './hooks/authorize-edit-site-domain/input.js';
import type { AuthorizeEditSiteDomainResult } from './hooks/authorize-edit-site-domain/result.js';
import type { BeforeCreateSiteInput } from './hooks/before-create-site/input.js';
import type { BeforeCreateSiteResult } from './hooks/before-create-site/result.js';
import type { BeforeCreateUserInput } from './hooks/before-create-user/input.js';
import type { BeforeCreateUserResult } from './hooks/before-create-user/result.js';
import type { BeforeEditSiteInput } from './hooks/before-edit-site/input.js';
import type { BeforeEditSiteResult } from './hooks/before-edit-site/result.js';
import type { BeforeSubmitFormInput } from './hooks/before-submit-form/input.js';
import type { BeforeSubmitFormResult } from './hooks/before-submit-form/result.js';
import type { InitialFormDataInput } from './hooks/initial-form-data/input.js';
import type { InitialFormDataResult } from './hooks/initial-form-data/result.js';

export type SchemaValidationError = {
  keyword: string;
  instancePath: string;
  schemaPath: string;
  params: Record<string, unknown>;
  message?: string;
};

export declare const validateContextData: {
  (value: unknown): value is ContextData;
  errors?: SchemaValidationError[] | null;
};
export declare const validateExtensionConfig: {
  (value: unknown): value is ExtensionConfig;
  errors?: SchemaValidationError[] | null;
};
export declare const validateRichText: {
  (value: unknown): value is RichText;
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
export declare const validateAuthorizeEditSiteInput: {
  (value: unknown): value is AuthorizeEditSiteInput;
  errors?: SchemaValidationError[] | null;
};
export declare const validateAuthorizeEditSiteResult: {
  (value: unknown): value is AuthorizeEditSiteResult;
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
export declare const validateBeforeCreateSiteInput: {
  (value: unknown): value is BeforeCreateSiteInput;
  errors?: SchemaValidationError[] | null;
};
export declare const validateBeforeCreateSiteResult: {
  (value: unknown): value is BeforeCreateSiteResult;
  errors?: SchemaValidationError[] | null;
};
export declare const validateBeforeCreateUserInput: {
  (value: unknown): value is BeforeCreateUserInput;
  errors?: SchemaValidationError[] | null;
};
export declare const validateBeforeCreateUserResult: {
  (value: unknown): value is BeforeCreateUserResult;
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
export declare const validateBeforeSubmitFormInput: {
  (value: unknown): value is BeforeSubmitFormInput;
  errors?: SchemaValidationError[] | null;
};
export declare const validateBeforeSubmitFormResult: {
  (value: unknown): value is BeforeSubmitFormResult;
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
