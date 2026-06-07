# Cohvia marketing site

Vite + React + React Router, deployed on Vercel.

## Static prerender (SEO / AI crawlers)

`npm run build` runs `vite build`, installs Playwright Chromium if needed, then `scripts/prerender.mjs` snapshots each route from `vite preview` into `dist/**/index.html` so view-source includes real body content and `react-helmet-async` head tags.

- **Routes:** Derived automatically from `<Route path="...">` in `src/App.tsx` (static paths only) plus `/legal/*` slugs from `src/pages/Legal.tsx`. Add a route in `App.tsx` and it is included on the next build.
- **SPA fallback:** `dist/spa-fallback.html` is the pre-prerender empty shell. `vercel.json` rewrites unknown paths to `/spa-fallback.html` so deep links that are not pre-rendered still boot the client without serving the homepage HTML (which would break hydration).

## Local

```bash
npm install
npm run dev
npm run build   # includes prerender; requires Chromium download on first run
```
