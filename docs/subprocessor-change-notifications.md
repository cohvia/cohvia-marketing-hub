# Subprocessor change notifications (COH-167)

**Status:** Manual broadcast via Resend when the public subprocessor list changes. Subscribe form uses Resend Contacts + segment (COH-166).  
**Last updated:** June 18, 2026  
**Public surface:** [Subprocessors](https://cohvia.com/legal/subprocessors) · subscribe form at bottom of page

## What this covers

When Cohvia adds or replaces a subprocessor that processes Customer Data, the [DPA](/legal/dpa) requires at least **30 days' notice** before the change takes effect. Contacts who subscribed on the subprocessors page receive a **Resend Broadcast** to the **Subprocessor change notifications** segment.

There is **no confirmation email on subscribe** — only segment membership.

## One-time setup (Resend + Supabase)

### 1. Provision segment and template

From the `cohvia-marketing-hub` repo root (with a valid key in `resend-key.local`):

```bash
node scripts/resend/setup-subprocessor-resend.mjs
```

This creates (or updates):

| Asset | Name / alias |
|-------|----------------|
| Segment | **Subprocessor change notifications** |
| Broadcast template | **cohvia-subprocessor-change** |

The script prints secret values to paste into Supabase.

### 2. Supabase Edge Function secrets

Project: **`yawquhkjrgyluqbugwas`** (same project as `privacy-request-intake`).

```bash
supabase secrets set \
  RESEND_API_KEY=<your-resend-api-key> \
  RESEND_SUBPROCESSOR_SEGMENT_ID=<segment-id-from-script> \
  RESEND_SUBPROCESSOR_CHANGE_TEMPLATE_ID=<template-id-from-script>

supabase functions deploy subscribe-subprocessors --project-ref yawquhkjrgyluqbugwas
```

`RESEND_SUBPROCESSOR_AUDIENCE_ID` is accepted as a legacy alias for the segment ID.

Or sync the API key from `resend-key.local`:

```bash
./scripts/sync-resend-supabase-secret.sh
# then set segment + template IDs manually
```

### 3. Verify subscribe form (COH-166)

1. Open [cohvia.com/legal/subprocessors](https://cohvia.com/legal/subprocessors).
2. Subscribe with a test email you control.
3. Confirm the contact appears in Resend → **Audience** → **Subprocessor change notifications**.
4. In browser DevTools → Network, the response should be `{ "ok": true, "delivery": "resend" }`.

**Troubleshooting:** If the form fails with a generic error, check Supabase Edge Function logs and confirm `RESEND_API_KEY` + `RESEND_SUBPROCESSOR_SEGMENT_ID` are set. JWT verification must be **off** for this public function (`verify_jwt = false` in `supabase/config.toml`).

---

## When to send a broadcast

Send a broadcast when you **publish an update** to the subprocessors page that adds or replaces a subprocessor processing Customer Data — typically **at least 30 days before** the effective date stated on the page.

Do **not** send for:

- Payment processor (Dodo) changes — independent controller, not a subprocessor
- Typo fixes with no vendor change
- Location footnotes that do not change the vendor list

---

## Pre-send checklist

- [ ] Legal review of the subprocessors page diff
- [ ] Update `src/content/legal/subprocessors.md` and bump **Last updated**
- [ ] Merge and deploy marketing site so [cohvia.com/legal/subprocessors](https://cohvia.com/legal/subprocessors) reflects the new list
- [ ] Draft `summaryOfChanges` (plain language: who is added/removed/replaced and why)
- [ ] Confirm **effective date** (≥ 30 days from send date unless counsel approves shorter notice)
- [ ] Send a **test broadcast** to yourself before the full segment send

---

## Send a broadcast (manual — default)

### Step 1 — Compose in Resend

1. Open [Resend → Broadcasts](https://resend.com/broadcasts) → **Create broadcast**.
2. **Audience:** select segment **Subprocessor change notifications**.
3. **From:** `Cohvia <notifications@mail.cohvia.com>`.
4. **Template:** choose **Cohvia — Subprocessor change notification** (`cohvia-subprocessor-change`), or paste HTML from `scripts/resend/template-html.mjs` if you need a one-off edit.
5. Fill template variables:

| Variable | Example |
|----------|---------|
| `effectiveDate` | `August 1, 2026` |
| `summaryOfChanges` | `We are replacing Loops, Inc. with Resend, Inc. for transactional and compliance email delivery. No other subprocessors are changing.` |
| `subprocessorsPageUrl` | `https://cohvia.com/legal/subprocessors` |

`RESEND_UNSUBSCRIBE_URL` is injected automatically by Resend for broadcasts — do not set it manually.

### Step 2 — Preview and test

1. **Send test** to your own email (not the full segment).
2. Confirm branding, effective date, summary, CTA link, and **Unsubscribe** link work.
3. Click unsubscribe in the test email and confirm the contact is marked unsubscribed in Resend.

### Step 3 — Send to segment

1. Schedule or send immediately.
2. Note send time in Linear (parent ticket or compliance log).

### Step 4 — After send

- [ ] Monitor Resend → **Emails** for bounces or complaints
- [ ] Handle DPA objections sent to **privacy@cohvia.com** before the effective date
- [ ] On effective date, confirm the live subprocessors page matches what was communicated

---

## Template maintenance

To update the broadcast HTML after a design/copy change:

```bash
node scripts/resend/setup-subprocessor-resend.mjs
```

The script updates and republishes the `cohvia-subprocessor-change` template idempotently.

Optional env for future automation (not implemented in v1):

- `RESEND_SUBPROCESSOR_CHANGE_TEMPLATE_ID` — template ID or alias

---

## Related docs

- Email inventory — [docs/transactional-email-inventory.md](./transactional-email-inventory.md)
- DSAR / privacy intake — [docs/dsar-intake-process.md](./dsar-intake-process.md)
- Subprocessors page content — `src/content/legal/subprocessors.md`
- Subscribe edge function — `supabase/functions/subscribe-subprocessors/index.ts`

## Related tickets

- **COH-166** — Subscribe form → Resend segment
- **COH-136** — Original Loops campaign approach (superseded)
- **COH-119** — Original Loops subscribe (superseded)
- **COH-159** — Resend migration umbrella
