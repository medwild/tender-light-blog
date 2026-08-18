import { useState, type FormEvent } from "react";
import { CalendarHeart, Clock3, Instagram, Mail, MapPin, Send } from "lucide-react";
import { SITE } from "../lib/constants";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import Reveal from "../components/ui/Reveal";
import FaqSection from "../components/blog/FaqSection";
import { Link } from "../lib/router";

const contactFaq = [
  { q: "How far in advance should we book?", a: "4–8 weeks is comfortable. Golden-hour weekend slots in April–June and September–October fill first — for those, aim for 10–12 weeks." },
  { q: "Do you travel outside Oklahoma City?", a: "Yes — anywhere within ~2 hours is included. Beyond that, we split the drive into a small travel fee and turn it into a scouting adventure." },
  { q: "What happens if it rains?", a: "We pick a new time within 14 days at no cost, or keep the date and shoot the moody version — grey skies are genuinely some of my favorite frames." },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", date: "", message: "" });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (error) setError("");
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (form.name.trim().length < 2) return setError("Tell us both your names — we like to know who's who.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) return setError("That email doesn't look quite right.");
    if (form.message.trim().length < 10) return setError("Give us at least a sentence about your plans.");
    setError("");
    setSent(true);
  };

  const inputCls =
    "w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm outline-none transition-colors duration-300 focus:border-gold focus:ring-2 focus:ring-gold/25";

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-28 sm:px-8 md:pt-36">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />

      <Reveal className="mb-14 max-w-2xl">
        <p className="font-script text-3xl text-rose-deep">let's make something tender</p>
        <h1 className="mt-2 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl">
          Book a <em className="italic text-rose-deep">session</em>, ask anything
        </h1>
        <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
          Dates, locations, outfits, awkwardness levels — all fair questions.
          I answer every note personally, usually within 48 hours.
        </p>
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-12">
        {/* Info column */}
        <div className="space-y-5 lg:col-span-4">
          {[
            { icon: <Mail className="h-5 w-5" aria-hidden />, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
            { icon: <Instagram className="h-5 w-5" aria-hidden />, label: "Instagram", value: SITE.instagram, href: "https://instagram.com" },
            { icon: <MapPin className="h-5 w-5" aria-hidden />, label: "Studio", value: SITE.location, href: undefined },
            { icon: <Clock3 className="h-5 w-5" aria-hidden />, label: "Replies within", value: "48 hours, promise", href: undefined },
          ].map((row, i) => (
            <Reveal key={row.label} delay={i * 70}>
              {row.href ? (
                <a
                  href={row.href}
                  target={row.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-line bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-rose-deep hover:shadow-[0_18px_40px_-22px_rgba(157,90,103,0.5)]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-rose/25 text-rose-deep transition-colors duration-300 group-hover:bg-rose-deep group-hover:text-cream">{row.icon}</span>
                  <span>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-ink-faint">{row.label}</span>
                    <span className="mt-0.5 block font-display text-lg font-semibold">{row.value}</span>
                  </span>
                </a>
              ) : (
                <div className="flex items-center gap-4 rounded-xl border border-line bg-paper p-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-rose/25 text-rose-deep">{row.icon}</span>
                  <span>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-ink-faint">{row.label}</span>
                    <span className="mt-0.5 block font-display text-lg font-semibold">{row.value}</span>
                  </span>
                </div>
              )}
            </Reveal>
          ))}
          <Reveal delay={300} className="rounded-xl bg-ink p-6 text-cream">
            <CalendarHeart className="h-6 w-6 text-rose" aria-hidden />
            <p className="mt-3 font-display text-xl font-bold">Spring 2026 is 70% booked</p>
            <p className="mt-2 text-sm leading-relaxed text-cream/70">
              Weekend golden-hour slots go first. If you have a date in mind, send it — holding a date costs nothing.
            </p>
          </Reveal>
        </div>

        {/* Form column */}
        <Reveal delay={120} className="lg:col-span-8">
          {sent ? (
            <div role="status" className="flex h-full flex-col items-center justify-center rounded-xl border border-sage/50 bg-sage/12 p-12 text-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-sage-deep text-cream">
                <Send className="h-7 w-7" aria-hidden />
              </span>
              <h2 className="mt-6 font-display text-3xl font-bold">Your note is on its way ✳</h2>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
                Thank you, {form.name.split(" ")[0] || "friend"} — I'll reply to{" "}
                <strong className="font-semibold text-ink">{form.email}</strong> within 48 hours.
                Meanwhile, the 30-pose guide is a lovely way to wait.
              </p>
              <Link to="/blog/30-engagement-photo-poses-couples" className="link-draw mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-rose-deep">
                Read the pose guide →
              </Link>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="rounded-xl border border-line bg-paper p-7 sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="mb-1.5 block text-[13px] font-semibold">Both your names</label>
                  <input id="c-name" value={form.name} onChange={set("name")} placeholder="Ana & Theo" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="c-email" className="mb-1.5 block text-[13px] font-semibold">Email</label>
                  <input id="c-email" type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" className={inputCls} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="c-date" className="mb-1.5 block text-[13px] font-semibold">Dream session date <span className="font-normal text-ink-faint">(rough is fine)</span></label>
                  <input id="c-date" value={form.date} onChange={set("date")} placeholder="e.g. a Saturday in late April" className={inputCls} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="c-msg" className="mb-1.5 block text-[13px] font-semibold">Tell me about you two</label>
                  <textarea
                    id="c-msg"
                    rows={5}
                    value={form.message}
                    onChange={set("message")}
                    placeholder="How you met, where you're thinking, and how camera-shy you are on a scale of 1–10 (no judgment, most couples say 8)."
                    className={`${inputCls} resize-none`}
                  />
                </div>
              </div>
              {error && <p role="alert" className="mt-4 rounded-lg bg-rose/15 px-4 py-2.5 text-sm font-medium text-rose-deep">{error}</p>}
              <button
                type="submit"
                className="group mt-7 inline-flex items-center gap-2.5 rounded-full bg-ink px-8 py-4 text-sm font-semibold tracking-wide text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-deep hover:shadow-[0_18px_40px_-16px_rgba(157,90,103,0.6)]"
              >
                Send the note
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" aria-hidden />
              </button>
            </form>
          )}

          <div className="mt-10">
            <h2 className="mb-4 font-display text-2xl font-bold">Before you write…</h2>
            <FaqSection items={contactFaq} />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
