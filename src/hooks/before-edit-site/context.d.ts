// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.

/**
 * The context of the request.
 */
export type BeforeEditSiteContext = Principal & Site;

export interface Principal {
  principal:
    | {
        user: User;
        adminUser?: null;
        platformApiToken?: null;
      }
    | {
        user?: null;
        adminUser: AdminUser;
        platformApiToken?: null;
      }
    | {
        user?: null;
        adminUser?: null;
        platformApiToken: PlatformApiToken;
      }
    | null;
}
/**
 * The user making the request. This is a regular user who belongs to the platform on which the request is being made.
 */
export interface User {
  id: string;
}
/**
 * The admin user making the request. Extensions do not see this user in the Users table.
 */
export interface AdminUser {
  id: string;
  email: string;
}
/**
 * The platform API token that can be used to authenticate requests. This token is not tied to an admin or regular user.
 */
export interface PlatformApiToken {
  id: string;
}
export interface Site {
  /**
   * The site from which the request originated. This field will be set only if the site belongs to the platform on which the extension is installed (is not the admin site).
   */
  site?: {
    id: string;
  };
}
