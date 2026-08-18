import { ChevronRight } from "lucide-react";
import { Link } from "../../lib/router";

export interface Crumb {
  name: string;
  path: string; // "/" for home
}

/**
 * Visual breadcrumb trail. The matching BreadcrumbList JSON-LD is emitted
 * by the route-level SEO effect (see lib/seo.ts → breadcrumbSchema).
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-[13px] tracking-wide text-ink-faint">
        {items.map((crumb, i) => {
          const last = i === items.length - 1;
          return (
            <li key={crumb.path + crumb.name} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-gold" aria-hidden />}
              {last ? (
                <span aria-current="page" className="font-medium text-ink">
                  {crumb.name}
                </span>
              ) : (
                <Link to={crumb.path} className="link-draw hover:text-ink">
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
