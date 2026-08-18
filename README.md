# Tender Light — The Engagement Photo Journal

An SEO-first blog for the *couple & engagement photography* niche: poses, outfit
guides, golden-hour tips and scouted locations.

## Architecture — "Shadow SSG" (pre-rendered SPA)

This workspace builds with **Vite + React + Tailwind v4** (the build pipeline is
locked to `vite build`, so a Next.js build cannot run here). To deliver the SEO
properties of Next.js SSG on this stack, every route is **pre-rendered as a real
static HTML file** — crawlers never see an empty shell:

```
index.html                                  → home (pre-rendered body in #root)
public/blog/index.html                      → /blog/
public/blog/<slug>/index.html               → /blog/<slug>/   (full article HTML)
public/category/<slug>/index.html           → /category/<slug>/
public/about/index.html · contact/index.html
public/static.css                           → critical CSS for static pages
public/hydrate.js                           → progressive-enhancement bridge
public/sitemap.xml · robots.txt             → served statically
```

**How it works**

1. Each static page ships **complete content + `<head>`**: title (≤60c),
   description (≤155c), canonical, Open Graph (`og:image` 1200×630-class),
   Twitter card and JSON-LD (`Article`, `BreadcrumbList`, `FAQPage`,
   `CollectionPage`, `Organization`, `WebSite`). Pinterest, Facebook, Google and
   Bing read everything **without executing JavaScript** — Rich Pins work.
2. Routing uses the **History API with clean URLs** (`/blog/my-post/`, no
   hashes), so every internal link is a real, crawlable `<a href>`.
3. `hydrate.js` (stable filename) discovers the hashed Vite bundle from the
   built `index.html` and dynamically imports it — the React SPA then mounts
   over the static shell for interactive visitors. If JS fails, the static page
   remains fully readable: content-first by design.
4. `src/lib/seo.ts` keeps the SPA's meta/JSON-LD in sync with the static files
   (same titles, same canonicals, trailing-slash URLs everywhere).

**Source of truth:** `src/content/posts.ts` drives the interactive app; the
static mirrors in `public/` are the crawler layer. When editing an article,
update both (or regenerate the mirrors on deploy).

**Deploying (Vercel/Netlify):** static hosting serves directory `index.html`
files natively, so every route resolves to its pre-rendered page. Optional
hardening on Vercel: add SPA-fallback rewrites so unknown paths serve the app.

## The Next.js 14 endgame (Option B)

The content model maps 1:1 to App Router:

- move each `POSTS` entry → `src/content/posts/<slug>.mdx` (frontmatter = same keys)
- `app/blog/[slug]/page.tsx` → `generateStaticParams()` returning the slug array,
  `generateMetadata()` = current `seo.ts` values, `dynamic = 'force-static'`
- `app/categories/[category]/page.tsx` → same pattern for the 4 categories
- `app/sitemap.ts` / `app/robots.ts` replace the static files in `public/`
- swap `<img>` for `next/image`, fonts already match (`next/font/google`)

## Scripts

```bash
npm install     # install dependencies
npm run dev     # local dev server
npm run build   # production build → dist/ (copies public/ pre-renders as-is)
npm run typecheck
```

## Adding a new article

1. Push a new object into `POSTS` in `src/content/posts.ts`: `slug`, `title`,
   `seoTitle` (≤ 60 chars), `seoDescription` (≤ 155 chars), `excerpt`,
   `category`, `date`, `featuredImage`, `author`, `blocks` (`p`, `h2`/`h3` with
   `id` — feeds the sticky TOC —, `list`, `callout`, `quote`, `gallery`, `faq`
   which auto-emits FAQPage JSON-LD).
2. Create the matching pre-render `public/blog/<slug>/index.html` (copy an
   existing article page, swap head meta + body HTML).
3. Add the URL to `public/sitemap.xml`.

## Performance & accessibility

- Fonts: Playfair Display + Inter + Dancing Script, `display=swap`, preconnect.
- Non-hero images lazy-loaded; descriptive alt text everywhere.
- `prefers-reduced-motion` disables Ken Burns, marquee, float and reveals.
- Skip-to-content link, ARIA labels, keyboard-navigable accordions, AA contrast.
