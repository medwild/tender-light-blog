"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Aperture, Instagram, Mail, MapPin, Menu, X } from "lucide-react";
import { Link, normalizePath } from "../lib/router";
import { HUBS } from "../lib/content";
import { SITE } from "../lib/constants";
import { NewsletterForm } from "./ui";

const NAV = [
  { label: "Guides", to: "/guides" },
  { label: "Ideas", to: "/engagement-photo-ideas" },
  { label: "Poses", to: "/engagement-photo-poses" },
  { label: "Outfits", to: "/engagement-photo-outfits" },
  { label: "Locations", to: "/engagement-photo-locations" },
  { label: "About", to: "/about" },
];

export function Header() {
  const path = normalizePath(usePathname() ?? "/");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [path]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-cream/95 shadow-[0_10px_40px_-20px_rgba(44,44,44,0.25)] backdrop-blur" : "bg-cream"}`}>
      <div className="absolute inset-x-0 top-0 h-[3px] bg-line">
        <div className="h-full bg-gradient-to-r from-rose-deep via-gold to-sage-deep transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="group flex items-center gap-2.5" aria-label="Tender Light home">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/60 text-gold-deep transition-transform duration-500 group-hover:rotate-90">
            <Aperture className="h-5 w-5" aria-hidden />
          </span>
          <span className="leading-none">
            <span className="block font-display text-xl font-bold tracking-tight text-ink">Tender <em className="italic text-rose-deep">Light</em></span>
            <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.24em] text-ink-faint">{SITE.tagline}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((l) => {
            const active = path === l.to || path.startsWith(l.to + "/");
            return (
              <Link key={l.to} to={l.to} className={`link-draw text-[14px] font-medium transition-colors ${active ? "text-rose-deep" : "text-ink-soft hover:text-ink"}`}>
                {l.label}
              </Link>
            );
          })}
          <Link to="/contact" className="rounded-full bg-ink px-5 py-2.5 text-[13px] font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-deep">
            Book a session
          </Link>
        </nav>

        <button type="button" onClick={() => setMenuOpen((v) => !v)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}
          className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors hover:border-rose-deep hover:text-rose-deep lg:hidden">
          {menuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-line bg-cream px-5 pb-8 pt-4 lg:hidden" aria-label="Mobile">
          <ul className="space-y-1">
            {NAV.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="block rounded-lg px-3 py-3 font-display text-xl font-semibold text-ink transition-colors hover:bg-rose/15 hover:text-rose-deep">
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link to="/contact" className="inline-block rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream">Book a session</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-ink text-cream/85">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-14 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[20vw] font-bold italic leading-none text-paper/[0.04]">
        tender light
      </div>
      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 md:pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-script text-3xl text-rose">{SITE.script}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              A journal for the in-between season — after the ring, before the aisle. Poses, outfits, locations and light, written from real sessions.
            </p>
            <div className="mt-6 flex gap-3">
              <a href={SITE.pinterest} target="_blank" rel="noreferrer" aria-label="Tender Light on Pinterest" className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 transition-all duration-300 hover:-translate-y-1 hover:border-rose hover:text-rose">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.6 1.3 1.4 0 .9-.6 2.2-.9 3.4-.2 1 .5 1.8 1.5 1.8 1.8 0 3.2-1.9 3.2-4.7 0-2.4-1.7-4.1-4.2-4.1-2.9 0-4.6 2.2-4.6 4.4 0 .9.3 1.8.8 2.3.1.1.1.2.1.3l-.3 1.2c0 .2-.2.2-.3.1-1.3-.6-2.1-2.4-2.1-3.9 0-3.2 2.3-6.2 6.8-6.2 3.5 0 6.3 2.5 6.3 5.9 0 3.5-2.2 6.4-5.3 6.4-1 0-2-.5-2.3-1.1l-.6 2.4c-.2.9-.8 2-1.2 2.6.9.3 1.9.4 2.9.4 5.5 0 10-4.5 10-10S17.5 2 12 2z" /></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Tender Light on Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 transition-all duration-300 hover:-translate-y-1 hover:border-rose hover:text-rose">
                <Instagram className="h-4 w-4" aria-hidden />
              </a>
              <a href={`mailto:${SITE.email}`} aria-label="Email Tender Light" className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:text-gold">
                <Mail className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/guides" className="link-draw hover:text-cream">All Guides</Link></li>
              <li><Link to="/about" className="link-draw hover:text-cream">About Harper</Link></li>
              <li><Link to="/contact" className="link-draw hover:text-cream">Book a session</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Topic Hubs</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {HUBS.map((h) => (
                <li key={h.slug}><Link to={`/${h.slug}`} className="link-draw hover:text-cream">{h.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">The Love Letter</h3>
            <p className="mb-4 mt-4 text-sm text-cream/60">One pose & one place, every Sunday.</p>
            <NewsletterForm dark />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name} · Made with love in Austin, TX</p>
          <p className="flex flex-wrap items-center gap-4">
            <Link to="/privacy-policy" className="link-draw hover:text-cream">Privacy</Link>
            <Link to="/affiliate-disclosure" className="link-draw hover:text-cream">Affiliate Disclosure</Link>
            <Link to="/editorial-policy" className="link-draw hover:text-cream">Editorial Policy</Link>
            <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" aria-hidden /> {SITE.location}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
