import { describe, expect, it } from "vitest";
import {
  PRIVACY_COMPLAINTS_PAGE_APP_URL,
  PRIVACY_CONTACT_EMAIL,
  PRIVACY_OFFICER,
} from "@/lib/legal/privacy-contact";

describe("privacy-contact", () => {
  it("uses the canonical privacy inbox", () => {
    expect(PRIVACY_CONTACT_EMAIL).toBe("privacy@cohvia.com");
  });

  it("names the Quebec Law 25 privacy officer", () => {
    expect(PRIVACY_OFFICER.name).toBe("Sarah Cunningham-Scharf");
    expect(PRIVACY_OFFICER.titleEn).toBe("Founder & CEO");
    expect(PRIVACY_OFFICER.titleFr).toBe(
      "Fondatrice et présidente-directrice générale",
    );
  });

  it("exposes the app-hosted complaints overview URL (COH-113)", () => {
    expect(PRIVACY_COMPLAINTS_PAGE_APP_URL).toBe(
      "https://app.cohvia.com/legal/privacy-complaints",
    );
  });
});
