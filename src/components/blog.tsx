import { Check, ListChecks, Pin, Scale, ShoppingBag, Sparkles } from "lucide-react";
import type { Block, Post } from "../content/types";
import { formatDate, getCategory, getRelatedPosts, postPath, readingTime } from "../lib/content";
import { Link } from "../lib/router";
import { SITE } from "../lib/constants";
import { Reveal } from "./ui";
import { FaqSection } from "./blog-client";

export { FaqSection, TableOfContents, ShareButtons } from "./blog-client";

/* ————— inline prose (bold / italic / links) ————— */
function inline(text: string, keyBase: string) {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={`${keyBase}-${i}`} className="font-semibold text-ink">{part.slice(2, -2)}</strong>;
    if (part.startsWith("*") && part.endsWith("*")) return <em key={`${keyBase}-${i}`} className="font-display italic text-ink">{part.slice(1, -1)}</em>;
    return <span key={`${keyBase}-${i}`}>{part}</span>;
  });
}

/* ————— PostBody: renders the typed block tree ————— */
export function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-tender">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return <Reveal as="p" key={i}>{inline(block.text, `p${i}`)}</Reveal>;
          case "h2":
            return (
              <Reveal as="h2" key={i} className="!mt-14 font-display text-[1.9rem] font-bold leading-tight text-ink">
                <span id={block.id} className="scroll-mt-28">{block.text}</span>
              </Reveal>
            );
          case "h3":
            return (
              <Reveal as="h3" key={i} className="!mt-10 font-display text-[1.35rem] font-bold text-ink">
                <span id={block.id} className="scroll-mt-28">{block.text}</span>
              </Reveal>
            );
          case "list":
            return (
              <Reveal as="ul" key={i} className="space-y-3.5">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3.5">
                    <span className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                    <span>{inline(item, `l${i}-${j}`)}</span>
                  </li>
                ))}
              </Reveal>
            );
          case "callout": {
            const tone = { rose: "border-rose/60 bg-rose/10 text-rose-deep", gold: "border-gold/60 bg-gold/10 text-gold-deep", sage: "border-sage/60 bg-sage/10 text-sage-deep" }[block.tone];
            return (
              <Reveal key={i}>
                <aside className={`rounded-xl border px-6 py-5 ${tone}`}>
                  <p className="font-display text-lg font-bold">{block.title}</p>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{block.text}</p>
                </aside>
              </Reveal>
            );
          }
          case "quote":
            return (
              <Reveal as="blockquote" key={i} className="border-l-2 border-gold pl-6">
                <p className="font-display text-[1.45rem] font-medium italic leading-snug text-ink">“{block.text}”</p>
                {block.cite && <cite className="mt-3 block font-script text-xl not-italic text-rose-deep">— {block.cite}</cite>}
              </Reveal>
            );
          case "gallery":
            return (
              <Reveal key={i}>
                <div className={`grid gap-4 ${block.images.length > 1 ? "sm:grid-cols-2" : ""}`}>
                  {block.images.map((img, j) => (
                    <figure key={j} className="overflow-hidden rounded-xl border border-line">
                      <img src={img.src} alt={img.alt} loading="lazy" decoding="async" className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.04]" />
                    </figure>
                  ))}
                </div>
              </Reveal>
            );
          case "faq":
            return <Reveal key={i}><FaqSection items={block.items} /></Reveal>;
          case "keyTakeaways":
            return (
              <Reveal key={i}>
                <div className="overflow-hidden rounded-xl border border-sage/50 bg-sage/10">
                  <div className="flex items-center gap-2.5 border-b border-sage/40 bg-sage/15 px-6 py-4">
                    <ListChecks className="h-5 w-5 text-sage-deep" aria-hidden />
                    <p className="font-display text-lg font-bold text-sage-deep">Key Takeaways</p>
                  </div>
                  <ol className="space-y-3 px-6 py-5">
                    {block.items.map((item, idx) => (
                      <li key={idx} className="flex gap-3.5">
                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sage-deep text-[11px] font-bold text-cream">{idx + 1}</span>
                        <p className="text-[15px] leading-relaxed text-ink">{item}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            );
          case "table":
            return (
              <Reveal key={i}>
                <div className="overflow-hidden rounded-xl border border-line bg-paper">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[560px] border-collapse text-left text-[14px]">
                      <caption className="border-b border-line bg-cream px-6 py-3.5 text-left font-display text-base font-bold text-ink">
                        <Scale className="mr-2 inline h-[18px] w-[18px] text-gold-deep" aria-hidden />{block.caption}
                      </caption>
                      <thead>
                        <tr className="border-b-2 border-gold-deep/60 bg-gold/15">
                          {block.headers.map((h) => (
                            <th key={h} scope="col" className="px-6 py-3.5 font-display text-[13px] font-bold uppercase tracking-[0.08em] text-gold-deep">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {block.rows.map((row, ri) => (
                          <tr key={ri} className={`border-b border-line/70 ${ri % 2 === 1 ? "bg-cream/60" : ""}`}>
                            {row.map((cell, ci) =>
                              ci === 0
                                ? <th key={ci} scope="row" className="px-6 py-3.5 font-semibold text-ink">{cell}</th>
                                : <td key={ci} className="px-6 py-3.5 leading-relaxed text-ink-soft">{cell}</td>)}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Reveal>
            );
          case "ad":
            return (
              <Reveal key={i}>
                <aside aria-label="Advertisement placeholder" className="grid place-items-center rounded-xl border border-dashed border-line bg-paper/70 px-6 py-10">
                  <div className="text-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink-faint">Advertisement</p>
                    <p className="mt-2 text-xs text-ink-faint">AdSense · {block.slot}</p>
                  </div>
                </aside>
              </Reveal>
            );
          case "shop":
            return (
              <Reveal key={i}>
                <div className="rounded-xl border border-line bg-paper p-6">
                  <p className="flex items-center gap-2 font-display text-lg font-bold text-ink">
                    <ShoppingBag className="h-5 w-5 text-gold-deep" aria-hidden /> Shop the look
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2.5">
                    {block.items.map((item) => (
                      <li key={item.label}>
                        <a href={item.href} target="_blank" rel="sponsored noopener noreferrer" className="group inline-flex items-center gap-2 rounded-full border border-line bg-cream px-4 py-2 text-[13px] font-medium text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-deep hover:text-rose-deep">
                          {item.label}
                          <span className="text-[10px] font-bold uppercase tracking-widest text-ink-faint group-hover:text-rose-deep">{item.store} ↗</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-[11px] text-ink-faint">Affiliate links — they never change what we recommend.</p>
                </div>
              </Reveal>
            );
          case "leadMagnet":
            return (
              <Reveal key={i}>
                <div className="relative overflow-hidden rounded-xl border border-gold/50 bg-gradient-to-br from-paper via-cream to-gold/10 p-7 sm:p-8">
                  <Sparkles className="absolute right-6 top-6 h-6 w-6 text-gold" aria-hidden />
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-deep">Free download</p>
                  <p className="mt-2 max-w-md font-display text-2xl font-bold leading-snug text-ink">{block.title}</p>
                  <p className="mt-2 text-[15px] text-ink-soft">{block.subtitle}</p>
                  <ul className="mt-4 space-y-2">
                    {block.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[14px] text-ink-soft">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage-deep" aria-hidden /> {b}
                      </li>
                    ))}
                  </ul>
                  <button type="button" className="mt-6 rounded-full bg-ink px-7 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-deep">
                    {block.cta}
                  </button>
                </div>
              </Reveal>
            );
          case "keepReading":
            return (
              <Reveal key={i}>
                <nav aria-label="Keep reading" className="rounded-xl border border-line bg-paper">
                  <p className="border-b border-line px-6 py-4 font-display text-lg font-bold text-ink">Keep reading</p>
                  <ul className="divide-y divide-line/70">
                    {block.items.map((item) => (
                      <li key={item.to}>
                        <Link to={item.to} className="group flex items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-cream/70">
                          <span>
                            <span className="block font-display text-[1.05rem] font-semibold text-ink group-hover:text-rose-deep">{item.label}</span>
                            <span className="mt-0.5 block text-[12.5px] text-ink-faint">{item.note}</span>
                          </span>
                          <span className="shrink-0 text-xl text-gold-deep transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </Reveal>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

/* ————— Article card ————— */
export function ArticleCard({ post, index, delay = 0 }: { post: Post; index: number; delay?: number }) {
  const category = getCategory(post.category);
  return (
    <Reveal delay={delay} className="h-full">
      <Link to={postPath(post.slug)} className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-paper transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(44,44,44,0.35)]">
        <span className="relative block overflow-hidden">
          <img src={post.featuredImage} alt={post.featuredAlt} loading="lazy" decoding="async" className="aspect-[3/2] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]" />
          <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 font-script text-base text-rose-deep">№{String(index + 1).padStart(2, "0")}</span>
        </span>
        <span className="flex flex-1 flex-col p-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint">{category?.name} · {formatDate(post.date)} · {readingTime(post)} min</span>
          <span className="mt-2 block font-display text-xl font-bold leading-snug text-ink transition-colors group-hover:text-rose-deep">{post.title}</span>
          <span className="mt-2 line-clamp-3 flex-1 text-[14px] leading-relaxed text-ink-soft">{post.excerpt}</span>
          <span className="mt-4 border-t border-line pt-4 text-[12.5px] font-semibold text-gold-deep transition-transform duration-300 group-hover:translate-x-1">Read the guide →</span>
        </span>
      </Link>
    </Reveal>
  );
}

/* ————— Author box ————— */
export function AuthorBox({ post }: { post: Post }) {
  const a = post.author;
  return (
    <section aria-label="About the author" className="mt-14 flex flex-col gap-6 rounded-xl border border-line bg-paper p-7 sm:flex-row sm:items-start sm:p-8">
      {a.avatar && <img src={a.avatar} alt={a.name} loading="lazy" decoding="async" className="h-24 w-24 shrink-0 rounded-full border-2 border-gold object-cover" />}
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-deep">Written by</p>
        <p className="mt-1 font-display text-2xl font-bold text-ink">{a.name}</p>
        <p className="mt-0.5 text-[13px] font-semibold text-rose-deep">{a.role}</p>
        <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">{a.bio}</p>
        <p className="mt-4 text-[13px] text-ink-faint">{a.instagram}</p>
      </div>
    </section>
  );
}

/* ————— Pinterest board (the article's pins) ————— */
export function PinterestBoard({ post }: { post: Post }) {
  const pins = post.pinImages ?? [];
  if (!pins.length) return null;
  const url = `${SITE.url}${postPath(post.slug)}/`;
  return (
    <section aria-label="Pinterest pins" className="mt-16 rounded-xl border border-line bg-ink p-7 text-cream sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="flex items-center gap-2.5 font-display text-xl font-bold"><Pin className="h-5 w-5 text-rose" aria-hidden /> Save it for later</p>
        <p className="text-[12px] text-cream/50">{pins.length} pins · 1000×1500</p>
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        {pins.map((pin, i) => (
          <a key={pin.pinTitle} href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(pin.image)}&description=${encodeURIComponent(pin.pinDescription)}`} target="_blank" rel="noreferrer"
            className={`group block overflow-hidden rounded-lg border border-cream/10 transition-all duration-500 hover:-translate-y-1.5 hover:border-rose/60 ${i === 1 ? "sm:translate-y-3" : ""}`}>
            <span className="relative block overflow-hidden">
              <img src={pin.image} alt={pin.pinTitle} loading="lazy" decoding="async" className="aspect-[2/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" aria-hidden />
              <span className="absolute inset-x-0 bottom-0 p-4">
                <span className="block font-display text-[15px] font-bold leading-snug">{pin.overlayText ?? pin.pinTitle}</span>
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ————— Internal links block ————— */
export function InternalLinks({ post }: { post: Post }) {
  const links = post.internalLinks ?? [];
  if (!links.length) return null;
  return (
    <nav aria-label="Keep exploring" className="rounded-xl border border-line bg-paper p-6">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-deep">Keep exploring</p>
      <ul className="mt-4 flex flex-wrap gap-2.5">
        {links.map((l) => (
          <li key={l.url}>
            <Link to={l.url} className="inline-block rounded-full border border-line bg-cream px-4 py-2 text-[13px] font-medium text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-deep hover:text-rose-deep">
              {l.anchor} →
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ————— Related posts ————— */
export function RelatedPosts({ post }: { post: Post }) {
  const related = getRelatedPosts(post, 3);
  if (!related.length) return null;
  return (
    <section aria-labelledby="related-heading" className="mt-20 border-t border-line pt-14">
      <Reveal>
        <p className="font-script text-2xl text-rose-deep">keep reading</p>
        <h2 id="related-heading" className="mt-1 font-display text-3xl font-bold">More from the journal</h2>
      </Reveal>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((p, i) => <ArticleCard key={p.slug} post={p} index={i} delay={i * 90} />)}
      </div>
    </section>
  );
}
