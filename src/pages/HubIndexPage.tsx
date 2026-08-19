import { Compass } from "lucide-react";
import { Link } from "../lib/router";
import { HUBS, HUB_ACCENTS } from "../content/hubs";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import Reveal from "../components/ui/Reveal";

/** Topical map — the "start here" page that orients readers across all hubs. */
export default function HubIndexPage() {
  return (
    <div className="pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }]} />

        <Reveal className="max-w-3xl">
          <p className="font-script text-3xl text-rose-deep">start here</p>
          <h1 className="mt-2 font-display text-5xl font-bold leading-[1.03] tracking-tight sm:text-6xl">
            The engagement photo <em className="italic text-rose-deep">map</em>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Every guide on Tender Light lives under one of six topics. Pick the one that matches
            where you are in planning — each hub collects our best-tested guides, in the order
            we'd actually recommend them.
          </p>
        </Reveal>

        {/* Topic ledger — editorial rows, not a uniform card grid */}
        <ol className="mt-14 divide-y divide-line border-y border-line pb-10">
          {HUBS.map((hub, i) => {
            const accent = HUB_ACCENTS[hub.accent];
            return (
              <Reveal as="li" key={hub.slug} delay={i * 60}>
                <Link
                  to={`/${hub.slug}`}
                  className="group grid gap-4 py-8 transition-colors duration-300 hover:bg-paper sm:grid-cols-[80px_1fr_auto] sm:items-center sm:gap-8 sm:px-4"
                >
                  <span className={`font-display text-5xl font-bold italic ${accent.text} transition-transform duration-300 group-hover:-translate-y-1`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="flex flex-wrap items-center gap-3">
                      <h2 className="font-display text-2xl font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-rose-deep sm:text-[1.7rem]">
                        {hub.name}
                      </h2>
                      <span className="rounded-full bg-cream px-3 py-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-ink-faint">
                        {hub.volume} · KD {hub.kd}
                      </span>
                    </span>
                    <span className="mt-2 block max-w-2xl text-[14.5px] leading-relaxed text-ink-soft">
                      {hub.lede.split(". ").slice(0, 2).join(". ")}.
                    </span>
                    <span className={`mt-2.5 inline-flex items-center gap-1.5 text-[13px] font-semibold ${accent.text}`}>
                      <Compass className="h-4 w-4" aria-hidden /> {hub.spokes.length} curated guides
                    </span>
                  </span>
                  <span className="hidden text-3xl text-line transition-all duration-300 group-hover:translate-x-1 group-hover:text-rose-deep sm:block" aria-hidden>
                    →
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ol>

        <Reveal className="pb-24 pt-12">
          <div className="rounded-xl border border-line bg-ink p-8 text-cream sm:p-10">
            <p className="font-script text-3xl text-gold">not sure where to begin?</p>
            <h2 className="mt-2 font-display text-3xl font-bold leading-snug">
              Most couples start with <em className="italic text-rose">engagement photo ideas</em> — it's the biggest hub.
            </h2>
            <Link
              to="/engagement-photo-ideas"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose"
            >
              Open the ideas hub
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
