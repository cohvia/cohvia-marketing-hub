import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const MAILING_LIST_ID = 'cmpuolve5ofgc0jwp4kwt0m2v';

interface Body {
  email?: string;
}

const isEmail = (v: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && v.length <= 255;

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get('LOOPS_API_KEY');
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'LOOPS_API_KEY not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
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

    // Try to create the contact first.
    const createRes = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        source: 'cohvia.com subprocessors page',
        subscribed: true,
        mailingLists: { [MAILING_LIST_ID]: true },
      }),
    });

    let data: any = await createRes.json().catch(() => ({}));

    // If contact already exists, update it to ensure they're on the mailing list.
    if (!createRes.ok && (data?.message?.toLowerCase?.().includes('already') || createRes.status === 409)) {
      const updateRes = await fetch('https://app.loops.so/api/v1/contacts/update', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          subscribed: true,
          mailingLists: { [MAILING_LIST_ID]: true },
        }),
      });
      data = await updateRes.json().catch(() => ({}));
      if (!updateRes.ok) {
        console.error('Loops update failed', updateRes.status, data);
        return new Response(
          JSON.stringify({ error: 'Could not subscribe. Please try again later.' }),
          { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
        );
      }
    } else if (!createRes.ok) {
      console.error('Loops create failed', createRes.status, data);
      return new Response(
        JSON.stringify({ error: 'Could not subscribe. Please try again later.' }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  } catch (err) {
    console.error('subscribe-subprocessors error', err);
    return new Response(
      JSON.stringify({ error: 'Unexpected error.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  }
});
