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

  it("opts out when Cookiebot statistics consent is denied", () => {
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

    expect(optOut).toHaveBeenCalled();
  });

  it("does nothing when Cookiebot consent is not ready", () => {
    const optIn = vi.spyOn(posthog, "opt_in_capturing").mockImplementation(() => undefined);
    const optOut = vi.spyOn(posthog, "opt_out_capturing").mockImplementation(() => undefined);

    syncPostHogWithCookiebotConsent();

    expect(optIn).not.toHaveBeenCalled();
    expect(optOut).not.toHaveBeenCalled();
  });
});
