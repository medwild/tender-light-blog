import { useEffect, useState, type AnchorHTMLAttributes, type ReactNode } from "react";
import { HUBS } from "../content/hubs";
import { POST_HUB } from "../content/posts";

/**
 * History-API router with clean, crawlable silo URLs (/{hub}/{slug}).
 * Every route is ALSO pre-rendered as a real static HTML file in public/
 * (see README — "shadow SSG"), so crawlers & social scrapers receive full
 * content + meta without executing any JavaScript; hydrate.js then boots
 * this SPA on top for interactive visitors.
 */
export function normalizePath(pathname: string): string {
  const p = pathname.replace(/\/+$/, "");
  return p === "" ? "/" : p;
}

const HUB_SLUGS = new Set(HUBS.map((h) => h.slug));

/** Hub slug renames — old silo URL → canonical top-level silo URL (301). */
const LEGACY_HUBS: Record<string, string> = {
  "outdoor-engagement-photo-ideas": "engagement-photo-locations",
  "what-to-wear-for-engagement-photos": "engagement-photo-outfits",
  "save-the-date-photoshoot-ideas": "save-the-date-photos",
  "engagement-photo-print-ideas": "engagement-photo-prints",
};

/** Old article slug → current slug (301). */
const LEGACY_SLUGS: Record<string, string> = {
  "casual-engagement-photos": "casual-engagement-photo-ideas",
};

/** Flat /category/ taxonomy → silo hub (301). */
const CATEGORY_TO_HUB: Record<string, string> = {
  poses: "engagement-photo-poses",
  outfits: "engagement-photo-outfits",
  locations: "engagement-photo-locations",
  tips: "engagement-photo-ideas",
};

/**
 * Resolve a legacy URL to its canonical silo URL (301-equivalent).
 * Returns null when the path is already canonical.
 */
export function resolveRedirect(rawPath: string): string | null {
  const path = normalizePath(rawPath);
  const parts = path.split("/").filter(Boolean);

  // /blog/[slug] → /{hub}/{slug}
  if (parts[0] === "blog" && parts.length === 2 && parts[1] !== "page") {
    const slug = LEGACY_SLUGS[parts[1]] ?? parts[1];
    if (POST_HUB[slug]) return `/${POST_HUB[slug]}/${slug}`;
  }
  // /hub/[slug] → /[slug]  (also normalizes renamed hub slugs)
  if (parts[0] === "hub" && parts.length === 2) {
    const hub = LEGACY_HUBS[parts[1]] ?? parts[1];
    if (HUB_SLUGS.has(hub)) return `/${hub}`;
  }
  // /category/[slug] → /[hub]
  if (parts[0] === "category" && parts.length === 2) {
    const hub = CATEGORY_TO_HUB[parts[1]];
    if (hub) return `/${hub}`;
  }
  return null;
}

function currentPath(): string {
  // Back-compat: translate legacy hash routes (#/blog/x) to clean paths once.
  if (window.location.hash.startsWith("#/")) {
    const clean = normalizePath(window.location.hash.slice(1));
    window.history.replaceState(null, "", clean === "/" ? "/" : clean + "/");
  }
  const path = normalizePath(window.location.pathname);
  const canonical = resolveRedirect(path);
  if (canonical) {
    window.history.replaceState(null, "", canonical + "/");
    return canonical;
  }
  return path;
}

export function usePathRoute(): string {
  const [route, setRoute] = useState(currentPath);
  useEffect(() => {
    const onChange = () => setRoute(normalizePath(window.location.pathname));
    window.addEventListener("popstate", onChange);
    window.addEventListener("tl:nav", onChange);
    return () => {
      window.removeEventListener("popstate", onChange);
      window.removeEventListener("tl:nav", onChange);
    };
  }, []);
  return route;
}

/** Programmatic navigation (pushState + scroll reset + re-render signal). */
export function navigate(to: string) {
  const target = to === "/" ? "/" : to.replace(/\/+$/, "") + "/";
  if (normalizePath(window.location.pathname) !== normalizePath(target)) {
    window.history.pushState(null, "", target);
    window.dispatchEvent(new Event("tl:nav"));
  }
  window.scrollTo({ top: 0, behavior: "auto" });
}

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: ReactNode;
}

/**
 * Real-anchor link: href carries the clean path (crawlable, right-clickable,
 * copyable); clicks are intercepted for SPA-speed navigation.
 */
export function Link({ to, children, onClick, ...rest }: LinkProps) {
  const href = to === "/" ? "/" : to + "/";
  return (
    <a
      href={href}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        navigate(to);
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

export type LegalDoc = "privacy-policy" | "affiliate-disclosure" | "editorial-policy";

/** Parse the current route into a typed shape. */
export type Route =
  | { name: "home" }
  | { name: "guides" }
  | { name: "hub"; slug: string }
  | { name: "article"; hub: string; slug: string }
  | { name: "blog"; page: number }
  | { name: "legal"; doc: LegalDoc }
  | { name: "author"; handle: string }
  | { name: "about" }
  | { name: "contact" }
  | { name: "notfound"; path: string };

export function parseRoute(path: string): Route {
  const parts = path.split("/").filter(Boolean);

  if (parts.length === 0) return { name: "home" };

  if (parts.length === 1) {
    if (parts[0] === "guides") return { name: "guides" };
    if (parts[0] === "blog") return { name: "blog", page: 1 };
    if (parts[0] === "about") return { name: "about" };
    if (parts[0] === "contact") return { name: "contact" };
    if (parts[0] === "privacy-policy") return { name: "legal", doc: "privacy-policy" };
    if (parts[0] === "affiliate-disclosure") return { name: "legal", doc: "affiliate-disclosure" };
    if (parts[0] === "editorial-policy") return { name: "legal", doc: "editorial-policy" };
    if (HUB_SLUGS.has(parts[0])) return { name: "hub", slug: parts[0] };
    return { name: "notfound", path };
  }

  if (parts.length === 2) {
    if (parts[0] === "blog" && parts[1] === "page") return { name: "blog", page: 1 };
    if (parts[0] === "author") return { name: "author", handle: parts[1] };
    if (HUB_SLUGS.has(parts[0])) return { name: "article", hub: parts[0], slug: parts[1] };
    return { name: "notfound", path };
  }

  if (parts.length === 3 && parts[0] === "blog" && parts[1] === "page") {
    return { name: "blog", page: Math.max(1, parseInt(parts[2], 10) || 1) };
  }

  return { name: "notfound", path };
}
