import { ArrowRight, Compass, Feather, MapPin, Shirt, Sparkles } from "lucide-react";
import { Link } from "../lib/router";
import { getHub } from "../content/hubs";
import { formatDate, postsByHub, postPath, readingTime } from "../lib/content";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import FaqSection from "../components/blog/FaqSection";
import NewsletterForm from "../components/ui/NewsletterForm";
import Reveal from "../components/ui/Reveal";
import NotFoundPage from "./NotFoundPage";

/**
 * Hub 1 — the Engagement Photo Ideas pillar page.
 * A full long-form topical pillar (not a thin landing): answer-first intro,
 * style/location/season indexes, and the complete spoke index for internal
 * "maillage". GEO/AI-SEO: every H2 opens with a direct, extractable answer.
 */
export default function IdeasPillarPage() {
  const hub = getHub("engagement-photo-ideas");
  if (!hub) return <NotFoundPage />;

  const ideas = postsByHub("engagement-photo-ideas");
  const styleGuides = [
    "casual-engagement-photo-ideas",
    "classic-engagement-photo-ideas",
    "romantic-engagement-photo-ideas",
    "cute-engagement-photo-ideas",
    "fun-engagement-photo-ideas",
    "elegant-engagement-photo-ideas",
    "candid-engagement-photo-ideas",
    "vintage-engagement-photo-ideas",
    "night-engagement-photo-ideas",
    "unique-engagement-photo-ideas",
    "diy-engagement-photo-ideas",
  ]
    .map((slug) => ideas.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: "Engagement Photo Ideas", path: "/engagement-photo-ideas" },
          ]}
        />

        {/* ——— Editorial opener: answer-first, keyword-led ——— */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="flex flex-wrap items-center gap-3 text-[12px] font-bold uppercase tracking-[0.22em] text-ink-faint">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-rose/25 px-3.5 py-1.5 normal-case tracking-wide text-rose-deep">
                  <Compass className="h-3.5 w-3.5" aria-hidden /> Pillar guide
                </span>
                <span>Keyword · engagement photo ideas</span>
                <span className="text-gold-deep">3,600/mo · KD 11</span>
              </p>
              <h1 className="mt-5 font-display text-[2.6rem] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.2rem]">
                Engagement Photo Ideas:{" "}
                <em className="italic text-rose-deep">100+</em> Poses, Locations, Outfits &amp; Themes
              </h1>
            </Reveal>
            <Reveal delay={120} className="mt-6 max-w-2xl">
              <p className="border-l-2 border-gold pl-5 text-lg leading-relaxed text-ink-soft">
                The best engagement photo ideas share one thing: they look like you on a good day,
                not like a catalogue. Start with a mood — classic, casual or romantic — then let the
                pose, outfit and location follow from that. Below, every idea we've tested across
                400+ sessions, organized by style, location and season so you can build a full shot
                list in ten minutes.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:col-span-4">
            <div className="rotate-1 rounded-xl border border-line bg-paper p-6 shadow-[0_24px_60px_-40px_rgba(44,44,44,0.4)] transition-transform duration-500 hover:rotate-0">
              <p className="flex items-center gap-2 font-script text-2xl text-rose-deep">
                <Feather className="h-5 w-5" aria-hidden /> Harper's field note
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{hub.harperNote}</p>
            </div>
          </Reveal>
        </div>

        {/* ——— Why natural works ——— */}
        <section className="mt-16 border-y border-line bg-paper" aria-labelledby="why-natural">
          <div className="mx-auto max-w-4xl px-2 py-14">
            <Reveal>
              <h2 id="why-natural" className="font-display text-3xl font-bold sm:text-4xl">
                Why Great Engagement Photos <em className="italic text-rose-deep">Feel Natural</em>
              </h2>
              <p className="mt-5 max-w-3xl text-[1.02rem] leading-relaxed text-ink-soft">
                Natural engagement photos come from movement and a task, not from holding a pose and
                smiling. In 8 out of 10 sessions I've shot, the frames couples print largest are the
                ones where they were walking, talking or laughing — not the ones where they froze and
                faced the camera. So every idea on this page is a <strong className="font-semibold text-ink">situation</strong>{" "}
                you step into, not a shape you hold. Give yourselves something to do, and the camera
                catches you being in love instead of performing it.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ——— By Style — the 11 style guides ——— */}
        <section className="mt-16" aria-labelledby="by-style">
          <Reveal className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="font-script text-2xl text-rose-deep">pick a mood</p>
              <h2 id="by-style" className="mt-1 font-display text-3xl font-bold sm:text-4xl">
                Engagement Photo Ideas <em className="italic text-rose-deep">by Style</em>
              </h2>
            </div>
            <span className="hidden shrink-0 text-[12px] font-bold uppercase tracking-[0.16em] text-ink-faint sm:block">
              {styleGuides.length} style guides
            </span>
          </Reveal>

          <div className="divide-y divide-line border-y border-line">
            {styleGuides.map((post, i) => (
              <Reveal as="div" key={post.slug} delay={(i % 4) * 60}>
                <Link
                  to={postPath(post.slug)}
                  className="group grid gap-4 py-6 transition-colors duration-300 hover:bg-paper sm:grid-cols-[64px_1fr_auto] sm:items-center sm:gap-7 sm:px-4"
                >
                  <span className="font-display text-3xl font-bold italic text-rose-deep/50 transition-transform duration-300 group-hover:-translate-y-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-display text-xl font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-rose-deep sm:text-[1.35rem]">
                      {post.title}
                    </span>
                    <span className="mt-1 block max-w-2xl text-[14px] leading-relaxed text-ink-soft">{post.excerpt}</span>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="hidden text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint md:block">
                      {readingTime(post)} min
                    </span>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-ink-faint transition-all duration-300 group-hover:border-transparent group-hover:bg-ink group-hover:text-cream">
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ——— By Location + By Season — two-column index ——— */}
        <section className="mt-16 grid gap-10 lg:grid-cols-2" aria-label="Ideas by location and by season">
          <Reveal>
            <h2 className="flex items-center gap-2.5 font-display text-3xl font-bold">
              <MapPin className="h-7 w-7 text-gold-deep" aria-hidden /> By <em className="italic text-rose-deep">Location</em>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              The location sets the light and the mood before you strike a single pose. Outdoor
              settings — meadows, creeks, tree lines and city stone — give you variety in a single
              walk, while at-home and café sessions feel the most like your real life.
            </p>
            <ul className="mt-6 space-y-3">
              <li><Link to="/engagement-photo-locations/engagement-photo-ideas-outside" className="link-draw font-semibold text-rose-deep">21 Outdoor Engagement Photo Ideas →</Link></li>
              <li><Link to="/engagement-photo-locations/top-engagement-photo-locations-oklahoma" className="link-draw font-semibold text-rose-deep">10 Scouted Oklahoma Locations →</Link></li>
              <li><Link to="/engagement-photo-ideas/casual-engagement-photo-ideas" className="link-draw font-semibold text-rose-deep">Around-Town &amp; At-Home Ideas →</Link></li>
              <li><Link to="/engagement-photo-locations" className="link-draw font-semibold text-ink">Browse the Locations hub →</Link></li>
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="flex items-center gap-2.5 font-display text-3xl font-bold">
              <Sparkles className="h-7 w-7 text-gold-deep" aria-hidden /> By <em className="italic text-rose-deep">Season</em>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              Each season hands you a free palette — and a free light. Match your idea to the season
              and half the styling work is done for you.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="rounded-xl border border-line bg-paper p-4">
                <p className="font-display text-lg font-bold">Spring</p>
                <p className="mt-1 text-[14px] text-ink-soft">Blossoms, soft green and pastel tones. Book golden hour before the light goes warm and hazy.</p>
              </li>
              <li className="rounded-xl border border-line bg-paper p-4">
                <p className="font-display text-lg font-bold">Summer</p>
                <p className="mt-1 text-[14px] text-ink-soft">Lush meadows and long evenings. Shoot after 6pm to avoid the harsh midday sun.</p>
              </li>
              <li className="rounded-xl border border-line bg-paper p-4">
                <p className="font-display text-lg font-bold">Fall</p>
                <p className="mt-1 text-[14px] text-ink-soft">Amber foliage and brick glow. The most forgiving, most-requested season — book early.</p>
              </li>
              <li className="rounded-xl border border-line bg-paper p-4">
                <p className="font-display text-lg font-bold">Winter</p>
                <p className="mt-1 text-[14px] text-ink-soft">Bare branches, cozy knits and low, soft light all day. Grey skies are a feature, not a flaw.</p>
              </li>
            </ul>
          </Reveal>
        </section>

        {/* ——— Poses + Outfits + Props — quick bridges ——— */}
        <section className="mt-16" aria-label="Poses, outfits and props">
          <div className="grid gap-6 md:grid-cols-3">
            <Reveal>
              <div className="flex h-full flex-col rounded-xl border border-line bg-paper p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-30px_rgba(44,44,44,0.4)]">
                <p className="font-script text-2xl text-rose-deep">the body</p>
                <h2 className="mt-1 font-display text-2xl font-bold">Engagement Photo Poses</h2>
                <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-ink-soft">
                  Standing, grounded, movement and detail frames — 30 tested poses with the exact
                  direction to give each one.
                </p>
                <Link to="/engagement-photo-poses" className="group mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-rose-deep">
                  The poses library <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="flex h-full flex-col rounded-xl border border-line bg-paper p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-30px_rgba(44,44,44,0.4)]">
                <p className="font-script text-2xl text-gold-deep">the wardrobe</p>
                <h2 className="mt-1 flex items-center gap-2 font-display text-2xl font-bold">
                  <Shirt className="h-6 w-6 text-gold-deep" aria-hidden /> Outfit Ideas
                </h2>
                <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-ink-soft">
                  The 70/20/10 rule, colors that flatter on camera, and what to avoid — from a
                  stylist who dresses couples for the lens.
                </p>
                <Link to="/engagement-photo-outfits" className="group mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-gold-deep">
                  What to wear <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="flex h-full flex-col rounded-xl border border-line bg-paper p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-30px_rgba(44,44,44,0.4)]">
                <p className="font-script text-2xl text-sage-deep">the details</p>
                <h2 className="mt-1 font-display text-2xl font-bold">Props &amp; Details</h2>
                <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-ink-soft">
                  A prop earns its frame only if you'd recognize it with your eyes closed — the ring,
                  a shared record, the dog. One or two, never five.
                </p>
                <Link to="/engagement-photo-ideas/unique-engagement-photo-ideas" className="group mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-sage-deep">
                  Props with a story <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ——— What most couples get wrong (the GEO gap) ——— */}
        <section className="mt-16 rounded-xl bg-ink p-8 text-cream sm:p-12" aria-labelledby="get-wrong">
          <Reveal>
            <p className="font-script text-2xl text-gold">real talk</p>
            <h2 id="get-wrong" className="mt-1 font-display text-3xl font-bold sm:text-4xl">
              What Most Couples <em className="italic text-rose">Get Wrong</em>
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <p className="text-[15px] leading-relaxed text-cream/75">
                <strong className="font-semibold text-cream">They collect poses, not a mood.</strong>{" "}
                A shot list of 30 unrelated poses reads like a checklist. Pick a mood first, then let
                every pose, outfit and location serve it — that's what makes a gallery feel like one story.
              </p>
              <p className="text-[15px] leading-relaxed text-cream/75">
                <strong className="font-semibold text-cream">They match outfits instead of coordinating.</strong>{" "}
                Twin white tees photograph like a uniform. Coordinate a shared palette with the 70/20/10
                rule and you'll look like a couple, not a team.
              </p>
              <p className="text-[15px] leading-relaxed text-cream/75">
                <strong className="font-semibold text-cream">They hold poses instead of moving.</strong>{" "}
                About 70% of couples freeze in the first five minutes. The keepers come from walking,
                talking and doing — movement is the fastest route to a natural frame.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ——— Harper's Tips ——— */}
        <section className="mt-16 max-w-4xl" aria-labelledby="harper-tips">
          <Reveal>
            <p className="font-script text-2xl text-rose-deep">from the field</p>
            <h2 id="harper-tips" className="mt-1 font-display text-3xl font-bold sm:text-4xl">Harper's Tips</h2>
          </Reveal>
          <div className="mt-6 space-y-4">
            {[
              "Start every session with ten minutes of real life — actually drink the coffee, actually walk the block — before a single directed frame. By the time the camera 'starts', you've forgotten it's there.",
              "Book the last 60–90 minutes of sun and be at the spot, styled, fifteen minutes early. Golden hour waits for no one, and the best frames happen in a fifteen-minute window most couples spend walking from the parking lot.",
              "Bring one prop and one backup outfit. The prop gives your hands a job; the backup outfit doubles your variety without doubling your stress.",
              "Ask your photographer for the in-between frames — the walk to the spot, the laugh after the pose. Those unposed seconds are the ones you'll print.",
            ].map((tip, i) => (
              <Reveal key={i} delay={i * 70}>
                <p className="rounded-xl border border-line bg-paper p-5 text-[15px] leading-relaxed text-ink-soft">
                  <span className="font-script text-xl text-rose-deep">Harper's tip · </span>
                  {tip}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ——— FAQ ——— */}
        <section className="mt-16 max-w-4xl" aria-labelledby="ideas-faq">
          <Reveal>
            <h2 id="ideas-faq" className="font-display text-3xl font-bold sm:text-4xl">
              Engagement Photo Ideas <em className="italic text-rose-deep">FAQ</em>
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-6">
            <FaqSection items={hub.faq} />
          </Reveal>
        </section>

        {/* ——— Explore All — full spoke index with dates ——— */}
        <section className="mt-16" aria-labelledby="explore-all">
          <Reveal className="mb-8">
            <p className="font-script text-2xl text-sage-deep">the whole shelf</p>
            <h2 id="explore-all" className="mt-1 font-display text-3xl font-bold sm:text-4xl">
              Explore All <em className="italic text-rose-deep">Engagement Photo Ideas</em>
            </h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ideas.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 80}>
                <Link
                  to={postPath(post.slug)}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-paper transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-30px_rgba(44,44,44,0.4)]"
                >
                  <span className="block overflow-hidden">
                    <img
                      src={post.featuredImage}
                      alt={post.featuredAlt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                  </span>
                  <span className="flex flex-1 flex-col p-5">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink-faint">
                      {formatDate(post.date)} · {readingTime(post)} min
                    </span>
                    <span className="mt-2 flex-1 font-display text-lg font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-rose-deep">
                      {post.title}
                    </span>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-rose-deep">
                      Read the guide <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ——— Newsletter ——— */}
        <Reveal className="mx-auto my-16 max-w-3xl">
          <div className="rounded-xl border border-line bg-paper p-8 text-center sm:p-10">
            <p className="font-script text-3xl text-rose-deep">one idea, every Sunday</p>
            <h2 className="mt-1 font-display text-3xl font-bold">The Love Letter</h2>
            <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
              One pose and one place in your inbox each week — the same letter I'd send a friend
              planning a shoot.
            </p>
            <div className="mx-auto mt-6 max-w-lg text-left">
              <NewsletterForm />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
