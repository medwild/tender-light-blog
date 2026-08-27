import { IMAGES } from "../lib/constants";
import type { Author, Post } from "./types";

const harper: Author = {
  handle: "harper-ellis",
  name: "Harper Ellis",
  role: "Founder & Engagement Photo Editor",
  bio: "Harper spent 8 years behind the lens shooting 400+ engagement sessions across the US before trading her camera for a keyboard. Based in Austin and married to her high school sweetheart, she writes the warm, practical guides every couple deserves.",
  avatar: IMAGES.about,
  instagram: "@tenderlight.journal",
};

const M = { adsense: true, affiliate: true, leadMagnet: true };

export const INDOOR_POSTS: Post[] = [
  {
    slug: "indoor-engagement-photos",
    title: "Indoor Engagement Photos: 15 Ways to Make Small Spaces Feel Big",
    seoTitle: "Indoor Engagement Photos: 15 Ideas for Small Spaces",
    seoDescription:
      "Indoor engagement photos that make small spaces feel big: window light, doorway framing, mirrors and the rooms you already have. No studio needed.",
    excerpt:
      "The couple thought their apartment was too small for engagement photos. Two hours later the frames looked like they were taken in a loft. Small spaces don't limit a session — they concentrate it.",
    category: "locations",
    date: "2026-09-09",
    dateModified: "2026-09-09",
    featuredImage: IMAGES.indoor,
    featuredAlt: "indoor engagement photos couple in soft window light in a small apartment",
    tags: ["indoor", "at home", "window light", "small spaces"],
    author: harper,
    primaryKeyword: "indoor engagement photos",
    cluster: "engagement-photo-locations",
    relatedPosts: ["at-home-engagement-photo-ideas", "outdoor-engagement-photo-locations", "classic-engagement-photos"],
    internalLinks: [
      { url: "/engagement-photo-locations/at-home-engagement-photo-ideas", anchor: "at-home engagement photos" },
      { url: "/engagement-photo-poses/scenario-based-engagement-poses", anchor: "scenario-based engagement poses" },
      { url: "/engagement-photo-ideas/classic-engagement-photos", anchor: "classic engagement photos" },
      { url: "/engagement-photo-locations/outdoor-engagement-photo-locations", anchor: "outdoor engagement photo locations" },
    ],
    monetization: M,
    pinImages: [
      { image: IMAGES.indoor, overlayText: "Small Spaces, Big Photos", pinTitle: "Indoor Engagement Photos: Small Spaces, Big Impact", pinDescription: "Your apartment is better than you think: 15 indoor engagement photo ideas using window light, mirrors and doorway framing. Save this for your session." },
      { image: IMAGES.classicDip, overlayText: "Window Light Mastery", pinTitle: "Window Light Mastery: 15 Indoor Ideas", pinDescription: "Window light is the best light you already own. 15 ways to use it for indoor engagement photos, from golden hour to overcast days." },
      { image: IMAGES.galleryLaugh, overlayText: "Your Home Is the Set", pinTitle: "Your Apartment Is Better Than You Think", pinDescription: "Doorway framing, mirror reflections, tight crops — how small spaces make the most intimate engagement photos. Save these ideas." },
    ],
    blocks: [
      { type: "p", text: "They apologized for the apartment before I'd even set down my bag. \"It's just really small,\" she said, like a small apartment were a flaw instead of a point of view. Two hours later they were looking at frames that looked like they'd been taken in a loft — and the trick wasn't the space, it was the light. A small room with one good window beats a big room with bad light every single time. Indoor engagement photos aren't a consolation prize for bad weather. They're their own thing: concentrated, intimate, and honest in a way a field never quite is. This guide is how to make a small space feel enormous — the natural light that does the heavy lifting, the compositions that double a room, and the places beyond your front door that work just as well." },

      { type: "keyTakeaways", items: [
        "A small room with one good window beats a big room with bad light.",
        "Window light is the best light you already own — use it first.",
        "Mirrors, doorways and tight crops make a small space feel enormous.",
        "Your kitchen and hallway can work as hard as your living room.",
      ]},

      { type: "h2", id: "why-indoor-is-harder", text: "Why Indoor Is Harder Than Outdoor (and Why That's Good)" },
      { type: "p", text: "Indoor is harder than outdoor because you can't lean on the scenery — there's no sunset to do the work for you. Which is exactly why it's good. With less to hide behind, the photo has to be about the two of you: the light on your faces, the space around you, the way you look at each other. The three challenges are limited light, tight space, and busy backgrounds — and each one has a fix that makes the photo better, not just possible." },
      { type: "table", caption: "The three indoor challenges — and the fix for each", headers: ["Challenge", "Why it happens", "The fix"], rows: [
        ["Limited light", "walls and ceiling eat the light", "one window, one lamp, one direction — never all three at once"],
        ["Tight space", "the room runs out before the pose does", "doorway framing, mirrors, and crops that leave the room out"],
        ["Busy backgrounds", "lived-in rooms have a lot in them", "style one corner, then crop it; don't clean the whole house"],
      ]},
      { type: "ad", slot: "after-first-h2" },

      { type: "h2", id: "the-15-ideas", text: "The 15 Ideas" },

      { type: "h3", id: "window-light", text: "1. Window Light, Side-On" },
      { type: "p", text: "The single best light you already own is the window. Stand beside it, not in front of it, so the light falls across your faces from the side. Thirty minutes before sunset it turns golden; on an overcast day it's a softbox. Turn off every lamp in the room first — one light source, or the photo gets muddy." },

      { type: "h3", id: "golden-bounce", text: "2. Golden Hour, Bounced" },
      { type: "p", text: "Indirect golden-hour light — the kind that bounces off a wall or a pale curtain before it reaches you — is softer than direct sun and warmer than shade. It's the light that makes an ordinary living room look like a film set, and it's free." },

      { type: "h3", id: "skylight", text: "3. The Skylight" },
      { type: "p", text: "A skylight is a softbox pointed straight down. Stand under it and the light wraps around both of you evenly, with none of the harsh side shadows of a window. It's the most flattering indoor light there is, and almost nobody thinks to use it." },

      { type: "h3", id: "overcast-indoor", text: "4. The Overcast Day" },
      { type: "p", text: "An overcast day turns every window into a softbox, all day long. There's no golden-hour window to race against and no harsh sun to avoid — just even, flattering light from morning to evening. It's the easiest indoor light to shoot, and the one most couples wait out instead of using." },

      { type: "h3", id: "warm-lamps", text: "5. Warm Lamps Only" },
      { type: "p", text: "When the sun's gone, lamps take over — but only warm ones. A 2700K lamp reads as candlelight; a cool-white LED reads as an office. One warm lamp, placed to one side, is all you need. Turn off the overhead entirely; it flattens everything it touches." },

      { type: "h3", id: "candlelight", text: "6. Candlelight" },
      { type: "p", text: "A few candles on a table give you the warmest, most intimate light there is, and they do double duty as a prop. The light is dim, so get close and let the rest of the room fall away. Candlelight photos don't need to be sharp to be beautiful; they need to be warm." },

      { type: "h3", id: "string-lights", text: "7. String Lights as Bokeh" },
      { type: "p", text: "A string of warm lights behind you, out of focus, turns into soft golden circles — bokeh — that make any wall feel festive without a single decoration in frame. Hang them, defocus them, and let them do the background work." },

      { type: "h3", id: "doorway-framing", text: "8. Doorway Framing" },
      { type: "p", text: "A doorway is a frame inside the frame. Stand in it, or lean against it, and the door draws the eye straight to the two of you. It's the oldest trick in the book for making a small space feel deliberate instead of cramped." },

      { type: "h3", id: "mirror-reflections", text: "9. Mirror Reflections" },
      { type: "p", text: "A mirror doubles a small room and adds a second angle to every frame. Shoot one of you in the mirror and the other in the flesh, or both of you reflected together. It's the fastest way to make a small space feel twice its size." },

      { type: "h3", id: "tight-crops", text: "10. Tight Crops" },
      { type: "p", text: "When the room is small, leave it out of the frame. Tight crops on faces and hands need no background at all, and they read as intimate rather than cramped. Some of the strongest indoor frames show nothing but the two of you." },

      { type: "h3", id: "overhead-shot", text: "11. The Overhead Shot" },
      { type: "p", text: "From a chair, a staircase, or a loft rail, shoot straight down at the two of you on the couch or the rug. The floor becomes the background, the room disappears, and you get a frame that's impossible to take outdoors." },

      { type: "h3", id: "cafe-corner", text: "12. The Café Corner" },
      { type: "p", text: "A table by the window at your favorite café gives you warm light, two drinks, and a room full of soft background. Ask for the window table, go mid-morning when it's quiet, and let the coffee do the posing." },

      { type: "h3", id: "museum-gallery", text: "13. The Museum or Gallery" },
      { type: "p", text: "A museum gives you architecture, art, and soft even light in every room. The columns, the staircases, the long hallways — all of it frames a couple like a stage. Check the photography policy first; most allow handheld cameras, some don't." },

      { type: "h3", id: "library", text: "14. The Library" },
      { type: "p", text: "Rows of books, tall windows, and the quiet hush of a reading room. A library gives you warm wood, soft window light, and shelves that frame you on both sides. It's the coziest indoor location there is, and it's usually free." },

      { type: "h3", id: "vintage-shop", text: "15. The Vintage Shop" },
      { type: "p", text: "A vintage shop is a room full of ready-made props and warm, cluttered texture. Browsing the records, holding up a lamp, laughing at the ugly couch — the shop does the styling, and the frames read as found instead of staged." },
      { type: "ad", slot: "mid-article" },

      { type: "h2", id: "what-couples-get-wrong-indoor", text: "What Most Couples Get Wrong" },
      { type: "p", text: "The flash is mistake number one — the built-in flash throws hard shadows and flattens every face it touches, and it's almost never the answer indoors. The second mistake is cleaning instead of styling: a room scrubbed spotless reads as sterile, while one styled corner reads as lived-in. And the last is ignoring the other rooms. The kitchen, the hallway, the bathroom with the good mirror — they can all work as hard as the living room, and they usually have better light." },
      { type: "ad", slot: "before-faq" },

      { type: "h2", id: "harpers-tips-indoor", text: "Harper's Tips & What I've Learned" },
      { type: "p", text: "Turn off every light in the room before you add one. One window, or one lamp, or one string of lights — never all three. The photo gets muddy the moment two light sources start arguing, and it takes thirty seconds to fix by turning one off." },
      { type: "p", text: "After 400+ sessions, the indoor galleries people love most are the ones that look lived-in. A styled corner beats a spotless room. Leave the book open, the mug half-full, the blanket half-folded. The life in the room is what makes the photo feel like yours." },
      { type: "quote", text: "A small room with one good window is never a compromise. It's a point of view.", cite: "Harper, from 400+ sessions" },
      { type: "p", text: "The couple with the small apartment ended up with the frames on their wall, not the couple with the big backyard. The apartment made them get close, get honest, get into the light. Small didn't limit the session. It concentrated it. That's the whole secret of indoor engagement photos, and it's been there all along — in the window, in the doorway, in the two of you." },

      { type: "faq", items: [
        { q: "Is our home too small for engagement photos?", a: "No. Small spaces force tight, intimate crops, which read as honest rather than cramped. A small room with one good window beats a big room with bad light every time. The space doesn't limit the session; it concentrates it." },
        { q: "What's the best light for indoor engagement photos?", a: "Window light, side-on, with every other light in the room turned off. Thirty minutes before sunset it turns golden; on an overcast day it's a softbox all day long. One light source, or the photo gets muddy." },
        { q: "Should we use flash for indoor photos?", a: "Almost never. The built-in flash throws hard shadows and flattens every face it touches. Use window light or one warm lamp instead. If the room is too dark for either, add a lamp — not a flash." },
        { q: "How do we make a small space feel bigger?", a: "Mirrors double the room, doorways frame you, and tight crops leave the space out of the frame entirely. Shoot from a staircase or a chair for an overhead shot that makes the floor the background." },
        { q: "Do we need to clean the whole house?", a: "No. Style one corner, then crop it. A room scrubbed spotless reads as sterile; one styled corner reads as lived-in. The kitchen, hallway and bathroom can work as hard as the living room." },
        { q: "What other indoor locations work besides home?", a: "A café window table, a museum or gallery, a library, a vintage shop. All of them give you soft light and ready-made framing. Check the photography policy first; most allow handheld cameras." },
      ]},

      { type: "leadMagnet", title: "The Indoor Session Prep Card", subtitle: "One card with the light checklist, the one-lamp rule, and the room-by-room shot list — everything an indoor session needs in one page.", bullets: ["The one-lamp rule and the light checklist", "The room-by-room shot list (kitchen to hallway)", "The small-space framing tricks"], cta: "Get the Indoor Session Prep Card" },

      { type: "shop", section: "prints", items: [
        { label: "Warm 2700K lamps", store: "Home shop", href: "#" },
        { label: "Warm-tone string lights", store: "Home shop", href: "#" },
        { label: "Portable reflector", store: "Camera shop", href: "#" },
      ]},

      { type: "p", text: "It's the last frame of the afternoon, and the only light in the apartment is the one window, going gold. The two of you are on the couch, close enough that the frame doesn't need the rest of the room. She's laughing at something he said, and neither of you has thought about the size of the apartment in an hour. It doesn't matter anymore. It never did. The light was always big enough for the two of you." },

      { type: "keepReading", items: [
        { label: "At-Home Engagement Photos", to: "/engagement-photo-locations/at-home-engagement-photo-ideas", note: "Your routine, your rooms, photographed" },
        { label: "Outdoor Engagement Photo Locations", to: "/engagement-photo-locations/outdoor-engagement-photo-locations", note: "When you do want to leave the house" },
        { label: "Classic Engagement Photos", to: "/engagement-photo-ideas/classic-engagement-photos", note: "Soft light, balanced composition, real moments" },
      ]},
    ],
  },
];
