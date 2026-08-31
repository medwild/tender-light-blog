import { ArrowRight, Camera, Pin, Sparkles } from "lucide-react";
import { IMAGES, SITE } from "../lib/constants";
import { Link } from "../lib/router";
import { getPostsByHub, sortedPosts, getPostsCount } from "../lib/content";
import { HUBS, getHub } from "../content/hubs";
import { ArticleCard } from "../components/blog";
import { NewsletterForm, Reveal } from "../components/ui";

const marqueeWords = ["poses", "outfits", "golden hour", "locations", "save the dates", "prints", "candid", "proposals"];

const hubSpans = ["md:col-span-3", "md:col-span-3", "md:col-span-3", "md:col-span-3", "md:col-span-3", "md:col-span-3"];

/** Editorial masthead — the cover of the journal. */
export function HomePage() {
  const latest = sortedPosts().slice(0, 6);

  return (
    <main>
      {/* ————— Masthead ————— */}
      <section className="relative overflow-hidden pb-20 pt-32 md:pt-40">
        <figure aria-hidden="true" className="animate-floaty pointer-events-none absolute -left-10 top-44 z-10 hidden w-44 rounded-md bg-paper p-2 pb-7 shadow-xl lg:block" style={{ "--tilt": "-7deg" } as React.CSSProperties}>
          <img src={IMAGES.galleryTwirl} alt="" className="aspect-square w-full rounded-sm object-cover" />
          <figcaption className="absolute bottom-1 left-0 right-0 text-center font-script text-sm text-ink-soft">the twirl · june</figcaption>
        </figure>
        <figure aria-hidden="true" className="animate-floaty pointer-events-none absolute -right-8 top-72 z-10 hidden w-40 rounded-md bg-paper p-2 pb-7 shadow-xl lg:block" style={{ "--tilt": "6deg", animationDelay: "1.4s" } as React.CSSProperties}>
          <img src={IMAGES.galleryRing} alt="" className="aspect-square w-full rounded-sm object-cover" />
          <figcaption className="absolute bottom-1 left-0 right-0 text-center font-script text-sm text-ink-soft">the ring · always</figcaption>
        </figure>

        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-gold" aria-hidden />
            <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-ink-faint">Vol. 07 · the engagement photo journal · est. {SITE.founded}</p>
          </Reveal>

          <h1 id="home-h1" className="max-w-5xl font-display text-[2.7rem] font-bold leading-[1.03] tracking-tight sm:text-6xl xl:text-[4.4rem]">
            <span className="mask-line"><span style={{ "--d": "0.05s" } as React.CSSProperties}>Engagement photo <em className="italic text-rose-deep">ideas,</em></span></span>
            <span className="mask-line"><span style={{ "--d": "0.18s" } as React.CSSProperties}>poses &amp; inspiration</span></span>
            <span className="mask-line"><span style={{ "--d": "0.31s" } as React.CSSProperties}>for couples who want to look</span></span>
            <span className="mask-line"><span style={{ "--d": "0.44s" } as React.CSSProperties} className="font-script text-[0.6em] font-medium italic text-gold-deep">like themselves, only glowing ✳</span></span>
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
            <Reveal delay={350} className="lg:col-span-6">
              <p className="max-w-xl text-[1.06rem] leading-relaxed text-ink-soft">
                Welcome to Tender Light — the journal I wish every newly-engaged couple had bookmarked
                before their shoot. I'm Harper Ellis, and for eight years I photographed engagements
                across the country: <strong className="font-semibold text-ink">more than 400 sessions</strong>,
                and one lesson I keep re-learning. The photos you'll love in twenty years aren't the
                stiff, perfect ones. They're the mid-laugh glances, the hand on a collar, the walk
                where you forgot the camera existed.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/guides" className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold tracking-wide text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-deep">
                  Open the topical map
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                </Link>
                <Link to="#latest" className="inline-flex items-center gap-2 rounded-full border border-ink px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-cream">
                  Latest guides
                </Link>
              </div>
            </Reveal>

            <Reveal delay={250} className="lg:col-span-6">
              <figure className="group relative">
                <span aria-hidden className="absolute -bottom-3 -right-3 hidden h-full w-full rounded-xl border border-rose/60 bg-rose/15 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5 sm:block" />
                <span className="relative block overflow-hidden rounded-xl border border-line shadow-[0_40px_80px_-45px_rgba(44,44,44,0.55)]">
                  <img src={IMAGES.hero} alt="Couple embracing in a golden wildflower meadow at sunset" className="animate-kenburns aspect-[16/10] w-full object-cover" />
                  <span aria-hidden className="pointer-events-none absolute inset-4 border border-paper/0 transition-all duration-500 group-hover:border-paper/50" />
                  <span aria-hidden className="absolute bottom-4 right-5 font-mono text-[11px] font-semibold tracking-[0.2em] text-paper/0 transition-colors duration-500 group-hover:text-paper/95">TENDER LIGHT · ARCHIVE</span>
                </span>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————— Marquee ————— */}
      <div className="overflow-hidden border-y border-line bg-ink py-4 text-cream" aria-hidden="true">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="flex items-center gap-10 font-display text-xl italic">
              {w} <Sparkles className="h-4 w-4 text-gold" />
            </span>
          ))}
        </div>
      </div>

      {/* ————— Topic hubs — the topical map ————— */}
      <section id="hubs" aria-labelledby="hubs-heading" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
        <Reveal className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="font-script text-3xl text-gold-deep">the topical map</p>
            <h2 id="hubs-heading" className="mt-1 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Six hubs, one <em className="italic text-rose-deep">season</em>
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-ink-soft md:col-span-5">
            Every guide lives in one hub. Start where the stress is — poses if you're camera-shy,
            outfits if the closet is the problem, locations if you're still deciding where.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-6">
          {HUBS.map((hub, i) => {
            const count = getPostsByHub(hub.slug).length;
            return (
              <Reveal key={hub.slug} delay={i * 70} className={hubSpans[i % hubSpans.length]}>
                <Link to={`/${hub.slug}`} className="group flex h-full flex-col justify-between gap-6 rounded-xl border border-line bg-paper p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-32px_rgba(44,44,44,0.4)]">
                  <div>
                    <span className="inline-block rounded-full bg-rose/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-rose-deep">
                      {String(i + 1).padStart(2, "0")} · {count} guides
                    </span>
                    <span className="mt-4 block font-display text-2xl font-bold leading-tight transition-transform duration-300 group-hover:translate-x-1.5 sm:text-[1.6rem]">
                      {hub.name}
                    </span>
                    <span className="mt-2 line-clamp-2 block text-[14px] leading-relaxed text-ink-soft">{hub.lede}</span>
                  </div>
                  <span className="flex items-center justify-between border-t border-line pt-4">
                    <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-faint">{hub.keyword} · {hub.volume}</span>
                    <ArrowRight className="h-5 w-5 text-gold-deep transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-rose-deep" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ————— Latest guides ————— */}
      <section id="latest" aria-labelledby="latest-heading" className="border-t border-line bg-paper/60">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
          <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-script text-3xl text-rose-deep">fresh from the darkroom</p>
              <h2 id="latest-heading" className="mt-1 font-display text-4xl font-bold tracking-tight sm:text-5xl">Latest guides</h2>
            </div>
            <Link to="/guides" className="link-draw text-sm font-semibold uppercase tracking-[0.14em] text-rose-deep">View the full map →</Link>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((p, i) => (
              <ArticleCard key={p.slug} post={p} index={i} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* ————— Meet Harper ————— */}
      <section aria-labelledby="about-teaser-heading" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="relative lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-line shadow-[0_40px_80px_-45px_rgba(44,44,44,0.5)]">
              <img src={IMAGES.about} alt="Harper Ellis, founder of Tender Light, holding a vintage film camera" className="aspect-[4/5] w-full object-cover" />
            </div>
            <span className="absolute -bottom-5 -right-3 rotate-6 rounded-full bg-rose px-5 py-3 font-script text-xl text-ink shadow-lg">hi, I'm Harper ✳</span>
          </Reveal>
          <div className="lg:col-span-7 lg:pl-6">
            <Reveal>
              <p className="font-script text-3xl text-gold-deep">the person behind the lens</p>
              <h2 id="about-teaser-heading" className="mt-1 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Meet <em className="italic text-rose-deep">Harper</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
                Eight years behind the lens, 400+ engagement sessions across the US, now writing
                full-time from Austin with my high-school sweetheart. I started Tender Light after
                photographing my sister's engagement and realizing every guide online was written
                for models. This journal is everything I used to hand couples before we shot —
                the poses, the timing, the outfits, the places.
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { n: "400+", l: "sessions shot" },
                { n: "8 yrs", l: "behind the lens" },
                { n: String(getPostsCount()), l: "guides published" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-line bg-paper p-5 text-center transition-all duration-300 hover:-translate-y-1">
                  <p className="font-display text-3xl font-bold text-rose-deep">{s.n}</p>
                  <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-faint">{s.l}</p>
                </div>
              ))}
            </Reveal>
            <Reveal delay={280} className="mt-8 flex flex-wrap gap-4">
              <Link to="/about" className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold tracking-wide text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-deep">The full story</Link>
              <Link to="/about" className="link-draw self-center text-sm font-semibold uppercase tracking-[0.14em]">Author page</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————— Pinterest wall ————— */}
      <section aria-labelledby="pinterest-heading" className="border-t border-line bg-cream">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 md:py-24">
          <Reveal className="lg:col-span-4">
            <p className="font-script text-3xl text-rose-deep">pin it before you plan it</p>
            <h2 id="pinterest-heading" className="mt-1 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Popular on <em className="italic text-rose-deep">Pinterest</em>
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink-soft">
              The frames couples save while they're still pretending the ring is new. Every pin
              links to the full guide — poses, outfits and timing included.
            </p>
            <a href={SITE.pinterest} target="_blank" rel="noreferrer" className="group mt-7 inline-flex items-center gap-2.5 rounded-full bg-rose-deep px-6 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink">
              <Pin className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" aria-hidden /> Follow {SITE.instagram}
            </a>
            <p className="mt-4 text-xs text-ink-faint">32k monthly readers · 2:3 pins, always</p>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:col-span-8">
            {[
              { img: IMAGES.classicDip, title: "15 Timeless Poses That Never Date", saves: "12.4k", to: "/engagement-photo-ideas/classic-engagement-photos" },
              { img: IMAGES.hero, title: "Golden Hour Photos for Couples Who Hate Posing", saves: "8.1k", to: "/engagement-photo-poses/how-to-smile-naturally-in-photos" },
              { img: IMAGES.galleryLaugh, title: "15 Casual Ideas That Feel Like You", saves: "6.9k", to: "/engagement-photo-ideas/casual-engagement-photo-ideas" },
              { img: IMAGES.classicDip, title: "15 Album Decisions Before You Order", saves: "5.2k", to: "/engagement-photo-prints/engagement-photo-albums" },
            ].map((pin, i) => (
              <Reveal key={pin.title} delay={i * 90} className={i % 2 === 1 ? "sm:translate-y-8" : ""}>
                <Link to={pin.to} className="group relative block overflow-hidden rounded-xl border border-line shadow-[0_18px_40px_-28px_rgba(44,44,44,0.5)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_55px_-28px_rgba(44,44,44,0.6)]">
                  <img src={pin.img} alt={pin.title} loading="lazy" decoding="async" className="aspect-[2/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]" />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" aria-hidden />
                  <span className="absolute inset-x-0 bottom-0 p-4">
                    <span className="block font-display text-[15px] font-bold leading-snug text-cream">{pin.title}</span>
                    <span className="mt-2 flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cream/70">{pin.saves} saves</span>
                      <span className="flex items-center gap-1 rounded-full bg-rose-deep px-2.5 py-1 text-[11px] font-bold text-cream opacity-90 transition-opacity group-hover:opacity-100">
                        <Pin className="h-3 w-3" aria-hidden /> Save
                      </span>
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— Newsletter ————— */}
      <section aria-labelledby="newsletter-heading" className="border-t border-line bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 md:py-24">
          <Reveal>
            <Camera className="mx-auto h-8 w-8 text-gold-deep" aria-hidden />
            <h2 id="newsletter-heading" className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">The Love Letter</h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
              One pose and one place, every Sunday. Written like a letter to a friend planning a
              shoot — because that's exactly what it is.
            </p>
          </Reveal>
          <Reveal delay={140} className="mx-auto mt-8 max-w-lg text-left">
            <NewsletterForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}

/** The topical map — every hub with its spokes, in reading order. */
export function HubIndexPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 pb-28 pt-32 sm:px-8 md:pt-36">
      <Reveal className="max-w-3xl">
        <p className="font-script text-3xl text-rose-deep">start here</p>
        <h1 className="mt-2 font-display text-5xl font-bold leading-[1.03] tracking-tight sm:text-6xl">
          The engagement photo <em className="italic text-rose-deep">map</em>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">
          Every guide on Tender Light lives under one of six topics. Pick the one that matches
          where you are in planning — each hub collects the best-tested guides, in the order
          we'd actually recommend them.
        </p>
      </Reveal>

      <ol className="mt-14 space-y-6">
        {HUBS.map((hub, i) => {
          const spokes = getPostsByHub(hub.slug);
          return (
            <Reveal as="li" key={hub.slug} delay={i * 70}>
              <div className="overflow-hidden rounded-xl border border-line bg-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-32px_rgba(44,44,44,0.4)]">
                <Link to={`/${hub.slug}`} className="group flex items-center justify-between gap-6 p-7 sm:p-8">
                  <div className="min-w-0">
                    <p className="flex items-center gap-3">
                      <span className="rounded-full bg-rose/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-rose-deep">
                        {String(i + 1).padStart(2, "0")} · {spokes.length} guides
                      </span>
                      <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-faint">{hub.keyword}</span>
                    </p>
                    <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink transition-colors group-hover:text-rose-deep">{hub.name}</h2>
                    <p className="mt-2 line-clamp-2 max-w-2xl text-[14.5px] leading-relaxed text-ink-soft">{hub.lede}</p>
                  </div>
                  <ArrowRight className="h-7 w-7 shrink-0 text-gold-deep transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-rose-deep" aria-hidden />
                </Link>
                {spokes.length > 0 && (
                  <ul className="flex flex-wrap gap-2 border-t border-line bg-cream/50 px-7 py-4 sm:px-8">
                    {spokes.slice(0, 4).map((s) => (
                      <li key={s.slug}>
                        <Link to={`/${hub.slug}/${s.slug}`} className="link-draw text-[13px] font-medium text-ink-soft hover:text-rose-deep">{s.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          );
        })}
      </ol>

      <Reveal className="mt-16">
        <div className="rounded-xl border border-line bg-ink p-8 text-center text-cream sm:p-10">
          <p className="font-script text-3xl text-gold">not sure where to begin?</p>
          <h2 className="mt-2 font-display text-3xl font-bold leading-snug">Most couples start with <em className="italic text-rose">engagement photo ideas</em> — it's the biggest hub.</h2>
          <Link to="/engagement-photo-ideas" className="group mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose">
            Open the ideas hub <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </Reveal>
    </main>
  );
}
