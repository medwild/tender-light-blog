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
    name: "Engagement Photo Locations",
    keyword: "outdoor engagement photo ideas",
    volume: "320/mo",
    kd: "1",
    pillar: true,
    secondaryKeywords: [
      "outdoor engagement pictures",
      "outside engagement photos",
      "nature engagement session",
      "indoor engagement photo locations",
      "meaningful engagement photo spots",
      "engagement photo spots near me",
    ],
    metaTitle: "Engagement Photo Locations: Outdoor, Indoor & Meaningful Spots",
    metaDescription:
      "The best engagement photo locations — outdoor, indoor, at-home, urban and nature spots, with the light, permit and timing notes from 400+ real sessions.",
    lede: "The right engagement photo location solves three problems at once: light, variety and comfort. Outdoor spots give you golden hour for free, indoor spots give you weatherproof softness, and meaningful spots — your café, your porch, your trail — give the gallery its soul. This scouting journal covers all five terrains, plus the permits, timing and backup plans that keep a session relaxed.",
    harperNote: "I scout every location twice: once for the light, once for the parking. A gorgeous spot with a stressful arrival makes for stiff photos before frame one.",
    accent: "sage",
    spokes: [
      "outdoor-engagement-photo-locations",
      "at-home-engagement-photo-ideas",
      "urban-engagement-photo-ideas",
      "park-garden-engagement-photo-ideas",
      "beach-engagement-photo-ideas",
      "coffee-shop-engagement-photo-ideas",
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
    name: "Engagement Photo Outfits",
    keyword: "what to wear for engagement photos",
    volume: "TBD",
    kd: "TBD",
    pillar: true,
    secondaryKeywords: [
      "engagement photo outfits",
      "casual engagement photo outfits",
      "fall engagement photo outfits",
      "summer engagement photo outfits",
      "spring engagement photo outfits",
      "engagement photo color palette",
      "what to wear for outdoor engagement photos",
    ],
    metaTitle: "What to Wear for Engagement Photos: Outfits by Season & Style",
    metaDescription:
      "What to wear for engagement photos — casual, dressy and seasonal outfit ideas, the colors that flatter on camera, and the couple-coordination rule.",
    lede: "Wear what you'd choose for a nice dinner, in soft muted tones that keep the eye on your faces: cream, oat, terracotta, sage. Coordinate palettes rather than matching outfits — the 70/20/10 rule (70% shared neutral, 20% accent, 10% texture) is the fastest way to look put-together without looking twinned.",
    harperNote: "I've never once regretted a couple in muted tones. I've regretted neon, logos and tiny patterns every single time.",
    accent: "blush",
    spokes: [
      "casual-engagement-photo-outfits",
      "fall-engagement-photo-outfits",
      "summer-engagement-photo-outfits",
      "spring-engagement-photo-outfits",
      "engagement-photo-color-palette",
      "what-to-wear-for-outdoor-engagement-photos",
      "best-outfits-engagement-photos",
      "casual-engagement-photo-ideas",
    ],
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
        q: "Can we wear jeans for engagement photos?",
        a: "Absolutely — dark or mid wash, straight or wide leg, no heavy distressing or loud logos. Pair them with a knit, blouse or blazer to lift the look from errands to smart-casual.",
      },
      {
        q: "What should we wear for outdoor engagement photos?",
        a: "Choose colors that complement, not compete with, the setting: earth tones for fields, muted greens for gardens, soft neutrals for the beach. Comfortable shoes matter more than style when you're walking between spots.",
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
    pillar: true,
    secondaryKeywords: [
      "save the date photo ideas",
      "save the date poses",
      "save the date engagement photos",
      "engagement announcement photos",
      "surprise proposal ideas",
    ],
    metaTitle: "Save the Date Photos & Proposal Ideas: Poses & Themes",
    metaDescription:
      "Save the date photos & proposal ideas — card-ready poses, announcement frames, ring reveals and surprise-proposal setups that photograph beautifully.",
    lede: "The best save the date photos come from a casual engagement session — warm, unstiff frames that fit a card layout and read as instantly you. Ask your photographer for a horizontal crop for cards and a square crop for your wedding website, and leave generous negative space where your names and date will sit.",
    harperNote: "The frames couples choose for save-the-dates are almost always the laughing, mid-motion ones — never the stiff formal pose. Plan for that.",
    accent: "rose",
    spokes: [
      "save-the-date-photo-ideas",
      "save-the-date-poses",
      "engagement-announcement-photo-ideas",
      "surprise-proposal-ideas",
      "proposal-poses",
      "ring-engagement-photo-poses",
      "casual-engagement-photo-ideas",
      "classic-engagement-photos",
    ],
    related: ["engagement-photo-ideas", "engagement-photo-prints", "engagement-photo-outfits"],
    faq: [
      {
        q: "How far in advance should we take save the date photos?",
        a: "Book the shoot 3–4 months before you plan to mail cards. That leaves time for the session, editing, and card design and printing. Most couples mail save-the-dates 6–8 months before the wedding, which puts the shoot roughly 9–12 months out.",
      },
      {
        q: "Can we use our engagement photos for save-the-dates?",
        a: "Yes — they're the best format. Warm, unstiff engagement frames fit card layouts beautifully and guests instantly recognize you. Ask your photographer for a horizontal crop for cards and a square crop for your wedding website.",
      },
      {
        q: "What are the best save the date poses for a card layout?",
        a: "Poses with built-in negative space: walking away down a path, a bench sit with open sky to one side, or a wide landscape frame where you're small in the scene. Your names and date need a quiet corner to live in.",
      },
      {
        q: "How do we plan a surprise proposal with a hidden photographer?",
        a: "Scout the spot together with the photographer beforehand, agree on a signal to begin, and position the shooter upwind with a long lens. Plan the kneel point, the light direction and the one-minute aftermath — that's where the best frames live.",
      },
    ],
  },
  {
    slug: "engagement-photo-prints",
    name: "Prints, Gifts & Display",
    keyword: "engagement photo print ideas",
    volume: "TBD",
    kd: "TBD",
    pillar: true,
    secondaryKeywords: [
      "engagement photo prints",
      "engagement photo display ideas",
      "engagement photo gifts",
      "photo wall collage",
      "locket photo prints",
      "photo booth strip ideas",
    ],
    metaTitle: "Engagement Photo Print Ideas: Displays, Gifts & Keepsakes",
    metaDescription:
      "Engagement photo print ideas — what to do with your session: prints, wall displays, gifts and keepsakes, from lockets to photo strips to gallery collages.",
    lede: "Your engagement session deserves more than a camera roll. Print the frames you actually live with — a hero print for the wall, mid-size pairings for a ledge, small candids for shelves — and turn the rest into gifts and keepsakes. Matte or lustre finishes flatter golden-hour light, and odd-numbered groupings keep a display curated, not cluttered.",
    harperNote: "Couples reprint the mid-laugh frames far more often than the formal ones. Print what makes you feel something when you walk past it.",
    accent: "gold",
    spokes: [
      "locket-photo-print-guide",
      "photo-booth-strip-ideas",
      "engagement-photo-display-ideas",
      "mini-photo-print-ideas",
      "polaroid-style-engagement-prints",
      "flip-book-engagement-photo-ideas",
      "classic-engagement-photos",
      "casual-engagement-photo-ideas",
    ],
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
      {
        q: "What are good engagement photo gifts?",
        a: "The best gifts use one meaningful frame: a locket for parents, a framed print for the other set, a mini print wallet for close friends, or a flip book as an anniversary keepsake.",
      },
      {
        q: "How big should my main engagement photo print be?",
        a: "For a wall above a sofa or bed, 20x30 or 24x36 reads as a hero piece. For a gallery ledge, 8x10 to 11x14. The hero print should be the largest thing on that wall.",
      },
    ],
  },
  {
    slug: "oklahoma-wedding-locations",
    name: "Oklahoma Wedding & Proposal Locations",
    keyword: "Oklahoma wedding and proposal locations",
    volume: "local cluster",
    kd: "0–19",
    pillar: true,
    secondaryKeywords: [
      "best places to propose in Oklahoma",
      "places to propose in Oklahoma",
      "small wedding venues Oklahoma",
      "cheap wedding venues OKC",
      "how to elope in Oklahoma",
    ],
    metaTitle: "Oklahoma Wedding & Proposal Locations — A Local Field Guide",
    metaDescription:
      "Oklahoma wedding and proposal locations scouted in person — Guthrie, Scissortail Park, the Wichita Mountains, prairie elopements and budget OKC venues, with permit and light notes.",
    lede: "Red-dirt roads, limestone creeks, brick streets that turn honey-colored at sunset — Oklahoma is quietly one of the best states in the country to propose, elope or marry small. Every spot below was scouted on a real session: light notes, parking, crowds and permits included, so the only surprise of the day is the ring.",
    harperNote: "I've shot from the Wichita Mountains to the Tallgrass preserve, and the rule never changes: the best Oklahoma light happens in the last hour, and the best Oklahoma venues are the ones where nobody asks you to leave.",
    accent: "sage",
    spokes: [
      "best-places-to-propose-in-oklahoma",
      "places-to-propose-in-oklahoma",
      "small-wedding-venues-oklahoma",
      "cheap-wedding-venues-okc",
      "how-to-elope-in-oklahoma",
    ],
    related: ["engagement-photo-locations", "save-the-date-photos"],
    faq: [
      {
        q: "What's the most romantic place to propose in Oklahoma?",
        a: "For drama, the Tallgrass Prairie at sunset or the Mt. Scott overlook in the Wichita Mountains. For a city proposal, Scissortail Park's Lower Grove at golden hour. For something quiet and local, a limestone creek you already picnic at — the best proposals happen where the two of you already live your life.",
      },
      {
        q: "How much do small wedding venues cost in Oklahoma?",
        a: "It ranges widely: a city park permit can run under $100, a Guthrie historic space or rentable garden typically $500–$2,500, and a working ranch or barn $1,000–$4,000. Always confirm current fees with the venue directly, and ask what's included — tables, chairs and rain plans change the real price.",
      },
      {
        q: "Can you elope in an Oklahoma state park?",
        a: "Generally yes, with the standard per-vehicle entry fee and — for anything beyond the two of you plus an officiant and photographer — a check with the park office first. Turner Falls and the Wichita Mountains Wildlife Refuge are the two most-eloped corners of the state; call ahead on fees and group limits.",
      },
      {
        q: "Is there a waiting period for an Oklahoma marriage license?",
        a: "Oklahoma has a 72-hour waiting period that can be waived with qualifying premarital counseling — rules can change, so verify the current process with the county clerk where you'll apply. Licenses are valid statewide once issued.",
      },
      {
        q: "What season is best for an Oklahoma proposal or elopement?",
        a: "Late March–May and October–early November: mild temperatures, golden prairie grass in fall, wildflowers in spring, and comfortable golden-hour light. Summer works if you shoot after 6pm; winter skies are dramatic but plan for wind and cold hands.",
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
