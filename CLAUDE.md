# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Tender Light** — an SEO-first blog for couple & engagement photography. Next.js 14 (App Router) + React 18 + Tailwind v4 + TypeScript, in static-export mode (`output: "export"` → `out/`). Every route is fully prerendered HTML at build time — meta, canonical, OG and JSON-LD ship in the `<head>` with client islands hydrating only interactive widgets. This replaces the old "Shadow SSG" pattern (Vite SPA + hand-written mirrors in `public/`).

## Commands

```bash
npm install
npm run dev        # next dev on 0.0.0.0:3000 (strict port; on-demand rendering in dev)
npm run build      # next build → out/ (static export; NODE_ENV=production)
npm run start      # node scripts/serve-export.mjs — serve out/ locally on :3000
npm run typecheck  # tsc --noEmit
```

No test runner or linter is configured.

## Architecture — static export (one content model, one build)

1. **App shell** (`src/app/`): file-tree routing with clean URLs (`/{hub}/{slug}/`, trailing slashes everywhere via `trailingSlash: true`). `layout.tsx` carries default metadata + fonts (`next/font/google`, self-hosted, `display: swap`) + Header/Footer. `generateMetadata()` per route replaces the old `applySeo()` DOM mutation; `src/components/JsonLd.tsx` injects JSON-LD inline.
2. **Dynamic routes**: `src/app/[hub]/page.tsx` and `src/app/[hub]/[slug]/page.tsx` with `generateStaticParams()` over the content model and `dynamicParams = false` (unknown slugs 404). Static segments (`/guides/`, `/about/`, legal pages) win over `[hub]`.
3. **Export**: `next build` emits `out/` — 35 sitemap URLs + 3 noindex legal pages + `404.html`; `app/sitemap.ts` and `app/robots.ts` generate `sitemap.xml`/`robots.txt` from the model, so they can never drift from the routes. `public/` now holds only `logo.svg`.
4. **Dev quirk**: `output: "export"` is gated on `NODE_ENV === "production"` in `next.config.mjs` — Next 14's dev server mis-detects `generateStaticParams()` under `output: "export"` (500s on `[hub]` routes). `next dev` therefore renders the same routes on demand; the build is the export.

**Source of truth:** `src/content/posts.ts` drives everything — pages, metadata, JSON-LD, sitemap. One edit, one build; no second layer to sync.

## SEO content model (the real architecture)

This repo is mostly a content/SEO machine. The layer map in `ARCHITECTURE.md` is the contract — read it before adding pages.

- `src/content/posts.ts` — `POSTS` (article bodies as typed blocks), `POST_HUB` (cluster assignment, derived — never hand-declared), `POST_META` (frontmatter: keywords, intent, internal links, citations, pins, monetization). Large articles are split into their own files (`*Article.ts`) and imported here.
- `src/content/hubs.ts` — 7 hubs (topical map): ideas, poses, locations, outfits, save-the-date, prints, wedding-day-logistics. Hubs target ONE primary keyword each.
- `src/content/semantic.ts` — LSI vocabulary per cluster + `linkOverrides` (entity-level internal maillage).
- `src/content/keywords.ts` — keyword map (3 phases) + intent ownership (§23 anti-cannibalization).
- `src/lib/seo.ts` — all JSON-LD generators (Article, FAQPage, BreadcrumbList, CollectionPage, ItemList, Organization, WebSite, Person). Pure builders consumed by `generateMetadata`/`JsonLd`. `faq` blocks auto-emit FAQPage schema.
- `src/lib/router.tsx` — `Link` (thin `next/link` wrapper, accepts `to`) + `normalizePath` for active-state math. Routing itself lives in the `src/app/` file tree.
- `src/content/persona.ts` — the Harper Ellis writing persona (system prompt, banned words, voice patterns, E-E-A-T markers, GEO rules, quality gate). All articles are written in this voice.

**Validation gate for any new page** (from `ARCHITECTURE.md` §6): keyword must belong to a hub → check intent ownership (link to owner instead of creating a page if owned) → add to `POSTS` + `POST_HUB` + `POST_META` → add the slug to the hub's `spokes` in `hubs.ts`. The export generates the page, prerendered HTML and sitemap entry. No page outside the topical map, no thin content; the `/guides` desk surfaces these invariants live.

## Adding an article (quick path)

1. New object in `POSTS` (`src/content/posts.ts`): slug, `cluster` (hub slug — this also registers the route), title, `seoTitle` ≤ 60c, `seoDescription` ≤ 155c, excerpt, category, date, featuredImage, author, `blocks` (`p`, `h2`/`h3` with `id` → sticky TOC, `list`, `callout`, `quote`, `gallery`, `faq` → FAQPage JSON-LD, `ad`, `shop`, `leadMagnet`, `pinKit`, `keepReading`).
2. Frontmatter in `POST_META` (§3 contract: primaryKeyword, secondaryKeywords, lsiKeywords, searchIntent, internalLinks 3–6, relatedPosts, citations, pinImages, monetization).
3. Add the slug to the hub's `spokes` array in `src/content/hubs.ts` (drives the hub index ordering). Nothing else — `generateStaticParams`, the prerendered HTML and the sitemap entry all derive from steps 1–2.

## Conventions

- Trailing-slash URLs everywhere; use `Link` from `src/lib/router.tsx` for internal nav, never raw `<a>` (except `#` anchors, which `Link` passes through).
- Server components by default. `'use client'` only on interactive islands (`src/components/blog-client.tsx`: FAQ accordion, TOC scroll-spy, share buttons; plus Reveal, NewsletterForm, Header/Footer) — article bodies must stay pure static HTML.
- `src/lib/content.ts` is the barrel re-exporting content helpers.
- `src/views/` (not `src/pages/` — that name belongs to Next's Pages Router) holds the live page-component trio: `home.tsx`, `detail.tsx`, `misc.tsx`.
- MDX migration contract for a future content reformat lives in `src/content/mdx/` (`_SCHEMA.md`, `_template.mdx`).
- Accessibility/perf: `display=swap` fonts, lazy non-hero images, `prefers-reduced-motion` disables animations, skip-to-content, AA contrast.
