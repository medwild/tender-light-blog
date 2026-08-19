import { useState } from "react";
import { Compass } from "lucide-react";
import { Link } from "../lib/router";
import { HUBS, HUB_ACCENTS } from "../content/hubs";
import { PHASE_LABELS, keywordsByPhase } from "../content/keywords";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import Reveal from "../components/ui/Reveal";

/** KD → visual emphasis (low = easy win, high = long game). */
function kdTone(kd: number) {
  if (kd <= 5) return { label: "easy win", bar: "bg-sage-deep", width: 20 };
  if (kd <= 15) return { label: "winnable", bar: "bg-gold-deep", width: 45 };
  return { label: "long game", bar: "bg-rose-deep", width: 80 };
}

/** The publishing ledger — every priority keyword, grouped by phase. */
function PublishingLedger() {
  const [phase, setPhase] = useState<1 | 2 | 3>(1);
  const rows = keywordsByPhase(phase);
  return (
    <section className="mt-16" aria-labelledby="ledger-heading">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-script text-3xl text-gold-deep">the publishing ledger</p>
            <h2 id="ledger-heading" className="mt-1 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              What we're aiming at
            </h2>
          </div>
          <p className="max-w-xs text-[13.5px] leading-relaxed text-ink-soft">
            Every page on this site targets one keyword. Here's the full map — volume, difficulty
            and intent, phase by phase.
          </p>
        </div>
      </Reveal>

      <Reveal delay={100} className="mt-8">
        <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter keywords by phase">
          {([1, 2, 3] as const).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPhase(p)}
              aria-pressed={phase === p}
              className={`rounded-full border px-5 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
                phase === p
                  ? "border-ink bg-ink text-cream"
                  : "border-line bg-paper text-ink-soft hover:border-ink hover:text-ink"
              }`}
            >
              {PHASE_LABELS[p]}
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal delay={160} className="mt-7">
        <div className="overflow-hidden rounded-xl border border-line bg-paper">
          <ul className="divide-y divide-line">
            {rows.map((k, i) => {
              const tone = kdTone(k.kd);
              return (
                <Reveal as="li" key={k.path} delay={i * 45}>
                  <Link
                    to={k.path}
                    className="group grid gap-3 px-6 py-4.5 transition-colors hover:bg-cream sm:grid-cols-[1.6fr_110px_1fr_110px] sm:items-center sm:gap-6"
                  >
                    <span className="font-display text-[1.05rem] font-bold text-ink transition-colors group-hover:text-rose-deep">
                      {k.keyword}
                    </span>
                    <span className="text-[13px] font-semibold text-ink-soft">
                      {k.volume > 0 ? `${k.volume.toLocaleString()}/mo` : "TBD"}
                    </span>
                    <span className="flex items-center gap-3">
                      <span className="h-1.5 w-28 overflow-hidden rounded-full bg-cream" aria-hidden>
                        <span className={`block h-full rounded-full ${tone.bar}`} style={{ width: `${tone.width}%` }} />
                      </span>
                      <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-faint">
                        KD {k.kd} · {tone.label}
                      </span>
                    </span>
                    <span className={`w-fit rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] ${
                      k.intent === "Commercial" ? "bg-rose/25 text-rose-deep" : "bg-sage/25 text-sage-deep"
                    }`}>
                      {k.intent}
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

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

        <PublishingLedger />

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
