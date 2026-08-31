import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";
import { SITE } from "../lib/constants";
import { Header, Footer } from "../components/layout";
import "../index.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-inter",
  display: "swap",
});
const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Engagement Photo Ideas, Poses & Inspiration | Tender Light",
  description: SITE.description,
  robots: { index: true, follow: true },
  openGraph: { siteName: SITE.name },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/logo.svg" },
};

export const viewport: Viewport = { themeColor: "#FAF7F2" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${dancing.variable}`}>
      <body>
        <div className="grain flex min-h-screen flex-col bg-cream text-ink">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
