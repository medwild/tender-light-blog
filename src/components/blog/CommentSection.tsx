import { useState, type FormEvent } from "react";
import { MessageCircle, Send } from "lucide-react";

interface Comment {
  name: string;
  text: string;
  time: string;
}

const seedComments: Comment[] = [
  {
    name: "Lauren & Josh",
    text: "Used the forehead-touch + walk-away combo last weekend at Lake Hefner — our photographer said we were the most relaxed couple she'd shot this year. The breathing trick is real!",
    time: "3 days ago",
  },
  {
    name: "Priya M.",
    text: "The 70/20/10 outfit rule saved us from matching white tees. Forever grateful.",
    time: "1 week ago",
  },
];

/**
 * Comments — local placeholder wired to state, ready to be swapped
 * for a real backend (Supabase/Giscus) without touching the layout.
 */
export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>(seedComments);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || text.trim().length < 4) {
      setError("Add your name and a few words — that's all we ask.");
      return;
    }
    setComments((c) => [{ name: name.trim(), text: text.trim(), time: "just now" }, ...c]);
    setName("");
    setText("");
    setError("");
  };

  return (
    <section aria-labelledby="comments-heading" className="mt-16 rounded-xl border border-line bg-paper p-7 sm:p-8">
      <h2 id="comments-heading" className="flex items-center gap-2.5 font-display text-2xl font-bold">
        <MessageCircle className="h-6 w-6 text-rose-deep" aria-hidden />
        Love notes from couples
        <span className="rounded-full bg-rose/25 px-3 py-0.5 text-sm font-semibold text-rose-deep">{comments.length}</span>
      </h2>
      <p className="mt-2 text-sm text-ink-faint">
        Comments run in local demo mode — plug your favorite backend here later.
      </p>

      <form onSubmit={submit} className="mt-6 grid gap-3 sm:grid-cols-[220px_1fr]">
        <div>
          <label htmlFor="comment-name" className="sr-only">Your name</label>
          <input
            id="comment-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="You (& your person)"
            className="w-full rounded-lg border border-line bg-cream px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold"
          />
        </div>
        <div className="flex gap-3">
          <label htmlFor="comment-text" className="sr-only">Your comment</label>
          <input
            id="comment-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Tell us how your session went…"
            className="w-full flex-1 rounded-lg border border-line bg-cream px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold"
          />
          <button
            type="submit"
            aria-label="Post comment"
            className="grid h-11 w-12 shrink-0 place-items-center rounded-lg bg-ink text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-deep"
          >
            <Send className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </form>
      {error && <p role="alert" className="mt-2 text-sm text-rose-deep">{error}</p>}

      <ul className="mt-8 space-y-5">
        {comments.map((c, i) => (
          <li key={i} className="flex gap-4 border-b border-line/70 pb-5 last:border-0">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold/25 font-display text-sm font-bold italic text-gold-deep">
              {c.name.slice(0, 1)}
            </span>
            <div>
              <p className="text-sm font-semibold">
                {c.name} <span className="ml-2 text-xs font-normal text-ink-faint">{c.time}</span>
              </p>
              <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{c.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
