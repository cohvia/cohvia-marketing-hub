import { describe, expect, it } from "vitest";
import {
  openCookiebotConsentSettings,
  openDoNotSellOrSharePreferences,
} from "./cookiebotPreferences";

describe("cookiebotPreferences", () => {
  it("aliases Do Not Sell or Share to the same opener as Cookie preferences (COH-112)", () => {
    expect(openDoNotSellOrSharePreferences).toBe(openCookiebotConsentSettings);
  });
});
