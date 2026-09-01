import { IMAGES } from "../lib/constants";
import type { Author, Block, CategorySlug, InternalLink, Post } from "./types";

const harper: Author = {
  handle: "harper-ellis",
  name: "Harper Ellis",
  role: "Founder & Engagement Photo Editor",
  bio: "Harper spent 8 years behind the lens shooting 400+ engagement sessions across the US before trading her camera for a keyboard. Based in Austin and married to her high school sweetheart, she writes the warm, practical guides every couple deserves.",
  avatar: IMAGES.about,
  instagram: "@tenderlight.journal",
};

const M = { adsense: true, affiliate: true, leadMagnet: true };

interface ArtSpec {
  slug: string; title: string; seoTitle?: string; seoDescription?: string; excerpt: string;
  category: CategorySlug; date: string; hub: string; primaryKeyword: string;
  featuredImage: string; featuredAlt: string; tags: string[];
  intro: string; takeaways?: string[];
  sections: { id: string; text: string; body: string; list?: string[] }[];
  faq: [string, string][];
  related?: string[]; links?: InternalLink[];
}

const art = (s: ArtSpec): Post => {
  const blocks: Block[] = [
    { type: "p", text: s.intro },
    ...(s.takeaways ? [{ type: "keyTakeaways", items: s.takeaways } as Block] : []),
  ];
  s.sections.forEach((sec, i) => {
    blocks.push({ type: "h2", id: sec.id, text: sec.text });
    blocks.push({ type: "p", text: sec.body });
    if (sec.list) blocks.push({ type: "list", items: sec.list });
    if (i === 0) blocks.push({ type: "ad", slot: "after-first-h2" });
  });
  blocks.push({ type: "faq", items: s.faq.map(([q, a]) => ({ q, a })) });
  return {
    slug: s.slug, title: s.title,
    seoTitle: s.seoTitle ?? s.title,
    seoDescription: s.seoDescription ?? s.excerpt,
    excerpt: s.excerpt, category: s.category, date: s.date,
    featuredImage: s.featuredImage, featuredAlt: s.featuredAlt, tags: s.tags,
    author: harper, primaryKeyword: s.primaryKeyword, cluster: s.hub,
    relatedPosts: s.related, internalLinks: s.links, monetization: M,
    blocks,
  };
};

/* ————— The three requested articles (full, 15 H3 each) ————— */
import { INDOOR_POSTS } from "./indoorArticle";
import { HOLIDAY_POSTS } from "./holidayArticle";
import { ALBUMS_POSTS } from "./albumsArticle";

/* ————— Restored drafts wired into the catalog (handoff §4 "restauré") ————— */
import { WINTER_POSTS } from "./winterArticle";
import { PET_POSTS } from "./petArticle";
import { POLAROID_POSTS } from "./polaroidArticle";
import { FLIP_BOOK_POSTS } from "./flipBookArticle";
import { BORDER_POSTS } from "./borderArticle";
import { TRUE_DIGITAL_POSTS } from "./trueDigitalArticle";
import { WEDDING_CHECKLIST_POSTS } from "./weddingChecklistArticle";

/* ————— §4 CREATE backlog ————— */
import { COZY_POSTS } from "./cozyArticle";
import { RUSTIC_POSTS } from "./rusticArticle";
import { MOUNTAIN_POSTS } from "./mountainArticle";
import { EDITING_POSTS } from "./editingArticle";
import { SPRING_SUMMER_POSTS } from "./springSummerArticle";
import { WINTER_OUTFITS_POSTS } from "./winterOutfitsArticle";
import { FIRST_LOOK_POSTS } from "./firstLookArticle";
import { BEACH_POSTS } from "./beachArticle";
import { NATURAL_POSES_POSTS } from "./naturalPosesArticle";

/* ————— Representative spokes for the remaining hubs ————— */
const SPOKES: Post[] = [
  art({
    slug: "casual-engagement-photo-ideas", title: "15 Casual Engagement Photo Ideas That Feel Like You",
    excerpt: "Jeans, coffee, golden hour — casual engagement photo ideas that feel like your real life, not a catalogue shoot.",
    category: "ideas", date: "2026-02-22", hub: "engagement-photo-ideas", primaryKeyword: "casual engagement photos",
    featuredImage: IMAGES.casualCafe, featuredAlt: "casual engagement photos couple laughing over coffee in jeans",
    tags: ["casual", "candid", "relaxed"],
    intro: "The fastest way to a stiff gallery is to dress up and stand in a field pretending you're not being photographed. Casual engagement photos work because they're built from things you already do — coffee runs, walks, inside jokes — so your faces relax into themselves.",
    takeaways: ["Casual is a decision, not a default — plan the activity, not just the outfit.", "Give your hands a job: a cup, a leash, a jacket.", "Movement beats stillness every time."],
    sections: [
      { id: "casual-why", text: "Why Casual Wins", body: "Casual photos age better because they're honest. The frames you'll love in twenty years are the ones where you forgot the camera, not the ones where you held a pose.", list: ["Do something real: walk the dog, share a pastry, browse the record shop.", "Shoot in your actual clothes, one step nicer than everyday.", "Let the location be a place you already love."] },
      { id: "casual-prompts", text: "Prompts That Feel Like Play", body: "A prompt is a tiny task that pulls your attention off the lens and onto each other. The laugh that follows is the photo.", list: ["Whisper the worst joke you know, deadpan.", "Race to the bench — loser buys coffee.", "Recreate your first-date walk, same route."] },
    ],
    faq: [["Are jeans okay for engagement photos?", "Yes — dark or mid wash, straight leg, no loud distressing. Pair with a knit or a blazer and clean shoes and jeans read effortless, not lazy."],
      ["How do we keep casual photos from looking sloppy?", "Intentional details: one elevated piece each, a coordinated palette, and a location with good light. Casual means relaxed, not unplanned."]],
    related: ["classic-engagement-photos", "unique-engagement-photo-ideas"],
  }),

  art({
    slug: "classic-engagement-photos", title: "Classic Engagement Photos: 15 Timeless Ideas That Never Date",
    excerpt: "Classic engagement photos that never date: timeless ideas using soft light, balanced composition, and authentic emotion. Elegant without being stiff.",
    category: "ideas", date: "2026-09-08", hub: "engagement-photo-ideas", primaryKeyword: "classic engagement photos",
    featuredImage: IMAGES.classicDip, featuredAlt: "classic black and white engagement portrait on courthouse steps",
    tags: ["classic", "timeless", "elegant"],
    intro: "The test of a classic photo is simple: will it look dated in thirty years? Classic engagement photos pass because they lean on the three things that don't age — soft light, balanced composition, and a real moment. Not a stiff pose. Never a stiff pose.",
    takeaways: ["Classic is timeless, not stiff.", "Soft light does half the work — golden hour, overcast, or window.", "Symmetry and the rule of thirds keep a frame balanced for decades."],
    sections: [
      { id: "classic-pillars", text: "The Three Pillars of Timeless", body: "Every classic photo leans on soft light, a balanced composition, and an authentic emotion. Miss one and the photo tips toward stiff; land all three and it holds up for thirty years.", list: ["Soft light: golden hour, overcast sky, or window light.", "Balanced composition: symmetry or rule of thirds.", "Authentic emotion: a real moment, not a held smile."] },
      { id: "classic-poses", text: "Poses That Hold Up", body: "The classic poses are the simple ones, done with intention. Forehead touches, walking hand in hand, sitting on a bench — timeless because they're honest.", list: ["Forehead touch, eyes closed.", "Walking away, hand in hand.", "Sitting on a bench, shoulder to shoulder."] },
    ],
    faq: [["What makes an engagement photo timeless?", "Soft light, balanced composition, and authentic emotion. Trends date; those three things don't. A photo built on them holds up for thirty years."],
      ["Are classic photos the same as formal?", "No. Formal can be stiff; classic is elegant but natural. Classic is about the light and the moment, not about holding a rigid pose."]],
    related: ["black-and-white-engagement-photos", "casual-engagement-photo-ideas"],
  }),

  art({
    slug: "black-and-white-engagement-photos", title: "15 Black and White Engagement Photo Ideas With Real Contrast",
    excerpt: "Black and white engagement photos with real contrast, not a filter — silhouettes, shadow play and the light that makes monochrome sing.",
    category: "ideas", date: "2026-08-30", hub: "engagement-photo-ideas", primaryKeyword: "black and white engagement photos",
    featuredImage: IMAGES.gallerySilhouette, featuredAlt: "black and white engagement photo silhouette at sunset",
    tags: ["black and white", "monochrome", "contrast"],
    intro: "Most black and white engagement photos are color photos with the color turned off. Real monochrome is built in camera: hard light, deep shadow, and compositions that read in line and tone alone.",
    takeaways: ["Black and white needs contrast in the light, not the edit.", "Shoot into hard side-light and let the shadows go dark.", "Silhouettes against an open sky are the most timeless frame."],
    sections: [
      { id: "bw-contrast", text: "Contrast Is a Lighting Decision", body: "Black and white needs contrast in the light, not the edit. Shoot into hard side-light or back-light and let the shadows go genuinely dark.", list: ["Silhouettes against an open sky at sunset.", "Shadow play through blinds or a staircase rail.", "A single window in an otherwise dark room."] },
    ],
    faq: [["Why do my black and white photos look flat?", "Because the light was flat. Monochrome needs strong directional light and real shadows. Shoot into hard side-light and expose for the highlights."]],
    related: ["classic-engagement-photos"],
  }),

  art({
    slug: "unique-engagement-photo-ideas", title: "19 Unique Engagement Photo Ideas That Are Actually Yours",
    excerpt: "Unique engagement photo ideas that are actually yours — the props, places and moments that make a gallery nobody else could have.",
    category: "ideas", date: "2026-02-10", hub: "engagement-photo-ideas", primaryKeyword: "unique engagement photo ideas",
    featuredImage: IMAGES.galleryTwirl, featuredAlt: "unique engagement photo ideas couple silhouetted at dusk",
    tags: ["unique", "creative", "props"],
    intro: "Unique doesn't mean strange — it means true. The engagement photos nobody else has are the ones built from the two of you: your song, your spot, your terrible inside jokes. Bring meaning, not clutter.",
    takeaways: ["A prop should start a moment, not decorate one.", "Recreate your first date, same route, same jokes.", "Your actual life is more interesting than any Pinterest board."],
    sections: [
      { id: "unique-props", text: "Props That Earn Their Place", body: "A prop should start a moment, not decorate one. If it doesn't give your hands a job, leave it in the car.", list: ["The vinyl of your song, held sleeve-out.", "Your dog, on a six-foot lead.", "A handwritten letter, read aloud on camera."] },
      { id: "unique-replay", text: "Replay the First Date", body: "Go back to where it started and do it again — same order, same booth, same terrible opening line. The familiarity is what makes the frame yours.", list: ["Same location, same order, same jokes.", "Bring the real artifacts: tickets, candy, the playlist."] },
    ],
    faq: [["Do unique engagement photos look cheesy?", "Only when the prop is decor instead of action. A thermos, a letter or a dog never reads cheesy because you interact with it — the frame is a moment, not a prop shot."]],
    related: ["casual-engagement-photo-ideas"],
  }),

  art({
    slug: "how-to-smile-naturally-in-photos", title: "How to Smile Naturally in Photos: 15 Prompts That Work",
    excerpt: "A real smile is a whole-body by-product — built before the shoot and triggered by prompts, never commanded. Here's the method.",
    category: "poses", date: "2026-08-26", hub: "engagement-photo-poses", primaryKeyword: "how to smile naturally in photos",
    featuredImage: IMAGES.galleryLaugh, featuredAlt: "engaged couple laughing genuinely during golden hour",
    tags: ["smile", "real smile", "candid laugh"],
    intro: "\"Think of something funny\" never works — the smile that comes out is a mouth-shape, not a feeling. A real smile is a by-product: built in the minutes before and triggered by prompts, never commanded.",
    takeaways: ["A real smile is a by-product, not a command.", "Warm up the jaw and shoulders before the first frame.", "Trigger it with prompts — a bad joke, a ridiculous nickname."],
    sections: [
      { id: "smile-warmup", text: "The 10-Minute Warm-Up", body: "A tight jaw and raised shoulders strangle a smile before it starts. Reset the body first and the face follows.", list: ["Four slow breaths; let the jaw hang loose.", "Roll shoulders back and down.", "Make a few silly faces to shake out the tension."] },
      { id: "smile-prompts", text: "Prompts That Produce a Real Smile", body: "These triggers work because they pull your attention off the camera and onto something genuinely funny.", list: ["Whisper the worst joke you know into their ear.", "Say their most ridiculous nickname, deadpan.", "Forehead touch, then look up at each other."] },
    ],
    faq: [["Why do my photos look forced when I smile?", "A commanded smile tightens the jaw and doesn't reach the eyes. Trigger a real one with a prompt — a bad joke or a ridiculous nickname — and shoot the reaction, not the pose."]],
    related: ["camera-shy-engagement-poses", "scenario-based-engagement-poses"],
  }),

  art({
    slug: "camera-shy-engagement-poses", title: "Camera-Shy Engagement Poses for Couples Who Hate Posing",
    excerpt: "Engagement poses for camera-shy couples — no eye contact with the lens, movement over stillness, and the prompts that make you forget it's there.",
    category: "poses", date: "2026-03-26", hub: "engagement-photo-poses", primaryKeyword: "camera shy engagement poses",
    featuredImage: IMAGES.posesCover, featuredAlt: "camera shy couple in a forehead touch engagement pose",
    tags: ["camera shy", "natural", "comfort"],
    intro: "If you hate having your photo taken, you don't need to learn to pose — you need poses that don't ask you to perform. The best camera-shy poses point your attention anywhere but the lens.",
    takeaways: ["Point your attention anywhere but the lens.", "Movement beats stillness for camera-shy couples.", "Closed eyes remove the hardest part of being photographed."],
    sections: [
      { id: "shy-poses", text: "Poses That Forget the Camera", body: "Every pose here gives your eyes somewhere honest to land and your hands something to do, so your face relaxes on its own.", list: ["Forehead touch, eyes closed, three slow breaths.", "Walk away from the camera, hands linked.", "Look at each other and find one true thing to hold onto."] },
    ],
    faq: [["What if I hate my smile?", "You almost certainly don't hate your smile — you hate the posed version. The candid laugh is a different face entirely, and it's the one people love."]],
    related: ["how-to-smile-naturally-in-photos"],
  }),

  art({
    slug: "scenario-based-engagement-poses", title: "Scenario-Based Engagement Poses: Actions That Forget the Camera",
    excerpt: "Scenario-based engagement poses — give the couple a scene to live in, not a shape to hold, and the candid frames take care of themselves.",
    category: "poses", date: "2026-09-02", hub: "engagement-photo-poses", primaryKeyword: "scenario based engagement poses",
    featuredImage: IMAGES.hero, featuredAlt: "couple living a small scenario during engagement photos",
    tags: ["scenario", "candid", "action prompts"],
    intro: "The stiffest photos come from holding a shape and waiting for the click. The most alive ones come from giving a couple a tiny scene — a task, a destination, a secret — and photographing them inside it.",
    takeaways: ["Give a scene, not a shape.", "Direct the action and shoot the in-between.", "A destination beats a pose every time."],
    sections: [
      { id: "scenario-method", text: "Give a Scene, Not a Shape", body: "A scenario occupies the mind, so the body stops performing. Direct the action and shoot what happens between the instructions.", list: ["\"Walk to that tree arguing about dinner.\"", "\"Fix her collar like you're late for something.\"", "\"Show me the ring like you can't believe it's there.\""] },
    ],
    faq: [["How do scenarios produce better photos than poses?", "A pose asks you to hold still and be photographed, which reads as performance. A scenario gives your mind a job, so the in-between moments — the real ones — happen while you're busy."]],
    related: ["how-to-smile-naturally-in-photos"],
  }),

  art({
    slug: "ring-engagement-photo-poses", title: "Ring Engagement Photo Poses: 15 Ways to Make the Ring the Star",
    excerpt: "Ring engagement photo poses that make the stone sparkle — the light, focus and hand fixes that turn a blurry ring shot into a keeper.",
    category: "poses", date: "2026-09-07", hub: "engagement-photo-poses", primaryKeyword: "ring engagement photo poses",
    featuredImage: IMAGES.galleryRing, featuredAlt: "engagement ring catching a pinpoint light source in a ring pose",
    tags: ["ring", "ring poses", "ring shot"],
    intro: "The ring is the smallest thing in the frame and the hardest to photograph. A blurry ring shot is almost always one of three fixable problems: diffuse light, wrong focus, or tense hands. Fix those three and the stone does the rest.",
    takeaways: ["A ring needs a pinpoint light source to sparkle.", "Focus on the stone, not the finger.", "Relaxed hands read better than a perfect grip."],
    sections: [
      { id: "ring-fixes", text: "The Three Fixes", body: "A blurry ring is almost always one of three things: light too diffuse, focus on the finger instead of the stone, or hands too tense. Fix all three and the stone sparkles on its own.", list: ["Find a pinpoint light source — a window edge, a candle.", "Focus on the stone, not the finger.", "Shake the hands out; tense hands kill the shot."] },
    ],
    faq: [["How do we keep the ring in focus?", "Bring the box to chest height, toward the camera, and focus on the stone, not the finger. Keep the hands relaxed — a tense grip and a raised ring are the two most common reasons the ring comes out soft."]],
    related: ["proposal-poses"],
  }),

  art({
    slug: "best-outfits-engagement-photos", title: "Best Outfits for Engagement Photos: A Stylist's Guide",
    excerpt: "Colors that flatter on camera, the pieces that date a photo, and a season-by-season outfit formula — from a stylist who dresses couples for the lens.",
    category: "outfits", date: "2025-12-28", hub: "engagement-photo-outfits", primaryKeyword: "best outfits for engagement photos",
    featuredImage: IMAGES.outfitsCover, featuredAlt: "best outfits for engagement photos couple coordinated champagne sage",
    tags: ["outfits", "styling", "color palette"],
    intro: "Outfit questions outnumber pose questions in my inbox three to one, and honestly that's smart planning. Your pose can be directed on the day; your outfit is decided before you arrive. The goal isn't to match — it's to belong in the same photograph.",
    takeaways: ["Camera-friendly colors are softened versions of real colors.", "Coordinate, don't match — share a neutral, split one accent.", "Skip logos, neon, and tiny tight patterns."],
    sections: [
      { id: "colors-wear", text: "Colors to Wear", body: "Camera-friendly colors share one trait: they're softened versions of real colors. If a color looks slightly dusty in person, it usually looks rich on camera.", list: ["Cream, oat and warm ivory — the universal base.", "Sage and olive — gorgeous against golden light.", "Champagne and camel — expensive without logos."] },
      { id: "colors-avoid", text: "What to Avoid", body: "A few things reliably date or distort a photo. Skip them and you've solved half the outfit problem.", list: ["Large logos and graphic tees.", "Neon — it color-casts onto skin in open shade.", "Tiny tight patterns — they moiré on digital sensors."] },
    ],
    faq: [["Should we wear the same color?", "Coordinate, don't match. Share a neutral base and one accent color between you, then add texture. Matching reads like a uniform; coordinating reads like a life together."]],
    related: ["casual-engagement-photo-outfits", "engagement-photo-color-palette"],
  }),

  art({
    slug: "fall-engagement-photo-outfits", title: "What to Wear for Fall Pictures: Fall Engagement Photo Outfits",
    excerpt: "Fall engagement photo outfits built on contrast and texture, not color-matching the leaves — deep green, cream, burgundy and denim against gold.",
    category: "outfits", date: "2026-08-24", hub: "engagement-photo-outfits", primaryKeyword: "what to wear for fall pictures",
    featuredImage: IMAGES.outfitsCover, featuredAlt: "fall engagement photo outfits couple in rust and cream knits",
    tags: ["fall", "outfits", "texture"],
    intro: "The fall outfit mistake is dressing to match the leaves — rust on rust on rust, until the couple disappears into the foliage. Fall photos are won on contrast and texture, not color.",
    takeaways: ["Wear contrast to the leaves, not a match.", "Texture catches low October light.", "One burgundy or rust accent, not head-to-toe."],
    sections: [
      { id: "fall-contrast", text: "The No-Orange-on-Orange Rule", body: "The foliage is already orange and gold. Wear what makes you stand out against it, not blend into it.", list: ["Deep green, cream and burgundy against yellow leaves.", "Denim as the neutral anchor.", "One burgundy or rust accent, not head-to-toe."] },
      { id: "fall-texture", text: "Textures That Read in Fall Light", body: "October light is low and raking; flat cotton disappears in it. Texture is what catches that light and gives a photo depth.", list: ["Corduroy, chunky knit, flannel, leather.", "Layers you can remove on camera.", "A blanket as both prop and warmth."] },
    ],
    faq: [["Can we wear flannel?", "Yes — one flannel, worn as a layer, not head-to-toe. Paired with a solid knit and denim it reads autumn without reading costume."]],
    related: ["best-outfits-engagement-photos"],
  }),

  art({
    slug: "casual-engagement-photo-outfits", title: "Casual Engagement Photo Outfits That Still Look Intentional",
    excerpt: "Casual engagement photo outfits that look effortless, not lazy — jeans, knits and clean shoes done on purpose.",
    category: "outfits", date: "2026-04-01", hub: "engagement-photo-outfits", primaryKeyword: "casual engagement photo outfits",
    featuredImage: IMAGES.casualCafe, featuredAlt: "casual engagement photo outfits couple in jeans and knits",
    tags: ["casual", "outfits", "jeans"],
    intro: "Casual doesn't mean whatever you grabbed on the way out the door. It means the version of your everyday clothes you'd wear if you knew a good photographer was coming. The difference is one elevated piece and a coordinated palette.",
    takeaways: ["Casual is your everyday clothes, one step nicer.", "Dark or mid-wash jeans, straight leg.", "One elevated piece each keeps it intentional."],
    sections: [
      { id: "casual-outfits", text: "Casual Done On Purpose", body: "Casual reads effortless when it's deliberate. Dark jeans, a good knit, clean shoes, and one elevated piece each.", list: ["Dark or mid-wash jeans, straight leg.", "A knit or a blazer over a simple tee.", "Clean shoes — scuffed sneakers read sloppy."] },
    ],
    faq: [["Are jeans okay for engagement photos?", "Yes — dark or mid wash, straight leg, no loud distressing. Pair with a knit or a blazer and clean shoes and jeans read effortless, not lazy."]],
    related: ["best-outfits-engagement-photos"],
  }),

  art({
    slug: "engagement-photo-color-palette", title: "The Engagement Photo Color Palette That Flatters Every Couple",
    excerpt: "The engagement photo color palette that flatters every couple — soft neutrals, one accent, and the colors that moiré or date a photo.",
    category: "outfits", date: "2026-04-15", hub: "engagement-photo-outfits", primaryKeyword: "engagement photo color palette",
    featuredImage: IMAGES.galleryTwirl, featuredAlt: "engagement photo color palette soft neutrals and one accent",
    tags: ["color palette", "outfits", "styling"],
    intro: "A color palette is the quietest way to make two people look like they belong in the same photograph. You don't match; you share a family of color. One neutral base, one accent between you, and the camera does the rest.",
    takeaways: ["Share a neutral base, split one accent.", "Soft, dusty colors flatter every skin tone.", "Skip neon, logos and tiny tight patterns."],
    sections: [
      { id: "palette-rule", text: "One Family of Color", body: "A palette is a family of color, not a uniform. Share a neutral base, split one accent between you, and let texture do the rest.", list: ["Neutral base: cream, oat, camel, soft grey.", "One accent split between you: sage, dusty blue, terracotta.", "Texture instead of pattern."] },
    ],
    faq: [["What colors should we wear for engagement photos?", "Soft, muted tones flatter every skin tone and photograph warmly: cream, oat, camel, sage, dusty blue, terracotta. Avoid neon, big logos and tiny tight patterns, which moiré on digital sensors."]],
    related: ["best-outfits-engagement-photos"],
  }),

  art({
    slug: "outdoor-engagement-photo-locations", title: "17 Outdoor Engagement Photo Locations That Do Half the Work",
    excerpt: "Outdoor engagement photo locations chosen by light, not scenery — fields, tree lines, brick and sky, with the timing that makes each one work.",
    category: "locations", date: "2026-04-02", hub: "engagement-photo-locations", primaryKeyword: "outdoor engagement photo locations",
    featuredImage: IMAGES.locationsCover, featuredAlt: "outdoor engagement photo locations couple in golden field",
    tags: ["outdoor", "locations", "golden hour"],
    intro: "A location does half the posing work when it gives you space to move, a clean background and a light source you can stand in. Choose by the light at your hour, not the scenery on the drive over.",
    takeaways: ["Scout by light, not scenery.", "Fields want movement, water wants reflection, brick wants lean-and-laugh.", "Walk the spot the day before, at your shooting hour."],
    sections: [
      { id: "loc-light", text: "Scout by Light, Not Scenery", body: "The same field at noon and at golden hour is two different locations. Walk your spot the day before, at the hour you'll shoot, and check three things.", list: ["Where does the light come from at your hour?", "What's the cleanest background behind you?", "Where will you park, and how far is the walk?"] },
    ],
    faq: [["What's the best outdoor location for engagement photos?", "The one with good light at your hour. A field at golden hour beats a pretty garden at noon. Scout by the direction and quality of the light, then fit the scenery around it."]],
    related: ["indoor-engagement-photos"],
  }),

  art({
    slug: "urban-engagement-photo-ideas", title: "Urban Engagement Photo Ideas: Brick, Neon & City Light",
    excerpt: "Urban engagement photo ideas — brick walls, neon signs and city light, with the timing that makes a street feel like a set.",
    category: "locations", date: "2026-04-20", hub: "engagement-photo-locations", primaryKeyword: "urban engagement photo ideas",
    featuredImage: IMAGES.locationsCover, featuredAlt: "urban engagement photo ideas couple on a brick street at dusk",
    tags: ["urban", "city", "locations"],
    intro: "A city gives you texture you can't fake — brick that bounces warm light, neon that glows after dark, stairwells that frame a couple like a stage. Urban engagement photos work when you treat the street like a set and the light like a collaborator.",
    takeaways: ["Brick bounces warm light in the last hour.", "Neon glows after dark — shoot at dusk.", "Stairwells frame a couple like a stage."],
    sections: [
      { id: "urban-light", text: "The City as a Set", body: "A city is a set that's already lit. Brick bounces warm light in the last hour; neon glows after dark. Shoot at dusk and let the city do the styling.", list: ["Brick walls at golden hour.", "Neon signs just after dark.", "Stairwells and alleyways for framing."] },
    ],
    faq: [["Do we need a permit for urban engagement photos?", "For a couple and a handheld camera on public sidewalks, usually no. Tripods and commercial styling can trigger permits in some districts — check the specific block."]],
    related: ["indoor-engagement-photos"],
  }),

  art({
    slug: "at-home-engagement-photo-ideas", title: "13 At-Home Engagement Photo Ideas in Your Own Light",
    excerpt: "At-home engagement photo ideas — your routine, your rooms, your light, photographed before the day gets away from you.",
    category: "locations", date: "2026-05-01", hub: "engagement-photo-locations", primaryKeyword: "at home engagement photos",
    featuredImage: IMAGES.indoor, featuredAlt: "at home engagement photo ideas couple in window light at home",
    tags: ["at home", "indoor", "cozy"],
    intro: "Your home is the most honest location you'll ever shoot. The coffee you actually drink, the couch you actually sit on, the light that comes through your actual window. At-home engagement photos work when you stop trying to make your home look like someone else's and just photograph the life in it.",
    takeaways: ["Photograph your routine, not a staged version of it.", "Window light does the heavy lifting.", "The lived-in look is the whole point."],
    sections: [
      { id: "home-routine", text: "Your Routine, Photographed", body: "The most honest frames come from your actual routine — the coffee, the couch, the record player. Photograph the life, not a staged version of it.", list: ["Morning coffee by the window.", "Cooking together in your kitchen.", "Reading on the couch, shoulder to shoulder."] },
    ],
    faq: [["Is our home too small for engagement photos?", "No. Small spaces force tight, intimate crops, which read as honest. Window light and a few honest props do more than square footage ever will."]],
    related: ["indoor-engagement-photos"],
  }),

  art({
    slug: "save-the-date-photo-ideas", title: "Save the Date Photo Ideas With Room for Your Name",
    excerpt: "Save the date photo ideas built on negative space — frames with room for your names, your date and your venue, not crowded crop jobs.",
    category: "ideas", date: "2026-04-04", hub: "save-the-date-photos", primaryKeyword: "save the date photo ideas",
    featuredImage: IMAGES.galleryTwirl, featuredAlt: "save the date photo idea couple with open sky negative space",
    tags: ["save the date", "negative space", "announcement"],
    intro: "A save the date is a photograph with a job: it has to carry your names, your date and your venue without feeling crowded. So the best ones are shot with the empty space already in mind.",
    takeaways: ["Shoot for the empty third — that's where the type lives.", "Wide shots with open sky or wall anchor the text.", "Leave breathing room on the side the text will sit."],
    sections: [
      { id: "std-space", text: "Shoot for the Empty Third", body: "Ask for frames with a clean third of sky, wall or field. That's where the typography lives, and a photo shot with room for it never needs a desperate crop later.", list: ["Wide shots with open sky above or beside you.", "A clean wall or horizon line to anchor the type.", "Leave breathing room on the side the text will sit."] },
    ],
    faq: [["When should we shoot save the date photos?", "As soon as you're engaged and have a date and venue — the cards mail six to eight months out, and you want the photo session done at least two months before that."]],
    related: ["proposal-poses"],
  }),

  art({
    slug: "proposal-poses", title: "Proposal Poses: 15 Ways to Capture the Moment",
    excerpt: "Proposal poses across three archetypes — the authentic surprise, the orchestrated reveal, and the re-enactment — with the camera plan for each.",
    category: "poses", date: "2026-09-07", hub: "save-the-date-photos", primaryKeyword: "proposal poses",
    featuredImage: IMAGES.classicDip, featuredAlt: "proposal poses a man on one knee at golden hour from a distance",
    tags: ["proposal", "proposal poses", "surprise"],
    intro: "The proposal is ten seconds you can never restage — and it's the one moment most couples never get a clean frame of. There are really three kinds of proposal, each with its own camera plan: the authentic surprise, the orchestrated reveal with a hidden shooter, and the re-enactment ten minutes after.",
    takeaways: ["Decide who captures it before you pick the spot.", "A hidden photographer keeps the surprise and gives clean frames.", "Re-enact once, ten minutes after — never ten times."],
    sections: [
      { id: "proposal-types", text: "The Three Archetypes", body: "There are three kinds of proposal, each with its own camera plan. Choose one first — it decides which poses will work.", list: ["The authentic surprise — pure candid, zero control.", "The orchestrated reveal — a hidden shooter, long lens.", "The re-enactment — once, ten minutes after."] },
    ],
    faq: [["Can we capture a proposal without a photographer?", "Yes — a hidden tripod with a ten-second timer and a remote, or a propped phone recording video with the best frame pulled after, both work well. Set everything before the moment, then just have it."]],
    related: ["ring-engagement-photo-poses", "save-the-date-photo-ideas"],
  }),

  art({
    slug: "surprise-proposal-ideas", title: "Surprise Proposal Ideas That Keep the Secret (and Get the Shot)",
    excerpt: "Surprise proposal ideas that keep the secret and still get the shot — hidden shooters, long lenses and the setup that stays invisible.",
    category: "ideas", date: "2026-09-08", hub: "save-the-date-photos", primaryKeyword: "surprise proposal ideas",
    featuredImage: IMAGES.gallerySilhouette, featuredAlt: "surprise proposal ideas hidden photographer at golden hour",
    tags: ["surprise proposal", "proposal", "candid"],
    intro: "A surprise proposal has one constraint an engagement session never has: the subject can't know the camera is there. Which means the whole plan is about staying invisible — a long lens, a hidden shooter, a setup that happens before the moment, not during it.",
    takeaways: ["The whole plan is about staying invisible.", "A long lens from fifty meters keeps the candid real.", "Set everything before the moment, not during it."],
    sections: [
      { id: "surprise-setup", text: "The Invisible Setup", body: "A surprise proposal is won or lost before it happens. The shooter, the lens, the spot — all decided and in place before the moment, so nothing breaks the surprise.", list: ["A long lens from fifty meters, shooter hidden.", "The spot scouted the day before.", "Everything set before the moment, not during."] },
    ],
    faq: [["How far away should a hidden photographer stand?", "Fifty meters or more with a long lens is the sweet spot: close enough for a clean frame, far enough to stay invisible. The couple never performs because they never know they're seen."]],
    related: ["proposal-poses"],
  }),

  art({
    slug: "glossy-or-matte-prints", title: "Glossy or Matte Prints: Which Finish Fits Your Light",
    excerpt: "Glossy or matte engagement prints — decided by the light where they'll live, not by preference — plus when lustre is the quiet third answer.",
    category: "tips", date: "2026-08-23", hub: "engagement-photo-prints", primaryKeyword: "glossy or matte prints",
    featuredImage: IMAGES.classicDip, featuredAlt: "glossy or matte prints side by side in soft light",
    tags: ["print finish", "matte", "glossy"],
    intro: "The glossy-or-matte question gets answered by preference when it should be answered by light. The finish is a decision about where the print will live — a bright hallway or a dim shelf — not about which you like in the lab's lighting.",
    takeaways: ["Bright walls and daylight: matte, to kill glare.", "Dim shelves and lamp light: glossy, for depth.", "Black and white: matte or lustre, almost always."],
    sections: [
      { id: "finish-light", text: "Let the Room Decide", body: "Glossy deepens color but throws glare in bright rooms; matte absorbs light and reads softer. Match the finish to the brightest light the print will face.", list: ["Bright walls and daylight: matte, to kill glare.", "Dim shelves and lamp light: glossy, for depth.", "Black and white: matte or lustre, almost always."] },
    ],
    faq: [["Do matte photos fade faster than glossy?", "Not inherently — fading is about archival ink and paper, not the sheen. Matte papers are just more forgiving of micro-scratches and dust, so they look fresh longer in busy rooms."]],
    related: ["mini-photo-print-ideas", "photo-print-sizes-guide"],
  }),

  art({
    slug: "mini-photo-print-ideas", title: "Mini Photo Print Ideas: 15 Ways to Use Small Prints Big",
    excerpt: "Mini photo prints are the most versatile order you can make — wallet prints, fridge magnets, gift tags and favors that stretch one session.",
    category: "tips", date: "2026-08-23", hub: "engagement-photo-prints", primaryKeyword: "mini photo prints",
    featuredImage: IMAGES.galleryLaugh, featuredAlt: "mini photo prints wallet prints and magnets on a table",
    tags: ["mini prints", "wallet prints", "favors"],
    intro: "Mini prints are the most versatile order you can make from one session. Small enough to give away, cheap enough to order generously, and the size people actually keep.",
    takeaways: ["The 2×3 wallet size is the classic mini.", "One mini per use is never enough — order double.", "Matte for anything handled, glossy for what's only looked at."],
    sections: [
      { id: "mini-uses", text: "One Session, Many Small Prints", body: "A single engagement session can supply the favors, the gifts and the fridge for the whole wedding. Think in small formats.", list: ["Wallet prints for grandparents and pockets.", "Fridge magnets for the couple's own kitchen.", "Gift tags and escort cards with a tiny photo."] },
    ],
    faq: [["What size are mini photo prints?", "Usually 2×3 wallet size up to 4×6. Anything hand-length counts as a mini — small enough to give away generously, which is the whole point of ordering them."]],
    related: ["glossy-or-matte-prints", "engagement-photo-albums"],
  }),

  art({
    slug: "photo-print-sizes-guide", title: "Photo Print Sizes Guide: 16 Sizes & Where Each Belongs",
    excerpt: "Photo print sizes by use, not by chart — the viewing-distance rule, the 2:3 crop trap, and the frames that actually exist for each size.",
    category: "tips", date: "2026-09-03", hub: "engagement-photo-prints", primaryKeyword: "photo print sizes guide",
    featuredImage: IMAGES.galleryRing, featuredAlt: "photo print sizes guide framed prints on a wall",
    tags: ["print sizes", "framing", "wall art"],
    intro: "Every size chart lists dimensions; almost none tell you what to do with the numbers. The decision has three inputs: how far away people stand, what your file tolerates losing, and what frames you can actually find.",
    takeaways: ["Match the size to the viewing distance.", "The 2:3 crop trap: check before you order.", "Frames you can actually find decide the size."],
    sections: [
      { id: "size-rule", text: "Size Is a Decision, Not a Chart", body: "A print should fill roughly the same slice of vision whether it's small and close or big and far. Match the size to the distance, then let the frame follow.", list: ["One to two feet: 4×6 and 5×7 on desks.", "Two to four feet: 8×10 to 11×14 on consoles.", "Eight feet and more: 24×36 and above, over sofas."] },
    ],
    faq: [["What's the most versatile print size?", "The 8×10 fits the most common frames, which makes it the easiest gift. But if your file is full-frame 2:3, the 8×12 gives the same presence with zero crop."]],
    related: ["glossy-or-matte-prints", "engagement-photo-albums"],
  }),

  art({
    slug: "locket-photo-print-guide", title: "The Locket Photo Print Guide: Print for the Smallest Frame",
    excerpt: "How to print photos for a locket — the DPI, the crop, and the finish that keeps a thumbnail-size print sharp for forty years.",
    category: "tips", date: "2026-08-23", hub: "engagement-photo-prints", primaryKeyword: "locket photo prints",
    featuredImage: IMAGES.galleryRing, featuredAlt: "locket photo prints a tiny print being placed in a locket",
    tags: ["locket", "mini prints", "keepsake"],
    intro: "A locket print is the smallest photo you'll ever order and the one that gets handled the most. At thumbnail size, there's nowhere to hide: the crop, the DPI and the finish either hold up for forty years or they don't. Here's how to get all three right.",
    takeaways: ["Crop tight on the faces — a locket wants one face, two at most.", "300 DPI at the final size, exported as a high-res file.", "Matte finish resists the fingerprints a locket collects."],
    sections: [
      { id: "locket-crop", text: "Crop for the Smallest Frame", body: "At thumbnail size, the crop lives or dies on the faces. Crop tight on one face, two at most, with the eyes in the upper third. A group photo shrinks to a blur in a locket.", list: ["One face, two at most.", "Eyes in the upper third.", "Matte finish resists fingerprints."] },
    ],
    faq: [["What DPI do locket prints need?", "300 DPI at the final printed size, exported as a high-resolution file. A locket is the one print where a low-res file shows immediately, because there's nowhere for the blur to hide."]],
    related: ["mini-photo-print-ideas", "engagement-photo-albums"],
  }),
];

const ALL: Post[] = [
  ...SPOKES, ...INDOOR_POSTS, ...HOLIDAY_POSTS, ...ALBUMS_POSTS,
  ...WINTER_POSTS, ...PET_POSTS, ...POLAROID_POSTS, ...FLIP_BOOK_POSTS,
  ...BORDER_POSTS, ...TRUE_DIGITAL_POSTS, ...WEDDING_CHECKLIST_POSTS,
  ...COZY_POSTS, ...RUSTIC_POSTS, ...MOUNTAIN_POSTS, ...EDITING_POSTS,
  ...SPRING_SUMMER_POSTS, ...WINTER_OUTFITS_POSTS,
  ...FIRST_LOOK_POSTS, ...BEACH_POSTS, ...NATURAL_POSES_POSTS,
];

/* ————— keepReading post-processing pass (avoids TDZ on ALL) ————— */
for (const post of ALL) {
  const hasKeepReading = post.blocks.some((b) => b.type === "keepReading");
  if (!hasKeepReading && post.relatedPosts && post.relatedPosts.length > 0) {
    post.blocks.push({
      type: "keepReading",
      items: post.relatedPosts.slice(0, 3).map((slug) => {
        const t = ALL.find((x) => x.slug === slug);
        return { label: t?.title ?? slug, to: t ? `/${t.cluster}/${t.slug}` : "/guides", note: "Keep reading" };
      }),
    });
  }
}

/* ————— helpers ————— */
export const POSTS = ALL;
export const getPost = (slug: string) => ALL.find((p) => p.slug === slug);
export const getPostsByHub = (hub: string) => ALL.filter((p) => p.cluster === hub);
export const sortedPosts = () => [...ALL].sort((a, b) => (a.date < b.date ? 1 : -1));
export const getRelatedPosts = (post: Post, count = 3) =>
  (post.relatedPosts ?? []).map((s) => getPost(s)).filter((p): p is Post => Boolean(p)).slice(0, count);

export const postPath = (slug: string) => {
  const p = getPost(slug);
  return p?.cluster ? `/${p.cluster}/${p.slug}` : "/guides";
};

export const extractToc = (post: Post) =>
  post.blocks
    .filter((b): b is Extract<typeof b, { type: "h2" | "h3" }> => b.type === "h2" || b.type === "h3")
    .map((b) => ({ id: b.id, text: b.text, depth: b.type === "h2" ? (2 as const) : (3 as const) }));

export const readingTime = (post: Post) => {
  const words = post.blocks
    .map((b) => {
      if (b.type === "p" || b.type === "callout" || b.type === "quote") return b.text;
      if (b.type === "list" || b.type === "keyTakeaways") return b.items.join(" ");
      if (b.type === "faq") return b.items.map((i) => i.q + i.a).join(" ");
      if (b.type === "table") return b.rows.flat().join(" ");
      return "";
    })
    .join(" ").split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
};

export const formatDate = (iso: string) =>
  new Date(iso + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

export const getCategory = (slug: CategorySlug) => {
  const map: Record<CategorySlug, { slug: CategorySlug; name: string }> = {
    ideas: { slug: "ideas", name: "Ideas & Themes" },
    poses: { slug: "poses", name: "Poses" },
    outfits: { slug: "outfits", name: "Outfits" },
    locations: { slug: "locations", name: "Locations" },
    tips: { slug: "tips", name: "Prints & Tips" },
  };
  return map[slug];
};

/** Article-level ItemList items: numbered H3s win; else longest list or table rows. */
export const articleItems = (post: Post): string[] | null => {
  const h3s = post.blocks.filter((b) => b.type === "h3") as { type: "h3"; text: string }[];
  const lists = post.blocks.filter((b) => b.type === "list") as { type: "list"; items: string[] }[];
  const tables = post.blocks.filter((b) => b.type === "table") as { type: "table"; rows: string[][] }[];
  const listItems = lists.flatMap((l) => l.items);
  if (h3s.length >= 15) return h3s.map((h) => h.text);
  if (tables.length > 0) {
    const all = [...tables.flatMap((t) => t.rows.map((r) => `${r[0]}: ${r[1]}`)), ...listItems];
    return all.length >= 3 ? all : null;
  }
  if (lists.length > 0) {
    const longest = lists.reduce((a, b) => (b.items.length > a.items.length ? b : a));
    if (longest.items.length >= 10) return longest.items;
  }
  if (h3s.length >= 5) return h3s.map((h) => h.text);
  if (listItems.length >= 3) return listItems;
  return null;
};
