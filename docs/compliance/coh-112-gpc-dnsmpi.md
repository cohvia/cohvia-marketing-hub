# COH-112 — GPC and “Do Not Sell or Share” (marketing site)

Engineering shipped:

- Footer link **Do Not Sell or Share My Personal Information** (opens Cookiebot, same surface as **Cookie preferences**).
- Privacy Policy (EN/FR) Section 12.2 + cookies section updated to describe **Global Privacy Control (GPC)** and the footer control.

## Cookiebot Manager (manual)

For GPC to take effect in the browser, **Cookiebot** must be configured to honour the signal for US visitors:

1. Log in to [Cookiebot Manager](https://manage.cookiebot.com/).
2. Open the domain group that includes **www.cohvia.com** (same `data-cbid` as `index.html`).
3. Under **Settings**, enable **Global Privacy Control (GPC)** / US state-law features as offered in your plan (wording varies by CMP version).
4. Save and publish.

If GPC is off in the dashboard, the Privacy Policy still describes our intent, but the CMP may not automatically withhold non-essential cookies when `Sec-GPC: 1` is present.

## References

- [Cookiebot — Global Privacy Control](https://www.cookiebot.com/en/gpc/)
- Linear: [COH-112](https://linear.app/cohvia/issue/COH-112/universal-opt-out-global-privacy-control-do-not-sell-or-share-us-state)
