import { describe, expect, it } from "vitest";
import {
  PRIVACY_CONTACT_EMAIL,
  PRIVACY_OFFICER,
} from "@/lib/legal/privacy-contact";

describe("privacy-contact", () => {
  it("uses the canonical privacy inbox", () => {
    expect(PRIVACY_CONTACT_EMAIL).toBe("privacy@cohvia.com");
  });

  it("names the Quebec Law 25 privacy officer", () => {
    expect(PRIVACY_OFFICER.name).toBe("Sarah Cunningham-Scharf");
    expect(PRIVACY_OFFICER.titleEn).toBeTruthy();
    expect(PRIVACY_OFFICER.titleFr).toBeTruthy();
  });
});
