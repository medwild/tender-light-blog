import { Camera, Heart, MapPin } from "lucide-react";
import { IMAGES, SITE } from "../lib/constants";
import { Link } from "../lib/router";
import { sortedPosts, hubFor } from "../lib/content";
import { getHub } from "../content/hubs";
import ArticleCard from "../components/blog/ArticleCard";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import Reveal from "../components/ui/Reveal";

const stats = [
  { value: "400+", label: "engagement sessions" },
  { value: "8", label: "years behind the lens" },
  { value: "2019", label: "Tender Light founded" },
];

/** Author archive page — the canonical byline destination (E-E-A-T). */
export default function AuthorPage() {
  const articles = sortedPosts();
  return (
    <div className="pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pb-24">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Harper Ellis", path: "/author/harper-ellis" }]} />

        <div className="grid items-start gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="overflow-hidden rounded-xl border border-line shadow-[0_40px_80px_-45px_rgba(44,44,44,0.5)]">
              <img
                src={IMAGES.about}
                alt="Harper Ellis, founder of Tender Light, holding a vintage film camera"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal>
              <p className="font-script text-3xl text-rose-deep">the person behind the lens</p>
              <h1 className="mt-2 font-display text-6xl font-bold tracking-tight">Harper Ellis</h1>
              <p className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm font-medium text-ink-faint">
                <span className="flex items-center gap-1.5"><Camera className="h-4 w-4 text-gold-deep" aria-hidden /> Founder & Engagement Photo Editor</span>
                <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-gold-deep" aria-hidden /> {SITE.location}</span>
                <span className="flex items-center gap-1.5"><Heart className="h-4 w-4 text-gold-deep" aria-hidden /> Married to her high school sweetheart</span>
              </p>
            </Reveal>
            <Reveal delay={120} className="mt-7 max-w-2xl space-y-5 text-[1.04rem] leading-relaxed text-ink-soft">
              <p>
                Harper spent eight years as a wedding and engagement photographer before trading her
                camera for a keyboard. She shot more than 400 engagement sessions across the United
                States, then founded {SITE.name} to write the warm, practical guides she wishes every
                couple had before their shoot.
              </p>
              <p>
                Her advice comes from real sessions — the pose directions, outfit formulas and location
                notes on this site are the same ones she gave couples in the field. When a number is
                cited, it reflects what she observed across those sessions, and she says so rather than
                dressing it up as research.
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-8 grid max-w-2xl grid-cols-3 divide-x divide-line rounded-xl border border-line bg-paper">
              {stats.map((s) => (
                <div key={s.label} className="px-5 py-6 text-center">
                  <p className="font-display text-3xl font-bold text-rose-deep">{s.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-ink-faint">{s.label}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>

        <section aria-labelledby="author-articles" className="mt-20">
          <Reveal className="mb-8">
            <p className="font-script text-3xl text-gold-deep">by Harper</p>
            <h2 id="author-articles" className="mt-1 font-display text-4xl font-bold tracking-tight">
              Every guide in the journal
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((p, i) => (
              <ArticleCard key={p.slug} post={p} variant="grid" index={i} delay={(i % 3) * 90} />
            ))}
          </div>
        </section>

        <Reveal className="mt-16">
          <div className="rounded-xl bg-ink p-8 text-cream sm:p-10">
            <p className="font-script text-2xl text-gold">work with me</p>
            <h2 className="mt-2 font-display text-3xl font-bold">Planning a shoot? Let's talk.</h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-cream/70">
              I consult with couples on poses, outfits, locations and photographer shortlists — and I
              partner with wedding brands on honest, tested recommendations.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-block rounded-full bg-gold px-7 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose"
            >
              Get in touch
            </Link>
            <p className="mt-4 text-xs text-cream/40">
              Curious about a topic? Browse the{" "}
              {(["engagement-photo-ideas", "engagement-photo-poses"] as const).map((s) => (
                <Link key={s} to={`/${s}`} className="link-draw text-cream/70">
                  {getHub(s)?.name.toLowerCase()}
                </Link>
              ))}{" "}
              hubs or see how a silo URL like <code className="text-cream/70">/{hubFor("casual-engagement-photo-ideas")}/casual-engagement-photo-ideas</code> resolves.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
