import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

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
