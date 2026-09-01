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

export const TRUE_DIGITAL_POSTS: Post[] = [
  {
    slug: "true-digital-prints",
    title: "True Digital Prints Explained: 16 Sizes, Ratios & Decisions",
    seoTitle: "True Digital Prints Explained: Sizes & Ratios",
    seoDescription:
      "True digital prints explained in plain language: what the lab term means, the ratio your camera shoots, and when true digital beats standard sizes.",
    excerpt:
      "The lab asked if you wanted true digital, and you said yes without knowing what it meant. This is the plain-language explainer: what the term means, the ratio your camera actually shoots, and when true digital is the right call.",
    category: "tips",
    date: "2026-08-23",
    dateModified: "2026-09-10",
    featuredImage: IMAGES.galleryRing,
    featuredAlt: "a flat lay of photo prints in different ratios beside a camera and a measuring guide",
    tags: ["true digital", "print sizes", "ratios", "photo printing"],
    author: harper,
    primaryKeyword: "true digital prints",
    cluster: "engagement-photo-prints",
    relatedPosts: ["photo-print-sizes-guide", "glossy-or-matte-prints", "mini-photo-print-ideas"],
    internalLinks: [
      { url: "/engagement-photo-prints/photo-print-sizes-guide", anchor: "photo print sizes guide" },
      { url: "/engagement-photo-prints/glossy-or-matte-prints", anchor: "glossy or matte prints" },
      { url: "/engagement-photo-prints/mini-photo-print-ideas", anchor: "mini photo print ideas" },
      { url: "/engagement-photo-prints/locket-photo-print-guide", anchor: "locket photo print guide" },
    ],
    monetization: M,
    pinImages: [
      { image: IMAGES.galleryRing, overlayText: "True Digital, Explained", pinTitle: "True Digital Prints, Explained in Plain Language", pinDescription: "What the lab term actually means, the ratio your camera shoots, and when true digital beats standard sizes. Save before your next print order." },
      { image: IMAGES.galleryTwirl, overlayText: "The Ratio Matters", pinTitle: "The Ratio Your Camera Shoots (and Why It Matters)", pinDescription: "Your camera shoots one ratio, the print paper is another — and the gap is what crops your photo. Learn the math before you order." },
      { image: IMAGES.galleryLaugh, overlayText: "16 Sizes & Decisions", pinTitle: "True Digital vs Standard: 16 Sizes & Decisions", pinDescription: "Sixteen true digital sizes and the decision for each — which to order, which to skip, and why. Save the decision chart." },
    ],
    blocks: [
      { type: "p", text: "The lab asked if you wanted true digital, and you said yes, because it sounded right, and then your 8×10 came back with the top of her head missing. That's not a lab error. It's a ratio problem, and it's the single most common print mistake I see. After 400+ sessions, I can tell you true digital isn't a quality tier — it's a size family built around the ratio your camera actually shoots. This guide is the plain-language explainer: what the term means, why your camera shoots a different shape than the paper, and sixteen sizes and the decision for each. By the end, you'll know when true digital is the right call and when a standard size is." },

      { type: "keyTakeaways", items: [
        "True digital isn't a quality tier — it's the size family built around your camera's native ratio.",
        "Your camera shoots one ratio; print paper is another; the gap is what crops your photo.",
        "Match the print ratio to the file ratio, or accept the crop on purpose.",
        "The decision is file ratio first, then use, then size.",
      ]},

      { type: "h2", id: "what-true-digital-means", text: "What True Digital Actually Means" },
      { type: "p", text: "Here's the plain truth: your camera shoots in one ratio — most phones shoot 3:4, most DSLRs shoot 2:3 — and print paper comes in a different one. An 8×10 is a 4:5 ratio; a 4×6 is a 2:3 ratio. When the lab prints your file onto paper of a different ratio, something has to give, and that's the crop. True digital is the lab's size family built to match the most common camera ratios, so your file prints with little or no crop. It's not better quality. It's a better fit. That's the whole thing, and nobody at the counter ever explains it." },
      { type: "ad", slot: "after-first-h2" },

      { type: "h2", id: "the-16-decisions", text: "The 16 Sizes & Decisions" },
      { type: "h3", id: "td-wallet", text: "1. The True-Digital Wallet (2×3)" },
      { type: "p", text: "The smallest true digital, built for the wallet and the pocket. It matches the phone ratio, so nothing crops. It's the size you order by the dozen for gifts and wallets, and it's the one people actually carry." },
      { type: "h3", id: "td-4x5", text: "2. The 4×5 (Phone Ratio, Small)" },
      { type: "p", text: "A phone-ratio print a step up from the wallet. It's the size for small frames and desk display, and it keeps the full phone frame. It's the true digital you order when the wallet's too small and the 5×7's too big." },
      { type: "h3", id: "td-4x6", text: "3. The 4×6 (The 2:3 Standard)" },
      { type: "p", text: "The 4×6 is a 2:3 ratio, which matches most DSLRs and the classic print size. If your camera shoots 2:3, this is your native size and the crop is zero. It's the workhorse print, and the one most people mean when they say photo print." },
      { type: "h3", id: "td-5x7", text: "4. The 5×7 (Near-Standard)" },
      { type: "p", text: "The 5×7 is a 5:7 ratio, close to 2:3 but not exact, so a 2:3 file crops slightly. It's the size people reach for when they want a step up from the 4×6, and the crop is small enough most people never notice. It's a fine choice, just know the math." },
      { type: "h3", id: "td-8x10", text: "5. The 8×10 (The Crop Trap)" },
      { type: "p", text: "The 8×10 is a 4:5 ratio, and it's the crop trap. A 2:3 phone file printed to 8×10 loses the top and bottom; that's where her head went. If you want an 8×10, order a true-digital 8×10 built for your ratio, or accept the crop on purpose. This is the single most-misordered size." },
      { type: "h3", id: "td-8x12", text: "6. The 8×12 (The 2:3 Step-Up)" },
      { type: "p", text: "The 8×12 is a 2:3 ratio, the true step-up for a 2:3 file. It's the 8×10's better sibling: same presence, zero crop for a 2:3 file. If you've been ordering 8×10s that crop, the 8×12 is the fix." },
      { type: "h3", id: "td-11x14", text: "7. The 11×14 (Mid-Wall)" },
      { type: "p", text: "The 11×14 is the mid-wall size, big enough to hang and small enough for most walls. It's a near-standard ratio, so a 2:3 file crops slightly. It's the size for the first real frame you hang, and the crop is gentle." },
      { type: "h3", id: "td-12x18", text: "8. The 12×18 (The 2:3 Wall)" },
      { type: "p", text: "The 12×18 is a 2:3 ratio, the true wall size for a 2:3 file. It's the 11×14's better sibling for a 2:3 camera: same wall presence, zero crop. If you shoot 2:3 and want a wall print, this is the native size." },
      { type: "h3", id: "td-16x20", text: "9. The 16×20 (The Statement Crop)" },
      { type: "p", text: "The 16×20 is a 4:5 ratio, so a 2:3 file crops. It's the statement size, and the crop is noticeable, so order the true-digital version or crop on purpose in the edit. It's the size for the one big frame, and the math matters most here." },
      { type: "h3", id: "td-16x24", text: "10. The 16×24 (The 2:3 Statement)" },
      { type: "p", text: "The 16×24 is a 2:3 ratio, the true statement size for a 2:3 file. It's the 16×20's better sibling: same statement, zero crop. If you want one big frame and you shoot 2:3, this is the native size to order." },
      { type: "h3", id: "td-20x30", text: "11. The 20×30 (The Large 2:3)" },
      { type: "p", text: "The 20×30 is a 2:3 ratio, the large format for a 2:3 file. It's the size for the big wall in the living room, and it's native to a 2:3 camera. It's the largest common 2:3 size, and it keeps the full frame." },
      { type: "h3", id: "td-24x36", text: "12. The 24×36 (The Poster 2:3)" },
      { type: "p", text: "The 24×36 is a 2:3 ratio, the poster size for a 2:3 file. It's the size for the couple that wants a photograph on the wall, not above the sofa. It's native to a 2:3 camera and keeps the full frame at poster scale." },
      { type: "h3", id: "td-square", text: "13. The Square (The Phone Crop)" },
      { type: "p", text: "The square is the crop most phones apply for social. It's a 1:1 ratio, and it's not native to most print paper, so it crops from both ratios. It's the size for the grid, and the one to crop on purpose in the edit, not at the lab." },
      { type: "h3", id: "td-pano", text: "14. The Panoramic (The Wide)" },
      { type: "p", text: "The panoramic is the wide format, a long ratio no standard paper matches, so it's printed as a custom. It's the size for the landscape, and the one that rewards a wide frame. It's a custom order, and it's worth it for the right shot." },
      { type: "h3", id: "td-minis", text: "15. The Mini True Digitals" },
      { type: "p", text: "The mini true digitals — the wallet, the magnet, the tiny card — are the sizes that match the phone ratio and crop nothing. They're the sizes you order by the dozen, and the ones that keep the full frame. They're the cheap, generous end of true digital." },
      { type: "h3", id: "td-decision", text: "16. The Decision: Ratio First, Then Use, Then Size" },
      { type: "p", text: "The decision is three steps: first, know your file's ratio (phone is 3:4, DSLR is usually 2:3). Second, decide the use (wallet, wall, gift). Third, pick the size whose ratio matches your file, or accept the crop on purpose. Ratio first, use second, size third. That's the whole method, and it ends the crop surprises." },
      { type: "ad", slot: "mid-article" },

      { type: "h2", id: "the-ratio-chart", text: "The Ratio Chart at a Glance" },
      { type: "table", caption: "True digital sizes by camera ratio", headers: ["Print size", "Ratio", "Matches", "Crop from 2:3"], rows: [
        ["2×3 wallet", "2:3", "DSLR + phone", "none"],
        ["4×6", "2:3", "DSLR", "none"],
        ["5×7", "5:7", "near-2:3", "slight"],
        ["8×10", "4:5", "neither", "noticeable"],
        ["8×12", "2:3", "DSLR", "none"],
        ["11×14", "11:14", "near-2:3", "slight"],
        ["12×18", "2:3", "DSLR", "none"],
        ["16×20", "4:5", "neither", "noticeable"],
        ["16×24", "2:3", "DSLR", "none"],
        ["20×30", "2:3", "DSLR", "none"],
        ["24×36", "2:3", "DSLR", "none"],
        ["square", "1:1", "phone crop", "from both"],
        ["panoramic", "custom", "wide frames", "custom"],
        ["minis", "varies", "phone", "none"],
      ]},

      { type: "h2", id: "what-couples-get-wrong", text: "What Most Couples Get Wrong" },
      { type: "p", text: "The most common miss is ordering an 8×10 and losing the top of the photo to the 4:5 crop — the crop trap, and the reason her head went missing. Second is assuming true digital is a quality upgrade; it's a ratio family, not a quality tier, so don't pay more expecting sharper. Third is cropping at the lab by accident instead of cropping on purpose in the edit. And the last is ordering by size before knowing the file's ratio. Know the ratio first; the sizes follow. That one habit ends every crop surprise." },
      { type: "ad", slot: "before-faq" },

      { type: "h2", id: "harpers-tips-td", text: "Harper's Tips & What I've Learned" },
      { type: "p", text: "Find out your file's ratio before you order anything. On a phone it's usually 3:4; on a DSLR it's usually 2:3, and your photographer knows in two seconds. One question, asked early, ends every crop surprise. It's the cheapest piece of advice in printing." },
      { type: "p", text: "When in doubt, order the 2:3 family. The 4×6, the 8×12, the 12×18, the 16×24, the 20×30, the 24×36 — they're the sizes that match a 2:3 file with zero crop, and they cover wallet to poster. If your camera shoots 2:3, the whole ladder fits." },
      { type: "quote", text: "The print doesn't crop your photo. Your ratio does. The print just reveals it.", cite: "Harper, from 400+ sessions" },
      { type: "p", text: "The couples who never get a crop surprise are the ones who learned one thing: ratio first, size second. Everything else in printing — the paper, the finish, the frame — is a decision you can change. The ratio is the one you make once, at the camera, and carry forever. Learn yours." },

      { type: "faq", items: [
        { q: "What are true digital prints?", a: "True digital is the lab's size family built around the most common camera ratios, so your file prints with little or no crop. It's not a quality tier — it's a better fit between your file's ratio and the paper. Same quality as a standard print, less cropping." },
        { q: "What ratio does my camera shoot?", a: "Most phones shoot 3:4 and most DSLRs shoot 2:3. Your photographer knows in two seconds, and it's in your phone's camera settings. It's the one number that decides which print sizes fit your file without cropping." },
        { q: "Why did my 8×10 crop my photo?", a: "An 8×10 is a 4:5 ratio, and your file is probably 2:3 or 3:4, so the lab cropped the top and bottom to fit the paper. That's the crop trap. Order a true-digital 8×10 built for your ratio, or an 8×12 if you shoot 2:3." },
        { q: "Are true digital prints better quality?", a: "No — true digital is a size family, not a quality tier. The print quality is the same as a standard print; true digital just matches your file's ratio so less of it gets cropped. Don't pay more expecting sharper." },
        { q: "Which print sizes match a 2:3 camera?", a: "The whole 2:3 ladder: 2×3, 4×6, 8×12, 12×18, 16×24, 20×30, and 24×36. They run wallet to poster with zero crop from a 2:3 file. If your camera shoots 2:3, order from this ladder and the crop disappears." },
        { q: "Square or standard for social and print?", a: "The square is the phone's social crop, a 1:1 ratio that crops from both file and paper ratios. Crop it on purpose in the edit, not at the lab. For prints, stay in your file's native ratio; for the grid, square on purpose." },
      ]},

      { type: "leadMagnet", title: "The Ratio Cheat Card", subtitle: "Your file's ratio, the print ladder that matches it, and the crop traps to avoid — on one card for your next print order.", bullets: ["The 2:3 and 3:4 print ladders", "The crop traps (8×10, square, panoramic)", "The ratio-first decision method"], cta: "Get the Ratio Cheat Card" },
      { type: "shop", section: "prints", items: [
        { label: "Calibrated 24\" photo monitor for crop-checking", store: "Amazon", href: "#" },
        { label: "Archival fine-art print service credit", store: "Etsy", href: "#" },
        { label: "Print-ladder sizing ruler (wallet to wall)", store: "Amazon", href: "#" },
      ]},

      { type: "p", text: "It's the next print order, and she types the sizes without thinking: 8×12, 12×18, 16×24. The ratio she learned in two seconds, carried into every order after. When the prints arrive, nothing is cropped, because nothing needed to be. That's the whole point. A ratio isn't a technical detail. It's the difference between the photo you shot and the photo you get." },

      { type: "keepReading", items: [
        { label: "Photo Print Sizes Guide", to: "/engagement-photo-prints/photo-print-sizes-guide", note: "The full spectrum, wallet to wall" },
        { label: "Glossy or Matte Prints", to: "/engagement-photo-prints/glossy-or-matte-prints", note: "The finish, once the ratio is right" },
        { label: "Locket Photo Print Guide", to: "/engagement-photo-prints/locket-photo-print-guide", note: "The smallest ratio of all" },
      ]},
    ],
  },
];
