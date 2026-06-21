import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const RESEND_TIMEOUT_MS = 8_000;
/** Best-effort per-instance limit for a public subscribe endpoint. */
const IP_RATE_LIMIT = { limit: 5, windowMs: 60 * 60 * 1000 };

interface Body {
  email?: string;
}

interface ResendErrorPayload {
  message?: string;
  name?: string;
}

const isEmail = (v: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && v.length <= 255;

function segmentIdFromEnv(): string | null {
  return (
    Deno.env.get('RESEND_SUBPROCESSOR_SEGMENT_ID')?.trim() ||
    Deno.env.get('RESEND_SUBPROCESSOR_AUDIENCE_ID')?.trim() ||
    null
  );
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
    JSON.stringify({ error: 'Too many requests. Please try again later.' }),
    { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
  );
}

async function resendJson(
  apiKey: string,
  path: string,
  options: RequestInit = {},
): Promise<{ response: Response; payload: ResendErrorPayload | null }> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), RESEND_TIMEOUT_MS);

  try {
    const response = await fetch(`https://api.resend.com${path}`, {
      ...options,
      signal: controller.signal,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    const payload = (await response.json().catch(() => null)) as ResendErrorPayload | null;
    return { response, payload };
  } finally {
    clearTimeout(timeoutId);
  }
}

function isDuplicateContactError(status: number, payload: ResendErrorPayload | null): boolean {
  if (status === 409) return true;
  const message = payload?.message?.toLowerCase() ?? '';
  return message.includes('already') || message.includes('exist');
}

async function subscribeContactToSegment(
  apiKey: string,
  email: string,
  segmentId: string,
): Promise<{ ok: true } | { ok: false; status: number; payload: ResendErrorPayload | null }> {
  const create = await resendJson(apiKey, '/contacts', {
    method: 'POST',
    body: JSON.stringify({
      email,
      unsubscribed: false,
      segments: [{ id: segmentId }],
    }),
  });

  if (create.response.ok) {
    return { ok: true };
  }

  if (!isDuplicateContactError(create.response.status, create.payload)) {
    console.error(
      'subscribe-subprocessors: Resend create contact failed',
      create.response.status,
      create.payload?.message ?? create.payload?.name ?? 'no message',
    );
    return { ok: false, status: create.response.status, payload: create.payload };
  }

  const addToSegment = await resendJson(
    apiKey,
    `/contacts/${encodeURIComponent(email)}/segments/${segmentId}`,
    { method: 'POST' },
  );

  if (addToSegment.response.ok) {
    return { ok: true };
  }

  // Contact may already be on the segment — treat as success.
  const addMessage = addToSegment.payload?.message?.toLowerCase() ?? '';
  if (addToSegment.response.status === 409 || addMessage.includes('already')) {
    return { ok: true };
  }

  const resubscribe = await resendJson(apiKey, `/contacts/${encodeURIComponent(email)}`, {
    method: 'PATCH',
    body: JSON.stringify({ unsubscribed: false }),
  });

  if (resubscribe.response.ok) {
    const retry = await resendJson(
      apiKey,
      `/contacts/${encodeURIComponent(email)}/segments/${segmentId}`,
      { method: 'POST' },
    );
    if (retry.response.ok) {
      return { ok: true };
    }
    const retryMessage = retry.payload?.message?.toLowerCase() ?? '';
    if (retry.response.status === 409 || retryMessage.includes('already')) {
      return { ok: true };
    }
  }

  console.error(
    'subscribe-subprocessors: Resend segment subscribe failed',
    addToSegment.response.status,
    addToSegment.payload?.message ?? addToSegment.payload?.name ?? 'no message',
  );
  return { ok: false, status: addToSegment.response.status, payload: addToSegment.payload };
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
    if (!isWithinRateLimit(`subprocessor-ip:${ip}`, IP_RATE_LIMIT.limit, IP_RATE_LIMIT.windowMs)) {
      return rateLimitedResponse();
    }

    const apiKey = Deno.env.get('RESEND_API_KEY')?.trim();
    const segmentId = segmentIdFromEnv();

    if (!apiKey) {
      console.error('subscribe-subprocessors: missing RESEND_API_KEY');
      return new Response(
        JSON.stringify({ error: 'Subscription is temporarily unavailable. Please try again later.' }),
        { status: 503, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    if (!segmentId) {
      console.error(
        'subscribe-subprocessors: missing RESEND_SUBPROCESSOR_SEGMENT_ID (or RESEND_SUBPROCESSOR_AUDIENCE_ID)',
      );
      return new Response(
        JSON.stringify({ error: 'Subscription is temporarily unavailable. Please try again later.' }),
        { status: 503, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    const body: Body = await req.json().catch(() => ({}));
    const email = (body.email ?? '').trim().toLowerCase();

    if (!isEmail(email)) {
      return new Response(
        JSON.stringify({ error: 'Please enter a valid email address.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    if (
      !isWithinRateLimit(
        `subprocessor-email:${email}`,
        IP_RATE_LIMIT.limit,
        IP_RATE_LIMIT.windowMs,
      )
    ) {
      return rateLimitedResponse();
    }

    const result = await subscribeContactToSegment(apiKey, email, segmentId);

    if (!result.ok) {
      return new Response(
        JSON.stringify({ error: 'Could not subscribe. Please try again later.' }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    return new Response(JSON.stringify({ ok: true, delivery: 'resend' }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    if ((err as Error).name === 'AbortError') {
      return new Response(
        JSON.stringify({ error: 'Could not subscribe. Please try again later.' }),
        { status: 504, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }
    console.error('subscribe-subprocessors error', err);
    return new Response(
      JSON.stringify({ error: 'Unexpected error.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  }
});
