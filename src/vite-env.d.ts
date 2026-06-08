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
interface CookiebotApi {
  renew?: () => void;
  show?: () => void;
}

interface Window {
  Cookiebot?: CookiebotApi;
}
