/**
 * Topical-authority hubs (hub-and-spoke silos).
 *
 * Each hub targets ONE primary keyword/intent. Spokes are the existing
 * in-depth articles; the hub is the keyword-optimized landing page that
 * organizes them and earns the head-adjacent traffic. Hubs carry their own
 * answer-first content so they are never thin, and cross-link to each other
 * to reinforce the topical map (internal "maillage").
 */
export interface Hub {
  slug: string;
  name: string;
  keyword: string;
  volume: string;
  kd: string;
  metaTitle: string;
  metaDescription: string;
  lede: string; // answer-first opening (GEO-extractable)
  harperNote: string; // short first-person aside
  accent: "rose" | "gold" | "sage" | "blush";
  spokes: string[]; // post slugs, in priority order
  related: string[]; // sibling hub slugs
  faq: { q: string; a: string }[];
  /** Pillar hubs render the full long-form pillar template (Part 5 of the plan). */
  pillar?: boolean;
  secondaryKeywords?: string[];
}

export const HUBS: Hub[] = [
  {
    slug: "engagement-photo-ideas",
    name: "Engagement Photo Ideas",
    keyword: "engagement photo ideas",
    volume: "3,600/mo",
    kd: "11",
    pillar: true,
    secondaryKeywords: [
      "engagement photos ideas",
      "ideas for engagement pics",
      "engagement picture ideas",
      "ideas for engagement photo shoot",
      "engagement photoshoot ideas",
      "engagement photo inspiration",
    ],
    metaTitle: "Engagement Photo Ideas: 100+ Poses, Locations & Themes (2026)",
    metaDescription:
      "100+ engagement photo ideas for couples — by style, location, season and mood, with the poses, outfits and themes couples actually recreate.",
    lede: "The best engagement photo ideas share one thing: they look like you on a good day, not like a catalogue. Start with a mood — classic, casual or outdoor — then let the pose, outfit and location follow from that. Below, every idea we've tested across 400+ sessions, organized so you can build a full shot list in ten minutes.",
    harperNote: "Couples who pick a mood first and poses second always end up with a gallery that feels like one story, not a pile of random shots.",
    accent: "rose",
    spokes: [
      "casual-engagement-photo-ideas",
      "unique-engagement-photo-ideas",
      "cute-engagement-photo-ideas",
      "romantic-engagement-photo-ideas",
      "fun-engagement-photo-ideas",
      "classic-engagement-photo-ideas",
      "candid-engagement-photo-ideas",
      "elegant-engagement-photo-ideas",
      "vintage-engagement-photo-ideas",
      "night-engagement-photo-ideas",
      "diy-engagement-photo-ideas",
      "engagement-photo-ideas-outside",
      "golden-hour-photography-tips-couples",
      "engagement-photo-checklist",
      "how-to-feel-natural-in-front-of-camera",
      "30-engagement-photo-poses-couples",
    ],
    related: ["engagement-photo-poses", "engagement-photo-locations", "engagement-photo-outfits"],
    faq: [
      {
        q: "How many engagement photo ideas should we plan for one session?",
        a: "Plan 8–12 starting ideas for a 60-minute session. Each idea produces 3–5 keeper frames once you add movement and in-between moments, so 10 ideas easily fills a full gallery without feeling rushed.",
      },
      {
        q: "What's the most flattering engagement photo idea for camera-shy couples?",
        a: "Walking frames. Give yourselves somewhere to go — a path, a bridge, a café window — and the camera catches you moving instead of performing. It's the single easiest idea for couples who hate posing.",
      },
      {
        q: "Should our engagement photo ideas match our wedding theme?",
        a: "Echo it, don't replicate it. If your wedding is sage-and-cream, a dusty-blue engagement palette gives you range across both galleries instead of one repeated look.",
      },
    ],
  },
  {
    slug: "engagement-photo-poses",
    name: "Engagement Photo Poses",
    keyword: "engagement photo poses",
    volume: "1,900/mo",
    kd: "14",
    pillar: true,
    secondaryKeywords: [
      "engagement poses for couples",
      "natural engagement photo poses",
      "romantic engagement poses",
      "engagement poses for camera shy couples",
      "ring engagement photo poses",
      "proposal poses",
    ],
    metaTitle: "Engagement Photo Poses: Natural & Camera-Shy Friendly Ideas",
    metaDescription:
      "Engagement photo poses that don't feel awkward — natural, romantic, ring-detail and camera-shy friendly poses, with the exact direction photographers give.",
    lede: "A great engagement pose is just a starting position — the photos you love are the two seconds after it settles. The most flattering poses give your hands a job and your body a slight angle to the camera. Here's the full library we direct on every session, with the exact words to make each one feel natural.",
    harperNote: "I never say 'look natural.' I give a task — fix his collar, whisper a bad joke — and natural happens on its own.",
    accent: "gold",
    spokes: [
      "natural-engagement-photo-poses",
      "ring-engagement-photo-poses",
      "outdoor-engagement-photo-poses",
      "couple-engagement-poses",
      "camera-shy-engagement-poses",
      "proposal-poses",
      "30-engagement-photo-poses-couples",
      "classic-engagement-photos",
      "how-to-feel-natural-in-front-of-camera",
    ],
    related: ["engagement-photo-ideas", "engagement-photo-outfits", "save-the-date-photos"],
    faq: [
      {
        q: "How do we pose for engagement photos without looking awkward?",
        a: "Start every pose from a task, not a statue — fix his collar, share a whisper, walk toward a landmark. Poses built on a small action settle into natural frames within seconds, which is why photographers call them prompts instead of poses.",
      },
      {
        q: "What are the most flattering engagement poses for couples?",
        a: "The forehead touch, the waist-hold mid-laugh and walking away hand-in-hand flatter almost every body type. All three close the gap between you, give hands a job and soften shoulders — the three things that make a pose read as flattering.",
      },
      {
        q: "How long should we hold an engagement pose?",
        a: "About ten seconds. The first three are stiff; the last seven are gold. Ask your photographer to shoot the whole sequence rather than the setup, because the settle-in frames are the keepers.",
      },
      {
        q: "What poses work best for camera-shy couples?",
        a: "Movement and closed eyes. Walking frames, the forehead touch and slow-dance-without-music remove the pressure of performing for the lens. In eight of ten sessions, the camera-shy couple is fully relaxed by minute ten.",
      },
      {
        q: "Should we include ring detail poses in our engagement session?",
        a: "Yes — they're the frames your save-the-date and wedding website will lean on. Two or three minutes is enough: hands together, ring to camera, and the hand-on-chest close-up while you're laughing.",
      },
    ],
  },
  {
    slug: "engagement-photo-locations",
    name: "Outdoor Engagement Photo Ideas",
    keyword: "outdoor engagement photo ideas",
    volume: "320/mo",
    kd: "1",
    metaTitle: "Outdoor Engagement Photo Ideas: 21 Spots & Timing Tips",
    metaDescription:
      "Outdoor engagement photo ideas for every season — meadows, creeks, tree lines and city steps, with the golden-hour timing that makes them glow.",
    lede: "The best outdoor engagement photo ideas use the setting as a co-star: open fields for movement, water for reflections, tree lines for soft dappled light. Outside solves lighting, variety and cost in one choice. These 21 ideas are grouped by terrain so you can build a session around what's near you.",
    harperNote: "Golden hour is a schedule, not a filter. Arrive 75 minutes before sunset and the last 20 minutes do the heavy lifting.",
    accent: "sage",
    spokes: [
      "engagement-photo-ideas-outside",
      "top-engagement-photo-locations-oklahoma",
      "golden-hour-photography-tips-couples",
    ],
    related: ["engagement-photo-ideas", "engagement-photo-poses", "engagement-photo-outfits"],
    faq: [
      {
        q: "What's the best time of day for outdoor engagement photos?",
        a: "The last 60–90 minutes before sunset for warm, dramatic light. Sunrise gives softer tones and empty locations — worth the alarm if you hate crowds.",
      },
      {
        q: "What happens if it rains on our outdoor session?",
        a: "Reschedule, or lean in — umbrella frames and after-rain reflections are keeper material. Overcast is a giant softbox, so a grey sky is a feature, not a cancellation.",
      },
      {
        q: "Do we need permits for outdoor engagement photos?",
        a: "For a couple and one photographer, almost never. Tripods, assistants or commercial styling can trigger permits in city parks, and state parks charge per-vehicle entry. Verify the specific spot a week ahead.",
      },
    ],
  },
  {
    slug: "engagement-photo-outfits",
    name: "What to Wear for Engagement Photos",
    keyword: "what to wear for engagement photos",
    volume: "TBD",
    kd: "TBD",
    metaTitle: "What to Wear for Engagement Photos: Outfit Formulas (2026)",
    metaDescription:
      "What to wear for engagement photos — colors that flatter on camera, what to avoid, seasonal outfit formulas and the 70/20/10 styling rule.",
    lede: "Wear what you'd choose for a nice dinner, in soft muted tones that keep the eye on your faces: cream, oat, terracotta, sage. Coordinate palettes rather than matching outfits — the 70/20/10 rule (70% shared neutral, 20% accent, 10% texture) is the fastest way to look put-together without looking twinned.",
    harperNote: "I've never once regretted a couple in muted tones. I've regretted neon, logos and tiny patterns every single time.",
    accent: "blush",
    spokes: ["best-outfits-engagement-photos", "casual-engagement-photo-ideas"],
    related: ["engagement-photo-ideas", "engagement-photo-poses", "engagement-photo-locations"],
    faq: [
      {
        q: "What colors should we wear for engagement photos?",
        a: "Soft, muted tones flatter every skin tone and photograph warmly: cream, oat, camel, sage, dusty blue, terracotta. Avoid neon, big logos and tiny tight patterns, which date a photo or moiré on camera.",
      },
      {
        q: "Should we match outfits for engagement photos?",
        a: "Coordinate, don't match. Share a neutral base and one accent color between you, then add texture. Matching outfits read like a uniform; coordinating outfits read like a life together.",
      },
      {
        q: "When should we finalize our engagement outfits?",
        a: "Two weeks before the session, with a mirror photo test in similar light. Send the mirror shots to your photographer — most will happily veto a piece that fights the location.",
      },
    ],
  },
  {
    slug: "save-the-date-photos",
    name: "Save the Date & Proposal",
    keyword: "save the date photoshoot ideas",
    volume: "110/mo",
    kd: "14",
    metaTitle: "Save the Date Photoshoot Ideas: Frames Made for Cards",
    metaDescription:
      "Save the date photoshoot ideas — the warm, unstiff engagement frames that fit card layouts, with crops and styling tips for print.",
    lede: "The best save the date photos come from a casual engagement session — warm, unstiff frames that fit a card layout and read as instantly you. Ask your photographer for a horizontal crop for cards and a square crop for your wedding website, and leave generous negative space where your names and date will sit.",
    harperNote: "The frames couples choose for save-the-dates are almost always the laughing, mid-motion ones — never the stiff formal pose. Plan for that.",
    accent: "rose",
    spokes: ["casual-engagement-photo-ideas", "classic-engagement-photos"],
    related: ["engagement-photo-ideas", "engagement-photo-prints", "engagement-photo-outfits"],
    faq: [
      {
        q: "Can we use casual engagement photos for save-the-dates?",
        a: "Yes — they're the best format. Warm, unstiff frames fit card layouts beautifully and guests instantly recognize you. Request a horizontal crop for cards and a square crop for your wedding website.",
      },
      {
        q: "How far in advance should we do a save the date photoshoot?",
        a: "Book it 3–4 months before you plan to mail cards. That leaves room for the session, editing, and card design and printing. Most couples mail save-the-dates 6–8 months before the wedding.",
      },
      {
        q: "What should we leave space for in save the date photos?",
        a: "Negative space. Choose frames with open sky, a plain wall, or soft bokeh on one side — that's where your names, date and website will sit without covering your faces.",
      },
    ],
  },
  {
    slug: "engagement-photo-prints",
    name: "Prints, Gifts & Display",
    keyword: "engagement photo print ideas",
    volume: "TBD",
    kd: "TBD",
    metaTitle: "Engagement Photo Print Ideas: Display Your Session Beautifully",
    metaDescription:
      "Engagement photo print ideas — which frames to print, sizes and finishes that flatter, and easy ways to display your session at home.",
    lede: "Print the frames you actually live with, not just the formal ones: a large hero print for the wall, mid-size pairings for a gallery ledge, and small candid prints for shelves and desks. Matte or lustre finishes flatter golden-hour light better than glossy, and printing in pairs (one close, one wide) keeps a display from feeling flat.",
    harperNote: "Couples reprint the mid-laugh frames far more often than the formal ones. Print what makes you feel something when you walk past it.",
    accent: "gold",
    spokes: ["classic-engagement-photos", "casual-engagement-photo-ideas"],
    related: ["save-the-date-photos", "engagement-photo-ideas"],
    faq: [
      {
        q: "Which engagement photos are worth printing?",
        a: "Print the frames you feel something looking at — usually the candid, mid-laugh ones, plus one strong formal. A good mix is one hero print, two mid-size, and a few small candids.",
      },
      {
        q: "What finish is best for engagement photo prints?",
        a: "Matte or lustre. They flatter golden-hour light, resist glare under home lighting, and age better than glossy, which can look dated and show fingerprints.",
      },
      {
        q: "How do we display engagement photos without it looking cluttered?",
        a: "Group by size: one large hero print, a pair of mid-size prints, and small candids on a ledge or shelf. Odd numbers (3 or 5) and consistent frames keep it curated, not cluttered.",
      },
    ],
  },
];

export const getHub = (slug: string) => HUBS.find((h) => h.slug === slug);

/** Accent → tailwind class maps for hub pages. */
export const HUB_ACCENTS = {
  rose: { text: "text-rose-deep", chip: "bg-rose/25", rule: "bg-rose-deep", ring: "border-rose-deep" },
  gold: { text: "text-gold-deep", chip: "bg-gold/25", rule: "bg-gold-deep", ring: "border-gold-deep" },
  sage: { text: "text-sage-deep", chip: "bg-sage/30", rule: "bg-sage-deep", ring: "border-sage-deep" },
  blush: { text: "text-blush", chip: "bg-blush/25", rule: "bg-blush", ring: "border-blush" },
} as const;
