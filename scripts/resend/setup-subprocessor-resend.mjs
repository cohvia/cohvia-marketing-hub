#!/usr/bin/env node
// biome-ignore-all lint/suspicious/noConsole: CLI setup script for Resend marketing assets
/**
 * COH-166 / COH-167 — Provision Resend segment + broadcast template for subprocessor notifications.
 *
 * Usage (loads RESEND_API_KEY from resend-key.local or .env):
 *   node scripts/resend/setup-subprocessor-resend.mjs
 *
 * Safe to re-run: finds existing segment/template by name or alias and updates in place.
 */

import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  DEFAULT_FROM,
  MARKETING_TEMPLATES,
  SUBPROCESSOR_SEGMENT_NAME,
} from './template-html.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '../..');
const KEY_FILE = join(ROOT, 'resend-key.local');

function loadApiKey() {
  if (process.env.RESEND_API_KEY?.trim()) {
    return process.env.RESEND_API_KEY.trim();
  }

  try {
    const raw = readFileSync(KEY_FILE, 'utf8');
    for (const line of raw.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      if (trimmed.startsWith('export ')) {
        const exportMatch = trimmed.match(/^export\s+RESEND_API_KEY=(.+)$/);
        if (exportMatch?.[1]) {
          return exportMatch[1].replace(/^["']|["']$/g, '').trim();
        }
      }
      const match = trimmed.match(/^RESEND_API_KEY=(.+)$/);
      if (match?.[1]) {
        return match[1].replace(/^["']|["']$/g, '').trim();
      }
    }
  } catch {
    // fall through
  }

  console.error('Missing RESEND_API_KEY. Add it to resend-key.local or export it, then re-run:');
  console.error('  node scripts/resend/setup-subprocessor-resend.mjs');
  process.exit(1);
}

const API_KEY = loadApiKey();
const BASE = 'https://api.resend.com';

async function resendFetch(path, options = {}) {
  const response = await fetch(`${BASE}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  const text = await response.text();
  let json = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = { raw: text };
  }

  if (!response.ok) {
    throw new Error(
      `Resend ${options.method ?? 'GET'} ${path} failed (${response.status}): ${JSON.stringify(json)}`,
    );
  }

  return json;
}

async function listAllSegments() {
  const segments = [];
  let after = null;

  while (true) {
    const query = new URLSearchParams({ limit: '100' });
    if (after) query.set('after', after);

    const data = await resendFetch(`/segments?${query.toString()}`);
    const page = data?.data ?? [];
    segments.push(...page);

    if (!data?.has_more || page.length === 0) break;
    after = page[page.length - 1].id;
  }

  return segments;
}

async function ensureSegment(name) {
  const existing = (await listAllSegments()).find((segment) => segment.name === name);
  if (existing) {
    console.log(`= Segment already exists: ${name} → ${existing.id}`);
    return existing.id;
  }

  const created = await resendFetch('/segments', {
    method: 'POST',
    body: JSON.stringify({ name }),
  });
  console.log(`+ Created segment: ${name} → ${created.id}`);
  return created.id;
}

async function listAllTemplates() {
  const templates = [];
  let after = null;

  while (true) {
    const query = new URLSearchParams({ limit: '100' });
    if (after) query.set('after', after);

    const data = await resendFetch(`/templates?${query.toString()}`);
    const page = data?.data ?? [];
    templates.push(...page);

    if (!data?.has_more || page.length === 0) break;
    after = page[page.length - 1].id;
  }

  return templates;
}

async function createTemplate(definition) {
  return resendFetch('/templates', {
    method: 'POST',
    body: JSON.stringify({
      name: definition.name,
      alias: definition.alias,
      from: definition.from ?? DEFAULT_FROM,
      subject: definition.subject,
      html: definition.html,
      text: definition.text,
      variables: definition.variables.map((variable) => ({
        key: variable.key,
        type: variable.type,
        fallback_value: variable.fallback_value,
      })),
    }),
  });
}

async function updateTemplate(id, definition) {
  return resendFetch(`/templates/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      name: definition.name,
      from: definition.from ?? DEFAULT_FROM,
      subject: definition.subject,
      html: definition.html,
      text: definition.text,
      variables: definition.variables.map((variable) => ({
        key: variable.key,
        type: variable.type,
        fallback_value: variable.fallback_value,
      })),
    }),
  });
}

async function publishTemplate(id) {
  return resendFetch(`/templates/${id}/publish`, { method: 'POST' });
}

async function ensureTemplate(definition, byAlias) {
  const existing = byAlias.get(definition.alias);
  if (existing) {
    await updateTemplate(existing.id, definition);
    await publishTemplate(existing.id);
    console.log(`= Updated and published template: ${definition.alias} → ${existing.id}`);
    return existing.id;
  }

  const created = await createTemplate(definition);
  await publishTemplate(created.id);
  console.log(`+ Created and published template: ${definition.alias} → ${created.id}`);
  return created.id;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log('Ensuring Resend segment for subprocessor subscribe form…');
  const segmentId = await ensureSegment(SUBPROCESSOR_SEGMENT_NAME);

  console.log('\nEnsuring broadcast template…');
  const existingTemplates = await listAllTemplates();
  const byAlias = new Map(existingTemplates.filter((t) => t.alias).map((t) => [t.alias, t]));

  const templateIds = {};
  for (const definition of MARKETING_TEMPLATES) {
    templateIds[definition.alias] = await ensureTemplate(definition, byAlias);
    await sleep(300);
  }

  console.log('\n--- Add these to Supabase Edge Function secrets (project yawquhkjrgyluqbugwas) ---\n');
  console.log(`RESEND_SUBPROCESSOR_SEGMENT_ID=${segmentId}`);
  console.log(`# legacy alias accepted by edge function: RESEND_SUBPROCESSOR_AUDIENCE_ID=${segmentId}`);
  console.log(`RESEND_SUBPROCESSOR_CHANGE_TEMPLATE_ID=${templateIds['cohvia-subprocessor-change']}`);
  console.log(`# or use template alias: cohvia-subprocessor-change`);
  console.log('\nDeploy after secrets are set:');
  console.log('  npx supabase functions deploy subscribe-subprocessors --project-ref yawquhkjrgyluqbugwas');
  console.log('\nRunbook: docs/subprocessor-change-notifications.md');
}

main().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
