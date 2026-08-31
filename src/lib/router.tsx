import NextLink from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

/**
 * Routing now lives in the Next.js file tree (src/app/). This module keeps
 * the site's `Link` API — clean silo URLs with trailing slashes (enforced by
 * `trailingSlash: true` in next.config.mjs) — so pages don't hand-roll hrefs.
 */
export function normalizePath(pathname: string): string {
  const p = pathname.replace(/\/+$/, "");
  return p === "" ? "/" : p;
}

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: string;
  children: ReactNode;
}

/** Real-anchor link (next/link): crawlable href + client-side navigation. */
export function Link({ to, children, ...rest }: LinkProps) {
  if (to.startsWith("#")) {
    return (
      <a href={to} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <NextLink href={to} {...rest}>
      {children}
    </NextLink>
  );
}
