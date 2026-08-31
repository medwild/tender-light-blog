/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export at build only (next build sets NODE_ENV=production).
  // Next 14's dev server mis-detects generateStaticParams() under
  // output:"export" (500 on [hub] routes); dev falls back to on-demand
  // rendering of the exact same routes, so parity is preserved.
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  trailingSlash: true, // silo URLs keep their trailing slash (parity with sitemap)
  reactStrictMode: true,
  env: {},
};

export default nextConfig;
