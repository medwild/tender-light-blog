---
name: seo-audit
description: Audit the Tender Light blog against its SEO invariants — topical map closure, thin content, keyword cannibalization, schema coverage, meta lengths, static/SPA parity. Use when asked to audit, check or validate the site's SEO health or content compliance.
---

# SEO audit (Tender Light invariants)

Check the site against the contract in `ARCHITECTURE.md`. Report pass/fail per invariant with the offending slugs.

1. **Topical map closure** — every entry in `POSTS` has a hub in `POST_HUB` and a spoke entry in `src/content/hubs.ts`; no dangling spokes, no empty hubs.
2. **Thin content** — every article ≥ 600 words, has H2s, an FAQ, answer-first sections.
3. **Anti-cannibalization (§23)** — no two pages share a primary keyword/intent; mentions of an owned intent link to its owner (`src/content/keywords.ts`).
4. **Meta contract** — `seoTitle` ≤ 60 chars, `seoDescription` 150–155 chars, canonical trailing-slash URLs.
5. **Schema matrix (§4)** — homepage: Organization+WebSite+Person; hub: CollectionPage+ItemList+FAQPage+BreadcrumbList; article: BlogPosting+FAQPage+BreadcrumbList+ImageObject (`src/lib/seo.ts` generators + static mirrors' `<head>`).
6. **Static/SPA parity** — every `POSTS` slug has `public/{hub}/{slug}/index.html` with matching title/description/canonical, and a `sitemap.xml` entry; no static page without a `POSTS` entry.
7. **Internal maillage** — 3–6 `internalLinks` per article; LSI chips resolvable via `hubForTerm` (`src/content/semantic.ts`).
8. **Persona compliance** — spot-check articles against `src/content/persona.ts` (banned words, Harper patterns, E-E-A-T markers).

Run `npm run typecheck` as a baseline and summarize findings ranked by severity.
