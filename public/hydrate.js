/**
 * Progressive-enhancement bridge.
 *
 * Every route is served as pre-rendered static HTML (full content, meta and
 * JSON-LD — readable by Google, Pinterest and every crawler with no JS).
 * This module then discovers the hashed SPA bundle from the Vite-built
 * index.html and boots the interactive app on top of the static page.
 *
 * If anything fails, the static page simply remains: content-first by design.
 */
(async function hydrate() {
  try {
    const shell = await fetch("/index.html", { cache: "no-cache" }).then((r) => r.text());
    const match = shell.match(/(?:src|href)="(\/assets\/index-[^"]+\.js)"/);
    if (match) {
      await import(match[1]);
    }
  } catch (err) {
    // Static pre-rendered page stays fully readable — nothing to do.
    console.info("[tender-light] SPA hydration skipped:", err);
  }
})();
