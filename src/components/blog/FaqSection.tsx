import { useState } from "react";
import { ChevronDown } from "lucide-react";

/** Accessible FAQ accordion (FAQPage JSON-LD is emitted by the route SEO effect). */
export default function FaqSection({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line rounded-xl border border-line bg-paper">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              aria-controls={`faq-panel-${i}`}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-cream/70"
            >
              <span className={`font-display text-[1.08rem] font-semibold transition-colors ${open ? "text-rose-deep" : "text-ink"}`}>
                {item.q}
              </span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                  open ? "rotate-180 border-rose-deep bg-rose-deep text-cream" : "border-line text-ink-faint"
                }`}
              >
                <ChevronDown className="h-4 w-4" aria-hidden />
              </span>
            </button>
            <div
              id={`faq-panel-${i}`}
              role="region"
              className={`grid transition-[grid-template-rows] duration-400 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-[15px] leading-relaxed text-ink-soft">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
