import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const PRIVACY_INBOX = 'privacy@cohvia.com';
const LOOPS_TIMEOUT_MS = 8_000;
/** Best-effort per-instance limit for a public intake endpoint. */
const IP_RATE_LIMIT = { limit: 5, windowMs: 60 * 60 * 1000 };

const REQUEST_TYPES = new Set([
  'access',
  'correction',
  'deletion',
  'portability',
  'objection',
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
  companyWebsite?: string;
  locale?: string;
}

const isEmail = (v: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && v.length <= 255;

function trimField(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function requestTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    access: 'Access / copy',
    correction: 'Correction',
    deletion: 'Deletion',
    portability: 'Portability export',
    objection: 'Objection to processing',
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

    if (trimField(body.companyWebsite, 200)) {
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

    const apiKey = Deno.env.get('LOOPS_API_KEY');
    const transactionalId = Deno.env.get('LOOPS_PRIVACY_REQUEST_TRANSACTIONAL_ID');

    if (!(apiKey && transactionalId)) {
      console.error('privacy-request-intake: Loops not configured');
      return new Response(
        JSON.stringify({
          error: 'Privacy request intake is temporarily unavailable. Please email privacy@cohvia.com.',
        }),
        { status: 503, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    const submittedAt = new Date().toISOString();
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), LOOPS_TIMEOUT_MS);

    let response: Response;
    try {
      response = await fetch('https://app.loops.so/api/v1/transactional', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
        body: JSON.stringify({
          transactionalId,
          email: PRIVACY_INBOX,
          dataVariables: {
            submitterName: fullName,
            submitterEmail: email,
            requestType: requestTypeLabel(requestType),
            relationship: relationshipLabel(relationship),
            organizationName: organizationName || '—',
            details,
            locale,
            submittedAt,
          },
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

    if (!response.ok) {
      console.error(
        'privacy-request-intake: Loops send failed',
        response.status,
        response.headers.get('x-request-id') ?? 'no-request-id',
      );
      return new Response(
        JSON.stringify({ error: 'Could not submit your request. Please try again later.' }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
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
