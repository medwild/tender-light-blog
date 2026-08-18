import { useEffect, useState, type AnchorHTMLAttributes, type ReactNode } from "react";

/**
 * Tiny hash router — the SPA stand-in for Next.js App Router routes.
 * Routes:  /  ·  /blog  ·  /blog/:slug  ·  /category/:slug  ·  /about  ·  /contact
 */
export function useHashRoute(): string {
  const [route, setRoute] = useState(() => normalize(window.location.hash));
  useEffect(() => {
    const onChange = () => setRoute(normalize(window.location.hash));
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}

function normalize(hash: string): string {
  const clean = hash.replace(/^#/, "");
  if (!clean || clean === "/") return "/";
  return clean.endsWith("/") ? clean.slice(0, -1) : clean;
}

export function navigate(to: string) {
  window.location.hash = to;
}

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: ReactNode;
}

/** Anchor-based link (native hash navigation, fully crawlable). */
export function Link({ to, children, ...rest }: LinkProps) {
  return (
    <a href={`#${to}`} {...rest}>
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
