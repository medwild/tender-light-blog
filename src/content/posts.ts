import { IMAGES } from "../lib/constants";
import type { Category, Post } from "./types";

/* ————————————————————— Categories ————————————————————— */

export const CATEGORIES: Category[] = [
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
  name: "Harper Ellis",
  role: "Founder & Engagement Photo Editor",
  bio: "Harper spent 8 years behind the lens shooting 400+ engagement sessions across the US before trading her camera for a keyboard. Based in Austin and married to her high school sweetheart, she writes the warm, practical guides she wishes every couple had before their shoot.",
  avatar: IMAGES.about,
  instagram: "@tenderlight.journal",
};
/** Alias kept so existing post references read naturally. */
const clara = harper;

const mia = {
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
        text: "Because everyday engagement photos do more jobs than formal ones. They're the images your save-the-date cards actually want — warm, un stiff, instantly recognizable as you. They slot perfectly into minimalist wedding websites, guest-book prints and the “how we got engaged” slideshow. And they're simply easier to make: less styling stress, shorter sessions, locations five minutes from home. If your wedding day will be the one formal chapter of this season, let your engagement photos be the exhale before it.",
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
        text: "Casual engagement photo outfits live or die on one word: *intentional*. The goal is clothes you could wear on a good Saturday — but chosen on purpose, in fabrics and tones that love the camera. Here's the split that works for almost every couple we style.",
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
        text: "Low-key locations share one trait: you'd be there anyway. When the setting is already yours, half the “natural” feeling is free — you're not performing in a borrowed place, you're living in your own.",
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
        text: "The trick with relaxed engagement poses is to stop calling them poses. These are action prompts — little jobs for the two of you — and the photographs happen while you're busy doing them. Read them out loud on session; the sillier the delivery, the better the frames.",
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
        text: "That's the whole casual playbook: coordinate — don't match — your outfits, pick places that are already yours, and trade frozen poses for little actions you can actually do. Fifteen ideas is more than enough for one relaxed hour, and the leftovers are your save-the-date shortlist (a full save-the-date photoshoot guide is on the way). Now pin this, pick your three favorites, and go be yourselves on camera.",
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
    slug: "unique-engagement-pics",
    title: "19 Unique Engagement Pics Nobody Else Will Have",
    seoTitle: "19 Unique Engagement Pics Nobody Else Will Have",
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
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);

export const getPostsByCategory = (category: string) =>
  POSTS.filter((p) => p.category === category);

export const getRelatedPosts = (post: Post, count = 3) => {
  const same = POSTS.filter((p) => p.slug !== post.slug && p.category === post.category);
  const others = POSTS.filter((p) => p.slug !== post.slug && p.category !== post.category);
  return [...same, ...others].slice(0, count);
};

export const sortedPosts = () =>
  [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

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
