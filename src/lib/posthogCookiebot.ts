import posthog from "posthog-js";

/**
 * Keeps PostHog aligned with Cookiebot **Statistics** (analytics / session replay).
 * Cookiebot stores the visitor’s choice; PostHog must be told via opt_in / opt_out.
 *
 * Uses the same init pattern as the app (`opt_out_capturing_by_default`) — not
 * `cookieless_mode: "on_reject"`, which routes declined/pending visitors through
 * `$posthog_cookieless` even after they interact with the banner.
 *
 * @see COH-111 — `cohvia` → PostHogCookiebotConsent.tsx + instrumentation-client.ts
 */
export function syncPostHogWithCookiebotConsent(): void {
  const cb = window.Cookiebot;
  const consent = cb?.consent;
  if (!consent) return;

  // Cookiebot exposes consent flags before a choice; wait for submit (accept or decline).
  if (!cb.consented && !cb.declined) return;

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
    person_profiles: "identified_only",
    // No capture until Cookiebot Statistics → opt_in (matches app)
    opt_out_capturing_by_default: true,
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
