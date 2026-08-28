import { ArrowRight, Camera, Clapperboard, Sparkles } from "lucide-react";
import { Link } from "../lib/router";
import { getHub } from "../content/hubs";
import { formatDate, postsByHub, postPath, readingTime } from "../lib/content";
import { IMAGES } from "../lib/constants";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import FaqSection from "../components/blog/FaqSection";
import NewsletterForm from "../components/ui/NewsletterForm";
import Reveal from "../components/ui/Reveal";
import NotFoundPage from "./NotFoundPage";

/* ——— The pose library, grouped by family ——— */
const POSE_FAMILIES = [
  {
    id: "classic",
    numeral: "01",
    title: "Classic Engagement Poses",
    answer:
      "Classic poses flatter because they're built on closed gaps, soft angles and stillness — the geometry never dates.",
    body: "These are the anchors of every session: clean lines, timeless frames, the photos your parents will hang. They work in any outfit and any location, which is why we always start here.",
    poses: [
      ["The Forehead Touch", "foreheads together, three synced breaths, eyes closed"],
      ["The Waist Hold", "both bodies angled 15° from camera, mid-laugh"],
      ["The Dip", "one slow second down, hold, one slow second up"],
      ["Walking Away", "hand in hand, conversation pace, camera behind"],
      ["Head on Shoulder", "both profiles to camera, eyes shut"],
      ["The Almost-Kiss", "foreheads an inch apart, eyes open"],
      ["The Lapel Hold", "her hands on his lapels, his on her waist"],
      ["The Back Hug", "his arms around her waist, her hands over his"],
    ],
  },
  {
    id: "natural",
    numeral: "02",
    title: "Natural & Candid Poses",
    answer:
      "Natural poses are really situations — give yourselves a task and the camera catches you doing it, not performing it.",
    body: "Movement and small jobs dissolve self-consciousness faster than any direction. These prompts produce the frames couples call “so us.”",
    poses: [
      ["The Coffee Walk", "two cups, conversation pace, talking with your free hand"],
      ["The Glance-Back", "walk away, one of you turns on the count of three"],
      ["Hand in Back Pocket", "her hand in his, mid-sentence about nothing"],
      ["The Bench Lean", "shoulders touching, arm along the backrest, people-watching"],
      ["The Curb Debate", "sitting, forearms on knees, arguing where to eat"],
      ["The Tailgate Sit", "legs dangling, real conversation, boots forward"],
    ],
  },
  {
    id: "romantic",
    numeral: "03",
    title: "Romantic Poses",
    answer:
      "Romantic poses slow everything down — longer holds, closer distance, softer light. Shoot them last, when you've forgotten the camera.",
    body: "These are the frames that end up above the fireplace. They only work in the final fifteen minutes, once the performing has fully stopped.",
    poses: [
      ["Back Hug at Golden Hour", "low sun behind you, hold for ten full seconds"],
      ["Slow Dance, No Music", "hum something terrible on purpose"],
      ["Kiss on the Temple", "while she laughs at something off-camera"],
      ["The Quiet Vow", "his hand on her cheek, her hand over his"],
      ["Foreheads Under an Umbrella", "rain optional, closeness not"],
      ["The Lifted-Hem Walk", "through tall grass, last five minutes of light"],
    ],
  },
  {
    id: "ring",
    numeral: "04",
    title: "Ring Detail Poses",
    answer:
      "Ring poses work when the stone is a co-star, not the subject — it lives inside a gesture, lit from behind and slightly left.",
    body: "Two or three minutes is enough. Clean hands the night before, simple backgrounds, and let the light wrap the metal.",
    poses: [
      ["Ring on Chest", "her hand over his heart, ring catching the flare"],
      ["Interlaced Fingers", "waist height, ring hand slightly forward"],
      ["The Hair-Tuck", "ring hand brushing hair back, caught mid-gesture"],
      ["Ring to the Sky", "hand up at golden hour, backlight through the stone"],
      ["The Re-Proposal Slide", "he slides it on again — shoot the whole sequence"],
    ],
  },
  {
    id: "camera-shy",
    numeral: "05",
    title: "Poses for Camera-Shy Couples",
    answer:
      "Camera-shy poses share one rule: none of them ask you to look at the lens and smile. Your eyes go somewhere comfortable.",
    body: "If you freeze, the fix is never “relax” — it's a task and a direction to face away from. These are the prompts I reach for first.",
    poses: [
      ["Eyes-Closed Forehead Touch", "the universal reset — three synced breaths"],
      ["Profile Shoulder Rest", "both of you sideways to camera, eyes shut"],
      ["The Long Walk Away", "the camera is behind you entirely"],
      ["Task: Fix His Collar", "fussy, tender, completely honest"],
      ["Task: The Whisper", "whisper your first pet's name, keep the reaction"],
      ["The Silhouette", "faces never matter at all — the last light does"],
    ],
  },
  {
    id: "outdoor",
    numeral: "06",
    title: "Outdoor Poses",
    answer:
      "Outside, the location does half the directing — the best pose is the one that belongs where you're standing.",
    body: "Fields reward distance and movement, paths give you somewhere to go, water doubles every frame, and brick turns late sun into a warm reflector.",
    poses: [
      ["The Waist-High Wade", "through tall grass, camera low behind you"],
      ["The Trunk Corridor", "a row of trees framing you both"],
      ["The Creek Sit", "feet near the water, foreheads touching"],
      ["The Dock Walk", "away from camera, reflection doubling the frame"],
      ["The Brick Lean", "golden hour bounce off the wall behind"],
      ["The Field Twirl", "dress or jacket hem catching the wind"],
    ],
  },
  {
    id: "props",
    numeral: "07",
    title: "Poses With Props",
    answer:
      "A single meaningful prop relaxes a couple faster than any direction — hands get a job, attention gets a place to land.",
    body: "Props earn their frame by being true: the dog you own, the record you both love, the blanket from your first picnic.",
    poses: [
      ["The Dog Chaos", "bring treats — the dog directs the session"],
      ["The Coffee Clink", "to-go cups up, toast the lens"],
      ["The Blanket Picnic", "heads together over something half-eaten"],
      ["The Record Spin", "a portable turntable in the middle of nowhere"],
      ["The Book Exchange", "mid-handoff, margin notes visible"],
    ],
  },
];

const MISTAKES = [
  ["Holding a pose for exactly two seconds and moving on", "The first three seconds are stiff; the keeper lives at second seven. Hold for ten, every time."],
  ["Standing a polite foot apart", "Daylight between you reads as friends. Close the gap until your arms touch."],
  ["Watching the photographer instead of each other", "The moment you check the lens, the frame goes public. Your eyes belong to each other."],
  ["Leaving your hands empty", "Empty hands look awkward; busy hands look natural. A lapel, a waist, a cup — give them a job."],
  ["Saving every smile for the camera", "Smile at each other. The camera can borrow them."],
];

const HARPER_TIPS = [
  {
    text: "If you freeze mid-pose, don't reset — add motion. Walk, turn, shake out your arms. Stiffness dissolves in movement, not in instructions.",
    tag: "on direction",
    tilt: "-2deg",
  },
  {
    text: "Your photographer should say the awkward thing first. When I tell a couple their first frame looked bad — on purpose — they relax, because the worst has happened and it wasn't.",
    tag: "on nerves",
    tilt: "1.5deg",
  },
  {
    text: "Book the session you'll actually enjoy, not the gallery you saw online. A golden-hour field is worthless if you'd rather be at the diner. The setting you love is the setting that flatters you.",
    tag: "on choosing",
    tilt: "-1deg",
  },
];

/**
 * Hub 2 pillar — Engagement Photo Poses.
 * "Director's slate" identity: call-sheet opener, pose-family library,
 * mistakes ledger and signed tips.
 */
export default function PosesPillarPage() {
  const hub = getHub("engagement-photo-poses");
  if (!hub) return <NotFoundPage />;
  const spokes = postsByHub(hub.slug);

  return (
    <div className="pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Breadcrumbs
          items={[{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }, { name: hub.name, path: "/engagement-photo-poses" }]}
        />

        {/* ——— Call-sheet opener ——— */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="flex flex-wrap items-center gap-3 text-[12px] font-bold uppercase tracking-[0.22em] text-ink-faint">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/25 px-3.5 py-1.5 normal-case tracking-wide text-gold-deep">
                  <Clapperboard className="h-3.5 w-3.5" aria-hidden /> Pillar guide · topic hub
                </span>
                <span>Keyword · {hub.keyword}</span>
                <span className="text-gold-deep">{hub.volume} · KD {hub.kd}</span>
              </p>
              <h1 className="mt-6 font-display text-[2.7rem] font-bold leading-[1.02] tracking-tight sm:text-6xl xl:text-[4rem]">
                <span className="mask-line"><span style={{ "--d": "0.05s" } as React.CSSProperties}>Engagement Photo Poses:</span></span>
                <span className="mask-line"><span style={{ "--d": "0.18s" } as React.CSSProperties}>Natural, Romantic &amp;</span></span>
                <span className="mask-line"><span style={{ "--d": "0.31s" } as React.CSSProperties} className="font-script text-[0.6em] font-medium italic text-gold-deep">camera-shy friendly ideas ✳</span></span>
              </h1>
            </Reveal>
            <Reveal delay={200} className="mt-7 max-w-2xl">
              <p className="text-[1.06rem] leading-relaxed text-ink-soft">
                The best engagement photo poses don't ask you to be a model — they ask you to{" "}
                <strong className="font-semibold text-ink">do one small thing</strong> and let the camera catch you doing it.
                A pose is a starting position; the photograph you love is the two seconds after it settles.
                In this pillar you'll find forty-two named poses across seven families — classic, natural, romantic,
                ring detail, camera-shy, outdoor and props — each with the exact direction I give couples on session,
                the ten-second hold rule that makes any of them work, and the five mistakes that quietly ruin a gallery.
                Camera-shy? Start at family 05. That's what it's for.
              </p>
            </Reveal>
            <Reveal delay={320} className="mt-8 flex flex-wrap gap-3">
              {["42 named poses", "7 pose families", "10-second hold rule", "400+ sessions of direction"].map((s) => (
                <span key={s} className="rounded-full border border-line bg-paper px-4 py-2 text-[12.5px] font-semibold text-ink-soft">
                  {s}
                </span>
              ))}
            </Reveal>
          </div>

          {/* The shot card */}
          <Reveal delay={250} className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm rotate-2 rounded-xl border border-line bg-paper p-6 shadow-[0_40px_80px_-45px_rgba(44,44,44,0.55)] transition-transform duration-500 hover:rotate-0">
              <span className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-[-3deg] bg-gold/40" aria-hidden />
              <div className="flex items-center justify-between border-b border-line pb-3">
                <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-ink-faint">
                  <Camera className="h-4 w-4 text-gold-deep" aria-hidden /> Shot card
                </p>
                <span className="rounded-full bg-ink px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-cream">Nº 001</span>
              </div>
              <p className="mt-4 font-display text-3xl font-bold italic leading-tight">The Forehead Touch</p>
              <dl className="mt-4 space-y-2.5 text-[13.5px]">
                {[
                  ["Direction", "foreheads together, eyes closed, three synced breaths"],
                  ["Hold", "10 seconds — the last 7 are the keepers"],
                  ["Light", "soft window or golden hour, off to the side"],
                  ["Why it works", "closed eyes remove every ounce of camera anxiety"],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[86px_1fr] gap-3">
                    <dt className="font-bold uppercase tracking-[0.12em] text-[10.5px] text-ink-faint pt-0.5">{k}</dt>
                    <dd className="leading-relaxed text-ink-soft">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 overflow-hidden rounded-lg">
                <img src={IMAGES.posesCover} alt="Couple holding the forehead-touch pose in soft golden light" loading="lazy" decoding="async" className="aspect-[3/2] w-full object-cover" />
              </div>
              <p className="mt-4 flex items-center justify-between font-script text-2xl text-rose-deep">
                approved <Sparkles className="h-4 w-4 text-gold" aria-hidden /> take one
              </p>
            </div>
          </Reveal>
        </div>

        {/* ——— The pose library: sticky rail + families ——— */}
        <div className="mt-20 grid gap-12 lg:grid-cols-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <nav aria-label="Pose families" className="sticky top-28">
              <p className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-ink-faint">
                <span className="h-px w-6 bg-gold" aria-hidden /> The library
              </p>
              <ul className="space-y-1 border-l border-line">
                {POSE_FAMILIES.map((f) => (
                  <li key={f.id}>
                    <a
                      href={`#pose-${f.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(`pose-${f.id}`);
                        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 120, behavior: "smooth" });
                      }}
                      className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-left text-[13.5px] leading-snug text-ink-soft transition-all duration-300 hover:border-gold hover:text-ink"
                    >
                      <span className="mr-2 font-display font-bold italic text-gold-deep">{f.numeral}</span>
                      {f.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="lg:col-span-9">
            {POSE_FAMILIES.map((family, fi) => (
              <div key={family.id} id={`pose-${family.id}`} className="mb-16 scroll-mt-32">
              <Reveal as="section" aria-labelledby={`pose-${family.id}-h`}>
                <div className="mb-6 flex items-baseline gap-4">
                  <span className="font-display text-5xl font-bold italic text-gold/60">{family.numeral}</span>
                  <h2 id={`pose-${family.id}-h`} className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{family.title}</h2>
                </div>
                <p className="max-w-3xl border-l-2 border-gold pl-5 font-medium text-ink">{family.answer}</p>
                <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink-soft">{family.body}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {family.poses.map(([name, direction], i) => (
                    <li
                      key={name}
                      className="group rounded-xl border border-line bg-paper p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:shadow-[0_16px_35px_-24px_rgba(133,104,44,0.55)]"
                    >
                      <p className="flex items-baseline gap-2.5">
                        <span className="font-display text-lg font-bold italic text-gold-deep">{String(i + 1).padStart(2, "0")}</span>
                        <span className="font-display text-lg font-bold leading-snug">{name}</span>
                      </p>
                      <p className="mt-1 pl-7 text-[13px] leading-relaxed text-ink-soft">{direction}</p>
                    </li>
                  ))}
                </ul>
                {fi === 0 && (
                  <p className="mt-6 max-w-2xl rounded-xl bg-gold/12 px-5 py-4 text-[14px] leading-relaxed text-ink-soft">
                    <strong className="font-semibold text-gold-deep">The 10-second hold rule:</strong> the first three seconds of any
                    pose are stiff; the next seven are gold. Hold for ten, and let your photographer shoot the whole sequence —
                    the settle-in frames are the keepers.
                  </p>
                )}
                {fi === 4 && (
                    <p className="mt-6 max-w-2xl rounded-xl bg-rose/15 px-5 py-4 text-[14px] leading-relaxed text-ink-soft">
                      <strong className="font-semibold text-rose-deep">Real talk:</strong> camera-shy couples almost always produce the
                      most tender galleries — because they stop performing sooner. Your awkwardness is the raw material, not the flaw.
                    </p>
                  )}
                </Reveal>
              </div>
            ))}
            {/* ——— What most couples get wrong ——— */}
            <Reveal as="section" aria-labelledby="poses-mistakes" className="mb-16">
              <p className="font-script text-3xl text-rose-deep">honestly?</p>
              <h2 id="poses-mistakes" className="mt-1 font-display text-3xl font-bold sm:text-4xl">What Most Couples Get Wrong</h2>
              <ul className="mt-8 divide-y divide-line border-y border-line">
                {MISTAKES.map(([wrong, right], i) => (
                  <li key={wrong} className="group grid gap-3 py-6 transition-colors duration-300 hover:bg-paper sm:grid-cols-[64px_1fr_1fr] sm:gap-8">
                    <span className="font-display text-4xl font-bold italic text-line transition-colors duration-300 group-hover:text-rose-deep">{String(i + 1).padStart(2, "0")}</span>
                    <p className="font-display text-lg font-bold leading-snug text-ink line-through decoration-rose-deep/50 decoration-2">{wrong}</p>
                    <p className="text-[14.5px] leading-relaxed text-ink-soft"><span className="font-semibold text-sage-deep">Instead: </span>{right}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* ——— Harper's signed tips ——— */}
            <Reveal as="section" aria-labelledby="poses-tips" className="mb-16">
              <p className="font-script text-3xl text-gold-deep">from the director's chair</p>
              <h2 id="poses-tips" className="mt-1 font-display text-3xl font-bold sm:text-4xl">Harper's Tips</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {HARPER_TIPS.map((tip, i) => (
                  <figure
                    key={tip.tag}
                    className={`relative rounded-xl border border-line bg-paper p-6 pt-8 shadow-[0_24px_50px_-35px_rgba(44,44,44,0.5)] transition-transform duration-500 hover:rotate-0 hover:-translate-y-1 ${i === 0 ? "md:-rotate-2" : i === 1 ? "md:rotate-1 md:translate-y-4" : "md:-rotate-1"}`}
                  >
                    <span className="absolute -top-3 left-6 h-6 w-16 rotate-[-4deg] bg-rose/50" aria-hidden />
                    <blockquote className="font-display text-[1.02rem] font-medium italic leading-relaxed text-ink">“{tip.text}”</blockquote>
                    <figcaption className="mt-4 flex items-center justify-between">
                      <span className="font-script text-2xl text-rose-deep">— Harper</span>
                      <span className="rounded-full bg-cream px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.14em] text-ink-faint">{tip.tag}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Reveal>

            {/* ——— FAQ ——— */}
            <Reveal as="section" aria-labelledby="poses-faq" className="mb-16">
              <p className="font-script text-3xl text-sage-deep">asked every session</p>
              <h2 id="poses-faq" className="mt-1 font-display text-3xl font-bold sm:text-4xl">Engagement Pose Questions, Answered</h2>
              <div className="mt-7">
                <FaqSection items={hub.faq} />
              </div>
            </Reveal>

            {/* ——— Explore all pose guides ——— */}
            <Reveal as="section" aria-labelledby="poses-explore">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="font-script text-3xl text-rose-deep">the full syllabus</p>
                  <h2 id="poses-explore" className="mt-1 font-display text-3xl font-bold sm:text-4xl">Explore All Pose Guides</h2>
                </div>
                <Link to="/guides" className="link-draw hidden shrink-0 text-sm font-semibold uppercase tracking-[0.14em] sm:inline">
                  Topical map →
                </Link>
              </div>
              <ul className="mt-7 divide-y divide-line border-y border-line">
                {spokes.map((post, i) => (
                  <li key={post.slug}>
                    <Link
                      to={postPath(post.slug)}
                      className="group grid gap-3 py-6 transition-colors duration-300 hover:bg-paper sm:grid-cols-[56px_1fr_auto] sm:items-center sm:gap-8 sm:px-3"
                    >
                      <span className="font-display text-3xl font-bold italic text-gold-deep">{String(i + 1).padStart(2, "0")}</span>
                      <span>
                        <span className="block font-display text-xl font-bold leading-snug transition-colors duration-300 group-hover:text-rose-deep sm:text-[1.35rem]">
                          {post.title}
                        </span>
                        <span className="mt-1 block text-[13px] text-ink-faint">
                          {formatDate(post.date)} · {readingTime(post)} min · {post.excerpt.split("—")[0]}
                        </span>
                      </span>
                      <span className="hidden h-10 w-10 place-items-center rounded-full border border-line text-ink-faint transition-all duration-300 group-hover:border-transparent group-hover:bg-ink group-hover:text-cream sm:grid">
                        <ArrowRight className="h-4.5 w-4.5 h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* ——— Closing CTA band ——— */}
        <Reveal className="my-20">
          <div className="grid overflow-hidden rounded-xl border border-line bg-ink text-cream lg:grid-cols-2">
            <div className="p-9 sm:p-12">
              <p className="font-script text-3xl text-gold">one pose a week, in your inbox</p>
              <h2 className="mt-2 font-display text-3xl font-bold leading-snug sm:text-4xl">The Love Letter starts with the pose library</h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-cream/65">
                Every Sunday: one pose with its exact direction, one location note, zero spam.
                4,200 couples already reading.
              </p>
            </div>
            <div className="flex items-center border-t border-cream/10 p-9 sm:p-12 lg:border-l lg:border-t-0">
              <div className="w-full">
                <NewsletterForm dark />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
