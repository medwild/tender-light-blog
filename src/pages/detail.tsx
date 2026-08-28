import { CalendarDays, Clock, Compass, Instagram, Mail, MapPin } from "lucide-react";
import { IMAGES, SITE } from "../lib/constants";
import { Link } from "../lib/router";
import { extractToc, formatDate, getPost, getPostsByHub, postPath, readingTime } from "../lib/content";
import { getHub } from "../content/hubs";
import {
  ArticleCard, AuthorBox, FaqSection, InternalLinks, PinterestBoard, PostBody, RelatedPosts, ShareButtons, TableOfContents,
} from "../components/blog";
import { Breadcrumbs, NewsletterForm, Reveal } from "../components/ui";
import { NotFoundPage } from "./misc";

/** Article template — hero, sticky TOC, body, author, related. */
export function ArticlePage({ hub, slug }: { hub: string; slug: string }) {
  const post = getPost(slug);
  if (!post) return <NotFoundPage />;
  const hubDef = getHub(hub);
  const toc = extractToc(post);

  return (
    <article className="pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Breadcrumbs items={[
          { name: "Home", path: "/" },
          { name: hubDef?.name ?? "Guides", path: `/${hub}` },
          { name: post.title, path: `/${hub}/${slug}` },
        ]} />

        <header className="max-w-3xl">
          <Reveal>
            <Link to={`/${hub}`} className="inline-block rounded-full bg-rose/25 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.16em] text-rose-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose/45">
              {hubDef?.name ?? "Guide"}
            </Link>
            <h1 className="mt-5 font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight sm:text-5xl">{post.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">{post.excerpt}</p>
          </Reveal>
          <Reveal delay={120} className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] font-medium text-ink-faint">
            <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4 text-gold-deep" aria-hidden /> {formatDate(post.date)}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-gold-deep" aria-hidden /> {readingTime(post)} min read</span>
            <span>By <strong className="font-semibold text-ink">{post.author.name}</strong></span>
          </Reveal>
          <Reveal delay={180} className="mt-6"><ShareButtons post={post} /></Reveal>
        </header>

        <Reveal delay={140} className="mx-auto mt-12 max-w-5xl">
          <figure className="group relative">
            <span aria-hidden className="absolute -bottom-3 -right-3 hidden h-full w-full rounded-xl border border-rose/60 bg-rose/15 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5 sm:block" />
            <span className="relative block overflow-hidden rounded-xl border border-line shadow-[0_40px_80px_-45px_rgba(44,44,44,0.55)]">
              <img src={post.featuredImage} alt={post.featuredAlt} className="animate-kenburns aspect-[16/9] w-full object-cover" />
            </span>
          </figure>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-6xl gap-12 lg:grid-cols-12">
          <aside className="hidden lg:col-span-4 lg:block">
            <TableOfContents items={toc} />
          </aside>
          <div className="lg:col-span-8">
            <PostBody blocks={post.blocks} />
            <InternalLinks post={post} />
            <AuthorBox post={post} />
            <PinterestBoard post={post} />
          </div>
        </div>

        <div className="mx-auto max-w-6xl">
          <RelatedPosts post={post} />
        </div>
      </div>
    </article>
  );
}

/** Hub / pillar page — lede, spokes in reading order, FAQ. */
export function HubPage({ slug }: { slug: string }) {
  const hub = getHub(slug);
  if (!hub) return <NotFoundPage />;
  const spokes = getPostsByHub(slug);

  return (
    <div className="pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }, { name: hub.name, path: `/${slug}` }]} />

        <header className="max-w-3xl">
          <Reveal>
            <p className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-rose/25 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.16em] text-rose-deep">Topic hub</span>
              <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-faint">{hub.keyword} · {hub.volume}</span>
            </p>
            <h1 className="mt-5 font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight sm:text-5xl">{hub.name}</h1>
          </Reveal>
          <Reveal delay={120}><p className="mt-6 text-lg leading-relaxed text-ink-soft">{hub.lede}</p></Reveal>
          <Reveal delay={180} className="mt-6">
            <blockquote className="border-l-2 border-gold pl-5">
              <p className="font-display text-lg font-medium italic text-ink">“{hub.harperNote}”</p>
              <cite className="mt-1 block font-script text-lg not-italic text-rose-deep">— Harper, from the field notes</cite>
            </blockquote>
          </Reveal>
        </header>

        <section aria-labelledby="hub-guides-heading" className="mt-16">
          <Reveal className="mb-8">
            <p className="font-script text-2xl text-gold-deep">in reading order</p>
            <h2 id="hub-guides-heading" className="mt-1 font-display text-3xl font-bold sm:text-4xl">The {spokes.length} guides</h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {spokes.map((p, i) => <ArticleCard key={p.slug} post={p} index={i} delay={i * 80} />)}
          </div>
        </section>

        <section aria-labelledby="hub-faq-heading" className="mx-auto mt-20 max-w-3xl">
          <Reveal>
            <p className="font-script text-2xl text-rose-deep">quick answers</p>
            <h2 id="hub-faq-heading" className="mt-1 font-display text-3xl font-bold sm:text-4xl">{hub.name} FAQ</h2>
          </Reveal>
          <Reveal delay={120} className="mt-8"><FaqSection items={hub.faq} /></Reveal>
        </section>

        <section aria-labelledby="related-hubs-heading" className="mt-20">
          <Reveal><h2 id="related-hubs-heading" className="font-display text-2xl font-bold">Continue through the map</h2></Reveal>
          <Reveal delay={100} className="mt-6 flex flex-wrap gap-3">
            {hub.related.map((r) => {
              const rh = getHub(r);
              if (!rh) return null;
              return (
                <Link key={r} to={`/${r}`} className="group inline-flex items-center gap-2.5 rounded-full border border-line bg-paper px-5 py-3 text-sm font-semibold text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-deep hover:text-rose-deep">
                  <Compass className="h-4 w-4 text-gold-deep transition-transform duration-300 group-hover:rotate-45" aria-hidden />
                  {rh.name}
                </Link>
              );
            })}
          </Reveal>
        </section>
      </div>
    </div>
  );
}

/** About — Harper's story, principles, the map, newsletter. */
export function AboutPage() {
  const principles = [
    { title: "Direction over posing", text: "I give you something to do, not somewhere to freeze. Tasks produce the two seconds after the pose — and that's where the photograph lives." },
    { title: "Natural light, always", text: "No flashes, no studio strobes. Golden hour, open shade, grey-sky softboxes — the light your wedding day will actually have." },
    { title: "Timeless over trendy", text: "No heavy presets, no gimmicks. Film-inspired tones that will look as right in 2046 as they do today." },
    { title: "You, not a catalogue", text: "Every session starts with how you two actually are — the jokes, the fidgets, the quiet habits. The camera just witnesses." },
  ];

  return (
    <div className="pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About Harper", path: "/about" }]} />
        <div className="grid items-center gap-12 pb-20 lg:grid-cols-12">
          <Reveal className="relative lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-line shadow-[0_40px_80px_-45px_rgba(44,44,44,0.5)]">
              <img src={IMAGES.about} alt="Harper Ellis, founder of Tender Light, holding a vintage film camera" className="aspect-[4/5] w-full object-cover" />
            </div>
            <span className="absolute -bottom-5 -right-3 rotate-6 rounded-full bg-rose px-5 py-3 font-script text-xl text-ink shadow-lg">est. {SITE.founded}</span>
          </Reveal>
          <div className="lg:col-span-7 lg:pl-6">
            <Reveal>
              <p className="font-script text-3xl text-rose-deep">nice to meet you</p>
              <h1 className="mt-2 font-display text-5xl font-bold leading-[1.03] tracking-tight sm:text-6xl">
                I photograph the season <em className="italic text-rose-deep">between yes and I do</em>
              </h1>
            </Reveal>
            <Reveal delay={120} className="mt-7 max-w-xl space-y-5 text-[1.04rem] leading-relaxed text-ink-soft">
              <p>
                I'm Harper Ellis — engagement photographer for eight years, 400+ sessions in the
                rearview, now the writer behind this journal. I'm the friend who'll tell you your
                golden-hour idea is perfect, then quietly steer you away from the spot with the
                porta-potty.
              </p>
              <p>
                Tender Light started in {SITE.founded} with my sister's engagement photos. She kept
                apologizing for being “awkward,” and I kept thinking: <em className="font-display italic text-ink">it's not you — nobody told you what to do.</em> This
                journal is that telling, written down.
              </p>
              <p>
                <strong className="font-semibold text-ink">The mission is simple:</strong> no couple should feel stiff in the
                photos of the happiest season of their life. Everything we publish is tested on
                real sessions first — if it didn't work in the field, it doesn't go on the site.
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-7 flex flex-wrap gap-x-7 gap-y-2 text-[14px] font-medium text-ink-soft">
              <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-gold-deep" aria-hidden /> {SITE.location}</span>
              <span className="flex items-center gap-1.5"><Instagram className="h-4 w-4 text-gold-deep" aria-hidden /> {SITE.instagram}</span>
              <a href={`mailto:${SITE.email}`} className="link-draw flex items-center gap-1.5"><Mail className="h-4 w-4 text-gold-deep" aria-hidden /> {SITE.email}</a>
            </Reveal>
          </div>
        </div>
      </div>

      <section className="border-y border-line bg-paper py-20 md:py-24" aria-labelledby="principles-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-12">
            <p className="font-script text-3xl text-gold-deep">how I work</p>
            <h2 id="principles-heading" className="mt-1 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Four rules, <em className="italic text-rose-deep">no exceptions</em>
            </h2>
          </Reveal>
          <ul className="divide-y divide-line border-y border-line">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 80}>
                <div className="group grid gap-5 py-8 transition-colors duration-300 hover:bg-cream sm:grid-cols-[80px_280px_1fr] sm:items-start sm:gap-8">
                  <span className="font-script text-4xl text-line transition-colors duration-300 group-hover:text-rose-deep">0{i + 1}</span>
                  <span className="font-display text-2xl font-bold transition-transform duration-300 group-hover:translate-x-1.5">{p.title}</span>
                  <p className="max-w-2xl text-[15px] leading-relaxed text-ink-soft">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 md:py-24 lg:grid-cols-2">
        <Reveal>
          <p className="font-script text-3xl text-sage-deep">in the bag</p>
          <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">The gear that earns its place</h2>
          <ul className="mt-7 space-y-3.5">
            {["Two mirrorless bodies, always", "35mm f/1.4 — the storytelling lens", "85mm f/1.8 — the portrait lens", "A worn film camera for the end of every session", "A bluetooth speaker (your playlist, not mine)"].map((g) => (
              <li key={g} className="flex items-center gap-3.5 text-[15px] text-ink-soft">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden /> {g}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <p className="font-script text-3xl text-rose-deep">stay close</p>
          <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">The Love Letter, weekly</h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">The same letter I'd send a friend planning a shoot — one pose, one place, one trick.</p>
          <div className="mt-7"><NewsletterForm /></div>
        </Reveal>
      </section>
    </div>
  );
}

/** Contact — form + collaborations + press. */
export function ContactPage() {
  return (
    <div className="pt-28 md:pt-36">
      <div className="mx-auto max-w-3xl px-5 pb-28 sm:px-8">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
        <Reveal>
          <p className="font-script text-3xl text-rose-deep">say hello</p>
          <h1 className="mt-2 font-display text-5xl font-bold leading-[1.03] tracking-tight sm:text-6xl">
            Let's plan your <em className="italic text-rose-deep">golden hour</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Tell me about your date, your city and the vibe you're dreaming of. I'll reply within
            48 hours with availability and a location shortlist.
          </p>
        </Reveal>
        <Reveal delay={120} className="mt-10">
          <div className="rounded-xl border border-line bg-paper p-8">
            <p className="font-display text-2xl font-bold">The Love Letter is the fastest way in.</p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              For collaborations, press, or a session inquiry, email{" "}
              <a href={`mailto:${SITE.email}`} className="link-draw font-semibold text-rose-deep">{SITE.email}</a>{" "}
              or follow {SITE.instagram}. I read everything.
            </p>
            <div className="mt-6"><NewsletterForm /></div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

/** Legal pages (noindex). */
export function LegalPage({ doc }: { doc: "privacy-policy" | "affiliate-disclosure" | "editorial-policy" }) {
  const titles: Record<string, string> = {
    "privacy-policy": "Privacy Policy",
    "affiliate-disclosure": "Affiliate Disclosure",
    "editorial-policy": "Editorial Policy",
  };
  const bodies: Record<string, string[]> = {
    "privacy-policy": [
      "Tender Light collects only what you choose to give us: an email address when you subscribe to The Love Letter. We don't buy data, and we don't sell yours.",
      "Your email sends you one letter a week and nothing else. You can unsubscribe in one click, and we delete your address when you do.",
      "Questions? Email hello@tenderlight.studio — a human reads every message.",
    ],
    "affiliate-disclosure": [
      "Some product links on Tender Light are affiliate links. If you click one and buy, we may earn a small commission at no extra cost to you.",
      "We only link to products a working photographer would genuinely recommend. Editorial coverage is never for sale.",
      "Affiliate relationships never change what we write. If we haven't tested or vetted a category ourselves, we say so.",
    ],
    "editorial-policy": [
      "Tender Light is written and edited by Harper Ellis, a former engagement photographer with 8 years and 400+ sessions behind the lens.",
      "Pose direction, outfit guidance and location notes come from real sessions, not stock theory. Where a number is cited, it reflects observed experience.",
      "Guides are reviewed and re-dated as conditions change. Email hello@tenderlight.studio to report an error and we'll fix it.",
    ],
  };

  return (
    <div className="pt-28 md:pt-36">
      <div className="mx-auto max-w-3xl px-5 pb-28 sm:px-8">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: titles[doc], path: `/${doc}` }]} />
        <Reveal>
          <p className="font-script text-3xl text-gold-deep">the fine print</p>
          <h1 className="mt-2 font-display text-5xl font-bold leading-[1.03] tracking-tight sm:text-6xl">{titles[doc]}</h1>
          <p className="mt-3 text-sm text-ink-faint">Last updated February 2026</p>
        </Reveal>
        <div className="mt-10 space-y-6">
          {bodies[doc].map((p, i) => (
            <Reveal key={i} delay={i * 60}><p className="text-[15.5px] leading-relaxed text-ink-soft">{p}</p></Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
