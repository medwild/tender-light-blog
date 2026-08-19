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

## Oklahoma local cluster & keyword ledger

A 7th, local pillar — `/oklahoma-wedding-locations/` — targets Oklahoma wedding
and proposal keywords with stronger E-E-A-T: named real places (Guthrie,
Scissortail Park, Wichita Mountains, Tallgrass), official-source citations
(`ok.gov`, `scissortailpark.org`, `myriadgardens.org`, `travelok.com`, `fws.gov`),
cost ranges flagged as "verify current fees", and no fabricated private venues.

The full priority keyword map (Phase 1 quick wins, Phase 2 pillars, Phase 3
monetization) lives in `src/content/keywords.ts` and powers the interactive
"publishing ledger" on the `/guides` map — volume, KD and intent per page.

## LSI / semantic field per cluster

`src/content/semantic.ts` is the vocabulary bank (§13). Each cluster carries its
head keywords + LSI/entity terms; Cluster 1 (Ideas) is fully populated. The
ArticlePage blends an article's own keywords with its cluster's LSI field into
the "In this guide" topical chips, and any term that stem-matches a hub (e.g.
"outfits", "location", "save the date") is rendered as a real internal link via
`hubForTerm` — automated maillage driven purely by the data.

## Writing in the Harper Ellis voice

Every article is written as **Harper Ellis** — former engagement photographer
(8 yrs, 400+ sessions), Austin TX, warm / expert / slightly witty. The full
operating manual is **Mega-Skill v2.0** in `src/content/persona.ts`:

- `SYSTEM_PROMPT_V2` — paste-ready prompt for any AI content session.
- `PERSONA_BIO_LOCK` — the fixed brand facts (never invent new ones).
- `BANNED_WORDS` / `BANNED_PHRASES` / `SERP_LANGUAGE_BAN` — never use.
- `HARPER_PATTERNS` — the 7 voice patterns (use ≥ 5 per article).
- `EEAT_MARKERS` — "I was there" moments, mistake admissions, technical detail.
- `GEO_RULES` — answer-first H2s, quotable statements, stat-backed claims,
  snippet formats, modular ideas, attribution (for AI Overviews / ChatGPT /
  Perplexity citations).
- `READABILITY` — Flesch 60–70, no sentence over 40 words, paragraphs ≤ 4.
- `QUALITY_GATE` — the pre-output checklist (validate before emitting).
- `IDEA_SCHEMA` / `JSON_LD_GRAPH_TYPES` — the dual-output JSON contract.

Per-article checklist: keyword in H1, intro, one H2, conclusion · every H2
answer-first · ≥ 3 quotable statements · ≥ 4 stat-backed claims · E-E-A-T
markers · FAQ 5–8 in spoken language · 3 Pinterest pins · meta ≤ 60 / 150–160
chars · JSON-LD `@graph` with all 7 types · scene-not-instruction close.

> **GEO note:** articles are written to be *cited* by generative engines
> (answer-first sentences, standalone quotable expert lines, first-person
> attribution). The static pre-render carries the full `@graph` JSON-LD.

## Topical authority — hubs & spokes

The silo layer lives in `src/content/hubs.ts`. Six hubs, each targeting ONE
primary keyword (`engagement photo ideas`, `engagement photo poses`, `outdoor
engagement photo ideas`, `what to wear…`, `save the date…`, `engagement photo
print ideas`). Each hub curates its spoke articles in priority order, carries
its own answer-first content (never thin), and cross-links to sibling hubs.

- `/guides` — topical map listing all six hubs (the "start here" page).
- `/hub/:slug` — the keyword-optimized landing page for a silo.
- Maillage interne: every page links to `/guides` via the header; each hub
  links down to its spokes and across to related hubs; spokes link back via
  the persistent nav. This reinforces topical authority without cannibalizing
  the head keyword (`engagement photos`), which is only used as semantic
  support.

To add a hub: push an object into `HUBS`, then create the matching
`public/hub/<slug>/index.html` and add the URL to `public/sitemap.xml`.

## Adding a new article

1. Push a new object into `POSTS` in `src/content/posts.ts`: `slug`, `title`,
   `seoTitle` (≤ 60 chars), `seoDescription` (≤ 155 chars), `excerpt`,
   `category`, `date`, `featuredImage`, `author`, `blocks` (`p`, `h2`/`h3` with
   `id` — feeds the sticky TOC —, `list`, `callout`, `quote`, `gallery`, `faq`
   which auto-emits FAQPage JSON-LD, `ad`, `shop` (affiliate), `leadMagnet`,
   `pinKit` (3-pin Pinterest kit + boards), `pinCta`, `keepReading`).
2. Create the matching pre-render `public/blog/<slug>/index.html` (copy an
   existing article page, swap head meta + body HTML).
3. Add the URL to `public/sitemap.xml`.

## Performance & accessibility

- Fonts: Playfair Display + Inter + Dancing Script, `display=swap`, preconnect.
- Non-hero images lazy-loaded; descriptive alt text everywhere.
- `prefers-reduced-motion` disables Ken Burns, marquee, float and reveals.
- Skip-to-content link, ARIA labels, keyboard-navigable accordions, AA contrast.
