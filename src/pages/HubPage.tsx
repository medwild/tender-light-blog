import { ArrowRight, Compass, Feather } from "lucide-react";
import { Link } from "../lib/router";
import { getHub, HUB_ACCENTS, HUBS } from "../content/hubs";
import { formatDate, getCategory, getPost, readingTime } from "../lib/content";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import FaqSection from "../components/blog/FaqSection";
import NewsletterForm from "../components/ui/NewsletterForm";
import Reveal from "../components/ui/Reveal";
import NotFoundPage from "./NotFoundPage";

/**
 * Topic hub — the keyword-optimized landing page of a hub-and-spoke silo.
 * Opens with an answer-first statement, then curates the spoke articles.
 */
export default function HubPage({ slug }: { slug: string }) {
  const hub = getHub(slug);
  if (!hub) return <NotFoundPage />;

  const accent = HUB_ACCENTS[hub.accent];
  const spokes = hub.spokes.map(getPost).filter(Boolean) as NonNullable<ReturnType<typeof getPost>>[];

  return (
    <div className="pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }, { name: hub.name, path: `/hub/${hub.slug}` }]} />

        {/* Editorial opener — keyword as the statement */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="flex flex-wrap items-center gap-3 text-[12px] font-bold uppercase tracking-[0.22em] text-ink-faint">
                <span className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 ${accent.chip} ${accent.text} normal-case tracking-wide`}>
                  <Compass className="h-3.5 w-3.5" aria-hidden /> Topic hub
                </span>
                <span>Keyword · {hub.keyword}</span>
                <span className="text-gold-deep">{hub.volume} · KD {hub.kd}</span>
              </p>
              <h1 className="mt-5 font-display text-[2.6rem] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.2rem]">
                {hub.name.split(" ").slice(0, -1).join(" ")}{" "}
                <em className={`italic ${accent.text}`}>{hub.name.split(" ").slice(-1)}</em>
              </h1>
            </Reveal>
            <Reveal delay={120} className="mt-6 max-w-2xl">
              <p className="border-l-2 border-gold pl-5 text-lg leading-relaxed text-ink-soft">{hub.lede}</p>
            </Reveal>
          </div>

          {/* Field-note aside */}
          <Reveal delay={200} className="lg:col-span-4">
            <div className="rotate-1 rounded-xl border border-line bg-paper p-6 shadow-[0_24px_60px_-40px_rgba(44,44,44,0.4)] transition-transform duration-500 hover:rotate-0">
              <p className="flex items-center gap-2 font-script text-2xl text-rose-deep">
                <Feather className="h-5 w-5" aria-hidden /> Harper's field note
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{hub.harperNote}</p>
            </div>
          </Reveal>
        </div>

        {/* Curated spoke index — editorial numbered list, not equal cards */}
        <section aria-labelledby="spokes-heading" className="mt-16">
          <Reveal className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="font-script text-2xl text-gold-deep">the shortlist</p>
              <h2 id="spokes-heading" className="mt-1 font-display text-3xl font-bold sm:text-4xl">
                Start with these <em className="italic text-rose-deep">{spokes.length} guides</em>
              </h2>
            </div>
            <Link to="/blog" className="link-draw hidden shrink-0 text-sm font-semibold uppercase tracking-[0.14em] sm:inline">
              Full journal →
            </Link>
          </Reveal>

          <ol className="divide-y divide-line border-y border-line">
            {spokes.map((post, i) => {
              const cat = getCategory(post.category);
              return (
                <Reveal as="li" key={post.slug} delay={i * 70}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group grid gap-4 py-7 transition-colors duration-300 hover:bg-paper sm:grid-cols-[70px_1fr_auto] sm:items-center sm:gap-8 sm:px-4"
                  >
                    <span className={`font-display text-4xl font-bold italic ${accent.text} transition-transform duration-300 group-hover:-translate-y-1`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="flex flex-wrap items-center gap-2.5">
                        <span className={`rounded-full px-3 py-0.5 text-[11px] font-bold uppercase tracking-[0.12em] ${accent.chip} ${accent.text}`}>
                          {cat?.name}
                        </span>
                        <span className="text-xs text-ink-faint">{formatDate(post.date)} · {readingTime(post)} min</span>
                      </span>
                      <span className="mt-2 block font-display text-xl font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-rose-deep sm:text-2xl">
                        {post.title}
                      </span>
                      <span className="mt-1.5 block max-w-2xl text-[14.5px] leading-relaxed text-ink-soft">{post.excerpt}</span>
                    </span>
                    <span className={`hidden h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-ink-faint transition-all duration-300 group-hover:border-transparent group-hover:bg-ink group-hover:text-cream sm:grid`}>
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </ol>
        </section>

        {/* Topical map — sibling hubs */}
        <section aria-labelledby="related-hubs" className="mt-16">
          <Reveal>
            <p className="font-script text-2xl text-sage-deep">keep exploring the map</p>
            <h2 id="related-hubs" className="mt-1 font-display text-3xl font-bold">Related topics</h2>
          </Reveal>
          <div className="mt-6 flex flex-wrap gap-3">
            {hub.related.map((rSlug) => {
              const rel = HUBS.find((h) => h.slug === rSlug);
              if (!rel) return null;
              return (
                <Link
                  key={rel.slug}
                  to={`/hub/${rel.slug}`}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-line bg-paper px-5 py-3 text-sm font-semibold text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-deep hover:text-rose-deep"
                >
                  <Compass className="h-4 w-4 text-gold-deep transition-transform duration-300 group-hover:rotate-45" aria-hidden />
                  {rel.name}
                </Link>
              );
            })}
          </div>
        </section>

        {/* FAQ + newsletter */}
        <div className="mt-16 grid gap-12 pb-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-script text-2xl text-rose-deep">quick answers</p>
              <h2 className="mt-1 font-display text-3xl font-bold">{hub.keyword}, answered</h2>
            </Reveal>
            <Reveal delay={100} className="mt-6">
              <FaqSection items={hub.faq} />
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={150}>
              <p className="font-script text-2xl text-gold-deep">take it with you</p>
              <h2 className="mt-1 font-display text-3xl font-bold">The Love Letter, weekly</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                One pose and one place in your inbox every Sunday — the same letter I'd send a friend planning a shoot.
              </p>
              <div className="mt-6">
                <NewsletterForm />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
