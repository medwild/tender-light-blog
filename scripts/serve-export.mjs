import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { join, normalize, extname } from "node:path";

/**
 * Local preview for the static export (`npm run build && npm start`).
 * Mirrors trailing-slash → index.html resolution and serves out/404.html
 * for unknown paths, like a real static host would.
 */
const root = join(process.cwd(), "out");
const types = { ".html": "text/html", ".xml": "application/xml", ".txt": "text/plain", ".svg": "image/svg+xml", ".js": "text/javascript", ".css": "text/css", ".woff2": "font/woff2" };

createServer(async (req, res) => {
  try {
    let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (p.endsWith("/")) p = join(p, "index.html");
    let file = normalize(join(root, p));
    if (!file.startsWith(root)) throw new Error("escape");
    let stat;
    try { stat = await readFile(file); } catch {
      file = join(root, "404.html");
      stat = await readFile(file);
      res.writeHead(404, { "content-type": "text/html" });
      return res.end(stat);
    }
    res.writeHead(200, { "content-type": types[extname(file)] ?? "application/octet-stream" });
    res.end(stat);
  } catch (e) { res.writeHead(500); res.end(String(e)); }
}).listen(3000, () => console.log("serving out/ on 3000"));
