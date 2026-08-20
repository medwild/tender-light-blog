# MDX layer — contrat de portage (Phase 1 → Next.js)

La source de vérité actuelle est le modèle typé (`posts.ts` : POSTS + POST_HUB +
POST_META). Ce dossier prépare la migration SSG Next.js 14 demandée dans le brief
initial : **un fichier `.mdx` par page Phase 1**, organisé en dossiers par cluster.

## Arborescence

```
src/content/mdx/
├── _SCHEMA.md            ← ce fichier
├── _template.mdx         ← frontmatter vierge, à copier
├── engagement-photo-ideas/
│   └── casual-engagement-photo-ideas.mdx      (exemplaire converti)
├── engagement-photo-poses/
│   └── proposal-poses.mdx                     (exemplaire converti)
├── engagement-photo-locations/
│   └── outdoor-engagement-photo-locations.mdx (exemplaire converti)
├── engagement-photo-outfits/
│   └── fall-engagement-photo-outfits.mdx      (exemplaire converti)
└── save-the-date-photos/
    └── save-the-date-poses.mdx                (exemplaire converti)
```

Les 5 exemplaires sont convertis à partir du contenu réel (frontmatter §3 complet +
tranches de corps). Les 10 pages Phase 1 restantes se dérivent mécaniquement.

## Règle de conversion (POST_META → frontmatter)

| POST_META / Post | frontmatter MDX |
|---|---|
| `slug` | `slug` + `id` |
| `POST_HUB[slug]` | `cluster` |
| `primaryKeyword` / `secondaryKeywords` / `lsiKeywords` | idem |
| `searchIntent` | `searchIntent` |
| `seoTitle` (≤ 60 c) | `metaTitle` |
| `seoDescription` (150–160 c) | `metaDescription` |
| `postPath(slug)` | `canonical` = `https://tenderlight.journal{path}/` |
| `date` / `dateModified ?? date` | `datePublished` / `dateModified` |
| `featuredImage` / `featuredAlt` | `featuredImage` / `featuredImageAlt` |
| `pinImages ?? ARTICLE_PINS[slug]` | `pinImages[]` |
| bloc `faq` | `faq[]` |
| `citations` | `citations[]` |
| `internalLinks` / `relatedPosts` | idem |
| `monetization` | `monetization: { adsense, affiliate, leadMagnet }` |

## Règle de conversion (blocs → MDX)

| Bloc typé | MDX |
|---|---|
| `p` | paragraphe brut |
| `h2` / `h3` (avec `id`) | `##` / `###` (l'id sert à la TOC) |
| `list` | `- ` bullets |
| `callout` | `<Callout tone="…">` |
| `faq` | `<FAQ items={frontmatter.faq} />` (émet aussi le JSON-LD FAQPage) |
| `keyTakeaways` | `<KeyTakeaways items={[…]} />` |
| `table` | tableau Markdown |
| `gallery` | `<Gallery images={…} />` |
| `ad` | `[AD_PLACEMENT]` (marker §21, remplacé au build) |
| `shop` | `<ShopRail section="…" />` |
| `leadMagnet` | `<LeadMagnet productId="…" />` |
| `pinKit` | `<PinterestBoard pins={frontmatter.pinImages} />` |

## Invariants (rappel §25)

Chaque `.mdx` doit porter : `cluster` (un des 7 hubs), `primaryKeyword`,
`searchIntent`, ≥ 3 `internalLinks`, une `faq` (4–6 items) et un corps ≥ 600 mots.
Un fichier qui ne respecte pas ce contrat ne doit pas être mergé.
