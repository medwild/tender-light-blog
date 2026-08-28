import { ArrowRight } from "lucide-react";
import { Link } from "../../lib/router";
import { HUB_ACCENTS, type Hub } from "../../content/hubs";

/**
 * §14 internal-linking rule: every article links to its hub once, inside the
 * first third of the content. Rendered as a film-reel label — part of the
 * site's photographic identity, never a generic callout box.
 */
export default function HubLinkBanner({ hub, index }: { hub: Hub; index: number }) {
  const accent = HUB_ACCENTS[hub.accent];
  return (
    <Link
      to={`/${hub.slug}`}
      className="group mb-10 flex items-center gap-4 rounded-xl border border-line bg-paper px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-deep/50 hover:shadow-[0_18px_38px_-22px_rgba(157,90,103,0.55)] sm:gap-6 sm:px-6"
    >
      {/* Reel number */}
      <span className={`relative grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 ${accent.ring} bg-cream`}>
        <span className={`font-display text-xl font-bold italic ${accent.text}`}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className={`absolute -inset-1 rounded-full border border-dashed ${accent.ring} opacity-40 transition-transform duration-700 group-hover:rotate-90`} aria-hidden />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-ink-faint">
          Part of the field guide
        </span>
        <span className="mt-0.5 block truncate font-display text-xl font-bold text-ink transition-colors duration-300 group-hover:text-rose-deep sm:text-[1.35rem]">
          {hub.name}
        </span>
        <span className="mt-0.5 block text-[12.5px] text-ink-soft">
          {hub.spokes.length} guides in this hub · {hub.volume} searches/mo
        </span>
      </span>

      <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${accent.chip} transition-transform duration-300 group-hover:translate-x-1`}>
        <ArrowRight className={`h-5 w-5 ${accent.text}`} aria-hidden />
      </span>
    </Link>
  );
}
