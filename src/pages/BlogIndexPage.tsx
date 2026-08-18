import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Feather } from "lucide-react";
import { Link } from "../lib/router";
import { categories, sortedPosts } from "../lib/content";
import type { CategorySlug } from "../content/types";
import ArticleCard from "../components/blog/ArticleCard";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import Reveal from "../components/ui/Reveal";

const PAGE_SIZE = 4;

/** Blog index — category filter + static-style pagination (/blog/page/N). */
export default function BlogIndexPage({ page = 1 }: { page?: number }) {
  const [filter, setFilter] = useState<CategorySlug | "all">("all");
  const all = sortedPosts();

  const filtered = useMemo(
    () => (filter === "all" ? all : all.filter((p) => p.category === filter)),
    [filter, all]
  );

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount);
  const visible = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const countFor = (slug: CategorySlug | "all") =>
    slug === "all" ? all.length : all.filter((p) => p.category === slug).length;

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-28 sm:px-8 md:pt-36">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "The Journal", path: "/blog" }]} />

      {/* Editorial header */}
      <Reveal className="mb-12 grid gap-8 border-b border-line pb-12 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <p className="flex items-center gap-2.5 font-script text-3xl text-rose-deep">
            <Feather className="h-6 w-6" aria-hidden /> every guide, one shelf
          </p>
          <h1 className="mt-2 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl">
            The <em className="italic text-rose-deep">Journal</em>
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
            Long-form, field-tested guides for the season between the ring and the aisle.
            No fluff, no stock-photo posing — just what actually works on real sessions.
          </p>
        </div>
        <p className="font-display text-[13px] font-semibold uppercase tracking-[0.2em] text-ink-faint md:col-span-4 md:justify-self-end md:text-right">
          {filtered.length} guide{filtered.length > 1 ? "s" : ""} · updated weekly
        </p>
      </Reveal>

      {/* Filter pills */}
      <Reveal className="mb-10">
        <div className="flex flex-wrap items-center gap-2.5" role="group" aria-label="Filter articles by category">
        <button
          type="button"
          onClick={() => setFilter("all")}
          aria-pressed={filter === "all"}
          className={`rounded-full border px-5 py-2 text-[13px] font-semibold tracking-wide transition-all duration-300 ${
            filter === "all"
              ? "border-ink bg-ink text-cream shadow-[0_10px_25px_-12px_rgba(44,44,44,0.6)]"
              : "border-line bg-paper text-ink-soft hover:-translate-y-0.5 hover:border-ink"
          }`}
        >
          All · {countFor("all")}
        </button>
        {categories.map((c) => (
          <button
            key={c.slug}
            type="button"
            onClick={() => setFilter(c.slug)}
            aria-pressed={filter === c.slug}
            className={`rounded-full border px-5 py-2 text-[13px] font-semibold tracking-wide transition-all duration-300 ${
              filter === c.slug
                ? "border-rose-deep bg-rose-deep text-cream shadow-[0_10px_25px_-12px_rgba(157,90,103,0.6)]"
                : "border-line bg-paper text-ink-soft hover:-translate-y-0.5 hover:border-rose-deep"
            }`}
          >
            {c.name} · {countFor(c.slug)}
          </button>
        ))}
        </div>
      </Reveal>

      {/* Articles */}
      <div className="grid gap-7 sm:grid-cols-2">
        {visible.map((p, i) => (
          <ArticleCard key={p.slug} post={p} variant="grid" index={(safePage - 1) * PAGE_SIZE + i} delay={(i % 2) * 90} />
        ))}
      </div>

      {/* Pagination */}
      {pageCount > 1 && filter === "all" && (
        <nav aria-label="Pagination" className="mt-14 flex items-center justify-center gap-3">
          {safePage > 1 && (
            <Link
              to={safePage === 2 ? "/blog" : `/blog/page/${safePage - 1}`}
              className="flex items-center gap-1.5 rounded-full border border-line px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-ink"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden /> Newer
            </Link>
          )}
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
            <Link
              key={n}
              to={n === 1 ? "/blog" : `/blog/page/${n}`}
              aria-current={n === safePage ? "page" : undefined}
              className={`grid h-11 w-11 place-items-center rounded-full font-display text-base font-bold transition-all duration-300 ${
                n === safePage
                  ? "bg-ink text-cream shadow-[0_10px_25px_-12px_rgba(44,44,44,0.7)]"
                  : "border border-line text-ink-soft hover:-translate-y-0.5 hover:border-ink"
              }`}
            >
              {n}
            </Link>
          ))}
          {safePage < pageCount && (
            <Link
              to={`/blog/page/${safePage + 1}`}
              className="flex items-center gap-1.5 rounded-full border border-line px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-ink"
            >
              Older <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          )}
        </nav>
      )}
    </div>
  );
}
