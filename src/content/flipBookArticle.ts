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

export const FLIP_BOOK_POSTS: Post[] = [
  {
    slug: "photo-flip-book-ideas",
    title: "Photo Flip Book Ideas: 16 Ways to Turn Your Gallery Into Motion",
    seoTitle: "Photo Flip Book Ideas: 16 Ways to Make One",
    seoDescription:
      "Photo flip book ideas from your engagement gallery: which frames to pick, how many pages you need, the paper and binding that last, and 16 ways to use one.",
    excerpt:
      "The most surprising keepsake in an engagement gallery is the one that moves. A flip book turns twenty frames of a twirl into a moment you can hold and replay. These are the 16 ways to make one, and the pages it takes to make it sing.",
    category: "tips",
    date: "2026-08-26",
    dateModified: "2026-09-10",
    featuredImage: IMAGES.galleryLaugh,
    featuredAlt: "a small handmade photo flip book standing open on a wooden table, pages fanned mid-flip",
    tags: ["flip book", "photo book", "keepsake", "motion", "photo gifts"],
    author: harper,
    primaryKeyword: "photo flip book",
    cluster: "engagement-photo-prints",
    relatedPosts: ["mini-photo-print-ideas", "glossy-or-matte-prints", "engagement-photo-albums"],
    internalLinks: [
      { url: "/engagement-photo-prints/mini-photo-print-ideas", anchor: "mini photo print ideas" },
      { url: "/engagement-photo-prints/photo-print-sizes-guide", anchor: "photo print sizes guide" },
      { url: "/engagement-photo-prints/glossy-or-matte-prints", anchor: "glossy or matte prints" },
      { url: "/engagement-photo-prints/engagement-photo-albums", anchor: "engagement photo albums" },
    ],
    monetization: M,
    pinImages: [
      { image: IMAGES.galleryLaugh, overlayText: "A Moment You Can Hold", pinTitle: "Photo Flip Book: The Keepsake Guests Actually Play With", pinDescription: "Turn twenty frames of a twirl into a moment you can hold and replay. The keepsake guests actually pick up and flip. Save this idea." },
      { image: IMAGES.galleryTwirl, overlayText: "How Many Pages?", pinTitle: "How Many Pages Does a Flip Book Need?", pinDescription: "Too few pages and the motion stutters. The page counts, frame picks, and paper that make a flip book move. Save the specs." },
      { image: IMAGES.galleryRing, overlayText: "16 Ways to Make One", pinTitle: "16 Flip Book Ideas From Your Engagement Gallery", pinDescription: "Guest-book favors, proposal replays, first-dance sequences — 16 ways to turn your engagement gallery into a flip book." },
    ],
    blocks: [
      { type: "p", text: "The most surprising object to come out of an engagement gallery is the one that moves. A flip book — twenty or thirty frames of a twirl, a laugh, a first dance, bound so the motion replays under your thumb — is the keepsake people pick up and can't put down. It's the photo album's mischievous little cousin. After 400+ sessions, I've learned the flip book lives or dies on the frames you choose: you need a sequence, not a collection. This guide is how to turn your gallery into motion — which frames to pull, how many pages you actually need, the paper and binding that survive being handled, and sixteen ways to put a flip book to work." },

      { type: "keyTakeaways", items: [
        "A flip book needs a sequence, not a collection — pull frames from one continuous moment.",
        "Twenty to thirty pages is the readable floor; fewer and the motion stutters.",
        "The twirl, the laugh and the first dance are the three moments that flip best.",
        "Matte paper and a stitched binding survive being handled; staples fall out.",
      ]},

      { type: "h2", id: "why-flip-books-work", text: "Why Flip Books Work (Memory Plus Motion)" },
      { type: "p", text: "A flip book works because it's the only print format that gives you back the motion. A photograph freezes a moment; a flip book hands you back the half-second around it, and your thumb does the replaying. It's why a flip book of a twirl is more fun than the single best frame of that twirl — you get the motion, not the memory of it. And because it's small, cheap, and meant to be handled, it's the keepsake people actually pick up. A coffee-table album gets admired; a flip book gets played with." },
      { type: "ad", slot: "after-first-h2" },

      { type: "h2", id: "the-16-ways", text: "The 16 Ways" },
      { type: "h3", id: "twirl-sequence", text: "1. The Twirl Sequence" },
      { type: "p", text: "The single best flip-book moment. Pull twenty to thirty frames from one continuous twirl — the wind-up, the spin, the dress flare, the landing — and the book replays the whole thing. Ask your photographer to shoot the twirl in burst; you'll need the frames to choose from." },
      { type: "h3", id: "laugh-sequence", text: "2. The Laugh Sequence" },
      { type: "p", text: "The moment the joke lands: the build, the break, the full laugh. A laugh sequence flips beautifully because the motion is all in the face, and it's the moment people most want to replay. Pull it from a candid burst, not a posed shot." },
      { type: "h3", id: "first-dance", text: "3. The First-Dance Sequence" },
      { type: "p", text: "Twenty frames from the first dance, bound small, become the dance you can keep in a pocket. It's the flip book couples most often reorder for parents. Ask the photographer to shoot the dance in a burst, not single frames." },
      { type: "h3", id: "proposal-replay", text: "4. The Proposal Replay" },
      { type: "p", text: "If the proposal was photographed in a burst, the kneel-to-yes sequence is the most replayed flip book there is. It's the moment that started everything, now replaying under a thumb. Pull the frames from the walk-up through the yes." },
      { type: "h3", id: "dog-zoomies", text: "5. The Dog Zoomies" },
      { type: "p", text: "The dog crossing the frame, ears up, tongue out. A zoomies sequence is the flip book guests laugh at every time, and it's the one people keep on their desk. If your dog made it into the session, this is the book to make." },
      { type: "h3", id: "walk-sequence", text: "6. The Walk Sequence" },
      { type: "p", text: "A walk toward the camera, hands linked, mid-conversation. The motion is gentle and the book reads as a little story of the two of you arriving. It's the quiet flip book, and it flips smoother than any pose." },
      { type: "h3", id: "getting-ready", text: "7. The Getting-Ready Flip" },
      { type: "p", text: "The tie being tied, the veil being pinned, the shoes being stepped into. A getting-ready sequence is a flip book with a beginning and an end, and it's the one parents love because it's the morning they remember." },
      { type: "h3", id: "guestbook-favors", text: "8. Guest-Book Favors" },
      { type: "p", text: "A small flip book at each table, the couple's laugh or twirl on the cover. Guests flip it, sign the last page, and take it home. It's the favor that actually gets kept, because it does something no other favor does." },
      { type: "h3", id: "parent-gifts", text: "9. Parent Gift Flip Books" },
      { type: "p", text: "A first-dance flip book for each set of parents, tied with the same ribbon as the invitations. It's the gift that gets opened at the rehearsal and replayed at the table. Order one per set, plus a spare." },
      { type: "h3", id: "save-the-date-motion", text: "10. The Save-the-Date Teaser" },
      { type: "p", text: "Mail a small flip book with the save the date — the twirl, ending on the date. It's the save-the-date people keep and replay, and it makes the announcement an event. Pair it with a printed card for the details." },
      { type: "h3", id: "desk-keepsake", text: "11. The Desk Keepsake" },
      { type: "p", text: "A small flip book on a desk, the laugh or the twirl, flipped between meetings. It's the everyday flip book, the one that lives where the couple works. It's the cheapest way to keep the engagement alive all year." },
      { type: "h3", id: "bridal-party-gifts", text: "12. Bridal Party Gift Flip Books" },
      { type: "p", text: "A flip book for the bridal party, the candid moments they're in, bound small. It's the gift that says you noticed them in the day. Order one per person, the frames they're in, bound small." },
      { type: "h3", id: "grandparent-keepsake", text: "13. The Grandparent Keepsake" },
      { type: "p", text: "A flip book for the grandparents, the gentle moments, large enough to flip easily. It's the flip book that gets passed around the table and replayed out loud. Make the pages a touch larger for older hands." },
      { type: "h3", id: "reception-display", text: "14. The Reception Display Flip Book" },
      { type: "p", text: "A flip book on a stand at the reception, guests flipping it between dances. It's the display people gather around, because it moves. Set it where the light is good and the crowd is thick." },
      { type: "h3", id: "anniversary-replay", text: "15. The Anniversary Replay" },
      { type: "p", text: "Order a second flip book at the one-year mark, the same twirl, the same laugh, replayed a year later. It's the flip book that becomes a tradition. Reorder the same sequence each anniversary; it only gets better." },
      { type: "h3", id: "scrapbook-insert", text: "16. The Scrapbook Insert" },
      { type: "p", text: "A flip book tucked into a scrapbook page, mounted so it can still be flipped. It's the page in the album that moves, and it's the one people flip first. Mount it with a corner that leaves the spine free." },
      { type: "ad", slot: "mid-article" },

      { type: "h2", id: "the-specs", text: "The Specs: Pages, Paper, Binding" },
      { type: "table", caption: "Flip book specs that actually work", headers: ["Spec", "Works", "Why"], rows: [
        ["Pages", "20–30", "fewer stutters, more costs more"],
        ["Frames", "one continuous moment", "a collection won't flip"],
        ["Paper", "matte, mid-weight", "glossy smudges under a thumb"],
        ["Binding", "stitched or glued", "staples fall out of handled books"],
        ["Size", "2.5–4 inches", "big enough to flip, small enough to keep"],
      ]},

      { type: "h2", id: "what-couples-get-wrong", text: "What Most Couples Get Wrong" },
      { type: "p", text: "The most common miss is choosing the best photos instead of the best sequence: a flip book of your ten prettiest frames stutters, because they weren't continuous. You need twenty frames from one moment, not ten moments. Second is too few pages; under twenty, the motion stutters and the book feels broken. Third is staples, which fall out of a book that's meant to be handled. And the last is glossy paper, which smudges under a thumb. Pick a sequence, bind it stitched, keep it matte, and let the motion do the remembering." },
      { type: "ad", slot: "before-faq" },

      { type: "h2", id: "harpers-tips-flip", text: "Harper's Tips & What I've Learned" },
      { type: "p", text: "Ask for the burst before you need it. A flip book is only as good as the frames behind it, and burst frames of the twirl, the laugh and the first dance are the raw material. If your photographer didn't shoot the burst, the flip book doesn't exist — ask early." },
      { type: "p", text: "Order three more than you think you need. Flip books get lost, gifted, and replayed until the corners soften. The couple that orders six and gives away four has the one that survives; the couple that orders two loses both." },
      { type: "quote", text: "A photograph freezes a moment. A flip book hands you back the half-second around it.", cite: "Harper, from 400+ sessions" },
      { type: "p", text: "The flip books that get kept aren't the prettiest. They're the ones that move — the twirl, the laugh, the dance. Motion is the memory, and a flip book is the only print format that gives it back. Pick the moment, not the frame." },

      { type: "faq", items: [
        { q: "How many pages does a flip book need?", a: "Twenty to thirty pages is the readable floor. Fewer and the motion stutters and the book feels broken; more and the cost climbs without adding motion. Twenty to thirty frames from one continuous moment is the sweet spot that flips smoothly." },
        { q: "Which engagement moments make the best flip books?", a: "The twirl, the laugh and the first dance — the three moments with real, continuous motion. A flip book needs a sequence from one moment, not a collection of your best frames. Ask your photographer to shoot those three in burst." },
        { q: "Glossy or matte for a flip book?", a: "Matte. A flip book lives under a thumb, and glossy paper smudges with every flip until the pages cloud. Matte stays clean under handling, which is the whole point of a book that's meant to be played with, not admired from a shelf." },
        { q: "Stapled or stitched binding?", a: "Stitched or glued, never stapled. A flip book is handled hundreds of times, and staples work loose and fall out of a book that's meant to be flipped. A stitched or glued spine survives the handling, which is the point." },
        { q: "Do I need a professional photographer for a flip book?", a: "You need burst frames, which most photographers can shoot on request. Ask your photographer to shoot the twirl, the laugh and the first dance in a continuous burst. If you shot the engagement yourself, any camera with a burst mode gives you the frames." },
        { q: "How many flip books should we order?", a: "Order three more than you plan to give away. Flip books get lost, gifted, and replayed until the corners soften. The couples who order six and give away four keep the one that survives; the couples who order two lose both." },
      ]},

      { type: "leadMagnet", title: "The Flip Book Frame Picker", subtitle: "Which moments flip best, how many pages each needs, and the paper and binding that last — on one card.", bullets: ["The 3 moments that flip best (and how to ask for the burst)", "The page-count and binding specs", "The paper that survives a thumb"], cta: "Get the Flip Book Frame Picker" },

      { type: "shop", section: "prints", items: [
        { label: "Custom flip book printing", store: "Print lab", href: "#" },
        { label: "Matte cardstock", store: "Craft store", href: "#" },
        { label: "Photo corners & mounts", store: "Craft store", href: "#" },
      ]},

      { type: "p", text: "It's a year later, and the flip book lives on the nightstand, corners soft from a year of thumbs. She flips the twirl one more time before the light goes out — the wind-up, the spin, the dress flare, the landing — and she doesn't flip it again, because she doesn't need to. It's the same half-second it's always been. That's the whole point. A flip book isn't finished when it's bound. It's finished every time somebody flips it." },

      { type: "keepReading", items: [
        { label: "Mini Photo Print Ideas", to: "/engagement-photo-prints/mini-photo-print-ideas", note: "The small formats, used big" },
        { label: "Engagement Photo Albums", to: "/engagement-photo-prints/engagement-photo-albums", note: "The book that stays on the table" },
        { label: "Photo Print Sizes Guide", to: "/engagement-photo-prints/photo-print-sizes-guide", note: "The sizes that fit a thumb, not a wall" },
      ]},
    ],
  },
];
