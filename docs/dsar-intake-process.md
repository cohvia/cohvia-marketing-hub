# DSAR intake and handling process (COH-110)

**Status:** Form ships with the marketing site; **email delivery is live only after** `privacy@cohvia.com`, Resend domain verification, `RESEND_API_KEY` in Supabase Edge Function secrets, and edge-function deploy are verified (see setup below). Manual fulfilment until COH-105 tooling ships.  
**Last updated:** June 15, 2026  
**Public surfaces:** [Privacy Policy](https://cohvia.com/legal/privacy) · [Formulaire FR](https://cohvia.com/legal/confidentialite) · [Complaints overview (app)](https://app.cohvia.com/legal/privacy-complaints)

## Privacy contact

| Role | Name | Contact |
|------|------|---------|
| Privacy contact (all enquiries) | — | **privacy@cohvia.com** |
| Designated Privacy Officer (Quebec Law 25) | Sarah Cunningham-Scharf, Founder & CEO | **privacy@cohvia.com** |

Legal entity: **SACS Ecommerce Stores Inc.** (operating as Cohvia), 620 King Street North, Suite 1004, Waterloo, Ontario N2J 4G8, Canada.

## Intake channels

1. **Email** — messages to **privacy@cohvia.com** (must be live and monitored). For data-protection complaints about Cohvia as controller, a clear subject line such as **`[Data protection complaint]`** helps triage (COH-113).
2. **Web form** — embedded at the bottom of `/legal/privacy` and `/legal/confidentialite` on cohvia.com. Submissions are routed to **privacy@cohvia.com** via Resend (`privacy-request-intake` Supabase Edge Function). Request type **Data protection complaint** should be used for UK / general controller complaints (COH-113).
3. **App overview page** — short, login-free summary at **https://app.cohvia.com/legal/privacy-complaints** (ships from the `cohvia` application repo; linked from the Privacy Policy).

Direct email remains valid; the form and app page are optional conveniences.

**Abuse controls:** honeypot field (`leave_blank_honeypot`, plus legacy `companyWebsite` if present), per-IP rate limit (5 submissions/hour), and per-email rate limit. Cloudflare Turnstile can be added later if needed.

## One-time setup (email + Resend)

### 1. Create `privacy@cohvia.com`

In your Google Workspace (or email provider for `@cohvia.com`):

1. Open **Admin console → Directory → Groups** (or **Users → Add alias** if you prefer a single inbox).
2. Create a group or alias **privacy@cohvia.com** that delivers to Sarah’s monitored inbox (e.g. `sarah@cohvia.com`).
3. Send a test message to **privacy@cohvia.com** and confirm delivery.

### 2. Resend domain + API key

1. Verify **`mail.cohvia.com`** in [Resend → Domains](https://resend.com/domains) (DNS in Dynadot).
2. Create an API key with send permissions in Resend → **API Keys**.

The edge function builds the intake email inline (no Resend dashboard template required). Default From is `Cohvia <notifications@mail.cohvia.com>`; optional secret **`RESEND_PRIVACY_FROM`** overrides it. Emails still **deliver to** `privacy@cohvia.com`.

### 3. Supabase Edge Function secrets

For the Cohvia Supabase project (`yawquhkjrgyluqbugwas` — same project that hosts `subscribe-subprocessors`):

```bash
supabase secrets set RESEND_API_KEY=<your-resend-api-key>
supabase functions deploy privacy-request-intake
```

After cutover is verified, remove deprecated Loops secrets (`LOOPS_API_KEY`, `LOOPS_PRIVACY_REQUEST_TRANSACTIONAL_ID`) from Supabase once subprocessor subscribe is on Resend (COH-166). See [subprocessor-change-notifications.md](./subprocessor-change-notifications.md) for segment setup.

### 4. Verify end-to-end

1. Open [cohvia.com/legal/privacy](https://cohvia.com/legal/privacy) and scroll to **Submit a privacy request**.
2. Submit a test request with a throwaway detail line (e.g. “COH-165 test — please ignore”).
3. Confirm **privacy@cohvia.com** receives the Resend notification and the send appears in Resend → **Emails**.

**Troubleshooting:** If the form shows “Edge Function returned a non-2xx status code”, the usual cause is **JWT verification** left on for a public form. Anonymous visitors are not signed in to Supabase Auth, so the platform rejects the request before your handler runs. Fix: in `supabase/config.toml` set `verify_jwt = false` for `privacy-request-intake` and `subscribe-subprocessors`, then redeploy those functions (or turn off “Verify JWT” for each function in Supabase Dashboard → Edge Functions → the function → settings).

**No email but the form succeeds:** Often the **honeypot** was tripped (password manager filled a hidden “website” field): the function returned **200** and **never called Resend**. After deploy, check the JSON response: only `{ "ok": true }` (no `delivery`) means honeypot; `{ "ok": true, "delivery": "resend" }` means the Resend branch ran. If Resend returns a non-2xx or a body without an `id`, the function returns **502** — verify `RESEND_API_KEY`, domain verification, and From address. Also check **spam** for `privacy@cohvia.com` and Resend → **Emails** for the send.

**Supabase shows POST 200 but you only see `booted` / `shutdown` in Logs:** Use **Edge Functions → _your function_ → Invocations** for status and timing. In the browser **Network** tab, open the `privacy-request-intake` response: **`{ "ok": true, "delivery": "resend" }`** means the handler finished the Resend branch; **`{ "ok": true }` only** means the honeypot path (no Resend call)—often autofill on the hidden field.

## Handling workflow (manual v1)

Use this checklist for every request. Target response times:

| Jurisdiction | Acknowledge | Complete |
|--------------|-------------|----------|
| GDPR / UK GDPR | Without undue delay | **1 month** (extendable by 2 months if complex) |
| UK — data protection complaints to controller (DUAA 2025, from 19 June 2026) | Within **30 days** of receipt where the UK statutory timetable applies | Without undue delay; track to resolution |
| Quebec Law 25 | Promptly | **30 days** |
| US state laws | As required | Typically **45 days** (varies by state) |

### Step 1 — Triage (same day)

- [ ] Log the request (Linear issue or spreadsheet): date received, channel (email/form), requester email, request type, jurisdiction if stated.
- [ ] Send acknowledgement to the requester confirming receipt and expected timeframe.
- [ ] Determine role: **Cohvia as controller** (website visitor, account admin, billing contact) vs **Cohvia as processor** (individual named in a customer’s ingested data).

### Step 2 — Identity verification

- [ ] For access, deletion, or portability: verify the requester controls the email/account in question, or is an authorized agent with written authorization.
- [ ] For processor scenarios: notify the **customer (controller)** and coordinate; do not disclose Customer Data directly to the requester without the customer’s instruction.

### Step 3 — Fulfilment

**Controller data (our account):**

- [ ] Locate data in Clerk (auth), Supabase (`users`), billing (Dodo), and marketing (Resend intake logs) as applicable.
- [ ] Export, correct, or delete per the request.

**Processor data (Customer Data in a tenant):**

- [ ] Ask the customer’s Admin to use **Settings → Data & Privacy** (COH-76 / COH-105) or assist them manually.
- [ ] Use cascade deletion (COH-102) when erasure is required.

### Step 4 — Close out

- [ ] Send final response to the requester (and customer Admin if processor).
- [ ] Record completion date and actions taken.
- [ ] If request was manifestly unfounded or excessive, document the legal basis for refusal or fee (GDPR Art. 12(5)).

## Related tickets

- **COH-105** — Admin DSAR tooling (export / correct / delete by person and org)
- **COH-113** — Complaint-handling mechanism (UK DUAA; can share the same inbox)
- **COH-104** — Clickwrap consent capture for Terms / Privacy / DPA

## Code references

- Privacy Policy (EN): `src/content/legal/privacy.md`
- Privacy Policy (FR): `src/content/legal/privacy-fr.md`
- Request form: `src/components/legal/PrivacyRequestForm.tsx`
- Edge function: `supabase/functions/privacy-request-intake/index.ts`
