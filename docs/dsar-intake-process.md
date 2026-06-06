# DSAR intake and handling process (COH-110)

**Status:** Live on marketing site (form + email) — manual fulfilment until COH-105 tooling ships  
**Last updated:** June 6, 2026  
**Public surfaces:** [Privacy Policy](https://cohvia.com/legal/privacy) · [Formulaire FR](https://cohvia.com/legal/confidentialite)

## Privacy contact

| Role | Name | Contact |
|------|------|---------|
| Privacy contact (all enquiries) | — | **privacy@cohvia.com** |
| Designated Privacy Officer (Quebec Law 25) | Sarah Cunningham-Scharf, Founder & CEO | **privacy@cohvia.com** |

Legal entity: **SACS Ecommerce Stores Inc.** (operating as Cohvia), 620 King Street North, Suite 1004, Waterloo, Ontario N2J 4G8, Canada.

## Intake channels

1. **Email** — messages to **privacy@cohvia.com** (must be live and monitored).
2. **Web form** — embedded at the bottom of `/legal/privacy` and `/legal/confidentialite` on cohvia.com. Submissions are routed to **privacy@cohvia.com** via a Loops transactional email (`privacy-request-intake` Supabase Edge Function).

Direct email remains valid; the form is an optional convenience.

## One-time setup (email + Loops)

### 1. Create `privacy@cohvia.com`

In your Google Workspace (or email provider for `@cohvia.com`):

1. Open **Admin console → Directory → Groups** (or **Users → Add alias** if you prefer a single inbox).
2. Create a group or alias **privacy@cohvia.com** that delivers to Sarah’s monitored inbox (e.g. `sarah@cohvia.com`).
3. Send a test message to **privacy@cohvia.com** and confirm delivery.

### 2. Loops transactional template

In [Loops](https://app.loops.so):

1. Create a **transactional email** template (e.g. “Privacy request intake”).
2. Set the recipient to use the transactional `email` field (the edge function sends to `privacy@cohvia.com`).
3. Include these **data variables** in the template body:
   - `submitterName`
   - `submitterEmail`
   - `requestType`
   - `relationship`
   - `organizationName`
   - `details`
   - `locale`
   - `submittedAt`
4. Copy the transactional ID.

### 3. Supabase Edge Function secrets

For the marketing site Supabase project (same project that hosts `subscribe-subprocessors`):

```bash
supabase secrets set LOOPS_API_KEY=<your-loops-api-key>
supabase secrets set LOOPS_PRIVACY_REQUEST_TRANSACTIONAL_ID=<transactional-id>
supabase functions deploy privacy-request-intake
```

`LOOPS_API_KEY` may already be set for the subprocessor subscribe function.

### 4. Verify end-to-end

1. Open [cohvia.com/legal/privacy](https://cohvia.com/legal/privacy) and scroll to **Submit a privacy request**.
2. Submit a test request with a throwaway detail line (e.g. “COH-110 test — please ignore”).
3. Confirm **privacy@cohvia.com** receives the Loops notification.

## Handling workflow (manual v1)

Use this checklist for every request. Target response times:

| Jurisdiction | Acknowledge | Complete |
|--------------|-------------|----------|
| GDPR / UK GDPR | Without undue delay | **1 month** (extendable by 2 months if complex) |
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

- [ ] Locate data in Clerk (auth), Supabase (`users`), billing (Dodo), and marketing (Loops) as applicable.
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
