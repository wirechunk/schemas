// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export type RichText = Delta;

export interface Delta {
  delta: Delta1;
}
export interface Delta1 {
  ops: {
    insert:
      | string
      | {
          [k: string]: unknown | undefined;
        };
    attributes?: {
      [k: string]: unknown | undefined;
    };
  }[];
}
