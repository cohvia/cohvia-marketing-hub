/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_POSTHOG_TOKEN: string;
  readonly VITE_POSTHOG_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.md?raw" {
  const content: string;
  export default content;
}

/** Usercentrics Cookiebot CMP (`consent.cookiebot.com/uc.js`). */
interface CookiebotConsent {
  necessary: boolean;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
}

interface CookiebotApi {
  renew?: () => void;
  show?: () => void;
  /** True after the visitor accepts one or more cookie categories. */
  consented?: boolean;
  /** True after the visitor declines non-essential cookies. */
  declined?: boolean;
  /** Present once Cookiebot has loaded the visitor’s consent state. */
  consent?: CookiebotConsent;
}

interface Window {
  Cookiebot?: CookiebotApi;
}
