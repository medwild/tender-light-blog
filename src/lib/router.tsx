import { useEffect, useState, type AnchorHTMLAttributes, type ReactNode } from "react";

/**
 * History-API router with clean, crawlable silo URLs (/{hub}/{slug}).
 * Every route is also pre-rendered as a static HTML file in public/
 * ("shadow SSG") so crawlers receive full content + meta without JS.
 */
export function normalizePath(pathname: string): string {
  const p = pathname.replace(/\/+$/, "");
  return p === "" ? "/" : p;
}

export const HUB_SLUGS = [
  "engagement-photo-ideas",
  "engagement-photo-poses",
  "engagement-photo-outfits",
  "engagement-photo-locations",
  "save-the-date-photos",
  "engagement-photo-prints",
];
const HUB_SET = new Set(HUB_SLUGS);

function currentPath(): string {
  return normalizePath(window.location.pathname);
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

/** Real-anchor link: crawlable href + SPA-speed click navigation. */
export function Link({ to, children, onClick, ...rest }: LinkProps) {
  const href = to === "/" ? "/" : to.replace(/\/+$/, "") + "/";
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

export type Route =
  | { name: "home" }
  | { name: "guides" }
  | { name: "hub"; slug: string }
  | { name: "article"; hub: string; slug: string }
  | { name: "legal"; doc: LegalDoc }
  | { name: "about" }
  | { name: "contact" }
  | { name: "notfound"; path: string };

export function parseRoute(path: string): Route {
  const parts = path.split("/").filter(Boolean);
  if (parts.length === 0) return { name: "home" };
  if (parts.length === 1) {
    if (parts[0] === "guides") return { name: "guides" };
    if (parts[0] === "about") return { name: "about" };
    if (parts[0] === "contact") return { name: "contact" };
    if (parts[0] === "privacy-policy") return { name: "legal", doc: "privacy-policy" };
    if (parts[0] === "affiliate-disclosure") return { name: "legal", doc: "affiliate-disclosure" };
    if (parts[0] === "editorial-policy") return { name: "legal", doc: "editorial-policy" };
    if (HUB_SET.has(parts[0])) return { name: "hub", slug: parts[0] };
    return { name: "notfound", path };
  }
  if (parts.length === 2 && HUB_SET.has(parts[0])) {
    return { name: "article", hub: parts[0], slug: parts[1] };
  }
  return { name: "notfound", path };
}
