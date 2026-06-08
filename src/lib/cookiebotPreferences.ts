/**
 * Opens Cookiebot so visitors can change or withdraw consent (footer "Cookie preferences").
 * @see https://www.cookiebot.com/en/developer/
 */
export function openCookiebotConsentSettings(): void {
  if (typeof window === "undefined") return;

  const tryOpen = (): boolean => {
    const cb = window.Cookiebot;
    if (cb?.renew) {
      cb.renew();
      return true;
    }
    if (cb?.show) {
      cb.show();
      return true;
    }
    return false;
  };

  if (tryOpen()) return;

  let attempts = 0;
  const maxAttempts = 50;
  const interval = window.setInterval(() => {
    attempts += 1;
    if (tryOpen() || attempts >= maxAttempts) {
      window.clearInterval(interval);
    }
  }, 100);
}

/**
 * US state privacy laws (e.g. CPRA) require a clear way to opt out of “sale” / “sharing”
 * where applicable. We use Cookiebot for consent; this opens the same controls as
 * **Cookie preferences** (COH-112 — “Do Not Sell or Share My Personal Information”).
 *
 * @see https://www.cookiebot.com/en/gpc/
 */
export const openDoNotSellOrSharePreferences = openCookiebotConsentSettings;
