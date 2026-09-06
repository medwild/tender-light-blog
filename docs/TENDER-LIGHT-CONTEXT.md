# TENDER LIGHT — Document de contexte projet (handoff IDE)

> Source de vérité technique : `posts.ts` (catalogue), `sitemap.xml`, `seo.ts`.
> Ce document fournit le contexte éditorial/SEO/stratégique. En cas de conflit, le code fait foi.

---

## 1. Identité & persona (BIO-LOCK — règle absolue)

- **Site** : Tender Light — `https://tenderlight.journal` — blog photographie de fiançailles, Pinterest-first.
- **Persona** : **Harper Ellis**, photographe fiançailles/mariage **retraitée**, basée à **Austin**, **400+ sessions** sur ~8 ans.
- **BIO-LOCK** : seules les constantes « Austin » et « 400+ sessions » sont autorisées comme preuves sociales.
  - 🚫 Jamais inventer un **nouveau chiffre** (années, nb mariages, clients) ni une **nouvelle ville**.
  - Les anecdotes locales (Hill Country, greenbelt, Zilker, loft Austin, cabin) sont permises si cohérentes avec Austin.
- **Ton** : observation terrain, pas de hype. Éviter les adjectifs vides.

---

## 2. Stack & architecture technique

- **Stack** : **Next.js 14 (App Router) export statique** (`output: "export"` → `out/`) · TypeScript · Tailwind v4 · routage fichier `src/app/[hub]/[slug]` en silo `/{hub-slug}/{article-slug}/` · trailing slashes · URLs propres crawlables. (Remplace l'ancienne Vite SPA + miroirs `public/` écrits à la main.)
- **Design** : crème/rose/or/sauge · Playfair (titres) + Inter (corps) + Dancing Script (accents) · grain, Ken Burns, marquee, reveals · `ErrorBoundary` (jamais de page blanche).
- **Pages** : home (masthead + carte des hubs + Meet Harper + mur Pinterest + newsletter) · guides (topical map) · article · hub · about · contact · 404 · 3 légales (**noindex**, hors sitemap).
- **SEO par route** : `generateMetadata()` (meta/OG/canonical) + `src/components/JsonLd.tsx` (JSON-LD inliné : `Organization`, `WebSite`, `Person`, `BlogPosting`, `CollectionPage` au hub, `FAQPage`, `ItemList`, `BreadcrumbList`).
- **Sitemap** : généré depuis le modèle (`app/sitemap.ts`) — ne peut pas diverger des routes ; **55 URLs au 2026-09-01** (44 articles + 7 hubs + pages statiques).
- **Composants** : `PostBody`, cards, TOC scroll-spy, FAQ accordéon, author box, share, Pinterest board, maillage interne, related posts.

---

## 3. Topical map / authority — 7 silos hub+spoke

Chaque hub = page collection (`CollectionPage` + `ItemList`), chaque article = spoke.
Maillage : hub→spokes, spoke→hub, spoke→spoke **dans le silo**, cross-silo uniquement via lien de disambiguation.

| # | Hub (slug) | Rôle |
|---|---|---|
| 1 | `/engagement-photo-ideas/` | Ideas / inspiration |
| 2 | `/engagement-photo-poses/` | Poses |
| 3 | `/engagement-photo-outfits/` | Tenues |
| 4 | `/engagement-photo-locations/` | Lieux |
| 5 | `/save-the-date-photos/` | Save the Date & Proposal |
| 6 | `/engagement-photo-prints/` | Prints / Gifts / Display (hub monétisation) |
| 7 | `/wedding-day-logistics/` | Logistique photo du jour J |

---

## 4. Inventaire des slugs (`posts.ts` fait foi)

> **Avancement au 2026-09-01 : 44 spokes construits** — ideas 9 · poses 6 · outfits 6 · locations 6 · save-the-date 4 · prints 11 · wedding-day-logistics 2. Les CREATE/UPDATE/restaurations listés ci-dessous sont tous livérés (commit `7239f15` → `c863105`). Cette table est l'inventaire de planification d'origine ; son statut détaillé n'est plus maintenu à la main — `posts.ts` + `/guides` font foi.

Colonnes : slug · hub · primary keyword · vol/mois (connu ou est.) · angle · statut.

### Ideas
- `casual-engagement-photo-ideas` · casual engagement photos · 320 · casual ≠ directed candid · UPDATE enrichi
- `classic-engagement-photos` · classic engagement photos · 110 · timeless ≠ stiff · CREATE
- `black-and-white-engagement-photos` · black and white engagement photos · 210 · — · existant
- `unique-engagement-photo-ideas` · unique engagement photo ideas · 210 · personnel ≠ bizarre · UPDATE
- `holiday-engagement-photos` · holiday engagement photos · est. · festive sans kitsch · CREATE
- `winter-engagement-photo-ideas` · winter engagement photo ideas · 390 · 4 piliers hiver · restauré
- `pet-engagement-photos` · pet engagement photos · 260 · candide organisé · restauré
- `cozy-engagement-photos` · cozy engagement photos · est. · cozy ≠ kitsch · CREATE
- `rustic-engagement-photos` · rustic engagement photos · est. · rustic ≠ barn-cliché · CREATE

### Poses
- `how-to-smile-naturally-in-photos` · how to smile naturally · — · existant
- `camera-shy-engagement-poses` · camera shy poses · — · existant
- `scenario-based-engagement-poses` · scenario-based poses · — · existant
- `ring-engagement-photo-poses` · ring engagement photo poses · 110-260 · 3 fixes (lumière/focus/mains) · CREATE
- `proposal-poses` · proposal poses · 110 · 3 archétypes (surprise/orchestrée/re-enactment) · CREATE

### Outfits
- `best-engagement-photo-outfits` · — · existant
- `fall-engagement-photo-outfits` · fall engagement outfits · — · existant
- `casual-outfits` · casual engagement outfits · — · existant
- `color-palette` · engagement photo color palette · — · existant
- `winter-engagement-outfits` · winter engagement outfits · est. · **vêtements strict** (vigilance Jaccard 0.67) · CREATE
- `spring-summer-engagement-outfits` · spring summer engagement outfits · est. · tissus légers/chaleur · CREATE

### Locations
- `engagement-photo-ideas-outside` · engagement photo ideas outside · — · spoke « outdoor » du hub · existant
- `urban-engagement-photos` · — · existant
- `at-home-engagement-photos` · — · existant
- `indoor-engagement-photos` · indoor engagement photos · est. 200-400 · small spaces feel big · CREATE
- `mountain-engagement-photos` · mountain engagement photos · est. · échelle+lumière+logistique · CREATE

### Save the Date & Proposal
- `save-the-date-photos` · — · existant
- `surprise-proposal-ideas` · — · existant

### Prints / Gifts / Display (hub monétisation)
- `glossy-or-matte-prints` · glossy or matte prints · **6 600** · pilier volume · existant
- `locket-photo-print-guide` · locket photo prints · **3 600** · process fichier→insertion · UPDATE
- `mini-photo-print-ideas` · mini photo prints · **1 300** · usages émotionnels · UPDATE
- `photo-print-sizes-guide` · photo print sizes · — · ratios/crop · existant
- `engagement-photo-albums` · engagement photo albums · est. · décision d'achat (affiliate) · CREATE
- `polaroid-style-prints` · polaroid style prints · **1 600** · 3 routes (film/lab/DIY) · CREATE/restauré
- `photo-flip-book-ideas` · photo flip book · 720 · restauré
- `true-digital-prints` · true digital prints · ~700 · restauré
- `border-prints` · border prints · 210 · règle de décision border · UPDATE
- `engagement-photo-editing` · engagement photo editing · est. · screen ≠ print · CREATE

### Wedding Day Logistics
- `wedding-photo-checklist` · wedding photo checklist · ~2 500 · **pilier 47 items** · restauré

---

## 5. Règles éditoriales Mega-Skill (bornes à respecter)

- **Structure H2 (ordre)** : Opening (hook concret, ≥150 mots) → Why it works/harder → The N Ideas (H3) → What Couples Get Wrong → Harper's Tips → FAQ → **clôture en scène** (150-200 mots, pas de CTA).
- **B1/B2 (règle dure)** : nombre du H1 = nb de H3 = `ItemList.numberOfItems` (dérivation 1:1). Ex. H1 « 15 » → 15 H3 → ItemList 15.
- **Word count** : satellite 1 200-1 800 · pilier 2 200-3 200.
- **Meta** : title ≤ 60 c. · description 150-160 c.
- **FAQ** : 5-8 questions, réponses 40-60 mots, **answer-first**.
- **Tags** : 4-10, lowercase.
- **Attributions** : ≥4 mentions première personne (« After 400+ sessions… », anecdotes Harper) + clôture scène.
- **Liens internes** : 4 slugs whitelistés par article, **tous doivent résoudre**.
- **Mots bannis** (corps) : perfect, beautiful, stunning, magic, amazing, best, top, guide, ideas, tips.
  - Nuance : « Harper's Tips » est le H2 structurel prescrit (autorisé) ; « tips » reste banni dans le corps.
- **Langage recherche** : scanner en **mots entiers** (pas de sous-chaînes) → 0 occurrence.
- **F-stops/distances/tailles** : en fait technique ou observation, jamais en statistique inventée.

---

## 6. Jurisprudences & gate (à coder / respecter)

- **Smile** : si le slug existe déjà → **UPDATE in-place** (même URL, équité préservée, `dateModified` bumpé). Jamais de doublon.
- **Jaccard (tokens normalisés, stop-words : photo/ideas/guide/vs)** :
  - ≥ 0.5 → **MERGE** (pas de CREATE)
  - 0.33-0.5 → analyse manuelle
  - < 0.33 → **CREATE** net
  - ≥ 0.67 cross-silo → CREATE **avec contrôles bloquants** : 2 liens de disambiguation + zéro H3 dans le lane du sibling.
- **Substitution de liens** : tout lien vers un slug perdu est remplacé par le spoke survivant le plus pertinent. Zéro lien cassé toléré.
- **Réconciliation sitemap** : à chaque CREATE/UPDATE, vérifier nb URLs, zéro doublon / 404 / orphelin.

---

## 7. Monétisation standard (par article)

- **3 créneaux AdSense** (dont 1 en zone FAQ).
- **Bloc affiliate** générique (pas de marque spécifique).
- **1 lead magnet** (Spec/Checklist Card dédiée).
- **3 pins Pinterest** (titre + description + soft CTA « Save this… »).

---

## 8. Outillage existant

- `preflightGate()` : Jaccard + scope regex (scan/local) avant CREATE.
- `articleItems()` : dérivation ItemList 1:1 depuis les H3 (ou null).
- `seo.ts` : schema runtime par route (BlogPosting/FAQPage/Breadcrumb/ItemList/CollectionPage).
- `auditSite()` : panneau « Pipeline Integrity » live sur `/guides`.
- `linkWhitelistText()` / `ownedIntents()` / exports `POSTS`.

---

## 9. Slugs PERDUS — blacklist de liens (ne jamais référencer)

`photo-booth-strip-dimensions` · `spotify-code-prints` · `how-much-do-engagement-photos-cost` · `engagement-photo-display-ideas` · `scrapbook-vs-photo-album` · `musical-christmas-card`
→ Longue traîne dépriorisée, non routée, hors sitemap (zéro 404). Si un article doit y pointer, substituer (voir §6).

---

## 10. Backlog & prochaines étapes

**Situation au 2026-09-06** : 52 articles, 63 URLs au sitemap, audit site-wide **0 problème** (FAILs §23, liens cassés, bans persona, B1/B2), typecheck + build verts. **HUB LOCATIONS TERMINÉ** : série ideas close (candid, fun, cute, night, vintage, elegant), puis park-garden (`74d4f30`) et `coffee-shop-engagement-photo-ideas` (`849270f`, 12 setups 6-dedans/6-à-la-porte, 2085 mots, date 10-29 +1 sem). Spokes récents sans ligne KEYWORD_MAP → 4e edit `volume: 0 // volume à valider`. Précédents : `candid` (`8f8d447`), `photo-booth-strip-ideas` (`9558080`), owners §23 `outdoor-engagement-photo-poses` + `save-the-date-poses` (`c863105`).

**Plan d'action — prochaine session (par priorité) :**
1. **BATCH IDEAS + HUB LOCATIONS TERMINÉS** : candid, fun, cute, night, vintage, elegant (ideas) + park-garden, coffee-shop (locations) tous livrés, sitemap 63. **Prochaine décision** = `romantic-engagement-photo-ideas` : les linkOverrides semantic.ts `romantic poses` / `romantic vibe` / `cheek kiss` pointent vers ce slug **jamais créé** (maillage orphelin) — créer le spoke ideas ou repointer les 3 overrides.
2. **Les 2 orphelines hors-ideas** : `engagement-announcement-photo-ideas` (save-the-date) et `engagement-photo-checklist` (wedding-day-logistics, spoke naturel du pilier checklist) ; `golden-hour-engagement-photos` en 3e position.
3. **Entités semantic.ts sans page** : `couple-engagement-poses` (cible de linkOverride non construite) — absorber dans le hub poses ou créer le spoke.
4. ~~**Décision owner**~~ — **fait `4e0ce6c` (2026-09-02)** : skills `.claude/skills/` committées ; `.idx/` (contient un token API en clair — ne jamais committer) et `.claude/settings.local.json` gitignorés ; scratch harness (`src/_verify.ts`, `.verifytmp/`) supprimé + gitignoré.
5. **30-60 j post-indexation** : audit performance (Search Console) → densifier les hubs sous-performants.

Rappel pipeline d'inscription (3 edits) : `src/content/<nom>Article.ts` (frontmatter sur l'objet Post) → import + spread dans `ALL` (posts.ts) → slug dans les `spokes` du hub (hubs.ts). La 4e ligne (KEYWORD_MAP + INTENT_OWNERSHIP si nouveau propriétaire d'intention) est ce qui déclenche le §23.

---

## 11. Checklist de cohérence pour le codeur (à chaque article)

- [ ] H1 nombre = H3 = ItemList (B1/B2)
- [ ] metaTitle ≤60 / metaDescription 150-160
- [ ] FAQ 5-8 × 40-60 mots answer-first + attributions ≥4 + clôture scène
- [ ] tags 4-10 lowercase
- [ ] word count dans la borne (satellite/pilier)
- [ ] 4 liens internes whitelistés résolvent
- [ ] 0 mot banni · 0 langage recherche (mots entiers)
- [ ] 3 AdSense + affiliate + lead magnet + 3 pins
- [ ] dateModified bumpé · sitemap réconcilié (auto-généré — 55 URLs au 2026-09-01)
