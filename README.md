# Tender Light — The Engagement Photo Journal

An SEO-first blog for the *couple & engagement photography* niche: poses, outfit
guides, golden-hour tips and scouted locations.

> **Note on the stack** — this workspace ships as a **Vite + React + Tailwind v4**
> single-page build, so the requested Next.js 14 architecture is mirrored 1:1 in an
> SPA-safe way: routes are hash-based (`#/blog/:slug`, `#/category/:slug`), content
> lives in a typed block tree (the MDX equivalent, see `src/content/posts.ts`), and
> `src/lib/seo.ts` rewrites `<title>`, meta, canonical, Open Graph and JSON-LD on
> every navigation — exactly what `generateMetadata` + `generateStaticParams` do at
> build time in a Next deploy. `public/robots.txt` and `public/sitemap.xml` are
> served statically.

## Pages

| Route | File | Schema.org |
| --- | --- | --- |
| `/` | `src/pages/HomePage.tsx` | Organization, WebSite (SearchAction) |
| `/blog`, `/blog/page/N` | `src/pages/BlogIndexPage.tsx` | BreadcrumbList, CollectionPage |
| `/blog/:slug` | `src/pages/ArticlePage.tsx` | Article, BreadcrumbList, FAQPage |
| `/category/:slug` | `src/pages/CategoryPage.tsx` | CollectionPage, BreadcrumbList |
| `/about` · `/contact` | `src/pages/AboutPage.tsx` · `ContactPage.tsx` | BreadcrumbList |

## Scripts

```bash
npm install     # install dependencies
npm run dev     # local dev server
npm run build   # production build → dist/
npm run typecheck
```

## Adding a new article

1. Open `src/content/posts.ts` and push a new object into `POSTS`:
   `slug`, `title`, `seoTitle` (≤ 60 chars), `seoDescription` (≤ 155 chars),
   `excerpt`, `category`, `date`, `featuredImage`, `author`, and a `blocks` array.
2. Available blocks: `p`, `h2`/`h3` (with `id` — feeds the sticky table of
   contents automatically), `list`, `callout`, `quote`, `gallery`, `faq`
   (emits FAQPage JSON-LD automatically).
3. Done — the blog index, category page, related-posts, sitemap and SEO tags
   all pick the article up with no extra wiring.

## Deploying

- **Vercel**: import the repo, framework preset *Vite*, build `npm run build`,
  output `dist`.
- For the true Next.js 14 SSG port: move each entry of `POSTS` into
  `src/content/posts/*.mdx`, replace `src/lib/seo.ts` calls with per-route
  `generateMetadata`, and implement `generateStaticParams` in
  `app/blog/[slug]/page.tsx` and `app/categories/[category]/page.tsx` returning
  the slug/category arrays — the content model here was designed for that
  one-to-one mapping.

## Performance & accessibility

- Fonts: Playfair Display (display) + Inter (body) + Dancing Script (accents),
  `display=swap`, preconnect to font + image origins.
- Non-hero images lazy-loaded; alt text on every image.
- `prefers-reduced-motion` disables Ken Burns, marquee, float and reveal animations.
- Skip-to-content link, ARIA labels, keyboard-navigable accordions, focus states.
