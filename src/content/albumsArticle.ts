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

export const ALBUMS_POSTS: Post[] = [
  {
    slug: "engagement-photo-albums",
    title: "Engagement Photo Albums: 15 Decisions Before You Order",
    seoTitle: "Engagement Photo Albums: 15 Decisions Before You Order",
    seoDescription:
      "Engagement photo albums explained: materials, sizes, layouts, and how to curate thirty photos instead of three hundred. Order one you'll actually open.",
    excerpt:
      "One couple waited two years to order an album and the photos stayed on a hard drive. These are the 15 decisions — material, size, layout, curation — that turn a gallery into the book you'll actually open.",
    category: "tips",
    date: "2026-09-09",
    dateModified: "2026-09-09",
    featuredImage: IMAGES.classicDip,
    featuredAlt: "a linen-bound engagement photo album open on a wooden table beside prints",
    tags: ["photo album", "albums", "keepsake", "curation", "print"],
    author: harper,
    primaryKeyword: "engagement photo albums",
    cluster: "engagement-photo-prints",
    relatedPosts: ["polaroid-style-prints", "glossy-or-matte-prints", "photo-print-sizes-guide"],
    internalLinks: [
      { url: "/engagement-photo-prints/polaroid-style-prints", anchor: "polaroid style prints" },
      { url: "/engagement-photo-prints/glossy-or-matte-prints", anchor: "glossy or matte prints" },
      { url: "/engagement-photo-prints/photo-print-sizes-guide", anchor: "photo print sizes guide" },
      { url: "/engagement-photo-prints/locket-photo-print-guide", anchor: "locket photo print guide" },
    ],
    monetization: M,
    pinImages: [
      { image: IMAGES.classicDip, overlayText: "15 Decisions First", pinTitle: "Engagement Photo Albums: 15 Decisions Before You Order", pinDescription: "Material, size, layout, curation — the 15 decisions that separate an album you'll open from one that stays in the box. Save before you order." },
      { image: IMAGES.galleryRing, overlayText: "The 3 Sizes", pinTitle: "The 3 Album Sizes That Actually Work", pinDescription: "8×8 for parents, 10×10 standard, 12×12 statement — how to pick the engagement album size you'll actually display. Save the size guide." },
      { image: IMAGES.galleryLaugh, overlayText: "Curate 30, Not 300", pinTitle: "How to Curate 30 Engagement Photos (Not 300)", pinDescription: "An over-full album is an unread album. The curation method that keeps an engagement album readable and loved. Save the method." },
    ],
    blocks: [
      { type: "p", text: "They had four hundred beautiful files and no album, because for two years the order sat in a cart, undecided. By the time they finally opened the book — linen, 10×10, thirty frames — the grandmother they'd planned it for had already seen most of them on a phone screen, and the moment had quietly passed. That's the whole argument for an engagement album in one story: files live on a hard drive, an album lives on a table where hands find it. After 400+ sessions, I've watched couples make this order easy or make it impossible, and the difference is never the photos. It's fifteen small decisions, made before the cart. This guide walks them in order — material, size, layout, then curation — so the order takes an evening instead of two years." },

      { type: "keyTakeaways", items: [
        "An album lives where hands find it — order the one you'll actually open.",
        "Three sizes do all the work: 8×8 for gifts, 10×10 standard, 12×12 statement.",
        "One photo per page for impact; two for story; never fill every spread.",
        "Curate to thirty frames, not three hundred — readability is love.",
      ]},

      { type: "h2", id: "why-albums-are-harder", text: "Why Albums Are Harder Than They Look" },
      { type: "p", text: "An album order feels harder than it is because it's really three decisions wearing one price tag. First, the material — what the book is made of, and how it ages in the hands that hold it. Second, the size — the physical footprint, which decides whether the book lives on a shelf, a coffee table, or in a drawer. Third, the curation — which photos earn a page, and which stay on the drive. Get the material and size right and the book invites itself open; get the curation right and it repays every opening. None of it requires taste you don't have. It requires the fifteen decisions below, in order." },
      { type: "ad", slot: "after-first-h2" },

      { type: "h2", id: "the-15-decisions", text: "The 15 Decisions" },

      { type: "h3", id: "material-leather", text: "1. Genuine Leather (Ages Like the Marriage)" },
      { type: "p", text: "Real leather darkens and softens at the corners exactly the way a well-used book should. It's the material you choose when the album is meant to be handled for decades — the scuffs become part of it. It costs more and earns it." },

      { type: "h3", id: "material-linen", text: "2. Textured Linen (Soft, Natural, Understated)" },
      { type: "p", text: "Linen is the material I recommend most: warm under the hands, quiet on a shelf, and it photographs beautifully in the shots of the album itself. It reads as heirloom without trying, and it costs less than leather." },

      { type: "h3", id: "material-acrylic", text: "3. Acrylic Cover (Modern, Glassy, Bold)" },
      { type: "p", text: "A clear or tinted acrylic cover turns the cover photo into the cover. It's the contemporary choice — sharp, glossy, unapologetic — and it suits a couple whose whole aesthetic leans modern. It shows fingerprints; decide that trade up front." },

      { type: "h3", id: "material-wood", text: "4. Wood (Rustic, Singular, Warm)" },
      { type: "p", text: "A wood cover — often engraved with names and a date — is the rustic statement piece. It suits the couple whose session happened on a ranch or in a barn, and it doubles as an object on the shelf even when the book is closed." },

      { type: "h3", id: "size-8x8", text: "5. The 8×8 (Compact, for Parents)" },
      { type: "p", text: "Eight by eight is the gift size: small enough to mail, intimate in the hands, and the size parents actually keep on a nightstand. Order two or three at this size for the families, not one big book they'll have to store." },

      { type: "h3", id: "size-10x10", text: "6. The 10×10 (The Standard, Right Impact)" },
      { type: "p", text: "Ten by ten is the working size: big enough that a full-bleed photo lands, small enough to live on a coffee table. If you're ordering one album for yourselves, this is it — the size almost nobody regrets." },

      { type: "h3", id: "size-12x12", text: "7. The 12×12 (The Statement Piece)" },
      { type: "p", text: "Twelve by twelve is the book you display open. It's the size for the couple whose photos are the art in the room, and it rewards the full-bleed layout. It's also the size that punishes an over-full spread; scale your curation up, not your photo count." },

      { type: "h3", id: "layout-one", text: "8. One Photo per Page (Maximum Impact)" },
      { type: "p", text: "One image, full page, generous margin. This is the layout that makes a single frame feel like a painting, and it's the default for your ten strongest frames. When in doubt, give a photo the whole page." },

      { type: "h3", id: "layout-two", text: "9. Two Photos per Page (The Narrative)" },
      { type: "p", text: "Two frames that talk to each other — the wide and the detail, the pose and the candids — build a little story per spread. This is the layout for the middle of the book, where the day unfolds. Pair, don't just place." },

      { type: "h3", id: "layout-collage", text: "10. The Collage (Energy & Movement)" },
      { type: "p", text: "Four to six small frames on a page for the moments that happened fast — the laughing run, the dog, the getting-ready chaos. Use one collage page per chapter of the day, not on every spread, or the energy turns to noise." },

      { type: "h3", id: "layout-fullbleed", text: "11. The Full-Bleed (Immersion)" },
      { type: "p", text: "One photo running to the very edge of the page, no margin, on both pages of the spread. This is your single most powerful frame, and it deserves exactly one spread in the whole book. Choose the frame that made you order the album." },

      { type: "h3", id: "curate-count", text: "12. Cap It at Twenty to Thirty Frames" },
      { type: "p", text: "Thirty frames is the ceiling where an album stays readable. Every photo past thirty dilutes the ones before it. You're not deleting the rest — they live in the digital gallery — you're choosing the thirty that carry the story." },

      { type: "h3", id: "curate-details", text: "13. Include the Details (Ring, Flowers, Hands)" },
      { type: "p", text: "The ring, the bouquet, two hands, the coffee cups from that morning. The detail frames are the texture of the day, and they're the pages people pause on. Two or three per chapter, no more." },

      { type: "h3", id: "curate-balance", text: "14. Balance Poses and Candids" },
      { type: "p", text: "Alternate the deliberate frame with the unguarded one — pose, candids, pose, candids — so the book breathes. A book of only poses reads formal; only candids reads accidental. The rhythm between them is the album's voice." },

      { type: "h3", id: "curate-close", text: "15. End on a Strong Frame (Not a Detail)" },
      { type: "p", text: "The last page is the last feeling. Close on your strongest single frame — usually the wide, the two of you, the light — not a detail and not a candids. The book should end the way the day did: the two of you." },
      { type: "ad", slot: "mid-article" },

      { type: "h2", id: "the-size-math", text: "The Size Decision at a Glance" },
      { type: "table", caption: "Choosing the engagement album size by where it will live", headers: ["Size", "Best for", "Best layout", "Feels like"], rows: [
        ["8×8", "Parents & mailed gifts", "one per page", "intimate, kept close"],
        ["10×10", "Your own coffee table", "mix of one & two", "standard, right"],
        ["12×12", "Display, open on a shelf", "full-bleed spreads", "a statement piece"],
        ["8×10 landscape", "A traditional keepsake", "two per page", "classic, familiar"],
        ["Square 12×12 linen", "The heirloom order", "one per page + details", "heirloom, handled"],
      ]},

      { type: "h2", id: "what-couples-get-wrong", text: "What Most Couples Get Wrong" },
      { type: "p", text: "The most common miss is waiting — the order sits in a cart for a year and the moment the album was meant to serve quietly passes. Second is ordering too small, an 8×8 for yourselves, which reads as a keepsake for someone else rather than the book you'll open. Third is filling every spread, three hundred frames in an album that should hold thirty, until the book becomes a folder with a cover. And the last is ending on a detail, which closes the book on a ring instead of on the two of you. An album is an edit, not an archive; the love is in what you leave out." },
      { type: "ad", slot: "before-faq" },

      { type: "h2", id: "harpers-tips-albums", text: "Harper's Tips & What I've Learned" },
      { type: "p", text: "Order the album the week the gallery arrives, while the day is still warm. The order takes twenty minutes when the feeling is there; it takes two years when it isn't. The feeling is the deadline." },
      { type: "p", text: "Hold the prints before you pick the size. Print your strongest frame at 10×10 and set it where the album would live — the right size announces itself the moment it sits in the room." },
      { type: "quote", text: "A hard drive is where photos go to be safe. An album is where they go to be loved.", cite: "Harper, from 400+ sessions" },
      { type: "p", text: "The albums that get opened again and again are never the biggest or the most expensive. They're the ones with thirty frames, one strong ending, and a cover that begs to be picked up. Simplicity is what makes an album lovable — and what makes it finished." },

      { type: "faq", items: [
        { q: "How many photos should go in an engagement album?", a: "Twenty to thirty frames, capped. Every photo past thirty dilutes the ones before it. Keep the rest in the digital gallery and put the thirty that carry the story in the book — readability is what makes an album get opened again." },
        { q: "What size engagement photo album should we order?", a: "For yourselves, 10×10 — big enough that a full-bleed lands, small enough to live on a coffee table, and the size almost nobody regrets. Order 8×8 copies for parents, and go 12×12 only if the album is meant to be displayed open." },
        { q: "What's the best material for an engagement album?", a: "Linen for most couples — warm in the hands, quiet on a shelf, and it photographs well. Choose genuine leather if the album is meant to be handled for decades, acrylic for a modern look, wood for a rustic statement piece." },
        { q: "How should we lay out the pages?", a: "One photo per page for your ten strongest frames, two per page for the narrative middle, one collage per chapter for the fast moments, and a single full-bleed spread for your most powerful frame. Don't fill every spread." },
        { q: "Album or scrapbook for engagement photos?", a: "An album if you want an archival, finished object you'll display; a scrapbook if you want an interactive project you build together over time. Many couples do the album for display and a slim scrapbook for the story — the full decision lives in the scrapbook-vs-album guide." },
        { q: "When should we order the album?", a: "The week the gallery arrives, while the day is still warm. The order takes twenty minutes when the feeling is there and two years when it isn't. The feeling is the deadline — order before it cools." },
      ]},

      { type: "leadMagnet", title: "The Album Order Checklist", subtitle: "All fifteen decisions on one card — material, size, layout, curation — so the order takes an evening instead of two years.", bullets: ["The 3 sizes, matched to where the book will live", "The 4 layouts and when each one earns a page", "The 30-frame curation method, step by step"], cta: "Get the Album Order Checklist" },

      { type: "shop", section: "prints", items: [
        { label: "Linen photo album (10×10)", store: "Album maker", href: "#" },
        { label: "Genuine leather album", store: "Album maker", href: "#" },
        { label: "8×8 gift album (set of 3)", store: "Album maker", href: "#" },
      ]},

      { type: "p", text: "It's a year later, and the book lives on the coffee table where it belongs. The grandmother flips it open without asking, settles into the chair, and works her way through thirty frames slowly, out loud. She gets to the last page — the wide one, the light, the two of you — and she starts again at the beginning. That's the whole point. An album isn't finished when it's ordered. It's finished when it's opened." },

      { type: "keepReading", items: [
        { label: "Polaroid-Style Prints", to: "/engagement-photo-prints/polaroid-style-prints", note: "The interactive project vs the finished object" },
        { label: "Glossy or Matte Prints", to: "/engagement-photo-prints/glossy-or-matte-prints", note: "The finish your album pages want" },
        { label: "Photo Print Sizes Guide", to: "/engagement-photo-prints/photo-print-sizes-guide", note: "The sizes inside the album, matched to the wall" },
      ]},
    ],
  },
];
