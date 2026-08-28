import { ArrowRight, Heart, Mail, Send, Sparkles } from "lucide-react";
import { Link } from "../lib/router";
import { getHub } from "../content/hubs";
import { formatDate, postsByHub, postPath, readingTime } from "../lib/content";
import { IMAGES } from "../lib/constants";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import FaqSection from "../components/blog/FaqSection";
import Reveal from "../components/ui/Reveal";
import NotFoundPage from "./NotFoundPage";

/**
 * Hub 5 — the Save the Date & Proposal pillar.
 * Identity: postal stationery — postcards, stamps, postmarks. The subject
 * (save-the-dates ARE postcards) opens the page instead of a generic hero.
 * GEO: every H2 opens with a direct, extractable answer sentence.
 */
const SPOKE_ORDER = [
  "save-the-date-photo-ideas",
  "save-the-date-poses",
  "engagement-announcement-photo-ideas",
  "surprise-proposal-ideas",
  "proposal-poses",
  "ring-engagement-photo-poses",
  "casual-engagement-photo-ideas",
  "classic-engagement-photos",
];

const postcards = [
  { img: IMAGES.classicDip, tilt: "-rotate-3", stamp: "FIRST CLASS", note: "the classic · 5×7" },
  { img: IMAGES.galleryTwirl, tilt: "rotate-2", stamp: "AIR MAIL", note: "the twirl · wide crop" },
  { img: IMAGES.galleryRing, tilt: "-rotate-1", stamp: "PAR AVION", note: "the ring · detail" },
  { img: IMAGES.galleryLaugh, tilt: "rotate-3", stamp: "SPECIAL DELIVERY", note: "the laugh · candid" },
];

export default function SaveTheDatePillarPage() {
  const hub = getHub("save-the-date-photos");
  if (!hub) return <NotFoundPage />;

  const posts = postsByHub("save-the-date-photos");
  const spokes = SPOKE_ORDER.map((s) => posts.find((p) => p.slug === s)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p)
  );

  return (
    <div className="pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: hub.name, path: "/save-the-date-photos" },
          ]}
        />

        {/* ——— Opener: a scattered postcard table, not a hero trio ——— */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="flex flex-wrap items-center gap-3 text-[12px] font-bold uppercase tracking-[0.22em] text-ink-faint">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-rose/25 px-3.5 py-1.5 normal-case tracking-wide text-rose-deep">
                  <Mail className="h-3.5 w-3.5" aria-hidden /> Pillar guide
                </span>
                <span>Keyword · {hub.keyword}</span>
                <span className="text-gold-deep">{hub.volume} · KD {hub.kd}</span>
              </p>
              <h1 className="mt-5 font-display text-[2.5rem] font-bold leading-[1.03] tracking-tight sm:text-6xl lg:text-[4rem]">
                Save the Date Photos &amp; Proposal Ideas:{" "}
                <em className="italic text-rose-deep">Poses, Themes &amp; Announcements</em>
              </h1>
            </Reveal>
            <Reveal delay={130}>
              <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
                The best save the date photos are shot like postcards: horizontal, off-center,
                with quiet space where your names and date will live. Plan the shoot{" "}
                <strong className="font-semibold text-ink">9–12 months before the wedding</strong>,
                ask for a 5×7 horizontal crop plus a square for your website, and let the
                laughing frames do the announcing. This pillar covers the photo ideas, the
                card-ready poses, the announcement reveal, and the surprise proposal setups —
                with the camera plan that catches the moment you can't repeat.
              </p>
              <p className="mt-5 max-w-xl border-l-2 border-gold pl-4 font-script text-2xl text-gold-deep">
                “{hub.harperNote}”
              </p>
            </Reveal>
          </div>

          {/* Scattered postcards */}
          <div className="relative lg:col-span-6" aria-label="Sample save-the-date postcards">
            <div className="grid grid-cols-2 gap-5">
              {postcards.map((card, i) => (
                <Reveal
                  key={card.note}
                  delay={i * 110}
                  className={`${card.tilt} ${i % 2 === 1 ? "translate-y-8" : ""}`}
                >
                  <figure className="group rounded-md border border-line bg-paper p-2.5 pb-4 shadow-[0_20px_45px_-25px_rgba(44,44,44,0.5)] transition-all duration-500 hover:rotate-0 hover:-translate-y-2 hover:shadow-[0_30px_55px_-25px_rgba(44,44,44,0.55)]">
                    <div className="relative overflow-hidden rounded-sm">
                      <img
                        src={card.img}
                        alt={`${card.note} — save the date photo frame`}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      />
                      <span className="absolute right-2 top-2 rounded-sm border border-dashed border-cream/80 bg-ink/55 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-cream">
                        {card.stamp}
                      </span>
                    </div>
                    <figcaption className="mt-2.5 flex items-center justify-between px-1">
                      <span className="font-script text-lg text-ink-soft">{card.note}</span>
                      <Sparkles className="h-4 w-4 text-rose-deep/60" aria-hidden />
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ——— RSVP strip (living element) ——— */}
      <div className="mt-16 overflow-hidden border-y border-line bg-ink text-cream">
        <div className="flex animate-marquee items-center gap-10 whitespace-nowrap py-3.5 text-[12px] font-bold uppercase tracking-[0.28em]">
          {[0, 1].map((half) => (
            <span key={half} className="flex items-center gap-10" aria-hidden={half === 1}>
              {["save the date", "you're invited", "09 · 19 · 2026", "rsvp", "with love", "first class", "air mail"].map((w) => (
                <span key={`${half}-${w}`} className="flex items-center gap-10">
                  {w} <Heart className="h-3 w-3 fill-rose text-rose" aria-hidden />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ——— Long-form pillar body ——— */}
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="prose-tender mt-16 max-w-none">
          <Reveal as="section" aria-labelledby="std-ideas">
            <h2 id="std-ideas" className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Save the Date Photo Ideas
            </h2>
            <p className="mt-5">
              Card-ready frames share three traits: horizontal orientation, negative space on one
              side, and subjects placed off-center. Your designer needs a quiet corner — open sky,
              a plain wall, soft bokeh — for the typography; a centered close-up forces text over
              your faces.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Walking away down a path, small in a wide landscape",
                "Bench sit with open sky to the right",
                "Chalkboard with your names, hand-lettered",
                "The calendar frame — circling the date together",
                "Picnic blanket from above, offset to one corner",
                "Airmail envelopes scattered around a picnic",
              ].map((idea) => (
                <li key={idea} className="rounded-xl border border-line bg-paper px-5 py-3.5 text-[14.5px] text-ink-soft">
                  <Sparkles className="mb-1.5 h-4 w-4 text-gold-deep" aria-hidden /> {idea}
                </li>
              ))}
            </ul>
            <p className="mt-5">
              The full set — 17 frames plus the exact crops — lives in the{" "}
              <Link to="/save-the-date-photos/save-the-date-photo-ideas" className="link-draw font-semibold text-rose-deep">
                save the date photo ideas guide
              </Link>
              .
            </p>
          </Reveal>

          <Reveal as="section" aria-labelledby="std-poses" className="mt-14">
            <h2 id="std-poses" className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Save the Date Poses
            </h2>
            <p className="mt-5">
              The most reliable save the date pose is walking away from the camera, small in a
              wide horizontal frame with open sky above — it leaves room for typography and reads
              as “on our way,” which is the whole message of the card. The 30% rule does the rest:
              fill no more than 70% of the frame, and stay out of the top-left corner where most
              templates place the date.
            </p>
            <p className="mt-4">
              Walking-away frames, bench sits, wide standing poses and hands-and-ring details are
              broken down pose by pose in the{" "}
              <Link to="/save-the-date-photos/save-the-date-poses" className="link-draw font-semibold text-rose-deep">
                save the date poses guide
              </Link>{" "}
              — and the{" "}
              <Link to="/engagement-photo-poses/proposal-poses" className="link-draw font-semibold text-rose-deep">
                proposal poses guide
              </Link>{" "}
              covers the four seconds where the story starts.
            </p>
          </Reveal>

          <Reveal as="section" aria-labelledby="std-announcement" className="mt-14">
            <h2 id="std-announcement" className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Engagement Announcement Ideas
            </h2>
            <p className="mt-5">
              An announcement photo has to work as a thumbnail: one clear subject — the ring, the
              hug, the hand — against a quiet background. The ring reveal wins when you shoot the
              ring plus the honest reaction, not the ring alone; the half-second after she really
              looks at it is the frame.
            </p>
            <p className="mt-4">
              Social-first crops, the family frames to take within the hour, and the posting
              timing that keeps the news feeling new are all in the{" "}
              <Link to="/save-the-date-photos/engagement-announcement-photo-ideas" className="link-draw font-semibold text-rose-deep">
                engagement announcement photo ideas guide
              </Link>
              .
            </p>
          </Reveal>

          <Reveal as="section" aria-labelledby="std-surprise" className="mt-14">
            <h2 id="std-surprise" className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Surprise Proposal Ideas
            </h2>
            <p className="mt-5">
              A surprise proposal is two operations at once — the secret and the photograph — and
              the setups that deliver both have a scouted kneel point, light checked at the right
              hour, and a shooter already in position. “Let's get photos taken” remains the best
              alibi in the business.
            </p>
            <p className="mt-4">
              Thirteen setups that keep the secret, plus the photographer's six-point checklist
              for not missing the kneel, are in the{" "}
              <Link to="/save-the-date-photos/surprise-proposal-ideas" className="link-draw font-semibold text-rose-deep">
                surprise proposal ideas guide
              </Link>
              .
            </p>
          </Reveal>

          <Reveal as="section" aria-labelledby="std-ring-reveal" className="mt-14">
            <h2 id="std-ring-reveal" className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Ring Reveal Ideas
            </h2>
            <p className="mt-5">
              The ring works best as a co-star inside a gesture — a hand on a chest, interlaced
              fingers, a hair-tuck — never floating alone in front of the lens. Position it so the
              light sits behind and slightly to the left of her hands; that back-and-side light
              wraps the metal and gives the stone a catchlight instead of a glare.
            </p>
            <p className="mt-4">
              The full library of fourteen ring poses and detail shots is in the{" "}
              <Link to="/engagement-photo-poses/ring-engagement-photo-poses" className="link-draw font-semibold text-rose-deep">
                ring engagement photo poses guide
              </Link>
              .
            </p>
          </Reveal>

          <Reveal as="section" aria-labelledby="std-natural" className="mt-14">
            <h2 id="std-natural" className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Tips for a Natural Announcement Shoot
            </h2>
            <ul className="mt-5 space-y-3">
              {[
                ["Start with real life.", "Ten minutes of actual coffee and walking before any directed frame — by the time shooting begins, you've forgotten the camera."],
                ["Take the family frames within the hour.", "The glow is perishable; by hour three everyone's hungry and the magic has a curfew."],
                ["Move between setups, don't reset.", "Walk from spot to spot and let the photographer trail — the in-between frames announce better than the posed ones."],
                ["Keep one frame vertical and two horizontal.", "Vertical for the Story, horizontals for the card and the feed — three frames, every channel covered."],
              ].map(([title, body]) => (
                <li key={title} className="flex gap-4 rounded-xl border border-line bg-paper px-5 py-4">
                  <Send className="mt-1 h-4 w-4 shrink-0 rotate-12 text-gold-deep" aria-hidden />
                  <p className="text-[15px] leading-relaxed text-ink-soft">
                    <strong className="font-semibold text-ink">{title}</strong> {body}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* ——— FAQ ——— */}
        <Reveal className="mt-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Save the Date &amp; Proposal Questions
          </h2>
          <div className="mt-6">
            <FaqSection items={hub.faq.map((f) => ({ q: f.q, a: f.a }))} />
          </div>
        </Reveal>

        {/* ——— Explore guides ——— */}
        <Reveal className="mt-16 pb-24">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Explore Save the Date Guides
            </h2>
            <span className="hidden text-[12px] font-bold uppercase tracking-[0.2em] text-ink-faint sm:block">
              {spokes.length} guides · {posts.length} in the cluster
            </span>
          </div>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {spokes.map((post, i) => (
              <li key={post.slug}>
                <Link
                  to={postPath(post.slug)}
                  className="group grid gap-3 py-6 transition-colors duration-300 hover:bg-paper sm:grid-cols-[60px_1fr_auto] sm:items-center sm:gap-8 sm:px-4"
                >
                  <span className="font-script text-3xl text-ink-faint transition-colors duration-300 group-hover:text-rose-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-display text-xl font-bold text-ink transition-transform duration-300 group-hover:translate-x-1.5 sm:text-2xl">
                      {post.title}
                    </span>
                    <span className="mt-1 block text-[13.5px] text-ink-faint">
                      {formatDate(post.date)} · {readingTime(post)} min read · {post.excerpt.split("—")[0]}
                    </span>
                  </span>
                  <ArrowRight className="hidden h-5 w-5 text-gold-deep transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-rose-deep sm:block" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            {hub.related.map((slug) => {
              const rel = getHub(slug);
              return rel ? (
                <Link
                  key={slug}
                  to={`/${slug}`}
                  className="rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-semibold text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-deep hover:text-rose-deep"
                >
                  {rel.name} →
                </Link>
              ) : null;
            })}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
