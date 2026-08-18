import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useHashRoute } from "../../lib/router";
import { NAV_LINKS, SITE } from "../../lib/constants";

/** Custom aperture wordmark — drawn inline, no icon library. */
function ApertureMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="21" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="24" cy="24" r="7.5" fill="var(--color-rose)" opacity="0.9" />
      <g stroke="currentColor" strokeWidth="1.4" fill="none">
        <path d="M24 3.5v9M24 35.5v9M3.5 24h9M35.5 24h9" />
        <path d="M9.7 9.7l6.4 6.4M31.9 31.9l6.4 6.4M38.3 9.7l-6.4 6.4M16.1 31.9l-6.4 6.4" opacity="0.55" />
      </g>
    </svg>
  );
}

export default function Header() {
  const route = useHashRoute();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const isPost = route.startsWith("/blog/") && route !== "/blog";

  useEffect(() => setOpen(false), [route]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      if (isPost) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isPost]);

  const isActive = (to: string) =>
    to === "/blog" ? route.startsWith("/blog") : route.startsWith(to);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-line/80 bg-cream/90 shadow-[0_8px_30px_-18px_rgba(44,44,44,0.25)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 md:h-[76px]">
        <Link to="/" className="group flex items-center gap-3" aria-label={`${SITE.name} — home`}>
          <span className="text-ink transition-transform duration-700 group-hover:rotate-45">
            <ApertureMark />
          </span>
          <span className="leading-none">
            <span className="block font-display text-[1.35rem] font-bold tracking-tight">
              Tender <em className="font-medium italic text-rose-deep">Light</em>
            </span>
            <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.28em] text-ink-faint">
              {SITE.tagline}
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`link-draw text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                isActive(l.to) ? "text-rose-deep" : "text-ink-soft hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-full border border-ink px-5 py-2 text-[13px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-deep hover:bg-rose-deep hover:text-cream"
          >
            Book a session
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink lg:hidden"
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      {/* Reading progress on articles */}
      {isPost && (
        <div className="h-[2.5px] w-full bg-transparent" aria-hidden="true">
          <div className="h-full bg-gradient-to-r from-rose via-gold to-sage transition-[width] duration-150 ease-out" style={{ width: `${progress}%` }} />
        </div>
      )}

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-line bg-cream transition-all duration-500 lg:hidden ${
          open ? "max-h-[480px] border-b" : "max-h-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-6 py-6">
          {NAV_LINKS.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              className="flex items-baseline gap-4 border-b border-line/60 py-3 font-display text-2xl font-semibold"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span className="font-script text-lg text-gold-deep">0{i + 1}</span>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
