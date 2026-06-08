import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import posthog from "posthog-js";

posthog.init(import.meta.env.VITE_POSTHOG_TOKEN, {
  api_host: import.meta.env.VITE_POSTHOG_HOST,
  defaults: "2026-01-30",
});

const container = document.getElementById("root");
if (!container) {
  throw new Error("Missing #root");
}

const tree = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Post-build prerender fills #root; hydrate on first paint, createRoot on empty shell (dev).
if (container.hasChildNodes()) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
