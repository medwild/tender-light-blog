import { Component, useEffect, useRef, useState, type ElementType, type FormEvent, type ReactNode } from "react";
import { Aperture, Check, ChevronRight } from "lucide-react";
import { Link } from "../lib/router";

/** Scroll-reveal wrapper — honors prefers-reduced-motion via CSS. */
export function Reveal({
  children, delay = 0, className = "", as: Tag = "div" as ElementType,
}: { children: ReactNode; delay?: number; className?: string; as?: ElementType }) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const t = window.setTimeout(() => setVisible(true), delay);
      return () => window.clearTimeout(t);
    }
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref as never} className={`reveal ${visible ? "is-visible" : ""} ${className}`} style={{ "--d": `${delay}ms` } as React.CSSProperties}>
      {children}
    </Tag>
  );
}

/** "The Love Letter" — email capture with validation + success state. */
export function NewsletterForm({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setError("That address doesn't look quite right — mind checking it?");
      return;
    }
    setError("");
    setDone(true);
  };

  if (done) {
    return (
      <div role="status" className={`flex items-center gap-3 rounded-xl border px-5 py-4 ${dark ? "border-gold/40 bg-cream/5 text-cream" : "border-sage/50 bg-sage/15 text-ink"}`}>
        <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${dark ? "bg-gold text-ink" : "bg-sage-deep text-cream"}`}>
          <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden />
        </span>
        <p className="text-sm leading-relaxed"><strong className="font-semibold">You're on the list.</strong> The next Love Letter lands Sunday — one pose, one place, zero spam.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate>
      <div className={`flex flex-col gap-2 rounded-xl border p-2 sm:flex-row sm:items-center ${dark ? "border-gold/30 bg-cream/5" : "border-line bg-paper"}`}>
        <label htmlFor={dark ? "nl-dark" : "nl-light"} className="sr-only">Email address</label>
        <input
          id={dark ? "nl-dark" : "nl-light"}
          type="email" required value={email}
          onChange={(e) => { setEmail(e.target.value); if (error) setError(""); }}
          placeholder="you@example.com"
          className={`w-full flex-1 bg-transparent px-4 py-2.5 text-sm outline-none ${dark ? "text-cream placeholder:text-cream/40" : "text-ink placeholder:text-ink-faint"}`}
        />
        <button type="submit" className={`shrink-0 rounded-lg px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${dark ? "bg-gold text-ink hover:bg-rose" : "bg-ink text-cream hover:bg-rose-deep"}`}>
          Send me love letters
        </button>
      </div>
      {error && <p role="alert" className={`mt-2 text-sm ${dark ? "text-rose" : "text-rose-deep"}`}>{error}</p>}
      <p className={`mt-3 text-xs ${dark ? "text-cream/50" : "text-ink-faint"}`}>One letter a week · unsubscribe anytime · 4,200 couples already reading</p>
    </form>
  );
}

export interface Crumb { name: string; path: string; }

/** Visual breadcrumb trail (BreadcrumbList JSON-LD emitted by the route SEO effect). */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-[13px] tracking-wide text-ink-faint">
        {items.map((crumb, i) => {
          const last = i === items.length - 1;
          return (
            <li key={crumb.path + crumb.name} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-gold" aria-hidden />}
              {last
                ? <span aria-current="page" className="font-medium text-ink">{crumb.name}</span>
                : <Link to={crumb.path} className="link-draw hover:text-ink">{crumb.name}</Link>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

interface EBProps { children: ReactNode; }
interface EBState { error: Error | null; }

/** Error boundary: a render crash shows a styled diagnostic, never a blank page. */
export class ErrorBoundary extends Component<EBProps, EBState> {
  state: EBState = { error: null };
  static getDerivedStateFromError(error: Error): EBState { return { error }; }
  componentDidCatch(error: Error, info: React.ErrorInfo) { console.error("[tender-light] render error:", error, info); }

  render() {
    if (this.state.error) {
      return (
        <div className="mx-auto max-w-xl px-6 py-28 text-center">
          <Aperture className="mx-auto h-10 w-10 text-rose-deep" aria-hidden />
          <h1 className="mt-5 font-display text-4xl font-bold text-ink">This frame didn't develop</h1>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Something went wrong while rendering the journal. A reload usually fixes it.
          </p>
          <pre className="mt-6 overflow-auto rounded-lg border border-line bg-cream px-4 py-3 text-left text-xs text-rose-deep">
            {this.state.error.message}
          </pre>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-7 rounded-full bg-ink px-7 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-deep"
          >
            Reload the journal
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
