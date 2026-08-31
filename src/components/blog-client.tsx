"use client";

import { useEffect, useState } from "react";
import { Check, Pin } from "lucide-react";
import type { TocItem } from "../content/types";
import { postPath } from "../lib/content";
import { SITE } from "../lib/constants";

/* ————— FAQ accordion ————— */
export function FaqSection({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line rounded-xl border border-line bg-paper">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button type="button" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} aria-controls={`faq-${i}`}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-cream/70">
              <span className={`font-display text-[1.05rem] font-semibold transition-colors ${isOpen ? "text-rose-deep" : "text-ink"}`}>{item.q}</span>
              <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${isOpen ? "rotate-180 border-rose-deep bg-rose-deep text-cream" : "border-line text-ink-faint"}`}>
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="m6 9 6 6 6-6" /></svg>
              </span>
            </button>
            <div id={`faq-${i}`} className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden"><p className="px-6 pb-6 text-[15px] leading-relaxed text-ink-soft">{item.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ————— Table of contents with scroll-spy ————— */
export function TableOfContents({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  useEffect(() => {
    const els = items.map((it) => document.getElementById(it.id)).filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  const jump = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 110, behavior: "smooth" });
  };

  return (
    <nav aria-label="Table of contents" className="sticky top-28">
      <p className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-ink-faint">
        <span className="h-px w-6 bg-gold" aria-hidden /> In this guide
      </p>
      <ul className="space-y-1 border-l border-line">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <button type="button" onClick={() => jump(item.id)} aria-current={isActive ? "true" : undefined}
                className={`-ml-px block w-full border-l-2 py-1.5 pr-2 text-left text-[13.5px] leading-snug transition-all duration-300 ${item.depth === 3 ? "pl-7" : "pl-4"} ${isActive ? "border-rose-deep font-semibold text-rose-deep" : "border-transparent text-ink-soft hover:border-gold hover:text-ink"}`}>
                {item.text}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/* ————— Share buttons ————— */
export function ShareButtons({ post }: { post: { slug: string; featuredImage: string } }) {
  const [copied, setCopied] = useState(false);
  const url = `${SITE.url}${postPath(post.slug)}/`;
  const copy = async () => {
    try { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { /* noop */ }
  };
  const btn = "grid h-10 w-10 place-items-center rounded-full border border-line text-ink-soft transition-all duration-300 hover:-translate-y-1 hover:border-rose-deep hover:bg-rose-deep hover:text-cream";
  return (
    <div className="flex items-center gap-2.5" role="group" aria-label="Share this article">
      <a href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(post.featuredImage)}`} target="_blank" rel="noreferrer" aria-label="Share on Pinterest" className={btn}>
        <Pin className="h-4 w-4" aria-hidden />
      </a>
      <button type="button" onClick={copy} aria-label="Copy link" className={`${btn} ${copied ? "border-sage-deep bg-sage-deep text-cream" : ""}`}>
        {copied ? <Check className="h-4 w-4" aria-hidden /> : <span className="text-sm font-bold">⧉</span>}
      </button>
      {copied && <span role="status" className="text-xs font-semibold text-sage-deep">Copied!</span>}
    </div>
  );
}
