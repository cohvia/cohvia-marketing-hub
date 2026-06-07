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
