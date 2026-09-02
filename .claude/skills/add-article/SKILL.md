---
name: add-article
description: Publish a new article on Tender Light following the full validation gate — topical map check, POSTS/POST_META/hubs.ts entries, static mirror and sitemap. Use when the user asks to add, write or publish a new blog article/post/page.
---

# Add an article (Tender Light validation gate)

Follow ARCHITECTURE.md §6 strictly. Never create a page outside the topical map.

1. **Topical map check** — the target keyword must belong to one of the 7 hubs in `src/content/hubs.ts`. If not: propose either a new spoke under an existing hub or an explicit new hub decision — never an orphan page.
2. **Intent ownership** — check `src/content/keywords.ts` (KEYWORD_MAP + INTENT_OWNERSHIP). If the keyword is owned by another page, link to it instead of creating a page.
3. **Content model** — add the article object to `POSTS` in `src/content/posts.ts` (large articles get their own `src/content/<name>Article.ts` imported there). Blocks: `p`, `h2`/`h3` (with `id` → TOC), `list`, `callout`, `quote`, `gallery`, `faq` (auto-emits FAQPage JSON-LD), `ad`, `shop`, `leadMagnet`, `pinKit`, `pinCta`, `keepReading`.
4. **Frontmatter** — add to `POST_META`: `primaryKeyword`, `secondaryKeywords`, `lsiKeywords`, `searchIntent`, `internalLinks` (3–6 descriptive anchors), `relatedPosts` (same cluster first), `citations` (verifiable facts, official sources only), `pinImages` (3 × 1000×1500), `monetization`. The `cluster` comes from `POST_HUB` — never hand-declared.
5. **Hub registration** — add the spoke to the hub in `src/content/hubs.ts`.
6. **Voice** — write as Harper Ellis (`src/content/persona.ts`): ≥ 5 of the 7 HARPER_PATTERNS, answer-first H2s, ≥ 3 quotable statements, ≥ 4 stat-backed claims, E-E-A-T markers, FAQ 5–8 in spoken language, respect BANNED_WORDS/PHRASES, readability Flesch 60–70.
7. **Static mirror** — create `public/{hub}/{slug}/index.html` (copy an existing article page from the same cluster, swap head meta + body HTML) and add the URL to `public/sitemap.xml`.
8. **Verify** — run `npm run typecheck`; the `/guides` desks (Final Checklist §24, Intégrité topologique §25) must stay green: ≥ 600 words, cluster + intent + keyword + links + schema all present.
