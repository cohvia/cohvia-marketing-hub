/// <reference types="vite/client" />

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
