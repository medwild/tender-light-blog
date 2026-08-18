import { Camera, Instagram } from "lucide-react";
import type { Author } from "../../content/types";
import { Link } from "../../lib/router";

/** Author bio block shown under every article. */
export default function AuthorBox({ author }: { author: Author }) {
  return (
    <aside className="mt-14 overflow-hidden rounded-xl border border-line bg-paper">
      <div className="h-1.5 bg-gradient-to-r from-rose via-gold to-sage" aria-hidden />
      <div className="flex flex-col gap-6 p-7 sm:flex-row sm:items-start sm:p-8">
        {author.avatar ? (
          <img
            src={author.avatar}
            alt={`Portrait of ${author.name}`}
            loading="lazy"
            className="h-24 w-24 shrink-0 rounded-full border-2 border-rose/60 object-cover shadow-[0_10px_25px_-12px_rgba(157,90,103,0.5)]"
          />
        ) : (
          <span className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-rose/25 font-display text-3xl font-bold italic text-rose-deep">
            {author.name.split(" ").map((n) => n[0]).join("")}
          </span>
        )}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-deep">Written by</p>
          <h3 className="mt-1.5 font-display text-2xl font-bold">{author.name}</h3>
          <p className="flex items-center gap-1.5 text-sm font-medium text-rose-deep">
            <Camera className="h-4 w-4" aria-hidden /> {author.role}
          </p>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-soft">{author.bio}</p>
          <div className="mt-4 flex flex-wrap gap-3 text-[13px] font-semibold">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-deep hover:text-rose-deep"
            >
              <Instagram className="h-3.5 w-3.5" aria-hidden /> {author.instagram}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-1.5 text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-deep"
            >
              Book with {author.name.split(" ")[0]} →
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
