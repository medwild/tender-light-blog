import { Aperture, ArrowRight, MapPin, ShoppingBag, Sparkles, Sun } from "lucide-react";
import type { Block } from "../../content/types";
import { Link } from "../../lib/router";
import Reveal from "../ui/Reveal";
import FaqSection from "./FaqSection";

const calloutTones = {
  rose: "border-rose/70 bg-rose/12 text-rose-deep",
  gold: "border-gold/60 bg-gold/12 text-gold-deep",
  sage: "border-sage/60 bg-sage/14 text-sage-deep",
} as const;

const calloutIcons = {
  rose: <Aperture className="h-5 w-5" aria-hidden />,
  gold: <Sparkles className="h-5 w-5" aria-hidden />,
  sage: <Sun className="h-5 w-5" aria-hidden />,
};

/** Renders the typed block tree (the MDX equivalent) with scroll reveals. */
export default function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-tender">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return <Reveal key={i}><p>{renderInline(block.text)}</p></Reveal>;
          case "h2":
            return (
              <Reveal key={i}>
                <h2 id={block.id} className="scroll-mt-28 pt-4 font-display text-[1.75rem] font-bold leading-tight text-ink sm:text-[2rem]">
                  <span className="mr-3 font-script text-2xl font-medium text-gold-deep align-middle">✳</span>
                  {block.text}
                </h2>
              </Reveal>
            );
          case "h3":
            return (
              <Reveal key={i}>
                <h3 id={block.id} className="scroll-mt-28 font-display text-[1.3rem] font-bold text-ink">
                  {block.text}
                </h3>
              </Reveal>
            );
          case "list":
            return (
              <Reveal key={i}>
                {block.ordered ? (
                  <ol className="list-decimal space-y-2.5 pl-6 marker:font-display marker:font-bold marker:text-rose-deep">
                    {block.items.map((it, j) => <li key={j}>{it}</li>)}
                  </ol>
                ) : (
                  <ul className="space-y-3">
                    {block.items.map((it, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            );
          case "callout":
            return (
              <Reveal key={i}>
                <aside className={`flex gap-4 rounded-xl border-l-4 p-5 sm:p-6 ${calloutTones[block.tone]}`}>
                  <span className="mt-0.5 shrink-0">{calloutIcons[block.tone]}</span>
                  <div>
                    <p className="font-display text-[1.05rem] font-bold text-ink">{block.title}</p>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{block.text}</p>
                  </div>
                </aside>
              </Reveal>
            );
          case "quote":
            return (
              <Reveal key={i}>
                <blockquote className="relative border-y border-line py-8 text-center">
                  <p className="mx-auto max-w-xl font-display text-[1.45rem] font-medium italic leading-snug text-ink">
                    “{block.text}”
                  </p>
                  {block.cite && (
                    <cite className="mt-3 block font-script text-xl not-italic text-rose-deep">— {block.cite}</cite>
                  )}
                </blockquote>
              </Reveal>
            );
          case "gallery":
            return (
              <Reveal key={i}>
                <figure
                  className={`grid gap-3 ${block.images.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}
                >
                  {block.images.map((img) => (
                    <div key={img.src} className="group overflow-hidden rounded-xl">
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      />
                    </div>
                  ))}
                </figure>
              </Reveal>
            );
          case "faq":
            return (
              <Reveal key={i}>
                <FaqSection items={block.items} />
              </Reveal>
            );
          case "ad":
            return (
              <Reveal key={i}>
                {/* Reserved AdSense slot — swap this aside for the ad unit when approved. */}
                <aside
                  aria-label="Advertisement placeholder"
                  className="grid place-items-center rounded-xl border border-dashed border-line bg-paper/70 px-6 py-10"
                >
                  <div className="text-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink-faint">Advertisement</p>
                    <p className="mt-2 text-xs text-ink-faint">
                      {block.slot === "in-article" ? "In-article ad slot" : "End-of-section ad slot"} · wired for AdSense
                    </p>
                  </div>
                </aside>
              </Reveal>
            );
          case "shop":
            return (
              <Reveal key={i}>
                <div className="rounded-xl border border-line bg-paper p-6">
                  <p className="flex items-center gap-2 font-display text-lg font-bold text-ink">
                    <ShoppingBag className="h-5 w-5 text-gold-deep" aria-hidden /> Shop the look
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2.5">
                    {block.items.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="sponsored noopener noreferrer"
                          className="group inline-flex items-center gap-2 rounded-full border border-line bg-cream px-4 py-2 text-[13px] font-medium text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-deep hover:text-rose-deep"
                        >
                          {item.label}
                          <span className="text-[10px] font-bold uppercase tracking-widest text-ink-faint group-hover:text-rose-deep">
                            {item.store} ↗
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-[11px] leading-relaxed text-ink-faint">
                    Affiliate-ready links — add your Amazon Associates / LTK IDs before publishing.
                  </p>
                </div>
              </Reveal>
            );
          case "pinKit":
            return (
              <Reveal key={i}>
                <div className="rounded-xl border border-line bg-ink p-6 text-cream sm:p-7">
                  <p className="flex items-center gap-2 font-display text-lg font-bold">
                    <MapPin className="h-5 w-5 text-rose" aria-hidden /> Pinterest kit — 3 pins for this guide
                  </p>
                  <p className="mt-1.5 text-[13px] text-cream/60">
                    Don't just pin the featured image: three variants, one URL, all 1000 × 1500 (2:3).
                  </p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    {block.pins.map((pin) => (
                      <figure key={pin.overlay} className="group">
                        <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
                          <img
                            src={pin.image}
                            alt={`Pinterest pin mockup — ${pin.overlay}`}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                          />
                          <span className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" aria-hidden />
                          <figcaption className="absolute inset-x-0 bottom-0 p-3.5">
                            <p className="font-display text-[15px] font-bold leading-snug text-cream">{pin.overlay}</p>
                          </figcaption>
                        </div>
                        <p className="mt-2 text-[11px] leading-relaxed text-cream/50">{pin.note}</p>
                      </figure>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          case "pinCta":
            return (
              <Reveal key={i}>
                <div className="flex flex-col items-center gap-4 rounded-xl border border-rose/60 bg-rose/12 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
                  <div>
                    <p className="font-script text-2xl text-rose-deep">save it for later</p>
                    <p className="mt-1 font-display text-lg font-bold text-ink">
                      Pin this guide to your Wedding Inspiration board
                    </p>
                  </div>
                  <a
                    href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(block.url)}&media=${encodeURIComponent(block.image)}&description=${encodeURIComponent("15 Casual Engagement Photo Ideas (Outfits, Poses & Locations) — Tender Light")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 rounded-full bg-rose-deep px-6 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink"
                  >
                    Pin this guide
                  </a>
                </div>
              </Reveal>
            );
          case "keepReading":
            return (
              <Reveal key={i}>
                <nav aria-label="Keep reading" className="rounded-xl border border-line bg-paper">
                  <p className="border-b border-line px-6 py-4 font-display text-lg font-bold text-ink">
                    Keep reading <span className="font-script text-xl font-medium text-rose-deep">→</span>
                  </p>
                  <ul className="divide-y divide-line/70">
                    {block.items.map((item) => (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          className="group flex items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-cream/70"
                        >
                          <span>
                            <span className="block font-display text-[1.05rem] font-semibold text-ink group-hover:text-rose-deep">
                              {item.label}
                            </span>
                            <span className="mt-0.5 block text-[12.5px] text-ink-faint">{item.note}</span>
                          </span>
                          <ArrowRight className="h-5 w-5 shrink-0 text-gold-deep transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-rose-deep" aria-hidden />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </Reveal>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

/** Minimal italic/emphasis renderer for *wrapped* phrases in paragraphs. */
function renderInline(text: string) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((part, i) =>
    part.startsWith("*") && part.endsWith("*") ? (
      <em key={i} className="font-display italic text-ink">{part.slice(1, -1)}</em>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}
