import { ArrowRight, Coffee, Home, MapPin, Mountain, Sun, TreePine, Trees, Building2, Compass } from "lucide-react";
import { Link } from "../lib/router";
import { getHub } from "../content/hubs";
import { formatDate, postsByHub, postPath, readingTime } from "../lib/content";
import { IMAGES } from "../lib/constants";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import FaqSection from "../components/blog/FaqSection";
import NewsletterForm from "../components/ui/NewsletterForm";
import Reveal from "../components/ui/Reveal";
import NotFoundPage from "./NotFoundPage";

/**
 * Hub 3 — the Engagement Photo Locations pillar page ("the scouting journal").
 * Long-form topical pillar: answer-first intro, a location-picker, terrain
 * indexes (outdoor/indoor/at-home/urban/nature), seasonal timing, practical
 * tips, FAQ, and the complete spoke index. Every H2 opens with an
 * extractable answer sentence (GEO/AI-SEO).
 */
export default function LocationsPillarPage() {
  const hub = getHub("engagement-photo-locations");
  if (!hub) return <NotFoundPage />;

  const locations = postsByHub("engagement-photo-locations");
  const spokeOrder = [
    "outdoor-engagement-photo-locations",
    "at-home-engagement-photo-ideas",
    "urban-engagement-photo-ideas",
    "park-garden-engagement-photo-ideas",
    "beach-engagement-photo-ideas",
    "coffee-shop-engagement-photo-ideas",
    "engagement-photo-ideas-outside",
    "top-engagement-photo-locations-oklahoma",
  ];
  const spokes = spokeOrder
    .map((slug) => locations.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const terrains = [
    {
      icon: <Mountain className="h-5 w-5" aria-hidden />,
      name: "Outdoor",
      answer: "Fields, water and tree lines give you golden hour, texture and variety for free — the best value per frame in engagement photography.",
      spots: ["Tallgrass prairie & wildflower meadows", "Creeks, lakes & wooden docks", "Tree-lined paths & forest corridors", "Hilltop overlooks & stone bridges"],
      light: "Golden hour (last 60–90 min)",
      image: IMAGES.hero,
      to: "/engagement-photo-locations/outdoor-engagement-photo-locations",
    },
    {
      icon: <Home className="h-5 w-5" aria-hidden />,
      name: "At-Home",
      answer: "Your own home is the most meaningful location — one good window and one honest routine beat a photogenic house every time.",
      spots: ["The kitchen, mid-pancake", "A window seat or the bed", "The front porch or stoop", "The backyard at golden hour"],
      light: "North or west window, any hour",
      image: IMAGES.casualCafe,
      to: "/engagement-photo-locations/at-home-engagement-photo-ideas",
    },
    {
      icon: <Building2 className="h-5 w-5" aria-hidden />,
      name: "Urban",
      answer: "Downtown brings energy you can't get in a field — brick that glows at golden hour and neon that wakes up at blue hour.",
      spots: ["Brick alleys & bounce-light walls", "Crosswalks & courthouse steps", "Murals & neon storefronts", "Lit café windows at dusk"],
      light: "Golden hour + 20 min blue hour",
      image: IMAGES.gallerySilhouette,
      to: "/engagement-photo-locations/urban-engagement-photo-ideas",
    },
    {
      icon: <Trees className="h-5 w-5" aria-hidden />,
      name: "Parks & Gardens",
      answer: "Parks and botanical gardens are the most forgiving locations — soft dappled light, green texture, paths to walk and benches to sit.",
      spots: ["Arched trellises & pergolas", "Tree-lined gravel paths", "Fountain edges & open lawns", "Fall-color pecan groves"],
      light: "Dappled shade, morning or late day",
      image: IMAGES.outfitsCover,
      to: "/engagement-photo-locations/park-garden-engagement-photo-ideas",
    },
    {
      icon: <Sun className="h-5 w-5" aria-hidden />,
      name: "Beach & Water",
      answer: "A beach hands you a wet-sand mirror, a clean horizon and the warmest light of the day — if you book around the tide chart.",
      spots: ["Wet-sand shoreline walks", "Sunset silhouettes", "Dune-grass portraits", "Wooden piers at last light"],
      light: "Low tide + 75 min before sunset",
      image: IMAGES.locationsCover,
      to: "/engagement-photo-locations/beach-engagement-photo-ideas",
    },
    {
      icon: <Coffee className="h-5 w-5" aria-hidden />,
      name: "Coffee Shops",
      answer: "A café is the lowest-pressure public location — soft window light and a setting where you already know exactly how to act.",
      spots: ["The corner window table", "The counter, ordering together", "Latte-art pours", "The curb outside with to-go cups"],
      light: "East window, 9–10am weekdays",
      image: IMAGES.casualCafe,
      to: "/engagement-photo-locations/coffee-shop-engagement-photo-ideas",
    },
  ];

  const seasons = [
    { season: "Spring", window: "Mar–May", note: "Wildflowers and fresh green; book early — it's the busiest season." },
    { season: "Summer", window: "Jun–Aug", note: "Shoot early or late; midday sun is harsh. Golden hour is long and gorgeous." },
    { season: "Fall", window: "Sep–Nov", note: "The most requested light of the year — golden pecans, amber fields, soft air." },
    { season: "Winter", window: "Dec–Feb", note: "Quiet, moody frames and empty locations. Overcast is a softbox, not a cancellation." },
  ];

  return (
    <div className="pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: "Engagement Photo Locations", path: "/engagement-photo-locations" },
          ]}
        />

        {/* ——— Opener: answer-first, keyword-led ——— */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="flex flex-wrap items-center gap-3 text-[12px] font-bold uppercase tracking-[0.22em] text-ink-faint">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-sage/30 px-3.5 py-1.5 normal-case tracking-wide text-sage-deep">
                  <Compass className="h-3.5 w-3.5" aria-hidden /> Pillar guide · the scouting journal
                </span>
                <span>Keyword · outdoor engagement photo ideas</span>
                <span className="text-gold-deep">320/mo · KD 1</span>
              </p>
              <h1 className="mt-5 font-display text-[2.5rem] font-bold leading-[1.03] tracking-tight sm:text-6xl lg:text-[3.9rem]">
                Engagement Photo Locations: <em className="italic text-rose-deep">Outdoor, Indoor</em> &amp; Meaningful Places to Shoot
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-2xl text-[1.06rem] leading-relaxed text-ink-soft">
                The right location solves three problems at once: light, variety and comfort.
                Outdoor spots give you golden hour for free, indoor spots give you weatherproof
                softness, and the meaningful ones — your café, your porch, your trail — give the
                gallery its soul. This is my scouting journal: every terrain worth shooting, with
                the light windows, permit notes and backup plans from 400+ real sessions. Pick a
                terrain below, or start with the picker if you're not sure where you belong.
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-7 flex flex-wrap items-center gap-5">
              <a
                href="#choose"
                className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3 text-sm font-semibold tracking-wide text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-sage-deep"
              >
                <MapPin className="h-4 w-4 transition-transform duration-300 group-hover:scale-125" aria-hidden />
                Find your location
              </a>
              <Link to="/engagement-photo-ideas/golden-hour-photography-tips-couples" className="link-draw text-sm font-semibold uppercase tracking-[0.14em]">
                Master the light first →
              </Link>
            </Reveal>
          </div>
          <Reveal delay={150} className="lg:col-span-4">
            <figure className="relative overflow-hidden rounded-xl border border-line shadow-[0_30px_60px_-30px_rgba(44,44,44,0.4)]">
              <img src={IMAGES.locationsCover} alt="A stone bridge over a creek at golden hour — a scouted engagement photo location" className="aspect-[4/5] w-full object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-5 pb-4 pt-12 font-script text-2xl text-cream">
                scouted at 6:40pm ✎
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* ——— The picker ——— */}
        <section id="choose" className="mt-20 scroll-mt-32" aria-labelledby="choose-heading">
          <Reveal>
            <h2 id="choose-heading" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              How to Choose the <em className="italic text-rose-deep">Right Location</em>
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
              Answer three questions and the terrain picks itself. In eight of ten sessions, the
              couple already knows the answer to at least two — they just haven't said it out loud.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                q: "What light do you love?",
                a: "Golden and dramatic → outdoor or beach. Soft and even → a park, garden or café window. Moody → urban at blue hour.",
                n: "01",
              },
              {
                q: "How far will you drive?",
                a: "Under 20 minutes → at-home or a local park. Under an hour → the good outdoor spot. Worth a weekend → the beach or a city you love.",
                n: "02",
              },
              {
                q: "What's already yours?",
                a: "The most meaningful location is the one with a story — where you had a first date, a first apartment, a first trip. Meaning beats scenery.",
                n: "03",
              },
            ].map((card, i) => (
              <Reveal key={card.n} delay={i * 90}>
                <div className="group h-full rounded-xl border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sage hover:shadow-[0_20px_40px_-25px_rgba(44,44,44,0.4)]">
                  <p className="font-script text-3xl text-sage-deep">{card.n}</p>
                  <p className="mt-2 font-display text-lg font-bold text-ink">{card.q}</p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{card.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ——— Terrain ledger ——— */}
        <section className="mt-24" aria-labelledby="terrains-heading">
          <Reveal>
            <p className="font-script text-3xl text-sage-deep">the field notes</p>
            <h2 id="terrains-heading" className="mt-1 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Six Terrains, <em className="italic text-rose-deep">Scouted Honest</em>
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
              Each terrain below gets the same three notes I keep in my own journal: what it's best
              for, the light window that makes it work, and the spots inside it that never miss.
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {terrains.map((t, i) => (
              <Reveal key={t.name} delay={(i % 2) * 80}>
                <article className="group grid overflow-hidden rounded-xl border border-line bg-paper transition-all duration-500 hover:border-sage hover:shadow-[0_30px_60px_-30px_rgba(44,44,44,0.45)] md:grid-cols-12">
                  <div className="relative md:col-span-4">
                    <img src={t.image} alt="" loading="lazy" decoding="async" className="h-52 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05] md:h-full" />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-paper/95 px-3 py-1.5 text-[12px] font-bold text-ink">
                      {t.icon} {t.name}
                    </span>
                  </div>
                  <div className="p-6 md:col-span-5 md:p-7">
                    <p className="text-[14.5px] font-medium leading-relaxed text-ink">{t.answer}</p>
                    <ul className="mt-4 space-y-1.5">
                      {t.spots.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-[13.5px] text-ink-soft">
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col justify-between border-t border-line/70 bg-cream/60 p-6 md:col-span-3 md:border-l md:border-t-0 md:p-7">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-faint">Best light</p>
                      <p className="mt-1.5 flex items-center gap-2 font-display text-[15px] font-semibold text-sage-deep">
                        <Sun className="h-4 w-4" aria-hidden /> {t.light}
                      </p>
                    </div>
                    <Link
                      to={t.to}
                      className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sage-deep transition-colors hover:text-ink"
                    >
                      Scout it <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1.5" aria-hidden />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ——— Seasonal timing ——— */}
        <section className="mt-24 rounded-xl border border-line bg-paper p-7 sm:p-10" aria-labelledby="seasonal-heading">
          <Reveal>
            <h2 id="seasonal-heading" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Seasonal Location <em className="italic text-rose-deep">Timing</em>
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
              Every season can produce beautiful engagement photos — the trick is matching the
              terrain to the month, and the hour to the season.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {seasons.map((s, i) => (
              <Reveal key={s.season} delay={i * 70} className="bg-paper">
                <div className="h-full p-6 transition-colors duration-300 hover:bg-cream">
                  <div className="flex items-baseline justify-between">
                    <p className="font-display text-xl font-bold text-ink">{s.season}</p>
                    <p className="font-script text-xl text-gold-deep">{s.window}</p>
                  </div>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-ink-soft">{s.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ——— Practical tips ——— */}
        <section className="mt-24" aria-labelledby="practical-heading">
          <Reveal>
            <p className="font-script text-3xl text-gold-deep">before you drive out</p>
            <h2 id="practical-heading" className="mt-1 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Location Practical <em className="italic text-rose-deep">Tips</em>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                h: "Scout twice",
                p: "Once for the light at your session hour, once for the logistics — parking, crowds, the walk from the car. A stressful arrival makes for stiff photos before frame one.",
              },
              {
                h: "Check permits & fees",
                p: "Public sidewalks and most parks are fine. Botanical gardens and state parks often charge a modest fee. Tripods and assistants can trigger city permits — verify a week ahead.",
              },
              {
                h: "Always carry a backup",
                p: "Weather changes its mind. Keep a covered or indoor fallback within ten minutes — a café, a porch, a covered bridge — so a grey sky becomes a feature, not a cancellation.",
              },
            ].map((tip, i) => (
              <Reveal key={tip.h} delay={i * 90}>
                <div className="h-full rounded-xl border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_20px_40px_-25px_rgba(44,44,44,0.4)]">
                  <p className="font-display text-xl font-bold text-ink">{tip.h}</p>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">{tip.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <p className="mt-8 max-w-3xl rounded-xl bg-sage/20 px-6 py-5 text-[14.5px] leading-relaxed text-ink-soft">
              <strong className="font-semibold text-sage-deep">Harper's tip:</strong> arrive 15 minutes
              earlier than you think you need to. The last thing a location session needs is a couple
              walking into golden hour out of breath, hunting for parking.
            </p>
          </Reveal>
        </section>

        {/* ——— FAQ ——— */}
        <section className="mt-24 max-w-3xl" aria-labelledby="locations-faq-heading">
          <Reveal>
            <h2 id="locations-faq-heading" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Location <em className="italic text-rose-deep">Questions</em>, Answered
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-8">
            <FaqSection items={hub.faq} />
          </Reveal>
        </section>

        {/* ——— Spoke index ——— */}
        <section className="mt-24" aria-labelledby="explore-locations-heading">
          <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-script text-3xl text-sage-deep">the full shelf</p>
              <h2 id="explore-locations-heading" className="mt-1 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Explore Location <em className="italic text-rose-deep">Guides</em>
              </h2>
            </div>
            <p className="text-sm text-ink-faint">{spokes.length} field-tested guides</p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {spokes.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 80}>
                <Link
                  to={postPath(p.slug)}
                  className="group flex h-full gap-5 rounded-xl border border-line bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sage hover:shadow-[0_24px_50px_-28px_rgba(44,44,44,0.45)]"
                >
                  <img src={p.featuredImage} alt="" loading="lazy" decoding="async" className="h-28 w-28 shrink-0 rounded-lg object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
                  <div className="min-w-0">
                    <p className="truncate font-display text-[1.15rem] font-bold leading-snug text-ink transition-colors group-hover:text-sage-deep">
                      {p.title}
                    </p>
                    <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-ink-soft">{p.excerpt}</p>
                    <p className="mt-2.5 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                      {formatDate(p.date)} · {readingTime(p)} min read
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ——— Newsletter band ——— */}
        <Reveal className="mt-24">
          <div className="grid gap-8 rounded-xl bg-ink p-8 text-cream sm:p-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-script text-3xl text-gold">one spot, every sunday</p>
              <h2 className="mt-2 font-display text-3xl font-bold leading-snug sm:text-4xl">
                Get a scouted location in your inbox each week
              </h2>
              <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-cream/70">
                The Love Letter: one location, one pose, one trick — from the scouting journal,
                before it hits the blog.
              </p>
            </div>
            <NewsletterForm dark />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
