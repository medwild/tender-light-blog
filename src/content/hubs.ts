import type { Hub } from "./types";

/** The topical silos — the backbone of the site's authority. */
export const HUBS: Hub[] = [
  {
    slug: "engagement-photo-ideas", name: "Engagement Photo Ideas", keyword: "engagement photo ideas",
    volume: "3,600/mo", kd: "11",
    metaTitle: "Engagement Photo Ideas: 100+ Poses, Locations & Themes",
    metaDescription: "Engagement photo ideas for couples — casual, holiday, seasonal and timeless concepts, with the poses and themes couples actually recreate.",
    lede: "The best engagement photo ideas share one thing: they look like you on a good day, not like a catalogue. Start with a mood, then let the pose, outfit and location follow.",
    harperNote: "Couples who pick a mood first and poses second end up with a gallery that feels like one story.",
    accent: "rose",
    spokes: ["holiday-engagement-photos", "casual-engagement-photo-ideas", "candid-engagement-photo-ideas", "fun-engagement-photo-ideas", "cute-engagement-photo-ideas", "classic-engagement-photos", "black-and-white-engagement-photos", "unique-engagement-photo-ideas", "winter-engagement-photo-ideas", "pet-engagement-photos", "cozy-engagement-photos", "rustic-engagement-photos"],
    related: ["engagement-photo-poses", "engagement-photo-outfits", "engagement-photo-locations"],
    faq: [
      { q: "How many engagement photo ideas should we actually use?", a: "Pick 8–12 starting points for a 60–90 minute session. Each idea produces several keeper frames once you add movement, so a short list beats a long one that turns the shoot into a checklist." },
      { q: "What's the best time of day for engagement photos?", a: "The last 60–90 minutes before sunset — golden hour. The light is warm, soft and directional, and it flatters every skin tone. Sunrise works too, with softer tones and empty locations." },
    ],
  },
  {
    slug: "engagement-photo-poses", name: "Engagement Photo Poses", keyword: "engagement photo poses",
    volume: "1,900/mo", kd: "14",
    metaTitle: "Engagement Photo Poses: Natural & Camera-Shy Friendly Ideas",
    metaDescription: "Engagement photo poses that don't feel awkward — natural, romantic, ring-detail and camera-shy friendly poses, with the exact direction photographers give.",
    lede: "A great engagement pose is just a starting position — the photos you love are the two seconds after it settles. The most flattering poses give your hands a job.",
    harperNote: "I never say 'look natural.' I give a task — fix his collar, whisper a bad joke — and natural happens on its own.",
    accent: "gold",
    spokes: ["how-to-smile-naturally-in-photos", "camera-shy-engagement-poses", "natural-engagement-photo-poses", "outdoor-engagement-photo-poses", "scenario-based-engagement-poses", "ring-engagement-photo-poses"],
    related: ["engagement-photo-ideas", "engagement-photo-outfits", "save-the-date-photos"],
    faq: [
      { q: "How do we pose for engagement photos without looking awkward?", a: "Start every pose from a task, not a statue — fix his collar, share a whisper, walk toward a landmark. Poses built on a small action settle into natural frames within seconds." },
      { q: "How long should we hold an engagement pose?", a: "About ten seconds. The first three are stiff; the last seven are gold. Ask your photographer to shoot the whole sequence, because the settle-in frames are the keepers." },
    ],
  },
  {
    slug: "engagement-photo-outfits", name: "Engagement Photo Outfits", keyword: "what to wear for engagement photos",
    volume: "2,400/mo", kd: "22",
    metaTitle: "What to Wear for Engagement Photos: Outfit Ideas by Season",
    metaDescription: "What to wear for engagement photos — colors, fabrics and coordination rules that flatter on camera, season by season, from a stylist who dresses couples for the lens.",
    lede: "Engagement outfits live or die on one word: intentional. The goal is clothes you could wear on a good Saturday — chosen on purpose, in fabrics and tones that love the camera.",
    harperNote: "The couples who look best coordinated one palette and then forgot about their clothes entirely.",
    accent: "rose",
    spokes: ["best-outfits-engagement-photos", "fall-engagement-photo-outfits", "casual-engagement-photo-outfits", "engagement-photo-color-palette", "spring-summer-engagement-outfits", "winter-engagement-outfits"],
    related: ["engagement-photo-ideas", "engagement-photo-poses", "engagement-photo-locations"],
    faq: [
      { q: "What colors should we wear for engagement photos?", a: "Soft, muted tones flatter every skin tone and photograph warmly: cream, oat, camel, sage, dusty blue, terracotta. Avoid neon, big logos and tiny tight patterns, which moiré on digital sensors." },
      { q: "Should we match outfits for engagement photos?", a: "Coordinate, don't match. Share a neutral base and one accent color between you, then add texture. Matching reads like a uniform; coordinating reads like a life together." },
    ],
  },
  {
    slug: "engagement-photo-locations", name: "Engagement Photo Locations", keyword: "outdoor engagement photo ideas",
    volume: "320/mo", kd: "1",
    metaTitle: "Engagement Photo Locations: Outdoor, Indoor & Meaningful Places",
    metaDescription: "Engagement photo locations by terrain — fields, beaches, indoor spaces, city streets and at-home setups, with the light and timing notes that make each one work.",
    lede: "The best engagement photo locations aren't the prettiest spots — they're the spots with good light at the hour you're shooting. Scout by light first, scenery second.",
    harperNote: "I've driven past a dozen 'pretty' spots to shoot at an ugly wall with perfect bounce light. The wall wins.",
    accent: "sage",
    spokes: ["indoor-engagement-photos", "outdoor-engagement-photo-locations", "urban-engagement-photo-ideas", "at-home-engagement-photo-ideas", "mountain-engagement-photos", "beach-engagement-photo-ideas"],
    related: ["engagement-photo-ideas", "engagement-photo-poses", "engagement-photo-outfits"],
    faq: [
      { q: "How far in advance should we scout an engagement location?", a: "Walk it the day before, at the same hour as your session. You're checking light direction, crowds and parking — the three things that sink outdoor shoots." },
      { q: "Do we need permits for engagement photos in parks?", a: "For a couple and a handheld camera, usually no. Tripods, assistants or commercial styling can trigger permits in city parks; state parks charge per-vehicle entry." },
    ],
  },
  {
    slug: "save-the-date-photos", name: "Save the Date & Proposal", keyword: "save the date photoshoot ideas",
    volume: "110/mo", kd: "14",
    metaTitle: "Save the Date Photos & Proposal Ideas: Poses, Themes & Announcements",
    metaDescription: "Save the date photoshoot ideas with built-in negative space, plus proposal poses, announcement frames and the camera plan that catches the kneel.",
    lede: "A save-the-date is a photograph with a job: it carries your names, your date and your venue without feeling crowded. The best frames leave room for your name.",
    harperNote: "The best save the date photo isn't the best photo of you — it's the best photo of you with room for your name.",
    accent: "blush",
    spokes: ["save-the-date-photo-ideas", "save-the-date-poses", "proposal-poses", "surprise-proposal-ideas"],
    related: ["engagement-photo-poses", "engagement-photo-prints", "engagement-photo-ideas"],
    faq: [
      { q: "What makes a pose work for a save the date card?", a: "Negative space. A card needs room for names, date and venue, so the best poses leave clean sky, wall or field beside you. Ask your photographer to shoot wide with breathing room." },
      { q: "How far in advance should save the dates go out?", a: "Six to eight months before the wedding, or as soon as your date and venue are locked. Your photo session should happen at least two months before mailing." },
    ],
  },
  {
    slug: "engagement-photo-prints", name: "Prints, Gifts & Display", keyword: "engagement photo print ideas",
    volume: "1,300/mo", kd: "28",
    metaTitle: "Engagement Photo Print Ideas: Displays, Gifts & Keepsakes",
    metaDescription: "Engagement photo print ideas — what to do with your session: albums, prints, wall displays, gifts and keepsakes, from lockets to photo strips to gallery collages.",
    lede: "Your engagement session deserves more than a camera roll. Print the frames you actually live with — a hero print for the wall, mid-size pairings for a ledge, small candids for shelves.",
    harperNote: "Couples reprint the mid-laugh frames far more often than the formal ones. Print what makes you feel something.",
    accent: "gold",
    spokes: ["engagement-photo-albums", "glossy-or-matte-prints", "mini-photo-print-ideas", "polaroid-style-prints", "photo-booth-strip-ideas", "photo-print-sizes-guide", "locket-photo-print-guide", "photo-flip-book-ideas", "border-prints", "true-digital-prints", "engagement-photo-editing"],
    related: ["save-the-date-photos", "engagement-photo-ideas"],
    faq: [
      { q: "Which engagement photos are worth printing?", a: "Print the frames you feel something looking at — usually the candid, mid-laugh ones, plus one strong formal. A good mix is one hero print, two mid-size, and a few small candids." },
      { q: "What finish is best for engagement photo prints?", a: "Matte or lustre. They flatter golden-hour light, resist glare under home lighting, and age better than glossy, which can look dated and show fingerprints." },
    ],
  },
];

/** Wedding Day Logistics — restored pillar hub (photo & logistics of the day itself). */
export const WEDDING_DAY_HUB: Hub = {
  slug: "wedding-day-logistics", name: "Wedding Day Logistics", keyword: "wedding day checklist",
  volume: "2,500/mo cum.", kd: "11–26",
  metaTitle: "Wedding Day Checklist: The Photo & Logistics Timeline",
  metaDescription: "A wedding day checklist built by a photographer: the photo timeline, family formals list, display and QR setup, delegation and vendor handoff.",
  lede: "The layer most wedding checklists skip: the photo timeline, the family formals list, the displays, the tech and the delegation that decide how your day actually looks in the album.",
  harperNote: "You don't remember a wedding day. You remember the photographs of it — and those are a logistics problem before they're an art problem.",
  accent: "blush",
  spokes: ["wedding-photo-checklist", "first-look-photos"],
  related: ["save-the-date-photos", "engagement-photo-prints", "engagement-photo-ideas"],
  faq: [
    { q: "Who should run the family formals?", a: "One named person with the written list — the MC or a gregarious relative. The photographer shoots; the list-runner wrangles. Splitting those two roles keeps formals under twenty minutes." },
    { q: "Is the golden-hour portrait block worth it?", a: "Yes — protect 60–90 minutes around golden hour like the ceremony itself. It produces the images you'll frame, and guests won't notice the gap." },
  ],
};

export const getHub = (slug: string) => HUBS.find((h) => h.slug === slug) ?? (slug === WEDDING_DAY_HUB.slug ? WEDDING_DAY_HUB : undefined);

/* The 7th silo (handoff §3): wired into the topical map once its pillar post
   (wedding-photo-checklist) joined the catalog. HUBS drives
   generateStaticParams, the sitemap and the /guides map. */
HUBS.push(WEDDING_DAY_HUB);
