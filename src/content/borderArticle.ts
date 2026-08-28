import { IMAGES } from "../lib/constants";
import type { Author, Post } from "../content/types";

const harper: Author = {
  handle: "harper-ellis",
  name: "Harper Ellis",
  role: "Founder & Engagement Photo Editor",
  bio: "Harper spent 8 years behind the lens shooting 400+ engagement sessions across the US before trading her camera for a keyboard. Based in Austin and married to her high school sweetheart, she writes the warm, practical guides every couple deserves.",
  avatar: IMAGES.about,
  instagram: "@tenderlight.journal",
};

const M = { adsense: true, affiliate: true, leadMagnet: true };

export const BORDER_POSTS: Post[] = [
  {
    slug: "border-prints",
    title: "Border Prints: 15 Ways to Frame the Moment (Without a Frame)",
    seoTitle: "Border Prints: 15 Ways to Frame the Moment",
    seoDescription:
      "Border prints explained: the thickness, color, and use-case rules that make a white border look vintage instead of dated — plus 15 ways to put them to work.",
    excerpt:
      "My grandmother's scrapbook has a white border on every photo, and forty years later it still looks like it was printed yesterday. That's the whole argument for the border: it's the frame you print.",
    category: "tips",
    date: "2026-08-26",
    dateModified: "2026-09-10",
    featuredImage: IMAGES.galleryTwirl,
    featuredAlt: "retro white-bordered photo prints scattered on a wooden table",
    tags: ["border prints", "retro", "scrapbook", "photo gifts", "white border"],
    author: harper,
    primaryKeyword: "border prints",
    cluster: "engagement-photo-prints",
    relatedPosts: ["polaroid-style-prints", "photo-print-sizes-guide", "glossy-or-matte-prints"],
    internalLinks: [
      { url: "/engagement-photo-prints/polaroid-style-prints", anchor: "polaroid style prints" },
      { url: "/engagement-photo-prints/photo-print-sizes-guide", anchor: "photo print sizes guide" },
      { url: "/engagement-photo-prints/glossy-or-matte-prints", anchor: "glossy or matte prints" },
      { url: "/engagement-photo-ideas/black-and-white-engagement-photos", anchor: "black and white engagement photos" },
    ],
    monetization: M,
    pinImages: [
      { image: IMAGES.galleryTwirl, overlayText: "The Frame You Print", pinTitle: "Border Prints: The Frame You Print", pinDescription: "A border is a frame you print, not an effect you add. The thickness, color, and use-case rules that make it look vintage instead of dated. Save the rules." },
      { image: IMAGES.galleryRing, overlayText: "Thin vs Thick", pinTitle: "Thin vs Thick: The Border Rule That Matters", pinDescription: "Thin borders stay discreet; thick ones make a statement. How to pick the border weight for scrapbooks, gifts, and display. Save the rule." },
      { image: IMAGES.galleryLaugh, overlayText: "15 Border Ideas", pinTitle: "15 Border Print Ideas for Gifts & Display", pinDescription: "Scrapbooks, gift stacks, garlands, place settings, thank-you inserts — 15 ways to put border prints to work. Save the list." },
    ],
    blocks: [
      { type: "p", text: "My grandmother's scrapbook has a white border on every photograph, and forty years later it still looks like it was printed yesterday — while the frameless prints in my own drawer have curled at the corners. That's the whole argument for border prints in one shelf: the border is a frame you print, not a frame you buy. It mats the image, leaves room for a caption, and signals something worth keeping before you've read a single word. After 400+ sessions, I can tell you the border look lives or dies on three decisions: the thickness, the color, and the job it's doing. This guide is those rules, plus fifteen ways to put border prints to work — for the scrapbook, the gifts, the display, and the mail." },

      { type: "keyTakeaways", items: [
        "A border is a frame you print — mat, caption space, and retro signal in one.",
        "Thin borders stay discreet; thick ones make a statement. Pick by the job.",
        "White is the classic that works; black earns its place in black-and-white.",
        "Matte finish resists fingerprints; a caption gets one line, not a paragraph.",
      ]},

      { type: "h2", id: "why-the-border-works", text: "Why the Border Works" },
      { type: "p", text: "A border does three jobs at once, and that's why it has outlived every framing trend since the instant camera. First, it mats the image — a built-in margin that lets the photo breathe instead of running to the edge of the card. Second, it leaves a place for a caption, the one line that turns a print into a record. Third, it signals retro — the white edge says 'this mattered enough to hold' before you've read a word. A border doesn't make a photo honest. It just gives an honest photo a place to sit." },
      { type: "ad", slot: "after-first-h2" },

      { type: "h2", id: "the-15-ways", text: "The 15 Ways" },

      { type: "h3", id: "rule-thin-thick", text: "1. Thin vs Thick: Choose by the Job" },
      { type: "p", text: "A thin border stays discreet and lets the image lead — it's the right choice for scrapbook pages and anything where the photo is doing the talking. A thick border makes a statement — it's the right choice for gifts and display, where the border itself is part of the object. Never pick thickness for looks alone; pick it for what the print is doing." },

      { type: "h3", id: "rule-white", text: "2. White Classic: The Default That Works" },
      { type: "p", text: "White is the border that works everywhere because it disappears. It reads as mat, not decoration, and it ages without ever looking dated. When in doubt, white is the right answer — the whole retro look lives in the white border, and it asks for nothing else." },

      { type: "h3", id: "rule-black", text: "3. Black Border: Earned in Black-and-White" },
      { type: "p", text: "A black border earns its place in one situation: black-and-white photography. There, the dark border extends the monochrome to the edge of the card and makes the whites inside it sing. In a color photo it reads heavy; in black-and-white it reads like the photograph was always meant to end there." },

      { type: "h3", id: "rule-colored", text: "4. Colored Border: Matched, Not Decorated" },
      { type: "p", text: "A colored border can work, but only when it's matched to the palette, not used to decorate. One tone pulled from the photo — a muted sage, a dusty rose — at most two or three tones across the whole set. A colored border that doesn't come from the image reads as a sticker; one that comes from the photo reads as a decision." },

      { type: "h3", id: "use-scrapbook", text: "5. Scrapbook Layouts: The Border Is the Margin" },
      { type: "p", text: "In a scrapbook, the border does double duty: it mats the photo and becomes the margin you collage around. Overlap the borders, tuck a ticket stub under one edge, write beside the border instead of on it. The border is what makes a scrapbook page read as composed instead of stuck-together." },

      { type: "h3", id: "use-gift-stacks", text: "6. Gift Stacks: A Bundle That Arrives Finished" },
      { type: "p", text: "Bundle twenty to thirty border prints, tie them with the same ribbon as the invitations, and the gift arrives finished — no frame to buy, no mat to cut. A stack of bordered prints reads as a keepsake before it's even untied, because the border already did the framing." },

      { type: "h3", id: "use-garland", text: "7. The Garland: Border Prints on a String" },
      { type: "p", text: "String, mini clips, and a run of border prints above the bar or along a shelf. The white borders catch the light and read as a row of small windows, and guests walk the string like a gallery. Let the string sag on purpose — a soft sag reads as memory, not decor." },

      { type: "h3", id: "use-place-settings", text: "8. Place Settings: Border Plus Name" },
      { type: "p", text: "One bordered print per seat, the guest's name on the border, a photo of them with the couple if you have it. It's a place card, a favor, and a moment of being seen in one print. Print the names in a simple typeface, then hand-write one welcome line beneath." },

      { type: "h3", id: "use-thank-you", text: "9. Thank-You Inserts: Border Plus Caption" },
      { type: "p", text: "Tuck one bordered print into each thank-you envelope with a caption on the border — the moment you shared, not the gift. The border does the emotional heavy lifting so the note doesn't have to. People keep the memory; they recycle the inventory." },

      { type: "h3", id: "use-save-the-date", text: "10. Save-the-Date Inserts: Border Plus Date" },
      { type: "p", text: "A bordered print with the date hand-written on the border, tucked into the save-the-date envelope, does double duty: it's the announcement and the keepsake in one card. Because the border leaves room for the date, you never have to choose between the photo and the information." },

      { type: "h3", id: "tech-size-math", text: "11. Border Size Math: Match the Print" },
      { type: "p", text: "The border has to fit the print, not the other way around. On a 4×6 a quarter-inch border reads right; a half-inch border on the same print starts to shrink the image. As the print grows, the border can grow — but always as a fraction of the print, never a fixed size across every format. The size guide has the margin math for each format." },

      { type: "h3", id: "tech-caption", text: "12. Caption Text: One Line, Not a Paragraph" },
      { type: "p", text: "A caption belongs on the border, and it gets one line: a date, a place, or the joke only the two of you get. A paragraph on the border turns the mat into a footnote and crowds the image. One line is the whole charm; the border should still read as a margin, not a margin note." },

      { type: "h3", id: "tech-date-stamp", text: "13. The Discreet Date Stamp" },
      { type: "p", text: "A small date stamp in the corner of the border — hand-written or printed small — dates the print without dating the look. It's the difference between a photo from a day and a photo of a day. Keep it small and in the corner; a date the size of the caption competes with it." },

      { type: "h3", id: "tech-matte", text: "14. Matte vs Glossy for Borders: Matte Wins" },
      { type: "p", text: "For anything with a border, matte wins. Borders get handled — flipped, stacked, tucked into envelopes — and matte resists the fingerprints that make a white border grey. Glossy gives the image a nostalgic sheen, but on a border it doubles the glare. The finish guide has the full reasoning; for borders, matte is the honest choice." },

      { type: "h3", id: "tech-album", text: "15. Border vs No-Border in an Album: Choose One" },
      { type: "p", text: "In an album, choose either bordered pages or frameless pages — never both. A bordered print on a frameless page is a frame inside a frame, and the image drowns in margins. If the album pages are frameless, print without borders; if the page has a built-in mat, the border is redundant. One system, one voice, one album." },
      { type: "ad", slot: "mid-article" },

      { type: "h2", id: "the-border-rules", text: "The Border Rules at a Glance" },
      { type: "table", caption: "Choosing the border by style, thickness, and finish", headers: ["Style", "Thickness", "Best for", "Finish"], rows: [
        ["White thin", "¼ inch", "Scrapbook pages, thank-yous", "matte"],
        ["White thick", "½ inch", "Gift stacks, display, place settings", "matte"],
        ["Black", "¼–½ inch", "Black-and-white sets only", "matte or lustre"],
        ["Colored (matched)", "¼ inch", "A set pulled from the photo's palette", "matte"],
        ["Caption border", "¼ inch + one line", "Save-the-dates, thank-yous", "matte"],
      ]},

      { type: "h2", id: "what-couples-get-wrong", text: "What Most Couples Get Wrong" },
      { type: "p", text: "The most common miss is a border too thick for the job — it drowns the image and reads as a frame trying too hard. Second is a colored border that clashes with the palette instead of coming from it, which turns the mat into a sticker. Third is glossy under a border, which doubles the glare and greys the white edge under fingerprints. And the last is borders on formal album pages, where the border competes with the page's own frame. A border works because it's quiet; the moment it asks for attention, it stops working." },
      { type: "ad", slot: "before-faq" },

      { type: "h2", id: "harpers-tips-borders", text: "Harper's Tips & What I've Learned" },
      { type: "p", text: "Print one sheet of the same photo at three border weights before the full run. The right thickness announces itself the moment you hold the three side by side — you'll feel it before you can explain it." },
      { type: "p", text: "Write the captions before the prints go anywhere. A caption added after the print is tucked into an envelope is a caption that never gets written, and the border that was meant to hold it stays blank." },
      { type: "quote", text: "A border doesn't make a photo honest. It just gives an honest photo a place to sit.", cite: "Harper, from 400+ sessions" },
      { type: "p", text: "The border prints that get used the most are never the ones with the most decoration. They're the ones with a white edge, one line of caption, and a job to do. Restraint is what makes a border read as a frame instead of a filter." },

      { type: "faq", items: [
        { q: "What makes a border print look retro?", a: "The ratio and the white edge. A white border around a near-square or 2×3 print matches the shapes old film cameras made — print at those source ratios on matte cardstock and the retro look is built in. The border is doing the framing; you're just printing it." },
        { q: "How thick should a photo border be?", a: "A quarter inch for discreet jobs like scrapbook pages and thank-you inserts, and a half inch for gifts and display where the border itself is part of the object. Always scale the border as a fraction of the print, never one fixed size across every format." },
        { q: "Glossy or matte for border prints?", a: "Matte. Borders get handled — flipped, stacked, tucked into envelopes — and matte resists the fingerprints that turn a white border grey. Glossy gives a nostalgic sheen, but under a border it doubles the glare. For borders, matte is the honest choice." },
        { q: "Can I put a caption on the border?", a: "Yes — that's one of the border's three jobs, along with matting the image and signaling retro. But one line only: a date, a place, or the inside joke. A paragraph turns the mat into a footnote; one line is the whole charm." },
        { q: "Should album prints have borders?", a: "Only if the album page is frameless. If the page already has a built-in mat, a border is a frame inside a frame and the image drowns in margins. Choose one system — bordered pages or frameless pages — never both in the same album." },
        { q: "Can a border be a color?", a: "Yes, but only when it's matched to the photo's palette, not used to decorate. One muted tone pulled from the image — sage, dusty rose — at most two or three tones across the set. A colored border that doesn't come from the photo reads as a sticker." },
      ]},

      { type: "leadMagnet", title: "The Border Spec Card", subtitle: "Thickness, color, finish, and caption rules on one card — so every border print you order is decided before the cart.", bullets: ["The thin-vs-thick decision by job", "The white/black/colored rules, matched to the photo", "The margin math for every print size"], cta: "Get the Border Spec Card" },

      { type: "shop", section: "prints", items: [
        { label: "Border print service", store: "Print lab", href: "#" },
        { label: "Matte cardstock (border prints)", store: "Paper shop", href: "#" },
        { label: "Mini clips for garlands", store: "Craft store", href: "#" },
      ]},

      { type: "p", text: "It's fifty years later, and the scrapbook still opens flat on the kitchen table. The white borders have gone a shade warmer, the captions have gone soft at the edges, and every photo still looks like it was printed yesterday. That's the whole point. A border isn't decoration. It's the frame you print — and the one that's still there." },

      { type: "keepReading", items: [
        { label: "Polaroid Style Prints", to: "/engagement-photo-prints/polaroid-style-prints", note: "The border's famous cousin, in every size" },
        { label: "Photo Print Sizes Guide", to: "/engagement-photo-prints/photo-print-sizes-guide", note: "The margin math for every format" },
        { label: "Glossy or Matte Prints", to: "/engagement-photo-prints/glossy-or-matte-prints", note: "Why matte wins under a border" },
      ]},
    ],
  },
];
