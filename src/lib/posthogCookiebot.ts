import posthog from "posthog-js";

/**
 * Keeps PostHog aligned with Cookiebot **Statistics** (analytics / session replay).
 * Cookiebot stores the visitor’s choice; PostHog must be told via opt_in / opt_out.
 *
 * @see COH-111 — same pattern as `cohvia` → PostHogCookiebotConsent.tsx
 */
export function syncPostHogWithCookiebotConsent(): void {
  const consent = window.Cookiebot?.consent;
  if (!consent) return;

  if (consent.statistics) {
    posthog.opt_in_capturing({ captureEventName: false });
  } else {
    posthog.opt_out_capturing();
  }
}

/** Initialize PostHog and wire Cookiebot consent events (no native CMP integration). */
export function initPostHogWithCookiebot(): void {
  const token = import.meta.env.VITE_POSTHOG_TOKEN;
  if (!token) return;

  posthog.init(token, {
    api_host: import.meta.env.VITE_POSTHOG_HOST ?? "https://eu.i.posthog.com",
    ui_host: "https://eu.posthog.com",
    defaults: "2026-01-30",
    // Wait for Cookiebot Statistics consent before full cookies / replay (COH-111)
    cookieless_mode: "on_reject",
  });

  const sync = () => {
    syncPostHogWithCookiebotConsent();
  };

  sync();

  window.addEventListener("CookiebotOnConsentReady", sync);
  window.addEventListener("CookiebotOnAccept", sync);
  window.addEventListener("CookiebotOnDecline", sync);
  window.addEventListener("CookiebotOnLoad", sync);
}
