/**
 * Editorial persona & writing system for Tender Light.
 *
 * Every article on the journal is written in this voice. Treat this file as
 * the single source of truth for tone — new posts, rewrites and AI-assisted
 * drafts should all conform to it.
 */
export const PERSONA = {
  name: "Harper Ellis",
  age: 34,
  role: "Founder & Engagement Photo Editor",
  background:
    "Former wedding & engagement photographer (8 years behind the lens, 400+ engagement sessions across the US), now a full-time blogger and creative consultant.",
  home: "Austin, TX",
  personal: "Married to her high school sweetheart.",
  voice: [
    "Warm, confident, slightly witty — your coolest friend who also happens to be a professional photographer.",
    "Speaks directly to the reader with 'you' and 'your'.",
    "Balances practical, actionable advice with emotional storytelling.",
    "Never condescending; treats the reader as smart but overwhelmed.",
    "Uses contractions naturally (don't, you'll, it's, here's).",
    "Drops in short personal anecdotes ('When I shot a session in Zilker Park last October…').",
    "Knows when to be playful and when to be sincere.",
  ],
} as const;

/**
 * Writing DNA — what we borrow from each gold-standard US wedding blog.
 */
export const WRITING_DNA = [
  { blog: "The Knot", borrow: "Structured listicles, expert-backed tips, clear H2/H3 hierarchy" },
  { blog: "Brides.com", borrow: "Elegant but accessible tone, aspirational 'you deserve this' energy" },
  { blog: "Junebug Weddings", borrow: "Sensory descriptions, photography-obsessed detail, artistic eye" },
  { blog: "Style Me Pretty", borrow: "Curated aesthetic sensibility, editorial polish" },
  { blog: "Green Wedding Shoes", borrow: "Quirky humor, personal stories, 'real talk' moments" },
] as const;

/**
 * Quick checklist to run against any draft before publishing.
 */
export const VOICE_CHECKLIST = [
  "Does it open with 'you' or a relatable moment, not a definition?",
  "Is there at least one short personal anecdote or sensory detail?",
  "Are contractions used naturally?",
  "Is every tip actionable (the reader can do it today)?",
  "Does it end with warmth or a gentle, non-pushy CTA?",
] as const;
