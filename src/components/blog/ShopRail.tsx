import { ShoppingBag } from "lucide-react";
import { affiliateSectionLabel, ARTICLE_SHOPS } from "../../content/monetization";
import Reveal from "../ui/Reveal";

/**
 * Phase 4 — monetization cluster. A compact affiliate rail rendered under the
 * hero for registry-backed articles. Every link carries
 * rel="sponsored noopener noreferrer" (FTC / §16 rule).
 */
export default function ShopRail({ slug }: { slug: string }) {
  const kits = ARTICLE_SHOPS[slug];
  if (!kits?.length) return null;

  return (
    <Reveal className="mx-auto mt-10 max-w-5xl">
      <aside
        aria-label="Recommended products"
        className="overflow-hidden rounded-xl border border-gold/50 bg-gradient-to-br from-gold/12 via-paper to-rose/10"
      >
        <div className="flex flex-wrap items-center gap-3 border-b border-gold/30 px-6 py-4">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gold/25 text-gold-deep">
            <ShoppingBag className="h-[18px] w-[18px]" aria-hidden />
          </span>
          <div>
            <p className="font-display text-lg font-bold leading-tight text-ink">Shop this guide</p>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-deep/80">
              {kits.map((k) => affiliateSectionLabel(k.section)).join(" · ")}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2.5 px-6 py-5">
          {kits.flatMap((k) => k.items).map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2.5 text-[13px] font-semibold text-ink-soft shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-deep hover:text-gold-deep hover:shadow-md"
            >
              {item.label}
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink-faint transition-colors group-hover:text-gold-deep">
                {item.store} ↗
              </span>
            </a>
          ))}
        </div>
        <p className="border-t border-gold/20 px-6 py-3 text-[11px] leading-relaxed text-ink-faint">
          Affiliate links — if you buy through these, we may earn a small commission at no cost to
          you. See our <a href="/affiliate-disclosure/" className="link-draw font-semibold text-gold-deep">affiliate disclosure</a>.
        </p>
      </aside>
    </Reveal>
  );
}
