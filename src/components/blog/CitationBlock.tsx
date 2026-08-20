import { BookOpenCheck, ExternalLink } from "lucide-react";
import type { Citation } from "../../content/types";
import Reveal from "../ui/Reveal";

/** Normalize a legacy string citation ("Label: domain.com") into the structured shape. */
function toCitation(c: string | Citation): { title: string; url: string | null; claim: string | null } {
  if (typeof c === "string") {
    const [label, domain] = c.split(":").map((s) => s.trim());
    return { title: label ?? c, url: domain ? `https://${domain.replace(/^https?:\/\//, "")}` : null, claim: null };
  }
  return { title: c.title, url: c.url, claim: c.claim ?? null };
}

/**
 * "Sources & Further Reading" — the E-E-A-T trust layer (plan §16).
 * Only verifiable external facts are cited here; anything born from
 * session experience stays in Harper's voice. No competitor links, ever.
 */
export default function CitationBlock({ citations }: { citations: (string | Citation)[] }) {
  const items = citations.map(toCitation);
  return (
    <Reveal className="mt-10 overflow-hidden rounded-xl border border-line bg-paper">
      <div className="h-1.5 bg-gradient-to-r from-sage via-gold to-sage" aria-hidden />
      <div className="p-6 sm:p-7">
        <p className="flex items-center gap-2.5 font-display text-lg font-bold text-ink">
          <BookOpenCheck className="h-5 w-5 text-sage-deep" aria-hidden />
          Sources &amp; Further Reading
        </p>
        <p className="mt-1.5 text-[13px] text-ink-faint">
          Verifiable facts are linked to their source. Everything else is field experience, in Harper's own words.
        </p>
        <ol className="mt-5 space-y-4">
          {items.map((c, i) => (
            <li key={c.title} className="flex gap-3.5">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sage/25 text-[11px] font-bold text-sage-deep">
                {i + 1}
              </span>
              <div>
                {c.claim && <p className="text-[14px] leading-relaxed text-ink-soft">“{c.claim}”</p>}
                <p className={`text-[14px] font-semibold ${c.claim ? "mt-1" : ""}`}>
                  {c.url ? (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sage-deep transition-colors hover:text-ink"
                    >
                      <span className="link-draw">{c.title}</span>
                      <ExternalLink className="h-3.5 w-3.5 opacity-60 transition-opacity group-hover:opacity-100" aria-hidden />
                    </a>
                  ) : (
                    <span className="text-ink">{c.title}</span>
                  )}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  );
}
