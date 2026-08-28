import { ArrowRight, Frame, Gift, Image as ImageIcon, Layers, PiggyBank, Printer, Sparkles, Wallet } from "lucide-react";
import { Link } from "../lib/router";
import { getHub } from "../content/hubs";
import { formatDate, postsByHub, postPath, readingTime } from "../lib/content";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import FaqSection from "../components/blog/FaqSection";
import NewsletterForm from "../components/ui/NewsletterForm";
import Reveal from "../components/ui/Reveal";
import NotFoundPage from "./NotFoundPage";

/**
 * Hub 6 — Prints, Display & Gifts pillar.
 * The monetization cluster: every format below maps to an affiliate-friendly
 * product category (frames, print services, albums, lockets). Opens on the
 * subject itself — a wall of prints, not a hero trio.
 */
export default function PrintsPillarPage() {
  const hub = getHub("engagement-photo-prints");
  if (!hub) return <NotFoundPage />;

  const posts = postsByHub("engagement-photo-prints");

  const formats = [
    { icon: <Frame className="h-5 w-5" aria-hidden />, name: "Hero print", note: "20x30 / 24x36, above the sofa" },
    { icon: <Layers className="h-5 w-5" aria-hidden />, name: "Gallery ledge", note: "Three layered 8x10s" },
    { icon: <Wallet className="h-5 w-5" aria-hidden />, name: "Wallet & mini", note: "2.5x3.5, favors & inserts" },
    { icon: <ImageIcon className="h-5 w-5" aria-hidden />, name: "Photo strip", note: "Four frames, one strip" },
    { icon: <Sparkles className="h-5 w-5" aria-hidden />, name: "Polaroid style", note: "White border + caption" },
    { icon: <Printer className="h-5 w-5" aria-hidden />, name: "Flip book", note: "20–40 frames, animated" },
  ];

  const giftIdeas = [
    { to: "/engagement-photo-prints/locket-photo-print-guide", title: "A locket for each parent", note: "The ring-and-hands crop, heirloom-sized" },
    { to: "/engagement-photo-prints/mini-photo-print-ideas", title: "Mini prints as party favors", note: "Two dozen, dated on the back" },
    { to: "/engagement-photo-prints/flip-book-engagement-photo-ideas", title: "A flip book for yourselves", note: "The twirl, looped forever" },
    { to: "/engagement-photo-prints/photo-booth-strip-ideas", title: "Booth strips for the fridge", note: "Four frames, captioned" },
  ];

  return (
    <div className="pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: "Prints, Gifts & Display", path: "/engagement-photo-prints" },
          ]}
        />

        {/* ——— Opener: a wall of print formats, answer-first ——— */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="flex flex-wrap items-center gap-3 text-[12px] font-bold uppercase tracking-[0.22em] text-ink-faint">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/25 px-3.5 py-1.5 normal-case tracking-wide text-gold-deep">
                  <Printer className="h-3.5 w-3.5" aria-hidden /> Pillar guide
                </span>
                <span>Keyword · engagement photo print ideas</span>
              </p>
              <h1 className="mt-5 font-display text-[2.6rem] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4rem]">
                Engagement Photo <em className="italic text-gold-deep">Print</em> Ideas:
                <span className="block">Displays, Gifts &amp; Keepsakes</span>
              </h1>
            </Reveal>
            <Reveal delay={120} className="mt-6 max-w-2xl">
              <p className="text-[1.05rem] leading-relaxed text-ink-soft">
                The best thing to do with your engagement photos is print the ones you actually
                live with — <strong className="font-semibold text-ink">one oversized hero print for the wall</strong>, a
                mid-size pair for a gallery ledge, and small candids for shelves and desks. Matte
                or lustre finishes flatter golden-hour light better than glossy, and odd-numbered
                groupings keep a display curated instead of cluttered. Below: every format worth
                ordering, what to give away, and what to keep for yourselves.
              </p>
            </Reveal>
          </div>

          {/* The print-counter swatch wall */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-3">
              {formats.map((f, i) => (
                <Reveal
                  key={f.name}
                  delay={i * 70}
                  className={i % 2 === 1 ? "translate-y-4" : ""}
                >
                  <div className="group rounded-xl border border-line bg-paper p-4 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-deep/50 hover:shadow-[0_18px_40px_-22px_rgba(44,44,44,0.4)]">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-gold/20 text-gold-deep transition-transform duration-500 group-hover:rotate-6">
                      {f.icon}
                    </span>
                    <p className="mt-3 font-display text-[15px] font-bold leading-tight text-ink">{f.name}</p>
                    <p className="mt-1 text-[12px] leading-snug text-ink-faint">{f.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ——— Harper's note strip ——— */}
      <Reveal className="mt-16">
        <div className="border-y border-line bg-paper">
          <div className="mx-auto flex max-w-7xl items-start gap-5 px-5 py-7 sm:px-8">
            <span className="mt-1 font-script text-3xl text-gold-deep">Harper's note</span>
            <p className="max-w-3xl text-[15px] leading-relaxed text-ink-soft">
              {hub.harperNote}
            </p>
          </div>
        </div>
      </Reveal>

      {/* ——— Gift & keepsake ledger ——— */}
      <section className="mx-auto max-w-7xl px-5 pt-20 sm:px-8" aria-labelledby="gifts-heading">
        <Reveal>
          <p className="font-script text-3xl text-rose-deep">for the people you love</p>
          <h2 id="gifts-heading" className="mt-1 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Gift &amp; Keepsake <em className="italic text-rose-deep">Ideas</em>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {giftIdeas.map((g, i) => (
            <Reveal key={g.to} delay={i * 90}>
              <Link
                to={g.to}
                className="group flex h-full items-center justify-between gap-5 rounded-xl border border-line bg-paper p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-rose-deep/50 hover:shadow-[0_24px_50px_-26px_rgba(44,44,44,0.45)]"
              >
                <span>
                  <span className="font-display text-xl font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-rose-deep">
                    {g.title}
                  </span>
                  <span className="mt-1.5 block text-[13.5px] text-ink-soft">{g.note}</span>
                </span>
                <ArrowRight className="h-5 w-5 shrink-0 text-gold-deep transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-rose-deep" aria-hidden />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ——— Full spoke index ——— */}
      <section className="mx-auto max-w-7xl px-5 pt-20 sm:px-8" aria-labelledby="prints-index-heading">
        <Reveal>
          <p className="font-script text-3xl text-gold-deep">the whole shelf</p>
          <h2 id="prints-index-heading" className="mt-1 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Explore Print &amp; Display <em className="italic text-gold-deep">Guides</em>
          </h2>
        </Reveal>
        <ul className="mt-10 divide-y divide-line border-y border-line">
          {posts.map((post, i) => (
            <Reveal as="li" key={post.slug} delay={i * 60}>
              <Link
                to={postPath(post.slug)}
                className="group grid gap-4 py-6 transition-colors duration-300 hover:bg-paper sm:grid-cols-[70px_1fr_auto] sm:items-center sm:gap-8 sm:px-4"
              >
                <span className="font-script text-3xl text-ink-faint transition-colors duration-300 group-hover:text-gold-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="font-display text-[1.35rem] font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-gold-deep">
                    {post.title}
                  </span>
                  <span className="mt-1.5 block max-w-2xl text-[14px] leading-relaxed text-ink-soft">
                    {post.excerpt}
                  </span>
                </span>
                <span className="hidden text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-faint sm:block">
                  {formatDate(post.date)} · {readingTime(post)} min
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ——— FAQ ——— */}
      <section className="mx-auto max-w-4xl px-5 pt-20 sm:px-8" aria-labelledby="prints-faq-heading">
        <Reveal>
          <p className="font-script text-3xl text-rose-deep">before you order</p>
          <h2 id="prints-faq-heading" className="mt-1 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Print <em className="italic text-rose-deep">Questions</em>
          </h2>
        </Reveal>
        <Reveal delay={120} className="mt-8">
          <FaqSection items={hub.faq} />
        </Reveal>
      </section>

      {/* ——— Newsletter (monetization capture) ——— */}
      <section className="mx-auto max-w-4xl px-5 pb-24 pt-20 sm:px-8" aria-labelledby="prints-newsletter-heading">
        <Reveal>
          <div className="rounded-xl border border-line bg-ink p-8 text-cream sm:p-10">
            <p className="font-script text-3xl text-gold">the love letter</p>
            <h2 id="prints-newsletter-heading" className="mt-1 font-display text-3xl font-bold">
              One pose &amp; one place, every Sunday
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-cream/70">
              Print deals, display inspiration and the occasional framing mistake I made so you
              don't have to. Join 4,200 couples already reading.
            </p>
            <div className="mt-7">
              <NewsletterForm dark />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ——— Sibling hubs ——— */}
      <Reveal className="pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <Gift className="h-5 w-5 text-gold-deep" aria-hidden />
            <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-ink-faint">Keep exploring</span>
            {hub.related.map((slug) => {
              const rel = getHub(slug);
              if (!rel) return null;
              return (
                <Link
                  key={slug}
                  to={`/${slug}`}
                  className="rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-semibold text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-deep hover:text-gold-deep"
                >
                  {rel.name}
                </Link>
              );
            })}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
