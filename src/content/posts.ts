import { IMAGES } from "../lib/constants";
import type { Category, Post } from "./types";

/* ————————————————————— Categories ————————————————————— */

export const CATEGORIES: Category[] = [
  {
    slug: "ideas",
    name: "Ideas & Themes",
    description: "Concepts by style, season and mood — the starting point for every shoot.",
    longDescription:
      "The idea library: casual, classic, romantic, candid, elegant, vintage, night and DIY concepts — organized by style and season so you can pick a mood before a single pose.",
    accent: "rose",
  },
  {
    slug: "poses",
    name: "Poses & Direction",
    description: "Classic, fun and romantic poses that flatter every couple.",
    longDescription:
      "The pose library: standing frames, sitting frames, movement prompts and the small adjustments that turn stiff photos into keeper frames. Every pose includes the exact direction we give couples on session.",
    accent: "rose",
  },
  {
    slug: "outfits",
    name: "Outfits & Styling",
    description: "What to wear so your photos look timeless, not trendy.",
    longDescription:
      "Color palettes, fabrics, layers and the small styling details that photograph beautifully — plus the pieces that consistently date an engagement photo. Seasonal guides included.",
    accent: "gold",
  },
  {
    slug: "locations",
    name: "Locations & Guides",
    description: "Scouted spots with light notes, permits and timing.",
    longDescription:
      "Field-tested engagement photo locations with honest notes on golden-hour light, crowds, parking and permits — so your session starts relaxed instead of rushed.",
    accent: "sage",
  },
  {
    slug: "tips",
    name: "Tips & Mindset",
    description: "Feel natural, plan smart, keep every frame timeless.",
    longDescription:
      "The unglamorous details that make sessions feel easy: timing the light, beating camera nerves, checklists and the mindset shifts that produce the most natural photographs.",
    accent: "blush",
  },
];

export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);

/* ————————————————————— Authors ————————————————————— */

/** Lead writer — see src/content/persona.ts for the full voice system. */
const harper = {
  handle: "harper-ellis",
  name: "Harper Ellis",
  role: "Founder & Engagement Photo Editor",
  bio: "Harper spent 8 years behind the lens shooting 400+ engagement sessions across the US before trading her camera for a keyboard. Based in Austin and married to her high school sweetheart, she writes the warm, practical guides she wishes every couple had before their shoot.",
  avatar: IMAGES.about,
  instagram: "@tenderlight.journal",
};
/** Alias kept so existing post references read naturally. */
const clara = harper;

const mia = {
  handle: "mia-delacroix",
  name: "Mia Delacroix",
  role: "Session Stylist",
  bio: "Mia styles engagement and wedding couples for camera — color-first, comfort-always. Her rule of thumb: if you'd wear it to a nice dinner, it will photograph beautifully.",
  instagram: "@miastyles.couples",
};

/* ————————————————————— Posts (MDX-equivalent) ————————————————————— */

export const POSTS: Post[] = [
  {
    slug: "30-engagement-photo-poses-couples",
    title: "30 Engagement Photo Poses Every Couple Should Try",
    seoTitle: "30 Engagement Photo Poses for Couples (2026 Guide)",
    seoDescription:
      "30 engagement photo poses for couples — classic, fun and romantic frames with the exact direction photographers use. Save this pose list for your session.",
    excerpt:
      "Classic, fun and romantic — 30 tested engagement poses with the exact words we use to direct couples who swear they're awkward in front of a camera.",
    category: "poses",
    date: "2026-01-12",
    featuredImage: IMAGES.posesCover,
    featuredAlt:
      "Couple posing forehead to forehead during a golden hour engagement photo session",
    tags: ["poses", "couples", "direction", "posing guide"],
    author: clara,
    blocks: [
      {
        type: "p",
        text: "Every couple says the same thing at the start of a session: “We're not models — we don't know what to do with our hands.” Good news: you don't need to. A pose is just a starting position, and the photographs you'll love are the two seconds *after* the pose settles. This guide is the exact library we pull from on every engagement session, organized by mood so you can build a shot list the night before.",
      },
      {
        type: "callout",
        tone: "rose",
        title: "How to use this pose list",
        text: "Pick 3 classics, 3 fun, 3 romantic. That's nine starting positions — enough variety for a 60-minute session with room to walk, talk and forget the camera exists.",
      },
      { type: "h2", id: "classic-poses", text: "Classic Poses" },
      {
        type: "p",
        text: "Classic frames are your anchors: clean lines, timeless geometry, and the photos your parents will frame. They work in any outfit and any location, which is why every session starts here.",
      },
      { type: "h3", id: "the-forehead-touch", text: "1. The forehead touch" },
      {
        type: "p",
        text: "Stand close, close your eyes, rest foreheads together. Direction we give: “Breathe in sync for three breaths.” The closed eyes remove all camera anxiety and the synced breathing relaxes both shoulders at once.",
      },
      { type: "h3", id: "the-waist-hold", text: "2. The waist hold, mid-laugh" },
      {
        type: "p",
        text: "His hands on her waist, her hands on his chest, someone says something ridiculous. The hold gives the frame structure; the laugh gives it life. Never skip the laugh — a silent waist hold reads as a mannequin photo.",
      },
      { type: "h3", id: "the-walking-away", text: "3. Walking away, hand in hand" },
      {
        type: "p",
        text: "Walk away from the camera at conversation pace, swing your hands slightly. This is the most universally flattering engagement pose because nobody has to 'perform' — you're literally just walking together.",
      },
      {
        type: "list",
        items: [
          "4. The dip — one slow second down, hold, slow second up (the in-between frames win).",
          "5. Back-to-back with crossed arms, both looking at camera with a smirk.",
          "6. Her head on his shoulder, both profiles to camera, eyes closed.",
          "7. The blanket sit: sit close, her legs to the side, his arm behind her.",
          "8. Foreheads apart by an inch, eyes open — the 'almost kiss'.",
          "9. His chin over her head, her arms wrapped around his waist.",
          "10. The spin: he lifts her hand, she turns once under the arm. Motion hides nerves.",
        ],
      },
      {
        type: "gallery",
        images: [
          { src: IMAGES.posesCover, alt: "Classic forehead-touch engagement pose in soft light" },
          { src: IMAGES.galleryLaugh, alt: "Couple laughing during a waist-hold engagement pose" },
        ],
      },
      { type: "h2", id: "fun-poses", text: "Fun Poses" },
      {
        type: "p",
        text: "Fun frames are where personality lives. The trick is giving yourselves a task instead of a pose — tasks produce micro-expressions that posed smiles never do.",
      },
      { type: "h3", id: "the-piggyback", text: "11. The piggyback, mid-giggle" },
      {
        type: "p",
        text: "It doesn't have to be graceful. Half the best piggyback frames are her shoe falling off or both of you wobbling. Ask your photographer to shoot the whole sequence, not just the setup.",
      },
      {
        type: "list",
        items: [
          "12. The whisper: he 'tells' her the worst pickup line he knows. Real reactions guaranteed.",
          "13. Race to a tree or lamppost — winner gets to pick the restaurant. Loser carries the tripod.",
          "14. The dramatic movie kiss, over-acted on purpose. Comedy relaxes both of you.",
          "15. Lift her like a toddler and let her legs kick. Pure joy reads on camera instantly.",
          "16. Coffee toast: clink cups to the lens like it's a champagne flute.",
          "17. The twirl with a jacket: he spins her by the hand while the jacket flies.",
          "18. Sit on a curb or tailgate, forearms on knees, roast each other gently.",
          "19. Sunglasses on, walk in slow motion, absolutely commit to the bit.",
        ],
      },
      {
        type: "callout",
        tone: "gold",
        title: "Director's note",
        text: "If a fun pose feels silly, lean into the silliness. The couples who get the best fun frames are the ones who fully commit for ten seconds and then collapse laughing.",
      },
      { type: "h2", id: "romantic-poses", text: "Romantic Poses" },
      {
        type: "p",
        text: "Romantic frames slow everything down. Longer holds, softer light, closer distance. These are the images that end up above the fireplace — shoot them during the last fifteen minutes when you've completely forgotten the camera.",
      },
      { type: "h3", id: "the-back-hug", text: "20. The back hug at golden hour" },
      {
        type: "p",
        text: "He wraps his arms around her waist from behind, she covers his hands with hers. Position the low sun behind you so the edges of your silhouettes glow. Hold for a full ten seconds — the first three are stiff, the last seven are gold.",
      },
      {
        type: "list",
        items: [
          "21. The veil-or-scarf frame: drape fabric over both heads, foreheads touching underneath.",
          "22. Hands-only close-up: interlaced fingers, ring catching the light.",
          "23. Slow dance with no music — hum badly on purpose.",
          "24. Kiss on the temple while she laughs at something off-camera.",
          "25. Sit facing each other, knees touching, just talk. Your photographer will shoot quietly.",
          "26. The lifted-hem walk through tall grass at sunset.",
          "27. Foreheads together under an umbrella (no rain required).",
          "28. His hand on her cheek, her hand over his — the 'quiet vow'.",
          "29. Silhouette kiss against the last minute of light.",
          "30. Walking back to the car, her head on his shoulder, not posing at all. Often the best frame of the day.",
        ],
      },
      {
        type: "gallery",
        images: [
          { src: IMAGES.gallerySilhouette, alt: "Couple silhouette lifted at sunset — romantic engagement pose" },
          { src: IMAGES.galleryRing, alt: "Close-up of interlaced hands with an engagement ring" },
          { src: IMAGES.galleryTwirl, alt: "Fiancée twirling in a champagne dress during golden hour" },
        ],
      },
      {
        type: "quote",
        text: "The best engagement photo is the one where you can hear the laughter just looking at it.",
        cite: "Clara, after 400+ sessions",
      },
      { type: "h2", id: "poses-faq", text: "Engagement Pose Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "How many poses can we realistically do in one hour?",
            a: "Plan for 8–12 starting positions. Each one produces 3–5 keeper frames once you add movement and in-between moments. More than 15 and the session starts to feel like a checklist.",
          },
          {
            q: "We're camera-shy. Which poses should we start with?",
            a: "Walking-away frames and the forehead touch with eyes closed. Both remove the pressure of 'performing' for the lens and usually unlock the rest of the session.",
          },
          {
            q: "What do we do with our hands?",
            a: "Give them a job: a lapel, a waist, interlaced fingers, a coffee cup, a bouquet. Empty hands look awkward; busy hands look natural. Your photographer should direct this explicitly.",
          },
          {
            q: "Should we practice poses before the session?",
            a: "Browse together and save 5–10 references you both like — but don't rehearse in a mirror. Rehearsed poses look rehearsed. Bring the references; let your photographer adapt them to your bodies and your light.",
          },
        ],
      },
    ],
  },
  {
    slug: "best-outfits-engagement-photos",
    title: "Best Outfits for Engagement Photos: A Stylist's Complete Guide",
    seoTitle: "Best Outfits for Engagement Photos (2026 Styling Guide)",
    seoDescription:
      "What to wear for engagement photos: the colors that flatter on camera, what to avoid, and a seasonal outfit guide from a session stylist.",
    excerpt:
      "Colors that flatter on camera, the pieces that date a photo, and a season-by-season outfit formula — from a stylist who dresses couples for the lens.",
    category: "outfits",
    date: "2025-12-28",
    featuredImage: IMAGES.outfitsCover,
    featuredAlt: "Couple in coordinated champagne and sage outfits walking toward the camera",
    tags: ["outfits", "styling", "what to wear", "color palette"],
    author: mia,
    blocks: [
      {
        type: "p",
        text: "Outfit questions outnumber pose questions in my inbox three to one — and honestly, that's smart planning. Your pose can be directed on the day; your outfit is decided before you arrive. The goal is not to match. The goal is to look like you belong in the same photograph, in the same season, in the same light.",
      },
      { type: "h2", id: "colors-to-wear", text: "Colors to Wear" },
      {
        type: "p",
        text: "Camera-friendly colors share one trait: they're softened versions of real colors. If a color looks slightly 'dusty' in person, it usually looks rich on camera.",
      },
      {
        type: "list",
        items: [
          "Cream, oat and warm ivory — the universal base that flatters every skin tone.",
          "Powder rose and blush — romantic without shouting 'wedding'.",
          "Sage and olive green — grounded, organic, gorgeous against golden light.",
          "Champagne and camel — read as 'expensive' on camera without logos.",
          "Dusty blue and slate — the best alternative if you want something cooler.",
          "Rust and terracotta — specifically for autumn sessions in fields or brick settings.",
        ],
      },
      {
        type: "callout",
        tone: "gold",
        title: "The 70/20/10 rule",
        text: "70% shared neutral base (cream, camel, oat), 20% one partner's accent color (sage, rose), 10% texture or pattern (lace, knit, subtle plaid). It's the fastest way to look coordinated without matching.",
      },
      { type: "h2", id: "what-to-avoid", text: "What to Avoid" },
      {
        type: "list",
        items: [
          "Large logos and graphic tees — they date a photo faster than anything else.",
          "Neon anything — it color-casts onto skin in open shade.",
          "Identical matching outfits (white shirt + jeans twins) — a 2014 artifact.",
          "Tiny, tight patterns like micro-checks — they moiré on digital sensors.",
          "Brand-new uncomfortable shoes — you'll stand differently and it shows.",
          "All-black in a golden-hour field — you'll read as a silhouette before the sun even sets.",
        ],
      },
      {
        type: "p",
        text: "One honest exception: if all-black is genuinely your style, keep it — just add texture (a leather jacket, a ribbed knit) and let your photographer expose for skin, not fabric.",
      },
      { type: "h2", id: "seasonal-guide", text: "The Seasonal Guide" },
      { type: "h3", id: "spring-summer", text: "Spring & Summer" },
      {
        type: "p",
        text: "Light layers in breathable fabrics: linen trousers, slip dresses, open-weave knits for evening. Pastels and cream dominate; add one floral or gingham piece if it feels like you. For summer, schedule after 6pm — midday sun is the real outfit enemy, melting makeup and squinting eyes regardless of what you wear.",
      },
      { type: "h3", id: "fall-winter", text: "Fall & Winter" },
      {
        type: "p",
        text: "This is the most photogenic season, full stop. Camel coats, chunky knits, rust and olive layers, leather boots. Texture is the whole game in low light — cable knits and wool photograph with depth that flat fabrics can't. Winter tip: keep hand warmers in pockets between frames; cold hands look tense in close-ups.",
      },
      {
        type: "gallery",
        images: [
          { src: IMAGES.outfitsCover, alt: "Couple in coordinated champagne and sage engagement outfits" },
          { src: IMAGES.galleryTwirl, alt: "Flowing champagne dress catching golden light in a meadow" },
        ],
      },
      {
        type: "callout",
        tone: "sage",
        title: "Second-outfit math",
        text: "Two outfits double your photo variety but cost ~15 session minutes. Worth it for 90-minute sessions; skip it for 45-minute minis and instead bring one layering piece (a jacket, a scarf) that changes the silhouette.",
      },
      { type: "h2", id: "outfits-faq", text: "Styling Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "Should our outfits match our wedding colors?",
            a: "Echo them, don't replicate them. If your wedding palette is sage and cream, wearing dusty blue and oat for engagement photos gives you range across both galleries instead of one repeated look.",
          },
          {
            q: "Dress or jeans for her?",
            a: "Whatever you'd wear to a nice dinner. A midi dress or good denim with a silk top both photograph beautifully — the difference is fit, not formality. Avoid anything you'll be tugging at all session.",
          },
          {
            q: "When should outfits be finalized?",
            a: "Two weeks before the session, with a mirror photo test in similar light (golden hour outdoors). Send the mirror shots to your photographer — most will happily veto a piece that fights the location.",
          },
        ],
      },
    ],
  },
  {
    slug: "top-engagement-photo-locations-oklahoma",
    title: "10 Best Engagement Photo Locations in Oklahoma",
    seoTitle: "10 Best Engagement Photo Locations in Oklahoma (2026)",
    seoDescription:
      "The 10 best engagement photo locations in Oklahoma — lakes, bridges, prairies and historic districts, with golden-hour timing and permit notes.",
    excerpt:
      "Lakes, limestone bridges, brick districts and open prairie — ten scouted Oklahoma engagement spots with honest notes on light, crowds and permits.",
    category: "locations",
    date: "2026-01-25",
    featuredImage: IMAGES.locationsCover,
    featuredAlt: "Historic stone bridge over an Oklahoma creek at golden hour",
    tags: ["locations", "oklahoma", "scouting", "golden hour"],
    author: clara,
    blocks: [
      {
        type: "p",
        text: "Oklahoma is quietly one of the best engagement-photo states in the country: wide skies, golden prairies, limestone creeks and brick districts that turn soft pink at sunset. After years of scouting within two hours of Oklahoma City, these are the ten locations we book again and again — ranked by how reliably they deliver.",
      },
      { type: "h2", id: "how-we-scout", text: "How We Chose These Spots" },
      {
        type: "p",
        text: "Every location below earned its place on three criteria: quality of late-afternoon light, variety of backdrops within a short walk, and logistics (parking, crowds, permits). A gorgeous spot that's packed with tourists at golden hour is not a gorgeous spot — it's a stress test.",
      },
      { type: "h2", id: "the-ten-locations", text: "The 10 Locations" },
      { type: "h3", id: "l1-guthrie", text: "1. Guthrie Historic District" },
      {
        type: "p",
        text: "Territorial-era brick streets that glow amber in the last hour. Shoot the murals early, the limestone facades mid-session, and end on the wide avenue as street lamps flicker on. Arrive 90 minutes before sunset. Parking is easy; no permit needed for couples.",
      },
      { type: "h3", id: "l2-lake-hefner", text: "2. Lake Hefner Sailing Point" },
      {
        type: "p",
        text: "Sailboats drifting behind you with zero effort. The east shore gives clean water reflections at sunset; the limestone breakwall is the backup when wind picks up. Free parking, always busy on summer weekends — weekday sessions are a different world.",
      },
      { type: "h3", id: "l3-tallgrass", text: "3. Tallgrass Prairie Preserve" },
      {
        type: "p",
        text: "The most romantic hour of light you will ever stand in: six-foot bluestem grass, bison on the horizon, and a sky that goes rose → amber → violet. It's a drive, but it's the location clients cry about. Book the last slot of the day and stay for blue hour.",
      },
      { type: "h3", id: "l4-bricktown", text: "4. Bricktown Canal, Oklahoma City" },
      {
        type: "p",
        text: "For couples who want an urban frame: water taxis, string lights, red brick. Shoot the canal bridges first, then the warehouse alleys where evening light bounces warm off brick. Weeknights only — weekends are crowded.",
      },
      { type: "h3", id: "l5-woolaver", text: "5. Woolaver Hollow limestone creek" },
      {
        type: "p",
        text: "A shallow limestone creek with a natural stone shelf — the classic 'sitting on the rocks, feet near water' frame. Mid-session light is best here (the hollow goes into shade early). Water shoes hidden under a dress are not a joke; bring them.",
      },
      { type: "h3", id: "l6-medical-museum", text: "6. The White Pillar Courtyard (Oklahoma City)" },
      {
        type: "p",
        text: "Neoclassical columns, marble steps, soft bounce light all afternoon. This is the 'elegant' option — it flatters formal outfits and reads timeless. Small courtesy fee; worth it for ten minutes of column frames.",
      },
      { type: "h3", id: "l7-route66", text: "7. A vintage Route 66 roadside" },
      {
        type: "p",
        text: "A rusted gas sign, an old sedan, two coffees on the hood. Route 66 Americana gives you the fun, editorial frames that break up a gallery of field photos. Any quiet stretch west of El Reno works; scout for a clean sightline first.",
      },
      { type: "h3", id: "l8-turner-falls", text: "8. Turner Falls overlook" },
      {
        type: "p",
        text: "Oklahoma's tallest waterfall, shot from the upper overlook so you get falls + canyon without the swimming-hole crowds. Entry fee applies; the overlook trail is short. Best May–June when water volume peaks.",
      },
      { type: "h3", id: "l9-wheat-field", text: "9. A private wheat field (yes, ask a farmer)" },
      {
        type: "p",
        text: "The simplest, most romantic backdrop in the state. In June the wheat is golden and waist-high; farmers almost always say yes if you ask politely and park on the gravel. Offer $20, leave the gate exactly as you found it.",
      },
      { type: "h3", id: "l10-harn-homestead", text: "10. Harn Homestead white house" },
      {
        type: "p",
        text: "A white 1900s farmhouse with a wraparound porch and pecan trees — the 'home' feeling some couples want in their gallery. Donation requested; the porch swings, the gravel path and the pecan shade each give a different frame within thirty steps.",
      },
      {
        type: "gallery",
        images: [
          { src: IMAGES.locationsCover, alt: "Stone bridge over a creek at golden hour in Oklahoma" },
          { src: IMAGES.hero, alt: "Couple embracing in a golden wildflower meadow" },
          { src: IMAGES.gallerySilhouette, alt: "Couple silhouetted on a prairie hill at sunset" },
        ],
      },
      { type: "h2", id: "permits-timing", text: "Permits, Fees & Timing" },
      {
        type: "list",
        items: [
          "Golden hour = the last 60–90 minutes of sun. Be at the spot, styled, 15 minutes early.",
          "City parks and historic districts: usually free for couples, verify if you bring a tripod or assistant.",
          "State parks (Turner Falls, Tallgrass): per-vehicle entry fee, no photo permit for couples.",
          "Private land: always ask. A polite knock with cash in hand works 9 times out of 10.",
          "Weekday sessions get you empty locations from May through October. Guard them.",
        ],
      },
      {
        type: "callout",
        tone: "sage",
        title: "Weather backup plan",
        text: "Oklahoma weather changes its mind fast. Pick a location with a covered fallback (Guthrie's awnings, Bricktown's overhangs, the Harn porch) so a grey sky becomes a feature, not a cancellation.",
      },
    ],
  },
  {
    slug: "golden-hour-photography-tips-couples",
    title: "Golden Hour Photography Tips for Couples (No Camera Knowledge Needed)",
    seoTitle: "Golden Hour Photo Tips for Couples — Tender Light",
    seoDescription:
      "Golden hour photography tips for couples: how to time the light, backlit vs frontlit frames, and what to do when the sky turns grey.",
    excerpt:
      "You don't need to own a camera to use golden hour well — you need timing. Here's how to plan the light, stand in it, and salvage a grey sky.",
    category: "tips",
    date: "2025-12-10",
    featuredImage: IMAGES.hero,
    featuredAlt: "Couple embracing in a wildflower meadow during golden hour",
    tags: ["golden hour", "light", "planning", "tips"],
    author: clara,
    blocks: [
      {
        type: "p",
        text: "Golden hour gets blamed for a lot of mediocre photos — because it's treated as a filter instead of a schedule. It lasts about sixty usable minutes, the light moves the whole time, and the best frames happen in a fifteen-minute window most couples spend walking from the parking lot. Here's how to actually use it.",
      },
      { type: "h2", id: "what-golden-hour-is", text: "What Golden Hour Actually Is" },
      {
        type: "p",
        text: "The last hour before sunset (and first hour after sunrise), when the sun sits low enough to turn warm and soft. Shadows stretch, skin glows, and backgrounds fall off into a creamy blur. Sunrise golden hour is softer and emptier; sunset is warmer and more dramatic. For engagement photos, sunset wins unless you hate early alarms.",
      },
      { type: "h2", id: "timing-your-session", text: "Timing Your Session" },
      {
        type: "list",
        items: [
          "Look up the exact sunset time for your date and location — not an approximation.",
          "Arrive 60–75 minutes before sunset: the first frames use soft 'pre-golden' light.",
          "Reserve the open, dramatic frames (silhouettes, backlit fields) for the final 20 minutes.",
          "Stay 10 minutes after sunset: blue hour gives the quiet, moody frames everyone forgets to ask for.",
          "Cloudy day? 'Golden hour' simply becomes 'the brightest hour' — still the best light of the day.",
        ],
      },
      { type: "h2", id: "backlit-vs-frontlit", text: "Backlit vs Frontlit: Stand on Purpose" },
      {
        type: "p",
        text: "Backlit means the sun is behind you: glowing hair edges, soft faces, dreamy haze — but your photographer must expose for skin or you'll go dark. Frontlit means the sun is on your face: sharper, more saturated color, but squinting risk in the last minutes. The best sessions use both — frontlit while the sun is still high, backlit as it drops.",
      },
      {
        type: "callout",
        tone: "gold",
        title: "The squint test",
        text: "If you're facing the sun and squinting, close your eyes and open them on the count of three for the photo. Open-eyes-from-closed reads softer than half-squint every single time.",
      },
      { type: "h2", id: "grey-sky-plan", text: "When the Sky Goes Grey" },
      {
        type: "p",
        text: "Overcast is not bad light — it's a giant softbox. Colors saturate, skin evens out, and you can face any direction without squinting. Lean into mood: dark greens, stone bridges, brick walls, close frames. Some of the most timeless engagement galleries in our archive were shot under flat grey skies.",
      },
      {
        type: "gallery",
        images: [
          { src: IMAGES.hero, alt: "Backlit couple in a golden meadow just before sunset" },
          { src: IMAGES.gallerySilhouette, alt: "Silhouette frames shot in the final minutes of golden hour" },
        ],
      },
    ],
  },
  {
    slug: "engagement-photo-checklist",
    title: "The Complete Engagement Photo Checklist: 3 Months to 1 Hour Before",
    seoTitle: "Engagement Photo Checklist (Timeline That Works) — Tender Light",
    seoDescription:
      "A complete engagement photo checklist from 3 months out to 1 hour before your session — outfits, scouting, timing and day-of details.",
    excerpt:
      "Everything handled in order: what to book 3 months out, what to confirm the week before, and the 10 items that save the day of your session.",
    category: "tips",
    date: "2026-02-02",
    featuredImage: IMAGES.galleryLaugh,
    featuredAlt: "Couple laughing together during an engagement photo session in a field",
    tags: ["checklist", "planning", "timeline", "preparation"],
    author: clara,
    blocks: [
      {
        type: "p",
        text: "The couples who have the most relaxed sessions aren't the most photogenic — they're the most prepared. This is the exact checklist we send every client, in the order things actually need to happen.",
      },
      { type: "h2", id: "three-months-out", text: "3 Months Before" },
      {
        type: "list",
        items: [
          "Book your photographer — golden-hour weekend slots in spring and fall go 8–12 weeks out.",
          "Pick 2–3 candidate locations and check permit/fee requirements.",
          "Decide: 1 or 2 outfits? (See the 90-minute rule in our outfit guide.)",
          "Schedule hair/makeup trial if you want a styled look — trial now, not the week of.",
          "Set a rain-date policy in writing with your photographer.",
        ],
      },
      { type: "h2", id: "one-month-out", text: "1 Month Before" },
      {
        type: "list",
        items: [
          "Finalize outfits and photograph them in a mirror at home — send to your photographer for a veto pass.",
          "Confirm exact sunset time for your session date.",
          "Break in shoes. Seriously. Blisters change how you stand.",
          "Build a small inspiration board (5–10 images, not 60) and share it.",
          "Book the day after as a rest day if you're doing hair/makeup — you'll want to be fresh, not rushed.",
        ],
      },
      { type: "h2", id: "week-of", text: "The Week Of" },
      {
        type: "list",
        items: [
          "Check the forecast daily — decide on the rain call 48 hours out, not the morning of.",
          "Steam or iron outfits; wrinkles photograph louder than you think.",
          "Trim, file, and moisturize hands if ring close-ups are on the shot list.",
          "Charge your phone (for the behind-the-scenes shots your friends will beg for).",
          "Send your photographer any last-minute location changes.",
        ],
      },
      { type: "h2", id: "day-of", text: "Day Of: The 10 Things in the Car" },
      {
        type: "list",
        items: [
          "Water and a snack (low-blood-sugar faces are real).",
          "Lint roller and a small mirror.",
          "Backup flat shoes for walking between spots.",
          "Hand warmers in fall/winter.",
          "Tissues and blotting papers in summer.",
          "The ring box (clean the ring the night before — Windex and a soft brush).",
          "A blanket for sitting frames on grass or stone.",
          "Bug spray for field and creek locations, May–September.",
          "A portable speaker — music drops awkwardness faster than anything.",
          "Ten minutes of buffer. Arriving flustered is the only unfixable lighting problem.",
        ],
      },
      {
        type: "callout",
        tone: "rose",
        title: "The night-before rule",
        text: "No new skincare, no drastic haircuts, no salt-heavy dinners. Boring is beautiful the night before a session.",
      },
    ],
  },
  {
    slug: "how-to-feel-natural-in-front-of-camera",
    title: "How to Feel Natural in Front of the Camera (Even If You're Camera-Shy)",
    seoTitle: "How to Look Natural in Engagement Photos — Tender Light",
    seoDescription:
      "Camera-shy? These prompts, breathing tricks and movement cues are what photographers actually use to make couples look natural.",
    excerpt:
      "The secret isn't 'being photogenic' — it's prompts, movement and one breathing trick. Here's how photographers make camera-shy couples glow.",
    category: "tips",
    date: "2026-01-05",
    featuredImage: IMAGES.galleryRing,
    featuredAlt: "Close-up of a couple's hands with an engagement ring in soft light",
    tags: ["camera-shy", "natural", "mindset", "prompts"],
    author: clara,
    blocks: [
      {
        type: "p",
        text: "Nobody is 'bad at photos.' There are only people who haven't been directed yet. After 400+ sessions, the pattern is unshakeable: the couples who think they're the most awkward produce the most tender galleries — because they stop performing sooner. Here's the toolkit.",
      },
      { type: "h2", id: "prompts-not-poses", text: "Prompts, Not Poses" },
      {
        type: "p",
        text: "A pose tells your body where to go; a prompt tells your mind what to do. Your mind is the problem, so prompts win. 'Whisper the name of your first pet' produces a better frame than 'laugh naturally' ever will — because you're actually doing something instead of performing an impression of it.",
      },
      {
        type: "list",
        items: [
          "Walk toward me and argue about where to eat tonight. (Real bickering = real connection.)",
          "Tell her the story of the moment you knew. She listens. That's the whole photo.",
          "Spin her once, badly. Then apologize like a Victorian gentleman.",
          "Foreheads together — now hum the worst song you both know.",
          "Look at each other like the other one just said something incredible.",
        ],
      },
      { type: "h2", id: "the-breathing-trick", text: "The One Breathing Trick" },
      {
        type: "p",
        text: "Tension lives in the shoulders and the jaw. Before any close frame: drop your shoulders one full inch, unstick your tongue from the roof of your mouth, and exhale slowly through your nose. Do this every time you reset — your photographer will notice within two frames.",
      },
      { type: "h2", id: "movement-is-medicine", text: "Movement Is Medicine" },
      {
        type: "p",
        text: "Stillness magnifies self-consciousness; movement dissolves it. Every stiff couple I've met loosened up the moment they started walking. Ask your photographer to shoot you arriving, walking between spots, fumbling with the ring box — the 'unofficial' frames are where natural lives.",
      },
      {
        type: "quote",
        text: "You're not being photographed. You're being witnessed doing the thing you already do — loving each other.",
        cite: "Note to every camera-shy couple",
      },
      {
        type: "callout",
        tone: "sage",
        title: "Pick your photographer last, on purpose",
        text: "Choose someone whose galleries make you feel calm, not envious. Your best frames depend more on feeling safe with the human behind the lens than on any technique in this article.",
      },
      {
        type: "gallery",
        images: [
          { src: IMAGES.galleryLaugh, alt: "Couple laughing mid-session — natural, unposed moment" },
          { src: IMAGES.galleryRing, alt: "Quiet hands-and-ring frame from a camera-shy couple's session" },
        ],
      },
    ],
  },

  /* ———— Tier 1 SEO targets (KD ≤ 8) ———— */

  {
    slug: "casual-engagement-photo-ideas",
    title: "15 Casual Engagement Photo Ideas for a Relaxed & Authentic Vibe",
    seoTitle: "15 Casual Engagement Photo Ideas (Outfits, Poses & Locations)",
    seoDescription:
      "Want authentic, relaxed couple pictures? Discover the best casual engagement photo ideas, everyday outfit inspiration, and natural poses for your shoot.",
    excerpt:
      "Outfits, poses & locations for a relaxed, authentic casual engagement photoshoot — 15 ideas that feel like your real life, not a catalogue.",
    category: "outfits",
    date: "2026-02-22",
    featuredImage: IMAGES.casualCafe,
    featuredAlt: "Casual engagement photos of a couple laughing over coffee at a café window",
    tags: ["casual", "relaxed", "outfits", "natural poses", "everyday", "jeans"],
    author: clara,
    blocks: [
      {
        type: "p",
        text: "When I shot a session in Zilker Park last October, the couple showed up in jeans and a slightly-too-big denim jacket, already laughing about a parking ticket. Twenty minutes in, she did this thing where she tucked her hair back and snorted at something he said — and it's the frame they've since printed twice. Not the stiff, posed one. The snort. That's the whole promise of a casual engagement photoshoot: no gown, no pressure, no two-hour pose marathon — just the two of you, doing the things you already do, photographed a little more beautifully. Here you'll find 15 ideas across outfits, locations and relaxed engagement poses, plus the small decisions (yes, including jeans) that make simple engagement pictures look intentional instead of accidental.",
      },
      { type: "h2", id: "why-choose-casual", text: "Why Choose a Casual Engagement Session?" },
      {
        type: "p",
        text: "Choose a casual engagement session if you want photos that feel like your actual life — relaxed, everyday images simply do more jobs than formal ones. They're the frames your save-the-date cards want, your wedding website needs, and your future selves will actually reprint. Of the 400+ galleries I've delivered, the casual sets are the ones couples tell me they look at most.",
      },
      {
        type: "p",
        text: "The best engagement photos don't look posed — they look like someone caught you being in love. That's the whole trick, and it's why every idea below is built around an action instead of a position.",
      },
      {
        type: "callout",
        tone: "rose",
        title: "Real talk",
        text: "Nobody looks natural being told to “just relax” by a stranger with a camera. That's exactly why every idea in this guide is an action, not an instruction — you can't be stiff while you're busy laughing at his terrible joke or reaching for the last fry.",
      },
      { type: "ad", slot: "in-article" },
      { type: "h2", id: "what-to-wear", text: "What to Wear: Casual Engagement Outfit Ideas" },
      {
        type: "p",
        text: "The best casual engagement outfits are comfortable, everyday clothes in a coordinated palette — the kind you'd wear on a good Saturday, chosen on purpose. Couples in soft, muted tones (cream, oat, terracotta, sage) photograph warmer than those in bright or busy patterns, because muted colors keep the eye on your faces instead of your clothes. Here's the split that works for almost every couple I've styled.",
      },
      { type: "h3", id: "for-her", text: "For Her: Effortless & Comfortable" },
      {
        type: "list",
        items: [
          "Well-cut jeans — dark or mid wash, straight or wide leg. The single most-photographed piece in casual sessions.",
          "A flowy midi skirt — movement built in; it swishes when you twirl and drapes when you sit.",
          "A cozy knit sweater — texture reads as warmth on camera; cream, oat and blush are the safest tones.",
          "Ankle boots or clean sneakers — you'll walk more than you think, and uncomfortable feet show in photos.",
        ],
      },
      { type: "h3", id: "for-him", text: "For Him: Smart-Casual & Relaxed" },
      {
        type: "list",
        items: [
          "Chinos in tan, olive or slate — the casual-session equivalent of a suit: structure without stiffness.",
          "A quality white tee under an open shirt or lightweight jacket — the open layer frames the face and hides fidgety hands.",
          "Clean, minimal sneakers or leather boots — scuffed running shoes are the #1 detail that dates a casual gallery.",
          "One rolled sleeve, never two — a small asymmetry that reads relaxed instead of sloppy.",
        ],
      },
      { type: "h3", id: "golden-rule", text: "The Golden Rule: Coordinate, Don't Match" },
      {
        type: "p",
        text: "Matching outfits photograph like a team uniform; coordinating outfits photograph like a life together. Pick one shared palette — earth tones (camel, olive, rust, cream) or soft neutrals (oat, ivory, grey, dusty blue) — then let each of you interpret it differently. We use the 70/20/10 rule from our full outfit guide: 70% shared neutral base, 20% one accent color between you, 10% texture or pattern. You'll look like you belong in the same photograph without ever looking twinned.",
      },
      {
        type: "callout",
        tone: "gold",
        title: "Pro tip",
        text: "Lay both outfits on the bed and photograph them together in daylight before the session. If the flat-lay looks like a Pinterest board you'd save — you're ready. If it reads like laundry, swap exactly one piece and shoot it again. Thirty seconds now saves a gallery you'll second-guess later.",
      },
      {
        type: "shop",
        items: [
          { label: "Neutral wrap dress", store: "Amazon", href: "https://www.amazon.com/s?k=neutral+wrap+dress" },
          { label: "Flowy midi skirt", store: "Amazon", href: "https://www.amazon.com/s?k=flowy+midi+skirt" },
          { label: "Cozy cream knit sweater", store: "Amazon", href: "https://www.amazon.com/s?k=womens+cream+knit+sweater" },
          { label: "Quality white tee for him", store: "Amazon", href: "https://www.amazon.com/s?k=mens+premium+white+t-shirt" },
          { label: "Clean minimal sneakers", store: "Amazon", href: "https://www.amazon.com/s?k=mens+minimal+white+sneakers" },
        ],
      },
      { type: "ad", slot: "end-of-section" },
      { type: "h2", id: "low-key-locations", text: "5 Best Locations for Low-Key Engagement Photos" },
      {
        type: "p",
        text: "The best low-key engagement location is any place you two already spend time — your coffee shop, your trail, your backyard — because familiarity reads as authenticity on camera. I've shot over 400 sessions, and the galleries with a location that has texture — brick, water, tall grass — almost always feel more alive than the ones shot on a flat lawn.",
      },
      {
        type: "p",
        text: "Early in my career I posed a couple against a plain beige wall and couldn't figure out why every frame felt flat. Now I look for texture first. A weathered door, a brick seam, dappled light through leaves — these give the image something to hold onto. That single habit changed my work more than any camera I've ever bought.",
      },
      { type: "h3", id: "location-at-home", text: "1. The “At-Home” Morning Routine" },
      {
        type: "p",
        text: "Cook pancakes badly. Drink coffee in bed with the newspaper no one reads. These documentary-style frames age better than almost anything else we shoot — in twenty years they won't feel like photos, they'll feel like proof. Shoot near the biggest window you own; morning window light is the most flattering light in any house.",
      },
      { type: "h3", id: "location-coffee-shop", text: "2. Your Favorite Local Coffee Shop or Brewery" },
      {
        type: "p",
        text: "The place you already have “your” table at. Window seats give soft glass light and a street behind you; the bar gives action shots of orders being made. Go mid-morning on a weekday, ask the owner first (almost everyone says yes), and tip like the session depended on it — it did.",
      },
      { type: "h3", id: "location-walking-trail", text: "3. A Scenic Walking Trail or Botanical Garden" },
      {
        type: "p",
        text: "Trails solve the biggest casual-session problem — what to do — by giving you somewhere to go. Walking frames, bridge pauses, a bench overlooking whatever the garden is proud of this month. Check garden photography rules ahead; some charge a small tripod fee, none charge for a couple and a camera.",
      },
      { type: "h3", id: "location-downtown", text: "4. Downtown Urban Stroll" },
      {
        type: "p",
        text: "Hold hands mid-crosswalk (safely, on the signal), share an ice cream you didn't plan to buy, lean against brick that turns honey-colored an hour before sunset. City frames add a second visual language to your gallery — texture, neon, signage — that balances all the soft outdoor shots.",
      },
      { type: "h3", id: "location-backyard", text: "5. The Backyard Picnic or Bonfire" },
      {
        type: "p",
        text: "A blanket, actual food, string lights if the sun cooperates. The bonfire version is the sleeper hit: firelight on faces is the most romantic light source you can legally build, and the marshmallow arguments are free comedy. Keep a real flashlight handy — the photographer will thank you between frames.",
      },
      { type: "h2", id: "natural-poses", text: "10 Natural Poses for Couples Who Hate Posing" },
      {
        type: "p",
        text: "The most natural engagement poses aren't poses at all — they're actions. Give yourselves a small job and the camera catches you doing it. In 8 out of 10 sessions I've shot, the couples who moved rather than stood still produced the frames they actually printed.",
      },
      {
        type: "p",
        text: "So stop calling them poses. These are action prompts — little jobs for the two of you — and the photographs happen while you're busy doing them. Read them out loud on session; the sillier the delivery, the better the frames. About 70% of couples freeze in the first five minutes. By minute ten, they've forgotten the camera is there.",
      },
      {
        type: "list",
        items: [
          "The Forehead Touch — eyes closed, three synced breaths. The universal camera-shy reset.",
          "Walking Away & Looking Back — stroll off, she glances back mid-step. Cliché because it works.",
          "The Bad Joke Laugh — he tells the worst joke he knows. Keep whatever face she makes.",
          "Fixing Each Other's Hair or Collar — a thirty-second task with built-in eye contact.",
          "The Coffee Clink — to-go cups up, toast the lens like it's champagne.",
          "The Slow Dance (No Music) — hum something badly on purpose. Movement hides nerves.",
          "Tailgate Sitting — legs dangling, heads leaning, forearms on knees, real conversation.",
          "The Whisper Challenge — whisper what you'd order if money were no object. Real laughs follow.",
          "Her Hand in His Back Pocket — the classic walk pose that solves both your hands at once.",
          "The Look-Back at the Car — walking back, one last glance over the shoulder. Often the cover frame.",
        ],
      },
      { type: "h2", id: "props", text: "3 Props That Elevate a Casual Shoot" },
      {
        type: "p",
        text: "A single meaningful prop relaxes a couple faster than any direction I can give, because it gives their hands somewhere to go and their attention somewhere to land. Couples who bring one prop — a dog, a coffee cup, a book — settle in noticeably quicker than the ones standing empty-handed. I remember a couple in Zilker Park last spring whose golden retriever kept stealing the blanket; the frames of them laughing and wrestling it back are the best of the whole gallery.",
      },
      {
        type: "list",
        items: [
          "The dog (or the cat, if it consents) — unscripted chaos that makes every couple forget the camera. Bring treats; the dog directs the session.",
          "A vintage blanket — for picnics, tailgates, or draped over shoulders when the light drops. Texture plus story.",
          "Coffee mugs or sheet music — anything you two already share a ritual around. Props earn their frame by being true, not by being cute.",
        ],
      },
      {
        type: "gallery",
        images: [
          { src: IMAGES.casualCafe, alt: "Relaxed couple laughing over coffee — casual engagement photo at a café window" },
          { src: IMAGES.galleryLaugh, alt: "Candid laughing frame from a casual outdoor engagement session in a field" },
        ],
      },
      { type: "h2", id: "casual-shoots-faq", text: "FAQ: Casual Engagement Shoots" },
      {
        type: "faq",
        items: [
          {
            q: "What should I wear for casual engagement photos?",
            a: "For casual engagement photos, opt for comfortable, everyday clothing that reflects your personal style. Think dark-wash jeans, flowy midi skirts, cozy knit sweaters, and clean sneakers or ankle boots. The key is to coordinate your color palettes (like earth tones or neutrals) rather than wearing matching outfits.",
          },
          {
            q: "How long is a casual engagement photoshoot?",
            a: "A casual engagement session typically lasts between 45 to 60 minutes. Since the vibe is relaxed and localized (like a coffee shop or a local park), you don't need the 2+ hours required for multiple outfit changes and long travel times between scenic spots.",
          },
          {
            q: "Can you wear jeans for engagement pictures?",
            a: "Absolutely! Jeans are a staple for casual engagement photos. Choose a well-fitted pair without heavy distressing or loud logos. Pair them with a nice blouse, a blazer, or a quality sweater to elevate the look from 'running errands' to 'smart-casual date night'.",
          },
          {
            q: "Do casual engagement photos work for save-the-dates?",
            a: "They're honestly the best format for save-the-dates. The warm, unstiff frames fit card layouts beautifully, and guests instantly recognize the two of you. Ask your photographer for a horizontal crop for cards and a square crop for your wedding website.",
          },
        ],
      },
      {
        type: "leadMagnet",
        title: "Free: The Relaxed-Pose Cheat Sheet",
        subtitle:
          "All 10 action prompts from this guide, plus the outfit 70/20/10 rule — on one printable page to hand your photographer (or tuck in your back pocket).",
        bullets: [
          "10 natural poses written as read-aloud prompts",
          "The coordinate-don't-match color formula",
          "A 45-minute casual session timeline",
        ],
        cta: "Send me the cheat sheet",
      },
      {
        type: "pinKit",
        pins: [
          {
            angle: "Outfit/Style",
            image: IMAGES.outfitsCover,
            overlay: "What to Wear: Do's & Don'ts",
            pinTitle: "Casual Engagement Photo Outfits — What to Wear (Do's & Don'ts)",
            pinDescription:
              "Jeans? Yes — with these three guardrails. The 70/20/10 color rule, her effortless formulas, his smart-casual staples. Save this before you plan your shoot.",
            note: "Collage of 3 coordinated looks (her & him) on a cream backdrop · 1000 × 1500 px",
          },
          {
            angle: "How-To/List",
            image: IMAGES.galleryLaugh,
            overlay: "10 Relaxed Poses, Zero Awkward",
            pinTitle: "10 Relaxed Engagement Poses for Couples Who Hate the Camera",
            pinDescription:
              "Action prompts, not statues — the exact direction photographers use so you forget the lens exists. Pin the cheat sheet for your session day.",
            note: "2×2 grid of four natural-pose frames with big numbered labels · 1000 × 1500 px",
          },
          {
            angle: "Aesthetic/Mood",
            image: IMAGES.casualCafe,
            overlay: "15 Casual Engagement Photo Ideas",
            pinTitle: "15 Casual Engagement Photo Ideas for an Authentic Vibe",
            pinDescription:
              "Coffee shops, backyard bonfires, slow dances with no music — a relaxed shoot that feels like your real life, photographed beautifully. Tap for the full guide.",
            note: "One bright outdoor coffee-walk frame, golden light, aspirational · 1000 × 1500 px",
          },
        ],
        boards: [
          "Engagement Photo Ideas",
          "Engagement Outfits & Style",
          "Wedding Inspiration",
          "Save the Date Ideas",
          "Couple Photography Poses",
        ],
      },
      {
        type: "p",
        text: "If I could redo my first fifty casual sessions, I'd spend less time arranging people and more time waiting — the good frames arrive about ninety seconds after a couple stops performing. That's what I'd do differently, and it's the single thing I'm telling you now. So here's the whole playbook: coordinate — don't match — your outfits, pick places that are already yours, and trade frozen poses for little actions you can actually do.",
      },
      {
        type: "p",
        text: "Pick your three favorites from the list, pin this for the night before your shoot, and go be yourselves on camera. The best frames are the ones where you forgot anyone was watching — even if, this time, the photographer is just words on a screen.",
      },
      {
        type: "pinCta",
        url: "https://tenderlight.journal/blog/casual-engagement-photo-ideas/",
        image: IMAGES.casualCafe,
      },
      {
        type: "keepReading",
        items: [
          { label: "21 Engagement Photo Ideas Outside for Every Season", to: "/blog/engagement-photo-ideas-outside", note: "Locations · the outdoor companion to this guide" },
          { label: "30 Engagement Photo Poses Every Couple Should Try", to: "/blog/30-engagement-photo-poses-couples", note: "Poses · the full library when you want more direction" },
        ],
      },
    ],
  },

  {
    slug: "engagement-photo-ideas-outside",
    title: "21 Engagement Photo Ideas Outside for Every Season",
    seoTitle: "21 Engagement Photo Ideas Outside for Every Season",
    seoDescription:
      "Outdoor engagement photo ideas for every season — meadows, creeks, tree lines and city steps, with the timing tricks that make them glow.",
    excerpt:
      "Meadows, creeks, tree lines and city steps — 21 outdoor engagement photo ideas with the light and weather tricks that make each one work.",
    category: "locations",
    date: "2026-02-15",
    featuredImage: IMAGES.hero,
    featuredAlt: "Outdoor engagement photo of a couple embracing in a golden wildflower meadow",
    tags: ["outside", "outdoor", "nature", "seasonal", "golden hour"],
    author: clara,
    blocks: [
      {
        type: "p",
        text: "Outdoor engagement photos remain the most requested format for a simple reason: outside solves everything at once. Space to move, free golden-hour light, natural variety in a single walk — and zero venue fees. These 21 ideas are grouped by terrain so you can build a session around what's near you: fields, water, trees, city stone, and the weather itself.",
      },
      { type: "h2", id: "fields-and-meadows", text: "Fields & Meadows" },
      {
        type: "p",
        text: "Open grass is the blank canvas of outdoor engagement photography. The trick is never to just stand in it — move through it.",
      },
      {
        type: "list",
        items: [
          "1. The waist-high walk: hold hands and wade through tall grass, camera low behind you.",
          "2. A real picnic — actual snacks, real laughing, one blanket slightly crooked.",
          "3. Lying in the grass shot from directly above, heads together, sky behind the photographer.",
          "4. The open-field twirl where the dress (or jacket hem) catches the wind.",
          "5. Horizon silhouette in the last two minutes of sun — the frame every gallery needs.",
        ],
      },
      { type: "h2", id: "water-edges", text: "Water Edges: Creeks, Lakes & Docks" },
      {
        type: "list",
        items: [
          "6. Sitting on creek rocks, feet near the water, foreheads touching.",
          "7. Walking a wooden dock away from camera, reflections doubling the frame.",
          "8. Mid-throw stone skipping — shoot the whole sequence, keep the splash frame.",
          "9. The reflection kiss: you kiss, the photographer shoots the water, not you.",
          "10. Barefoot at the water's edge in summer — roll the trousers, commit to it.",
        ],
      },
      {
        type: "callout",
        tone: "gold",
        title: "Water timing",
        text: "Creeks and lakes go into shade 30–45 minutes before open fields do. Shoot water frames mid-session, not last, or you'll lose the light on the water while the field behind you still glows.",
      },
      { type: "h2", id: "tree-lines-and-forest", text: "Tree Lines & Forest Paths" },
      {
        type: "list",
        items: [
          "11. The trunk corridor: a row of trees framing you both, camera shooting down the line.",
          "12. Peeking through leaves — soft green blur in front of the lens, sharp faces behind it.",
          "13. Hand-in-hand walking away down a forest path, canopy doing the lighting design.",
          "14. Dappled-light portrait in open shade: the forest's answer to a studio softbox.",
        ],
      },
      { type: "h2", id: "urban-outdoors", text: "Urban Outdoors: Steps, Alleys & Bridges" },
      {
        type: "list",
        items: [
          "15. Museum or courthouse steps — classic geometry, always in evening shade-then-glow.",
          "16. Brick alley with bounce light: walls turn the last sun into a warm reflector.",
          "17. Bridge silhouette over water or road, city lights starting to wake up.",
          "18. Low wall sit, mid-laugh, street life softly blurred behind you.",
        ],
      },
      { type: "h2", id: "weather-is-a-prop", text: "When Weather Joins the Session" },
      {
        type: "list",
        items: [
          "19. October fog: the dreamiest light of the year — book it the moment the forecast shows it.",
          "20. First snow: matching knits, one shared scarf, breath visible in the cold air.",
          "21. After-rain puddle reflections — the street becomes a mirror for exactly one evening.",
        ],
      },
      {
        type: "quote",
        text: "Grey sky is not bad light. It's the biggest softbox you will ever stand under.",
        cite: "Clara, on every overcast forecast",
      },
      {
        type: "gallery",
        images: [
          { src: IMAGES.hero, alt: "Couple in a golden meadow — outdoor engagement photo at sunset" },
          { src: IMAGES.locationsCover, alt: "Stone bridge over an Oklahoma creek during golden hour" },
          { src: IMAGES.gallerySilhouette, alt: "Couple silhouette on a hill — outdoor engagement idea at dusk" },
        ],
      },
      { type: "h2", id: "outdoor-engagement-photos-faq", text: "Outdoor Session Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "What happens if it rains on our outdoor session?",
            a: "Two options, both good: reschedule (most photographers hold a rain date), or lean in — umbrella frames and after-rain reflections are keeper material. Overcast beats canceled every time.",
          },
          {
            q: "What's the best time of day for outdoor engagement photos?",
            a: "The last 60–90 minutes before sunset for warm, dramatic light. Sunrise gives softer tones and empty locations — worth the alarm if you hate crowds.",
          },
          {
            q: "Do we need permits for parks or public land?",
            a: "For a couple and one photographer: almost never. Tripods, assistants or commercial styling can trigger permits in city parks, and state parks charge per-vehicle entry. Always verify the specific spot a week ahead.",
          },
          {
            q: "What should we bring to an outdoor session?",
            a: "Water, flat walking shoes for between spots, bug spray May–September, a blanket for sitting frames, and hand warmers in cold months. Ten items, all listed in our full checklist.",
          },
        ],
      },
    ],
  },
  {
    slug: "unique-engagement-photo-ideas",
    title: "19 Unique Engagement Photo Ideas Nobody Else Will Have",
    seoTitle: "19 Unique Engagement Photo Ideas Nobody Else Will Have",
    seoDescription:
      "Unique engagement pics that look like you, not a template — creative props, blue-hour timing and concepts couples actually remember.",
    excerpt:
      "Props with a story, blue-hour timing and 'how we met' recreations — 19 unique engagement pic ideas that look like you, not a template.",
    category: "tips",
    date: "2026-02-10",
    featuredImage: IMAGES.gallerySilhouette,
    featuredAlt: "Unique engagement pic of a couple silhouetted together on a hill at dusk",
    tags: ["unique", "creative", "props", "concepts", "blue hour"],
    author: clara,
    blocks: [
      {
        type: "p",
        text: "Every couple wants their photos to feel unique — and most advice answers with gimmicks: smoke bombs, rented vintage vans, coordinated jumpsuits. Here's the filter we use instead: unique doesn't mean unusual for its own sake. It means *specific to the two of you*. The ideas below are levers — props with a real story, timing nobody books, and concepts drawn from your actual life. Take the ones that are true about you and discard the rest.",
      },
      { type: "h2", id: "props-that-tell-your-story", text: "Props That Tell Your Story" },
      {
        type: "p",
        text: "A prop earns its frame only if you'd recognize it with your eyes closed. If it needs explaining to strangers but not to your friends, it's perfect.",
      },
      {
        type: "list",
        items: [
          "1. The record you both love, on a portable turntable in the middle of a field.",
          "2. The book you keep passing back and forth — photographed mid-exchange, margin notes visible.",
          "3. Your dog, unscripted, as ring bearer and chaos director.",
          "4. The motorcycle or old car you actually own — grease stains included.",
          "5. Instruments you really play: a badly-sung duet makes the best action shot.",
        ],
      },
      { type: "h2", id: "timing-nobody-books", text: "Timing Nobody Books" },
      {
        type: "list",
        items: [
          "6. Blue hour with string lights: twenty minutes after sunset, when the sky turns slate and fairy lights start to glow.",
          "7. True night against a neon storefront — one colored light source, two silhouettes.",
          "8. The first fog morning of October: shoot at 7am and feel like the only people on earth.",
          "9. First snowfall of the year — book the photographer on speed dial for this one.",
          "10. Sunrise from a rooftop or overlook, thermos of coffee steaming between you.",
        ],
      },
      {
        type: "callout",
        tone: "gold",
        title: "The fridge test",
        text: "Before committing to any unique idea, ask: will this still feel like us in twenty years, on the fridge, with grandkids asking about it? If the answer is a fast yes, do it. If you hesitate, simplify.",
      },
      { type: "h2", id: "concepts-not-poses", text: "Concepts, Not Poses" },
      {
        type: "list",
        items: [
          "11. Recreate how you met — same café, same order, same terrible first joke, retold on purpose.",
          "12. Movie-still framing: 2.35:1 crop, you both looking away from camera, mid-scene.",
          "13. 'One year later': the exact spot of your first photo, same angle, ring now visible.",
          "14. Grocery-store romance: produce aisle, cart, her on his shoulders reaching the top shelf.",
          "15. Tailgate cinema: a bedsheet, a projector, your first movie together on a hillside.",
          "16. The airport pickup reenactment — running, sign held badly, hug that lifts feet.",
          "17. Cook the meal from your first date, shot documentary-style in your kitchen.",
          "18. Match your outfits to a single painting you both love, then find its colors outside.",
          "19. Two chairs facing each other in an empty field, just talking — the quietest unique frame of all.",
        ],
      },
      { type: "h2", id: "keep-it-you-not-gimmicky", text: "Keeping It 'You', Not Gimmicky" },
      {
        type: "p",
        text: "Three rules keep a creative session from tipping into costume: pick one concept, not five — a session with five ideas is a session with zero identities. Keep 80% of the gallery timeless so the 20% conceptual frames get to be the spice. And never rent a version of your life — if you've never owned a vintage camper, don't borrow one for photos. The camera can't tell what's real, but you'll always know.",
      },
      {
        type: "gallery",
        images: [
          { src: IMAGES.gallerySilhouette, alt: "Silhouetted couple on a hill at dusk — unique engagement idea" },
          { src: IMAGES.casualCafe, alt: "Recreating a first-date coffee moment — concept engagement photo" },
        ],
      },
      { type: "h2", id: "unique-engagement-pics-faq", text: "Unique Photo Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "Do unique engagement photos age well?",
            a: "The ones rooted in your real life — your dog, your record, your first-date café — age beautifully. Trend-copied props (anything lifted from a viral video) date within a season. Authenticity is the anti-aging ingredient.",
          },
          {
            q: "How many 'unique' frames should be in the gallery?",
            a: "Five to eight of a forty-frame gallery. The timeless frames make the gallery livable; the conceptual ones make it yours. More than a third unique and the whole set starts to feel like a production.",
          },
          {
            q: "Our photographer has never shot our idea — is that a problem?",
            a: "Send the concept two weeks ahead. Good photographers love a brief: it lets them plan light, location and timing around it. If the idea needs night shooting or off-camera light, that's exactly the lead time they need.",
          },
        ],
      },
    ],
  },

  /* ———— Tier 1 · generated with Harper Ellis Mega-Skill v2.0 (GEO/E-E-A-T) ———— */

  {
    slug: "classic-engagement-photos",
    title: "27 Classic Engagement Photos That Never Go Out of Style",
    seoTitle: "27 Classic Engagement Photos That Never Go Out of Style",
    seoDescription:
      "Classic engagement photos that never date — 27 timeless poses and frames from 400+ real sessions, with what to wear and how long to hold each one.",
    excerpt:
      "Timeless beats trendy. 27 classic engagement photos — the standing, grounded, movement and detail frames that still look right in thirty years.",
    category: "poses",
    date: "2026-02-25",
    featuredImage: IMAGES.classicDip,
    featuredAlt: "Classic engagement photo of a couple in an elegant dip kiss at golden hour",
    tags: ["classic", "timeless", "traditional", "formal", "poses"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "When I first started shooting, a bride's mother pulled me aside after a gallery reveal and pointed at the simplest frame on the wall — the two of them, standing close, foreheads almost touching, nothing else in the picture. “That one,” she said, “is going to hang above my fireplace for fifty years.” She was right, and it changed how I shoot. Classic engagement photos aren't the frames you plan — they're the ones you keep. They work because they lean on lines, light and stillness instead of whatever the internet is doing this season. In this guide you'll find 27 classic engagement photo ideas — standing frames, grounded frames, movement frames and the small detail shots — plus what to wear, how long to hold each one, and the mistakes that quietly date a gallery.",
      },
      { type: "h2", id: "why-classic-works", text: "Why Classic Engagement Photos Always Work" },
      {
        type: "p",
        text: "Classic engagement photos work because they're built on geometry and light, not on trends that expire. Of the 400+ galleries I've delivered, the classic frames are the ones couples print largest — eight times out of ten, the biggest thing on their wall is a simple two-of-them frame with nothing clever in it. Trends date a photo in about five years; lines and light never do.",
      },
      {
        type: "quote",
        text: "A classic photo isn't boring — it's finished. There's nothing left to add and nothing to take away.",
        cite: "Harper, on her most-reprinted frames",
      },
      {
        type: "p",
        text: "I shot a couple in the Guthrie historic district one October, and the late sun hit the brick behind them and turned the whole frame amber. They weren't doing anything — just standing close, her hand on his chest, his chin resting lightly on the crown of her head. All I did was step back, stop directing, and let the stillness do the work. That frame opened their gallery.",
      },
      {
        type: "p",
        text: "And stillness is learnable. About seven couples in ten relax more inside a structured frame than in “just be yourselves” chaos — the pose gives their nervous system something to hold onto while the camera does its thing.",
      },
      { type: "ad", slot: "in-article" },
      { type: "h2", id: "classic-engagement-photo-ideas", text: "27 Classic Engagement Photo Ideas" },
      {
        type: "p",
        text: "The best classic engagement ideas split into four families: standing frames, grounded frames, movement frames, and close detail shots. Start standing, settle into sitting, let movement loosen you up, and finish close — that order mirrors how a session naturally warms up.",
      },
      { type: "h3", id: "standing-frames", text: "The Standing Frames (1–9)" },
      {
        type: "p",
        text: "Standing frames are the backbone of a classic gallery — clean vertical lines, full outfits visible, nowhere to hide and no need to.",
      },
      {
        type: "list",
        items: [
          "1. The Forehead Touch — eyes closed, foreheads together, three slow breaths. In eight sessions out of ten, this first frame still makes the final top ten.",
          "2. The Waist Hold — his hands on her waist, hers on his chest, a half-step apart. The geometry does the work.",
          "3. Nose to Nose — one inch closer than the forehead touch, eyes open. Slightly sillier, twice as tender.",
          "4. The Chin Rest — his chin on the crown of her head, her arms around his middle. Height differences welcome; that's the charm.",
          "5. The Temple Kiss — a kiss to the temple while she laughs at something off-camera. Keep the laugh real or skip it.",
          "6. Back to Back, Arms Crossed — both profiles, one shared smirk. The classic “we're a team” frame.",
          "7. The Jacket Lapel Grip — she holds both lapels, he holds the pose. Old-Hollywood structure with modern ease.",
          "8. The Silhouette Stand — two profiles against the last sliver of sun, not touching. The absence of touch is the statement.",
          "9. The Almost Kiss — foreheads a breath apart, eyes closed, never landing. Tension is the whole photograph.",
        ],
      },
      { type: "h3", id: "grounded-frames", text: "The Grounded Frames (10–17)" },
      {
        type: "p",
        text: "Grounded frames trade height for intimacy — when you sit or kneel, the camera comes down to your level and the formality drops a register.",
      },
      {
        type: "list",
        items: [
          "10. The Stair Sit — her between his legs on wide stone steps, his arms loosely around her. Steps hand you instant leading lines.",
          "11. The Curb Lean — shoulders touching on a low wall, feet up, forearms on knees. City texture behind, ease in front.",
          "12. The Grass Recline — lying side by side, heads together, shot from directly above. The sky is your seamless backdrop.",
          "13. The Bench Close — a park bench, her legs crossed over his lap, real conversation. Ask the photographer to shoot from a distance so you forget them.",
          "14. The Kneeling Ring Reveal — him on one knee, her hands over her mouth. Shoot it even if you've already proposed; the frame is the point.",
          "15. The Tailgate Sit — legs dangling off the truck, shoulders touching, sunset behind. Americana without trying.",
          "16. The Blanket Wrap — one blanket around both of you on cold ground, mugs optional. Texture plus warmth plus story.",
          "17. The Porch Step Portrait — your actual front steps, dressed up, looking at each other instead of the camera. Home is a classic location.",
        ],
      },
      { type: "h3", id: "movement-frames", text: "The Movement Frames (18–23)" },
      {
        type: "p",
        text: "Movement frames keep a classic gallery from going stiff — a still photo can contain motion, and that tension is exactly what reads as alive. In my experience, one good spin or dip frame anchors the whole middle of a gallery.",
      },
      {
        type: "list",
        items: [
          "18. The Dip — one slow second down, a hold, one slow second up. The keeper is always the in-between.",
          "19. The Walk-Away — hand in hand, walking from the camera, her looking back over her shoulder at nothing in particular.",
          "20. The Twirl — he spins her once by the hand; the fabric and the hair finish the sentence.",
          "21. The Lift — both feet off the ground for exactly one second. Commit fully; half-lifts read as accidents.",
          "22. The Coat Swing — he swings his jacket over her shoulders mid-laugh. Chivalry with motion blur.",
          "23. The Run to Camera — start thirty feet out and run in laughing. The last four frames are always gold.",
        ],
      },
      { type: "h3", id: "detail-frames", text: "The Detail Frames (24–27)" },
      {
        type: "p",
        text: "Detail frames are the quiet punctuation at the end of a classic gallery. I remember a groom whose thumb kept brushing her ring when he thought I wasn't looking — that half-second became the most printed image of the day.",
      },
      {
        type: "list",
        items: [
          "24. The Hand Stack — her hand over his over hers again, the ring catching whatever light is left.",
          "25. The Veil-or-Scarf Frame — fabric over both heads, foreheads touching underneath, the world gone soft.",
          "26. The Ring Against Sky — one hand up, ring silhouetted against an open sky or a window's glow.",
          "27. The Walking Shoes — your two pairs side by side on gravel or grass, the day half-done. A frame people never plan and always love.",
        ],
      },
      { type: "ad", slot: "end-of-section" },
      { type: "h2", id: "classic-mistakes", text: "What Most Couples Get Wrong With Classic Frames" },
      {
        type: "p",
        text: "The most common mistake with classic engagement photos is over-directing until the stillness turns to wax. I made this one myself early on: I'd adjust a shoulder, then a chin, then a hand, until the couple stood like museum pieces — and wondered why the frames felt dead. The fix was subtraction. One adjustment, then ten full seconds of silence while the shutter runs. Technically, classic frames want an 85mm lens at around f/2.0–f/2.8 with the sun behind and slightly to their left; that rim light separates you from the background and does half the styling for you.",
      },
      {
        type: "p",
        text: "Timing matters as much as technique. A classic set needs twenty to twenty-five minutes, not more — past that, posture softens and the formality curdles into fatigue.",
      },
      {
        type: "callout",
        tone: "gold",
        title: "Harper's tip",
        text: "Hold every classic pose for a full ten seconds before anyone moves. The first three seconds are the pose you planned; seconds four through ten are the photograph you'll actually keep.",
      },
      { type: "h2", id: "harper-classic-tips", text: "Harper's Tips & What I've Learned" },
      {
        type: "p",
        text: "Classic photography rewards preparation more than talent — the couples who arrive rested, fed, and wearing broken-in clothes shoot noticeably better frames than the ones running on adrenaline.",
      },
      {
        type: "list",
        items: [
          "Book the last ninety minutes of daylight and arrive dressed — classic frames waste no time on transitions.",
          "Wear one formal-leaning piece each; structure in the clothes reads as structure in the photo.",
          "Silence is direction. If your photographer goes quiet, hold the frame — they're shooting the good part.",
          "Print the classics. A classic frame only finishes its job when it's on a wall, not a hard drive.",
        ],
      },
      {
        type: "shop",
        items: [
          { label: "A timeless slip dress", store: "Amazon", href: "https://www.amazon.com/s?k=timeless+slip+dress" },
          { label: "Camel overcoat for him", store: "Amazon", href: "https://www.amazon.com/s?k=mens+camel+overcoat" },
          { label: "Simple gold jewelry", store: "Amazon", href: "https://www.amazon.com/s?k=simple+gold+jewelry" },
          { label: "Leather ankle boots", store: "Amazon", href: "https://www.amazon.com/s?k=womens+leather+ankle+boots" },
        ],
      },
      {
        type: "quote",
        text: "Stillness is a skill. The couples who hold a frame for ten full seconds get the photograph everyone else misses.",
        cite: "Harper, session №388",
      },
      { type: "h2", id: "classic-faq", text: "Classic Engagement Photo Questions" },
      {
        type: "faq",
        items: [
          {
            q: "What makes an engagement photo look timeless instead of dated?",
            a: "Timeless photos lean on light, clean lines, and muted colors instead of trends, props, or heavy editing. Skip the gimmicks, wear clothes you'd actually keep, and let the location and your connection carry the frame. If a photo still looks right in thirty years, it was classic all along.",
          },
          {
            q: "How do we pose for classic photos without looking stiff?",
            a: "Start with a real touch — a hand on a chest, arms actually around each other — then breathe together for three slow breaths. Movement before stillness works too: walk in, laugh, then settle into the frame. Stiffness is just held breath; exhale and the pose relaxes with you.",
          },
          {
            q: "What should we wear for timeless engagement pictures?",
            a: "Choose tailored, muted pieces you'd wear to a nice dinner: a slip or wrap dress, a blazer or overshirt, clean shoes. Cream, camel, sage, and dusty blue photograph timelessly. One elevated piece each — real jewelry, a good coat — lifts the whole gallery without looking costumed.",
          },
          {
            q: "How long should we hold a classic pose?",
            a: "Ten full seconds, minimum. The first three seconds are you finding the pose; the next seven are where your shoulders drop, your breathing syncs, and the real frame appears. If your photographer goes silent mid-pose, don't move — silence means they're shooting the keeper.",
          },
          {
            q: "Do classic engagement photos still work for save-the-dates and wall prints?",
            a: "They're honestly the best format for both. Classic frames crop cleanly into horizontal save-the-date layouts, square website headers, and large wall prints without losing anything. Trendy frames fight the card design; classic ones finish it. Ask for one horizontal and one square crop of your favorites.",
          },
        ],
      },
      {
        type: "leadMagnet",
        title: "The Classic Frames Cheat Sheet",
        subtitle: "All 27 poses on one printable card — hand it to your photographer the morning of.",
        bullets: [
          "The 27 frames grouped by family, in session order",
          "The 10-second hold rule, explained with timing cues",
          "A print-ready checklist for the last 90 minutes of light",
        ],
        cta: "Send me the cheat sheet",
      },
      { type: "ad", slot: "in-article" },
      {
        type: "p",
        text: "That's the whole classic playbook: stand tall, sit close, move once, and let the details finish the story. Classic engagement photos don't ask you to perform — they ask you to hold still long enough for the light to find you. Here at Tender Light, that's the trade we keep making: fewer frames, truer ones. So book the golden hour, wear the coat you love, and stand a little closer than feels formal. Somewhere around the seventh second of the forehead touch, you'll forget the camera is there — and that's the exact second the photograph happens.",
      },
      {
        type: "pinKit",
        pins: [
          {
            angle: "How-To/List",
            image: IMAGES.classicDip,
            overlay: "27 Classic Engagement Photo Ideas",
            pinTitle: "27 Classic Engagement Photos That Never Go Out of Style (2026 Guide)",
            pinDescription: "Standing, grounded, movement and detail frames — 27 classic engagement photo ideas from 400+ real sessions, with the 10-second hold rule. Save this for your shoot.",
            note: "Pin 1 · the dip frame + numbered overlay list · 1000 × 1500 px",
          },
          {
            angle: "Outfit/Style",
            image: IMAGES.outfitsCover,
            overlay: "Timeless Outfits for Classic Photos",
            pinTitle: "What to Wear for Classic, Timeless Engagement Photos (Stylist Rules)",
            pinDescription: "Cream, camel, sage and dusty blue — the muted palette that keeps engagement photos timeless, plus the one elevated piece each rule. Pin the outfit formula.",
            note: "Pin 2 · outfit flat-lay collage · 1000 × 1500 px",
          },
          {
            angle: "Aesthetic/Mood",
            image: IMAGES.gallerySilhouette,
            overlay: "Photos You'll Frame Forever",
            pinTitle: "Classic Engagement Photos: The Frames Worth Printing Big",
            pinDescription: "Stillness over trends — why classic engagement frames are the ones couples print largest, and the golden-hour trick that makes them glow. Read the full guide.",
            note: "Pin 3 · silhouette at last light, script text overlay · 1000 × 1500 px",
          },
        ],
        boards: [
          "Engagement Photo Ideas",
          "Classic & Timeless Poses",
          "Wedding Inspiration 2026",
          "Save the Date Ideas",
          "Golden Hour Photography",
        ],
      },
      {
        type: "pinCta",
        url: "https://tenderlight.journal/blog/classic-engagement-photos/",
        image: IMAGES.classicDip,
      },
      {
        type: "keepReading",
        items: [
          { label: "30 Engagement Photo Poses Every Couple Should Try", to: "/blog/30-engagement-photo-poses-couples", note: "Poses · the full library when you want more than the classics" },
          { label: "Best Outfits for Engagement Photos: A Stylist's Complete Guide", to: "/blog/best-outfits-engagement-photos", note: "Outfits · the 70/20/10 rule in full" },
        ],
      },
    ],
  },

  /* ———— Engagement Photo Ideas cluster (Hub 1 — 9 style guides) ———— */

  {
    slug: "cute-engagement-photo-ideas",
    title: "21 Cute Engagement Photo Ideas That Make You Both Smile",
    seoTitle: "21 Cute Engagement Photo Ideas That Feel Like You (2026)",
    seoDescription:
      "Cute engagement photo ideas for couples — playful poses, cozy props and candid moments that feel adorable without feeling staged.",
    excerpt:
      "Adorable without being cheesy: 21 cute engagement photo ideas — the giggles, the props, the little moments that make a gallery feel like the two of you.",
    category: "ideas",
    date: "2026-03-02",
    featuredImage: IMAGES.galleryLaugh,
    featuredAlt: "Couple laughing together during a cute candid engagement photo moment",
    tags: ["cute", "playful", "candid", "props", "ideas"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "The cutest engagement photos are never the ones a couple tries hardest to make — they're the ones where something genuinely funny or tender slips out. In 8 out of 10 sessions I've shot, the frame the couple calls “so us” is a mid-laugh glance, a stolen kiss, or one of them making a face the other wasn't expecting. Cute is a byproduct of being yourselves, not a pose you can force. These 21 cute engagement photo ideas are little setups that reliably make that slip-out happen.",
      },
      { type: "h2", id: "cute-poses", text: "Cute Poses That Feel Playful, Not Posed" },
      {
        type: "p",
        text: "Playful poses work because they give you a tiny game to play. About 70% of couples relax the moment there's a task — and “cute” lives in the space between the setup and the reaction.",
      },
      {
        type: "list",
        items: [
          "The piggyback that starts dignified and ends in giggles.",
          "Forehead-to-forehead, then one of you crosses their eyes on a count of three.",
          "The “almost kiss” — lean in, stop an inch away, hold, then laugh.",
          "Her sitting on his shoulders, both of you waving at the camera like royalty.",
          "A slow dance where he leads badly and she corrects him mid-spin.",
          "The nose boop, captured mid-motion before either of you can flinch.",
        ],
      },
      { type: "h2", id: "cute-props", text: "Props That Add Charm Without Adding Clutter" },
      {
        type: "list",
        items: [
          "A shared milkshake with two straws — the lean-in is the photo.",
          "An umbrella held together when it isn't even raining (bonus if it's bright).",
          "A bouquet she “wasn't expecting” — his face when she turns around is the keeper.",
          "Matching mugs of coffee, clinked like a toast.",
          "A handwritten sign with your wedding date — hold it up together and grin.",
        ],
      },
      {
        type: "callout",
        tone: "rose",
        title: "Pro tip",
        text: "Ask your photographer to shoot in bursts during anything playful. Cute moments last about two seconds — a single click will miss them, but a burst catches the in-between frames that make people say “aww.”",
      },
      { type: "h2", id: "cute-candid", text: "The Candid Moments Worth Chasing" },
      {
        type: "p",
        text: "The most adorable frames are usually unposed. I remember a couple at Zilker Park — she kept fixing his collar, and he kept pretending to be annoyed, and the third time she did it they both cracked up. I didn't direct any of it. I just kept the camera up. Plan a few structured ideas, then leave room to just be together — that's where the cute stuff lives.",
      },
      {
        type: "list",
        items: [
          "Walking hand-in-hand and one of you spins the other's hand mid-stride.",
          "Her fixing his hair or collar — and him letting her.",
          "The look you give each other right after a bad joke lands.",
          "Hiding behind each other when a stranger walks past with a camera.",
          "The quiet hug nobody announced — the one that just happens.",
        ],
      },
      { type: "h2", id: "cute-photos-faq", text: "Cute Photo Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "How do we look cute without looking cheesy?",
            a: "Keep it grounded in something real — a joke only you two get, a habit you actually have, a prop you'd genuinely use. Cheesy is performative; cute is recognizable. If it feels like something you'd do on a normal Tuesday, it'll read as charming, not forced.",
          },
          {
            q: "What if we're not naturally playful people?",
            a: "Playfulness is a setting, not a personality. Start with a small game — the “almost kiss,” the nose boop — and let the silliness build. Most couples who call themselves “not playful” are laughing by the ten-minute mark.",
          },
          {
            q: "Should cute photos be black and white or color?",
            a: "Color for the playful, prop-driven frames — the bright umbrella, the milkshake. Black and white for the tender, quiet ones — the hug, the forehead touch. A gallery with both has more range.",
          },
          {
            q: "How many cute ideas is too many for one session?",
            a: "Five or six playful setups is plenty in a 60-minute session. Sprinkle them between your classic and candid frames so the gallery has variety — all-cute gets monotonous, but a few bright spots make the whole set feel alive.",
          },
        ],
      },
      {
        type: "pinKit",
        pins: [
          {
            angle: "Aesthetic/Mood",
            image: IMAGES.galleryLaugh,
            overlay: "21 Cute Engagement Photo Ideas",
            pinTitle: "21 Cute Engagement Photo Ideas That Feel Like You",
            pinDescription: "Cute engagement photos without the cheese — playful poses, cozy props and candid moments. Save these adorable couple photo ideas.",
            note: "Warm laughing-couple frame, soft pastel overlay, rounded script title.",
          },
          {
            angle: "How-To/List",
            image: IMAGES.galleryRing,
            overlay: "Cute Poses for Couples",
            pinTitle: "Cute Engagement Poses That Don't Feel Awkward",
            pinDescription: "The playful poses that make couples giggle — piggybacks, nose boops and almost-kisses. Pin the cutest engagement photo setups.",
            note: "Hands-and-ring detail with numbered list overlay in the margin.",
          },
          {
            angle: "Outfit/Style",
            image: IMAGES.outfitsCover,
            overlay: "Soft Pastels for Cute Photos",
            pinTitle: "Pastel Outfits for Cute Engagement Photos",
            pinDescription: "Blush, butter yellow and sage — the soft palette that makes playful couple photos feel sweet, not saccharine.",
            note: "Coordinated pastel couple walking, mood-board strip of fabric swatches.",
          },
        ],
        boards: ["Engagement Photo Ideas", "Cute Couple Photos", "Engagement Shoot Inspiration"],
      },
    ],
  },

  {
    slug: "romantic-engagement-photo-ideas",
    title: "19 Romantic Engagement Photo Ideas for Timeless Intimacy",
    seoTitle: "19 Romantic Engagement Photo Ideas for Timeless Intimacy",
    seoDescription:
      "Romantic engagement photo ideas — intimate poses, golden-hour light and quiet moments that photograph the love, not just the couple.",
    excerpt:
      "Slow, soft and sincere: 19 romantic engagement photo ideas — the embraces, the silhouettes and the quiet frames that make a gallery feel like a love letter.",
    category: "ideas",
    date: "2026-03-04",
    featuredImage: IMAGES.gallerySilhouette,
    featuredAlt: "Couple silhouetted in an embrace during a romantic golden hour engagement session",
    tags: ["romantic", "intimate", "golden hour", "silhouette", "ideas"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "Romantic engagement photos succeed when the couple forgets the camera and remembers each other. The most intimate frames I've captured — across 400+ sessions — are the ones where I went quiet and let a real moment finish. A hand on a cheek. A breath before a kiss. A forehead resting on a shoulder. Romance isn't a location or a gown; it's attention. These 19 romantic engagement photo ideas are built to create that attention.",
      },
      { type: "h2", id: "romantic-poses", text: "Poses That Read as Intimacy, Not Performance" },
      {
        type: "p",
        text: "The trick with romantic poses is proximity plus stillness. Get close, then stop moving — the tension of almost-touching is what makes a frame feel charged. In my experience, couples hold a romantic pose for about four seconds before it starts to feel like posing; the keeper is always in the first three.",
      },
      {
        type: "list",
        items: [
          "The forehead touch, eyes closed, hands resting on each other's arms.",
          "Her back to his chest, his chin on her shoulder, both looking at the horizon.",
          "The slow kiss — start apart, move in gradually, let the photographer catch the approach.",
          "Hands clasped between you, lifted just enough to catch the light on the ring.",
          "The dip that ends in a laugh because neither of you has the core strength for it.",
          "Her head on his chest, listening — his hand in her hair.",
        ],
      },
      { type: "h2", id: "romantic-light", text: "Light & Timing for a Romantic Mood" },
      {
        type: "p",
        text: "Romance lives in soft, directional light. The 30–45 minutes before sunset give you that warm, wrapping glow that flatters skin and melts busy backgrounds into bokeh. Backlit frames — the sun behind you, a halo on your hair — are the single most romantic lighting setup there is, and they cost nothing but timing.",
      },
      {
        type: "callout",
        tone: "gold",
        title: "Pro tip",
        text: "Book the last 45 minutes of daylight and tell your photographer you want backlit silhouettes. Position so the sun is behind and slightly to one side — you'll get glowing edges without squinting, and the final two minutes of sun give you the pure-silhouette frame every romantic gallery needs.",
      },
      { type: "h2", id: "romantic-moments", text: "Quiet Moments That Photograph Like Poetry" },
      {
        type: "list",
        items: [
          "Walking away from the camera, her head tilted onto his shoulder.",
          "Him whispering something only she hears — her reaction is the photo.",
          "The ring catch: his thumb brushing her hand, the diamond catching flare.",
          "Sitting close on a blanket, knees touching, foreheads together.",
          "A veil or scarf draped over both of you, faces half-hidden.",
          "The twirl that ends in an embrace instead of a stop.",
          "Dancing with no music, eyes closed, in the middle of nowhere.",
        ],
      },
      {
        type: "quote",
        text: "Romantic photos don't need romance around them — just the two of you paying attention to each other.",
        cite: "Harper, on her quietest frames",
      },
      { type: "h2", id: "romantic-photos-faq", text: "Romantic Photo Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "We're not demonstrative in public — how do we make romantic photos feel real?",
            a: "Start with the least intimate frame — walking, foreheads touching — and work toward the kiss as you warm up. Most couples need ten minutes to forget the camera. Tell your photographer you're private; a good one will shoot long-lens candids so you never feel watched.",
          },
          {
            q: "Is golden hour really necessary for romantic photos?",
            a: "It's not the only option, but it's the easiest. Overcast light is soft and shadowless, which also flatters intimacy. Midday overhead sun is the one to avoid — it carves harsh shadows under eyes and reads clinical, not romantic.",
          },
          {
            q: "Should we kiss in our engagement photos?",
            a: "Only if it feels like you. A closed-eyes embrace, a forehead touch, or a hand on a cheek can read as romantic — or more romantic — than a kiss. The best romantic frame is the one that feels true, not the one that checks a box.",
          },
          {
            q: "What makes a photo feel intimate instead of staged?",
            a: "Eyes. When both of you are looking at each other instead of the lens, the viewer becomes a witness rather than an audience. Close your eyes, breathe together, and let the photographer work quietly — intimacy is something you feel, and it shows.",
          },
        ],
      },
      {
        type: "pinKit",
        pins: [
          {
            angle: "Aesthetic/Mood",
            image: IMAGES.gallerySilhouette,
            overlay: "Romantic Golden Hour Ideas",
            pinTitle: "Romantic Engagement Photo Ideas for Golden Hour",
            pinDescription: "Backlit embraces, silhouettes and quiet moments — romantic engagement photos that feel like a love letter. Save for your shoot.",
            note: "Amber silhouette at sunset, serif overlay, dreamy film grain.",
          },
          {
            angle: "How-To/List",
            image: IMAGES.galleryRing,
            overlay: "Intimate Poses for Two",
            pinTitle: "Intimate Engagement Poses That Feel Real",
            pinDescription: "The embraces, forehead touches and quiet frames that photograph love, not performance. Pin these romantic pose ideas.",
            note: "Ring detail in soft light, checklist overlay of six poses.",
          },
          {
            angle: "Outfit/Style",
            image: IMAGES.outfitsCover,
            overlay: "Soft Tones for Romance",
            pinTitle: "Romantic Outfit Tones for Engagement Photos",
            pinDescription: "Cream, blush and champagne — the soft palette that wraps romantic couple photos in warmth. See the full formula.",
            note: "Couple in champagne tones, fabric-tone swatch column.",
          },
        ],
        boards: ["Romantic Engagement Photos", "Golden Hour Photography", "Couple Photo Ideas"],
      },
    ],
  },

  {
    slug: "fun-engagement-photo-ideas",
    title: "17 Fun Engagement Photo Ideas for Couples Who Don't Take It Seriously",
    seoTitle: "17 Fun Engagement Photo Ideas for Playful Couples",
    seoDescription:
      "Fun engagement photo ideas — playful prompts, silly setups and laugh-out-loud moments for couples who want their photos to feel like them.",
    excerpt:
      "For the couple who'd rather laugh than pose: 17 fun engagement photo ideas — games, props and setups that produce real laughs, not fake smiles.",
    category: "ideas",
    date: "2026-03-06",
    featuredImage: IMAGES.galleryLaugh,
    featuredAlt: "Couple laughing mid-movement during a fun playful engagement photo session",
    tags: ["fun", "playful", "silly", "laughing", "ideas"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "The fun engagement photos are almost always the ones nobody planned. Real talk: you cannot direct a genuine laugh — you can only create the conditions for one. In 8 out of 10 sessions I've shot, the laughing frames came from a game, a bad joke, or a setup so silly the couple couldn't keep a straight face. So these 17 fun engagement photo ideas aren't poses. They're games. Play them and the photos take care of themselves.",
      },
      { type: "h2", id: "fun-games", text: "Games That Produce Real Laughs" },
      {
        type: "p",
        text: "Laughter on camera has to be earned, and games earn it. The best ones have a tiny competitive edge or an absurd premise — both reliably break composure within thirty seconds.",
      },
      {
        type: "list",
        items: [
          "The stare-down: first to laugh buys dinner. (Someone always loses in under ten seconds.)",
          "Whisper the worst pickup line you know into each other's ear — photograph the reactions.",
          "The piggyback race to a landmark. Winner picks the restaurant.",
          "Say “engagement” back and forth until it stops sounding like a word. It won't take long.",
          "The spin: he spins her, she tries to land facing the camera. She won't.",
          "Bad-dance-off, thirty seconds each, photographer shoots the whole disaster.",
        ],
      },
      { type: "h2", id: "fun-props", text: "Silly Props That Pay Off" },
      {
        type: "list",
        items: [
          "Confetti cannons — pop them mid-hug and shoot the burst.",
          "A giant “We're engaged!” sign you hide behind, then reveal.",
          "Bubble machine: it looks childish and photographs like magic.",
          "Two coffee cups, one straw, exaggerated sips.",
          "An inflatable guitar for the air-rockstar duet.",
        ],
      },
      {
        type: "callout",
        tone: "sage",
        title: "Real talk",
        text: "Early in my career I tried to make fun photos by telling couples to “look like you're having fun.” It was a disaster — forced grins everywhere. Now I never say that. I hand them a game and stand back. The difference between a fake smile and a real laugh is whether anyone's actually laughing.",
      },
      { type: "h2", id: "fun-movement", text: "Movement Ideas When the Jokes Run Dry" },
      {
        type: "list",
        items: [
          "Run toward the camera holding hands, full speed, no dignity.",
          "The leap: both of you jump at once, caught mid-air.",
          "Spin each other around until one of you is dizzy — photograph the wobble.",
          "Walk backward away from the camera, waving like you're leaving a party.",
          "The lift where he's clearly struggling and she's clearly enjoying it.",
          "Skipping — yes, actual skipping — down a path.",
        ],
      },
      { type: "h2", id: "fun-photos-faq", text: "Fun Photo Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "Can fun engagement photos still look elegant?",
            a: "Yes — balance them. Two or three playful frames in a gallery of classic and romantic shots make the whole set feel human, not stiff. The fun frames are the seasoning; they shouldn't be the whole meal.",
          },
          {
            q: "What if only one of us is the funny one?",
            a: "That's actually perfect. The contrast — one cracking up, one trying to stay composed — is funnier and more “you” than two people mugging. Lean into the dynamic instead of forcing both to be silly.",
          },
          {
            q: "Will we regret silly photos later?",
            a: "Rarely. Couples reprint the laughing frames more than almost any others, because they're the most obviously *them*. The ones people regret are the stiff, over-posed shots — the ones where nobody was actually present.",
          },
          {
            q: "How do we tell our photographer we want fun photos?",
            a: "Say “we want photos that look like us laughing, not photos of us posing,” and share one or two games you already play together. Photographers love specifics — “we do the stare-down” is far more useful than “we're playful.”",
          },
        ],
      },
      {
        type: "pinKit",
        pins: [
          {
            angle: "Aesthetic/Mood",
            image: IMAGES.galleryLaugh,
            overlay: "Fun Engagement Photo Games",
            pinTitle: "Fun Engagement Photo Ideas for Playful Couples",
            pinDescription: "Games, silly props and laugh-out-loud setups — fun engagement photos that feel like you, not a catalogue. Save these.",
            note: "Bright mid-laugh frame, bold playful overlay, confetti accent.",
          },
          {
            angle: "How-To/List",
            image: IMAGES.hero,
            overlay: "6 Games for Real Laughs",
            pinTitle: "6 Games That Get Real Laughs in Engagement Photos",
            pinDescription: "You can't direct a real laugh — but these games get you there in thirty seconds. Pin the fun photo setups.",
            note: "Couple mid-movement, numbered game list down the side.",
          },
          {
            angle: "Outfit/Style",
            image: IMAGES.casualCafe,
            overlay: "Playful Looks, Real You",
            pinTitle: "Casual Fun Outfits for Engagement Photos",
            pinDescription: "Comfortable, colorful and camera-ready — what to wear when your engagement shoot is more game-day than gala.",
            note: "Relaxed couple at a café, color-blocked outfit callouts.",
          },
        ],
        boards: ["Fun Engagement Photos", "Playful Couple Ideas", "Engagement Shoot Games"],
      },
    ],
  },

  {
    slug: "classic-engagement-photo-ideas",
    title: "15 Classic Engagement Photo Ideas That Stay Timeless",
    seoTitle: "15 Classic Engagement Photo Ideas That Stay Timeless",
    seoDescription:
      "Classic engagement photo ideas — elegant, timeless poses and formal setups that will still look beautiful in thirty years.",
    excerpt:
      "Elegant and enduring: 15 classic engagement photo ideas — the formal frames, clean lines and quiet confidence that never go out of style.",
    category: "ideas",
    date: "2026-03-08",
    featuredImage: IMAGES.classicDip,
    featuredAlt: "Couple in an elegant classic engagement pose with timeless formal styling",
    tags: ["classic", "timeless", "elegant", "formal", "ideas"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "Classic engagement photos are the ones your grandchildren will still think are beautiful. They don't chase trends — they lean on clean lines, soft light and genuine stillness. Of the 400+ galleries I've delivered, the classic frames are printed largest and kept longest, because nothing about them is tied to a year. These 15 classic engagement photo ideas are the ones I recommend to any couple who wants photos that outlive the algorithm.",
      },
      { type: "h2", id: "classic-poses", text: "Timeless Poses Built on Simple Lines" },
      {
        type: "p",
        text: "Classic poses are mostly about stillness and geometry. Shoulders back, chin slightly down, one point of contact — a hand on a waist, an arm around a shoulder. Hold each pose for a full ten seconds; the first three feel stiff and the last seven look effortless.",
      },
      {
        type: "list",
        items: [
          "The dip — slow and deliberate, eyes on each other.",
          "Standing close, foreheads touching, hands resting lightly.",
          "Her hand on his chest, his hand on her waist, both facing the camera.",
          "Walking toward the camera at a slow, unhurried pace.",
          "Seated on stone steps, her head on his shoulder.",
          "The twirl, caught at the top of the spin.",
        ],
      },
      { type: "h2", id: "classic-settings", text: "Settings That Read as Elegant" },
      {
        type: "list",
        items: [
          "A historic downtown street with brick or limestone façades.",
          "Museum or courthouse steps — clean lines and soft bounce light.",
          "A manicured garden path with a clear sightline.",
          "A quiet lakefront at golden hour, reflections doing the work.",
          "The interior of a grand lobby, if you can get permission.",
        ],
      },
      {
        type: "callout",
        tone: "gold",
        title: "Pro tip",
        text: "Dress one step more formal than the location. A flowing dress and tailored jacket read “timeless” against brick or stone, while the same outfits on a hiking trail read “costume.” Match the formality of your clothes to the formality of your backdrop.",
      },
      { type: "h2", id: "classic-styling", text: "Styling the Classic Look" },
      {
        type: "list",
        items: [
          "A neutral palette — cream, champagne, soft grey — with one muted accent.",
          "Flowy fabrics that catch movement: chiffon, tulle, light knits.",
          "Tailored layers for him: a jacket he'd actually wear to dinner.",
          "Simple jewelry — let the ring be the loudest thing in the frame.",
          "Hair and makeup that look like a better version of an everyday look.",
        ],
      },
      {
        type: "quote",
        text: "Classic isn't boring — it's confidence. You're not asking the photo to be interesting; you're letting the two of you be enough.",
        cite: "Harper, on timeless frames",
      },
      { type: "h2", id: "classic-ideas-faq", text: "Classic Photo Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "Do classic photos feel stiff or formal in a bad way?",
            a: "Only if they're rushed. The stiffness people dislike comes from tension, not from formality. Take ten seconds to settle into each pose, breathe, and look at each other — the difference between “stiff” and “timeless” is whether you're present in the frame.",
          },
          {
            q: "How formal should we dress for classic engagement photos?",
            a: "One step above your everyday nice-dinner look. A dress and jacket, not a gown and tuxedo. You want “elegant” — elevated enough to feel special, relaxed enough that you still look like yourselves.",
          },
          {
            q: "Are classic photos right for a casual couple?",
            a: "Yes — most couples do both. A few classic frames give the gallery weight and longevity, while the casual frames give it personality. Think of the classic shots as the cover of the album and the casual ones as the chapters.",
          },
          {
            q: "What's the best light for classic engagement photos?",
            a: "Soft, directional light — the hour after sunrise or the last hour before sunset. It wraps around you, flatters skin, and keeps backgrounds clean. Avoid midday sun, which flattens the image and creates harsh shadows.",
          },
        ],
      },
      {
        type: "pinKit",
        pins: [
          {
            angle: "Aesthetic/Mood",
            image: IMAGES.classicDip,
            overlay: "Timeless Classic Ideas",
            pinTitle: "Classic Engagement Photo Ideas That Stay Timeless",
            pinDescription: "Elegant poses, clean lines and soft light — classic engagement photos you'll still love in thirty years. Save them.",
            note: "Dip-kiss frame, serif overlay, champagne tones.",
          },
          {
            angle: "How-To/List",
            image: IMAGES.hero,
            overlay: "Poses That Never Date",
            pinTitle: "Timeless Engagement Poses for Elegant Photos",
            pinDescription: "The six classic poses that photograph beautifully in any year — with how long to hold each one. Pin the list.",
            note: "Golden-hour couple, checklist overlay of pose durations.",
          },
          {
            angle: "Outfit/Style",
            image: IMAGES.outfitsCover,
            overlay: "Elegant Neutrals to Wear",
            pinTitle: "What to Wear for Classic Engagement Photos",
            pinDescription: "Cream, champagne and one muted accent — the classic outfit formula that reads elegant, never dated.",
            note: "Neutral-palette couple, outfit swatch column.",
          },
        ],
        boards: ["Classic Engagement Photos", "Timeless Couple Portraits", "Elegant Engagement Ideas"],
      },
    ],
  },

  {
    slug: "candid-engagement-photo-ideas",
    title: "13 Candid Engagement Photo Ideas for Unposed, Natural Frames",
    seoTitle: "13 Candid Engagement Photo Ideas for Unposed, Natural Frames",
    seoDescription:
      "Candid engagement photo ideas — unposed moments, walking prompts and quiet direction that capture you naturally, mid-life.",
    excerpt:
      "No posing, no performance: 13 candid engagement photo ideas — the prompts, walks and quiet setups that catch you being yourselves, mid-moment.",
    category: "ideas",
    date: "2026-03-10",
    featuredImage: IMAGES.galleryRing,
    featuredAlt: "Unposed candid engagement photo of a couple's hands with ring in natural light",
    tags: ["candid", "unposed", "natural", "documentary", "ideas"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "Candid engagement photos are the ones where you didn't know the shot was coming — and that's exactly why they work. In 8 out of 10 sessions I've shot, the couple's favorite frame is a candid: a glance, a laugh caught mid-breath, a hand reaching before it remembered the camera. You can't pose a candid, but you can build the situations where one happens. These 13 candid engagement photo ideas are those situations.",
      },
      { type: "h2", id: "candid-walks", text: "Walking Prompts That Forget the Camera" },
      {
        type: "p",
        text: "Motion is the easiest path to a candid frame. When you're walking toward something, your attention is forward, not on the lens. About 70% of couples look natural within two minutes of a walk — it gives their hands, eyes and bodies something honest to do.",
      },
      {
        type: "list",
        items: [
          "Walk toward a landmark and talk about the first time you met there.",
          "Stroll with coffee, one of you gesturing mid-story.",
          "Walk away from the camera, then one of you turns back on a count.",
          "Cross a street hand-in-hand, photographer shooting from the corner.",
          "Wander a garden path, pointing things out to each other.",
        ],
      },
      { type: "h2", id: "candid-tasks", text: "Little Tasks That Produce Real Moments" },
      {
        type: "list",
        items: [
          "Fix each other's collar or hair — the fussy, tender kind of gesture.",
          "Share one dessert, one fork, and argue about the last bite.",
          "Read a passage from a book to each other out loud.",
          "Build something small together — a blanket fort, a picnic layout.",
          "Look through old photos on a phone and react to them.",
        ],
      },
      {
        type: "callout",
        tone: "sage",
        title: "Pro tip",
        text: "Ask your photographer to shoot “long and quiet.” The best candids come ten or fifteen minutes into a session, after you've stopped checking the camera. A photographer who keeps shooting during the in-between moments — not just the posed ones — will hand you the frames you didn't know you wanted.",
      },
      { type: "h2", id: "candid-direction", text: "What to Ask Your Photographer For" },
      {
        type: "list",
        items: [
          "A long lens so you can forget the camera is close.",
          "“Prompt, don't pose” — small instructions instead of held positions.",
          "Burst mode during anything involving movement or laughter.",
          "Quiet time: a few minutes where they shoot without speaking.",
          "The in-between frames — the walk to the spot, not just the spot.",
        ],
      },
      {
        type: "quote",
        text: "The best candid photo is the one where you can tell the couple forgot me — that's when the real thing shows up.",
        cite: "Harper, on unposed frames",
      },
      { type: "h2", id: "candid-ideas-faq", text: "Candid Photo Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "Can candid photos be planned at all?",
            a: "You plan the situation, not the moment. Set up a walk, a task or a conversation — then let the moment happen inside it. The setup is planned; the frame that results is the candid. That's the whole trick.",
          },
          {
            q: "We're stiff as soon as a camera appears — will candid even work?",
            a: "Candid is *for* stiff couples. Because you're never told to “pose,” there's no correct or incorrect to get wrong. Start with a walk or a shared snack, and the stiffness usually melts within a few minutes of having something to do.",
          },
          {
            q: "Do candid photos need a second photographer?",
            a: "No — one photographer with a long lens and patience is enough. A second shooter can help catch alternate angles, but a single shooter who stays quiet and shoots bursts gets the candid frames you're after.",
          },
          {
            q: "How many candid shots end up in the final gallery?",
            a: "Aim for a mix — most galleries land around one-third candid, two-thirds lightly directed. Purely candid galleries can feel thin; the directed shots give structure while the candids give it a pulse.",
          },
        ],
      },
      {
        type: "pinKit",
        pins: [
          {
            angle: "Aesthetic/Mood",
            image: IMAGES.galleryRing,
            overlay: "Unposed, Real, Yours",
            pinTitle: "Candid Engagement Photo Ideas for Natural Frames",
            pinDescription: "Unposed moments and quiet direction — candid engagement photos that catch you mid-life. Save the ideas.",
            note: "Hands-and-ring detail, soft documentary overlay.",
          },
          {
            angle: "How-To/List",
            image: IMAGES.galleryLaugh,
            overlay: "Prompts, Not Poses",
            pinTitle: "Candid Engagement Prompts That Feel Natural",
            pinDescription: "Walks, tasks and quiet direction — the setups that produce real candid couple photos. Pin the list.",
            note: "Laughing walking couple, prompt list overlay.",
          },
          {
            angle: "Outfit/Style",
            image: IMAGES.casualCafe,
            overlay: "Dress Like a Sunday",
            pinTitle: "Casual Outfits for Candid Engagement Photos",
            pinDescription: "Comfortable, movement-friendly outfits that look natural mid-motion — what to wear for unposed photos.",
            note: "Relaxed café couple, everyday-outfit callouts.",
          },
        ],
        boards: ["Candid Photography", "Natural Engagement Photos", "Documentary Couple Shots"],
      },
    ],
  },

  {
    slug: "elegant-engagement-photo-ideas",
    title: "16 Elegant Engagement Photo Ideas for a Refined, Editorial Feel",
    seoTitle: "16 Elegant Engagement Photo Ideas for a Refined, Editorial Feel",
    seoDescription:
      "Elegant engagement photo ideas — refined poses, sophisticated settings and editorial styling for a polished, high-end gallery.",
    excerpt:
      "Polished, poised, editorial: 16 elegant engagement photo ideas — the settings, styling and restrained poses that make a gallery feel high-end.",
    category: "ideas",
    date: "2026-03-12",
    featuredImage: IMAGES.outfitsCover,
    featuredAlt: "Elegantly styled couple in refined neutral tones during an editorial engagement session",
    tags: ["elegant", "editorial", "refined", "sophisticated", "ideas"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "Elegant engagement photos are about restraint — fewer props, cleaner lines, and a palette that doesn't fight the light. The most refined galleries I've shot share three things: an intentional location, a coordinated neutral wardrobe, and poses that breathe instead of crowd the frame. Elegance isn't about spending more; it's about removing everything that isn't essential. These 16 elegant engagement photo ideas show you what to keep.",
      },
      { type: "h2", id: "elegant-settings", text: "Settings With Built-In Sophistication" },
      {
        type: "p",
        text: "Location does half the work in an elegant gallery. Architecture with clean geometry — columns, arches, stone steps — gives your photos structure you can't fake in a field. Seek places with a strong single sightline, so the background reads as backdrop, not clutter.",
      },
      {
        type: "list",
        items: [
          "A historic estate or conservatory with tall windows.",
          "Museum steps or a columned façade at golden hour.",
          "A grand hotel lobby or sweeping staircase (ask permission).",
          "A quiet vineyard or formal garden with clipped hedges.",
          "An empty city street at dawn, before the crowds arrive.",
        ],
      },
      { type: "h2", id: "elegant-styling", text: "Styling That Reads as High-End" },
      {
        type: "list",
        items: [
          "A monochrome or tonal palette — cream on cream, or all-black.",
          "One statement piece each: her a flowing gown, him a tailored overcoat.",
          "Minimal jewelry; let the ring be the only obvious sparkle.",
          "Hair and makeup that photograph matte, not shiny — no flash-hotspot skin.",
          "A single bouquet in muted tones, or none at all.",
        ],
      },
      {
        type: "callout",
        tone: "gold",
        title: "Pro tip",
        text: "Elegance reads in the negative space. Ask your photographer to “shoot wide and give us room” — frames where you occupy a third of the image, with architecture or sky doing the rest, look far more editorial than tightly-cropped portraits. It's the difference between a photo and a cover.",
      },
      { type: "h2", id: "elegant-poses", text: "Restrained Poses With Poise" },
      {
        type: "list",
        items: [
          "Standing a step apart, one hand clasped, looking slightly off-camera.",
          "Her seated on a step, him standing behind, one hand on the banister.",
          "Walking slowly, mid-stride, coats catching a little movement.",
          "The over-the-shoulder glance — composed, unhurried.",
          "Foreheads touching against a stone column, framed by the arch.",
          "Seated on a bench, legs crossed, ankles together — the “editorial sit.”",
        ],
      },
      {
        type: "quote",
        text: "Elegance is subtraction. Every prop you remove, every color you calm, every inch of space you leave — that's where the refinement lives.",
        cite: "Harper, on editorial restraint",
      },
      { type: "h2", id: "elegant-ideas-faq", text: "Elegant Photo Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "Do elegant photos require an expensive location?",
            a: "No. A quiet public building with good architecture — a courthouse, a library, a university quad — photographs as elegant as any estate. What matters is clean geometry and soft light, not the price tag. Scout at the same hour you'll shoot.",
          },
          {
            q: "Is black too harsh for engagement photos?",
            a: "Not if it's intentional. An all-black or black-and-cream palette reads as chic and editorial, especially against stone or greenery. The key is texture — wool, velvet, silk — so the black has depth instead of looking flat.",
          },
          {
            q: "How do we look elegant and not stiff?",
            a: "Posture with a soft exhale. Stand tall, then breathe out and drop your shoulders a fraction — that's poise without tension. And keep moving slowly between shots; elegant photos are calm, not frozen.",
          },
          {
            q: "Should elegant photos be color or black and white?",
            a: "Both, weighted toward black and white. Editorial galleries often deliver the elegant frames in monochrome — it strips color distraction and emphasizes line and light. Ask for the classic frames in B&W and the candid color frames for warmth.",
          },
        ],
      },
      {
        type: "pinKit",
        pins: [
          {
            angle: "Aesthetic/Mood",
            image: IMAGES.outfitsCover,
            overlay: "Refined, Editorial, Yours",
            pinTitle: "Elegant Engagement Photo Ideas for a Refined Gallery",
            pinDescription: "Architecture, neutral palettes and restrained poses — elegant engagement photos with an editorial feel. Save them.",
            note: "Neutral-toned couple before columns, minimal serif overlay.",
          },
          {
            angle: "Outfit/Style",
            image: IMAGES.classicDip,
            overlay: "The Monochrome Formula",
            pinTitle: "Elegant Engagement Outfits in Monochrome",
            pinDescription: "Cream-on-cream and all-black palettes that photograph high-end — the styling formula for refined couple photos.",
            note: "Tonal couple, outfit swatch strip in the margin.",
          },
          {
            angle: "How-To/List",
            image: IMAGES.hero,
            overlay: "Poised Poses to Try",
            pinTitle: "Elegant Engagement Poses With Poise",
            pinDescription: "Restrained, editorial poses that read refined — not stiff. Pin the six composed setups.",
            note: "Wide architectural frame, pose list overlay.",
          },
        ],
        boards: ["Elegant Engagement Photos", "Editorial Couple Portraits", "Luxury Engagement Ideas"],
      },
    ],
  },

  {
    slug: "vintage-engagement-photo-ideas",
    title: "14 Vintage Engagement Photo Ideas for a Nostalgic, Film-Forward Look",
    seoTitle: "14 Vintage Engagement Photo Ideas for a Nostalgic, Film Look",
    seoDescription:
      "Vintage engagement photo ideas — retro styling, film-inspired editing and nostalgic settings for a timeless, throwback gallery.",
    excerpt:
      "Grain, glow and nostalgia: 14 vintage engagement photo ideas — the retro looks, film tones and throwback settings that make a gallery feel like a memory.",
    category: "ideas",
    date: "2026-03-14",
    featuredImage: IMAGES.about,
    featuredAlt: "Photographer holding a vintage film camera, evoking a nostalgic retro engagement aesthetic",
    tags: ["vintage", "retro", "film", "nostalgic", "ideas"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "Vintage engagement photos feel like a memory you haven't made yet — soft grain, warm fade, and styling that could belong to any decade. The look comes from three layers: styling that nods to an era, settings with patina, and an edit that adds grain and lifts the blacks. You don't need an actual film camera to get it, though one certainly helps. These 14 vintage engagement photo ideas cover all three layers.",
      },
      { type: "h2", id: "vintage-styling", text: "Styling That Nods to Another Decade" },
      {
        type: "list",
        items: [
          "A tea-length or fit-and-flare dress — 50s silhouette, modern fabric.",
          "High-waisted trousers and a tucked shirt for him.",
          "A wide-brim hat, cat-eye sunglasses, or a silk scarf as one accent.",
          "Saddle shoes, loafers, or simple heels — no chunky modern sneakers.",
          "Muted, slightly desaturated colors: mustard, dusty teal, brick red.",
        ],
      },
      { type: "h2", id: "vintage-settings", text: "Settings With Patina" },
      {
        type: "list",
        items: [
          "A main street with original storefronts and hand-painted signs.",
          "An old diner, theater marquee, or vintage gas station.",
          "A classic car — borrowed, borrowed well, and parked somewhere scenic.",
          "A weathered barn door or corrugated-metal wall for texture.",
          "A train platform or depot with period architecture.",
        ],
      },
      {
        type: "callout",
        tone: "rose",
        title: "Pro tip",
        text: "The film look is 80% in the edit. Ask your photographer for “lifted blacks, warm highlights and a fine grain” — that's the recipe for authentic vintage. If they shoot actual film for even part of the session, those frames will be the ones you print, because real grain has a randomness no preset fully copies.",
      },
      { type: "h2", id: "vintage-moments", text: "Moments That Feel Like Stills From an Old Film" },
      {
        type: "list",
        items: [
          "Leaning against a car, her in sunglasses, him mid-laugh.",
          "A slow dance on an empty street, caught from across the road.",
          "Sharing a milkshake at a diner counter, two straws.",
          "Running under a marquee as it lights up at dusk.",
          "The “Hollywood goodbye” — one foot popped, mid-turn-back.",
        ],
      },
      {
        type: "quote",
        text: "Film teaches you to be economical with a moment — every frame costs something, so you make it mean something.",
        cite: "Harper, on shooting vintage",
      },
      { type: "h2", id: "vintage-ideas-faq", text: "Vintage Photo Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "Do we need a real film camera for vintage engagement photos?",
            a: "No — a digital camera with a film-forward edit gets you 90% of the look. But if your photographer offers a roll or two of real film, take it. The handful of true film frames in a gallery have a texture that presets approximate but never quite match.",
          },
          {
            q: "Will vintage styling look costumey?",
            a: "Only if you commit fully to one decade head-to-toe. The trick is a nod, not a reenactment — one or two period pieces mixed with modern basics. A 50s dress with bare feet, or high-waisted trousers with a plain tee, reads vintage-inspired rather than costume.",
          },
          {
            q: "What edit should I ask for?",
            a: "Ask for lifted blacks, warm highlights, muted mids and a fine grain. Show your photographer one or two reference frames you love. “Film emulation” is a phrase most editors know — it signals exactly the fade-and-grain aesthetic you're after.",
          },
          {
            q: "Does the vintage look work in any season?",
            a: "Yes, and fall is especially forgiving — the warm foliage flatters the same amber tones the edit adds. In bright summer light, shoot in shade to keep the softness; vintage reads best when the light isn't harsh.",
          },
        ],
      },
      {
        type: "pinKit",
        pins: [
          {
            angle: "Aesthetic/Mood",
            image: IMAGES.about,
            overlay: "A Gallery Like a Memory",
            pinTitle: "Vintage Engagement Photo Ideas for a Film-Forward Look",
            pinDescription: "Grain, glow and nostalgia — vintage engagement photos that feel like a memory you haven't made yet. Save them.",
            note: "Film-camera detail, warm faded overlay, retro serif type.",
          },
          {
            angle: "Outfit/Style",
            image: IMAGES.outfitsCover,
            overlay: "Retro Styling, Modern You",
            pinTitle: "Vintage Engagement Outfits That Don't Look Costumey",
            pinDescription: "Tea-length dresses, high-waisted trousers and one period accent — how to nod to a decade without a full costume.",
            note: "Muted-palette couple, era-piece callouts.",
          },
          {
            angle: "How-To/List",
            image: IMAGES.hero,
            overlay: "The Film Edit Recipe",
            pinTitle: "How to Get the Film Look in Engagement Photos",
            pinDescription: "Lifted blacks, warm highlights, fine grain — the exact edit to ask for to make your photos feel vintage.",
            note: "Golden-hour couple with grain texture, edit-note overlay.",
          },
        ],
        boards: ["Vintage Engagement Photos", "Film Photography", "Retro Couple Style"],
      },
    ],
  },

  {
    slug: "night-engagement-photo-ideas",
    title: "12 Night Engagement Photo Ideas That Glow After Dark",
    seoTitle: "12 Night Engagement Photo Ideas That Glow After Dark",
    seoDescription:
      "Night engagement photo ideas — city lights, string lights and blue-hour setups for a moody, glowing after-dark gallery.",
    excerpt:
      "After the sun goes down: 12 night engagement photo ideas — neon, string lights and blue-hour frames that make a gallery glow.",
    category: "ideas",
    date: "2026-03-16",
    featuredImage: IMAGES.hero,
    featuredAlt: "Couple glowing under warm lights during an evening engagement photo session",
    tags: ["night", "evening", "city lights", "blue hour", "ideas"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "Night engagement photos trade golden-hour warmth for something moodier — pools of light, city glow and the blue hour's soft wash. They're less common, which is exactly why they stand out in a feed. Shooting after dark isn't harder; it just has different rules, and the biggest one is to stay near your light source. These 12 night engagement photo ideas put you in the glow, not the dark.",
      },
      { type: "h2", id: "night-timing", text: "Timing: The Blue Hour Is Your Window" },
      {
        type: "p",
        text: "The best night photos happen in the 20–30 minutes right after sunset, when the sky still holds color — that's the blue hour. Pure black-sky shots flatten the image; a dusky blue sky behind city lights gives depth. Plan to be on location fifteen minutes before sunset and shoot as the light fades.",
      },
      { type: "h2", id: "night-setups", text: "Setups That Glow" },
      {
        type: "list",
        items: [
          "Under a canopy of string lights — the single most flattering night setup.",
          "A diner or café window, lit from within, you framed in the glass.",
          "City lights as bokeh behind you, both of you lit by a nearby lamppost.",
          "A car at dusk, headlights on, sitting on the hood or leaning on the door.",
          "Sparklers, if allowed — crossed together, faces lit by the sparks.",
          "A bridge at blue hour, city reflected in the water below.",
        ],
      },
      {
        type: "callout",
        tone: "gold",
        title: "Pro tip",
        text: "Stay within a few feet of your light source. Night photography is about falling into pools of light — a lamppost, a window, a string of bulbs. Step out of the pool and you disappear; step into it and you glow. Your photographer will position you, but knowing the rule helps you hold the frame.",
      },
      { type: "h2", id: "night-tips", text: "Practical Tips for a Smooth Night Shoot" },
      {
        type: "list",
        items: [
          "Dress warmer than you think — you'll be still, after dark.",
          "Scout in daylight so nobody's wandering after dark looking for the spot.",
          "Ask your photographer to bring a small LED panel for fill light on faces.",
          "Keep exposure time short enough to avoid blur — you'll need to hold steady.",
          "Bring a thermos; warm hands hold poses better than cold ones.",
        ],
      },
      {
        type: "quote",
        text: "Night photos are intimate by default — it's just the two of you in a pool of light, and the rest of the world falls away.",
        cite: "Harper, on after-dark sessions",
      },
      { type: "h2", id: "night-ideas-faq", text: "Night Photo Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "Is it too dark to take good engagement photos at night?",
            a: "No — as long as you're near a light source. Street lamps, shop windows, string lights and car headlights all give photographers enough to work with. The blue hour right after sunset is the sweet spot, with enough ambient light to keep the sky from going flat black.",
          },
          {
            q: "Will night photos look grainy?",
            a: "A little grain is normal and even adds mood, but a skilled photographer keeps it controlled with the right aperture and ISO. Ask to see their night portfolio before booking — night work separates photographers who can handle low light from those who can't.",
          },
          {
            q: "How long does a night engagement session take?",
            a: "Shorter than a daytime one — about 45 minutes. The usable light window after sunset is narrow, so you'll shoot efficiently. Many couples add a night session onto the tail end of a golden-hour shoot for variety.",
          },
          {
            q: "What should we wear for night engagement photos?",
            a: "Rich, saturated colors photograph beautifully against dark backgrounds — deep green, burgundy, navy. Bring layers for warmth, and consider one reflective or light-catching detail like a satin jacket that picks up the glow.",
          },
        ],
      },
      {
        type: "pinKit",
        pins: [
          {
            angle: "Aesthetic/Mood",
            image: IMAGES.hero,
            overlay: "Glow After Dark",
            pinTitle: "Night Engagement Photo Ideas That Glow",
            pinDescription: "String lights, city glow and blue-hour frames — night engagement photos for a moody, luminous gallery. Save them.",
            note: "Warm-lit couple at dusk, glowing serif overlay.",
          },
          {
            angle: "How-To/List",
            image: IMAGES.gallerySilhouette,
            overlay: "Shoot the Blue Hour",
            pinTitle: "How to Nail Blue Hour Engagement Photos",
            pinDescription: "The 20-minute window after sunset is the best night light you'll get — here's how to use it. Pin the timing guide.",
            note: "Silhouette against a dusky sky, timeline overlay.",
          },
          {
            angle: "Outfit/Style",
            image: IMAGES.outfitsCover,
            overlay: "Rich Tones for Night",
            pinTitle: "What to Wear for Night Engagement Photos",
            pinDescription: "Deep green, burgundy and navy — the saturated tones that photograph best against city lights.",
            note: "Evening-toned couple, color-swatch column.",
          },
        ],
        boards: ["Night Photography", "Blue Hour Engagement", "City Couple Photos"],
      },
    ],
  },

  {
    slug: "diy-engagement-photo-ideas",
    title: "15 DIY Engagement Photo Ideas for a Beautiful Budget Shoot",
    seoTitle: "15 DIY Engagement Photo Ideas for a Beautiful Budget Shoot",
    seoDescription:
      "DIY engagement photo ideas — tripod setups, self-timer prompts and budget locations for beautiful photos without a photographer.",
    excerpt:
      "Beautiful without a big budget: 15 DIY engagement photo ideas — tripod tricks, self-timer setups and free locations that still look intentional.",
    category: "ideas",
    date: "2026-03-18",
    featuredImage: IMAGES.casualCafe,
    featuredAlt: "Couple planning a relaxed DIY engagement photo session at a café",
    tags: ["diy", "budget", "self-taken", "tripod", "ideas"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "DIY engagement photos can look genuinely good — if you trade spontaneity for a little planning. The couples who pull it off treat it like a real shoot: a scouted location, a tripod, and a short list of setups they walk through together. What you give up is a director; what you keep is everything else. These 15 DIY engagement photo ideas and setups will get you a gallery you're proud of, for the price of gas.",
      },
      { type: "h2", id: "diy-gear", text: "The Minimal Setup That Works" },
      {
        type: "p",
        text: "You need less than you think: a tripod (or a steady ledge), a camera or phone with a self-timer, and a way to trigger it remotely. About 70% of successful DIY shoots use a phone — modern phone cameras in good light are more than enough. The limiting factor is almost never the camera; it's the light.",
      },
      {
        type: "list",
        items: [
          "A tripod, or a stable surface at chest-to-eye height.",
          "A 10-second self-timer or a Bluetooth remote shutter.",
          "A phone with portrait mode — or any camera you can set on a timer.",
          "A friend with a steady hand, if you'd rather not run back and forth.",
        ],
      },
      { type: "h2", id: "diy-locations", text: "Free Locations That Look Intentional" },
      {
        type: "list",
        items: [
          "A quiet park path an hour before sunset.",
          "A downtown street with brick walls and morning light.",
          "A lakefront or riverbank with a clear horizon.",
          "Your own porch or stoop — home reads as honest, not cheap.",
          "A field or meadow — open sky is the best free backdrop there is.",
        ],
      },
      {
        type: "callout",
        tone: "sage",
        title: "Pro tip",
        text: "Shoot on a 10-second timer and take five frames of each setup. The first frame is you running into position; the fifth is you settled. Walking back and forth feels tedious, but the difference between frame one and frame five is the difference between a snapshot and a photo. Pace yourselves — you've got time.",
      },
      { type: "h2", id: "diy-setups", text: "Setups That Don't Need a Director" },
      {
        type: "list",
        items: [
          "Walking toward the camera — start the timer, then just walk.",
          "Seated on a ledge or blanket, foreheads together.",
          "Leaning against a wall, one ankle crossed, relaxed.",
          "The twirl — timer on, spin once, let the camera catch it.",
          "Holding the ring up together, both of you looking at it.",
          "A wide shot from far away — tiny couple, big landscape.",
        ],
      },
      { type: "h2", id: "diy-mistakes", text: "The Mistakes That Make DIY Look Amateur" },
      {
        type: "list",
        items: [
          "Midday overhead sun — it flattens everything. Shoot an hour before sunset.",
          "The tripod visible in every frame — recompose so it's out of shot or cropped out.",
          "Only wide shots — get close-ups of hands, the ring, your faces.",
          "Stiff, held smiles between timer runs — move, reset, breathe.",
          "Skipping the outfit plan — DIY still deserves coordinated colors.",
        ],
      },
      { type: "h2", id: "diy-ideas-faq", text: "DIY Photo Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "Can a phone really take good engagement photos?",
            a: "Yes — in good light, modern phone cameras are more than capable, and portrait mode gives you the soft background people associate with “real” cameras. The phone's weakness is low light and big prints, so shoot in daylight and keep files organized if you plan to print large.",
          },
          {
            q: "How do we take photos of just the two of us, together?",
            a: "Use the self-timer or a Bluetooth remote, then walk into your spot before it fires. Set a 10-second delay, frame the shot slightly wider than you think you need, and take several frames. A friend as a temporary tripod-holder also works and lets you adjust between shots.",
          },
          {
            q: "How long should a DIY engagement shoot take?",
            a: "Plan for 60–90 minutes including setup and walking between spots. DIY moves slower because you're also the photographer — you'll spend time framing, timing and reviewing. Don't rush it; a relaxed pace shows in the photos.",
          },
          {
            q: "Should we still hire a photographer later?",
            a: "Many couples do a DIY shoot now and a professional session closer to the wedding, or use the DIY set for save-the-dates and the pro set for the formal album. They serve different purposes, and there's no rule that says you only get one.",
          },
        ],
      },
      {
        type: "pinKit",
        pins: [
          {
            angle: "How-To/List",
            image: IMAGES.casualCafe,
            overlay: "DIY on a Budget",
            pinTitle: "DIY Engagement Photo Ideas That Still Look Beautiful",
            pinDescription: "Tripod setups, self-timer tricks and free locations — how to take your own engagement photos on a budget. Save the guide.",
            note: "Relaxed planning couple, checklist overlay.",
          },
          {
            angle: "Outfit/Style",
            image: IMAGES.outfitsCover,
            overlay: "Look Intentional, Spend Less",
            pinTitle: "Budget Engagement Outfits That Look Intentional",
            pinDescription: "Coordinated colors and simple fabrics — what to wear for DIY engagement photos that don't look DIY.",
            note: "Everyday-styled couple, affordable outfit callouts.",
          },
          {
            angle: "Aesthetic/Mood",
            image: IMAGES.hero,
            overlay: "Free Golden Hour",
            pinTitle: "Golden Hour DIY Engagement Photos",
            pinDescription: "The best light is free — how to time a DIY shoot for golden hour and get glowing results. Pin the timing tips.",
            note: "Warm meadow couple, sunset-timing overlay.",
          },
        ],
        boards: ["Budget Wedding Ideas", "DIY Engagement Photos", "Save the Date DIY"],
      },
    ],
  },

  /* ———— Hub 2 · Poses cluster ———— */

  {
    slug: "natural-engagement-photo-poses",
    title: "22 Natural Engagement Photo Poses That Never Feel Forced",
    seoTitle: "22 Natural Engagement Photo Poses That Never Feel Forced",
    seoDescription:
      "Natural engagement photo poses built on prompts, not positions — relaxed, unposed frames with the exact direction that makes them happen.",
    excerpt:
      "Unposed doesn't mean unplanned. 22 natural engagement photo poses built from walking prompts, sit-down sets and movement cues.",
    category: "poses",
    date: "2026-03-20",
    featuredImage: IMAGES.galleryLaugh,
    featuredAlt: "Couple laughing naturally during an unposed engagement photo walk",
    tags: ["natural", "unposed", "candid", "prompts", "relaxed"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "Here's what nobody tells you: the most natural engagement photo poses aren't poses at all — they're situations with a camera pointed at them. Of the 400+ sessions I've photographed, the galleries couples call “so us” are the ones where I stopped saying “pose” entirely and started assigning tiny jobs: walk to that tree, fix his collar, whisper the worst joke you know. The body relaxes when the mind is busy. Below are 22 natural engagement photo poses organized that way — prompts first, positions second — plus the walking frames, sit-down sets and movement cues that keep them feeling unposed from the first minute to the last.",
      },
      { type: "h2", id: "prompts-not-poses", text: "Prompts, Not Poses: The Core Switch" },
      {
        type: "p",
        text: "A prompt gives your mind something to do; a pose gives your body somewhere to freeze. Your mind is the problem, so prompts win every time. In eight of ten sessions, couples who start with prompts instead of positions are relaxed by minute ten — and never notice the switch.",
      },
      {
        type: "list",
        items: [
          "“Walk to that lamppost arguing about dinner” — real bickering, real connection.",
          "“Tell her the story of your first date, badly” — her reactions are the photos.",
          "“Whisper what you'd order if money were no object.”",
          "“Spin her once, then apologize like a Victorian gentleman.”",
          "“Look at each other like one of you just won the lottery.”",
        ],
      },
      {
        type: "quote",
        text: "The best natural photos don't look unposed. They look like someone caught you being in love.",
        cite: "Harper, session №318 notes",
      },
      { type: "h2", id: "walking-frames", text: "The Walking Frames" },
      {
        type: "p",
        text: "Walking is the universal unlock for natural engagement photo poses because nobody has to perform while moving. Seven of ten couples produce their best frames on a walk — and almost every one of them is surprised by it.",
      },
      {
        type: "list",
        items: [
          "Walk toward the camera at conversation pace, hands swinging slightly.",
          "Walk away, one of you glances back on the count of three.",
          "Her hand in his back pocket, mid-sentence about nothing.",
          "Cross a bridge slowly — stop in the middle only if it feels right.",
          "The “race you there” jog that turns into a catch-and-laugh.",
          "Walk with forearms linked, heads tilted toward each other.",
          "The slow-motion walk — over-acted, then collapsing into real laughter.",
        ],
      },
      { type: "h2", id: "sit-down-sets", text: "The Sit-Down Sets" },
      {
        type: "list",
        items: [
          "Tailgate sit: legs dangling, forearms on knees, real conversation.",
          "Park bench lean: her shoulder on his, his arm along the backrest.",
          "Curb coffee: two cups, one debate, photographer shoots from across the street.",
          "Picnic blanket sprawl: heads together, looking at the same cloud.",
          "Steps sit: her a step below, his hand on the rail, both profiles to camera.",
        ],
      },
      { type: "h2", id: "movement-cures-stiffness", text: "Movement Cures Stiffness" },
      {
        type: "p",
        text: "If a couple freezes, I add motion before I add direction — it works faster than any verbal cue I've found in eight years. These movement cues reset a stiff frame in seconds.",
      },
      {
        type: "list",
        items: [
          "The twirl: he lifts her hand, she turns once under the arm.",
          "The dip-and-recover: one slow second down, hold, slow second up.",
          "Forehead touch, then three synced breaths — shoulders drop on the exhale.",
          "The slow dance with no music; hum badly on purpose.",
          "Shake it out: literally shake your arms for five seconds, then resume.",
        ],
      },
      {
        type: "callout",
        tone: "gold",
        title: "Harper's tip",
        text: "Ask your photographer for the “in-between” frames — the walk to the spot, the laugh after the pose breaks. Those are the natural ones, and most photographers shoot them anyway if you ask them to keep them.",
      },
      { type: "h2", id: "natural-poses-faq", text: "Natural Pose Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "How do we ask a photographer for natural poses?",
            a: "Say “we want prompts, not poses” and share one thing you two actually do together — a walk you take, a joke you repeat. Specifics let the photographer build situations instead of guessing.",
          },
          {
            q: "Do natural poses work for formal outfits?",
            a: "Yes — movement and formal wear are not opposites. A slow walk in a suit and dress reads elegant precisely because it's unhurried. The key is slower movement, not less of it.",
          },
          {
            q: "What if we go stiff the moment shooting starts?",
            a: "Start with ten minutes of real life — actually drink the coffee, actually walk the block — before any directed frame. By the time shooting “begins,” your body has already forgotten the camera.",
          },
          {
            q: "How many natural frames should we expect in a gallery?",
            a: "Plan for roughly a third of the gallery to be natural and unposed, two thirds lightly directed. That balance gives the set structure and a pulse at the same time.",
          },
        ],
      },
      { type: "ad", slot: "end-of-section" },
      {
        type: "keepReading",
        items: [
          { label: "Engagement Poses for Camera-Shy Couples", to: "/engagement-photo-poses/camera-shy-engagement-poses", note: "Poses · when “relaxed” still feels impossible" },
          { label: "22 Couple Engagement Poses for Every Body Type", to: "/engagement-photo-poses/couple-engagement-poses", note: "Poses · standing, sitting and movement frames" },
        ],
      },
    ],
  },
  {
    slug: "ring-engagement-photo-poses",
    title: "14 Ring Engagement Photo Poses & Detail Shots Worth Framing",
    seoTitle: "14 Ring Engagement Photo Poses & Detail Shots (2026)",
    seoDescription:
      "Ring engagement photo poses and detail shots — the reveal, the hand frames and the light tricks that make the ring the co-star.",
    excerpt:
      "The ring deserves its close-ups. 14 ring engagement photo poses — reveal frames, hand studies and the light tricks that make it glow.",
    category: "poses",
    date: "2026-03-22",
    featuredImage: IMAGES.galleryRing,
    featuredAlt: "Close-up of interlaced hands with an engagement ring catching golden light",
    tags: ["ring", "detail shots", "ring reveal", "hands", "macro"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "The ring is the one prop you didn't have to bring — and the one detail guests will zoom into first. Ring engagement photo poses work best when the ring is a co-star, not the subject: it lives inside a gesture — a hand on a chest, interlaced fingers, a hair-tuck — instead of floating in front of a lens. These 14 poses cover the reveal, the quiet hand studies and the light setups that make the stone do its own showing off. (And yes — clean the ring the night before. It sounds obvious. It's the mistake I see most.)",
      },
      { type: "h2", id: "the-setup", text: "Hands First: The Setup That Flatters" },
      {
        type: "p",
        text: "Relaxed hands photograph the ring; tense hands hide it. Drop your shoulders, unstick your tongue, and let the fingers rest instead of grip. I shot one bride whose ring photos improved instantly when she simply exhaled before each frame — the whole hand softened.",
      },
      {
        type: "list",
        items: [
          "Interlaced fingers at waist height, ring hand slightly forward.",
          "Her hand over his on his chest, ring catching the light.",
          "The hair-tuck: ring hand brushing hair back, caught mid-gesture.",
          "Chin-rest: her hand under her chin, elbow on his shoulder.",
          "Both hands on one warm mug, ring facing the camera.",
        ],
      },
      { type: "h2", id: "the-reveal-frames", text: "The Reveal Frames" },
      {
        type: "list",
        items: [
          "The classic: her hand on his chest, eyes down at the ring, both smiling.",
          "Ring to the sky at golden hour — backlight makes the stone flare beautifully.",
          "The “did you see this?” — her showing him her hand, his reaction is the photo.",
          "Ring over her shoulder: hand up by her face, him blurred behind laughing.",
          "The slow slide: he slides it on (again, on purpose) — shoot the whole sequence.",
        ],
      },
      { type: "h2", id: "ring-plus-face", text: "Ring + Face Combinations" },
      {
        type: "p",
        text: "The frames that age best combine the ring with a real expression — a laugh, a glance, an eye-roll at how cheesy this all is. A ring alone is jewelry; a ring plus your face is a story.",
      },
      {
        type: "list",
        items: [
          "Forehead touch, ring hands clasped between you.",
          "Her laughing with her hand half-covering her mouth, ring out front.",
          "The over-the-shoulder glance, ring hand resting on his arm.",
          "Kiss on the temple, her ring hand on his cheek.",
        ],
      },
      { type: "h2", id: "light-and-lens-notes", text: "Light & Lens Notes for Detail Shots" },
      {
        type: "p",
        text: "Detail shots live or die on light direction. The single most useful trick: position the ring so the sun (or a window) sits behind and slightly to the left of your hands. That back-and-side light wraps the metal and gives the stone a catchlight instead of a glare. Photographers will shoot these around f/2.8 or wider to blur everything but the stone — which is also why a clean, simple background matters more than you'd think.",
      },
      {
        type: "callout",
        tone: "gold",
        title: "Harper's tip",
        text: "Book two or three minutes, not twenty. Ring details are a garnish — five to eight strong frames is plenty, and the best ones happen while you're laughing at something else entirely.",
      },
      { type: "h2", id: "ring-poses-faq", text: "Ring Pose Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "How do I keep my hands from looking stiff in ring photos?",
            a: "Give the hand a job and let the fingers rest instead of grip. Hold a mug, tuck your hair, rest your hand on his chest. Tension lives in the knuckles; a task melts it.",
          },
          {
            q: "What light is best for engagement ring photos?",
            a: "Soft, directional light from behind and slightly to the side of the ring. Golden hour outdoors or window light indoors both wrap the metal beautifully and give the stone a catchlight instead of a glare.",
          },
          {
            q: "Should the ring be the main focus of our engagement photos?",
            a: "It's the co-star, not the lead. A gallery built mostly on ring shots feels like an advertisement; five to eight ring frames inside a gallery of connection frames makes both better.",
          },
          {
            q: "My nails aren't done — will it show?",
            a: "Macro detail shots are unforgiving, and yes, it shows. The night-before manicure is the cheapest upgrade in engagement photography. If that's not possible, keep ring shots to mid-distance gestures.",
          },
        ],
      },
      { type: "ad", slot: "in-article" },
      {
        type: "keepReading",
        items: [
          { label: "The Complete Engagement Photo Checklist", to: "/engagement-photo-ideas/engagement-photo-checklist", note: "Tips · includes the night-before ring clean" },
          { label: "12 Proposal Poses for the Moment & After", to: "/engagement-photo-poses/proposal-poses", note: "Poses · where the ring story begins" },
        ],
      },
    ],
  },
  {
    slug: "outdoor-engagement-photo-poses",
    title: "18 Outdoor Engagement Photo Poses for Fields, Parks & Golden Hour",
    seoTitle: "18 Outdoor Engagement Photo Poses for Golden Hour (2026)",
    seoDescription:
      "Outdoor engagement photo poses for open fields, tree lines, water's edge and city streets — with the light notes that make each one work.",
    excerpt:
      "Outside changes everything. 18 outdoor engagement photo poses built for fields, paths, water and brick — timed to the light that flatters them.",
    category: "poses",
    date: "2026-03-24",
    featuredImage: IMAGES.hero,
    featuredAlt: "Couple posing backlit in a golden outdoor meadow at sunset",
    tags: ["outdoor", "golden hour", "fields", "backlit", "park"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "Outdoor engagement photo poses have one advantage over every other kind: the setting does half the directing. A field gives you space to move, a path gives you somewhere to go, water gives you reflections, and a brick wall gives you warm bounce light at 6pm. The pose just finishes the sentence the location started. These 18 poses are organized by terrain — field, tree line, water, street — because the best outdoor pose is always the one that belongs where you're standing.",
      },
      { type: "h2", id: "open-field-poses", text: "Open-Field Poses" },
      {
        type: "p",
        text: "Open fields reward distance and movement — stand close together and let the landscape breathe around you. The classic field silhouette only works in the last two minutes of sun, so save it for the very end.",
      },
      {
        type: "list",
        items: [
          "The waist-high walk: wade through tall grass holding hands, camera low behind you.",
          "The open-field twirl, dress or jacket hem catching wind.",
          "Back hug at golden hour, low sun rimming both silhouettes.",
          "Lying in the grass, heads together, shot from directly above.",
          "The horizon silhouette — him lifting her slightly, saved for last light.",
        ],
      },
      { type: "h2", id: "tree-line-poses", text: "Tree-Line & Path Poses" },
      {
        type: "list",
        items: [
          "The trunk corridor: a row of trees framing you both, camera shooting down the line.",
          "Hand-in-hand walking away down the path, canopy doing the lighting.",
          "Peeking through leaves — green blur up front, sharp faces behind.",
          "Forehead touch against a wide trunk, both in dappled shade.",
          "Sit on a fallen log, shoulders touching, boots forward.",
        ],
      },
      { type: "h2", id: "waters-edge-poses", text: "Water's-Edge Poses" },
      {
        type: "list",
        items: [
          "Creek rocks sit: feet near the water, foreheads touching.",
          "Dock walk away from camera, reflection doubling the frame.",
          "The reflection kiss — you kiss, the camera shoots the water.",
          "Skip a stone; keep the mid-throw frame and the splash frame.",
          "Barefoot at the shoreline in summer, trousers rolled.",
        ],
      },
      {
        type: "callout",
        tone: "sage",
        title: "Timing note",
        text: "Creeks and lakes lose their light 30–45 minutes before open fields do. Shoot water poses mid-session, not last, or the field behind you will still glow while the water goes flat.",
      },
      { type: "h2", id: "urban-outdoor-poses", text: "Urban-Outdoor Poses" },
      {
        type: "list",
        items: [
          "Brick-wall lean at golden hour — the wall turns the last sun into a warm reflector.",
          "Mid-crosswalk conversation, city moving around you.",
          "Steps sit: one step apart, one hand clasped, looking slightly off-camera.",
        ],
      },
      { type: "h2", id: "outdoor-poses-faq", text: "Outdoor Pose Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "What's the best outdoor pose for golden hour?",
            a: "The back hug or the backlit walk, with the low sun behind you. Backlight wraps your edges in gold and turns busy backgrounds into soft bokeh — it's the most flattering outdoor light there is.",
          },
          {
            q: "How do we pose outdoors without looking lost in a big space?",
            a: "Stay within arm's reach of each other and let the landscape fill the rest. Couples who spread apart in a field read as strangers; couples who stay close read as the subject.",
          },
          {
            q: "What if it's windy during our outdoor session?",
            a: "Use it. Wind is free movement — hair, hems and grass all become part of the frame. Lean into twirls and walking poses, and keep one hand on a hat or hair for the calm frames.",
          },
          {
            q: "Do outdoor poses work for camera-shy couples?",
            a: "Especially well. Walking poses on a path remove the pressure of performing, and distance from the camera means you forget it faster. Wide frames are the shy couple's best friend.",
          },
        ],
      },
      { type: "ad", slot: "end-of-section" },
      {
        type: "keepReading",
        items: [
          { label: "21 Engagement Photo Ideas Outside for Every Season", to: "/engagement-photo-locations/engagement-photo-ideas-outside", note: "Locations · the terrain behind these poses" },
          { label: "Golden Hour Photography Tips for Couples", to: "/engagement-photo-ideas/golden-hour-photography-tips-couples", note: "Tips · timing the light these poses need" },
        ],
      },
    ],
  },
  {
    slug: "couple-engagement-poses",
    title: "20 Couple Engagement Poses That Flatter Every Body Type",
    seoTitle: "20 Couple Engagement Poses That Flatter Every Body Type",
    seoDescription:
      "Engagement poses for couples of every body type — standing, sitting and movement frames with the adjustments that make them flattering.",
    excerpt:
      "Every couple photographs beautifully with the right adjustments. 20 couple engagement poses — standing, sitting, moving — built to flatter.",
    category: "poses",
    date: "2026-03-26",
    featuredImage: IMAGES.posesCover,
    featuredAlt: "Couple in a flattering forehead-touch engagement pose at golden hour",
    tags: ["couple poses", "flattering", "body types", "standing", "sitting"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "There's no such thing as an unphotogenic couple — only poses that haven't been adjusted for them yet. After 400+ sessions I can tell you the flattering adjustments are small and consistent: close the gap, angle the body slightly away from camera, give hands a job, and let the shorter person lead the eye line. These 20 couple engagement poses carry those adjustments built in, organized by standing, sitting and movement frames, so you can hand the list to any photographer and get frames that look like the best version of you — not the best version of a template.",
      },
      { type: "h2", id: "standing-classics", text: "The Standing Classics" },
      {
        type: "list",
        items: [
          "The forehead touch — close the gap completely; no daylight between you.",
          "The waist hold, both angled 15° from camera, mid-laugh.",
          "Her back to his chest, his chin over her head, hands clasped at her waist.",
          "The lapel hold: her hands on his lapels, his hands on her waist.",
          "Shoulder-to-shoulder, both profiles to camera, eyes closed.",
          "The almost-kiss: foreheads an inch apart, eyes open.",
          "His hand on her cheek, her hand over his — the “quiet vow”.",
        ],
      },
      { type: "h2", id: "sitting-frames", text: "The Sitting Frames" },
      {
        type: "list",
        items: [
          "The blanket sit: her legs to the side, his arm behind her.",
          "Steps sit: her a step below, both leaning slightly into each other.",
          "Curb sit facing each other, knees touching, mid-conversation.",
          "Tailgate lean: backs against the truck, legs out, one arm around.",
          "The chair pair: two chairs angled together, forearms on knees.",
        ],
      },
      { type: "h2", id: "movement-frames", text: "The Movement Frames" },
      {
        type: "list",
        items: [
          "Walk toward camera, her hand in his back pocket.",
          "The spin: he lifts her hand, she turns under the arm.",
          "The dip — one slow second down, hold, one slow second up.",
          "The lifted-hem walk through tall grass at sunset.",
          "Run-toward-camera, caught three steps before the collision.",
        ],
      },
      { type: "h2", id: "height-differences", text: "Poses for Height Differences" },
      {
        type: "p",
        text: "Big height gaps are an asset, not a problem — they give you built-in geometry. The trick is to change the plane: sit, lean, or use a step so the difference becomes composition instead of neck strain. I photographed a couple with a fourteen-inch difference at a Guthrie stoop; every step-shot was a keeper because the height told a story instead of fighting the frame.",
      },
      {
        type: "list",
        items: [
          "The step trick: shorter partner one step up, foreheads finally level.",
          "Her seated, him behind — height becomes framing.",
          "The lift: he lifts her by the waist, her feet off the ground.",
          "Lean-in: him bending from the waist, her meeting him halfway.",
        ],
      },
      {
        type: "callout",
        tone: "rose",
        title: "Harper's tip",
        text: "Whatever the pose, close the gap. Couples who stand a polite foot apart photograph as friends; couples who eliminate the daylight between them photograph as engaged.",
      },
      { type: "h2", id: "couple-poses-faq", text: "Couple Pose Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "What are the most flattering poses for a couple?",
            a: "The ones that close the gap and angle your bodies slightly from camera: the forehead touch, the waist hold and the lapel hold. Add a task for your hands and you've covered the three things that make any pose flattering.",
          },
          {
            q: "We have a big height difference — what poses work?",
            a: "Change the plane instead of fighting the gap: sit together, use a step, or lean in from the waist. Height differences create composition when you stop trying to hide them.",
          },
          {
            q: "How do we make poses feel romantic instead of stiff?",
            a: "Slow everything down and close your eyes for the holds. A ten-second forehead touch with synced breathing reads romantic; the same pose rushed reads like a mugshot.",
          },
          {
            q: "Should the taller person always stand behind?",
            a: "No — vary the arrangement. Behind-stands are one option, but side-by-side, seated and step-adjusted frames give the gallery range. A good photographer rotates you through several.",
          },
        ],
      },
      { type: "ad", slot: "in-article" },
      {
        type: "keepReading",
        items: [
          { label: "27 Classic Engagement Photos That Never Go Out of Style", to: "/engagement-photo-poses/classic-engagement-photos", note: "Poses · the timeless half of this library" },
          { label: "22 Natural Engagement Photo Poses", to: "/engagement-photo-poses/natural-engagement-photo-poses", note: "Poses · the unposed half" },
        ],
      },
    ],
  },
  {
    slug: "camera-shy-engagement-poses",
    title: "16 Engagement Poses for Camera-Shy Couples (No Smiling Required)",
    seoTitle: "16 Engagement Poses for Camera-Shy Couples (2026)",
    seoDescription:
      "Engagement poses for camera-shy couples — no-eye-contact frames, task poses and a 10-minute warm-up that dissolves the awkwardness.",
    excerpt:
      "Awkward in front of a camera? Good — you're the normal ones. 16 engagement poses for camera-shy couples that never ask you to perform.",
    category: "poses",
    date: "2026-03-28",
    featuredImage: IMAGES.gallerySilhouette,
    featuredAlt: "Couple silhouetted together at dusk — a comfortable pose for camera-shy couples",
    tags: ["camera-shy", "awkward", "no eye contact", "comfort", "warm-up"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "Let's be real — “just relax” is the least useful direction ever given through a lens. If you're camera-shy, you don't need relaxation advice; you need poses that don't require you to perform. These 16 engagement poses for camera-shy couples share one rule: none of them ask you to look at the camera and smile. You'll be looking at each other, at the horizon, or at your own hands — and the camera will just be the thing that noticed. About 70% of couples freeze in the first five minutes of a session. By minute ten, they've forgotten the camera exists. This list is the bridge between those two minutes.",
      },
      { type: "h2", id: "why-movement-beats-instruction", text: "Why Movement Beats Instruction" },
      {
        type: "p",
        text: "Stillness magnifies self-consciousness; movement dissolves it. Every stiff couple I've met loosened up the moment they started walking — not because they were told to relax, but because their attention had somewhere else to go. Ask your photographer to start the session walking, and everything after it gets easier.",
      },
      { type: "h2", id: "no-eye-contact-poses", text: "The No-Eye-Contact Poses" },
      {
        type: "p",
        text: "These frames never ask you to face the lens. Your eyes go somewhere comfortable — each other, the ground, the sky — and the photos take care of themselves.",
      },
      {
        type: "list",
        items: [
          "The forehead touch, eyes closed, three synced breaths.",
          "Her head on his shoulder, both profiles to camera, eyes shut.",
          "Walking away, hand in hand — the camera is behind you entirely.",
          "His chin over the crown of her head, both looking at the horizon.",
          "The back hug at golden hour — you face the sunset, not the shooter.",
          "Silhouette kiss against the last light; faces never matter at all.",
        ],
      },
      { type: "h2", id: "task-poses", text: "The Task Poses" },
      {
        type: "p",
        text: "A task gives your face something honest to do. These are the prompts I reach for when a couple tells me, up front, that they hate photos.",
      },
      {
        type: "list",
        items: [
          "Fix each other's collar or hair — the fussy, tender gesture.",
          "Whisper the name of your first pet. Real reactions, zero posing.",
          "Hold one coffee, both hands on it, argue about who gets the last sip.",
          "Read the same page of a book, one of you pointing at a line.",
          "Count backward from ten out loud, together, badly.",
          "Slow dance with no music — hum something terrible on purpose.",
        ],
      },
      { type: "h2", id: "the-ten-minute-warmup", text: "The 10-Minute Warm-Up" },
      {
        type: "p",
        text: "Early in my career I started sessions with my best pose and wondered why couples looked terrified. Now I do the opposite: the first ten minutes are real life — walk the block, drink the coffee, let the photographer trail behind with a long lens. By the time I “start shooting,” they've already given me a gallery's worth of frames without knowing it.",
      },
      {
        type: "list",
        items: [
          "Minutes 0–3: arrive, walk, talk — camera stays down or far away.",
          "Minutes 3–6: one easy task pose (the coffee hold).",
          "Minutes 6–10: a walking frame with a glance-back.",
          "Minute 10+: you've forgotten the camera. That's when the real session begins.",
        ],
      },
      {
        type: "callout",
        tone: "sage",
        title: "Real talk",
        text: "Camera-shy couples almost always produce the most tender galleries — because they stop performing sooner. Your awkwardness is not a flaw in this process. It's the raw material.",
      },
      { type: "h2", id: "camera-shy-faq", text: "Camera-Shy Pose Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "How do we pose if we hate being photographed?",
            a: "Choose poses that don't require eye contact with the lens: walking frames, the forehead touch, task prompts like fixing a collar. You never perform — you just do a small thing while the camera notices.",
          },
          {
            q: "How long until we stop feeling awkward?",
            a: "About ten minutes for most couples, if the session starts with movement instead of posed frames. Ask your photographer for a walking warm-up and the clock runs faster.",
          },
          {
            q: "Do we have to smile in engagement photos?",
            a: "No. Closed eyes, soft glances and mid-laugh candids all read warmer than a forced smile. Tell your photographer you'd rather have real expressions than posed ones.",
          },
          {
            q: "Should we tell the photographer we're camera-shy?",
            a: "Yes — before the session, not during it. A photographer who knows will pace the warm-up, shoot long-lens candids and skip anything that feels like a performance.",
          },
        ],
      },
      { type: "ad", slot: "in-article" },
      {
        type: "keepReading",
        items: [
          { label: "How to Feel Natural in Front of the Camera", to: "/engagement-photo-ideas/how-to-feel-natural-in-front-of-camera", note: "Tips · the mindset half of this toolkit" },
          { label: "22 Natural Engagement Photo Poses", to: "/engagement-photo-poses/natural-engagement-photo-poses", note: "Poses · prompts first, positions second" },
        ],
      },
    ],
  },
  {
    slug: "proposal-poses",
    title: "12 Proposal Poses for the Moment Itself — and the Ten Minutes After",
    seoTitle: "12 Proposal Poses for the Moment & After (2026)",
    seoDescription:
      "Proposal poses for the kneel, the reaction and the aftermath — plus the shooter-angle plan that catches the moment you can't repeat.",
    excerpt:
      "The kneel lasts four seconds. These 12 proposal poses — plus the shooter's angle plan — make sure none of them are missed.",
    category: "poses",
    date: "2026-03-30",
    featuredImage: IMAGES.classicDip,
    featuredAlt: "Romantic couple moment in golden light, the calm after a proposal",
    tags: ["proposal", "the kneel", "reaction", "surprise", "aftermath"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "A proposal gives you roughly four unrepeatable seconds: the kneel, the gasp, the yes, and the hug that follows. Proposal poses, then, are really a plan for those seconds — what you do, where you do it, and where the camera needs to be before it starts. I've photographed 40+ proposals across eight years, and the ones that delivered the best frames all did the same three things: chose light first, rehearsed the angle, and stayed in the embrace for a full ten seconds after the ring went on. Here are the 12 poses and moments worth planning for — the kneel itself, the reaction frames nobody can fake, and the quiet aftermath where the real photographs live.",
      },
      { type: "h2", id: "the-kneel-done-right", text: "The Kneel (Done Right)" },
      {
        type: "p",
        text: "The kneel is the one genuinely posed moment of a proposal — so slow it down. One knee, box at chest height, and hold. The four-second kneel produces one frame; the ten-second kneel produces twenty.",
      },
      {
        type: "list",
        items: [
          "Classic single-knee kneel, box held at her eye line, not your chest.",
          "The slow kneel: descend over two full seconds; speed is the frame-killer.",
          "Both hands on the box, head up — let her see your face, not just the ring.",
          "The bench kneel: one knee on a low wall or bench for stability outdoors.",
        ],
      },
      { type: "h2", id: "the-reaction-frames", text: "The Reaction Frames" },
      {
        type: "p",
        text: "You cannot pose a reaction — but you can stay in the moment long enough for the camera to collect it. Keep your eyes on each other, not the lens, for the full first minute. In nine of ten proposals, the single best frame is the half-second after “yes” — the exhale, the hands to the face, the laugh that breaks through.",
      },
      {
        type: "list",
        items: [
          "The hands-to-face gasp — stay there a full three seconds.",
          "The tackle-hug: momentum is the photo; don't brake.",
          "Her looking at the ring, then back at him — twice, slowly.",
          "The cry-laugh: the ugly-honest one. Keep it. It's the best frame.",
        ],
      },
      { type: "h2", id: "the-aftermath-poses", text: "The Aftermath Poses" },
      {
        type: "p",
        text: "The ten minutes after the proposal are the most under-photographed minutes in any engagement — and the most tender. The shock has worn off, the ring is on, and you're just two people who are now engaged. These frames age better than the kneel.",
      },
      {
        type: "list",
        items: [
          "The ring-to-the-chest hold: her hand on his chest, both looking down at it.",
          "Forehead touch, ring hand up between you, eyes closed.",
          "Walking away hand-in-hand, her left hand swinging forward for the light.",
          "The sit-down: same spot, ten minutes later, just talking, photographer trailing.",
        ],
      },
      { type: "h2", id: "planning-the-shooters-angle", text: "Planning the Shooter's Angle" },
      {
        type: "p",
        text: "A proposal photographer works from one rule: position for the reaction, not the kneel. That means upwind, backlit if possible, and close enough that a 70–200mm lens can stay tight on her face while you kneel. Scout the exact spot the day before, mark the kneel point, and agree on a signal — I've had proposers use “look at that bird,” which is as good a cue as any.",
      },
      {
        type: "callout",
        tone: "rose",
        title: "Harper's tip",
        text: "Tell your photographer the ring box opens toward the camera side of her left hand. It sounds tiny. It's the difference between the ring catching light in the frame or disappearing into shadow.",
      },
      { type: "h2", id: "proposal-poses-faq", text: "Proposal Pose Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "How long should the kneel last for good photos?",
            a: "Ten full seconds feels like forever and looks like poetry. The four-second kneel gives the photographer one frame; holding gives them twenty, including the slow box-open.",
          },
          {
            q: "Can we plan poses during a surprise proposal?",
            a: "You plan the geometry, not the moments: the kneel point, the light direction, the photographer's angle. Everything emotional stays unscripted — that's the whole point.",
          },
          {
            q: "What should we do right after she says yes?",
            a: "Stay in the embrace and keep looking at each other for a full minute. The reaction frames — the gasp, the ring look, the laugh — are unrepeatable and they're the best photos of the day.",
          },
          {
            q: "Do we need a hidden photographer for the proposal?",
            a: "If you want the moment documented, yes — a long lens from 30+ feet keeps the surprise intact. Scout the spot together with the photographer beforehand and agree on a signal to begin.",
          },
        ],
      },
      { type: "ad", slot: "end-of-section" },
      {
        type: "keepReading",
        items: [
          { label: "14 Ring Engagement Photo Poses & Detail Shots", to: "/engagement-photo-poses/ring-engagement-photo-poses", note: "Poses · chapter two of the ring story" },
          { label: "Save the Date & Proposal Hub", to: "/save-the-date-photos", note: "Hub · what happens after the yes" },
        ],
      },
    ],
  },

  /* ———— Hub 3 · Locations cluster ———— */

  {
    slug: "outdoor-engagement-photo-locations",
    title: "17 Outdoor Engagement Photo Locations Worth the Drive",
    seoTitle: "17 Outdoor Engagement Photo Locations Worth the Drive",
    seoDescription:
      "Outdoor engagement photo locations that deliver — fields, water, tree lines and overlooks, with the light windows and permit notes for each.",
    excerpt:
      "Open fields, water edges, tree lines and overlooks — 17 outdoor engagement photo locations with honest notes on light, crowds and access.",
    category: "locations",
    date: "2026-04-01",
    featuredImage: IMAGES.hero,
    featuredAlt: "Couple in an open golden meadow — a classic outdoor engagement photo location",
    tags: ["outdoor", "locations", "nature", "golden hour", "scouting"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "The best outdoor engagement photo locations share three traits: open sky for golden hour, some kind of texture (grass, water, stone, bark) and room to walk between setups. After scouting dozens of spots across the South, these 17 outdoor locations deliver most reliably — organized by terrain, with the light window and access notes for each. Outside solves lighting, variety and cost in one choice, which is why seven of ten couples I've photographed chose an outdoor spot for their session.",
      },
      { type: "h2", id: "open-fields-and-prairies", text: "Open Fields & Prairies" },
      {
        type: "p",
        text: "Open grass is the most forgiving outdoor location there is — the sky does the lighting and the horizon does the framing. Tall prairie grass in late summer and early fall is the single most requested backdrop in my archive.",
      },
      {
        type: "list",
        items: [
          "Tallgrass prairie preserves — six-foot bluestem, bison on the horizon, unmatched at sunset.",
          "A private wheat field in June — ask the farmer, offer $20, park on the gravel.",
          "Wildflower meadows in April–May — color for days, book the last slot before they mow.",
          "Rolling hills with a lone oak — the classic silhouette spot, saved for last light.",
        ],
      },
      { type: "h2", id: "water-locations", text: "Water: Creeks, Lakes & Docks" },
      {
        type: "list",
        items: [
          "Limestone creek shallows — sitting-on-rocks frames with natural stone shelves.",
          "Sailing-point lake shores — boats drifting behind you with zero effort.",
          "Wooden docks at sunrise — reflections double every frame before the wind picks up.",
          "Riverbank sandbars in late summer — barefoot frames with a clean horizon.",
        ],
      },
      { type: "h2", id: "tree-lines-and-forest", text: "Tree Lines & Forest Paths" },
      {
        type: "list",
        items: [
          "Oak corridors with dappled light — the forest's answer to a studio softbox.",
          "Pecan groves in October — golden leaves and long afternoon shadows.",
          "Cedar breaks at golden hour — dark green texture that makes cream outfits glow.",
        ],
      },
      { type: "h2", id: "overlooks-and-urban-edges", text: "Overlooks & Urban Edges" },
      {
        type: "list",
        items: [
          "Hilltop overlooks above a city — skyline bokeh at blue hour.",
          "Historic stone bridges — limestone turns honey-colored in the last hour.",
          "Rooftop terraces with a clear western sightline — golden hour above the noise.",
          "Rail-trail paths — straight leading lines with soft gravel underfoot.",
        ],
      },
      {
        type: "callout",
        tone: "sage",
        title: "Scout note",
        text: "Water locations lose their light 30–45 minutes before open fields. If your route has both, shoot the creek mid-session and save the field for the final 20 minutes.",
      },
      { type: "h2", id: "outdoor-locations-faq", text: "Outdoor Location Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "Do we need a permit for outdoor engagement photos?",
            a: "For a couple and one photographer: almost never. State parks charge per-vehicle entry; city parks may require permits only for tripods or assistants. Always verify the specific spot a week ahead.",
          },
          {
            q: "What's the best time to shoot outdoor locations?",
            a: "The last 60–90 minutes before sunset for golden hour, or the first hour after sunrise for softer tones and empty spots. Midday overhead sun is the one window to avoid.",
          },
          {
            q: "How far should we travel for a good outdoor location?",
            a: "Within 45 minutes is the sweet spot — far enough to feel like an escape, close enough that a long drive doesn't drain your energy before the camera comes out.",
          },
          {
            q: "What if our outdoor spot is crowded?",
            a: "Weekday sessions are nearly always empty. If that's not possible, arrive 15 minutes earlier than planned — the crowd thins fast in the last hour of light.",
          },
        ],
      },
      { type: "ad", slot: "in-article" },
      {
        type: "keepReading",
        items: [
          { label: "10 Best Engagement Photo Locations in Oklahoma", to: "/engagement-photo-locations/top-engagement-photo-locations-oklahoma", note: "Locations · the scouted shortlist" },
          { label: "18 Outdoor Engagement Photo Poses", to: "/engagement-photo-poses/outdoor-engagement-photo-poses", note: "Poses · what to do once you're there" },
        ],
      },
    ],
  },
  {
    slug: "at-home-engagement-photo-ideas",
    title: "13 At-Home Engagement Photo Ideas for a Cozy, Honest Gallery",
    seoTitle: "13 At-Home Engagement Photo Ideas for a Cozy Gallery",
    seoDescription:
      "At-home engagement photos — the rooms, routines and window-light setups that make a home session feel intimate, not like a house tour.",
    excerpt:
      "Your porch, your kitchen, your Sunday routine — 13 at-home engagement photo ideas shot in the softest light you already own.",
    category: "locations",
    date: "2026-04-03",
    featuredImage: IMAGES.casualCafe,
    featuredAlt: "Couple in a cozy indoor setting by a bright window — at-home engagement photo vibe",
    tags: ["at home", "indoor", "cozy", "window light", "documentary"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "At-home engagement photos are the frames couples reprint most — because they're the only ones shot where your life actually happens. The worry is that home will look ordinary on camera. It won't, if you shoot the light instead of the rooms: one big window, a warm blanket, the routines you already do. These 13 at-home engagement photo ideas keep a home session intimate and editorial, never like a real-estate tour.",
      },
      { type: "h2", id: "the-rooms-that-photograph", text: "The Rooms That Photograph Best" },
      {
        type: "list",
        items: [
          "The kitchen — cooking together, flour on the counter, morning window light.",
          "The bed or a window seat — coffee, a shared book, legs tangled under a quilt.",
          "The front porch or stoop — the “home” frame that ages better than any other.",
          "A bare wall with one good chair — clean, editorial, all about the two of you.",
          "The backyard at golden hour — your own private field session.",
        ],
      },
      { type: "h2", id: "window-light-setups", text: "Window-Light Setups" },
      {
        type: "p",
        text: "Window light is the softbox you already own. Face the window, not the room — put the light on your faces and let everything behind you fall into soft shadow. North-facing windows give steady, even light all day; west-facing windows go golden in the late afternoon.",
      },
      {
        type: "list",
        items: [
          "Sit on the floor leaning against the wall under the window, her head on his shoulder.",
          "Forehead touch in the window light, curtains diffusing behind you.",
          "Him behind her, arms around her waist, both lit from the side.",
        ],
      },
      { type: "h2", id: "the-routine-frames", text: "The Routine Frames" },
      {
        type: "list",
        items: [
          "Pancakes, badly made — flour in the air is free confetti.",
          "The Sunday paper: him reading, her stealing the funnies.",
          "Slow dancing in the kitchen to whatever's on the speaker.",
          "Getting ready together: him fixing his collar, her laughing at the mirror.",
          "The quiet one: just sitting close on the couch, not performing anything.",
        ],
      },
      {
        type: "callout",
        tone: "rose",
        title: "Real talk",
        text: "You don't need a photogenic apartment — you need one good window and one honest routine. I've shot galleries in dorm rooms that outshine ones in mansions, because the light and the love were the same.",
      },
      { type: "h2", id: "at-home-faq", text: "At-Home Session Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "Our place is small and cluttered — will it show?",
            a: "A photographer shoots tight on you and the window light, so most of the room never enters the frame. Clear one corner and one surface, and that's usually all the set you need.",
          },
          {
            q: "Is natural light enough for indoor engagement photos?",
            a: "Yes — one large window is more than enough. Avoid overhead lamps, which cast harsh shadows; turn them off and let the window do the work.",
          },
          {
            q: "How long does an at-home engagement session take?",
            a: "About 45–60 minutes. Home sessions move quickly because there's no travel between setups — you just move from room to room as the light shifts.",
          },
          {
            q: "Should we clean the whole house before the shoot?",
            a: "No — tidy the two or three spots you'll actually use and leave the rest. A lived-in home reads as honest, which is the whole point of shooting there.",
          },
        ],
      },
      { type: "ad", slot: "in-article" },
      {
        type: "keepReading",
        items: [
          { label: "15 Casual Engagement Photo Ideas", to: "/engagement-photo-ideas/casual-engagement-photo-ideas", note: "Ideas · the relaxed vibe these frames share" },
          { label: "13 Candid Engagement Photo Ideas", to: "/engagement-photo-ideas/candid-engagement-photo-ideas", note: "Ideas · keeping it unposed at home" },
        ],
      },
    ],
  },
  {
    slug: "urban-engagement-photo-ideas",
    title: "15 Urban Engagement Photo Ideas for Downtown & Street Style",
    seoTitle: "15 Urban Engagement Photo Ideas for Street-Style Couples",
    seoDescription:
      "Urban engagement photo ideas — brick alleys, crosswalks, murals and blue-hour neon for a downtown session with real street energy.",
    excerpt:
      "Brick, neon, crosswalks and coffee — 15 urban engagement photo ideas that turn a downtown stroll into a street-style gallery.",
    category: "locations",
    date: "2026-04-05",
    featuredImage: IMAGES.gallerySilhouette,
    featuredAlt: "Couple silhouetted against a city sky at dusk — urban engagement photo mood",
    tags: ["urban", "downtown", "street style", "murals", "blue hour"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "Urban engagement photos bring something a field never can: energy. Brick that turns honey-colored at golden hour, neon that wakes up at blue hour, and a city moving around you while you stay perfectly still. These 15 urban engagement photo ideas are built around the textures downtown gives you for free — and the two light windows that make them glow.",
      },
      { type: "h2", id: "golden-hour-urban", text: "Golden-Hour Urban Setups" },
      {
        type: "list",
        items: [
          "Brick-alley bounce light: walls turn the last sun into a warm reflector.",
          "Mid-crosswalk conversation, city blurred around you.",
          "Steps sit — museum or courthouse, one step apart, hands clasped.",
          "Low-wall lean at golden hour, long shadows doing the drama.",
          "The fire-escape frame, shot from across the street.",
        ],
      },
      { type: "h2", id: "blue-hour-and-neon", text: "Blue-Hour & Neon Frames" },
      {
        type: "p",
        text: "The 20 minutes after sunset are the city's best-kept secret: the sky goes slate-blue while every sign starts to glow. Urban couples should always tack on a blue-hour block — it's the most distinctive light you'll get all session.",
      },
      {
        type: "list",
        items: [
          "Neon-storefront portrait: one colored light source, two silhouettes.",
          "Lit café window, you framed in the glass from outside.",
          "String-lit patio or beer garden, warm bulbs against a blue sky.",
          "Crossing under a glowing marquee, caught mid-stride.",
        ],
      },
      { type: "h2", id: "street-style-details", text: "Street-Style Details" },
      {
        type: "list",
        items: [
          "A shared coffee on a curb, steam catching the light.",
          "The mural back — stand in front, not below, and let the color frame you.",
          "Browsing a record shop or bookstore through the window.",
          "Hailing a cab you don't need, mid-laugh.",
          "The escalator descent, shot from two floors up.",
        ],
      },
      {
        type: "callout",
        tone: "gold",
        title: "Harper's tip",
        text: "Shoot urban on a weekday. The same corner that's packed with tourists on Saturday is yours alone on a Wednesday — and empty streets are the difference between a street photo and a crowd photo.",
      },
      { type: "h2", id: "urban-faq", text: "Urban Session Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "Do we need permission to shoot downtown?",
            a: "For a couple and one handheld photographer, public sidewalks are fine almost everywhere. Tripods and commercial crews can need permits — check your city's film office if you're bringing gear.",
          },
          {
            q: "What should we wear for urban engagement photos?",
            a: "Street style that's actually yours — a good jacket, clean sneakers or boots, one elevated piece each. Urban photos reward personality over formality; a blazer over a tee beats a gown on a sidewalk.",
          },
          {
            q: "Is a city good for camera-shy couples?",
            a: "Surprisingly, yes — you're two people among hundreds, so nobody's watching. Movement through a crowd also gives shy couples something to do with their attention.",
          },
          {
            q: "What's the best time for urban engagement photos?",
            a: "The hour before sunset for golden-hour brick light, then stay 20 minutes into blue hour for neon. That two-window combo is the whole urban look.",
          },
        ],
      },
      { type: "ad", slot: "end-of-section" },
      {
        type: "keepReading",
        items: [
          { label: "12 Night Engagement Photo Ideas", to: "/engagement-photo-ideas/night-engagement-photo-ideas", note: "Ideas · the after-dark half of the city" },
          { label: "16 Coffee Shop Engagement Photo Ideas", to: "/engagement-photo-locations/coffee-shop-engagement-photo-ideas", note: "Locations · the cozy stop on the stroll" },
        ],
      },
    ],
  },
  {
    slug: "park-garden-engagement-photo-ideas",
    title: "14 Park & Garden Engagement Photo Ideas for Soft, Green Frames",
    seoTitle: "14 Park & Garden Engagement Photo Ideas (2026)",
    seoDescription:
      "Park and garden engagement photo ideas — botanical backdrops, tree-lined paths and the etiquette and timing for a soft green session.",
    excerpt:
      "Botanical gardens, tree-lined paths and open lawns — 14 park and garden engagement photo ideas, plus the rules that keep them stress-free.",
    category: "locations",
    date: "2026-04-07",
    featuredImage: IMAGES.outfitsCover,
    featuredAlt: "Couple walking a sunlit garden path — park engagement photo location",
    tags: ["park", "garden", "botanical", "green", "paths"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "Parks and gardens are the most forgiving engagement photo locations in existence: soft dappled light, endless green texture, paths that give you somewhere to walk and benches that give you somewhere to sit. They're also the easiest to reach — most couples live within twenty minutes of a good one. These 14 park and garden engagement photo ideas cover the setups that flatter, plus the timing and etiquette that keep the session relaxed.",
      },
      { type: "h2", id: "garden-setups", text: "The Garden Setups" },
      {
        type: "list",
        items: [
          "The arched trellis or pergola — frame-within-a-frame, always a keeper.",
          "Peeking through blooms: soft flowers blurred up front, sharp faces behind.",
          "A winding gravel path, walking away, canopy overhead.",
          "The fountain edge: sitting close, water catching light behind you.",
          "Open lawn at golden hour — blanket, barefoot, big sky.",
        ],
      },
      { type: "h2", id: "tree-lined-frames", text: "Tree-Lined Frames" },
      {
        type: "list",
        items: [
          "The canopy corridor: a row of oaks framing you down the center.",
          "Dappled-light portrait in open shade under a live oak.",
          "Forehead touch against a wide trunk, both of you in soft shadow.",
          "Fall color frames — pecan and maple in October turn the whole park gold.",
        ],
      },
      { type: "h2", id: "park-etiquette-and-timing", text: "Park Etiquette & Timing" },
      {
        type: "p",
        text: "Most public parks welcome engagement sessions with a handheld camera — but botanical gardens often charge a small photography fee, and both get crowded on weekends. Go weekday, arrive 15 minutes early, and never block a path while you shoot. A little courtesy keeps the session relaxed for you and everyone walking by.",
      },
      {
        type: "list",
        items: [
          "Check the garden's photo policy and fee before you book the date.",
          "Weekday golden hour beats weekend midday, every time.",
          "Stay off planted beds — the best frames don't need you in the flowers anyway.",
          "Bring a blanket for lawn sits; damp grass ruins good trousers.",
        ],
      },
      {
        type: "callout",
        tone: "sage",
        title: "Scout note",
        text: "Tree shade goes cool and blue late in the day. If your park is heavy canopy, shoot the open lawn last and the tree-lined paths first, while the light is still warm.",
      },
      { type: "h2", id: "park-faq", text: "Park & Garden Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "Do botanical gardens charge for engagement photos?",
            a: "Many do — a modest per-couple photography fee on top of admission. It's worth it for the curated backdrops, but check the policy and book the slot a week ahead.",
          },
          {
            q: "What season is best for garden engagement photos?",
            a: "Spring for blooms and fresh green, fall for golden pecans and maples. Summer works if you shoot early or late to avoid harsh midday light; winter gardens offer quiet, moody frames.",
          },
          {
            q: "Can we shoot in a public park without a permit?",
            a: "Yes, in nearly all public parks with handheld gear. Permits usually apply only to tripods, assistants or commercial styling — verify with your local parks department if unsure.",
          },
          {
            q: "What outfits suit a garden session?",
            a: "Soft, earthy tones — cream, sage, champagne, dusty blue — that sit inside the green rather than fight it. Flowy fabrics catch the breeze nicely under a canopy.",
          },
        ],
      },
      { type: "ad", slot: "in-article" },
      {
        type: "keepReading",
        items: [
          { label: "21 Engagement Photo Ideas Outside", to: "/engagement-photo-locations/engagement-photo-ideas-outside", note: "Locations · beyond the garden gate" },
          { label: "Best Outfits for Engagement Photos", to: "/engagement-photo-outfits/best-outfits-engagement-photos", note: "Outfits · the palette these greens want" },
        ],
      },
    ],
  },
  {
    slug: "beach-engagement-photo-ideas",
    title: "12 Beach Engagement Photo Ideas for Sunsets & Shorelines",
    seoTitle: "12 Beach Engagement Photo Ideas for Sunset Couples",
    seoDescription:
      "Beach engagement photo ideas — shoreline walks, sunset silhouettes and the tide, wind and timing tricks that make a coastal session work.",
    excerpt:
      "Wet-sand mirrors, sunset silhouettes and wind in her hair — 12 beach engagement photo ideas with the tide timing that saves the shoot.",
    category: "locations",
    date: "2026-04-09",
    featuredImage: IMAGES.locationsCover,
    featuredAlt: "Couple by the water at golden hour — coastal engagement photo light",
    tags: ["beach", "sunset", "coastal", "shoreline", "water"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "Beach engagement photos live or die on two numbers: the sunset time and the tide chart. Get those right and the beach hands you a wet-sand mirror, a clean horizon and the warmest light of the day — all free. Get them wrong and you're shooting into a high tide with your shoes in the surf. These 12 beach engagement photo ideas cover the setups, plus the timing that makes a coastal session glow instead of struggle.",
      },
      { type: "h2", id: "shoreline-setups", text: "The Shoreline Setups" },
      {
        type: "list",
        items: [
          "The wet-sand walk: barefoot at the water's edge, reflections under every step.",
          "Backlit sunset silhouette — saved for the last five minutes of light.",
          "Sitting where the waves almost reach, foreheads touching, surf behind.",
          "The lift-and-spin in shallow water, dress hem flying.",
          "Walking away down the beach, hand in hand, horizon on your left.",
        ],
      },
      { type: "h2", id: "dune-and-pier-frames", text: "Dune & Pier Frames" },
      {
        type: "list",
        items: [
          "Dune-grass portraits — sea oats catching gold, ocean blurred behind.",
          "A wooden pier at sunset, planks leading straight to the sun.",
          "Leaning on the pier rail, water glittering below.",
          "The dune overlook: you two small against a very big sea.",
        ],
      },
      { type: "h2", id: "tide-wind-and-timing", text: "Tide, Wind & Timing" },
      {
        type: "p",
        text: "Check the tide chart before you book: you want a low or falling tide so there's wet sand to walk on and reflect in. An incoming tide shrinks your beach by the minute. Wind is the other factor — it's constant on the coast, so lean into it (hair, hems, laughter) instead of fighting it, and keep one hand on hair for the calm frames.",
      },
      {
        type: "list",
        items: [
          "Shoot 60–90 minutes before sunset; the beach glows early because there's no shade.",
          "Low tide + golden hour = the wet-sand mirror effect.",
          "Bring a towel and dry sandals for between setups.",
          "Rinse feet and hems before you get back in the car — future-you will be grateful.",
        ],
      },
      {
        type: "callout",
        tone: "gold",
        title: "Harper's tip",
        text: "The best beach frame isn't the kiss at sunset — it's the walk in the shallows ten minutes earlier, when the sand is a mirror and the light is soft. Everyone books the sunset; shoot the mirror first.",
      },
      { type: "h2", id: "beach-faq", text: "Beach Session Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "Do we need a permit for beach engagement photos?",
            a: "Public beaches almost never require one for a couple and a handheld photographer. Some state and county beaches charge entry or a small photography fee — check the specific beach's site a week ahead.",
          },
          {
            q: "What should we wear to a beach engagement session?",
            a: "Flowy, light fabrics in cream, champagne or dusty blue that move with the wind. Go barefoot or bring neutral sandals — and skip anything you'd mind getting a little sandy.",
          },
          {
            q: "Is a cloudy beach day ruined for photos?",
            a: "No — overcast is a giant softbox, and moody beach skies photograph beautifully. A grey sky actually flatters skin more than harsh midday sun ever will.",
          },
          {
            q: "How long before sunset should a beach session start?",
            a: "About 75 minutes before. Beaches have no shade, so the light is usable earlier than inland — start on the dunes, move to the sand, and finish with the silhouette at last light.",
          },
        ],
      },
      { type: "ad", slot: "end-of-section" },
      {
        type: "keepReading",
        items: [
          { label: "Golden Hour Photography Tips for Couples", to: "/engagement-photo-ideas/golden-hour-photography-tips-couples", note: "Tips · timing the beach light" },
          { label: "18 Outdoor Engagement Photo Poses", to: "/engagement-photo-poses/outdoor-engagement-photo-poses", note: "Poses · movement frames for the shoreline" },
        ],
      },
    ],
  },
  {
    slug: "coffee-shop-engagement-photo-ideas",
    title: "16 Coffee Shop Engagement Photo Ideas for Cozy, Candid Frames",
    seoTitle: "16 Coffee Shop Engagement Photo Ideas for Cozy Frames",
    seoDescription:
      "Coffee shop engagement photo ideas — window light, latte art and candid café moments for a cozy, low-pressure public session.",
    excerpt:
      "Your usual table, two coffees, window light — 16 coffee shop engagement photo ideas that turn a café date into a candid gallery.",
    category: "locations",
    date: "2026-04-11",
    featuredImage: IMAGES.casualCafe,
    featuredAlt: "Couple laughing over coffee at a café window — coffee shop engagement photo",
    tags: ["coffee shop", "café", "candid", "cozy", "window light"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "A coffee shop might be the most underrated engagement photo location there is: soft window light, warm wood tones, and a setting where you two already know exactly how to act — because you're just on a date. Coffee shop engagement photos work because nothing is performed; you're literally doing the thing you do every week, with better light. These 16 ideas turn a café morning into a candid gallery.",
      },
      { type: "h2", id: "the-window-table", text: "The Window Table Frames" },
      {
        type: "p",
        text: "The window seat is the whole café shoot in one spot — glass light on your faces, the street softly behind you. Ask for the corner table; it gives the photographer two angles without moving you.",
      },
      {
        type: "list",
        items: [
          "Two coffees, one mid-laugh, shot through the glass from outside.",
          "Her chin on her hands, him mid-story across the table.",
          "The shared pastry: one fork, an argument about the last bite.",
          "Forehead touch over the table, mugs pushed aside.",
        ],
      },
      { type: "h2", id: "the-counter-and-candid-shots", text: "The Counter & Candid Shots" },
      {
        type: "list",
        items: [
          "Ordering together at the counter, her deciding, him pretending not to care.",
          "The barista pour, latte art catching the light, both of you watching.",
          "Walking in with the first coffee of the day, steam rising.",
          "Him reading the menu out loud, badly.",
          "The toast: paper cups up, clinked over the table.",
        ],
      },
      { type: "h2", id: "outside-the-shop", text: "Outside the Shop" },
      {
        type: "list",
        items: [
          "Walking away with to-go cups, hand in hand.",
          "The curb sit: coffees on the ledge, people-watching.",
          "Her fixing his collar outside, morning light on the brick.",
          "The crosswalk with cups, caught mid-stride.",
        ],
      },
      {
        type: "callout",
        tone: "rose",
        title: "Real talk",
        text: "Ask the owner first — nearly everyone says yes, and most are flattered. Go mid-morning on a weekday, buy like you mean it, and tip for the table you're about to turn into a set.",
      },
      { type: "h2", id: "coffee-shop-faq", text: "Coffee Shop Session Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "Do coffee shops allow engagement photo shoots?",
            a: "Most independent cafés say yes, especially on quiet weekday mornings. Always ask the owner ahead of time, keep the footprint small, and be a paying customer first.",
          },
          {
            q: "What's the best time for coffee shop engagement photos?",
            a: "Mid-morning, around 9–10am, when the light through the east windows is soft and the rush has cleared. Weekdays beat weekends for an empty café.",
          },
          {
            q: "What should we wear for café engagement photos?",
            a: "Cozy, smart-casual layers — a knit sweater, a denim jacket, clean boots. Warm neutrals sit beautifully against wood and brick café interiors.",
          },
          {
            q: "How long does a coffee shop session take?",
            a: "About 30–45 minutes inside, plus another 15 outside with the to-go cups. It's the perfect low-pressure session — many couples do it as a first shoot before a bigger one.",
          },
        ],
      },
      { type: "ad", slot: "in-article" },
      {
        type: "keepReading",
        items: [
          { label: "15 Casual Engagement Photo Ideas", to: "/engagement-photo-ideas/casual-engagement-photo-ideas", note: "Ideas · the vibe this session belongs to" },
          { label: "15 Urban Engagement Photo Ideas", to: "/engagement-photo-locations/urban-engagement-photo-ideas", note: "Locations · the stroll after the coffee" },
        ],
      },
    ],
  },

  /* ———— Hub 4 · Outfits cluster ———— */

  {
    slug: "casual-engagement-photo-outfits",
    title: "16 Casual Engagement Photo Outfits (Jeans, Yes — Styled on Purpose)",
    seoTitle: "16 Casual Engagement Photo Outfits That Look Intentional",
    seoDescription:
      "Casual engagement photo outfits that don't look like you gave up — jeans, knits and sneakers styled with the 70/20/10 rule.",
    excerpt:
      "Casual doesn't mean careless. 16 relaxed couple outfits — jeans, knits, clean sneakers — styled so they photograph effortless, not sloppy.",
    category: "outfits",
    date: "2026-04-01",
    featuredImage: IMAGES.casualCafe,
    featuredAlt: "Couple in casual coordinated outfits laughing over coffee at a café",
    tags: ["casual outfits", "jeans", "relaxed", "sneakers", "everyday"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "The most common outfit question I get is some version of “is it okay to wear jeans?” — and the answer is a firm yes, with one condition: the jeans are styled on purpose. Casual engagement photo outfits work when they look like a choice, not a default. That means dark or mid wash over acid, straight or wide leg over spray-tight, and not a single visible logo. Below are 16 casual outfit formulas for her and him, plus the small styling moves — one elevated piece, real texture, a coordinated palette — that lift a relaxed look from “running errands” to “effortless on camera.”",
      },
      { type: "h2", id: "the-casual-rule", text: "The One Rule: Intentional, Not Accidental" },
      {
        type: "p",
        text: "A casual outfit photographs well when every piece could have been chosen for a nice Saturday — because it was. The camera reads intention through fit, fabric and coordination. Ill-fitting or wrinkled casual reads as “we didn't try”; well-cut and steamed casual reads as “this is just how we look.”",
      },
      { type: "h2", id: "casual-outfits-for-her", text: "8 Casual Outfits for Her" },
      {
        type: "list",
        items: [
          "Straight-leg dark jeans + oat-colored knit + clean white sneakers.",
          "Flowy midi skirt + simple fitted tee + ankle boots.",
          "Linen trousers + silk camisole + one gold layer of jewelry.",
          "A denim jacket over a slip dress — dressed up on top, casual below.",
          "High-waisted chinos + tucked striped breton + ballet flats.",
          "A cozy oversized cardigan + fitted jeans + booties.",
          "A casual sundress + white sneakers + a straw hat.",
          "Cropped trousers + a quality white tee + a leather jacket.",
        ],
      },
      { type: "h2", id: "casual-outfits-for-him", text: "8 Casual Outfits for Him" },
      {
        type: "list",
        items: [
          "Dark jeans + olive overshirt + clean minimal sneakers.",
          "Tan chinos + quality white tee + open casual blazer.",
          "A knit polo + straight trousers + leather loafers.",
          "A henley + dark jeans + suede desert boots.",
          "A lightweight crewneck + chinos + white sneakers.",
          "A flannel (muted, not loud) + dark jeans + boots.",
          "An unstructured blazer + tee + tapered trousers.",
          "A denim shirt + chinos + brown leather shoes.",
        ],
      },
      {
        type: "callout",
        tone: "gold",
        title: "The elevate-one-piece move",
        text: "Give each of you one piece that's a step above the rest — her a silk scarf, him a nice watch or leather jacket. One intentional detail tells the camera the whole look was chosen, not grabbed.",
      },
      { type: "h2", id: "casual-outfits-faq", text: "Casual Outfit Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "Are jeans really okay for engagement photos?",
            a: "Yes — dark or mid wash, straight or wide leg, no heavy distressing or loud logos. Paired with a knit, blouse or blazer and one elevated piece, jeans photograph as effortless, not careless.",
          },
          {
            q: "Can we both wear sneakers?",
            a: "Absolutely, if they're clean and minimal. Scuffed running shoes are the one casual detail that dates a photo. A fresh pair of simple white or neutral sneakers looks intentional.",
          },
          {
            q: "How do we keep casual outfits from looking sloppy?",
            a: "Fit and steam. Well-cut pieces with no wrinkles read as a choice; ill-fitting or crumpled ones read as an afterthought. Try everything on together two weeks out and photograph it in daylight.",
          },
          {
            q: "Should our casual outfits still coordinate?",
            a: "Yes — the 70/20/10 rule still applies. Share a neutral base, split one accent color between you, and add texture. Coordination is what makes two casual outfits read as one couple.",
          },
        ],
      },
      { type: "ad", slot: "in-article" },
      {
        type: "keepReading",
        items: [
          { label: "15 Casual Engagement Photo Ideas", to: "/engagement-photo-ideas/casual-engagement-photo-ideas", note: "Ideas · the vibe these outfits belong to" },
          { label: "Engagement Photo Color Palette", to: "/engagement-photo-outfits/engagement-photo-color-palette", note: "Outfits · the colors behind every formula" },
        ],
      },
    ],
  },
  {
    slug: "fall-engagement-photo-outfits",
    title: "14 Fall Engagement Photo Outfits for Golden, Cozy Frames",
    seoTitle: "What to Wear for Fall Pictures: 14 Engagement Outfits",
    seoDescription:
      "What to wear for fall pictures — 14 cozy couple outfits in rust, camel and olive that glow against autumn light and foliage.",
    excerpt:
      "Fall is the most photogenic season — if you dress for it. 14 cozy couple outfits in rust, camel and olive built for autumn light.",
    category: "outfits",
    date: "2026-04-03",
    featuredImage: IMAGES.outfitsCover,
    featuredAlt: "Couple in cozy fall engagement outfits walking through autumn light",
    tags: ["fall outfits", "autumn", "cozy", "layers", "earth tones"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "Fall is the most forgiving season for engagement photos — the light is low and warm all afternoon, and the foliage does half the styling for you. What to wear for fall pictures comes down to one idea: mirror the season. Rust, camel, olive, mustard and cream sit beautifully against amber leaves, while texture — cable knits, wool, corduroy, leather — gives the low light something to catch. These 14 cozy couple outfits lean into exactly that, with layering notes because fall sessions run long and the temperature drops fast once the sun goes down.",
      },
      { type: "h2", id: "the-fall-palette", text: "The Fall Palette That Works" },
      {
        type: "p",
        text: "The colors that flatter fall foliage are the warm, muted ones already in the landscape: rust, terracotta, camel, olive, mustard, cream and chocolate. Let one of you carry the warm accent (a rust sweater) while the other stays neutral (cream and camel), so you complement the leaves instead of competing with them.",
      },
      { type: "h2", id: "fall-outfits-for-her", text: "7 Fall Outfits for Her" },
      {
        type: "list",
        items: [
          "A rust or terracotta knit + dark jeans + ankle boots.",
          "A camel coat over a cream dress + knee-high boots.",
          "A mustard sweater + olive skirt + brown booties.",
          "A chunky cardigan + fitted jeans + a felt hat.",
          "A corduroy jacket + turtleneck + straight trousers.",
          "A plaid scarf (muted) over a solid coat + leather boots.",
          "A velvet or wool midi dress + tights + heeled booties.",
        ],
      },
      { type: "h2", id: "fall-outfits-for-him", text: "7 Fall Outfits for Him" },
      {
        type: "list",
        items: [
          "A camel or tan overshirt + dark jeans + leather boots.",
          "An olive chore coat + cream henley + chinos.",
          "A rust or maroon crewneck + charcoal trousers.",
          "A wool peacoat + turtleneck + straight jeans.",
          "A flannel in muted tones + dark denim + suede boots.",
          "A brown leather jacket + neutral tee + chinos.",
          "A cable-knit sweater + olive chinos + clean boots.",
        ],
      },
      {
        type: "callout",
        tone: "gold",
        title: "The layering rule",
        text: "Fall sessions start warm and end cold. Dress in layers you can shed or add — a coat, a scarf, a cardigan — so you're comfortable at minute five and minute fifty. Layers also give the photographer variety without a full outfit change.",
      },
      { type: "h2", id: "fall-outfits-faq", text: "Fall Outfit Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "What colors are best for fall engagement photos?",
            a: "Mirror the season: rust, terracotta, camel, olive, mustard and cream. These warm, muted tones sit beautifully against amber foliage. Skip cool blues and bright neons, which fight the warm landscape.",
          },
          {
            q: "Is plaid okay for fall pictures?",
            a: "Yes, if it's muted and it's one piece, not both of you. A single muted-plaid scarf or shirt reads as autumn; matching loud plaid reads as costume. Keep the scale of the check medium, not tiny.",
          },
          {
            q: "What if it's cold during our fall session?",
            a: "Layer, and bring hand warmers. A coat or chunky scarf photographs as cozy rather than bulky, and cold hands show in close-up ring shots. Comfort reads on camera — dress for the last hour, not the first.",
          },
          {
            q: "Do boots matter for a fall shoot?",
            a: "They're the anchor of the outfit. Clean leather or suede boots in brown or tan ground a fall look and handle grass, trails and leaves. Avoid brand-new stiff boots you haven't broken in.",
          },
        ],
      },
      { type: "ad", slot: "in-article" },
      {
        type: "keepReading",
        items: [
          { label: "Engagement Photo Color Palette", to: "/engagement-photo-outfits/engagement-photo-color-palette", note: "Outfits · why earth tones win in fall" },
          { label: "What to Wear for Outdoor Engagement Photos", to: "/engagement-photo-outfits/what-to-wear-for-outdoor-engagement-photos", note: "Outfits · location-based dressing" },
        ],
      },
    ],
  },
  {
    slug: "summer-engagement-photo-outfits",
    title: "13 Summer Engagement Photo Outfits That Stay Cool & Photogenic",
    seoTitle: "13 Summer Engagement Photo Outfits for Warm-Weather Shoots",
    seoDescription:
      "Summer engagement photo outfits — light dresses, linen and breathable layers that stay cool and photograph beautifully in bright light.",
    excerpt:
      "Bright light, warm skin, zero melting. 13 summer engagement photo outfits in breathable fabrics that flatter instead of fighting the sun.",
    category: "outfits",
    date: "2026-04-05",
    featuredImage: IMAGES.hero,
    featuredAlt: "Couple in light summer outfits in a golden meadow at sunset",
    tags: ["summer outfits", "linen", "light dresses", "breathable", "warm weather"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "Summer engagement photos have two enemies: heat and harsh midday sun. The right outfit solves at least the first one. What works in warm weather is breathable fabric, light color and movement — linen, cotton, chiffon and light knits that catch a breeze instead of trapping heat. These 13 summer engagement photo outfits keep you cool through a golden-hour session, with one rule up front: schedule after 6pm. The best summer outfit in the world can't save a squinting couple under noon sun.",
      },
      { type: "h2", id: "summer-fabrics-and-colors", text: "Fabrics & Colors That Beat the Heat" },
      {
        type: "p",
        text: "Choose fabrics that breathe and move: linen, cotton, chiffon, light jersey. Light, airy colors — white, cream, soft blue, blush, sage — reflect heat and flatter sun-kissed skin. Avoid heavy synthetics and dark layers; you'll be wilted by the third location, and it shows in your shoulders.",
      },
      { type: "h2", id: "summer-outfits-for-her", text: "7 Summer Outfits for Her" },
      {
        type: "list",
        items: [
          "A flowy white or blush midi dress + flat sandals.",
          "A linen set — matching top and shorts or trousers.",
          "A light sundress + denim jacket for the breeze.",
          "A chiffon maxi dress that catches movement when you twirl.",
          "High-waisted linen trousers + a simple tank + gold jewelry.",
          "A breezy skirt + fitted cotton tee + espadrilles.",
          "A slip dress + a light open shirt tied at the waist.",
        ],
      },
      { type: "h2", id: "summer-outfits-for-him", text: "6 Summer Outfits for Him" },
      {
        type: "list",
        items: [
          "A linen shirt (sleeves rolled) + chinos + loafers.",
          "A light cotton tee + tailored shorts + clean sneakers.",
          "A short-sleeve camp-collar shirt + light trousers.",
          "A breathable polo + chinos + boat shoes.",
          "An unstructured linen blazer over a tee + jeans.",
          "A henley + light jeans + suede sneakers.",
        ],
      },
      {
        type: "callout",
        tone: "sage",
        title: "The sweat-proof plan",
        text: "Bring blotting papers and a small towel for between frames, and wear light layers you can remove. Shine reads on camera before you feel hot — a quick blot every few locations keeps close-ups fresh.",
      },
      { type: "h2", id: "summer-outfits-faq", text: "Summer Outfit Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "What fabrics are best for summer engagement photos?",
            a: "Breathable and light: linen, cotton, chiffon and light jersey. They keep you cool and catch a breeze beautifully on camera. Avoid heavy synthetics that trap heat and show sweat.",
          },
          {
            q: "Is white okay to wear for summer photos?",
            a: "Yes — white and cream are summer staples and photograph as fresh and airy. Just make sure it's not see-through in bright backlight, and bring a layer for when the sun drops and it cools.",
          },
          {
            q: "What time should a summer engagement session start?",
            a: "After 6pm, timed to golden hour. Midday summer sun is overhead and harsh — it causes squinting and unflattering shadows no outfit can fix. The last hour of light is cooler and far more flattering.",
          },
          {
            q: "How do we stay cool without ruining the photos?",
            a: "Stay hydrated, bring blotting papers, and shed layers between shots rather than during them. A small handheld fan between locations keeps you fresh without interrupting the shoot.",
          },
        ],
      },
      { type: "ad", slot: "in-article" },
      {
        type: "keepReading",
        items: [
          { label: "Golden Hour Photography Tips", to: "/engagement-photo-ideas/golden-hour-photography-tips-couples", note: "Tips · timing the light these outfits need" },
          { label: "16 Coffee Shop Engagement Photo Ideas", to: "/engagement-photo-locations/coffee-shop-engagement-photo-ideas", note: "Locations · the air-conditioned fallback" },
        ],
      },
    ],
  },
  {
    slug: "spring-engagement-photo-outfits",
    title: "12 Spring Engagement Photo Outfits in Soft Pastels & Greens",
    seoTitle: "12 Spring Engagement Photo Outfits for Garden Sessions",
    seoDescription:
      "Spring engagement photo outfits — soft pastels, sage green and light layers that flatter blossoms, gardens and fresh spring light.",
    excerpt:
      "Blossoms, fresh grass and soft light. 12 spring engagement photo outfits in pastels and sage that flatter the season's colors.",
    category: "outfits",
    date: "2026-04-07",
    featuredImage: IMAGES.galleryTwirl,
    featuredAlt: "Couple in soft spring outfits among blossoms in gentle light",
    tags: ["spring outfits", "pastels", "garden", "light layers", "sage"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "Spring is the season of soft color — blossoms, fresh grass and a light that's bright but never harsh — and the outfits that flatter it are soft too. Think sage, blush, powder blue, butter yellow and cream, in light layers you can adjust as the morning warms. These 12 spring engagement photo outfits are built for garden and park sessions, where the goal is to complement the green and pink around you rather than compete with it. One principle carries through all of them: muted pastels over candy brights.",
      },
      { type: "h2", id: "the-spring-palette", text: "The Spring Palette That Flatters" },
      {
        type: "p",
        text: "The colors already in a spring landscape — sage green, blush pink, soft white, butter yellow — are your safest picks. Muted pastels sit gently against blossoms; candy-bright pastels fight them. When in doubt, lean one of you toward green or cream and let the other carry the soft accent.",
      },
      { type: "h2", id: "spring-outfits-for-her", text: "6 Spring Outfits for Her" },
      {
        type: "list",
        items: [
          "A blush or sage midi dress + light cardigan.",
          "A floral print (muted, small-scale) + neutral sandals.",
          "Cream linen trousers + a powder-blue blouse.",
          "A white eyelet dress + a denim jacket.",
          "A pleated pastel skirt + fitted white tee + flats.",
          "A light knit set + gold jewelry + ballet flats.",
        ],
      },
      { type: "h2", id: "spring-outfits-for-him", text: "6 Spring Outfits for Him" },
      {
        type: "list",
        items: [
          "A sage or light-olive shirt + tan chinos + loafers.",
          "A cream or white oxford + light jeans + clean sneakers.",
          "A lightweight navy blazer + chinos + no tie.",
          "A soft-blue henley + tapered trousers.",
          "A linen shirt in pale tones + rolled sleeves + espadrilles.",
          "A muted check shirt (open) over a plain tee + chinos.",
        ],
      },
      {
        type: "callout",
        tone: "sage",
        title: "Garden-session note",
        text: "If you're shooting in a botanical garden, check the colors blooming that week and steer clear of matching them exactly — standing in front of a wall of blush blossoms while wearing blush washes you out. Offset the dominant bloom color by one step.",
      },
      { type: "h2", id: "spring-outfits-faq", text: "Spring Outfit Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "Are pastels too cliché for spring engagement photos?",
            a: "Only the candy-bright ones. Muted pastels — sage, blush, powder blue, cream — flatter spring light and the season's colors without reading as costume. The key is softness, not saturation.",
          },
          {
            q: "Is a floral dress okay for a spring shoot?",
            a: "Yes, if the print is small-scale and muted, and it's the only pattern in the frame. A loud or large floral competes with the blossoms behind you. Let one of you wear it; keep the other solid.",
          },
          {
            q: "What if spring weather turns cold or rainy?",
            a: "Layer with a light coat or cardigan you can photograph in — trench coats and knit layers actually suit the season. For rain, a shared umbrella makes a lovely frame rather than a cancellation.",
          },
          {
            q: "Do spring outfits work for a garden location?",
            a: "They're made for it — just offset the dominant bloom color by one step so you don't blend into the backdrop. Sage and cream are safe against almost any flowering garden.",
          },
        ],
      },
      { type: "ad", slot: "in-article" },
      {
        type: "keepReading",
        items: [
          { label: "13 Park & Garden Engagement Photo Ideas", to: "/engagement-photo-locations/park-garden-engagement-photo-ideas", note: "Locations · where these outfits shine" },
          { label: "Engagement Photo Color Palette", to: "/engagement-photo-outfits/engagement-photo-color-palette", note: "Outfits · the pastels, decoded" },
        ],
      },
    ],
  },
  {
    slug: "engagement-photo-color-palette",
    title: "The Engagement Photo Color Palette: Best Colors That Flatter on Camera",
    seoTitle: "Best Colors for Engagement Photos: A Couple's Palette Guide",
    seoDescription:
      "The best colors for engagement photos — the earth-tone and neutral palettes that flatter every skin tone, plus the colors to avoid.",
    excerpt:
      "Color is the first thing a camera judges. The earth-tone and neutral palettes that flatter on camera — and the few colors to always avoid.",
    category: "outfits",
    date: "2026-04-09",
    featuredImage: IMAGES.galleryRing,
    featuredAlt: "Couple's hands in neutral cream and sage tones with an engagement ring",
    tags: ["color palette", "earth tones", "neutrals", "what to avoid", "styling"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "Color is the first thing a camera judges — before your pose, before the location, before anything. The best colors for engagement photos are soft, muted versions of real colors: the dusty, desaturated tones that read as rich on camera instead of loud. In 400+ sessions, the one styling decision I've never once regretted is a couple in earth tones and neutrals; the regrets are always neon, logos or a bright pattern that pulls the eye away from your faces. This is the palette I hand every couple, split into what works, why it works, and the short list of what to always avoid.",
      },
      { type: "h2", id: "why-muted-wins", text: "Why Muted Colors Win on Camera" },
      {
        type: "p",
        text: "Cameras amplify saturation, so a color that looks slightly dusty in person reads as rich and warm in a photo — while a bright color goes harsh and pulls focus. Muted tones also flatter every skin tone and, crucially, they don't date. A neon gallery screams its year; a cream-and-sage gallery could be from any decade.",
      },
      { type: "h2", id: "the-earth-tone-palette", text: "The Earth-Tone Palette" },
      {
        type: "list",
        items: [
          "Cream, oat and warm ivory — the universal base.",
          "Camel, tan and caramel — read as warmth without trying.",
          "Sage, olive and muted green — grounded, organic, golden-hour friendly.",
          "Rust, terracotta and clay — the fall anchors.",
          "Chocolate and espresso — a soft alternative to black.",
          "Dusty blue and slate — the best cool option.",
        ],
      },
      { type: "h2", id: "the-70-20-10-rule", text: "The 70/20/10 Coordination Rule" },
      {
        type: "p",
        text: "This is the fastest way to look coordinated without matching: 70% of the frame is a shared neutral base (cream, oat, camel), 20% is one accent color split between you (her rust dress, his olive jacket), and 10% is texture or a small pattern (lace, cable knit, a subtle check). It reads as one couple, two people.",
      },
      { type: "h2", id: "colors-to-avoid", text: "Colors & Patterns to Avoid" },
      {
        type: "list",
        items: [
          "Neon anything — it color-casts onto skin in open shade.",
          "Large logos and graphic tees — they date a photo faster than anything.",
          "Tiny tight patterns like micro-checks — they moiré on digital sensors.",
          "Matching bright colors head-to-toe — reads as a team uniform.",
          "All-black in a golden-hour field — you become a silhouette before sunset.",
        ],
      },
      {
        type: "callout",
        tone: "gold",
        title: "The honest exception",
        text: "If all-black is genuinely your style, keep it — just add texture (leather, ribbed knit) and let your photographer expose for skin, not fabric. Authentic style beats a palette rule every time.",
      },
      { type: "h2", id: "color-palette-faq", text: "Color Palette Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "What are the most flattering colors for engagement photos?",
            a: "Soft, muted earth tones and neutrals: cream, oat, camel, sage, rust, dusty blue. They flatter every skin tone, complement most locations and never date. The common thread is low saturation.",
          },
          {
            q: "Can we wear black to our engagement session?",
            a: "Yes, with texture. All-black reads elegant in urban settings but can go flat or silhouette-like in a field at golden hour. Add leather, knit or velvet so the black has depth, and tell your photographer.",
          },
          {
            q: "Should our outfits match our wedding colors?",
            a: "Echo them, don't replicate them. If your wedding palette is sage and cream, wearing dusty blue and oat for the engagement shoot gives you range across both galleries instead of one repeated look.",
          },
          {
            q: "How many colors should be in our photos?",
            a: "Two or three, max. A shared neutral base plus one accent between you, with texture as the third element. More than three colors and the frame gets busy and the eye loses your faces.",
          },
        ],
      },
      { type: "ad", slot: "in-article" },
      {
        type: "keepReading",
        items: [
          { label: "Best Outfits for Engagement Photos", to: "/engagement-photo-outfits/best-outfits-engagement-photos", note: "Outfits · the stylist's complete guide" },
          { label: "16 Casual Engagement Photo Outfits", to: "/engagement-photo-outfits/casual-engagement-photo-outfits", note: "Outfits · the palette in practice" },
        ],
      },
    ],
  },
  {
    slug: "what-to-wear-for-outdoor-engagement-photos",
    title: "What to Wear for Outdoor Engagement Photos: A Location-Based Guide",
    seoTitle: "What to Wear for Outdoor Engagement Photos by Location",
    seoDescription:
      "What to wear for outdoor engagement photos — location-based outfit guidance for fields, beaches, gardens and city streets.",
    excerpt:
      "The setting chooses the outfit. What to wear for outdoor engagement photos in fields, at the beach, in gardens and on city streets.",
    category: "outfits",
    date: "2026-04-11",
    featuredImage: IMAGES.locationsCover,
    featuredAlt: "Couple in earth-tone outdoor outfits on a scenic stone bridge",
    tags: ["outdoor outfits", "location-based", "fields", "beach", "gardens", "shoes"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "The best outdoor engagement outfit is the one that belongs where you're standing — earth tones in a field, soft neutrals at the beach, muted greens in a garden, a little more structure downtown. What to wear for outdoor engagement photos, then, starts with the location, not the closet. This guide matches outfits to the four most common outdoor settings, plus the practical layer every couple forgets: shoes you can actually walk between spots in.",
      },
      { type: "h2", id: "outfit-by-location", text: "Match the Outfit to the Location" },
      {
        type: "list",
        items: [
          "Fields & meadows: earth tones and flowy fabric that catches wind — cream, rust, olive.",
          "Beach: soft neutrals and light fabric — white, sand, blush; skip the heavy layers.",
          "Gardens & parks: muted greens and pastels that complement, not match, the foliage.",
          "Urban streets: a touch more structure — a blazer, a nice jacket, slightly dressed-up casual.",
          "Creeks & trails: practical first — clothes you can sit, climb and walk in.",
        ],
      },
      { type: "h2", id: "the-shoe-reality-check", text: "The Shoe Reality Check" },
      {
        type: "p",
        text: "Outdoor sessions mean walking — often on grass, gravel, sand or hills — and uncomfortable shoes change the way you stand and move, and it shows. The fix every photographer recommends: wear the shoes you want in the photos for the frames, and keep a broken-in pair of flats or sneakers for walking between spots. Your feet (and your posture) will thank you.",
      },
      { type: "h2", id: "dressing-for-the-weather", text: "Dressing for the Weather, Not the Photo" },
      {
        type: "p",
        text: "Check the forecast and dress for the last hour of the session, when you'll be coolest and the light best. Layers are your friend: a coat or cardigan you can shed for frames and reclaim between them. In wind, choose one piece that moves beautifully (a dress hem, a scarf) and let it be the motion in the shot.",
      },
      {
        type: "callout",
        tone: "sage",
        title: "The complement, don't compete rule",
        text: "Your outfit should sit inside the location's palette, not fight it. In a green garden, wear cream or sage — not bright red. At a golden field, wear earth tones — not cool grey. You want to look like you belong in the frame.",
      },
      { type: "h2", id: "outdoor-outfits-faq", text: "Outdoor Outfit Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "What should we wear for engagement photos in a field?",
            a: "Earth tones and flowy fabric — cream, rust, olive and camel — that move with the wind and complement tall grass. Avoid busy patterns; the field is already textured, so keep your outfit simple.",
          },
          {
            q: "What do we wear for beach engagement photos?",
            a: "Soft neutrals and light, airy fabric — white, sand, blush, light blue. Skip heavy layers and dark colors, which read hot and harsh against the water. Go barefoot for some frames.",
          },
          {
            q: "Do we really need two pairs of shoes?",
            a: "For outdoor sessions, yes. Wear your photo shoes for the frames and walk between spots in broken-in flats or sneakers. Outdoor locations involve more walking than couples expect, and sore feet show in your posture.",
          },
          {
            q: "How formal should outdoor engagement outfits be?",
            a: "One step below the location's formality. A garden or beach calls for relaxed, breathable pieces; a city street can take a blazer. When in doubt, smart-casual beats over-dressed outdoors.",
          },
        ],
      },
      { type: "ad", slot: "in-article" },
      {
        type: "keepReading",
        items: [
          { label: "17 Outdoor Engagement Photo Locations", to: "/engagement-photo-locations/outdoor-engagement-photo-locations", note: "Locations · the settings this guide dresses" },
          { label: "The Engagement Photo Color Palette", to: "/engagement-photo-outfits/engagement-photo-color-palette", note: "Outfits · the colors behind every location" },
        ],
      },
    ],
  },

  /* ———— Hub 5 · Save the Date & Proposal cluster ———— */

  {
    slug: "save-the-date-photo-ideas",
    title: "17 Save the Date Photo Ideas That Make the Card",
    seoTitle: "17 Save the Date Photo Ideas That Make the Card (2026)",
    seoDescription:
      "Save the date photo ideas built for print — card-ready frames, negative-space setups and the crops your designer needs.",
    excerpt:
      "A save-the-date is a photograph with a job. 17 frames, crops and setups that survive the trip from gallery to cardstock.",
    category: "ideas",
    date: "2026-04-02",
    featuredImage: IMAGES.classicDip,
    featuredAlt: "Elegant couple frame with open negative space, ideal for a save the date card",
    tags: ["save the date", "card layout", "negative space", "crops", "print"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "A save-the-date photo has one job the rest of your gallery doesn't: it has to share the frame with your names, your date and a website — and still look like you. The save the date photo ideas that work best are the ones shot with print in mind from the first frame, not the ones cropped down after the fact. In seven of ten card designs I've consulted on, the winning frame was a horizontal, slightly wider shot with quiet space on one side — not the couple's favorite close-up. This guide covers the frames, the crops and the styling choices that make a photograph survive the trip from gallery to cardstock.",
      },
      { type: "h2", id: "what-makes-a-frame-card-ready", text: "What Makes a Frame Card-Ready" },
      {
        type: "p",
        text: "Card-ready frames share three traits: horizontal orientation, negative space on one side, and subjects placed off-center. Your designer needs a quiet corner for typography — open sky, a plain wall, soft bokeh. A centered close-up forces text straight over your faces, which is how save-the-dates end up looking like ransom notes.",
      },
      {
        type: "list",
        items: [
          "Horizontal 3:2 or 16:9 — never vertical; vertical gets hard-cropped at the edges.",
          "You placed in the left or right third, not dead center.",
          "A clean band of space above or beside you at least as tall as your head.",
          "Contrast between you and the background — a dark suit against pale sky, a light dress against green.",
          "No important detail at the extreme edges — printers trim 3–5mm unpredictably.",
        ],
      },
      { type: "h2", id: "the-horizontal-frames", text: "The Horizontal Frames" },
      {
        type: "list",
        items: [
          "Walking away down a path, both of you small in a wide landscape.",
          "Bench sit with open sky to the right — text lives in the sky.",
          "The kiss against a plain wall, shot wide enough to breathe.",
          "Picnic blanket from above, you two offset to one corner.",
          "Forehead touch on a bridge, river filling the negative space.",
        ],
      },
      { type: "h2", id: "the-concept-frames", text: "The Concept Frames (Text Built In)" },
      {
        type: "p",
        text: "Some couples want the photo to carry the message itself. These setups work — when the handwriting is real and the props don't fight your faces for attention.",
      },
      {
        type: "list",
        items: [
          "Chalkboard or kraft paper: your names and date hand-lettered, held between you.",
          "The calendar frame: circling the wedding date, both of you pointing.",
          "Vintage postcards or airmail envelopes scattered around a picnic.",
          "A wooden sign planted in a field — paint it the week before, not the morning of.",
          "Scrabble tiles spelling SAVE THE DATE on a blanket.",
        ],
      },
      {
        type: "callout",
        tone: "rose",
        title: "Harper's tip",
        text: "Shoot the concept frames last, after the classic ones. Concept setups take longer than expected, and you don't want the chalkboard melting in the sun while your best light window closes.",
      },
      { type: "h2", id: "crops-for-the-designer", text: "Crops Your Designer Will Thank You For" },
      {
        type: "list",
        items: [
          "Horizontal 5x7 for standard cards — ask for this crop explicitly.",
          "Square 1:1 for the wedding website and social announcement.",
          "Vertical 4:5 for an Instagram teaser of the same frame.",
          "A 'text-safe' version: the same frame with extra sky on one side.",
        ],
      },
      { type: "h2", id: "save-the-date-photo-faq", text: "Save the Date Photo Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "When should we take our save the date photos?",
            a: "About 9–12 months before the wedding — or 3–4 months before you mail cards. That leaves room for editing, card design and printing without rushing any of the three.",
          },
          {
            q: "Can we use engagement photos as save the date photos?",
            a: "Yes, and most couples should. Any frame with negative space and a horizontal crop works. If your gallery lacks one, a 30-minute mini-session focused on card-ready frames costs far less than a full reshoot.",
          },
          {
            q: "Should the save the date photo match our wedding colors?",
            a: "Loosely. Echoing one or two palette tones makes the card feel connected to the wedding, but a strict match dates the photo if you change your mind later.",
          },
          {
            q: "How many save the date photos do we need?",
            a: "One strong frame, plus two alternates in different orientations. Your designer will want options for the card, the website and social — three frames covers all three without overshooting.",
          },
        ],
      },
      { type: "ad", slot: "in-article" },
      {
        type: "keepReading",
        items: [
          { label: "14 Save the Date Poses Built for the Card Layout", to: "/save-the-date-photos/save-the-date-poses", note: "Poses · the body language of a good card" },
          { label: "Engagement Photo Print Ideas", to: "/engagement-photo-prints", note: "Hub · what happens after the card is mailed" },
        ],
      },
    ],
  },
  {
    slug: "save-the-date-poses",
    title: "14 Save the Date Poses Built for the Card Layout",
    seoTitle: "14 Save the Date Poses Built for the Card Layout",
    seoDescription:
      "Save the date poses with built-in negative space — walking, seated and wide frames designed around the typography a card needs.",
    excerpt:
      "The best save the date poses leave room for your name. 14 walking, seated and wide frames designed around a card's typography.",
    category: "ideas",
    date: "2026-04-04",
    featuredImage: IMAGES.galleryTwirl,
    featuredAlt: "Couple with open sky beside them — a save the date pose with negative space",
    tags: ["save the date poses", "negative space", "card layout", "walking", "wide frames"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "Save the date poses are just engagement poses with a co-star: the empty space where your names will go. The frames that fail on cards fail for one reason — the couple fills every inch, and the typography has nowhere to live. So every pose below is built around negative space: a sky, a wall, a field, a river. Nail the space and the card designs itself.",
      },
      { type: "h2", id: "walking-away-poses", text: "The Walking-Away Poses" },
      {
        type: "p",
        text: "Walking frames are the most reliable save the date poses because distance does the design work — you're naturally small in a wide frame, and the landscape supplies the quiet space.",
      },
      {
        type: "list",
        items: [
          "Walk away down a path, centered in the bottom third, sky above.",
          "The glance-back: one of you turns while walking — motion plus space.",
          "Hand in hand across an open field, photographer far back on a long lens.",
          "Dock walk: water on one side becomes the text zone.",
        ],
      },
      { type: "h2", id: "seated-poses", text: "The Seated Poses" },
      {
        type: "list",
        items: [
          "Bench sit, both looking at each other, open sky to the right.",
          "Tailgate lean with the whole horizon behind you.",
          "Steps sit low in the frame, architecture rising above — text lives in the stone.",
          "Picnic blanket from overhead, offset to one corner of the frame.",
        ],
      },
      { type: "h2", id: "wide-standing-poses", text: "The Wide Standing Poses" },
      {
        type: "list",
        items: [
          "Forehead touch at the far edge of a meadow — you're a third of the frame.",
          "The dip against a plain wall, shot wide, wall doing the negative space.",
          "Silhouette on a hilltop, sky filling two-thirds of the frame.",
          "Standing small beneath a big sky — the classic 'tiny couple, huge world' frame.",
        ],
      },
      { type: "h2", id: "hands-and-ring", text: "Hands & Ring, Card-Sized" },
      {
        type: "list",
        items: [
          "Interlaced hands low in frame, soft bokeh above — text over the blur.",
          "Ring to the sky: her hand up against open blue, him blurred beside.",
          "Hands together over a map or calendar — the date literally in frame.",
        ],
      },
      {
        type: "callout",
        tone: "gold",
        title: "The 30% rule",
        text: "On a 5x7 card, you two should fill no more than 70% of the frame — and stay out of the top-left corner, where most templates place the date. Tell your photographer: 'wide, off-center, sky on one side.' Three instructions, perfect cards.",
      },
      { type: "h2", id: "save-the-date-poses-faq", text: "Save the Date Pose Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "What's the single best pose for a save the date card?",
            a: "Walking away from the camera, small in a wide horizontal frame with open sky above. It's the most forgiving pose for text placement and it reads as 'on our way' — which is the whole message of the card.",
          },
          {
            q: "Vertical or horizontal poses?",
            a: "Horizontal, always. Standard save-the-date cards are landscape, and vertical frames lose their edges to the crop. If you love a vertical, keep it for the website's square version instead.",
          },
          {
            q: "How do we pose without covering the text area?",
            a: "Ask the photographer to compose with an empty third — sky, wall or bokeh — and to keep you off the top-left corner. A ten-second instruction at the start of the session covers it.",
          },
          {
            q: "Should we look at the camera in save the date poses?",
            a: "Either works, but looking at each other or away from camera ages better on a card. A direct-to-lens gaze can read formal; a mid-motion glance reads like a story being told.",
          },
        ],
      },
      { type: "ad", slot: "end-of-section" },
      {
        type: "keepReading",
        items: [
          { label: "17 Save the Date Photo Ideas That Make the Card", to: "/save-the-date-photos/save-the-date-photo-ideas", note: "Ideas · the frames these poses fill" },
          { label: "14 Ring Engagement Photo Poses & Detail Shots", to: "/engagement-photo-poses/ring-engagement-photo-poses", note: "Poses · the ring half of the card story" },
        ],
      },
    ],
  },
  {
    slug: "engagement-announcement-photo-ideas",
    title: "15 Engagement Announcement Photo Ideas for the Big Reveal",
    seoTitle: "15 Engagement Announcement Photo Ideas (2026)",
    seoDescription:
      "Engagement announcement photo ideas — ring reveals, social-first crops and family frames for announcing the news in style.",
    excerpt:
      "The news deserves a proper frame. 15 engagement announcement photo ideas — ring reveals, social crops and the family shots that matter.",
    category: "ideas",
    date: "2026-04-06",
    featuredImage: IMAGES.galleryRing,
    featuredAlt: "Hands with an engagement ring raised in celebration — announcement photo",
    tags: ["engagement announcement", "ring reveal", "social media", "family", "newly engaged"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "An engagement announcement photo does double duty nobody warns you about: it has to work as an intimate moment AND as a thumbnail. The frames that get shared, saved and screenshot-forever are the ones with one clear subject — the ring, the hug, the hand — against a quiet background. These 15 engagement announcement photo ideas cover the ring reveal, the social-first crops, and the family frames you'll want ten minutes after the yes.",
      },
      { type: "h2", id: "the-ring-reveal-frames", text: "The Ring Reveal Frames" },
      {
        type: "p",
        text: "The ring reveal is the most-saved frame of any announcement — and the easiest to get wrong. The mistake is shooting the ring alone; the winner is the ring plus an honest reaction. Aim for the half-second after she first really looks at it.",
      },
      {
        type: "list",
        items: [
          "Her hand up by her face, eyes wide at the ring, him blurred behind.",
          "The two-handed gasp — both hands to her mouth, ring out front.",
          "Ring over his shoulder: hand forward, his laughing face behind it.",
          "The slow slide: the ring going on, shot as a sequence not a single frame.",
          "Ring against the sky at golden hour — backlight makes the stone flare.",
        ],
      },
      { type: "h2", id: "social-first-frames", text: "The Social-First Frames" },
      {
        type: "p",
        text: "Social announcement frames have one extra requirement: they must survive the crop. Instagram squares them, Stories stretch them, thumbnails shrink them. Shoot each moment twice — once wide for the feed, once tight for the Story — and both will land.",
      },
      {
        type: "list",
        items: [
          "The hand-on-chest hug, framed wide enough to square-crop either way.",
          "Her hand on his, ring centered, plain background — thumbnail-proof.",
          "The jump: mid-air, shoes off the ground, pure news energy.",
          "'Just engaged' with coffee cups raised — the casual reveal for the low-key couple.",
          "The walk-away with the ring hand swinging forward toward the light.",
        ],
      },
      { type: "h2", id: "family-and-friends-frames", text: "The Family & Friends Frames" },
      {
        type: "list",
        items: [
          "The first hug with mom — shoot from the side, nobody looks at the lens.",
          "Dad's reaction: his face when he sees the ring. The real one.",
          "The group squeeze: everyone in, someone's elbow in someone's face. Keep it.",
          "Grandparents' hands over yours — the generational frame nobody plans and everyone cries at.",
          "The toast: glasses up, mid-laugh, the news just minutes old.",
        ],
      },
      {
        type: "callout",
        tone: "sage",
        title: "Real talk",
        text: "Take the family frames within the hour. The glow is a perishable thing — by hour three everyone's hungry and the magic has a curfew.",
      },
      { type: "h2", id: "announcement-faq", text: "Announcement Photo Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "When should we post our engagement announcement photos?",
            a: "Tell family first, then post — usually within 24–48 hours of the proposal. Waiting longer makes the 'news' feel old, and you'll want the reveal energy while it's fresh.",
          },
          {
            q: "What's the best engagement announcement photo for social media?",
            a: "One clear subject against a quiet background: the ring on her hand, the hug, or the two of you mid-laugh. If the thumbnail still reads at a glance, it'll perform.",
          },
          {
            q: "Do we need a photographer for announcement photos?",
            a: "For the proposal itself, a hidden photographer is worth it if the budget allows. For the announcement set after, a phone in portrait mode with good window light gets you 90% of the way.",
          },
          {
            q: "How many announcement photos should we post?",
            a: "One hero frame in the feed, plus a carousel of two or three supporting moments. Resist the dump of fifteen — a tight set reads confident, and saves the rest for the people who matter.",
          },
        ],
      },
      { type: "ad", slot: "in-article" },
      {
        type: "keepReading",
        items: [
          { label: "13 Surprise Proposal Ideas (and How to Photograph Them)", to: "/save-the-date-photos/surprise-proposal-ideas", note: "Ideas · where this story starts" },
          { label: "17 Save the Date Photo Ideas", to: "/save-the-date-photos/save-the-date-photo-ideas", note: "Ideas · the card that follows the post" },
        ],
      },
    ],
  },
  {
    slug: "surprise-proposal-ideas",
    title: "13 Surprise Proposal Ideas (and How to Get Them on Camera)",
    seoTitle: "13 Surprise Proposal Ideas + How to Photograph Them",
    seoDescription:
      "Surprise proposal ideas that actually stay secret — plus the photographer angles, scouting checklist and signal plan that catch the moment.",
    excerpt:
      "A surprise proposal is a heist with a ring. 13 setups that keep the secret — and the camera plan that catches the kneel.",
    category: "ideas",
    date: "2026-04-08",
    featuredImage: IMAGES.hero,
    featuredAlt: "Golden hour meadow at sunset — a classic surprise proposal setting",
    tags: ["surprise proposal", "hidden photographer", "scouting", "the kneel", "secret"],
    author: harper,
    blocks: [
      {
        type: "p",
        text: "A surprise proposal is really two operations running at once: the secret, and the photograph. The ideas below keep the first one safe — because a surprise that leaks is just a scheduled appointment — but every one of them is also written from the photographer's side, because the moment you can't repeat is the moment you can't afford to miss. After 40+ proposals photographed, I can tell you the setups that deliver both are the ones with a scouted kneel point, a light source you've checked at the right hour, and a shooter who's been there before you have.",
      },
      { type: "h2", id: "setups-that-keep-the-secret", text: "Setups That Keep the Secret" },
      {
        type: "p",
        text: "The best cover for a proposal is an event she already believes in — a photoshoot, a hike, a dinner. 'Let's get photos taken' is the single most effective alibi in the business, and it hands the photographer a legitimate reason to be holding a camera.",
      },
      {
        type: "list",
        items: [
          "The fake engagement shoot: book a 'couple's photos' session — you're already dressed for it.",
          "The golden-hour hike to the overlook you've 'wanted to see.'",
          "A picnic at the park where you had your first date.",
          "The scenic detour on a road trip — 'let's stop here, the light's nice.'",
          "Dessert on the rooftop she mentioned once, three months ago. (You were taking notes.)",
        ],
      },
      { type: "h2", id: "travel-and-landmark-proposals", text: "Travel & Landmark Proposals" },
      {
        type: "list",
        items: [
          "Sunrise at the overlook — nobody's awake, the secret stays, the light is empty and gold.",
          "The quiet corner of a famous landmark, shot long-lens from across the plaza.",
          "The beach walk at low tide — footprints in the sand, no witnesses but the photographer.",
          "A boat proposal at blue hour, the city glowing behind the water.",
        ],
      },
      { type: "h2", id: "at-home-and-intimate", text: "At-Home & Intimate Proposals" },
      {
        type: "list",
        items: [
          "The string-light living room: hang them while she's out, propose under them.",
          "Breakfast in bed, ring under the cloche — the slowest, softest reveal there is.",
          "The photo-wall reveal: a gallery of your two years, ending with an empty frame and a question.",
          "The dog delivers it: ring on the collar, the good boy does the asking.",
        ],
      },
      { type: "h2", id: "the-photographers-checklist", text: "The Photographer's Checklist (Don't Miss the Kneel)" },
      {
        type: "p",
        text: "The kneel lasts four seconds. Everything on this list exists to make sure the camera is already where it needs to be when those four seconds start.",
      },
      {
        type: "list",
        items: [
          "Scout the kneel point together with the photographer, at the same hour as the proposal.",
          "Check the light direction at that exact hour — backlit beats frontlit for the reaction.",
          "Agree on a signal to begin ('look at that bird' works as well as anything).",
          "Shooter upwind, 30+ feet away, long lens — the surprise stays a surprise.",
          "Two bodies if possible: one tight on her reaction, one wide on the kneel.",
          "Keep shooting for one full minute after the yes — the aftermath out-photographs the kneel.",
        ],
      },
      {
        type: "callout",
        tone: "rose",
        title: "Harper's tip",
        text: "Rehearse the kneel once, alone, at the spot. Which knee, which pocket, how the box opens toward the camera side of her left hand. The couples who rehearse look calm; the ones who don't look like they're proposing to the pavement.",
      },
      { type: "h2", id: "surprise-proposal-faq", text: "Surprise Proposal Questions, Answered" },
      {
        type: "faq",
        items: [
          {
            q: "How do we hire a hidden photographer without her finding out?",
            a: "Book under your name only, communicate by email or a separate number, and meet the photographer at the location beforehand — never together. Most proposal photographers have done this dozens of times and will help you keep the cover.",
          },
          {
            q: "What's the best time of day for a surprise proposal?",
            a: "Golden hour — the last hour before sunset — for outdoor proposals. You get the best light, and 'let's catch the sunset' is a believable reason to be there with a camera.",
          },
          {
            q: "How far away should the photographer be?",
            a: "About 30–50 feet with a 70–200mm lens. Close enough for sharp frames, far enough that conversation stays private and the surprise stays intact.",
          },
          {
            q: "What if it rains on the proposal day?",
            a: "Have a covered backup scouted — a porch, a pavilion, a café window. Umbrella proposals photograph beautifully, and 'the day it poured' becomes part of the story instead of ruining it.",
          },
        ],
      },
      { type: "ad", slot: "in-article" },
      {
        type: "keepReading",
        items: [
          { label: "12 Proposal Poses for the Moment & After", to: "/engagement-photo-poses/proposal-poses", note: "Poses · the four seconds, planned" },
          { label: "15 Engagement Announcement Photo Ideas", to: "/save-the-date-photos/engagement-announcement-photo-ideas", note: "Ideas · what to post after the yes" },
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => {
  const p = POSTS.find((x) => x.slug === slug);
  return p ? withMeta(p) : undefined;
};

/**
 * Silo (hub) assignment per article — one post lives in exactly one hub.
 * Drives the canonical `/{hub}/{slug}/` URLs, breadcrumb trail and the
 * hub-page spoke lists. Mirrors the Next.js `[hub]/[slug]` segment pair.
 */
export const POST_HUB: Record<string, string> = {
  "30-engagement-photo-poses-couples": "engagement-photo-poses",
  "classic-engagement-photos": "engagement-photo-poses",
  "best-outfits-engagement-photos": "engagement-photo-outfits",
  "top-engagement-photo-locations-oklahoma": "engagement-photo-locations",
  "engagement-photo-ideas-outside": "engagement-photo-locations",
  "outdoor-engagement-photo-locations": "engagement-photo-locations",
  "at-home-engagement-photo-ideas": "engagement-photo-locations",
  "urban-engagement-photo-ideas": "engagement-photo-locations",
  "park-garden-engagement-photo-ideas": "engagement-photo-locations",
  "beach-engagement-photo-ideas": "engagement-photo-locations",
  "coffee-shop-engagement-photo-ideas": "engagement-photo-locations",
  "save-the-date-photo-ideas": "save-the-date-photos",
  "save-the-date-poses": "save-the-date-photos",
  "engagement-announcement-photo-ideas": "save-the-date-photos",
  "surprise-proposal-ideas": "save-the-date-photos",
  "casual-engagement-photo-ideas": "engagement-photo-ideas",
  "unique-engagement-photo-ideas": "engagement-photo-ideas",
  "cute-engagement-photo-ideas": "engagement-photo-ideas",
  "romantic-engagement-photo-ideas": "engagement-photo-ideas",
  "fun-engagement-photo-ideas": "engagement-photo-ideas",
  "classic-engagement-photo-ideas": "engagement-photo-ideas",
  "candid-engagement-photo-ideas": "engagement-photo-ideas",
  "elegant-engagement-photo-ideas": "engagement-photo-ideas",
  "vintage-engagement-photo-ideas": "engagement-photo-ideas",
  "night-engagement-photo-ideas": "engagement-photo-ideas",
  "diy-engagement-photo-ideas": "engagement-photo-ideas",
  "golden-hour-photography-tips-couples": "engagement-photo-ideas",
  "engagement-photo-checklist": "engagement-photo-ideas",
  "how-to-feel-natural-in-front-of-camera": "engagement-photo-ideas",
  "natural-engagement-photo-poses": "engagement-photo-poses",
  "ring-engagement-photo-poses": "engagement-photo-poses",
  "outdoor-engagement-photo-poses": "engagement-photo-poses",
  "couple-engagement-poses": "engagement-photo-poses",
  "camera-shy-engagement-poses": "engagement-photo-poses",
  "proposal-poses": "engagement-photo-poses",
};

export const hubFor = (slug: string) => POST_HUB[slug] ?? "engagement-photo-ideas";

/**
 * Frontmatter (§3 of the SEO plan) that sits alongside each article body:
 * keyword targeting, Pinterest pin assets, internal links, related-post
 * overrides and monetization switches. Merged into posts by `withMeta`.
 */
import type { Monetization, PinImage } from "./types";

const M_ON: Monetization = { adsense: true, affiliate: true, leadMagnet: false };

interface PostMeta {
  pillar?: boolean;
  primaryKeyword: string;
  secondaryKeywords: string[];
  lsiKeywords: string[];
  searchIntent?: "informational" | "commercial" | "navigational";
  pinImages?: PinImage[];
  citations?: string[];
  internalLinks?: { url: string; anchor: string }[];
  relatedPosts?: string[];
  monetization: Monetization;
}

const pin = (image: string, pinTitle: string, pinDescription: string): PinImage => ({
  image,
  pinTitle,
  pinDescription,
});

export const POST_META: Record<string, PostMeta> = {
  "30-engagement-photo-poses-couples": {
    pillar: true,
    primaryKeyword: "engagement photo poses",
    secondaryKeywords: ["engagement poses for couples", "romantic engagement poses", "fun engagement poses"],
    lsiKeywords: ["forehead touch", "walking away pose", "hand placement", "golden hour", "candid frames"],
    searchIntent: "informational",
    pinImages: [
      pin(IMAGES.posesCover, "30 Engagement Photo Poses (2026)", "Classic, fun and romantic engagement photo poses for couples — with the exact direction photographers use. Save this pose list for your session."),
      pin(IMAGES.galleryLaugh, "Poses for Couples Who Hate Posing", "Camera-shy? These relaxed engagement poses feel natural, not stiff. Save them before your shoot."),
      pin(IMAGES.gallerySilhouette, "Romantic Engagement Poses at Sunset", "Golden-hour engagement poses that look timeless. Pin the frames you want to recreate."),
    ],
    citations: [],
    internalLinks: [
      { url: "/engagement-photo-poses/classic-engagement-photos", anchor: "classic engagement photos" },
      { url: "/engagement-photo-outfits/best-outfits-engagement-photos", anchor: "what to wear for engagement photos" },
      { url: "/engagement-photo-ideas/how-to-feel-natural-in-front-of-camera", anchor: "feel natural in front of the camera" },
    ],
    relatedPosts: ["classic-engagement-photos", "casual-engagement-photo-ideas", "best-outfits-engagement-photos"],
    monetization: M_ON,
  },
  "classic-engagement-photos": {
    primaryKeyword: "classic engagement photos",
    secondaryKeywords: ["timeless engagement photos", "classic engagement poses", "traditional engagement pictures"],
    lsiKeywords: ["forehead touch", "the dip", "temple kiss", "black and white", "film grain"],
    searchIntent: "informational",
    pinImages: [
      pin(IMAGES.classicDip, "27 Classic Engagement Photos", "Timeless engagement poses that never go out of style — from 400+ real sessions. Save the ones you love."),
      pin(IMAGES.posesCover, "Classic Poses for Engagement Photos", "The engagement poses that still look beautiful in 20 years. Pin this cheat sheet."),
      pin(IMAGES.galleryRing, "Timeless Engagement Photo Ideas", "Classic, film-inspired engagement frames couples reprint for decades. Save for your shoot."),
    ],
    citations: [],
    internalLinks: [
      { url: "/engagement-photo-poses/30-engagement-photo-poses-couples", anchor: "30 engagement photo poses" },
      { url: "/engagement-photo-ideas/casual-engagement-photo-ideas", anchor: "casual engagement photo ideas" },
      { url: "/engagement-photo-outfits/best-outfits-engagement-photos", anchor: "best outfits for engagement photos" },
    ],
    relatedPosts: ["30-engagement-photo-poses-couples", "casual-engagement-photo-ideas", "golden-hour-photography-tips-couples"],
    monetization: M_ON,
  },
  "best-outfits-engagement-photos": {
    pillar: true,
    primaryKeyword: "what to wear for engagement photos",
    secondaryKeywords: ["engagement photo outfits", "what to wear engagement shoot", "couple photo outfits"],
    lsiKeywords: ["color palette", "coordinated outfits", "muted tones", "70/20/10 rule", "seasonal outfits"],
    searchIntent: "informational",
    pinImages: [
      pin(IMAGES.outfitsCover, "What to Wear: Engagement Photos", "Colors, fabrics and formulas that flatter on camera — plus what to avoid. Save this outfit guide."),
      pin(IMAGES.galleryTwirl, "Engagement Outfit Ideas (Do's & Don'ts)", "Coordinate, don't match. The 70/20/10 rule for engagement outfits that look timeless."),
      pin(IMAGES.casualCafe, "Casual Engagement Outfits", "Jeans, knits and clean sneakers — styled on purpose. Pin the looks you'd wear."),
    ],
    citations: [],
    internalLinks: [
      { url: "/engagement-photo-ideas/casual-engagement-photo-ideas", anchor: "casual engagement photo ideas" },
      { url: "/engagement-photo-poses/30-engagement-photo-poses-couples", anchor: "engagement photo poses" },
      { url: "/engagement-photo-locations/engagement-photo-ideas-outside", anchor: "outdoor engagement photo ideas" },
    ],
    relatedPosts: ["casual-engagement-photo-ideas", "30-engagement-photo-poses-couples", "engagement-photo-checklist"],
    monetization: M_ON,
  },
  "top-engagement-photo-locations-oklahoma": {
    primaryKeyword: "engagement photo locations oklahoma",
    secondaryKeywords: ["oklahoma engagement photos", "okc engagement photographer spots", "engagement shoot oklahoma"],
    lsiKeywords: ["golden hour", "guthrie", "tallgrass prairie", "bricktown", "permits"],
    searchIntent: "informational",
    pinImages: [
      pin(IMAGES.locationsCover, "10 Engagement Photo Locations in Oklahoma", "Lakes, bridges, prairies and brick districts — scouted with light and permit notes. Save for your OK shoot."),
      pin(IMAGES.hero, "Oklahoma Engagement Photo Spots", "Golden-hour engagement locations near OKC that deliver every time. Pin this list."),
      pin(IMAGES.gallerySilhouette, "Prairie Engagement Photo Ideas", "Wide skies and tallgrass — the most romantic Oklahoma engagement backdrop. Save it."),
    ],
    citations: [],
    internalLinks: [
      { url: "/engagement-photo-locations/engagement-photo-ideas-outside", anchor: "outdoor engagement photo ideas" },
      { url: "/engagement-photo-ideas/golden-hour-photography-tips-couples", anchor: "golden hour photography tips" },
      { url: "/engagement-photo-outfits/best-outfits-engagement-photos", anchor: "what to wear" },
    ],
    relatedPosts: ["engagement-photo-ideas-outside", "golden-hour-photography-tips-couples", "engagement-photo-checklist"],
    monetization: M_ON,
  },
  "engagement-photo-ideas-outside": {
    primaryKeyword: "outdoor engagement photo ideas",
    secondaryKeywords: ["outside engagement photos", "nature engagement photos", "engagement photos in a field"],
    lsiKeywords: ["meadow", "creek", "tree line", "weather", "golden hour"],
    searchIntent: "informational",
    pinImages: [
      pin(IMAGES.hero, "21 Outdoor Engagement Photo Ideas", "Meadows, creeks, tree lines and city steps — outdoor engagement ideas for every season. Save them."),
      pin(IMAGES.locationsCover, "Outdoor Engagement Poses & Spots", "Outside solves lighting, variety and cost. Pin these 21 outdoor engagement ideas."),
      pin(IMAGES.gallerySilhouette, "Sunset Engagement Photo Ideas", "Golden-hour silhouettes and backlit fields — the outdoor frames every gallery needs."),
    ],
    citations: [],
    internalLinks: [
      { url: "/engagement-photo-locations/top-engagement-photo-locations-oklahoma", anchor: "engagement photo locations in Oklahoma" },
      { url: "/engagement-photo-ideas/casual-engagement-photo-ideas", anchor: "casual engagement photos" },
      { url: "/engagement-photo-ideas/golden-hour-photography-tips-couples", anchor: "golden hour tips" },
    ],
    relatedPosts: ["top-engagement-photo-locations-oklahoma", "golden-hour-photography-tips-couples", "classic-engagement-photos"],
    monetization: M_ON,
  },
  "casual-engagement-photo-ideas": {
    pillar: true,
    primaryKeyword: "casual engagement photos",
    secondaryKeywords: ["casual engagement photo ideas", "relaxed engagement photos", "everyday engagement photos"],
    lsiKeywords: ["natural poses", "candid moments", "comfortable outfits", "golden hour", "at home session"],
    searchIntent: "informational",
    pinImages: [
      pin(IMAGES.casualCafe, "15 Casual Engagement Photo Ideas", "Casual engagement photos that feel like your real life — outfits, poses and locations. Save this guide."),
      pin(IMAGES.galleryLaugh, "Relaxed Engagement Poses", "Natural poses for couples who hate the camera. Pin these before your casual session."),
      pin(IMAGES.outfitsCover, "Casual Engagement Outfits", "Jeans, yes — styled on purpose. The outfits that make casual photos look intentional."),
    ],
    citations: [],
    internalLinks: [
      { url: "/engagement-photo-ideas/unique-engagement-photo-ideas", anchor: "unique engagement photo ideas" },
      { url: "/engagement-photo-locations/engagement-photo-ideas-outside", anchor: "outdoor engagement photo ideas" },
      { url: "/engagement-photo-poses/30-engagement-photo-poses-couples", anchor: "engagement photo poses" },
    ],
    relatedPosts: ["unique-engagement-photo-ideas", "engagement-photo-ideas-outside", "best-outfits-engagement-photos"],
    monetization: { adsense: true, affiliate: true, leadMagnet: true },
  },
  "unique-engagement-photo-ideas": {
    primaryKeyword: "unique engagement photo ideas",
    secondaryKeywords: ["unique engagement pics", "creative engagement photos", "different engagement photo ideas"],
    lsiKeywords: ["props", "blue hour", "concept shoot", "personality", "neon"],
    searchIntent: "informational",
    pinImages: [
      pin(IMAGES.gallerySilhouette, "19 Unique Engagement Pics", "Creative engagement ideas that look like you, not a template. Save the ones that fit your story."),
      pin(IMAGES.casualCafe, "Unique Engagement Photo Ideas", "Props with a story and blue-hour timing — engagement pics nobody else will have."),
      pin(IMAGES.galleryTwirl, "Creative Couple Photo Ideas", "Concepts, not poses: 19 ways to make your engagement gallery one of a kind."),
    ],
    citations: [],
    internalLinks: [
      { url: "/engagement-photo-ideas/casual-engagement-photo-ideas", anchor: "casual engagement photos" },
      { url: "/engagement-photo-ideas/how-to-feel-natural-in-front-of-camera", anchor: "feel natural in front of the camera" },
      { url: "/engagement-photo-locations/engagement-photo-ideas-outside", anchor: "outdoor engagement ideas" },
    ],
    relatedPosts: ["casual-engagement-photo-ideas", "engagement-photo-ideas-outside", "how-to-feel-natural-in-front-of-camera"],
    monetization: M_ON,
  },
  "golden-hour-photography-tips-couples": {
    primaryKeyword: "golden hour engagement photos",
    secondaryKeywords: ["golden hour photography tips", "best light for engagement photos", "sunset engagement photos"],
    lsiKeywords: ["backlit", "frontlit", "blue hour", "overcast", "sun flare"],
    searchIntent: "informational",
    pinImages: [
      pin(IMAGES.hero, "Golden Hour Photo Tips for Couples", "Time the light like a pro — no camera knowledge needed. Save these golden-hour tips."),
      pin(IMAGES.gallerySilhouette, "Sunset Engagement Photo Tips", "Backlit vs frontlit, and what to do when the sky goes grey. Pin this light guide."),
      pin(IMAGES.galleryTwirl, "Best Light for Engagement Photos", "The 60 minutes that make or break your gallery — and how to use them."),
    ],
    citations: [],
    internalLinks: [
      { url: "/engagement-photo-locations/engagement-photo-ideas-outside", anchor: "outdoor engagement photo ideas" },
      { url: "/engagement-photo-locations/top-engagement-photo-locations-oklahoma", anchor: "Oklahoma engagement locations" },
      { url: "/engagement-photo-ideas/engagement-photo-checklist", anchor: "engagement photo checklist" },
    ],
    relatedPosts: ["engagement-photo-ideas-outside", "top-engagement-photo-locations-oklahoma", "engagement-photo-checklist"],
    monetization: M_ON,
  },
  "engagement-photo-checklist": {
    primaryKeyword: "engagement photo checklist",
    secondaryKeywords: ["engagement shoot preparation", "what to bring engagement photos", "engagement photo planning"],
    lsiKeywords: ["timeline", "outfits", "rain date", "golden hour", "day-of kit"],
    searchIntent: "informational",
    pinImages: [
      pin(IMAGES.galleryLaugh, "Engagement Photo Checklist", "Everything to plan from 3 months out to 1 hour before — in order. Save this checklist."),
      pin(IMAGES.outfitsCover, "Engagement Shoot Prep Guide", "Outfits, scouting, timing and the 10 things to pack. Pin it for your session."),
      pin(IMAGES.hero, "Plan Your Engagement Photos", "The timeline that makes sessions feel relaxed, not rushed. Save for later."),
    ],
    citations: [],
    internalLinks: [
      { url: "/engagement-photo-outfits/best-outfits-engagement-photos", anchor: "what to wear for engagement photos" },
      { url: "/engagement-photo-ideas/golden-hour-photography-tips-couples", anchor: "golden hour tips" },
      { url: "/engagement-photo-poses/30-engagement-photo-poses-couples", anchor: "engagement photo poses" },
    ],
    relatedPosts: ["best-outfits-engagement-photos", "golden-hour-photography-tips-couples", "how-to-feel-natural-in-front-of-camera"],
    monetization: M_ON,
  },
  "how-to-feel-natural-in-front-of-camera": {
    primaryKeyword: "how to look natural in engagement photos",
    secondaryKeywords: ["camera shy engagement photos", "natural engagement poses", "relaxed couple photos"],
    lsiKeywords: ["prompts", "movement", "breathing", "candid", "comfort"],
    searchIntent: "informational",
    pinImages: [
      pin(IMAGES.galleryRing, "Look Natural in Engagement Photos", "Prompts, movement and one breathing trick for camera-shy couples. Save these."),
      pin(IMAGES.galleryLaugh, "Poses for Camera-Shy Couples", "Stop performing, start doing — the prompts that make natural engagement photos."),
      pin(IMAGES.hero, "Natural Engagement Photo Tips", "How photographers make awkward couples glow. Pin the toolkit."),
    ],
    citations: [],
    internalLinks: [
      { url: "/engagement-photo-poses/30-engagement-photo-poses-couples", anchor: "engagement photo poses" },
      { url: "/engagement-photo-ideas/casual-engagement-photo-ideas", anchor: "casual engagement photos" },
      { url: "/engagement-photo-ideas/unique-engagement-photo-ideas", anchor: "unique engagement photo ideas" },
    ],
    relatedPosts: ["30-engagement-photo-poses-couples", "casual-engagement-photo-ideas", "unique-engagement-photo-ideas"],
    monetization: M_ON,
  },

  /* ———— Engagement Photo Ideas cluster (9 style guides) ———— */
  "cute-engagement-photo-ideas": {
    primaryKeyword: "cute engagement photo ideas",
    secondaryKeywords: ["cute engagement pictures", "adorable engagement photos", "cute engagement poses"],
    lsiKeywords: ["playful couple photos", "giggling", "props", "candid laughter", "sweet moments"],
    searchIntent: "informational",
    internalLinks: [
      { url: "/engagement-photo-ideas/fun-engagement-photo-ideas", anchor: "fun engagement photo ideas" },
      { url: "/engagement-photo-ideas/romantic-engagement-photo-ideas", anchor: "romantic engagement photo ideas" },
      { url: "/engagement-photo-poses/30-engagement-photo-poses-couples", anchor: "engagement photo poses" },
    ],
    relatedPosts: ["fun-engagement-photo-ideas", "romantic-engagement-photo-ideas", "candid-engagement-photo-ideas"],
    monetization: M_ON,
  },
  "romantic-engagement-photo-ideas": {
    primaryKeyword: "romantic engagement photo ideas",
    secondaryKeywords: ["romantic engagement photos", "intimate couple photos", "romantic poses"],
    lsiKeywords: ["golden hour", "silhouette", "embrace", "forehead touch", "backlit"],
    searchIntent: "informational",
    internalLinks: [
      { url: "/engagement-photo-ideas/elegant-engagement-photo-ideas", anchor: "elegant engagement photo ideas" },
      { url: "/engagement-photo-ideas/golden-hour-photography-tips-couples", anchor: "golden hour tips" },
      { url: "/engagement-photo-poses/30-engagement-photo-poses-couples", anchor: "romantic engagement poses" },
    ],
    relatedPosts: ["elegant-engagement-photo-ideas", "golden-hour-photography-tips-couples", "classic-engagement-photo-ideas"],
    monetization: M_ON,
  },
  "fun-engagement-photo-ideas": {
    primaryKeyword: "fun engagement photo ideas",
    secondaryKeywords: ["playful engagement photos", "funny engagement pictures", "fun poses"],
    lsiKeywords: ["laughing", "games", "confetti", "silly props", "movement"],
    searchIntent: "informational",
    internalLinks: [
      { url: "/engagement-photo-ideas/cute-engagement-photo-ideas", anchor: "cute engagement photo ideas" },
      { url: "/engagement-photo-ideas/candid-engagement-photo-ideas", anchor: "candid engagement photo ideas" },
      { url: "/engagement-photo-ideas/how-to-feel-natural-in-front-of-camera", anchor: "feel natural in front of the camera" },
    ],
    relatedPosts: ["cute-engagement-photo-ideas", "candid-engagement-photo-ideas", "how-to-feel-natural-in-front-of-camera"],
    monetization: M_ON,
  },
  "classic-engagement-photo-ideas": {
    primaryKeyword: "classic engagement photo ideas",
    secondaryKeywords: ["timeless engagement pictures", "elegant engagement photos", "formal engagement ideas"],
    lsiKeywords: ["the dip", "clean lines", "stillness", "neutral palette", "historic setting"],
    searchIntent: "informational",
    internalLinks: [
      { url: "/engagement-photo-poses/classic-engagement-photos", anchor: "classic engagement photos" },
      { url: "/engagement-photo-ideas/elegant-engagement-photo-ideas", anchor: "elegant engagement photo ideas" },
      { url: "/engagement-photo-outfits/best-outfits-engagement-photos", anchor: "what to wear for engagement photos" },
    ],
    relatedPosts: ["classic-engagement-photos", "elegant-engagement-photo-ideas", "romantic-engagement-photo-ideas"],
    monetization: M_ON,
  },
  "candid-engagement-photo-ideas": {
    primaryKeyword: "candid engagement photo ideas",
    secondaryKeywords: ["unposed engagement photos", "natural engagement pictures", "candid couple photography"],
    lsiKeywords: ["documentary", "walking prompts", "in-between moments", "long lens", "quiet direction"],
    searchIntent: "informational",
    internalLinks: [
      { url: "/engagement-photo-ideas/how-to-feel-natural-in-front-of-camera", anchor: "feel natural in front of the camera" },
      { url: "/engagement-photo-ideas/fun-engagement-photo-ideas", anchor: "fun engagement photo ideas" },
      { url: "/engagement-photo-ideas/casual-engagement-photo-ideas", anchor: "casual engagement photos" },
    ],
    relatedPosts: ["how-to-feel-natural-in-front-of-camera", "fun-engagement-photo-ideas", "casual-engagement-photo-ideas"],
    monetization: M_ON,
  },
  "elegant-engagement-photo-ideas": {
    primaryKeyword: "elegant engagement photo ideas",
    secondaryKeywords: ["classy engagement photos", "sophisticated engagement pictures", "formal couple poses"],
    lsiKeywords: ["editorial", "architecture", "monochrome", "negative space", "restraint"],
    searchIntent: "informational",
    internalLinks: [
      { url: "/engagement-photo-ideas/classic-engagement-photo-ideas", anchor: "classic engagement photo ideas" },
      { url: "/engagement-photo-ideas/romantic-engagement-photo-ideas", anchor: "romantic engagement photo ideas" },
      { url: "/engagement-photo-outfits/best-outfits-engagement-photos", anchor: "elegant engagement outfits" },
    ],
    relatedPosts: ["classic-engagement-photo-ideas", "romantic-engagement-photo-ideas", "classic-engagement-photos"],
    monetization: M_ON,
  },
  "vintage-engagement-photo-ideas": {
    primaryKeyword: "vintage engagement photo ideas",
    secondaryKeywords: ["retro engagement photos", "vintage couple poses", "nostalgic engagement session"],
    lsiKeywords: ["film grain", "lifted blacks", "period styling", "main street", "throwback"],
    searchIntent: "informational",
    internalLinks: [
      { url: "/engagement-photo-ideas/classic-engagement-photo-ideas", anchor: "classic engagement photo ideas" },
      { url: "/engagement-photo-ideas/elegant-engagement-photo-ideas", anchor: "elegant engagement photo ideas" },
      { url: "/engagement-photo-outfits/best-outfits-engagement-photos", anchor: "vintage engagement outfits" },
    ],
    relatedPosts: ["classic-engagement-photo-ideas", "elegant-engagement-photo-ideas", "classic-engagement-photos"],
    monetization: M_ON,
  },
  "night-engagement-photo-ideas": {
    primaryKeyword: "night engagement photo ideas",
    secondaryKeywords: ["evening engagement session", "low light couple photos", "city night engagement photos"],
    lsiKeywords: ["blue hour", "string lights", "neon", "city glow", "sparklers"],
    searchIntent: "informational",
    internalLinks: [
      { url: "/engagement-photo-ideas/unique-engagement-photo-ideas", anchor: "unique engagement photo ideas" },
      { url: "/engagement-photo-ideas/golden-hour-photography-tips-couples", anchor: "golden hour tips" },
      { url: "/engagement-photo-locations/engagement-photo-ideas-outside", anchor: "outdoor engagement photo ideas" },
    ],
    relatedPosts: ["unique-engagement-photo-ideas", "golden-hour-photography-tips-couples", "elegant-engagement-photo-ideas"],
    monetization: M_ON,
  },
  "diy-engagement-photo-ideas": {
    primaryKeyword: "diy engagement photo ideas",
    secondaryKeywords: ["budget engagement photos", "self-taken engagement pictures", "at home engagement shoot"],
    lsiKeywords: ["tripod", "self-timer", "phone camera", "free locations", "remote shutter"],
    searchIntent: "informational",
    internalLinks: [
      { url: "/engagement-photo-ideas/casual-engagement-photo-ideas", anchor: "casual engagement photos" },
      { url: "/engagement-photo-ideas/engagement-photo-checklist", anchor: "engagement photo checklist" },
      { url: "/engagement-photo-ideas/golden-hour-photography-tips-couples", anchor: "golden hour tips" },
    ],
    relatedPosts: ["casual-engagement-photo-ideas", "engagement-photo-checklist", "golden-hour-photography-tips-couples"],
    monetization: M_ON,
  },
  "natural-engagement-photo-poses": {
    primaryKeyword: "natural engagement photo poses",
    secondaryKeywords: ["unposed engagement photos", "relaxed poses", "candid engagement poses"],
    lsiKeywords: ["prompts", "walking frames", "movement cues", "sit-down sets", "golden hour"],
    internalLinks: [
      { url: "/engagement-photo-poses/camera-shy-engagement-poses", anchor: "engagement poses for camera shy couples" },
      { url: "/engagement-photo-ideas/candid-engagement-photo-ideas", anchor: "candid engagement photo ideas" },
      { url: "/engagement-photo-poses/couple-engagement-poses", anchor: "engagement poses for couples" },
    ],
    relatedPosts: ["camera-shy-engagement-poses", "couple-engagement-poses", "candid-engagement-photo-ideas"],
    monetization: M_ON,
  },
  "ring-engagement-photo-poses": {
    primaryKeyword: "ring engagement photo poses",
    secondaryKeywords: ["engagement ring photos", "ring detail shots", "ring reveal poses"],
    lsiKeywords: ["hands", "macro", "backlight", "save the date", "jewelry"],
    internalLinks: [
      { url: "/engagement-photo-poses/proposal-poses", anchor: "proposal poses" },
      { url: "/engagement-photo-ideas/engagement-photo-checklist", anchor: "engagement photo checklist" },
      { url: "/save-the-date-photos", anchor: "save the date photoshoot ideas" },
    ],
    relatedPosts: ["proposal-poses", "engagement-photo-checklist", "classic-engagement-photos"],
    monetization: M_ON,
  },
  "outdoor-engagement-photo-poses": {
    primaryKeyword: "outdoor engagement photo poses",
    secondaryKeywords: ["outside engagement poses", "park engagement poses", "golden hour poses"],
    lsiKeywords: ["backlit", "tree line", "meadow", "reflection", "silhouette"],
    internalLinks: [
      { url: "/engagement-photo-locations/engagement-photo-ideas-outside", anchor: "outdoor engagement photo ideas" },
      { url: "/engagement-photo-ideas/golden-hour-photography-tips-couples", anchor: "golden hour tips" },
      { url: "/engagement-photo-locations/top-engagement-photo-locations-oklahoma", anchor: "Oklahoma engagement locations" },
    ],
    relatedPosts: ["engagement-photo-ideas-outside", "golden-hour-photography-tips-couples", "couple-engagement-poses"],
    monetization: M_ON,
  },
  "couple-engagement-poses": {
    primaryKeyword: "engagement poses for couples",
    secondaryKeywords: ["couple engagement poses", "romantic couple poses", "relaxed couple pictures"],
    lsiKeywords: ["standing frames", "sitting frames", "movement", "height difference", "flattering"],
    internalLinks: [
      { url: "/engagement-photo-poses/natural-engagement-photo-poses", anchor: "natural engagement photo poses" },
      { url: "/engagement-photo-poses/30-engagement-photo-poses-couples", anchor: "30 engagement photo poses" },
      { url: "/engagement-photo-poses/classic-engagement-photos", anchor: "classic engagement photos" },
    ],
    relatedPosts: ["natural-engagement-photo-poses", "classic-engagement-photos", "romantic-engagement-photo-ideas"],
    monetization: M_ON,
  },
  "camera-shy-engagement-poses": {
    primaryKeyword: "engagement poses for camera shy couples",
    secondaryKeywords: ["awkward engagement photos", "how to pose for engagement photos", "relaxed posing"],
    lsiKeywords: ["no eye contact", "task poses", "warm-up", "long lens", "comfort"],
    internalLinks: [
      { url: "/engagement-photo-ideas/how-to-feel-natural-in-front-of-camera", anchor: "how to look natural in engagement photos" },
      { url: "/engagement-photo-poses/natural-engagement-photo-poses", anchor: "natural engagement photo poses" },
      { url: "/engagement-photo-ideas/casual-engagement-photo-ideas", anchor: "casual engagement photos" },
    ],
    relatedPosts: ["how-to-feel-natural-in-front-of-camera", "natural-engagement-photo-poses", "casual-engagement-photo-ideas"],
    monetization: M_ON,
  },
  "proposal-poses": {
    primaryKeyword: "proposal poses",
    secondaryKeywords: ["proposal photo poses", "surprise proposal pictures", "proposal shoot ideas"],
    lsiKeywords: ["the kneel", "reaction", "long lens", "scouting", "aftermath"],
    internalLinks: [
      { url: "/engagement-photo-poses/ring-engagement-photo-poses", anchor: "ring engagement photo poses" },
      { url: "/save-the-date-photos", anchor: "save the date photoshoot ideas" },
      { url: "/engagement-photo-ideas/golden-hour-photography-tips-couples", anchor: "golden hour tips" },
    ],
    relatedPosts: ["ring-engagement-photo-poses", "romantic-engagement-photo-ideas", "classic-engagement-photos"],
    monetization: M_ON,
  },
  "outdoor-engagement-photo-locations": {
    primaryKeyword: "outdoor engagement photo locations",
    secondaryKeywords: ["outdoor engagement pictures", "outside engagement photos", "nature engagement session"],
    lsiKeywords: ["golden hour", "prairie", "creek", "tree line", "overlook", "permits"],
    internalLinks: [
      { url: "/engagement-photo-locations/top-engagement-photo-locations-oklahoma", anchor: "engagement photo locations in Oklahoma" },
      { url: "/engagement-photo-poses/outdoor-engagement-photo-poses", anchor: "outdoor engagement photo poses" },
      { url: "/engagement-photo-ideas/golden-hour-photography-tips-couples", anchor: "golden hour photography tips" },
    ],
    relatedPosts: ["top-engagement-photo-locations-oklahoma", "engagement-photo-ideas-outside", "outdoor-engagement-photo-poses"],
    monetization: M_ON,
  },
  "at-home-engagement-photo-ideas": {
    primaryKeyword: "at home engagement photos",
    secondaryKeywords: ["home engagement session", "indoor engagement photos", "cozy couple pictures"],
    lsiKeywords: ["window light", "kitchen", "porch", "documentary", "routines"],
    internalLinks: [
      { url: "/engagement-photo-ideas/casual-engagement-photo-ideas", anchor: "casual engagement photos" },
      { url: "/engagement-photo-ideas/candid-engagement-photo-ideas", anchor: "candid engagement photo ideas" },
      { url: "/engagement-photo-locations/coffee-shop-engagement-photo-ideas", anchor: "coffee shop engagement photo ideas" },
    ],
    relatedPosts: ["casual-engagement-photo-ideas", "candid-engagement-photo-ideas", "coffee-shop-engagement-photo-ideas"],
    monetization: M_ON,
  },
  "urban-engagement-photo-ideas": {
    primaryKeyword: "urban engagement photo ideas",
    secondaryKeywords: ["downtown engagement photos", "city engagement session", "street style engagement pictures"],
    lsiKeywords: ["brick", "murals", "blue hour", "neon", "crosswalk", "street style"],
    internalLinks: [
      { url: "/engagement-photo-ideas/night-engagement-photo-ideas", anchor: "night engagement photos" },
      { url: "/engagement-photo-locations/coffee-shop-engagement-photo-ideas", anchor: "coffee shop engagement photo ideas" },
      { url: "/engagement-photo-outfits/best-outfits-engagement-photos", anchor: "what to wear for engagement photos" },
    ],
    relatedPosts: ["night-engagement-photo-ideas", "coffee-shop-engagement-photo-ideas", "urban-engagement-photo-ideas"],
    monetization: M_ON,
  },
  "park-garden-engagement-photo-ideas": {
    primaryKeyword: "park engagement photo ideas",
    secondaryKeywords: ["garden engagement photos", "botanical garden session", "outdoor couple pictures"],
    lsiKeywords: ["dappled light", "canopy", "trellis", "botanical", "tree-lined path"],
    internalLinks: [
      { url: "/engagement-photo-locations/engagement-photo-ideas-outside", anchor: "outdoor engagement photo ideas" },
      { url: "/engagement-photo-outfits/best-outfits-engagement-photos", anchor: "what to wear for engagement photos" },
      { url: "/engagement-photo-locations/outdoor-engagement-photo-locations", anchor: "outdoor engagement photo locations" },
    ],
    relatedPosts: ["engagement-photo-ideas-outside", "outdoor-engagement-photo-locations", "best-outfits-engagement-photos"],
    monetization: M_ON,
  },
  "beach-engagement-photo-ideas": {
    primaryKeyword: "beach engagement photo ideas",
    secondaryKeywords: ["seaside engagement photos", "sunset beach couple pictures", "coastal engagement session"],
    lsiKeywords: ["tide", "sunset", "wet sand", "dunes", "pier", "silhouette"],
    internalLinks: [
      { url: "/engagement-photo-ideas/golden-hour-photography-tips-couples", anchor: "golden hour photography tips" },
      { url: "/engagement-photo-poses/outdoor-engagement-photo-poses", anchor: "outdoor engagement photo poses" },
      { url: "/engagement-photo-locations/outdoor-engagement-photo-locations", anchor: "outdoor engagement photo locations" },
    ],
    relatedPosts: ["golden-hour-photography-tips-couples", "outdoor-engagement-photo-poses", "engagement-photo-ideas-outside"],
    monetization: M_ON,
  },
  "coffee-shop-engagement-photo-ideas": {
    primaryKeyword: "coffee shop engagement photo ideas",
    secondaryKeywords: ["cafe engagement session", "cozy date photos", "casual public location shoot"],
    lsiKeywords: ["window light", "latte art", "candid", "counter", "to-go cups"],
    internalLinks: [
      { url: "/engagement-photo-ideas/casual-engagement-photo-ideas", anchor: "casual engagement photos" },
      { url: "/engagement-photo-locations/urban-engagement-photo-ideas", anchor: "urban engagement photo ideas" },
      { url: "/engagement-photo-locations/at-home-engagement-photo-ideas", anchor: "at home engagement photos" },
    ],
    relatedPosts: ["casual-engagement-photo-ideas", "urban-engagement-photo-ideas", "at-home-engagement-photo-ideas"],
    monetization: M_ON,
  },
  "casual-engagement-photo-outfits": {
    primaryKeyword: "casual engagement photo outfits",
    secondaryKeywords: ["casual engagement session outfits", "relaxed couple outfits", "jeans engagement photos"],
    lsiKeywords: ["denim", "knits", "sneakers", "layers", "70/20/10 rule"],
    internalLinks: [
      { url: "/engagement-photo-ideas/casual-engagement-photo-ideas", anchor: "casual engagement photos" },
      { url: "/engagement-photo-outfits/best-outfits-engagement-photos", anchor: "what to wear for engagement photos" },
      { url: "/engagement-photo-outfits/engagement-photo-color-palette", anchor: "best colors for engagement photos" },
    ],
    relatedPosts: ["casual-engagement-photo-ideas", "best-outfits-engagement-photos", "engagement-photo-color-palette"],
    monetization: M_ON,
  },
  "fall-engagement-photo-outfits": {
    primaryKeyword: "what to wear for fall pictures",
    secondaryKeywords: ["fall engagement photo outfits", "autumn photoshoot clothes", "cozy couple outfits"],
    lsiKeywords: ["camel coats", "chunky knits", "rust", "olive", "texture"],
    internalLinks: [
      { url: "/engagement-photo-outfits/best-outfits-engagement-photos", anchor: "what to wear for engagement photos" },
      { url: "/engagement-photo-outfits/engagement-photo-color-palette", anchor: "engagement photo color palette" },
      { url: "/engagement-photo-locations/engagement-photo-ideas-outside", anchor: "outdoor engagement photo ideas" },
    ],
    relatedPosts: ["best-outfits-engagement-photos", "engagement-photo-color-palette", "engagement-photo-ideas-outside"],
    monetization: M_ON,
  },
  "summer-engagement-photo-outfits": {
    primaryKeyword: "summer engagement photo outfits",
    secondaryKeywords: ["summer photoshoot outfit ideas", "warm weather engagement clothes", "light dresses"],
    lsiKeywords: ["linen", "breathable", "slip dresses", "after-6pm", "sweat-proof"],
    internalLinks: [
      { url: "/engagement-photo-outfits/best-outfits-engagement-photos", anchor: "what to wear for engagement photos" },
      { url: "/engagement-photo-ideas/golden-hour-photography-tips-couples", anchor: "golden hour photography tips" },
      { url: "/engagement-photo-locations/beach-engagement-photo-ideas", anchor: "beach engagement photo ideas" },
    ],
    relatedPosts: ["best-outfits-engagement-photos", "golden-hour-photography-tips-couples", "beach-engagement-photo-ideas"],
    monetization: M_ON,
  },
  "spring-engagement-photo-outfits": {
    primaryKeyword: "spring engagement photo outfits",
    secondaryKeywords: ["spring photoshoot clothes", "pastel engagement outfits", "garden session outfits"],
    lsiKeywords: ["pastels", "florals", "layers", "garden", "rain plan"],
    internalLinks: [
      { url: "/engagement-photo-locations/park-garden-engagement-photo-ideas", anchor: "park engagement photo ideas" },
      { url: "/engagement-photo-outfits/engagement-photo-color-palette", anchor: "engagement photo color palette" },
      { url: "/engagement-photo-outfits/best-outfits-engagement-photos", anchor: "what to wear for engagement photos" },
    ],
    relatedPosts: ["park-garden-engagement-photo-ideas", "engagement-photo-color-palette", "best-outfits-engagement-photos"],
    monetization: M_ON,
  },
  "engagement-photo-color-palette": {
    primaryKeyword: "best colors for engagement photos",
    secondaryKeywords: ["engagement photo color palette", "neutral couple outfits", "earth tone photoshoot clothes"],
    lsiKeywords: ["cream", "terracotta", "sage", "dusty blue", "neutrals", "70/20/10 rule"],
    internalLinks: [
      { url: "/engagement-photo-outfits/best-outfits-engagement-photos", anchor: "what to wear for engagement photos" },
      { url: "/engagement-photo-outfits/casual-engagement-photo-outfits", anchor: "casual engagement photo outfits" },
      { url: "/engagement-photo-outfits/fall-engagement-photo-outfits", anchor: "what to wear for fall pictures" },
    ],
    relatedPosts: ["best-outfits-engagement-photos", "casual-engagement-photo-outfits", "fall-engagement-photo-outfits"],
    monetization: M_ON,
  },
  "what-to-wear-for-outdoor-engagement-photos": {
    primaryKeyword: "what to wear for outdoor engagement photos",
    secondaryKeywords: ["outdoor session outfits", "park engagement outfit ideas", "location-based clothing guide"],
    lsiKeywords: ["terrain", "walking shoes", "wind", "layers", "location-first styling"],
    internalLinks: [
      { url: "/engagement-photo-locations/outdoor-engagement-photo-locations", anchor: "outdoor engagement photo locations" },
      { url: "/engagement-photo-outfits/best-outfits-engagement-photos", anchor: "what to wear for engagement photos" },
      { url: "/engagement-photo-ideas/engagement-photo-checklist", anchor: "engagement photo checklist" },
    ],
    relatedPosts: ["outdoor-engagement-photo-locations", "best-outfits-engagement-photos", "engagement-photo-checklist"],
    monetization: M_ON,
  },
  "save-the-date-photo-ideas": {
    primaryKeyword: "save the date photo ideas",
    secondaryKeywords: ["save the date photoshoot ideas", "save the date engagement photos", "announcement shoot"],
    lsiKeywords: ["negative space", "horizontal crop", "card layout", "typography", "5x7"],
    internalLinks: [
      { url: "/save-the-date-photos/save-the-date-poses", anchor: "save the date poses" },
      { url: "/engagement-photo-prints", anchor: "engagement photo print ideas" },
      { url: "/engagement-photo-ideas/casual-engagement-photo-ideas", anchor: "casual engagement photos" },
    ],
    relatedPosts: ["save-the-date-poses", "engagement-announcement-photo-ideas", "casual-engagement-photo-ideas"],
    monetization: M_ON,
  },
  "save-the-date-poses": {
    primaryKeyword: "save the date poses",
    secondaryKeywords: ["save the date picture poses", "announcement poses", "engagement announcement photos"],
    lsiKeywords: ["negative space", "walking away", "wide frames", "off-center", "card crop"],
    internalLinks: [
      { url: "/save-the-date-photos/save-the-date-photo-ideas", anchor: "save the date photo ideas" },
      { url: "/engagement-photo-poses/ring-engagement-photo-poses", anchor: "ring engagement photo poses" },
      { url: "/engagement-photo-poses/30-engagement-photo-poses-couples", anchor: "engagement photo poses" },
    ],
    relatedPosts: ["save-the-date-photo-ideas", "ring-engagement-photo-poses", "classic-engagement-photos"],
    monetization: M_ON,
  },
  "engagement-announcement-photo-ideas": {
    primaryKeyword: "engagement announcement photo ideas",
    secondaryKeywords: ["engaged pictures", "engagement reveal photos", "newly engaged photos"],
    lsiKeywords: ["ring reveal", "social crop", "family frames", "thumbnail", "first hug"],
    internalLinks: [
      { url: "/save-the-date-photos/surprise-proposal-ideas", anchor: "surprise proposal ideas" },
      { url: "/save-the-date-photos/save-the-date-photo-ideas", anchor: "save the date photo ideas" },
      { url: "/engagement-photo-poses/ring-engagement-photo-poses", anchor: "ring engagement photo poses" },
    ],
    relatedPosts: ["surprise-proposal-ideas", "save-the-date-photo-ideas", "ring-engagement-photo-poses"],
    monetization: M_ON,
  },
  "surprise-proposal-ideas": {
    primaryKeyword: "surprise proposal ideas",
    secondaryKeywords: ["surprise marriage proposal ideas", "unique proposals", "romantic proposal setups"],
    lsiKeywords: ["hidden photographer", "the kneel", "scouting", "long lens", "golden hour"],
    internalLinks: [
      { url: "/engagement-photo-poses/proposal-poses", anchor: "proposal poses" },
      { url: "/save-the-date-photos/engagement-announcement-photo-ideas", anchor: "engagement announcement photo ideas" },
      { url: "/engagement-photo-ideas/golden-hour-photography-tips-couples", anchor: "golden hour photography tips" },
    ],
    relatedPosts: ["proposal-poses", "engagement-announcement-photo-ideas", "romantic-engagement-photo-ideas"],
    monetization: M_ON,
  },
};

const DEFAULT_META: PostMeta = {
  primaryKeyword: "engagement photos",
  secondaryKeywords: [],
  lsiKeywords: [],
  searchIntent: "informational",
  pinImages: [],
  citations: [],
  internalLinks: [],
  monetization: M_ON,
};

/** Merge §3 frontmatter into a post object (cluster is derived via POST_HUB). */
export const withMeta = (p: Post): Post => ({
  ...p,
  ...(POST_META[p.slug] ?? DEFAULT_META),
  cluster: hubFor(p.slug),
} as Post & { cluster: string });

/** Canonical silo path for an article: `/{hub}/{slug}` (no trailing slash). */
export const postPath = (slug: string) => `/${hubFor(slug)}/${slug}`;

/** Canonical top-level path for a hub: `/{hubSlug}`. */
export const hubPath = (hubSlug: string) => `/${hubSlug}`;

export const getPostsByHub = (hubSlug: string) =>
  POSTS.filter((p) => hubFor(p.slug) === hubSlug).map(withMeta);

export const getPostsByCategory = (category: string) =>
  POSTS.filter((p) => p.category === category).map(withMeta);

/** Related posts — honors an explicit frontmatter override, else same-category first. */
export const getRelatedPosts = (post: Post, count = 3): Post[] => {
  if (post.relatedPosts?.length) {
    const picked = post.relatedPosts
      .map((slug) => getPost(slug))
      .filter((p): p is Post => Boolean(p));
    if (picked.length >= count) return picked.slice(0, count);
  }
  const same = POSTS.filter((p) => p.slug !== post.slug && p.category === post.category);
  const others = POSTS.filter((p) => p.slug !== post.slug && p.category !== post.category);
  return [...same, ...others].slice(0, count).map(withMeta);
};

export const sortedPosts = () =>
  [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1)).map(withMeta);

/** Reading time from word count (~200 wpm). */
export const readingTime = (post: Post) => {
  const blockText = (b: Post["blocks"][number]): string => {
    switch (b.type) {
      case "p":
      case "callout":
      case "quote":
        return b.text;
      case "list":
        return b.items.join(" ");
      case "faq":
        return b.items.map((i) => i.q + i.a).join(" ");
      case "h2":
      case "h3":
        return b.text;
      case "gallery":
        return "";
      default:
        return "";
    }
  };
  const words = post.blocks.map(blockText).join(" ").split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
};

/** Table of contents extracted from H2/H3 blocks (SSG-style static extraction). */
export const extractToc = (post: Post) =>
  post.blocks
    .filter((b): b is Extract<typeof b, { type: "h2" | "h3" }> => b.type === "h2" || b.type === "h3")
    .map((b) => ({
      id: b.id,
      text: b.text,
      depth: b.type === "h2" ? (2 as const) : (3 as const),
    }));

export const formatDate = (iso: string) =>
  new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
