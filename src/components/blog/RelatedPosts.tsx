import { relatedPosts } from "../../lib/content";
import type { Post } from "../../content/types";
import ArticleCard from "./ArticleCard";
import Reveal from "../ui/Reveal";

/** "Keep reading" — three related guides, same category first. */
export default function RelatedPosts({ post }: { post: Post }) {
  const related = relatedPosts(post, 3);
  return (
    <section aria-labelledby="related-heading" className="mt-20 border-t border-line pt-14">
      <Reveal>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="font-script text-2xl text-rose-deep">keep reading</p>
            <h2 id="related-heading" className="mt-1 font-display text-3xl font-bold">
              More from the journal
            </h2>
          </div>
        </div>
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((p, i) => (
          <ArticleCard key={p.slug} post={p} variant="grid" index={i} delay={i * 90} />
        ))}
      </div>
    </section>
  );
}
