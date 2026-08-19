import { ArrowDown, ArrowRight, Camera, Heart, MapPin, Pin, Sparkles } from "lucide-react";
import { Link } from "../lib/router";
import { IMAGES, SITE } from "../lib/constants";
import { postsByHub, sortedPosts } from "../lib/content";
import { HUBS } from "../content/hubs";
import ArticleCard from "../components/blog/ArticleCard";
import NewsletterForm from "../components/ui/NewsletterForm";
import Reveal from "../components/ui/Reveal";

/* Rotating circular badge — drawn as SVG textPath, spins slowly. */
function OrbitBadge() {
  return (
    <div className="animate-spin-slow absolute -bottom-8 -left-8 z-10 hidden h-32 w-32 sm:block" aria-hidden="true">
      <svg viewBox="0 0 120 120" className="h-full w-full">
        <defs>
          <path id="orbit" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" fill="none" />
        </defs>
        <circle cx="60" cy="60" r="59" className="fill-ink" />
        <text className="fill-cream text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.32em" }}>
          <textPath href="#orbit">tender light · golden hour · est. 2019 ·</textPath>
        </text>
        <circle cx="60" cy="60" r="7" className="fill-gold" />
      </svg>
    </div>
  );
}

function Ticker() {
  const items = [
    "30 tested poses",
    "golden-hour timing",
    "scouted locations",
    "outfit formulas",
    "camera-shy friendly",
    "ring close-ups",
    "rainy-day backups",
    "blue-hour frames",
  ];
  const row = (ariaHidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden || undefined}>
      {items.map((item) => (
        <span key={item + (ariaHidden ? "-b" : "-a")} className="flex items-center">
          <span className="px-6 text-[13px] font-semibold uppercase tracking-[0.22em] text-cream/85">{item}</span>
          <Sparkles className="h-3.5 w-3.5 text-gold" aria-hidden />
        </span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden border-y border-ink bg-ink py-3.5">
      <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

const galleryShots = [
  { src: IMAGES.galleryLaugh, alt: "Couple laughing with heads together at golden hour", caption: "Tallgrass Prairie · June", ratio: "aspect-[4/5]" },
  { src: IMAGES.hero, alt: "Couple embracing in a wildflower meadow", caption: "Private wheat field · golden hour", ratio: "aspect-[3/2]" },
  { src: IMAGES.galleryRing, alt: "Interlaced hands with engagement ring in soft light", caption: "The quiet vow · detail frame", ratio: "aspect-[4/5]" },
  { src: IMAGES.gallerySilhouette, alt: "Couple silhouetted on a prairie hill at sunset", caption: "Lake Hefner · last light", ratio: "aspect-[4/5]" },
  { src: IMAGES.outfitsCover, alt: "Couple in champagne and sage walking together", caption: "Guthrie brick district · October", ratio: "aspect-[3/2]" },
  { src: IMAGES.galleryTwirl, alt: "Fiancée twirling in a champagne tulle dress", caption: "The twirl · always worth it", ratio: "aspect-[4/5]" },
];

/* Hub wall: alternating image / accent-panel cards, asymmetric spans. */
const hubImages: ({ src: string } | null)[] = [
  { src: IMAGES.hero },
  { src: IMAGES.classicDip },
  null,
  { src: IMAGES.outfitsCover },
  null,
  { src: IMAGES.galleryRing },
];
const hubSpans = [
  "md:col-span-4",
  "md:col-span-2",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-2",
  "md:col-span-4",
];
const hubPanelTones = ["", "", "bg-sage/25", "", "bg-rose/25", ""];

/* Pinterest wall — vertical 2:3 pins linking to the full guides. */
const pinWall = [
  {
    img: IMAGES.posesCover,
    title: "30 Engagement Photo Poses That Don't Feel Awkward",
    saves: "12.4k",
    to: "/engagement-photo-poses/30-engagement-photo-poses-couples",
  },
  {
    img: IMAGES.classicDip,
    title: "27 Classic Engagement Photos That Never Go Out of Style",
    saves: "8.1k",
    to: "/engagement-photo-poses/classic-engagement-photos",
  },
  {
    img: IMAGES.casualCafe,
    title: "15 Casual Engagement Photo Ideas for an Authentic Vibe",
    saves: "6.9k",
    to: "/engagement-photo-ideas/casual-engagement-photo-ideas",
  },
  {
    img: IMAGES.hero,
    title: "Golden Hour Photos for Couples Who Hate Posing",
    saves: "5.2k",
    to: "/engagement-photo-ideas/golden-hour-photography-tips-couples",
  },
];

export default function HomePage() {
  const posts = sortedPosts();

  return (
    <>
      {/* ————— Masthead / editorial hero ————— */}
      <section className="relative overflow-hidden pt-28 md:pt-36" aria-labelledby="home-h1">
        {/* Ambient washes */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-rose/25 blur-[130px]" />
          <div className="absolute -left-32 top-1/2 h-[420px] w-[420px] rounded-full bg-sage/20 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-[360px] w-[360px] rounded-full bg-gold/15 blur-[110px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          {/* Volume line */}
          <Reveal className="mb-10 flex items-center justify-between gap-4 border-b border-line pb-4 text-[11px] font-bold uppercase tracking-[0.26em] text-ink-faint md:mb-14">
            <span>Vol. 07 — The Engagement Issue</span>
            <span className="hidden sm:inline">{SITE.location} · Est. {SITE.founded}</span>
            <span className="flex items-center gap-1.5 text-gold-deep">
              <Camera className="h-3.5 w-3.5" aria-hidden /> 400+ sessions
            </span>
          </Reveal>

          <div className="grid items-center gap-12 pb-16 lg:grid-cols-12 lg:gap-8">
            {/* Left: headline */}
            <div className="lg:col-span-6 xl:col-span-6">
              <p className="reveal is-visible mb-5 flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-rose-deep">
                <span className="h-px w-10 bg-rose-deep" aria-hidden />
                An engagement photography journal
              </p>
              <h1 id="home-h1" className="font-display text-[2.6rem] font-bold leading-[1.04] tracking-tight sm:text-6xl xl:text-[4.4rem]">
                <span className="mask-line"><span style={{ "--d": "0.05s" } as React.CSSProperties}>Engagement Photo <em className="italic text-rose-deep">Ideas,</em></span></span>
                <span className="mask-line"><span style={{ "--d": "0.18s" } as React.CSSProperties}>Poses &amp; Inspiration</span></span>
                <span className="mask-line"><span style={{ "--d": "0.31s" } as React.CSSProperties} className="font-script text-[0.62em] font-medium italic text-gold-deep">for couples — the 2026 edition ✳</span></span>
              </h1>
              <Reveal delay={350} className="mt-7 max-w-xl">
                <p className="text-[1.05rem] leading-relaxed text-ink-soft">
                  Welcome to Tender Light — the journal I wish every newly-engaged couple had
                  bookmarked before their shoot. I'm Harper Ellis, and for eight years I
                  photographed engagements across the country: <strong className="font-semibold text-ink">more
                  than 400 sessions</strong>, thousands of frames, and one lesson I keep re-learning.
                  The photos you'll love in twenty years aren't the stiff, perfect ones. They're
                  the mid-laugh glances, the hand on a collar, the walk where you forgot the
                  camera existed.
                </p>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
                  Everything here is built from that archive. Six topic hubs walk you through the
                  whole season — <em className="font-display italic text-ink">ideas</em> when you're starting from zero,{" "}
                  <em className="font-display italic text-ink">poses</em> when you're camera-shy,{" "}
                  <em className="font-display italic text-ink">outfits</em> when the closet is the problem,{" "}
                  <em className="font-display italic text-ink">locations</em> when you're still deciding where,{" "}
                  <em className="font-display italic text-ink">save-the-dates</em> when the cards need printing, and{" "}
                  <em className="font-display italic text-ink">prints</em> when the gallery comes home.
                  Start anywhere. You two are already more photogenic than you believe.
                </p>
              </Reveal>
              <Reveal delay={480} className="mt-9 flex flex-wrap items-center gap-6">
                <Link
                  to="/blog"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold tracking-wide text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-deep hover:shadow-[0_16px_35px_-14px_rgba(157,90,103,0.65)]"
                >
                  Browse the journal
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                </Link>
                <Link to="/blog/30-engagement-photo-poses-couples" className="link-draw text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                  Start with the 30 poses
                </Link>
              </Reveal>
              <Reveal delay={560} className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-[13px] text-ink-faint">
                <span className="flex items-center gap-2"><Heart className="h-3.5 w-3.5 text-rose" aria-hidden /> 6 fresh guides</span>
                <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-sage-deep" aria-hidden /> 10 scouted locations</span>
                <span className="flex items-center gap-2"><Sparkles className="h-3.5 w-3.5 text-gold-deep" aria-hidden /> Updated for 2026</span>
              </Reveal>
            </div>

            {/* Right: photograph composition */}
            <div className="relative lg:col-span-6">
              <OrbitBadge />
              <Reveal delay={150} className="relative">
                <div className="overflow-hidden rounded-xl border border-line shadow-[0_40px_80px_-40px_rgba(44,44,44,0.5)]">
                  <img
                    src={IMAGES.hero}
                    alt="Engaged couple embracing in a golden wildflower meadow at sunset"
                    className="animate-kenburns aspect-[4/3] w-full object-cover sm:aspect-[3/2] lg:aspect-[4/3.4]"
                  />
                </div>
                {/* Floating polaroid */}
                <figure
                  className="animate-floaty absolute -bottom-10 -right-3 w-36 rotate-[-7deg] rounded-md bg-paper p-2 pb-7 shadow-[0_25px_50px_-20px_rgba(44,44,44,0.45)] sm:-right-8 sm:w-44"
                  style={{ "--tilt": "-7deg" } as React.CSSProperties}
                >
                  <img src={IMAGES.galleryRing} alt="Close-up of interlaced hands with an engagement ring" className="aspect-square w-full rounded-sm object-cover" />
                  <figcaption className="absolute bottom-1.5 left-0 right-0 text-center font-script text-sm text-ink-soft">the ring, obviously ✳</figcaption>
                </figure>
                <p className="animate-floaty-late absolute -left-4 top-8 hidden rotate-[-4deg] font-script text-2xl text-rose-deep md:block" style={{ "--tilt": "-4deg" } as React.CSSProperties}>
                  shoot the love,<br />not the pose
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <Ticker />
      </section>

      {/* ————— Latest articles ————— */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24" aria-labelledby="latest-heading">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-script text-3xl text-rose-deep">fresh from the journal</p>
            <h2 id="latest-heading" className="mt-1 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              The latest <em className="italic text-rose-deep">six</em> guides
            </h2>
          </div>
          <Link to="/blog" className="link-draw flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-ink">
            All articles <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <ArticleCard post={posts[0]} variant="featured" index={0} />
          {posts.slice(1, 3).map((p, i) => (
            <ArticleCard key={p.slug} post={p} variant="grid" index={i + 1} delay={i * 90} />
          ))}
          {posts.slice(3, 6).map((p, i) => (
            <ArticleCard key={p.slug} post={p} variant="grid" index={i + 3} delay={i * 90} />
          ))}
        </div>
      </section>

      {/* ————— Category index ————— */}
      <section className="border-y border-line bg-paper" aria-labelledby="categories-heading">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
          <Reveal className="mb-12 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="font-script text-3xl text-gold-deep">start here</p>
              <h2 id="categories-heading" className="mt-1 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Explore Engagement Photo <em className="italic text-rose-deep">Ideas</em>
              </h2>
            </div>
            <p className="max-w-md text-[15px] leading-relaxed text-ink-soft md:col-span-5">
              Six hubs cover the whole season. Start where the stress is — poses if you're
              camera-shy, outfits if the closet is the problem, locations if you're still deciding where.
            </p>
          </Reveal>

          {/* Asymmetric hub wall — no two cards alike */}
          <div className="grid gap-5 md:grid-cols-6">
            {HUBS.map((hub, i) => {
              const count = postsByHub(hub.slug).length;
              const image = hubImages[i % hubImages.length];
              const span = hubSpans[i % hubSpans.length];
              const tall = i === 0 || i === 3;
              return (
                <Reveal key={hub.slug} delay={i * 80} className={span}>
                  <Link
                    to={`/${hub.slug}`}
                    className={`group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-paper transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(44,44,44,0.45)] ${
                      tall ? "min-h-[380px]" : "min-h-[280px]"
                    }`}
                  >
                    {image ? (
                      <span className="relative block overflow-hidden" style={{ height: tall ? "52%" : "44%" }}>
                        <img
                          src={image.src}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                        />
                        <span className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" aria-hidden />
                        <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 font-script text-lg leading-none text-rose-deep">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </span>
                    ) : (
                      <span className={`relative block ${hubPanelTones[i % hubPanelTones.length]}`} style={{ height: tall ? "52%" : "44%" }}>
                        <span className="absolute -bottom-7 right-3 select-none font-display text-[7rem] font-bold italic leading-none text-ink/[0.07] transition-transform duration-700 group-hover:-translate-y-2">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <Camera className="absolute left-5 top-5 h-6 w-6 text-ink/35 transition-transform duration-500 group-hover:rotate-12" aria-hidden />
                      </span>
                    )}
                    <span className="flex flex-1 flex-col p-6">
                      <span className="font-display text-[1.45rem] font-bold leading-tight text-ink transition-colors duration-300 group-hover:text-rose-deep">
                        {hub.name}
                      </span>
                      <span className="mt-2 line-clamp-2 flex-1 text-[13.5px] leading-relaxed text-ink-soft">
                        {hub.lede}
                      </span>
                      <span className="mt-4 flex items-center justify-between border-t border-line pt-3.5">
                        <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink-faint">
                          {count} {count === 1 ? "guide" : "guides"} · {hub.volume} · KD {hub.kd}
                        </span>
                        <ArrowRight className="h-[18px] w-[18px] text-gold-deep transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-rose-deep" aria-hidden />
                      </span>
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ————— Masonry gallery ————— */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24" aria-labelledby="gallery-heading">
        <Reveal className="mb-10 text-center">
          <p className="font-script text-3xl text-rose-deep">from recent sessions</p>
          <h2 id="gallery-heading" className="mt-1 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Frames we can't <em className="italic text-rose-deep">stop looking at</em>
          </h2>
        </Reveal>
        <div className="columns-2 gap-4 md:columns-3 [&>figure]:mb-4">
          {galleryShots.map((shot, i) => (
            <Reveal as="figure" key={shot.src + i} delay={(i % 3) * 90} className="break-inside-avoid">
              <div className="group relative overflow-hidden rounded-xl">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  className={`${shot.ratio} w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]`}
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-ink/85 to-transparent px-4 pb-3.5 pt-10 font-script text-lg text-cream transition-transform duration-500 group-hover:translate-y-0">
                  {shot.caption}
                </figcaption>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ————— Quote band + stats ————— */}
      <section className="relative overflow-hidden bg-ink py-20 text-cream md:py-24" aria-label="Studio philosophy and numbers">
        <div className="pointer-events-none absolute inset-0 opacity-[0.16]" aria-hidden="true">
          <img src={IMAGES.gallerySilhouette} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <Sparkles className="mx-auto h-6 w-6 text-gold" aria-hidden />
            <blockquote className="mt-6 font-display text-3xl font-medium italic leading-snug sm:text-[2.6rem] sm:leading-[1.2]">
              “The photos you'll love in twenty years are the ones where you
              <em className="text-rose"> forgot we were there.</em>”
            </blockquote>
            <p className="mt-5 font-script text-3xl text-gold">— Harper, every single session</p>
          </Reveal>
          <Reveal delay={150} className="mt-14 grid grid-cols-2 gap-8 border-t border-cream/15 pt-10 sm:grid-cols-4">
            {[
              ["400+", "sessions photographed"],
              ["30", "poses in the library"],
              ["10", "locations scouted"],
              ["6 yrs", "chasing golden hour"],
            ].map(([num, label]) => (
              <div key={label}>
                <p className="font-display text-4xl font-bold text-gold sm:text-5xl">{num}</p>
                <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-cream/60">{label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ————— About teaser ————— */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24" aria-labelledby="about-teaser-heading">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="relative lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-line">
              <img
                src={IMAGES.about}
                alt="Harper Ellis, founder of Tender Light, holding a vintage film camera in her cream-toned studio"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1.2s] hover:scale-[1.04]"
              />
            </div>
            <p className="animate-floaty absolute -right-3 -top-6 rotate-3 rounded-md bg-paper px-4 py-2 font-script text-xl text-rose-deep shadow-lg" style={{ "--tilt": "3deg" } as React.CSSProperties}>
              hi, I'm Harper ✳
            </p>
          </Reveal>
          <div className="lg:col-span-7 lg:pl-8">
            <Reveal>
              <p className="font-script text-3xl text-gold-deep">the person behind the lens</p>
              <h2 id="about-teaser-heading" className="mt-1 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Meet <em className="italic text-rose-deep">Harper</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
                I'm Harper Ellis — eight years behind the lens, 400+ engagement sessions across
                the US, now retired from shooting and writing full-time from Austin with my
                high-school sweetheart. I started Tender Light after photographing my sister's
                engagement and realizing every guide online was written for models. This journal
                is everything I used to hand couples before we shot — the poses, the timing,
                the outfits, the places.
              </p>
            </Reveal>
            <Reveal delay={220} className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2.5 rounded-full border border-ink px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-cream"
              >
                Read my story <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </Link>
              <Link to="/contact" className="link-draw self-center text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                Book a session
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————— Popular on Pinterest ————— */}
      <section className="border-t border-line bg-cream" aria-labelledby="pinterest-heading">
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
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
              className="group mt-7 inline-flex items-center gap-2.5 rounded-full bg-rose-deep px-6 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink"
            >
              <Pin className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" aria-hidden />
              Follow {SITE.instagram}
            </a>
            <p className="mt-4 text-xs text-ink-faint">32k monthly readers · 2:3 pins, always</p>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:col-span-8">
            {pinWall.map((pin, i) => (
              <Reveal key={pin.title} delay={i * 90} className={i % 2 === 1 ? "sm:translate-y-8" : ""}>
                <Link
                  to={pin.to}
                  className="group relative block overflow-hidden rounded-xl border border-line shadow-[0_18px_40px_-28px_rgba(44,44,44,0.5)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_55px_-28px_rgba(44,44,44,0.6)]"
                >
                  <img
                    src={pin.img}
                    alt={pin.title}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[2/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" aria-hidden />
                  <span className="absolute inset-x-0 bottom-0 p-4">
                    <span className="block font-display text-[15px] font-bold leading-snug text-cream">{pin.title}</span>
                    <span className="mt-2 flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cream/70">{pin.saves} saves</span>
                      <span className="flex items-center gap-1 rounded-full bg-rose-deep px-2.5 py-1 text-[11px] font-bold text-cream opacity-90 transition-all duration-300 group-hover:opacity-100">
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
      <section className="border-t border-line bg-paper" aria-labelledby="newsletter-heading">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-12 md:items-center md:py-24">
          <Reveal className="md:col-span-6">
            <p className="font-script text-3xl text-rose-deep">the love letter</p>
            <h2 id="newsletter-heading" className="mt-1 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              One pose, one place, <em className="italic text-rose-deep">every Sunday</em>
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
              A five-minute letter with a pose to practice, a location worth the drive,
              and whatever golden-hour trick I learned that week.
            </p>
          </Reveal>
          <Reveal delay={120} className="md:col-span-6">
            <NewsletterForm />
          </Reveal>
        </div>
      </section>

      {/* Scroll cue for first fold */}
      <a
        href="#/"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("latest-heading")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to latest articles
      </a>
      <span className="hidden" aria-hidden="true"><ArrowDown className="h-4 w-4" /></span>
    </>
  );
}
