import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const rootEl = document.getElementById("root")!;

/**
 * Boot guard: App is imported dynamically so a failure anywhere in the module
 * graph surfaces as a visible diagnostic instead of silently leaving the
 * pre-rendered static shell in place (which reads as a blank page).
 */
function showBootError(err: unknown) {
  const message = err instanceof Error ? `${err.name}: ${err.message}` : String(err);
  console.error("[tender-light] failed to start:", err);
  rootEl.innerHTML = `
    <div style="max-width:42rem;margin:0 auto;padding:6rem 1.5rem;font-family:Georgia,serif;color:#2c2c2c;">
      <p style="font-size:12px;letter-spacing:0.28em;text-transform:uppercase;color:#9d5a67;">Tender Light</p>
      <h1 style="font-size:2rem;line-height:1.2;margin:0.75rem 0;">The journal couldn't be opened</h1>
      <p style="color:#57534d;line-height:1.8;">Something went wrong while starting the site. A hard refresh usually fixes it.</p>
      <pre style="background:#faf7f2;border:1px solid #e8e0d2;border-radius:8px;padding:1rem;overflow:auto;font-size:12px;color:#9d5a67;"></pre>
    </div>`;
  const pre = rootEl.querySelector("pre");
  if (pre) pre.textContent = message;
}

import("./App.tsx")
  .then(({ default: App }) => {
    ReactDOM.createRoot(rootEl).render(<App />);
  })
  .catch(showBootError);
