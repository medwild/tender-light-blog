# Tender Light — SEO Source of Truth

> This document is the contract. Every page on this blog exists because it is
> in the topical map below, and every page must satisfy the **page invariant**
> (enforced live by the Final Checklist desk on `/guides`):
>
> **Une page = une intention claire + un mot-clé principal + un cluster + des liens internes + un schéma valide. Aucune page hors topical map sans validation. Zéro thin content.**

---

## 1. Routes (silos)

```
/                                   homepage        Organization + WebSite + Person
/guides/                            topical map     (noindex-worthy? non — index, c'est le plan du site)
/{hub}/                             6 pillars       CollectionPage + ItemList + BreadcrumbList + FAQPage
/{hub}/{slug}/                      satellites      BlogPosting + FAQPage + BreadcrumbList + ImageObject
/about/ /contact/                   E-E-A-T         AboutPage / ContactPage
/privacy-policy/ /affiliate-disclosure/ /editorial-policy/   légales (noindex)
/sitemap.xml  /robots.txt           générés depuis le modèle (app/sitemap.ts, app/robots.ts)
```

Les 6 hubs (topical map — **toute nouvelle page doit appartenir à l'un d'eux**) :

| Hub | Mot-clé | Vol / KD | Articles |
|---|---|---|---|
| `/engagement-photo-ideas/` | engagement photo ideas | 3,600 / 11 | casual, unique, cute, romantic, fun, classic, candid, elegant, vintage, night, diy, golden-hour, checklist, natural-camera |
| `/engagement-photo-poses/` | engagement photo poses | 1,900 / 14 | 30-poses, classic-photos, natural, couple, camera-shy, ring, outdoor, proposal |
| `/engagement-photo-locations/` | outdoor engagement photo ideas | 320 / 1 | outdoor-locations, outside-ideas, oklahoma-locations, urban, park-garden, beach, coffee-shop, at-home |
| `/engagement-photo-outfits/` | what to wear for engagement photos | TBD | best-outfits, casual, fall, summer, spring, color-palette, outdoor |
| `/save-the-date-photos/` | save the date photoshoot ideas | 110 / 14 | photo-ideas, poses, announcement, surprise-proposal |
| `/engagement-photo-prints/` | engagement photo print ideas | TBD | locket, photo-booth-strip, display, mini, polaroid, flip-book |

## 2. Structure de fichiers par couche

| Couche | Fichier(s) | Rôle |
|---|---|---|
| **Content model** | `src/content/types.ts` | Post, Block, Hub, Citation, PinImage, Monetization |
| **Clusters** | `src/content/posts.ts` (POSTS, POST_HUB, POST_META) · `hubs.ts` | articles + assignment silo + frontmatter §3 |
| **Sémantique** | `src/content/semantic.ts` | champs LSI par cluster + `linkOverrides` (maillage entity-level) |
| **Keywords** | `src/content/keywords.ts` | KEYWORD_MAP (3 phases) + INTENT_OWNERSHIP (§23) |
| **Monétisation** | `src/content/monetization.ts` | 5 slots AdSense, 6 sections affiliation, 4 lead magnets, kits Phase 4 |
| **Règles** | `src/content/contentRules.ts` · `finalChecklist.ts` | audit §18/§20/§21/§23/§24/§25 |
| **SEO** | `src/lib/seo.ts` | builders JSON-LD purs (consommés par `generateMetadata` + `JsonLd`) |
| **Routage** | `src/app/` (App Router, `output:"export"`) · `src/lib/router.tsx` | arbre de fichiers + `Link` (`to` → next/link) ; `generateStaticParams` + `dynamicParams=false` |
| **Sortie statique** | `out/` (généré par `next build`) | HTML pré-rendu crawlable par route + `sitemap.xml` + `robots.txt` + `404.html` |
| **MDX (migration)** | `src/content/mdx/` | placeholders frontmatter Phase 1 — contrat de contenu Phase 2 |

## 3. Frontmatter (contrat §3)

Chaque article porte dans `POST_META` : `primaryKeyword`, `secondaryKeywords`,
`lsiKeywords`, `searchIntent`, `internalLinks` (3–6, ancres descriptives),
`relatedPosts` (même cluster prioritaire), `citations` (faits vérifiables
uniquement, sources officielles), `pinImages` (3 × 1000×1500), `monetization`
(adsense/affiliate/leadMagnet). Le `cluster` est dérivé de `POST_HUB` — jamais
déclaré à la main, ce qui rend impossible une page hors carte.

## 4. Schema.org — matrice de couverture

| Page | Organization | WebSite | Person | BlogPosting | CollectionPage | ItemList | FAQPage | BreadcrumbList | ImageObject |
|---|---|---|---|---|---|---|---|---|---|
| Homepage | ✓ | ✓ | ✓ | | | | | ✓ | |
| Hub | | | | | ✓ | ✓ | ✓ | ✓ | |
| Article | | | | ✓ | | | ✓ | ✓ | ✓ |
| Author | | | ✓ (ProfilePage) | | | | | ✓ | |
| About / Contact | ✓ | | | | | | | ✓ | |

## 5. Garde-fous automatiques (mesurés sur `/guides`)

- **Final Checklist desk (§24)** — 5 sections, ~45 items, evidence réelle par item.
- **Intégrité topologique (§25)** — chaque page : cluster + intention + mot-clé + liens + schéma + ≥ 600 mots ; topical map fermée (0 spoke dangling, 0 hub vide).
- **Anti-cannibalisation (§23)** — mention d'une intention possédée ⇒ lien obligatoire vers le propriétaire.
- **Content Compliance (§18)** — règles hubs/satellites par page (word count, H2, FAQ, answer-first…).
- **Intent Ownership desk** — vue des 13 intentions et de leurs mentions non liées.

## 6. Ajouter une page (la validation gate)

1. **Vérifier la carte** : le mot-clé appartient-il à un hub existant ? Sinon →
   décision éditoriale explicite (nouveau spoke vs nouveau hub), jamais de page isolée.
2. Vérifier l'ownership (§23) : si le mot-clé est possédé par une autre page,
   on fait un lien vers elle — on ne crée pas la page.
3. Créer l'entrée dans `POSTS` (avec `cluster` = slug du hub) + `POST_HUB` +
   `POST_META` (frontmatter complet).
4. Ajouter le spoke au hub dans `hubs.ts`.
5. Rien d'autre : `next build` pré-rend `out/{hub}/{slug}/index.html`, régénère
   `sitemap.xml` — plus aucun miroir ni sitemap à maintenir à la main.
6. Le desk `/guides` doit rester vert : invariants §25 + règles §18.
