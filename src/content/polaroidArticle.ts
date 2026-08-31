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

export const POLAROID_POSTS: Post[] = [
  {
    slug: "polaroid-style-prints",
    title: "Polaroid Style Prints: 15 Ways to Get the Look (Without the Film Cost)",
    seoTitle: "Polaroid Style Prints: 15 Ways to Get the Look",
    seoDescription:
      "Polaroid style prints without the film cost: the three routes to the retro look, the size math, and 15 ways to use them at your wedding and at home.",
    excerpt:
      "The polaroid look was never about the film — it's about the border: a built-in mat, a caption space, a frame that says this moment mattered. These are the three honest routes to that look, and 15 ways to put them to work.",
    category: "tips",
    date: "2026-08-26",
    dateModified: "2026-09-10",
    featuredImage: IMAGES.galleryTwirl,
    featuredAlt: "retro white-bordered polaroid style photo prints scattered on a table",
    tags: ["polaroid prints", "retro", "border prints", "photo gifts"],
    author: harper,
    primaryKeyword: "polaroid style prints",
    cluster: "engagement-photo-prints",
    relatedPosts: ["border-prints", "mini-photo-print-ideas", "glossy-or-matte-prints"],
    internalLinks: [
      { url: "/engagement-photo-prints/border-prints", anchor: "border prints" },
      { url: "/engagement-photo-prints/mini-photo-print-ideas", anchor: "mini photo print ideas" },
      { url: "/engagement-photo-prints/photo-print-sizes-guide", anchor: "photo print sizes guide" },
      { url: "/engagement-photo-prints/glossy-or-matte-prints", anchor: "glossy or matte prints" },
    ],
    monetization: M,
    pinImages: [
      { image: IMAGES.galleryTwirl, overlayText: "The Look, Minus Film", pinTitle: "Polaroid Style Prints Without the Film Cost", pinDescription: "The three routes to the retro polaroid look — instant film, lab border prints, and DIY templates — plus the size math. Save before you order." },
      { image: IMAGES.galleryRing, overlayText: "Instant vs Lab", pinTitle: "Instant Film vs Lab Prints: The Real Math", pinDescription: "Real instant film, lab border prints, or DIY border templates — the cost, the look, and when each one wins. Save the comparison." },
      { image: IMAGES.galleryLaugh, overlayText: "15 Ways to Use Them", pinTitle: "15 Polaroid Ideas for Your Wedding", pinDescription: "Guest books, garlands, place settings, thank-you mail — 15 ways to put polaroid style prints to work at your wedding and at home." },
    ],
    blocks: [
      { type: "p", text: "The first time I watched a couple burn through a full instant-film pack in twenty minutes, it was a first dance in a Hill Country barn, and by the third toast the camera was clicking empty. Eight shots per pack, and nobody reads the box. They were devastated — until the lab prints with the white borders arrived and nobody could tell the difference. After 400+ sessions, I can tell you the polaroid look was never about the film. It's about the border: a built-in mat, a caption space, a frame that says this moment mattered enough to hold. This guide is the three honest routes to that look — real instant film, lab border prints, and DIY templates — plus fifteen ways to put them to work, without spending the film budget." },

      { type: "keyTakeaways", items: [
        "The polaroid look is the border, not the film — a built-in mat, a caption space, a frame.",
        "Three routes: instant film (scarcity), lab border prints (curation), DIY templates (control).",
        "A 4×6 with a border template is the cheap twin of the classic instant card.",
        "Matte cardstock reads retro; glossy reads modern. Match the finish to the look.",
      ]},

      { type: "h2", id: "why-the-look-works", text: "Why the Look Works (and Why It Reads as Honest)" },
      { type: "p", text: "The border does three jobs at once: it mats the image, it leaves a place for a handwritten line, and it crops your expectations to a single square moment. A square crop forces composition the way a haiku forces words — nothing hides. And the slight imperfection, the warm shift, the off-white edge, reads as honesty in a feed full of glass-smooth edits. I've shot enough receptions to know the prints people pick up and hold are never the glossy 8×10s. They're the small cards with a date scribbled on the bottom." },
      { type: "ad", slot: "after-first-h2" },

      { type: "h2", id: "the-15-ways", text: "The 15 Ways" },
      { type: "h3", id: "instant-original", text: "1. The Instant Film Original" },
      { type: "p", text: "Run real instant film for the moments that can't be restaged: the first look, the first dance, the last toast. The cost is the point — scarcity makes guests treat each frame like a small event. Budget one pack per hour and save the last two shots for the first dance." },
      { type: "h3", id: "lab-border", text: "2. Lab Border Prints" },
      { type: "p", text: "Upload your digital files and choose a border template at the lab. You keep full curation, exact color, and reprints — the look without the eight-shot ceiling. Ask for a plain wide bottom border and skip the pre-printed fonts; the handwriting is the whole charm." },
      { type: "h3", id: "diy-template", text: "3. The DIY Border Template" },
      { type: "p", text: "A free design tool, a square crop, a wide bottom margin, and cardstock through your own printer. This is the route for place settings and escort cards where you need forty variations nobody at a lab will hand-type. Export at 300 DPI so the border edge stays knife-crisp." },
      { type: "h3", id: "square-crop", text: "4. The Square-Crop Discipline" },
      { type: "p", text: "Before anything prints, crop to 1:1 in your preview and check heads, hands, and the ring. The border makes the crop feel permanent, so the discipline happens before ordering, not after. Leave a little air above the head inside the square." },
      { type: "h3", id: "handwritten-caption", text: "5. Handwritten Captions on the Border" },
      { type: "p", text: "Date plus one line: where, or why, or the joke only the two of you get. The caption turns a print into a record. Use a fine archival pen and write before the tape goes down; smudged captions ruin more garlands than wind does." },
      { type: "h3", id: "guestbook-station", text: "6. The Guest-Book Tape-In Station" },
      { type: "p", text: "Stack the prints beside the guest book with double-sided tape and a pen. Guests take the card with their moment, sign under it, and stick it in. The book becomes a collage nobody had to design. Pre-print about ten percent more cards than guests, for swaps and mis-tapes." },
      { type: "h3", id: "garland", text: "7. The Reception Clothesline Garland" },
      { type: "p", text: "String, mini wooden clips, and a run of borders catching the light above the bar or the gift table. It fills a wall for the cost of prints, and guests walk it like a gallery. Let the string sag on purpose; a soft sag reads as memory, not decor." },
      { type: "h3", id: "fridge-timeline", text: "8. The Kitchen Fridge Timeline" },
      { type: "p", text: "A rotating row of polaroid-style cards on the fridge: the engagement, the lease signing, the dog. Swap the row each season so the display stays alive instead of becoming wallpaper. Keep a small stack of spares printed; the timeline only survives the year if adding a card takes thirty seconds." },
      { type: "h3", id: "place-settings", text: "9. Place-Setting Prints" },
      { type: "p", text: "One card per seat, the guest's name on the border, a photo of them with the couple if you have it. It's a place card, a favor, and a moment of being seen, all in one print. Print the names at home in a simple typeface, then hand-write one welcome line." },
      { type: "h3", id: "escort-cards", text: "10. Escort Card Double Duty" },
      { type: "p", text: "The same card does escort duty at a board by the door: alphabetized, clipped to a rail, guests take theirs on the way in. One print run, two jobs. Alphabetize by last name before the venue handoff, not in the parking lot." },
      { type: "h3", id: "thankyou-inserts", text: "11. Thank-You Mail Inserts" },
      { type: "p", text: "One small print per household tucked into the thank-you envelope, captioned with the moment you shared. The card does the emotional heavy lifting so the note doesn't have to. Caption the shared moment, not the gift; people keep the memory, they recycle the inventory." },
      { type: "h3", id: "parents-stack", text: "12. The Parents' Gift Stack" },
      { type: "p", text: "Bundle twenty to thirty cards, tie them with the same ribbon as the invitations, and hand them over at the rehearsal. It's the gift that gets opened slowly, one card at a time, out loud. Include the outtakes of the parents themselves; those are the cards that get framed." },
      { type: "h3", id: "outtakes-stack", text: "13. The Outtakes Stack" },
      { type: "p", text: "The blink, the mid-laugh, the dog crossing the frame. Instant film taught us that the failed frame is often the truest one, so pull twenty outtakes into their own border run. Label the stack on the back of the first card: the ones that got away. It becomes its own keepsake." },
      { type: "h3", id: "glossy-sheen", text: "14. Glossy for the Authentic Sheen" },
      { type: "p", text: "That slight shine is half the nostalgia. Glossy mimics the instant-film surface; matte reads as fine art and hides fingerprints, which matters for cards that get handled. When the whole point is the retro look, glossy usually wins — the full reasoning lives in the finish guide." },
      { type: "h3", id: "border-math", text: "15. The 4×6 Border Math" },
      { type: "p", text: "The classic instant card is roughly 3.5 by 4.2 inches with a near-square image. A 4×6 with a border template is the cheap twin, and a true 4×4 square is the crop without the border math. When ratios start stacking up, the print size guide is the map. Pick one size per use, not per photo; a garland of mixed sizes reads as chaos." },
      { type: "ad", slot: "mid-article" },

      { type: "h2", id: "the-three-routes", text: "The Three Routes at a Glance" },
      { type: "table", caption: "Choosing your route to the polaroid look", headers: ["Route", "Cost per print", "Best for", "The trade"], rows: [
        ["Instant film", "high", "unrestageable moments, scarcity", "8 shots per pack, no reprints"],
        ["Lab border prints", "low", "curation, color, reprints", "the lab sets the border style"],
        ["DIY templates", "lowest", "40+ variations, place settings", "you do the cropping & printing"],
        ["4×6 border twin", "low", "the classic card size cheaply", "slightly different proportions"],
        ["4×4 true square", "low", "the crop without the math", "smaller than the classic card"],
      ]},

      { type: "h2", id: "what-couples-get-wrong", text: "What Most Couples Get Wrong" },
      { type: "p", text: "The first miss is buying instant film without doing the pack math: eight shots per pack, a first dance that burns a pack in twenty minutes, and a couple left with two frames and a memory of running out. Second is a border that fights the photo — three fonts and a sticker pack on an edge that should be quiet; the border works because it's silent. Third is matte chosen out of habit when the whole point was the instant-film sheen. And the last is printing all two hundred frames instead of curating thirty; a polaroid stack works because every card earned its place." },
      { type: "ad", slot: "before-faq" },

      { type: "h2", id: "harpers-tips-polaroid", text: "Harper's Tips & What I've Learned" },
      { type: "p", text: "Buy the paper one weight heavier than you think you need. The card that stands upright on a table gets kept; the card that flops gets stacked and forgotten. At small sizes, the weight of the card is half the charm." },
      { type: "p", text: "The couples whose polaroid prints get used the most are the ones who wrote on them. A border with a date and one honest line becomes a record; a blank border is just a mat. The caption is the difference between a print and a keepsake." },
      { type: "quote", text: "A border doesn't make a photo finished. It makes a finished photo portable.", cite: "Harper, from 400+ sessions" },
      { type: "p", text: "The retro look survives because it admits it's a copy. Nobody mistakes a border print for the moment; they mistake it for a memory, and that's the point. Print the moment, keep the border quiet, and let the handwriting do the remembering." },

      { type: "faq", items: [
        { q: "Are polaroid style prints the same as real Polaroids?", a: "No. Real Polaroids are instant film developed inside the card itself, roughly a dollar or more per shot, eight shots per pack. Polaroid style prints are your digital files printed with a white border template, at a fraction of the cost, and they let you reprint. Same look on the wall, very different budget." },
        { q: "What size is a classic polaroid print?", a: "The classic instant card is about 3.5 by 4.2 inches, with a near-square image around 3.1 inches across and a wide bottom border. The lab equivalent is a 4×6 with a border template, or a true square 4×4 if you want the crop without the border math." },
        { q: "Glossy or matte for polaroid style prints?", a: "Glossy, if you want the authentic instant-film sheen — that slight shine is half the nostalgia. Matte reads more like fine art and hides fingerprints, which matters for cards that get handled. When the whole point is the retro look, glossy is usually the honest choice." },
        { q: "Can I make the borders from my phone?", a: "Yes. Template apps and free design tools have polaroid frames; place your square crop, leave the bottom border wide, and export at 300 DPI so edges stay crisp. Print on cardstock at home for place settings, or send the file to a lab for the keepsake runs." },
        { q: "How many prints do I need for a guest book station?", a: "Plan one per guest plus about ten percent spares for swaps and mis-tapes — so a 120-guest wedding lands near 135. Order the spares in the same batch so paper and border color match exactly; a later reprint never matches perfectly." },
        { q: "Do polaroid style prints fade faster than regular prints?", a: "Not because of the border — fading comes from paper, ink, and sunlight, same as any print. Keep them out of direct sun and use archival paper, and they age like standard prints. Instant film itself is the fragile one; heat and light eat its chemistry first." },
      ]},

      { type: "leadMagnet", title: "The Retro Print Spec Card", subtitle: "The three routes, the size math, and the caption rules on one card — so you order the polaroid look right the first time.", bullets: ["The 3 routes, matched to your budget and moment", "The classic card size math (and the 4×6 twin)", "The caption and finish rules"], cta: "Get the Retro Print Spec Card" },

      { type: "shop", section: "prints", items: [
        { label: "Instant film packs", store: "Camera shop", href: "#" },
        { label: "Border print templates", store: "Print lab", href: "#" },
        { label: "Archival cardstock", store: "Craft store", href: "#" },
      ]},

      { type: "p", text: "It's a year later, and the border prints live in a shoebox on the shelf beside the guest book. The grandmother pulls one out — the first dance, the border signed in her own hand — and she doesn't put it back. That's the whole point. A polaroid print isn't finished when it's printed. It's finished when somebody writes on it, and keeps it, and pulls it out again." },

      { type: "keepReading", items: [
        { label: "Border Prints", to: "/engagement-photo-prints/border-prints", note: "The border, decided: thickness, color, and use" },
        { label: "Mini Photo Print Ideas", to: "/engagement-photo-prints/mini-photo-print-ideas", note: "The small end of the spectrum, used big" },
        { label: "Photo Print Sizes Guide", to: "/engagement-photo-prints/photo-print-sizes-guide", note: "The ratios and the math behind every size" },
      ]},
    ],
  },
];
