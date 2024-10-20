// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export interface InitialFormDataInput {
  value: InitialFormDataValue;
  context: InitialFormDataContext;
}
export interface InitialFormDataValue {
  formData: ContextData;
}
/**
 * The initial data for the form.
 */
export interface ContextData {
  [k: string]:
    | (boolean | string | number | null | TimeDuration | DataTableRow[] | UploadedFile | string[])
    | undefined;
}
export interface TimeDuration {
  hours: number | null;
  minutes: number | null;
}
export interface DataTableRow {
  id: string;
  data: ContextData1;
}
export interface ContextData1 {
  [k: string]:
    | (boolean | string | number | null | TimeDuration | DataTableRow[] | UploadedFile | string[])
    | undefined;
}
export interface UploadedFile {
  fileId: string;
}
export interface InitialFormDataContext {
  form: {
    id: string;
  };
  /**
   * The page where the form is being shown.
   */
  page: {
    id: string;
    /**
     * The path of the page as saved in the database. This does not include a leading slash.
     */
    path: string;
  };
  user?: RequestContextUser;
  site: RequestContextSite;
}
/**
 * The user making the request.
 */
export interface RequestContextUser {
  id: string;
}
/**
 * The site from which the request originated.
 */
export interface RequestContextSite {
  id: string;
  domain: string;
}
