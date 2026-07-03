import posthog from "posthog-js";
import { afterEach, describe, expect, it, vi } from "vitest";

import { syncPostHogWithCookiebotConsent } from "./posthogCookiebot";

describe("syncPostHogWithCookiebotConsent", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    delete window.Cookiebot;
  });

  it("opts in when Cookiebot statistics consent is granted", () => {
    const optIn = vi.spyOn(posthog, "opt_in_capturing").mockImplementation(() => undefined);
    window.Cookiebot = {
      consented: true,
      consent: {
        necessary: true,
        preferences: false,
        statistics: true,
        marketing: false,
      },
    };

    syncPostHogWithCookiebotConsent();

    expect(optIn).toHaveBeenCalledWith({ captureEventName: false });
  });

  it("opts out when visitor submitted consent without statistics", () => {
    const optOut = vi.spyOn(posthog, "opt_out_capturing").mockImplementation(() => undefined);
    window.Cookiebot = {
      consented: true,
      consent: {
        necessary: true,
        preferences: false,
        statistics: false,
        marketing: false,
      },
    };

    syncPostHogWithCookiebotConsent();

    expect(optOut).toHaveBeenCalled();
  });

  it("opts out when visitor declined the banner", () => {
    const optOut = vi.spyOn(posthog, "opt_out_capturing").mockImplementation(() => undefined);
    window.Cookiebot = {
      declined: true,
      consent: {
        necessary: true,
        preferences: false,
        statistics: false,
        marketing: false,
      },
    };

    syncPostHogWithCookiebotConsent();

    expect(optOut).toHaveBeenCalled();
  });

  it("does nothing before Cookiebot consent is submitted", () => {
    const optIn = vi.spyOn(posthog, "opt_in_capturing").mockImplementation(() => undefined);
    const optOut = vi.spyOn(posthog, "opt_out_capturing").mockImplementation(() => undefined);
    window.Cookiebot = {
      consent: {
        necessary: true,
        preferences: false,
        statistics: false,
        marketing: false,
      },
    };

    syncPostHogWithCookiebotConsent();

    expect(optIn).not.toHaveBeenCalled();
    expect(optOut).not.toHaveBeenCalled();
  });

  it("does nothing when Cookiebot consent is not ready", () => {
    const optIn = vi.spyOn(posthog, "opt_in_capturing").mockImplementation(() => undefined);
    const optOut = vi.spyOn(posthog, "opt_out_capturing").mockImplementation(() => undefined);

    syncPostHogWithCookiebotConsent();

    expect(optIn).not.toHaveBeenCalled();
    expect(optOut).not.toHaveBeenCalled();
  });
});
