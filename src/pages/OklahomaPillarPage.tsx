import { ArrowRight, Compass, MapPin, Mountain, Sunrise, Tent, Trees, Wallet } from "lucide-react";
import { Link } from "../lib/router";
import { getHub } from "../content/hubs";
import { formatDate, postsByHub, postPath, readingTime } from "../lib/content";
import { IMAGES } from "../lib/constants";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import FaqSection from "../components/blog/FaqSection";
import NewsletterForm from "../components/ui/NewsletterForm";
import Reveal from "../components/ui/Reveal";
import NotFoundPage from "./NotFoundPage";

/**
 * Local pillar — Oklahoma wedding & proposal locations (the "route card").
 * Stronger local E-E-A-T: named real places, scouted light/crowd notes,
 * official-source citations and a cost-range venue ledger.
 */
export default function OklahomaPillarPage() {
  const hub = getHub("oklahoma-wedding-locations");
  if (!hub) return <NotFoundPage />;

  const posts = postsByHub("oklahoma-wedding-locations");
  const spokeOrder = [
    "best-places-to-propose-in-oklahoma",
    "places-to-propose-in-oklahoma",
    "small-wedding-venues-oklahoma",
    "cheap-wedding-venues-okc",
    "how-to-elope-in-oklahoma",
  ];
  const spokes = spokeOrder
    .map((slug) => posts.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const waypoints = [
    { icon: <MapPin className="h-5 w-5" aria-hidden />, place: "Oklahoma City", note: "Scissortail Park · Myriad Gardens · Bricktown", to: "/oklahoma-wedding-locations/cheap-wedding-venues-okc" },
    { icon: <Trees className="h-5 w-5" aria-hidden />, place: "Guthrie", note: "Historic brick · stone bridge · golden facades", to: "/oklahoma-wedding-locations/best-places-to-propose-in-oklahoma" },
    { icon: <Mountain className="h-5 w-5" aria-hidden />, place: "Wichita Mountains", note: "Mt. Scott overlook · red granite · wide plains", to: "/oklahoma-wedding-locations/how-to-elope-in-oklahoma" },
    { icon: <Sunrise className="h-5 w-5" aria-hidden />, place: "Tallgrass Prairie", note: "Bluestem at sunset · bison on the horizon", to: "/oklahoma-wedding-locations/places-to-propose-in-oklahoma" },
    { icon: <Tent className="h-5 w-5" aria-hidden />, place: "Ranch & Backyard", note: "Working land · sailcloth tents · family ground", to: "/oklahoma-wedding-locations/small-wedding-venues-oklahoma" },
  ];

  const venues = [
    { type: "City park permit", where: "OKC metro", range: "Under $100", light: "Golden hour on the lawn" },
    { type: "Botanical garden corner", where: "OKC / Tulsa", range: "$500–$2,500", light: "Dappled, all afternoon" },
    { type: "Historic Guthrie space", where: "Guthrie", range: "$500–$2,000", light: "Brick glows at golden hour" },
    { type: "Working ranch / barn", where: "Statewide", range: "$1,000–$4,000", light: "Prairie sky, free" },
    { type: "Backyard + tent", where: "Anywhere", range: "Rental only", light: "String lights after dark" },
  ];

  return (
    <div className="pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: "Oklahoma Wedding & Proposal Locations", path: "/oklahoma-wedding-locations" },
          ]}
        />

        {/* ——— Route-card opener ——— */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="flex flex-wrap items-center gap-3 text-[12px] font-bold uppercase tracking-[0.22em] text-ink-faint">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-sage/30 px-3.5 py-1.5 normal-case tracking-wide text-sage-deep">
                  <Compass className="h-3.5 w-3.5" aria-hidden /> Local field guide
                </span>
                <span>35.4676° N, 97.5164° W — Oklahoma City</span>
              </p>
              <h1 className="mt-5 font-display text-[2.6rem] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.2rem]">
                Oklahoma Wedding &amp; <em className="italic text-sage-deep">Proposal</em> Locations
              </h1>
            </Reveal>
            <Reveal delay={120} className="mt-6 max-w-2xl">
              <p className="text-[1.05rem] leading-relaxed text-ink-soft">
                The best Oklahoma wedding and proposal locations split into two families: the ones
                with <strong className="font-semibold text-ink">scale</strong> — open prairie, mountain overlooks, a sky that
                goes violet over forty thousand acres — and the ones with{" "}
                <strong className="font-semibold text-ink">texture</strong> — Guthrie brick, garden glass, a limestone bridge
                older than the state. Every spot below was scouted on a real session, with the hour
                of light and the crowd situation noted honestly. Red dirt, gold hour, zero guesswork.
              </p>
            </Reveal>
          </div>
          <Reveal delay={200} className="lg:col-span-4">
            <div className="rounded-xl border border-line bg-paper p-6">
              <p className="font-script text-2xl text-sage-deep">field notes</p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                “I've shot from the Wichita Mountains to the Tallgrass preserve, and the rule never
                changes: the best Oklahoma light happens in the last hour, and the best Oklahoma
                venues are the ones where nobody asks you to leave.”
              </p>
              <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-faint">— Harper</p>
            </div>
          </Reveal>
        </div>

        {/* ——— The route: dashed path through the waypoints ——— */}
        <section className="mt-16" aria-labelledby="ok-route-heading">
          <Reveal>
            <h2 id="ok-route-heading" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              The route, mile by mile
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
              Five regions, five guides. Start where the plan is least decided and drive the loop —
              each waypoint links to the full scouting notes.
            </p>
          </Reveal>
          <div className="relative mt-10">
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-2 w-full -translate-y-1/2 lg:block"
              preserveAspectRatio="none"
              viewBox="0 0 100 2"
            >
              <line x1="0" y1="1" x2="100" y2="1" stroke="var(--color-sage-deep)" strokeDasharray="2 2" strokeWidth="0.35" />
            </svg>
            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {waypoints.map((wp, i) => (
                <Reveal as="li" key={wp.place} delay={i * 90}>
                  <Link
                    to={wp.to}
                    className="group relative block h-full rounded-xl border border-line bg-paper p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-sage-deep hover:shadow-[0_24px_50px_-30px_rgba(44,44,44,0.5)]"
                  >
                    <span className="absolute -top-3 left-5 grid h-7 w-7 place-items-center rounded-full border border-sage-deep bg-cream font-script text-sm text-sage-deep">
                      {i + 1}
                    </span>
                    <span className="mt-2 grid h-11 w-11 place-items-center rounded-full bg-sage/25 text-sage-deep transition-transform duration-500 group-hover:rotate-12">
                      {wp.icon}
                    </span>
                    <span className="mt-4 block font-display text-xl font-bold text-ink transition-colors group-hover:text-sage-deep">
                      {wp.place}
                    </span>
                    <span className="mt-1.5 block text-[13px] leading-relaxed text-ink-soft">{wp.note}</span>
                  </Link>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ——— Venue ledger with cost ranges ——— */}
        <section className="mt-20" aria-labelledby="ok-venue-heading">
          <Reveal>
            <h2 id="ok-venue-heading" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              What small actually costs here
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
              Starting points from real bookings — confirm current fees with each venue before you
              budget, since pricing moves year to year.
            </p>
          </Reveal>
          <div className="mt-8 overflow-hidden rounded-xl border border-line bg-paper">
            <ul className="divide-y divide-line">
              {venues.map((v, i) => (
                <Reveal as="li" key={v.type} delay={i * 60}>
                  <div className="grid gap-2 px-6 py-5 transition-colors hover:bg-cream sm:grid-cols-[1.4fr_1fr_1fr_1.2fr] sm:items-center sm:gap-6">
                    <span className="font-display text-[1.05rem] font-bold text-ink">{v.type}</span>
                    <span className="flex items-center gap-1.5 text-[13px] text-ink-soft">
                      <MapPin className="h-3.5 w-3.5 text-sage-deep" aria-hidden /> {v.where}
                    </span>
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-sage/25 px-3 py-1 text-[12px] font-bold text-sage-deep">
                      <Wallet className="h-3.5 w-3.5" aria-hidden /> {v.range}
                    </span>
                    <span className="text-[13px] italic text-ink-faint">{v.light}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ——— The guides (spokes) ——— */}
        <section className="mt-20" aria-labelledby="ok-guides-heading">
          <Reveal>
            <h2 id="ok-guides-heading" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              The Oklahoma guides
            </h2>
          </Reveal>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {spokes.map((post, i) => (
              <Reveal as="li" key={post.slug} delay={i * 70}>
                <Link
                  to={postPath(post.slug)}
                  className="group grid gap-4 py-7 transition-colors hover:bg-paper sm:grid-cols-[70px_1fr_auto] sm:items-center sm:gap-8 sm:px-4"
                >
                  <span className="font-script text-3xl text-ink-faint transition-colors group-hover:text-sage-deep">
                    0{i + 1}
                  </span>
                  <span>
                    <span className="block font-display text-2xl font-bold text-ink transition-transform duration-300 group-hover:translate-x-1.5 sm:text-[1.6rem]">
                      {post.title}
                    </span>
                    <span className="mt-1.5 block text-[14px] leading-relaxed text-ink-soft">{post.excerpt}</span>
                    <span className="mt-2 block text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                      {formatDate(post.date)} · {readingTime(post)} min read
                    </span>
                  </span>
                  <ArrowRight className="hidden h-6 w-6 text-sage-deep transition-transform duration-300 group-hover:translate-x-1.5 sm:block" aria-hidden />
                </Link>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* ——— FAQ + sources + newsletter ——— */}
        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <section aria-labelledby="ok-faq-heading">
            <Reveal>
              <h2 id="ok-faq-heading" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Oklahoma questions, answered
              </h2>
            </Reveal>
            <div className="mt-7">
              <FaqSection items={hub.faq} />
            </div>
          </section>
          <div>
            <Reveal>
              <div className="rounded-xl border border-line bg-paper p-7">
                <p className="font-script text-2xl text-sage-deep">sources &amp; verification</p>
                <ul className="mt-4 space-y-2.5 text-[14px] leading-relaxed text-ink-soft">
                  <li>• Scissortail Park — <a className="link-draw font-semibold text-sage-deep" href="https://scissortailpark.org" target="_blank" rel="noreferrer">scissortailpark.org</a></li>
                  <li>• Myriad Botanical Gardens — <a className="link-draw font-semibold text-sage-deep" href="https://myriadgardens.org" target="_blank" rel="noreferrer">myriadgardens.org</a></li>
                  <li>• Oklahoma travel &amp; state parks — <a className="link-draw font-semibold text-sage-deep" href="https://travelok.com" target="_blank" rel="noreferrer">travelok.com</a></li>
                  <li>• Marriage license &amp; state services — <a className="link-draw font-semibold text-sage-deep" href="https://ok.gov" target="_blank" rel="noreferrer">ok.gov</a></li>
                  <li>• Wichita Mountains Wildlife Refuge — <a className="link-draw font-semibold text-sage-deep" href="https://www.fws.gov/refuge/wichita-mountains" target="_blank" rel="noreferrer">fws.gov</a></li>
                </ul>
                <p className="mt-4 text-[12px] leading-relaxed text-ink-faint">
                  Fees, permits and license rules change — always confirm the current number with the
                  venue or agency before you plan around it.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120} className="mt-8">
              <p className="font-display text-xl font-bold text-ink">Get new scouted spots first</p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                One Oklahoma location, light-tested and written up, in the Sunday letter.
              </p>
              <div className="mt-4">
                <NewsletterForm />
              </div>
            </Reveal>
          </div>
        </div>

        {/* ——— Explore more ——— */}
        <section className="mt-16 border-t border-line pt-10" aria-label="Explore more hubs">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-ink-faint">Keep planning:</span>
            <Link to="/engagement-photo-locations" className="link-draw text-[14px] font-semibold text-ink hover:text-sage-deep">
              All engagement photo locations →
            </Link>
            <Link to="/save-the-date-photos" className="link-draw text-[14px] font-semibold text-ink hover:text-sage-deep">
              Save the date &amp; proposal →
            </Link>
            <Link to="/guides" className="link-draw text-[14px] font-semibold text-ink hover:text-sage-deep">
              The full topical map →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
