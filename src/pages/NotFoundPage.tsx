import { Link } from "../lib/router";
import Reveal from "../components/ui/Reveal";

/** 404 — out-of-focus frame metaphor. */
export default function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-5 pb-28 pt-40 text-center sm:px-8">
      <Reveal>
        <p className="font-script text-3xl text-rose-deep">this frame didn't develop</p>
        <h1 className="mt-3 font-display text-7xl font-bold tracking-tight sm:text-8xl">
          4<em className="italic text-rose-deep">0</em>4
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
          The page you're looking for was either never shot, or it washed out in
          the darkroom. The journal, however, is fully developed.
        </p>
      </Reveal>
      <Reveal delay={150} className="mt-9 flex flex-wrap justify-center gap-4">
        <Link
          to="/"
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold tracking-wide text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-deep"
        >
          Back to the cover
        </Link>
        <Link
          to="/blog"
          className="rounded-full border border-ink px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-cream"
        >
          Open the journal
        </Link>
      </Reveal>
    </div>
  );
}
