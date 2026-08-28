import { useEffect, useState } from "react";
import type { TocItem } from "../../content/types";

/**
 * Sticky table of contents with scroll-spy. Highlights the heading
 * currently in view as the reader scrolls through the article.
 */
export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const headings = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (headings.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    headings.forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, [items]);

  const jump = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 110;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav aria-label="Table of contents" className="sticky top-28">
      <p className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-ink-faint">
        <span className="h-px w-6 bg-gold" aria-hidden /> In this guide
      </p>
      <ul className="space-y-1 border-l border-line">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => jump(item.id)}
                aria-current={isActive ? "true" : undefined}
                className={`-ml-px block w-full border-l-2 py-1.5 pr-2 text-left text-[13.5px] leading-snug transition-all duration-300 ${
                  item.depth === 3 ? "pl-7" : "pl-4"
                } ${
                  isActive
                    ? "border-rose-deep font-semibold text-rose-deep"
                    : "border-transparent text-ink-soft hover:border-gold hover:text-ink"
                }`}
              >
                {item.text}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="mt-8 rounded-xl border border-line bg-paper p-5">
        <p className="font-script text-2xl text-rose-deep">save this guide</p>
        <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">
          Pin it now, thank yourself the night before your session.
        </p>
      </div>
    </nav>
  );
}
