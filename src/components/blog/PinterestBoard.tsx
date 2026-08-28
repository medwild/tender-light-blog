import { useState } from "react";
import { Check, Copy, Pin, Ruler } from "lucide-react";
import type { PinImage } from "../../content/types";
import { PINTEREST_RULES } from "../../content/contentRules";
import Reveal from "../ui/Reveal";

/** Char counter that flips to a warning tone past the limit. */
function Counter({ n, max }: { n: number; max: number }) {
  const over = n > max;
  return (
    <span
      className={`ml-auto shrink-0 font-mono text-[11px] tabular-nums ${over ? "font-bold text-rose-deep" : "text-ink-faint"}`}
      title={over ? `${n - max} characters over the ${max}-char limit` : `${max - n} characters left`}
    >
      {n}/{max}
    </span>
  );
}

/**
 * §20 — The Pinterest production kit for one article.
 * Renders each vertical pin (1000×1500) exactly as it will appear on the
 * board, with live title/description char counters and one-click actions.
 */
export default function PinterestBoard({ pins, shareUrl }: { pins: PinImage[]; shareUrl: string }) {
  const [copied, setCopied] = useState<number | null>(null);

  const copy = async (i: number, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(i);
      setTimeout(() => setCopied(null), 1600);
    } catch {
      setCopied(null);
    }
  };

  if (!pins.length) return null;

  return (
    <section aria-labelledby="pinterest-kit-heading" className="mt-12">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-rose-deep">
              <Pin className="h-4 w-4" aria-hidden /> The Pinterest kit
            </p>
            <h2 id="pinterest-kit-heading" className="mt-1.5 font-display text-3xl font-bold tracking-tight">
              3 pins, ready to publish
            </h2>
          </div>
          <p className="flex items-center gap-1.5 text-[12px] font-medium text-ink-faint">
            <Ruler className="h-4 w-4" aria-hidden /> 1000 × 1500 · vertical · keyword-first
          </p>
        </div>
      </Reveal>

      <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pins.map((pin, i) => {
          const pinHref = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&media=${encodeURIComponent(pin.image)}&description=${encodeURIComponent(pin.pinTitle)}`;
          return (
            <Reveal key={pin.pinTitle} delay={i * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-paper transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-30px_rgba(157,90,103,0.5)]">
                {/* The pin, as it renders on the board */}
                <div className="relative aspect-[2/3] overflow-hidden">
                  <img
                    src={pin.image}
                    alt={`${pin.pinTitle} — vertical Pinterest pin, 1000 by 1500 pixels`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" aria-hidden />
                  <span className="absolute left-3 top-3 rounded-full bg-rose-deep px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-cream">
                    Pin 0{i + 1}
                  </span>
                  <p className="absolute inset-x-0 bottom-0 p-4 font-display text-[1.05rem] font-bold leading-snug text-cream">
                    {pin.pinTitle}
                  </p>
                </div>

                {/* Metadata + live limits */}
                <div className="flex flex-1 flex-col gap-3 p-4">
                  <div>
                    <p className="flex items-baseline gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-ink-faint">
                      Title <Counter n={pin.pinTitle.length} max={PINTEREST_RULES.pinTitleMax} />
                    </p>
                    <p className="mt-1 text-[13px] font-semibold leading-snug text-ink">{pin.pinTitle}</p>
                  </div>
                  <div>
                    <p className="flex items-baseline gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-ink-faint">
                      Description <Counter n={pin.pinDescription.length} max={PINTEREST_RULES.pinDescriptionMax} />
                    </p>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-ink-soft">{pin.pinDescription}</p>
                  </div>

                  <div className="mt-auto flex items-center gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => copy(i, `${pin.pinTitle}\n\n${pin.pinDescription}\n\n${shareUrl}`)}
                      className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-[12px] font-semibold transition-all duration-300 ${
                        copied === i
                          ? "border-sage-deep bg-sage-deep text-cream"
                          : "border-line text-ink-soft hover:border-rose-deep hover:text-rose-deep"
                      }`}
                    >
                      {copied === i ? <Check className="h-3.5 w-3.5" aria-hidden /> : <Copy className="h-3.5 w-3.5" aria-hidden />}
                      {copied === i ? "Copied" : "Copy"}
                    </button>
                    <a
                      href={pinHref}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-rose-deep px-3 py-2 text-[12px] font-semibold text-cream transition-all duration-300 hover:bg-ink"
                    >
                      <Pin className="h-3.5 w-3.5" aria-hidden /> Pin it
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
