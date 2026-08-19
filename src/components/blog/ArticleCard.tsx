import { ArrowUpRight, Clock } from "lucide-react";
import { Link } from "../../lib/router";
import { formatDate, getCategory, readingTime, type PostLike } from "../../lib/content";
import Reveal from "../ui/Reveal";

/**
 * ArticleCard — editorial card with image zoom on hover, category chip,
 * and index number. Variants: featured (horizontal), grid, row.
 */
export default function ArticleCard({
  post,
  variant = "grid",
  index,
  delay = 0,
}: {
  post: PostLike;
  variant?: "featured" | "grid" | "row";
  index?: number;
  delay?: number;
}) {
  const category = getCategory(post.category);

  if (variant === "row") {
    return (
      <Reveal as="article" delay={delay}>
        <Link
          to={`/blog/${post.slug}`}
          className="group grid gap-6 border-b border-line py-8 transition-colors duration-300 hover:bg-paper sm:grid-cols-[240px_1fr] sm:gap-8"
        >
          <div className="overflow-hidden rounded-xl">
            <img
              src={post.featuredImage}
              alt={post.featuredAlt}
              loading="lazy"
              decoding="async"
              className="aspect-[3/2] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
          </div>
          <div className="flex flex-col justify-center">
            <CardMeta post={post} categoryName={category?.name ?? post.category} />
            <h2 className="mt-2.5 font-display text-2xl font-bold leading-snug transition-colors duration-300 group-hover:text-rose-deep sm:text-[1.7rem]">
              {post.title}
            </h2>
            <p className="mt-3 line-clamp-2 max-w-2xl text-[15px] leading-relaxed text-ink-soft">{post.excerpt}</p>
            <span className="mt-4 inline-flex w-fit items-center gap-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-gold-deep">
              Read the guide <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </span>
          </div>
        </Link>
      </Reveal>
    );
  }

  const featured = variant === "featured";

  return (
    <Reveal as="article" delay={delay} className={featured ? "sm:col-span-2" : ""}>
      <Link
        to={`/blog/${post.slug}`}
        className={`group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-paper transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(44,44,44,0.35)] ${
          featured ? "lg:flex-row" : ""
        }`}
      >
        <div className={`relative overflow-hidden ${featured ? "lg:w-[54%]" : ""}`}>
          <img
            src={post.featuredImage}
            alt={post.featuredAlt}
            loading={featured ? "eager" : "lazy"}
            className={`${featured ? "aspect-[16/10] lg:aspect-auto lg:h-full" : "aspect-[3/2]"} w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.07]`}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {typeof index === "number" && (
            <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 font-display text-sm font-bold italic text-ink backdrop-blur-sm">
              № {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </div>
        <div className={`flex flex-1 flex-col p-6 ${featured ? "lg:p-9" : ""}`}>
          <CardMeta post={post} categoryName={category?.name ?? post.category} />
          <h2
            className={`mt-3 font-display font-bold leading-snug transition-colors duration-300 group-hover:text-rose-deep ${
              featured ? "text-[1.6rem] sm:text-3xl" : "text-xl"
            }`}
          >
            {post.title}
          </h2>
          <p className={`mt-3 text-[15px] leading-relaxed text-ink-soft ${featured ? "" : "line-clamp-2"}`}>
            {post.excerpt}
          </p>
          <div className="mt-auto flex items-center justify-between pt-6">
            <span className="text-[13px] font-medium text-ink-faint">By {post.author.name}</span>
            <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-gold-deep">
              Read <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

function CardMeta({ post, categoryName }: { post: PostLike; categoryName: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[12px] font-semibold uppercase tracking-[0.13em]">
      <span className="rounded-full bg-rose/25 px-3 py-1 text-rose-deep">{categoryName}</span>
      <time dateTime={post.date} className="text-ink-faint">{formatDate(post.date)}</time>
      <span className="inline-flex items-center gap-1 text-ink-faint">
        <Clock className="h-3.5 w-3.5" aria-hidden /> {readingTime(post)} min read
      </span>
    </div>
  );
}
