#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
KEY_FILE="$ROOT/resend-key.local"
PROJECT_REF="yawquhkjrgyluqbugwas"

if [[ ! -f "$KEY_FILE" ]]; then
  echo "Missing $KEY_FILE — add RESEND_API_KEY=re_... and rerun." >&2
  exit 1
fi

# shellcheck disable=SC1090
source "$KEY_FILE"

if [[ -z "${RESEND_API_KEY:-}" || "$RESEND_API_KEY" == re_*paste* ]]; then
  echo "Set RESEND_API_KEY in resend-key.local first." >&2
  exit 1
fi

echo "Testing Resend key..."
TEST_BODY=$(curl -sS -X POST 'https://api.resend.com/emails' \
  -H "Authorization: Bearer $RESEND_API_KEY" \
  -H 'Content-Type: application/json' \
  -d '{
    "from": "Cohvia <notifications@mail.cohvia.com>",
    "to": ["privacy@cohvia.com"],
    "subject": "Resend key test (Cohvia)",
    "html": "<p>Key test before Supabase secret sync.</p>"
  }')

if echo "$TEST_BODY" | grep -q '"id"'; then
  echo "Resend key OK."
else
  echo "Resend rejected this key:" >&2
  echo "$TEST_BODY" >&2
  exit 1
fi

echo "Updating Supabase Edge Function secret on $PROJECT_REF..."
cd "$ROOT"
npx --yes supabase@2.99.0 secrets set "RESEND_API_KEY=$RESEND_API_KEY" --project-ref "$PROJECT_REF"

echo "Done. Submit the privacy form on cohvia.com/legal/privacy to verify."
