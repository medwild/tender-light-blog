import { useEffect, useState, type AnchorHTMLAttributes, type ReactNode } from "react";

/**
 * History-API router with clean, crawlable URLs (/blog/:slug — no hashes).
 * Every route is ALSO pre-rendered as a real static HTML file in public/
 * (see README — "shadow SSG"), so crawlers & social scrapers receive full
 * content + meta without executing any JavaScript; hydrate.js then boots
 * this SPA on top for interactive visitors.
 */
export function normalizePath(pathname: string): string {
  let p = pathname.replace(/\/+$/, "");
  if (!p) return "/";
  return p;
}

/** Slug renames — old URL keeps resolving, canonical URL wins (301-equivalent). */
const LEGACY_SLUGS: Record<string, string> = {
  "casual-engagement-photos": "casual-engagement-photo-ideas",
};

function currentPath(): string {
  // Back-compat: translate legacy hash routes (#/blog/x) to clean paths once.
  if (window.location.hash.startsWith("#/")) {
    const clean = normalizePath(window.location.hash.slice(1));
    window.history.replaceState(null, "", clean === "/" ? "/" : clean + "/");
  }
  let path = normalizePath(window.location.pathname);
  // Legacy slug redirect → canonical URL in the address bar.
  const match = path.match(/^\/blog\/([^/]+)$/);
  if (match && LEGACY_SLUGS[match[1]]) {
    path = `/blog/${LEGACY_SLUGS[match[1]]}`;
    window.history.replaceState(null, "", path + "/");
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

/** Parse the current route into a typed shape. */
export type Route =
  | { name: "home" }
  | { name: "blog"; page: number }
  | { name: "post"; slug: string }
  | { name: "category"; slug: string }
  | { name: "about" }
  | { name: "contact" }
  | { name: "notfound"; path: string };

export function parseRoute(path: string): Route {
  const parts = path.split("/").filter(Boolean);
  if (parts.length === 0) return { name: "home" };
  if (parts[0] === "blog" && parts.length === 1) return { name: "blog", page: 1 };
  if (parts[0] === "blog" && parts[1] === "page")
    return { name: "blog", page: Math.max(1, parseInt(parts[2] ?? "1", 10) || 1) };
  if (parts[0] === "blog" && parts.length === 2) return { name: "post", slug: parts[1] };
  if (parts[0] === "category" && parts.length === 2) return { name: "category", slug: parts[1] };
  if (parts[0] === "about") return { name: "about" };
  if (parts[0] === "contact") return { name: "contact" };
  return { name: "notfound", path };
}
