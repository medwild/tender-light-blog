import { Aperture, Heart, Sun, Waves } from "lucide-react";
import { IMAGES, SITE } from "../lib/constants";
import { Link } from "../lib/router";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import NewsletterForm from "../components/ui/NewsletterForm";
import Reveal from "../components/ui/Reveal";

const principles = [
  {
    icon: <Aperture className="h-6 w-6" aria-hidden />,
    title: "Direction over posing",
    text: "I give you something to do, not somewhere to freeze. Tasks produce the two seconds after the pose — and that's where the photograph lives.",
  },
  {
    icon: <Sun className="h-6 w-6" aria-hidden />,
    title: "Natural light, always",
    text: "No flashes, no studio strobes. Golden hour, open shade, grey-sky softboxes — the light your wedding day will actually have.",
  },
  {
    icon: <Waves className="h-6 w-6" aria-hidden />,
    title: "Timeless over trendy",
    text: "No heavy presets, no gimmicks. Film-inspired tones that will look as right in 2046 as they do today.",
  },
  {
    icon: <Heart className="h-6 w-6" aria-hidden />,
    title: "You, not a catalogue",
    text: "Every session starts with how you two actually are — the jokes, the fidgets, the quiet habits. The camera just witnesses.",
  },
];

const gear = [
  "Two mirrorless bodies, always",
  "35mm f/1.4 — the storytelling lens",
  "85mm f/1.8 — the portrait lens",
  "A worn film camera for the end of every session",
  "A bluetooth speaker (your playlist, not mine)",
];

export default function AboutPage() {
  return (
    <div className="pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About Harper", path: "/about" }]} />

        {/* Split intro */}
        <div className="grid items-center gap-12 pb-20 lg:grid-cols-12">
          <Reveal className="relative lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-line shadow-[0_40px_80px_-45px_rgba(44,44,44,0.5)]">
              <img
                src={IMAGES.about}
                alt="Harper Ellis, founder and engagement photo editor of Tender Light, holding a vintage film camera"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <figure className="animate-floaty absolute -bottom-8 -right-2 w-36 rotate-6 rounded-md bg-paper p-2 pb-6 shadow-xl sm:w-44" style={{ "--tilt": "6deg" } as React.CSSProperties}>
              <img src={IMAGES.galleryLaugh} alt="A couple laughing mid-session" className="aspect-square w-full rounded-sm object-cover" />
              <figcaption className="absolute bottom-1 left-0 right-0 text-center font-script text-sm text-ink-soft">session №412</figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-span-7 lg:pl-6">
            <Reveal>
              <p className="font-script text-3xl text-rose-deep">nice to meet you</p>
              <h1 className="mt-2 font-display text-5xl font-bold leading-[1.03] tracking-tight sm:text-6xl">
                I traded the camera <em className="italic text-rose-deep">for the keyboard</em>
              </h1>
            </Reveal>
            <Reveal delay={120} className="mt-7 max-w-xl space-y-5 text-[1.04rem] leading-relaxed text-ink-soft">
              <p>
                I'm Harper Ellis — engagement photographer for eight years, 400+ sessions in the
                rearview, now the writer behind this journal. I'm the friend who'll tell you your
                golden-hour idea is perfect, then quietly steer you away from the spot with the
                porta-potty. You deserve photos that feel like you — and you don't need to be
                “good at photos” to get them.
              </p>
              <p>
                Tender Light started in {SITE.founded} with my sister's engagement photos. She kept
                apologizing for being “awkward,” and I kept thinking: <em className="font-display italic text-ink">it's not you — nobody
                told you what to do.</em> This journal is that telling, written down: every pose I
                directed, every outfit rule I enforced, every location I trusted with someone's
                golden hour.
              </p>
              <p>
                These days I live in {SITE.location.split(",")[0]} with my high school sweetheart,
                writing the guides I wish every couple had. I still scout gravel roads for stone
                bridges, still argue that grey skies are a feature — I just hand you the words
                instead of the negatives.
              </p>
            </Reveal>
            <Reveal delay={220} className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold tracking-wide text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-deep">
                Book a session
              </Link>
              <Link to="/blog" className="link-draw self-center text-sm font-semibold uppercase tracking-[0.14em]">
                Read the journal
              </Link>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Principles — ledger rows, not equal cards */}
      <section className="border-y border-line bg-paper py-20 md:py-24" aria-labelledby="principles-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-12">
            <p className="font-script text-3xl text-gold-deep">how I work</p>
            <h2 id="principles-heading" className="mt-1 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Four rules, <em className="italic text-rose-deep">no exceptions</em>
            </h2>
          </Reveal>
          <ul className="divide-y divide-line border-y border-line">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 80}>
                <div className="group grid gap-5 py-8 transition-colors duration-300 hover:bg-cream sm:grid-cols-[80px_280px_1fr] sm:items-start sm:gap-8">
                  <span className="font-script text-4xl text-line transition-colors duration-300 group-hover:text-rose-deep">0{i + 1}</span>
                  <span className="flex items-center gap-3 font-display text-2xl font-bold">
                    <span className="text-gold-deep">{p.icon}</span>
                    {p.title}
                  </span>
                  <p className="max-w-2xl text-[15px] leading-relaxed text-ink-soft">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* In the bag + newsletter */}
      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 md:py-24 lg:grid-cols-2">
        <Reveal>
          <p className="font-script text-3xl text-sage-deep">in the bag</p>
          <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">The gear that earns its place</h2>
          <ul className="mt-7 space-y-3.5">
            {gear.map((g) => (
              <li key={g} className="flex items-center gap-3.5 text-[15px] text-ink-soft">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                {g}
              </li>
            ))}
          </ul>
          <div className="mt-9 rounded-xl border border-line bg-paper p-6">
            <p className="font-display text-lg font-bold">Work with me</p>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              Based in {SITE.location}. I consult with couples on their engagement shoot (poses,
              outfits, locations, photographer shortlists) and partner with wedding brands on
              honest, tested recommendations. Currently booking{" "}
              <strong className="font-semibold text-ink">spring &amp; summer 2026</strong>.
            </p>
            <Link to="/contact" className="link-draw mt-4 inline-block text-sm font-semibold uppercase tracking-[0.14em] text-rose-deep">
              Say hello →
            </Link>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="font-script text-3xl text-rose-deep">stay close</p>
          <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">The Love Letter, weekly</h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
            The same letter I'd send a friend planning a shoot — one pose, one place, one trick.
          </p>
          <div className="mt-7">
            <NewsletterForm />
          </div>
          <blockquote className="mt-10 border-l-2 border-gold pl-5">
            <p className="font-display text-xl font-medium italic leading-snug">
              “Harper made two camera-hating introverts look like they'd been modeling for years — then talked us off the ledge about outfits over tacos.”
            </p>
            <cite className="mt-2 block font-script text-xl not-italic text-rose-deep">— Dana & Marcus, October session</cite>
          </blockquote>
        </Reveal>
      </section>
    </div>
  );
}
