// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export type RichText = Delta;

export interface Delta {
  delta: {
    ops: {
      insert: string | {};
      attributes?: {
        [k: string]: unknown | undefined;
      };
    }[];
  };
}
