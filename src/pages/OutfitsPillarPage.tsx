import { useState } from "react";
import { ArrowRight, Ban, Check, Shirt } from "lucide-react";
import { getHub } from "../content/hubs";
import { formatDate, postPath, postsByHub, readingTime } from "../lib/content";
import { Link } from "../lib/router";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import NewsletterForm from "../components/ui/NewsletterForm";
import Reveal from "../components/ui/Reveal";
import NotFoundPage from "./NotFoundPage";

/* ————— The styling rail: palette, rule & season data ————— */

const SWATCHES = [
  { name: "Cream", hex: "#F3ECDD", note: "The universal base — flatters every skin tone and every location." },
  { name: "Oat", hex: "#E3D3B8", note: "Warm neutral; pairs with denim, camel and soft gold jewelry." },
  { name: "Camel", hex: "#C19A5B", note: "Reads expensive on camera without a single logo in frame." },
  { name: "Rust", hex: "#B4533A", note: "The fall accent; glows against green foliage and brick." },
  { name: "Sage", hex: "#9CAF88", note: "Grounded and organic; gorgeous in golden-hour light." },
  { name: "Dusty blue", hex: "#8FA6B8", note: "The best cool tone; calms busy urban backgrounds." },
  { name: "Blush", hex: "#E8B4BC", note: "Romantic without shouting wedding; soft on all skin tones." },
  { name: "Olive", hex: "#7A7E4F", note: "His safest accent; pairs with cream, oat and denim." },
];

const RULE_BANDS = [
  { pct: 70, label: "Neutral base", className: "bg-[#E9DFC8]", note: "Cream, oat, camel, denim — the shared foundation you both wear most of." },
  { pct: 20, label: "One accent", className: "bg-rose", note: "A single color between you — rust for her, olive for him. Not both." },
  { pct: 10, label: "Texture", className: "bg-sage", note: "Cable knit, corduroy, lace, linen — the 10% that makes flat colors feel rich." },
];

const SEASONS = [
  {
    id: "spring",
    name: "Spring",
    dot: "#E8B4BC",
    palette: ["#E8B4BC", "#9CAF88", "#F3ECDD"],
    formulas: [
      "Pastel slip dress + denim jacket + white sneakers",
      "Sage chinos + cream knit + tan loafers",
      "Light floral midi + one gold layer of jewelry",
    ],
    spoke: "spring-engagement-photo-outfits",
  },
  {
    id: "summer",
    name: "Summer",
    dot: "#8FA6B8",
    palette: ["#F3ECDD", "#8FA6B8", "#E3D3B8"],
    formulas: [
      "White linen midi + straw hat + ankle sandals",
      "Light-wash chinos + camp shirt + clean sneakers",
      "Chambray shirt knotted over a sundress",
    ],
    spoke: "summer-engagement-photo-outfits",
  },
  {
    id: "fall",
    name: "Fall",
    dot: "#B4533A",
    palette: ["#B4533A", "#C19A5B", "#7A7E4F"],
    formulas: [
      "Rust sweater dress + ankle boots + camel coat",
      "Flannel overshirt + white tee + dark denim",
      "Olive plaid scarf over a neutral wool coat",
    ],
    spoke: "fall-engagement-photo-outfits",
  },
  {
    id: "winter",
    name: "Winter",
    dot: "#5C7050",
    palette: ["#5C7050", "#E9DFC8", "#B4533A"],
    formulas: [
      "Camel overcoat + cream turtleneck + leather gloves",
      "Chunky cable knit + wool trousers + Chelsea boots",
      "One shared plaid blanket as prop and layer",
    ],
    spoke: "fall-engagement-photo-outfits",
  },
];

const AVOID = [
  "Large logos and graphic tees — they date a photo faster than anything else.",
  "Neon anything — it color-casts onto skin in open shade.",
  "Matching head-to-toe outfits — a uniform, not a couple.",
  "Tiny tight patterns like micro-checks — they moiré on digital sensors.",
  "Brand-new uncomfortable shoes — you'll stand differently and it shows.",
  "All-black in a golden-hour field — you'll silhouette before the sun sets.",
];

const ACCESSORIES = [
  { k: "Shoes first", v: "Clean beats stylish — scuffed shoes are the #1 detail that reads sloppy. Break in everything new." },
  { k: "One jewelry layer", v: "A single gold or silver layer catches light without competing with the ring." },
  { k: "The third piece", v: "A scarf, hat or jacket elevates jeans to intentional — and gives you a prop to hold." },
  { k: "Pocket the phone", v: "Nothing flattens a frame like a phone outline in a front pocket." },
];

/** Pillar page — What to Wear for Engagement Photos (§4 silo, Phase 2). */
export default function OutfitsPillarPage() {
  const hub = getHub("engagement-photo-outfits");
  const spokes = hub ? postsByHub(hub.slug) : [];
  const [activeSwatch, setActiveSwatch] = useState(0);
  const [activeBand, setActiveBand] = useState(0);
  const [season, setSeason] = useState(SEASONS[2]);

  if (!hub) return <NotFoundPage />;

  return (
    <div className="pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }, { name: hub.name, path: "/engagement-photo-outfits" }]} />

        {/* Opening: the styling rail header */}
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="flex items-center gap-2.5 font-script text-3xl text-gold-deep">
                <Shirt className="h-6 w-6" aria-hidden /> the styling rail
              </p>
              <h1 className="mt-3 font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight sm:text-6xl">
                What to Wear for <em className="italic text-rose-deep">Engagement Photos</em>: Outfit Ideas by Season &amp; Style
              </h1>
            </Reveal>
            <Reveal delay={120} className="mt-6 max-w-2xl">
              <p className="text-[1.06rem] leading-relaxed text-ink-soft">
                Wear comfortable, everyday clothes in a coordinated muted palette — that's the whole answer, and
                everything below is how to do it well. The best engagement photo outfits are the ones you could wear
                on a good Saturday, chosen on purpose: soft colors that flatter instead of compete, real fabrics that
                love the light, and one accent that makes the frame feel like <em className="font-display italic text-ink">you two</em>.
              </p>
              <p className="mt-4 text-[1.06rem] leading-relaxed text-ink-soft">
                {hub.lede} I've styled more than four hundred sessions, and the pattern is unshakeable — couples who
                coordinate tones instead of matching outfits, and who pick texture over branding, look back at their
                gallery in twenty years and still see themselves. Start with the rule below, then work the rail:
                casual, dressy, seasonal, colors, and the small accessories that finish a look without shouting.
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-7 flex flex-wrap items-center gap-3 text-[12px] font-bold uppercase tracking-[0.16em] text-ink-faint">
              <span className="rounded-full bg-gold/25 px-3.5 py-1.5 text-gold-deep">{hub.keyword}</span>
              <span className="rounded-full border border-line px-3.5 py-1.5">{hub.volume}</span>
              <span className="rounded-full border border-line px-3.5 py-1.5">KD {hub.kd}</span>
              <span className="rounded-full border border-line px-3.5 py-1.5">{spokes.length} guides on this rail</span>
            </Reveal>
          </div>

          {/* Swatch strip — the signature opening object */}
          <div className="lg:col-span-5">
            <Reveal delay={160} className="rounded-xl border border-line bg-paper p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-ink-faint">The palette that never misses</p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {SWATCHES.map((s, i) => (
                  <button
                    key={s.name}
                    type="button"
                    onClick={() => setActiveSwatch(i)}
                    aria-pressed={activeSwatch === i}
                    title={s.name}
                    className={`h-12 w-12 rounded-lg border-2 transition-all duration-300 hover:-translate-y-1 hover:rotate-3 sm:h-14 sm:w-14 ${
                      activeSwatch === i ? "scale-110 border-ink shadow-lg" : "border-transparent shadow-sm"
                    }`}
                    style={{ backgroundColor: s.hex }}
                  >
                    <span className="sr-only">{s.name}</span>
                  </button>
                ))}
              </div>
              <div className="mt-5 border-t border-line pt-4" role="status" aria-live="polite">
                <p className="font-display text-lg font-bold text-ink">{SWATCHES[activeSwatch].name}</p>
                <p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">{SWATCHES[activeSwatch].note}</p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* On this rail — in-page nav */}
        <Reveal delay={120} className="mt-12 flex gap-2 overflow-x-auto border-y border-line py-3 [scrollbar-width:thin]">
          {[
            ["the-main-rule", "The Main Rule"],
            ["casual", "Casual"],
            ["dressy", "Dressy"],
            ["seasonal", "Seasonal"],
            ["colors", "Colors"],
            ["avoid", "Avoid"],
            ["coordination", "Coordination"],
            ["accessories", "Accessories"],
            ["faq", "FAQ"],
            ["explore", "All Guides"],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="shrink-0 rounded-full border border-line bg-paper px-4 py-1.5 text-[12.5px] font-semibold text-ink-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-deep hover:text-gold-deep"
            >
              {label}
            </a>
          ))}
        </Reveal>

        {/* §1 — The Main Outfit Rule: 70/20/10 interactive bar */}
        <section id="the-main-rule" className="scroll-mt-28 pt-14" aria-labelledby="rule-heading">
          <Reveal>
            <p className="font-script text-3xl text-gold-deep">the rule that does the work</p>
            <h2 id="rule-heading" className="mt-1 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              The Main Outfit Rule: <em className="italic text-rose-deep">70 / 20 / 10</em>
            </h2>
            <p className="mt-4 max-w-3xl text-[15.5px] leading-relaxed text-ink-soft">
              The fastest way to look coordinated without matching: seventy percent of each look is a shared neutral
              base, twenty percent is one accent color between you, and ten percent is texture or pattern. Hover a
              band to see what belongs in it.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-7">
            <div className="flex h-16 w-full overflow-hidden rounded-xl border border-line" role="group" aria-label="The 70/20/10 outfit rule">
              {RULE_BANDS.map((b, i) => (
                <button
                  key={b.label}
                  type="button"
                  onMouseEnter={() => setActiveBand(i)}
                  onFocus={() => setActiveBand(i)}
                  onClick={() => setActiveBand(i)}
                  className={`${b.className} flex items-center justify-center transition-all duration-300 ${
                    activeBand === i ? "opacity-100" : "opacity-60 hover:opacity-90"
                  }`}
                  style={{ width: `${b.pct}%` }}
                  aria-pressed={activeBand === i}
                >
                  <span className="font-display text-sm font-bold text-ink/80 sm:text-base">{b.pct}%</span>
                </button>
              ))}
            </div>
            <div className="mt-4 flex items-start gap-3 rounded-xl bg-cream px-5 py-4" aria-live="polite">
              <span className={`mt-1 h-3.5 w-3.5 shrink-0 rounded-full ${RULE_BANDS[activeBand].className}`} aria-hidden />
              <p className="text-[14.5px] leading-relaxed text-ink-soft">
                <strong className="font-semibold text-ink">{RULE_BANDS[activeBand].label} — </strong>
                {RULE_BANDS[activeBand].note}
              </p>
            </div>
          </Reveal>
        </section>

        {/* §2/§3 — Casual vs Dressy */}
        <section id="casual" className="scroll-mt-28 pt-14" aria-labelledby="casual-heading">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <h2 id="casual-heading" className="font-display text-3xl font-bold tracking-tight">
                Casual <em className="italic text-rose-deep">Outfits</em>
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                Casual means chosen on purpose — your best everyday, not your laziest. Jeans are the anchor of a great
                casual session when they're dark wash, straight leg and free of logos.
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Dark or mid-wash jeans + oat knit + clean white sneakers",
                  "Slip dress + denim jacket + ankle boots",
                  "Linen trousers + simple tee + one gold layer",
                  "His: tan chinos + quality white tee under an open shirt",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14.5px] text-ink-soft">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage-deep" aria-hidden /> {f}
                  </li>
                ))}
              </ul>
              <Link to="/engagement-photo-outfits/casual-engagement-photo-outfits" className="link-draw mt-5 inline-block text-sm font-semibold uppercase tracking-[0.14em] text-rose-deep">
                16 casual outfits →
              </Link>
            </Reveal>

            <Reveal delay={120}>
              <h2 id="dressy" className="scroll-mt-28 font-display text-3xl font-bold tracking-tight">
                Dressy <em className="italic text-rose-deep">Outfits</em>
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                One step above nice-dinner, one step below the wedding. Dressy frames are your heirloom set — the ones
                that go above the fireplace and still look right in thirty years.
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Flowy midi or maxi dress in cream, champagne or terracotta",
                  "Tailored overcoat or blazer for him, in camel or charcoal",
                  "One statement piece each — a silk scarf, a leather jacket",
                  "Simple jewelry; let the ring be the loudest thing in frame",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14.5px] text-ink-soft">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage-deep" aria-hidden /> {f}
                  </li>
                ))}
              </ul>
              <Link to="/engagement-photo-outfits/best-outfits-engagement-photos" className="link-draw mt-5 inline-block text-sm font-semibold uppercase tracking-[0.14em] text-rose-deep">
                The stylist's full guide →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* §4 — Seasonal rail (interactive) */}
        <section id="seasonal" className="scroll-mt-28 pt-14" aria-labelledby="seasonal-heading">
          <Reveal>
            <p className="font-script text-3xl text-gold-deep">dress for the light you'll shoot in</p>
            <h2 id="seasonal-heading" className="mt-1 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Seasonal <em className="italic text-rose-deep">Outfits</em>
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-6">
            <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Choose a season">
              {SEASONS.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={season.id === s.id}
                  onClick={() => setSeason(s)}
                  className={`flex items-center gap-2.5 rounded-full border px-5 py-2.5 text-[13.5px] font-semibold transition-all duration-300 ${
                    season.id === s.id ? "border-ink bg-ink text-cream" : "border-line bg-paper text-ink-soft hover:border-ink hover:text-ink"
                  }`}
                >
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: s.dot }} aria-hidden />
                  {s.name}
                </button>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-line bg-paper p-6 sm:p-7" role="tabpanel" aria-label={`${season.name} outfit formulas`}>
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex gap-1.5" aria-hidden>
                  {season.palette.map((c) => (
                    <span key={c} className="h-8 w-8 rounded-md border border-line" style={{ backgroundColor: c }} />
                  ))}
                </span>
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-faint">{season.name} palette</p>
              </div>
              <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                {season.formulas.map((f) => (
                  <li key={f} className="rounded-lg bg-cream px-4 py-3.5 text-[13.5px] leading-relaxed text-ink-soft">
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to={postPath(season.spoke)}
                className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-rose-deep"
              >
                <span className="link-draw">Full {season.name.toLowerCase()} guide</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </section>

        {/* §5 — Colors */}
        <section id="colors" className="scroll-mt-28 pt-14" aria-labelledby="colors-heading">
          <Reveal>
            <h2 id="colors-heading" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Colors That <em className="italic text-rose-deep">Work Best</em>
            </h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
              Camera-friendly colors are softened versions of real colors — if it looks slightly dusty in person, it
              usually reads rich on camera. Muted tones keep the eye on your faces instead of your clothes. Tap any
              swatch above to see where it earns its place.
            </p>
            <Link to="/engagement-photo-outfits/engagement-photo-color-palette" className="link-draw mt-4 inline-block text-sm font-semibold uppercase tracking-[0.14em] text-rose-deep">
              The full color palette guide →
            </Link>
          </Reveal>
        </section>

        {/* §6 — What to avoid */}
        <section id="avoid" className="scroll-mt-28 pt-14" aria-labelledby="avoid-heading">
          <Reveal>
            <h2 id="avoid-heading" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              What to <em className="italic text-rose-deep">Avoid</em>
            </h2>
          </Reveal>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {AVOID.map((a, i) => (
              <Reveal as="li" key={a} delay={i * 60}>
                <span className="flex h-full items-start gap-3 rounded-xl border border-line bg-paper px-5 py-4 text-[14px] leading-relaxed text-ink-soft transition-colors duration-300 hover:border-rose-deep/40">
                  <Ban className="mt-0.5 h-4 w-4 shrink-0 text-rose-deep" aria-hidden /> {a}
                </span>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* §7 — Coordination (GEO table) */}
        <section id="coordination" className="scroll-mt-28 pt-14" aria-labelledby="coordination-heading">
          <Reveal>
            <h2 id="coordination-heading" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Couples <em className="italic text-rose-deep">Coordination</em>
            </h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
              Coordinate tones, not outfits — you read as a pair because your colors talk to each other, not because
              you're in the same shirt.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-6 overflow-x-auto rounded-xl border border-line bg-paper">
            <table className="w-full min-w-[540px] border-collapse text-left text-[14px]">
              <thead>
                <tr className="border-b-2 border-gold-deep/60 bg-gold/15">
                  <th scope="col" className="px-6 py-3.5 font-display text-[13px] font-bold uppercase tracking-[0.08em] text-gold-deep">Do</th>
                  <th scope="col" className="px-6 py-3.5 font-display text-[13px] font-bold uppercase tracking-[0.08em] text-gold-deep">Don't</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Share a palette — cream + sage, oat + dusty blue", "Wear the same shirt in different colors"],
                  ["One accent between you; she rust, he olive", "Both in loud patterns or neon"],
                  ["Vary texture — her knit, his corduroy", "Head-to-toe athleisure or gym wear"],
                  ["Lay both outfits on the bed and photo-test in daylight", "Buy something brand-new the week of the shoot"],
                ].map(([d, dn], ri) => (
                  <tr key={d} className={`border-b border-line/70 ${ri % 2 === 1 ? "bg-cream/60" : ""}`}>
                    <td className="px-6 py-3.5 text-ink-soft"><Check className="mr-2 inline h-4 w-4 text-sage-deep" aria-hidden />{d}</td>
                    <td className="px-6 py-3.5 text-ink-soft"><Ban className="mr-2 inline h-4 w-4 text-rose-deep" aria-hidden />{dn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </section>

        {/* §8 — Accessories & Shoes */}
        <section id="accessories" className="scroll-mt-28 pt-14" aria-labelledby="accessories-heading">
          <Reveal>
            <h2 id="accessories-heading" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Accessories &amp; <em className="italic text-rose-deep">Shoes</em>
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {ACCESSORIES.map((a, i) => (
              <Reveal key={a.k} delay={i * 70}>
                <div className="h-full rounded-xl border border-line bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-30px_rgba(44,44,44,0.5)]">
                  <p className="font-display text-lg font-bold text-ink">{a.k}</p>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">{a.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* §9 — FAQ */}
        <section id="faq" className="scroll-mt-28 pt-14" aria-labelledby="faq-heading">
          <Reveal>
            <h2 id="faq-heading" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Outfit <em className="italic text-rose-deep">Questions</em>, Answered
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-6 space-y-4">
            {hub.faq.map((f) => (
              <details key={f.q} className="group rounded-xl border border-line bg-paper px-6 py-5 transition-colors open:border-gold-deep/50">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold text-ink">
                  {f.q}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-ink-faint transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </Reveal>
        </section>

        {/* §10 — Explore all outfit guides (ItemList) */}
        <section id="explore" className="scroll-mt-28 pt-14 pb-4" aria-labelledby="explore-heading">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-script text-3xl text-gold-deep">the whole rail</p>
                <h2 id="explore-heading" className="mt-1 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  Explore Outfit <em className="italic text-rose-deep">Guides</em>
                </h2>
              </div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-faint">{spokes.length} guides · updated weekly</p>
            </div>
          </Reveal>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {spokes.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 55}>
                <Link
                  to={postPath(p.slug)}
                  className="group grid gap-2 py-5 transition-colors duration-300 hover:bg-paper sm:grid-cols-[60px_1fr_auto] sm:items-center sm:gap-6 sm:px-4"
                >
                  <span className="font-script text-2xl text-ink-faint transition-colors duration-300 group-hover:text-rose-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-display text-[1.25rem] font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-rose-deep">
                      {p.title}
                    </span>
                    <span className="mt-1 block text-[12.5px] text-ink-faint">{formatDate(p.date)} · {readingTime(p)} min read</span>
                  </span>
                  <ArrowRight className="hidden h-5 w-5 text-gold-deep transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-rose-deep sm:block" aria-hidden />
                </Link>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* CTA band */}
        <Reveal className="mt-14 grid gap-10 rounded-xl border border-line bg-ink p-8 text-cream sm:p-10 lg:grid-cols-2">
          <div>
            <p className="font-script text-3xl text-gold">never stare at a closet again</p>
            <h2 className="mt-2 font-display text-3xl font-bold leading-snug">
              Get the outfit planning guide, free
            </h2>
            <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-cream/70">
              The 70/20/10 rule, the palette cards and a printable try-on checklist — in your inbox
              before your next session.
            </p>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[13px] font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose"
            >
              Follow the outfit boards on Pinterest
            </a>
          </div>
          <div className="self-center">
            <NewsletterForm dark />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
