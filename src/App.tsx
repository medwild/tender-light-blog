import { useEffect } from "react";
import { parseRoute, usePathRoute } from "./lib/router";
import { SITE } from "./lib/constants";
import { articleItems, getPost, getPostsByHub, postPath } from "./lib/content";
import { getHub } from "./content/hubs";
import {
  applySeo, articleItemListSchema, articleSchema, breadcrumbSchema, collectionSchema,
  faqSchema, itemListSchema, organizationSchema, personSchema, websiteSchema,
} from "./lib/seo";
import { Header, Footer } from "./components/layout";
import { ErrorBoundary } from "./components/ui";
import { HomePage, HubIndexPage } from "./pages/home";
import { AboutPage, ArticlePage, ContactPage, HubPage, LegalPage } from "./pages/detail";
import { NotFoundPage } from "./pages/misc";

export default function App() {
  const path = usePathRoute();
  const route = parseRoute(path);

  useEffect(() => {
    const crumbs: { name: string; path: string }[] = [{ name: "Home", path: "/" }];
    const schemas: Record<string, unknown>[] = [];

    switch (route.name) {
      case "home":
        applySeo({ title: "Engagement Photo Ideas, Poses & Inspiration | Tender Light", description: SITE.description, path: "/", jsonLd: [organizationSchema(), websiteSchema(), personSchema()] });
        return;
      case "guides":
        crumbs.push({ name: "Guides", path: "/guides" });
        schemas.push(breadcrumbSchema(crumbs), collectionSchema("Engagement Photo Guides", "/guides", "Six topic hubs covering ideas, poses, outfits, locations, save-the-dates and prints."));
        applySeo({ title: "Engagement Photo Guides — Start Here | Tender Light", description: "The engagement photo topical map: six hubs covering ideas, poses, outfits, locations, save-the-dates and prints.", path: "/guides", jsonLd: schemas });
        return;
      case "hub": {
        const hub = getHub(route.slug);
        if (!hub) break;
        crumbs.push({ name: hub.name, path: `/${hub.slug}` });
        const spokes = getPostsByHub(hub.slug);
        schemas.push(breadcrumbSchema(crumbs), collectionSchema(hub.name, `/${hub.slug}`, hub.lede), faqSchema(hub.faq), itemListSchema(spokes.map((p) => postPath(p.slug))));
        applySeo({ title: hub.metaTitle, description: hub.metaDescription, path: `/${hub.slug}`, jsonLd: schemas });
        return;
      }
      case "article": {
        const post = getPost(route.slug);
        if (!post) break;
        const hub = post.cluster ? getHub(post.cluster) : undefined;
        if (hub) crumbs.push({ name: hub.name, path: `/${hub.slug}` });
        crumbs.push({ name: post.title, path: postPath(post.slug) });
        schemas.push(breadcrumbSchema(crumbs), articleSchema({
          title: post.title, description: post.seoDescription, image: post.featuredImage,
          date: post.date, dateModified: post.dateModified, keywords: post.primaryKeyword,
        }, postPath(post.slug)));
        const faqBlock = post.blocks.find((b) => b.type === "faq");
        if (faqBlock && faqBlock.type === "faq") schemas.push(faqSchema(faqBlock.items));
        const items = articleItems(post);
        if (items) schemas.push(articleItemListSchema(`${post.title} — itemized`, items));
        applySeo({
          title: post.seoTitle, description: post.seoDescription, path: postPath(post.slug), image: post.featuredImage, type: "article", jsonLd: schemas,
          article: { published: post.date, modified: post.dateModified ?? post.date, author: post.author.name, authorUrl: `${SITE.url}/author/harper-ellis/` },
        });
        return;
      }
      case "legal":
        crumbs.push({ name: route.doc, path: `/${route.doc}` });
        schemas.push(breadcrumbSchema(crumbs));
        applySeo({ title: `${route.doc.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} | Tender Light`, description: `${route.doc.replace(/-/g, " ")} for Tender Light.`, path: `/${route.doc}`, jsonLd: schemas, noindex: true });
        return;
      case "about":
        crumbs.push({ name: "About Harper", path: "/about" });
        schemas.push(breadcrumbSchema(crumbs), personSchema());
        applySeo({ title: "About Harper Ellis | Tender Light", description: "Harper Ellis — former engagement photographer, 400+ sessions, now writing the guides every couple deserves.", path: "/about", jsonLd: schemas });
        return;
      case "contact":
        crumbs.push({ name: "Contact", path: "/contact" });
        schemas.push(breadcrumbSchema(crumbs), organizationSchema());
        applySeo({ title: "Book an Engagement Session | Tender Light", description: "Book an engagement session or ask about poses, outfits and locations. Replies within 48 hours.", path: "/contact", jsonLd: schemas });
        return;
      case "notfound":
        applySeo({ title: "Page not found | Tender Light", description: "This frame didn't develop. Head back to the journal.", path: route.path, jsonLd: [] });
        return;
    }
  }, [route]);

  let page: React.ReactNode;
  switch (route.name) {
    case "home": page = <HomePage />; break;
    case "guides": page = <HubIndexPage />; break;
    case "hub": page = <HubPage key={route.slug} slug={route.slug} />; break;
    case "article": page = <ArticlePage key={route.slug} hub={route.hub} slug={route.slug} />; break;
    case "legal": page = <LegalPage key={route.doc} doc={route.doc} />; break;
    case "about": page = <AboutPage />; break;
    case "contact": page = <ContactPage />; break;
    default: page = <NotFoundPage />; break;
  }

  return (
    <ErrorBoundary>
      <div className="grain flex min-h-screen flex-col bg-cream text-ink">
        <Header />
        <div className="flex-1">{page}</div>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
