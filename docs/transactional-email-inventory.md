# Marketing site — transactional email inventory

**Status:** Living document for `cohvia-marketing-hub` compliance emails.  
**Last updated:** June 18, 2026  
**Cross-repo master inventory:** `cohvia/docs/transactional-email-inventory.md` (COH-132)

---

## Provider

All marketing compliance email uses **Resend** with `@mail.cohvia.com` as the sending domain. Secrets live in **Supabase Edge Function secrets** (project `yawquhkjrgyluqbugwas`), not in Vercel env vars.

| Secret | Flow | Status |
|--------|------|--------|
| `RESEND_API_KEY` | Privacy intake + subprocessor subscribe | Required |
| `RESEND_PRIVACY_FROM` | Optional override for privacy intake From address | Optional |
| `RESEND_SUBPROCESSOR_SEGMENT_ID` | Segment for subprocessor subscribe + broadcast audience | Required for subscribe (COH-166) |
| `RESEND_SUBPROCESSOR_CHANGE_TEMPLATE_ID` | Broadcast template for subprocessor change notices | Optional reference for manual sends (COH-167) |

Legacy alias accepted by subscribe function: `RESEND_SUBPROCESSOR_AUDIENCE_ID`.

---

## Flows

| Email | Trigger | Recipient | Delivery | Runbook | Ticket | Status |
|-------|---------|-----------|----------|---------|--------|--------|
| Privacy / DSAR intake | Form on `/legal/privacy` or `/legal/confidentialite` | `privacy@cohvia.com` | Inline HTML via `privacy-request-intake` edge function | [dsar-intake-process.md](./dsar-intake-process.md) | COH-110, COH-165 | Done |
| Subprocessor subscribe | Form on `/legal/subprocessors` | Resend segment **Subprocessor change notifications** | Contacts API via `subscribe-subprocessors` edge function | [subprocessor-change-notifications.md](./subprocessor-change-notifications.md) | COH-166 | Code ready — verify after deploy |
| Subprocessor list updated | Manual when subprocessors page changes | Subscribed segment contacts | Resend **Broadcast** (template `cohvia-subprocessor-change`) | [subprocessor-change-notifications.md](./subprocessor-change-notifications.md) | COH-167 | Ops ready — send manually when needed |

**Subprocessor subscribe:** no confirmation email — contact is added to the segment only.

**Subprocessor broadcast variables:** `effectiveDate`, `summaryOfChanges`, `subprocessorsPageUrl`, plus Resend-native `RESEND_UNSUBSCRIBE_URL`.

---

## Setup scripts

| Script | Purpose |
|--------|---------|
| `scripts/sync-resend-supabase-secret.sh` | Sync `RESEND_API_KEY` to Supabase |
| `scripts/resend/setup-subprocessor-resend.mjs` | Create/update segment + broadcast template; print segment/template IDs |

---

## Code references

- Privacy intake: `supabase/functions/privacy-request-intake/index.ts`
- Subprocessor subscribe: `supabase/functions/subscribe-subprocessors/index.ts`
- Broadcast template HTML: `scripts/resend/template-html.mjs`
- Subscribe form UI: `src/components/legal/SubprocessorSubscribeForm.tsx`

---

## Deprecated (remove after verification)

| Secret | Replaced by |
|--------|-------------|
| `LOOPS_API_KEY` | `RESEND_API_KEY` |
| Loops mailing list `cmpuolve5ofgc0jwp4kwt0m2v` | `RESEND_SUBPROCESSOR_SEGMENT_ID` |
