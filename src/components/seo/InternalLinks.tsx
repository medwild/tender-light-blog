import { Waypoints } from "lucide-react";
import { Link } from "../../lib/router";
import type { InternalLink } from "../../content/types";

/**
 * §14 — Contextual internal links ("Keep exploring"). Renders the curated
 * `internalLinks` from an article's frontmatter as anchor-keyword links,
 * feeding the silo's internal-linking graph. Only keyword-rich anchors,
 * never "click here" / "read more" (per §14 anchor rules).
 */
export default function InternalLinks({ links }: { links: InternalLink[] }) {
  if (!links.length) return null;
  return (
    <aside aria-label="Keep exploring" className="rounded-xl border border-line bg-paper p-5 sm:p-6">
      <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-ink-faint">
        <Waypoints className="h-4 w-4 text-rose-deep" aria-hidden />
        Keep exploring
      </p>
      <ul className="mt-3.5 space-y-2.5">
        {links.map((l, i) => (
          <li key={l.url} className="flex items-baseline gap-3">
            <span className="font-script text-lg leading-none text-gold-deep/70">{String(i + 1).padStart(2, "0")}</span>
            <Link
              to={l.url}
              className="link-draw text-[15px] font-medium text-rose-deep transition-colors hover:text-ink"
            >
              {l.anchor}
              <span aria-hidden="true" className="ml-1.5 text-rose-deep/60">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
