import { Link, type LegalDoc } from "../lib/router";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import Reveal from "../components/ui/Reveal";
import { SITE } from "../lib/constants";

const DOCS: Record<
  LegalDoc,
  { title: string; updated: string; intro: string; sections: { h: string; p: string[] }[] }
> = {
  "privacy-policy": {
    title: "Privacy Policy",
    updated: "February 2026",
    intro:
      "Tender Light is an independent publication about engagement photography. We collect as little data as possible, and we never sell your information. Here's exactly what happens when you visit, subscribe, or reach out.",
    sections: [
      {
        h: "What we collect",
        p: [
          "When you subscribe to The Love Letter, we store the email address you provide so we can send you the newsletter. That's it. We don't ask for your name, phone number, or location.",
          "Like most sites, our hosting and analytics providers collect standard, aggregate technical data (pages viewed, approximate region, device type) to understand what's useful. This data never identifies you personally and is never sold.",
        ],
      },
      {
        h: "Cookies & advertising",
        p: [
          "We use cookies only where needed for core function and, where advertising is enabled, to serve relevant ads. You can disable cookies in your browser at any time; the site remains fully readable.",
          "Third-party vendors, including Google, may use cookies (such as the DART cookie) to serve ads based on your prior visits to this and other websites. You may opt out of personalized advertising in your Google Ads settings.",
        ],
      },
      {
        h: "Your rights",
        p: [
          "You can unsubscribe from the newsletter with one click at the bottom of any email, and you may request a copy or deletion of the data we hold about you by emailing " + SITE.email + ". We honor all requests within 30 days.",
        ],
      },
    ],
  },
  "affiliate-disclosure": {
    title: "Affiliate Disclosure",
    updated: "February 2026",
    intro:
      "Transparency matters, especially when money is involved. This page explains how affiliate links work on Tender Light and what that means for you.",
    sections: [
      {
        h: "How affiliate links work",
        p: [
          "Some product links on Tender Light (outfit pieces, photo prints, presets) are affiliate links. If you click one and make a purchase, we may earn a small commission at no extra cost to you. The price you pay is exactly the same.",
          "These links are marked with rel=\"sponsored\" in the code, and product round-ups are labeled where affiliate links are present. This disclosure complies with the FTC's endorsement guides and the AdSense/affiliate program terms we participate in.",
        ],
      },
      {
        h: "What we will and won't do",
        p: [
          "We only link to products a working photographer would genuinely recommend, and editorial coverage is never for sale. A brand cannot buy a positive mention, and affiliate relationships never change what we write.",
          "If we haven't tested or vetted a category ourselves, we say so. Our recommendations are based on real sessions and real use, not press releases.",
        ],
      },
    ],
  },
  "editorial-policy": {
    title: "Editorial Policy",
    updated: "February 2026",
    intro:
      "Every guide on Tender Light is written to be accurate, useful, and honest. This page explains the standards we hold our content to.",
    sections: [
      {
        h: "Who writes this site",
        p: [
          "Tender Light is written and edited by Harper Ellis, a former wedding and engagement photographer with 8 years and 400+ sessions behind the lens. Guest contributors (such as our session stylist) are credited byline on every article they write.",
        ],
      },
      {
        h: "How advice is grounded",
        p: [
          "Pose direction, outfit guidance and location notes come from real sessions, not stock theory. Where a number is cited (e.g. \"in 8 of 10 sessions…\"), it reflects observed experience, and we say so rather than presenting it as independent research.",
          "Factual claims about places, permits, fees or seasons are linked to an official source in the article's Sources & Further Reading block. If a fact can't be verified, we present it as opinion or omit it.",
        ],
      },
      {
        h: "How we use images",
        p: [
          "Photographs on this site are either Harper's own session work, used with the couple's written permission, or clearly-labeled stock/AI placeholders standing in until original photography is swapped in. We never present a staged or AI image as a real couple's session.",
        ],
      },
      {
        h: "Updates & corrections",
        p: [
          "Guides are reviewed and re-dated as conditions change (fees, light, venue rules). Material changes are noted with an updated date at the top of the article.",
          "We correct errors promptly. If you spot something that's wrong or out of date, email " + SITE.email + " and we'll fix it and note the change.",
        ],
      },
      {
        h: "Separation of content and commerce",
        p: [
          "Advertising and affiliate revenue never dictate editorial coverage. Sponsored content, if ever run, is clearly labeled and rare; our guides are not available for purchase or influence.",
        ],
      },
    ],
  },
};

/** Legal / policy pages — informational, deliberately `noindex`ed. */
export default function LegalPage({ doc }: { doc: LegalDoc }) {
  const d = DOCS[doc];
  return (
    <div className="pt-28 md:pt-36">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 pb-24">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: d.title, path: `/${doc}` }]} />
        <Reveal>
          <p className="font-script text-3xl text-rose-deep">the fine print</p>
          <h1 className="mt-2 font-display text-5xl font-bold tracking-tight">{d.title}</h1>
          <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-ink-faint">
            Last updated {d.updated}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{d.intro}</p>
        </Reveal>
        <div className="mt-10 space-y-9">
          {d.sections.map((s) => (
            <Reveal key={s.h}>
              <h2 className="font-display text-2xl font-bold">{s.h}</h2>
              {s.p.map((para, i) => (
                <p key={i} className="mt-3 leading-relaxed text-ink-soft">
                  {para}
                </p>
              ))}
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 rounded-xl border border-line bg-paper p-6">
          <p className="font-display text-lg font-bold">Questions?</p>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
            Email <a className="link-draw font-semibold text-rose-deep" href={`mailto:${SITE.email}`}>{SITE.email}</a> — a
            human reads every message. Or head back to{" "}
            <Link to="/blog" className="link-draw font-semibold text-rose-deep">the journal</Link>.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
