import { useEffect } from "react";
import { Link, parseRoute, useHashRoute } from "./lib/router";
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
import { getCategory, getPost } from "./lib/content";
import type { Block } from "./content/types";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import BlogIndexPage from "./pages/BlogIndexPage";
import ArticlePage from "./pages/ArticlePage";
import CategoryPage from "./pages/CategoryPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
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
          title: "Tender Light — Engagement Photo Poses & Ideas (2026)",
          description: SITE.description,
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

      case "post": {
        const post = getPost(route.slug);
        if (!post) break;
        const faqBlock = post.blocks.find((b: Block) => b.type === "faq");
        crumbs.push(
          { name: "The Journal", path: "/blog" },
          { name: getCategory(post.category)?.name ?? "Guide", path: `/category/${post.category}` },
          { name: post.title, path: `/blog/${post.slug}` }
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
          path: `/blog/${post.slug}`,
          image: post.featuredImage,
          type: "article",
          jsonLd: schemas,
        });
        return;
      }

      case "category": {
        const cat = getCategory(route.slug);
        if (!cat) break;
        crumbs.push({ name: cat.name, path: `/category/${cat.slug}` });
        schemas.push(breadcrumbSchema(crumbs), collectionSchema(cat.name, `/category/${cat.slug}`, cat.longDescription));
        applySeo({
          title: `${cat.name} Guides for Engagement Photos | Tender Light`,
          description: cat.longDescription.slice(0, 155),
          path: `/category/${cat.slug}`,
          jsonLd: schemas,
        });
        return;
      }

      case "about":
        crumbs.push({ name: "About Clara", path: "/about" });
        schemas.push(breadcrumbSchema(crumbs));
        applySeo({
          title: "About Clara Bennett — Engagement Photographer | Tender Light",
          description:
            "Meet Clara Bennett, the photographer behind Tender Light: 400+ engagement sessions, natural light only, and a journal written for camera-shy couples.",
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
            "Book a golden-hour engagement session in Oklahoma City or ask anything about poses, outfits and locations. Replies within 48 hours.",
          path: "/contact",
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
  const path = useHashRoute();
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
    case "post":
      page = <ArticlePage key={route.slug} slug={route.slug} />;
      break;
    case "category":
      page = <CategoryPage key={route.slug} slug={route.slug} />;
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

      {/* Floating "back to journal" on deep pages */}
      {route.name === "post" && (
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
