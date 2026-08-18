import { ArrowRight } from "lucide-react";
import { Link } from "../lib/router";
import { categories, getCategory, postsByCategory } from "../lib/content";
import ArticleCard from "../components/blog/ArticleCard";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import Reveal from "../components/ui/Reveal";
import NotFoundPage from "./NotFoundPage";

const accentText: Record<string, string> = {
  rose: "text-rose-deep",
  gold: "text-gold-deep",
  sage: "text-sage-deep",
  blush: "text-blush",
};
const accentBg: Record<string, string> = {
  rose: "bg-rose/20",
  gold: "bg-gold/20",
  sage: "bg-sage/20",
  blush: "bg-blush/25",
};

/** Category page — H1, editorial description, full guide list, sibling links. */
export default function CategoryPage({ slug }: { slug: string }) {
  const category = getCategory(slug);
  if (!category) return <NotFoundPage />;

  const posts = postsByCategory(category.slug).sort((a, b) => (a.date < b.date ? 1 : -1));
  const others = categories.filter((c) => c.slug !== category.slug);

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-28 sm:px-8 md:pt-36">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Categories", path: "/blog" },
          { name: category.name, path: `/category/${category.slug}` },
        ]}
      />

      {/* Editorial header */}
      <Reveal className="grid gap-8 border-b border-line pb-14 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <p className={`inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.18em] ${accentBg[category.accent]} ${accentText[category.accent]}`}>
            <span className="font-script text-base normal-case tracking-normal">shelf №{categories.findIndex((c) => c.slug === category.slug) + 1}</span>
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl">
            {category.name.split(" ")[0]}{" "}
            <em className={`italic ${accentText[category.accent]}`}>{category.name.split(" ").slice(1).join(" ")}</em>
          </h1>
          <p className="mt-6 max-w-2xl text-[1.06rem] leading-relaxed text-ink-soft">{category.longDescription}</p>
        </div>
        <div className="md:col-span-4 md:justify-self-end md:text-right">
          <p className="font-display text-6xl font-bold text-line">{String(posts.length).padStart(2, "0")}</p>
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
            guide{posts.length > 1 ? "s" : ""} on this shelf
          </p>
        </div>
      </Reveal>

      {/* Guides */}
      <div className="mt-4">
        {posts.map((p, i) => (
          <ArticleCard key={p.slug} post={p} variant="row" index={i} delay={i * 80} />
        ))}
        {posts.length === 0 && (
          <Reveal className="py-20 text-center">
            <p className="font-script text-3xl text-rose-deep">nothing developed here yet</p>
            <p className="mt-3 text-ink-soft">This shelf is being printed — check back after the next session.</p>
          </Reveal>
        )}
      </div>

      {/* Other shelves */}
      <Reveal className="mt-16">
        <p className="mb-5 font-script text-2xl text-gold-deep">while you're here…</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {others.map((c) => (
            <Link
              key={c.slug}
              to={`/category/${c.slug}`}
              className="group flex items-center justify-between gap-4 rounded-xl border border-line bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-[0_18px_40px_-22px_rgba(44,44,44,0.4)]"
            >
              <span>
                <span className="block font-display text-xl font-bold group-hover:text-rose-deep">{c.name}</span>
                <span className="mt-1 block text-[13px] text-ink-soft">{c.description}</span>
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 text-gold-deep transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </Link>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
