// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

export interface ExtensionConfig {
  name: string;
  server?: {
    enable?: boolean;
    database?: {
      enable?: boolean;
    };
  };
  components?: {
    [k: string]:
      | {
          path: string;
        }
      | undefined;
  };
}
