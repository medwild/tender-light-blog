import { useState } from "react";
import { Check, Link2, Mail, MessageCircle } from "lucide-react";

/** Hand-drawn Pinterest mark (the niche's favorite share target). */
const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
    <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.6 1.3 1.4 0 .9-.6 2.2-.9 3.4-.2 1 .5 1.9 1.5 1.9 1.8 0 3.2-1.9 3.2-4.7 0-2.4-1.7-4.1-4.2-4.1-2.9 0-4.6 2.2-4.6 4.4 0 .9.3 1.8.8 2.3.1.1.1.2.1.3l-.3 1.1c0 .2-.2.2-.3.1-1.2-.6-2-2.4-2-3.9 0-3.2 2.3-6.1 6.6-6.1 3.5 0 6.2 2.5 6.2 5.8 0 3.4-2.2 6.2-5.2 6.2-1 0-2-.5-2.3-1.1l-.6 2.4c-.2.9-.8 2-1.2 2.7.9.3 1.9.4 2.9.4 5.5 0 10-4.5 10-10S17.5 2 12 2Z" />
  </svg>
);
import { shareUrls } from "../../lib/constants";

/** Social share row: Pinterest-first (photography niche) + copy-link feedback. */
export default function ShareButtons({ title, path, image }: { title: string; path: string; image: string }) {
  const [copied, setCopied] = useState(false);
  const url = `https://tenderlight.journal${path}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const btn =
    "grid h-10 w-10 place-items-center rounded-full border border-line text-ink-soft transition-all duration-300 hover:-translate-y-1 hover:border-rose-deep hover:bg-rose-deep hover:text-cream";

  return (
    <div className="flex items-center gap-2.5" role="group" aria-label="Share this article">
      <a href={shareUrls.pinterest(url, image)} target="_blank" rel="noreferrer" aria-label="Share on Pinterest" className={btn}>
        <PinterestIcon />
      </a>
      <a href={shareUrls.x(url, title)} target="_blank" rel="noreferrer" aria-label="Share on X" className={btn}>
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L1.6 2H8l4.4 5.9L18.9 2Zm-1.1 18h1.7L7.1 3.7H5.3L17.8 20Z" />
        </svg>
      </a>
      <a href={shareUrls.whatsapp(url)} target="_blank" rel="noreferrer" aria-label="Share on WhatsApp" className={btn}>
        <MessageCircle className="h-4 w-4" aria-hidden />
      </a>
      <a href={shareUrls.email(url, title)} aria-label="Share by email" className={btn}>
        <Mail className="h-4 w-4" aria-hidden />
      </a>
      <button
        type="button"
        onClick={copy}
        aria-label="Copy link"
        className={`${btn} ${copied ? "border-sage-deep bg-sage-deep text-cream" : ""}`}
      >
        {copied ? <Check className="h-4 w-4" aria-hidden /> : <Link2 className="h-4 w-4" aria-hidden />}
      </button>
      {copied && (
        <span role="status" className="text-xs font-semibold text-sage-deep">
          Copied!
        </span>
      )}
    </div>
  );
}
