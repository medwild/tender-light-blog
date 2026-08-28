import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";

/** "The Love Letter" — email capture with inline validation & success state. */
export default function NewsletterForm({ dark = false }: { dark?: boolean }) {
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
      <div
        role="status"
        className={`flex items-center gap-3 rounded-xl border px-5 py-4 ${
          dark ? "border-gold/40 bg-ink-soft/40 text-cream" : "border-sage/50 bg-sage/15 text-ink"
        }`}
      >
        <span className={`grid h-8 w-8 place-items-center rounded-full ${dark ? "bg-gold text-ink" : "bg-sage-deep text-cream"}`}>
          <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden />
        </span>
        <p className="text-sm leading-relaxed">
          <strong className="font-semibold">You're on the list.</strong> The next Love Letter
          lands in your inbox this Sunday — one pose, one location, zero spam.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate>
      <div
        className={`flex flex-col gap-2 rounded-xl border p-2 sm:flex-row sm:items-center ${
          dark ? "border-gold/30 bg-paper/5" : "border-line bg-paper"
        }`}
      >
        <label htmlFor={dark ? "nl-dark" : "nl-light"} className="sr-only">
          Email address
        </label>
        <input
          id={dark ? "nl-dark" : "nl-light"}
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          placeholder="you@example.com"
          className={`w-full flex-1 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:${dark ? "text-cream/40" : "text-ink-faint"}`}
        />
        <button
          type="submit"
          className={`shrink-0 rounded-lg px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${
            dark
              ? "bg-gold text-ink hover:bg-rose"
              : "bg-ink text-cream hover:bg-rose-deep"
          }`}
        >
          Send me love letters
        </button>
      </div>
      {error && (
        <p role="alert" className={`mt-2 text-sm ${dark ? "text-rose" : "text-rose-deep"}`}>
          {error}
        </p>
      )}
      <p className={`mt-3 text-xs ${dark ? "text-cream/50" : "text-ink-faint"}`}>
        One letter a week · unsubscribe anytime · 4,200 couples already reading
      </p>
    </form>
  );
}
