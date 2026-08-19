import { CalendarDays, Clock, Tag } from "lucide-react";
import { Link } from "../lib/router";
import { extractToc, formatDate, getPost, hubFor, hubPath, postPath, readingTime, relatedPosts } from "../lib/content";
import { getHub } from "../content/hubs";
import AuthorBox from "../components/blog/AuthorBox";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import CommentSection from "../components/blog/CommentSection";
import PostBody from "../components/blog/PostBody";
import RelatedPosts from "../components/blog/RelatedPosts";
import ShareButtons from "../components/blog/ShareButtons";
import TableOfContents from "../components/blog/TableOfContents";
import Reveal from "../components/ui/Reveal";
import NotFoundPage from "./NotFoundPage";

/** Article template — hero, sticky TOC, MDX-like body, author, related, comments. */
export default function ArticlePage({ slug }: { slug: string }) {
  const post = getPost(slug);
  if (!post) return <NotFoundPage />;

  const hub = getHub(hubFor(post.slug));
  const toc = extractToc(post);
  const related = relatedPosts(post, 3);
  const shareImage = post.pinImages?.[0]?.image ?? post.featuredImage;

  return (
    <article className="pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: hub?.name ?? "Guides", path: hub ? hubPath(hub.slug) : "/guides" },
            { name: post.title, path: postPath(post.slug) },
          ]}
        />

        {/* Article header */}
        <header className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Link
              to={hub ? hubPath(hub.slug) : "/guides"}
              className="inline-block rounded-full bg-rose/25 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.16em] text-rose-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose/45"
            >
              {hub?.name ?? "Guides"}
              {post.pillar && <span className="ml-1.5 text-gold-deep">★ pillar</span>}
            </Link>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">{post.excerpt}</p>
          </Reveal>
          <Reveal delay={120} className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] font-medium text-ink-faint">
            <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4 text-gold-deep" aria-hidden /> {formatDate(post.date)}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-gold-deep" aria-hidden /> {readingTime(post)} min read</span>
            <span>By <strong className="font-semibold text-ink">{post.author.name}</strong></span>
          </Reveal>
          <Reveal delay={200} className="mt-7 flex justify-center">
            <ShareButtons title={post.title} path={postPath(post.slug)} image={shareImage} />
          </Reveal>
        </header>

        {/* Hero image */}
        <Reveal delay={120} className="mx-auto mt-12 max-w-5xl">
          <figure className="overflow-hidden rounded-xl border border-line shadow-[0_40px_80px_-45px_rgba(44,44,44,0.55)]">
            <img
              src={post.featuredImage}
              alt={post.featuredAlt}
              className="animate-kenburns aspect-[16/9] w-full object-cover"
            />
          </figure>
        </Reveal>

        {/* Mobile "in this guide" */}
        <details className="mx-auto mt-10 max-w-3xl rounded-xl border border-line bg-paper px-5 py-4 lg:hidden">
          <summary className="cursor-pointer font-display text-lg font-bold">In this guide</summary>
          <ul className="mt-3 space-y-2">
            {toc.map((t) => (
              <li key={t.id} className={t.depth === 3 ? "pl-4" : ""}>
                <button type="button" onClick={() => {
                  const el = document.getElementById(t.id);
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 110, behavior: "smooth" });
                }} className="link-draw text-left text-sm text-ink-soft">
                  {t.text}
                </button>
              </li>
            ))}
          </ul>
        </details>

        {/* Body: sticky TOC + prose */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-12 lg:grid-cols-12">
          <aside className="hidden lg:col-span-4 lg:block">
            <TableOfContents items={toc} />
          </aside>
          <div className="lg:col-span-8">
            <PostBody blocks={post.blocks} monetization={post.monetization} />

            {/* Tags */}
            <div className="mt-12 flex flex-wrap items-center gap-2.5 border-t border-line pt-8">
              <Tag className="h-4 w-4 text-gold-deep" aria-hidden />
              {post.tags.map((t) => (
                <span key={t} className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-[12px] font-semibold text-ink-soft">
                  #{t}
                </span>
              ))}
            </div>

            {/* Keyword targeting (frontmatter) — visible topical signals */}
            {(post.secondaryKeywords?.length || post.lsiKeywords?.length) ? (
              <Reveal className="mt-6 rounded-xl border border-line bg-paper p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-faint">In this guide</p>
                <p className="mt-2.5 flex flex-wrap gap-2">
                  {[...(post.secondaryKeywords ?? []), ...(post.lsiKeywords ?? [])].map((k) => (
                    <span key={k} className="rounded-full bg-cream px-3 py-1 text-[12px] font-medium text-ink-soft">{k}</span>
                  ))}
                </p>
              </Reveal>
            ) : null}

            {/* Editorial internal links (frontmatter) */}
            {post.internalLinks?.length ? (
              <Reveal className="mt-6 rounded-xl border border-line bg-paper p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-faint">Keep exploring</p>
                <ul className="mt-2.5 space-y-1.5">
                  {post.internalLinks.map((l) => (
                    <li key={l.url}>
                      <Link to={l.url} className="link-draw text-sm font-medium text-rose-deep">
                        {l.anchor} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}

            {/* Citations / sources (E-E-A-T) */}
            {post.citations?.length ? (
              <Reveal className="mt-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-faint">Sources</p>
                <ul className="mt-2 space-y-1 text-[13px] text-ink-soft">
                  {post.citations.map((c) => <li key={c}>• {c}</li>)}
                </ul>
              </Reveal>
            ) : null}

            <AuthorBox author={post.author} />
            <CommentSection />
          </div>
        </div>

        {/* Related — full width */}
        <div className="mx-auto max-w-6xl">
          <RelatedPosts post={post} />
        </div>

        {/* Next-up strip */}
        {related[0] && (
          <Reveal className="mx-auto my-16 max-w-6xl">
            <div className="grid overflow-hidden rounded-xl border border-line bg-ink text-cream sm:grid-cols-2">
              <div className="p-8 sm:p-10">
                <p className="font-script text-2xl text-gold">up next on your reading list</p>
                <h2 className="mt-2 font-display text-3xl font-bold leading-snug">{related[0].title}</h2>
                <Link
                  to={postPath(related[0].slug)}
                  className="group mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose"
                >
                  Read it now
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
              <img
                src={related[0].featuredImage}
                alt={related[0].featuredAlt}
                loading="lazy"
                className="h-56 w-full object-cover sm:h-full"
              />
            </div>
          </Reveal>
        )}
      </div>
    </article>
  );
}
