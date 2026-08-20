import { useState } from "react";
import { Compass } from "lucide-react";
import { Link } from "../lib/router";
import { HUBS, HUB_ACCENTS } from "../content/hubs";
import { PHASE_LABELS, keywordsByPhase } from "../content/keywords";
import { auditHub, auditPost, verdict } from "../content/contentRules";
import { postPath, sortedPosts } from "../lib/content";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import Reveal from "../components/ui/Reveal";

/** KD → visual emphasis (low = easy win, high = long game). */
function kdTone(kd: number) {
  if (kd <= 5) return { label: "easy win", bar: "bg-sage-deep", width: 20 };
  if (kd <= 15) return { label: "winnable", bar: "bg-gold-deep", width: 45 };
  return { label: "long game", bar: "bg-rose-deep", width: 80 };
}

/** A single launch-stat readout (value over label). */
function Stat({ label, value }: { label: string; value: string }) {
  return (
    <span className="flex flex-col">
      <span className="font-display text-xl font-bold leading-none text-ink">{value}</span>
      <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint">{label}</span>
    </span>
  );
}

/** The publishing ledger — every priority keyword, grouped by phase. */
function PublishingLedger() {
  const [phase, setPhase] = useState<1 | 2 | 3>(1);
  const rows = keywordsByPhase(phase);
  const totalVolume = rows.reduce((s, k) => s + k.volume, 0);
  const avgKd = rows.length ? Math.round(rows.reduce((s, k) => s + k.kd, 0) / rows.length) : 0;
  // Phase 1 quick wins are all pre-rendered + in the sitemap as of launch.
  const allLive = phase === 1;
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

      <Reveal delay={130} className="mt-6">
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3 rounded-xl border border-line bg-paper px-6 py-4">
          <Stat label="pages" value={`${rows.length}`} />
          <Stat label="combined volume" value={`${totalVolume.toLocaleString()}/mo`} />
          <Stat label="avg KD" value={`${avgKd}`} />
          {allLive && (
            <span className="ml-auto inline-flex items-center gap-2 rounded-full bg-sage/25 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-sage-deep">
              <span className="h-2 w-2 animate-pulse rounded-full bg-sage-deep" aria-hidden />
              all {rows.length} published · pre-rendered + sitemap
            </span>
          )}
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
                    <span className="flex items-center gap-2.5 font-display text-[1.05rem] font-bold text-ink transition-colors group-hover:text-rose-deep">
                      {allLive && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sage-deep" title="Published — pre-rendered + sitemap" aria-hidden />}
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
/** §18 — Content Compliance desk: every page audited against the rules, live. */
function ComplianceDesk() {
  const [open, setOpen] = useState<string | null>(null);
  const hubRows = HUBS.map((h) => ({ slug: h.slug, name: h.name, checks: auditHub(h), path: `/${h.slug}` }));
  const postRows = sortedPosts().map((p) => ({ slug: p.slug, name: p.title, checks: auditPost(p), path: postPath(p.slug) }));
  const all = [...hubRows, ...postRows];
  const tally = {
    pass: all.filter((r) => verdict(r.checks) === "pass").length,
    goals: all.filter((r) => verdict(r.checks) === "goals").length,
    fail: all.filter((r) => verdict(r.checks) === "fail").length,
  };

  const dot: Record<string, string> = {
    pass: "bg-sage-deep",
    goal: "bg-gold",
    fail: "bg-rose-deep",
  };

  const Row = ({ row, kind }: { row: (typeof all)[number]; kind: string }) => {
    const v = verdict(row.checks);
    const expanded = open === row.slug;
    return (
      <li>
        <button
          type="button"
          onClick={() => setOpen(expanded ? null : row.slug)}
          aria-expanded={expanded}
          className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-cream/10 px-4 py-3.5 text-left transition-colors duration-300 hover:bg-cream/[0.06] sm:gap-6"
        >
          <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${v === "pass" ? dot.pass : v === "goals" ? dot.goal : dot.fail} ${v !== "pass" ? "animate-pulse" : ""}`} aria-hidden />
          <span className="min-w-0">
            <span className="block truncate font-display text-[15px] font-semibold text-cream/90 transition-colors group-hover:text-cream">
              {row.name}
            </span>
            <span className="text-[11px] uppercase tracking-[0.14em] text-cream/40">
              {kind} · {row.checks.filter((c) => c.level === "pass").length}/{row.checks.length} rules pass
            </span>
          </span>
          <span className="flex shrink-0 items-center gap-1.5">
            {row.checks.map((c) => (
              <span key={c.rule} title={`${c.rule}: ${c.value} (target ${c.target})`} className={`h-1.5 w-4 rounded-full ${dot[c.level]}`} aria-hidden />
            ))}
          </span>
        </button>
        <div className={`grid transition-[grid-template-rows] duration-400 ease-out ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <div className="overflow-hidden">
            <ul className="grid gap-x-8 gap-y-1.5 bg-cream/[0.04] px-6 py-4 sm:grid-cols-2">
              {row.checks.map((c) => (
                <li key={c.rule} className="flex items-center justify-between gap-3 text-[12.5px]">
                  <span className="flex items-center gap-2 text-cream/60">
                    <span className={`h-1.5 w-1.5 rounded-full ${dot[c.level]}`} aria-hidden /> {c.rule}
                  </span>
                  <span className={`font-mono text-[11.5px] ${c.level === "pass" ? "text-sage" : c.level === "goal" ? "text-gold" : "text-rose"}`}>
                    {c.value} <span className="text-cream/35">/ {c.target}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </li>
    );
  };

  return (
    <section aria-labelledby="compliance-heading" className="mt-16">
      <Reveal className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-script text-3xl text-gold-deep">the quality desk</p>
          <h2 id="compliance-heading" className="mt-1 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Content Compliance <span className="text-ink-faint">· §18 rules, measured live</span>
          </h2>
        </div>
        <p className="flex items-center gap-4 font-mono text-[12px] text-ink-faint">
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-sage-deep" aria-hidden />{tally.pass} pass</span>
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-gold" aria-hidden />{tally.goals} goals</span>
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-rose-deep" aria-hidden />{tally.fail} fail</span>
        </p>
      </Reveal>
      <Reveal className="overflow-hidden rounded-xl border border-line bg-ink">
        <p className="border-b border-cream/10 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
          Pillar hubs — {hubRows.length} pages
        </p>
        <ul>{hubRows.map((r) => <Row key={r.slug} row={r} kind="hub" />)}</ul>
        <p className="border-y border-cream/10 bg-cream/[0.03] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-rose">
          Satellite articles — {postRows.length} pages
        </p>
        <ul>{postRows.map((r) => <Row key={r.slug} row={r} kind="article" />)}</ul>
      </Reveal>
      <p className="mt-3 text-[12px] text-ink-faint">
        Dots: <span className="font-semibold text-sage-deep">green = rule met</span> ·{" "}
        <span className="font-semibold text-gold-deep">gold = editorial goal in progress</span> ·{" "}
        <span className="font-semibold text-rose-deep">red = structural fail</span>. Click any row for the full checklist.
      </p>
    </section>
  );
}

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

        <ComplianceDesk />

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
