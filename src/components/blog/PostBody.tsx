import { Aperture, Sparkles, Sun } from "lucide-react";
import type { Block } from "../../content/types";
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
