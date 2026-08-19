import { Link } from "../../lib/router";
import { CATEGORIES, sortedPosts } from "../../content/posts";
import { SITE } from "../../lib/constants";
import NewsletterForm from "../ui/NewsletterForm";
import { Heart, Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const latest = sortedPosts().slice(0, 3);
  return (
    <footer className="relative overflow-hidden bg-ink text-cream/85">
      {/* Oversized ghost wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[22vw] font-bold italic leading-none text-paper/[0.04]"
      >
        tender light
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 md:pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-script text-3xl text-rose">{SITE.script}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              A journal for the in-between season — after the ring, before the aisle.
              Poses, outfits, locations and light, written from real sessions.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Tender Light on Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 transition-all duration-300 hover:-translate-y-1 hover:border-rose hover:text-rose"
              >
                <Instagram className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                aria-label="Email Tender Light"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:text-gold"
              >
                <Mail className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/blog" className="link-draw hover:text-cream">The Journal</Link></li>
              <li><Link to="/about" className="link-draw hover:text-cream">About Harper</Link></li>
              <li><Link to="/contact" className="link-draw hover:text-cream">Book a session</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Categories</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link to={`/category/${c.slug}`} className="link-draw hover:text-cream">
                    {c.name}
                  </Link>
                </li>
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
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} {SITE.name} · Made with
            <Heart className="h-3.5 w-3.5 fill-rose text-rose" aria-label="love" /> in Austin
          </p>
          <p className="flex items-center gap-4">
            {latest.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="link-draw hidden truncate hover:text-cream md:inline">
                {p.title.split(":")[0]}
              </Link>
            ))}
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" aria-hidden /> {SITE.location}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
