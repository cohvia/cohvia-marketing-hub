import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const PRIVACY_INBOX = 'privacy@cohvia.com';
const DEFAULT_FROM = 'Cohvia Privacy <privacy@cohvia.com>';
const RESEND_TIMEOUT_MS = 8_000;
/** Best-effort per-instance limit for a public intake endpoint. */
const IP_RATE_LIMIT = { limit: 5, windowMs: 60 * 60 * 1000 };

const REQUEST_TYPES = new Set([
  'access',
  'correction',
  'deletion',
  'portability',
  'objection',
  'complaint',
  'other',
]);

const RELATIONSHIPS = new Set([
  'data_subject',
  'authorized_agent',
  'customer_admin',
  'other',
]);

interface Body {
  fullName?: string;
  email?: string;
  requestType?: string;
  relationship?: string;
  organizationName?: string;
  details?: string;
  /** Legacy honeypot name (password managers often filled "Company website"). */
  companyWebsite?: string;
  /** Current honeypot — must stay empty; autofill should not target this key. */
  leave_blank_honeypot?: string;
  locale?: string;
}

interface ResendSendResponse {
  id?: string;
  name?: string;
  message?: string;
}

const isEmail = (v: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && v.length <= 255;

function trimField(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function requestTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    access: 'Access / copy',
    correction: 'Correction',
    deletion: 'Deletion',
    portability: 'Portability export',
    objection: 'Objection to processing',
    complaint: 'Data protection complaint',
    other: 'Other',
  };
  return labels[type] ?? type;
}

function relationshipLabel(value: string): string {
  const labels: Record<string, string> = {
    data_subject: 'Data subject',
    authorized_agent: 'Authorized agent',
    customer_admin: 'Customer account admin',
    other: 'Other',
  };
  return labels[value] ?? value;
}

function buildPrivacyIntakeEmail(params: {
  submitterName: string;
  submitterEmail: string;
  requestType: string;
  relationship: string;
  organizationName: string;
  details: string;
  locale: string;
  submittedAt: string;
}): { subject: string; html: string; text: string } {
  const {
    submitterName,
    submitterEmail,
    requestType,
    relationship,
    organizationName,
    details,
    locale,
    submittedAt,
  } = params;

  const subject = `New privacy request from ${submitterName}`;

  const text = [
    'A new privacy / data-rights request was submitted on cohvia.com.',
    '',
    `Name: ${submitterName}`,
    `Email: ${submitterEmail}`,
    `Request type: ${requestType}`,
    `Relationship: ${relationship}`,
    `Organization: ${organizationName}`,
    `Locale: ${locale}`,
    `Submitted at: ${submittedAt}`,
    '',
    'Details:',
    details,
    '',
    `---`,
    `Reply directly to ${submitterEmail} to respond.`,
  ].join('\n');

  const html = [
    '<p>A new privacy / data-rights request was submitted on cohvia.com.</p>',
    '<table cellpadding="0" cellspacing="0" style="border-collapse:collapse">',
    `<tr><td style="padding:4px 12px 4px 0;font-weight:600">Name</td><td>${escapeHtml(submitterName)}</td></tr>`,
    `<tr><td style="padding:4px 12px 4px 0;font-weight:600">Email</td><td>${escapeHtml(submitterEmail)}</td></tr>`,
    `<tr><td style="padding:4px 12px 4px 0;font-weight:600">Request type</td><td>${escapeHtml(requestType)}</td></tr>`,
    `<tr><td style="padding:4px 12px 4px 0;font-weight:600">Relationship</td><td>${escapeHtml(relationship)}</td></tr>`,
    `<tr><td style="padding:4px 12px 4px 0;font-weight:600">Organization</td><td>${escapeHtml(organizationName)}</td></tr>`,
    `<tr><td style="padding:4px 12px 4px 0;font-weight:600">Locale</td><td>${escapeHtml(locale)}</td></tr>`,
    `<tr><td style="padding:4px 12px 4px 0;font-weight:600">Submitted at</td><td>${escapeHtml(submittedAt)}</td></tr>`,
    '</table>',
    '<p style="font-weight:600;margin-top:16px">Details</p>',
    `<pre style="white-space:pre-wrap;font-family:inherit;margin:0">${escapeHtml(details)}</pre>`,
    `<p style="margin-top:16px">Reply directly to <a href="mailto:${escapeHtml(submitterEmail)}">${escapeHtml(submitterEmail)}</a> to respond.</p>`,
  ].join('');

  return { subject, html, text };
}

function clientIp(req: Request): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip')?.trim() ??
    'unknown'
  );
}

const hitsByKey = new Map<string, number[]>();

function isWithinRateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const windowStart = now - windowMs;
  const prev = hitsByKey.get(key) ?? [];
  const inWindow = prev.filter((t) => t > windowStart);
  if (inWindow.length >= limit) {
    hitsByKey.set(key, inWindow);
    return false;
  }
  inWindow.push(now);
  hitsByKey.set(key, inWindow);
  return true;
}

function rateLimitedResponse(): Response {
  return new Response(
    JSON.stringify({ error: 'Too many requests. Please try again later or email privacy@cohvia.com.' }),
    { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
  );
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const ip = clientIp(req);
    if (!isWithinRateLimit(`privacy-ip:${ip}`, IP_RATE_LIMIT.limit, IP_RATE_LIMIT.windowMs)) {
      return rateLimitedResponse();
    }

    const body: Body = await req.json().catch(() => ({}));

    // Honeypot: any non-empty value = likely bot / password-manager autofill.
    if (
      trimField(body.companyWebsite, 200) ||
      trimField(body.leave_blank_honeypot, 200)
    ) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const fullName = trimField(body.fullName, 200);
    const email = trimField(body.email, 255).toLowerCase();
    const requestType = trimField(body.requestType, 32);
    const relationship = trimField(body.relationship, 32);
    const organizationName = trimField(body.organizationName, 200);
    const details = trimField(body.details, 4000);
    const locale = trimField(body.locale, 8) || 'en';

    if (!fullName || !details) {
      return new Response(
        JSON.stringify({ error: 'Please complete all required fields.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    if (!isEmail(email)) {
      return new Response(
        JSON.stringify({ error: 'Please enter a valid email address.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    if (
      !isWithinRateLimit(`privacy-email:${email}`, IP_RATE_LIMIT.limit, IP_RATE_LIMIT.windowMs)
    ) {
      return rateLimitedResponse();
    }

    if (!REQUEST_TYPES.has(requestType) || !RELATIONSHIPS.has(relationship)) {
      return new Response(
        JSON.stringify({ error: 'Invalid request options.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    const apiKey = Deno.env.get('RESEND_API_KEY')?.trim();
    const fromAddress = Deno.env.get('RESEND_PRIVACY_FROM')?.trim() || DEFAULT_FROM;

    if (!apiKey) {
      console.error('privacy-request-intake: Resend not configured (missing RESEND_API_KEY)');
      return new Response(
        JSON.stringify({
          error: 'Privacy request intake is temporarily unavailable. Please email privacy@cohvia.com.',
        }),
        { status: 503, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    console.log('privacy-request-intake: validated, invoking Resend');

    const submittedAt = new Date().toISOString();
    const emailContent = buildPrivacyIntakeEmail({
      submitterName: fullName,
      submitterEmail: email,
      requestType: requestTypeLabel(requestType),
      relationship: relationshipLabel(relationship),
      organizationName: organizationName || '—',
      details,
      locale,
      submittedAt,
    });

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), RESEND_TIMEOUT_MS);

    let response: Response;
    try {
      response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
        body: JSON.stringify({
          from: fromAddress,
          to: [PRIVACY_INBOX],
          reply_to: email,
          subject: emailContent.subject,
          html: emailContent.html,
          text: emailContent.text,
        }),
      });
    } catch (err) {
      if ((err as Error).name === 'AbortError') {
        return new Response(
          JSON.stringify({ error: 'Could not submit your request. Please try again later.' }),
          { status: 504, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
        );
      }
      throw err;
    } finally {
      clearTimeout(timeoutId);
    }

    const resendPayload = (await response.json().catch(() => null)) as ResendSendResponse | null;

    if (!response.ok) {
      console.error(
        'privacy-request-intake: Resend HTTP error',
        response.status,
        resendPayload?.message ?? resendPayload?.name ?? 'no message',
      );
      return new Response(
        JSON.stringify({ error: 'Could not submit your request. Please try again later.' }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    if (!resendPayload?.id) {
      console.error(
        'privacy-request-intake: Resend response did not confirm send',
        resendPayload == null ? 'empty or non-json body' : JSON.stringify(resendPayload),
      );
      return new Response(
        JSON.stringify({
          error:
            'Privacy intake could not confirm the notification email was sent. Verify RESEND_API_KEY and the verified sending domain in Resend, then try again — or email privacy@cohvia.com.',
        }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    console.log('privacy-request-intake: Resend call finished (confirmed send)', resendPayload.id);

    // `delivery` lets you tell honeypot (`{ ok: true }` only) from Resend path in DevTools → Network.
    return new Response(JSON.stringify({ ok: true, delivery: 'resend' }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('privacy-request-intake error', (err as Error).name);
    return new Response(
      JSON.stringify({ error: 'Unexpected error.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  }
});
