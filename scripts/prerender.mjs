/**
 * Post-build static prerender: writes fully rendered HTML (including react-helmet-async head)
 * for each marketing route into dist/, so crawlers without JS see real content.
 *
 * Route list is derived from src/App.tsx (static paths) plus /legal/* slugs from Legal.tsx.
 */
import { spawn } from "node:child_process";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const dist = join(root, "dist");
const previewPort = 4174;
const previewOrigin = `http://127.0.0.1:${previewPort}`;

function read(p) {
  return readFileSync(join(root, p), "utf8");
}

/** Static <Route path="..."> from App.tsx (no :params, no *). */
function pathsFromAppTsx(source) {
  const out = [];
  for (const m of source.matchAll(/<Route\s+path="([^"]+)"/g)) {
    const path = m[1];
    if (path === "*" || path.includes(":")) continue;
    out.push(path);
  }
  return out;
}

/** /legal/<slug> for each policy slug in Legal.tsx */
function legalPathsFromLegalTsx(source) {
  const slugs = new Set();
  for (const m of source.matchAll(/\{\s*slug:\s*"([^"]+)"/g)) {
    slugs.add(`/legal/${m[1]}`);
  }
  return [...slugs];
}

function collectPrerenderPaths() {
  const app = read("src/App.tsx");
  const legalSrc = read("src/pages/Legal.tsx");
  const fromApp = pathsFromAppTsx(app);
  // /legal without slug only issues a client redirect; skip so crawlers get real pages.
  const staticNoBareLegal = fromApp.filter((p) => p !== "/legal");
  const legal = legalPathsFromLegalTsx(legalSrc);
  return [...new Set([...staticNoBareLegal, ...legal])].sort((a, b) => {
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  });
}

function distHtmlPathForUrlPath(urlPath) {
  if (urlPath === "/" || urlPath === "") return join(dist, "index.html");
  const safe = urlPath.replace(/^\/+/, "").replace(/\/+$/, "");
  return join(dist, safe, "index.html");
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

/**
 * Stock Playwright Chromium expects system libs (e.g. NSPR) missing on Vercel's build image.
 * On Vercel we use @sparticuz/chromium + playwright-core (bundled binary + args for serverless).
 */
async function launchBrowserForPrerender() {
  if (process.env.VERCEL === "1") {
    const chromiumPack = (await import("@sparticuz/chromium")).default;
    const { chromium: pwChromium } = await import("playwright-core");
    return pwChromium.launch({
      args: chromiumPack.args,
      executablePath: await chromiumPack.executablePath(),
      headless: chromiumPack.headless,
    });
  }
  const { chromium } = await import("playwright");
  return chromium.launch({ headless: true });
}

function startPreviewServer() {
  const child = spawn(
    process.platform === "win32" ? "npx.cmd" : "npx",
    ["vite", "preview", "--port", String(previewPort), "--strictPort"],
    {
      cwd: root,
      stdio: ["ignore", "pipe", "pipe"],
      env: { ...process.env },
    }
  );
  let stderr = "";
  child.stderr?.on("data", (d) => {
    stderr += d.toString();
  });
  child.on("error", (err) => {
    stderr += String(err);
  });
  return new Promise(async (resolve, reject) => {
    const deadline = Date.now() + 60_000;
    child.on("exit", (code) => {
      if (code && code !== 0 && Date.now() < deadline) {
        reject(new Error(`vite preview exited early (${code}): ${stderr}`));
      }
    });
    while (Date.now() < deadline) {
      try {
        const res = await fetch(previewOrigin + "/", { redirect: "manual" });
        if (res.ok || res.status === 304) {
          resolve(child);
          return;
        }
      } catch {
        /* not listening yet */
      }
      await sleep(200);
    }
    child.kill("SIGTERM");
    reject(new Error(`Timeout waiting for vite preview (${stderr})`));
  });
}

async function main() {
  const paths = collectPrerenderPaths();
  console.log(`[prerender] ${paths.length} paths:`, paths.join(", "));

  // Preserve Vite's empty-shell index.html before we overwrite `/` with prerendered HTML.
  // Vercel SPA fallback must serve this shell for unknown URLs, not the homepage DOM.
  const spaShell = readFileSync(join(dist, "index.html"), "utf8");
  writeFileSync(join(dist, "spa-fallback.html"), spaShell, "utf8");

  let server;
  const browser = await launchBrowserForPrerender();
  try {
    server = await startPreviewServer();
    // Fresh document per URL so react-helmet-async head tags never leak between routes.
    for (const path of paths) {
      const context = await browser.newContext();
      const page = await context.newPage();
      try {
        const url = `${previewOrigin}${path === "/" ? "/" : path}`;
        await page.goto(url, { waitUntil: "domcontentloaded", timeout: 120_000 });
        await page.waitForFunction(
          () => {
            const el = document.querySelector("#root");
            const t = el?.textContent?.trim() ?? "";
            return t.length > 60;
          },
          { timeout: 120_000 }
        );
      // Let layout effects / short async head updates settle (Helmet).
      await sleep(300);
      // react-helmet-async appends tags with data-rh; index.html still has default OG/twitter/description.
      // Drop the stale shell copies so the first matching tag in source is the route-specific one.
      await page.evaluate(() => {
        const head = document.head;
        const dupSelectors = [
          'meta[name="description"]',
          'meta[property="og:title"]',
          'meta[property="og:description"]',
          'meta[property="og:url"]',
          'meta[property="og:type"]',
          'meta[name="twitter:card"]',
          'meta[name="twitter:title"]',
          'meta[name="twitter:description"]',
        ];
        for (const sel of dupSelectors) {
          const nodes = Array.from(head.querySelectorAll(sel));
          const withRh = nodes.filter((n) => n.hasAttribute("data-rh"));
          if (withRh.length === 0) continue;
          for (const n of nodes) {
            if (!n.hasAttribute("data-rh")) {
              n.remove();
            }
          }
        }
      });
      const html = await page.content();
        const outFile = distHtmlPathForUrlPath(path);
        mkdirSync(dirname(outFile), { recursive: true });
        writeFileSync(outFile, html, "utf8");
        console.log(`[prerender] wrote ${outFile.replace(root + "/", "")}`);
      } finally {
        await context.close();
      }
    }
  } finally {
    await browser.close().catch(() => {});
    if (server?.pid) {
      server.kill("SIGTERM");
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
