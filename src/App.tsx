import { useEffect } from "react";
import { Link, parseRoute, usePathRoute } from "./lib/router";
import { SITE } from "./lib/constants";
import {
  applySeo,
  articleSchema,
  breadcrumbSchema,
  collectionSchema,
  faqSchema,
  organizationSchema,
  websiteSchema,
} from "./lib/seo";
import { getCategory, getPost, hubFor, postPath } from "./lib/content";
import { getHub } from "./content/hubs";
import type { Block } from "./content/types";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import BlogIndexPage from "./pages/BlogIndexPage";
import ArticlePage from "./pages/ArticlePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HubPage from "./pages/HubPage";
import HubIndexPage from "./pages/HubIndexPage";
import IdeasPillarPage from "./pages/IdeasPillarPage";
import LegalPage from "./pages/LegalPage";
import AuthorPage from "./pages/AuthorPage";
import NotFoundPage from "./pages/NotFoundPage";

/** Central SEO effect — the SPA mirror of Next.js route-level `generateMetadata`. */
function useSeo(path: string) {
  useEffect(() => {
    const route = parseRoute(path);
    const crumbs: { name: string; path: string }[] = [{ name: "Home", path: "/" }];
    const schemas: object[] = [];

    switch (route.name) {
      case "home":
        applySeo({
          title: "Engagement Photo Ideas, Poses & Inspiration | Tender Light",
          description:
            "Engagement photo ideas, poses & inspiration for couples — six hubs: poses, outfits, locations, save-the-dates and prints, from 400+ real sessions.",
          path: "/",
          type: "website",
          jsonLd: [organizationSchema(), websiteSchema()],
        });
        return;

      case "blog": {
        crumbs.push({ name: "The Journal", path: "/blog" });
        schemas.push(breadcrumbSchema(crumbs), collectionSchema("The Journal", "/blog", "Every engagement photography guide: poses, outfits, locations and light."));
        applySeo({
          title: "The Journal — Engagement Photo Guides | Tender Light",
          description:
            "Browse every Tender Light guide: 30+ couple poses, engagement outfit formulas, Oklahoma locations and golden-hour tips for 2026.",
          path: route.page > 1 ? `/blog/page/${route.page}` : "/blog",
          jsonLd: schemas,
        });
        return;
      }

      case "article": {
        const post = getPost(route.slug);
        if (!post) break;
        const hub = getHub(hubFor(post.slug));
        const faqBlock = post.blocks.find((b: Block) => b.type === "faq");
        crumbs.push(
          { name: hub?.name ?? "Guides", path: `/${hubFor(post.slug)}` },
          { name: post.title, path: postPath(post.slug) }
        );
        schemas.push(
          breadcrumbSchema(crumbs),
          articleSchema({
            title: post.title,
            slug: post.slug,
            date: post.date,
            image: post.featuredImage,
            description: post.seoDescription,
            author: post.author,
          })
        );
        if (faqBlock && faqBlock.type === "faq") schemas.push(faqSchema(faqBlock.items));
        applySeo({
          title: post.seoTitle,
          description: post.seoDescription,
          path: postPath(post.slug),
          image: post.featuredImage,
          type: "article",
          jsonLd: schemas,
        });
        return;
      }

      case "guides":
        crumbs.push({ name: "Guides", path: "/guides" });
        schemas.push(breadcrumbSchema(crumbs), collectionSchema("Engagement Photo Guides", "/guides", "Six topic hubs covering ideas, poses, locations, outfits, save-the-dates and prints."));
        applySeo({
          title: "Engagement Photo Guides — Start Here | Tender Light",
          description:
            "The engagement photo map: six topic hubs covering ideas, poses, locations, outfits, save-the-dates and print ideas, curated by a working photographer.",
          path: "/guides",
          jsonLd: schemas,
        });
        return;

      case "hub": {
        const hub = getHub(route.slug);
        if (!hub) break;
        crumbs.push({ name: "Guides", path: "/guides" }, { name: hub.name, path: `/${hub.slug}` });
        schemas.push(breadcrumbSchema(crumbs), collectionSchema(hub.name, `/${hub.slug}`, hub.lede));
        if (hub.faq.length) schemas.push(faqSchema(hub.faq));
        applySeo({
          title: hub.metaTitle,
          description: hub.metaDescription,
          path: `/${hub.slug}`,
          jsonLd: schemas,
        });
        return;
      }

      case "about":
        crumbs.push({ name: "About Harper", path: "/about" });
        schemas.push(breadcrumbSchema(crumbs));
        applySeo({
          title: "About Harper Ellis — Engagement Photo Blogger | Tender Light",
          description:
            "Meet Harper Ellis: former engagement photographer (400+ sessions, 8 years behind the lens) and founder of Tender Light — warm, practical guides for camera-shy couples.",
          path: "/about",
          jsonLd: schemas,
        });
        return;

      case "contact":
        crumbs.push({ name: "Contact", path: "/contact" });
        schemas.push(breadcrumbSchema(crumbs));
        applySeo({
          title: "Book an Engagement Photo Session | Tender Light",
          description:
            "Plan your engagement shoot with Harper: photographer shortlists, poses, outfits and scouted locations. Replies within 48 hours.",
          path: "/contact",
          jsonLd: schemas,
        });
        return;

      case "legal": {
        const legalTitles = {
          "privacy-policy": "Privacy Policy",
          "affiliate-disclosure": "Affiliate Disclosure",
          "editorial-policy": "Editorial Policy",
        } as const;
        const name = legalTitles[route.doc];
        crumbs.push({ name, path: `/${route.doc}` });
        schemas.push(breadcrumbSchema(crumbs));
        applySeo({
          title: `${name} | Tender Light`,
          description: `${name} for Tender Light — the engagement photo journal by Harper Ellis.`,
          path: `/${route.doc}`,
          noindex: true,
          jsonLd: schemas,
        });
        return;
      }

      case "author":
        crumbs.push({ name: "Harper Ellis", path: "/author/harper-ellis" });
        schemas.push(breadcrumbSchema(crumbs));
        applySeo({
          title: "Harper Ellis — Engagement Photo Guides | Tender Light",
          description:
            "All engagement photo guides by Harper Ellis: former photographer (400+ sessions, 8 years), founder of Tender Light. Poses, outfits, locations.",
          path: "/author/harper-ellis",
          jsonLd: schemas,
        });
        return;

      default:
        break;
    }

    // Unknown route
    applySeo({
      title: "Page Not Found | Tender Light",
      description: "This page didn't make it out of the darkroom. Head back to the Tender Light journal.",
      path,
      jsonLd: [breadcrumbSchema(crumbs)],
    });
  }, [path]);
}

export default function App() {
  const path = usePathRoute();
  const route = parseRoute(path);
  useSeo(path);

  // Reset scroll & focus target on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [path]);

  let page: React.ReactNode;
  switch (route.name) {
    case "home":
      page = <HomePage />;
      break;
    case "blog":
      page = <BlogIndexPage page={route.page} />;
      break;
    case "article":
      page = <ArticlePage key={route.slug} slug={route.slug} />;
      break;
    case "guides":
      page = <HubIndexPage />;
      break;
    case "hub": {
      const hub = getHub(route.slug);
      page = hub?.pillar ? <IdeasPillarPage key={route.slug} /> : <HubPage key={route.slug} slug={route.slug} />;
      break;
    }
    case "legal":
      page = <LegalPage key={route.doc} doc={route.doc} />;
      break;
    case "author":
      page = <AuthorPage key={route.handle} />;
      break;
    case "about":
      page = <AboutPage />;
      break;
    case "contact":
      page = <ContactPage />;
      break;
    default:
      page = <NotFoundPage />;
  }

  return (
    <div className="grain flex min-h-screen flex-col overflow-x-clip">
      {/* Accessibility: skip to content */}
      <a
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main-content")?.focus();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-cream"
      >
        Skip to content
      </a>

      <Header />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        {page}
      </main>
      <Footer />

      {/* Floating "back to hub" on deep article pages */}
      {route.name === "article" && (
        <Link
          to="/blog"
          aria-label="Back to the journal"
          className="fixed bottom-6 right-6 z-40 grid h-13 w-13 place-items-center rounded-full border border-line bg-paper/95 p-3.5 text-ink shadow-[0_16px_40px_-16px_rgba(44,44,44,0.45)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-ink hover:text-cream"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Z" />
            <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-4.5" />
            <path d="M9 7h6M9 11h4" />
          </svg>
        </Link>
      )}
    </div>
  );
}
