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

export const WINTER_POSTS: Post[] = [
  {
    slug: "winter-engagement-photo-ideas",
    title: "Winter Engagement Photo Ideas: 15 Ways to Embrace the Cold",
    seoTitle: "Winter Engagement Photo Ideas: 15 Ways to Embrace the Cold",
    seoDescription:
      "Winter engagement photo ideas that turn cold into cozy: snow, mist, bare branches and warm layers. 15 ideas that embrace the season, not fight it.",
    excerpt:
      "Cold hands, warm light. These 15 winter engagement photo ideas lean into snow, mist and bare branches instead of fighting the cold — and the layers are half the story.",
    category: "ideas",
    date: "2026-09-10",
    dateModified: "2026-09-10",
    featuredImage: IMAGES.gallerySilhouette,
    featuredAlt: "couple in warm winter layers embracing on a misty morning for engagement photos",
    tags: ["winter", "cozy", "seasonal", "snow", "layers"],
    author: harper,
    primaryKeyword: "winter engagement photos",
    cluster: "engagement-photo-ideas",
    relatedPosts: ["black-and-white-engagement-photos", "casual-engagement-photo-ideas", "best-outfits-engagement-photos"],
    internalLinks: [
      { url: "/engagement-photo-ideas/black-and-white-engagement-photos", anchor: "black and white engagement photos" },
      { url: "/engagement-photo-ideas/casual-engagement-photo-ideas", anchor: "casual engagement photo ideas" },
      { url: "/engagement-photo-outfits/best-outfits-engagement-photos", anchor: "best outfits for engagement photos" },
      { url: "/engagement-photo-locations/outdoor-engagement-photo-locations", anchor: "outdoor engagement photo locations" },
    ],
    monetization: M,
    pinImages: [
      { image: IMAGES.gallerySilhouette, overlayText: "Cold Hands, Warm Light", pinTitle: "Winter Engagement Photo Ideas: 15 Ways to Embrace the Cold", pinDescription: "Snow, mist, bare branches and warm layers — 15 winter engagement photo ideas that lean into the cold instead of fighting it. Save this for your winter shoot." },
      { image: IMAGES.galleryLaugh, overlayText: "Layers Are the Story", pinTitle: "Cozy Winter Layers That Photograph Beautifully", pinDescription: "The right layers make a winter engagement session. Chunky knits, scarves, warm light — the looks that keep you warm and the photos timeless. Save it." },
      { image: IMAGES.hero, overlayText: "Mist Is Your Friend", pinTitle: "Misty Mornings: The Winter Light Every Couple Wants", pinDescription: "Fog and mist turn a cold morning into soft, dreamy light. How to shoot a misty winter engagement session. Save for your winter session." },
    ],
    blocks: [
      { type: "p", text: "The couples who dread a winter engagement session are usually picturing the wrong thing: stiff, cold, miserable frames. The sessions I remember from winter are the opposite — warm hands around a shared coffee, breath visible in the cold, a scarf pulled up to one chin. Winter isn't a season to fight; it's a season to lean into. After 400+ sessions, I can tell you the winter shoots are often the most honest, because the cold strips away the posing. You can't hold a stiff pose when your cheeks are pink and you're laughing to stay warm. These 15 ideas embrace the cold instead of apologizing for it." },

      { type: "keyTakeaways", items: [
        "Winter light is soft all day — you're not limited to golden hour.",
        "Layers are the story: chunky knits, scarves, warm hands.",
        "Mist, snow and bare branches are built-in texture.",
        "Cold pink cheeks read as warmth, not discomfort.",
      ]},

      { type: "h2", id: "why-winter-works", text: "Why Winter Works Better Than You Think" },
      { type: "p", text: "Winter light is soft, even and forgiving all day long — no harsh midday shadows, no squinting. A grey winter sky is a giant softbox, and a misty morning is the dreamiest light you'll ever shoot in. Add bare branches, frost and snow as natural texture and you have a backdrop that no studio can fake. And because the cold keeps you close — hands in one coat pocket, shoulders touching — the frames come out intimate by default." },
      { type: "ad", slot: "after-first-h2" },

      { type: "h2", id: "the-15-ideas", text: "The 15 Ideas" },

      { type: "h3", id: "shared-coffee", text: "1. Shared Coffee, Two Hands" },
      { type: "p", text: "One warm drink, two hands around it, breath steaming in the cold. It's the single most honest winter frame — warm hands, pink cheeks, and a real reason to be close." },

      { type: "h3", id: "misty-walk", text: "2. A Misty Morning Walk" },
      { type: "p", text: "Fog turns a plain field into a dreamscape. Walk slowly into the mist, hand in hand, and let the white swallow the background. It's the softest light of the year." },

      { type: "h3", id: "breath-frames", text: "3. Breath in the Cold" },
      { type: "p", text: "Visible breath is winter's signature. A quiet kiss or a laugh where you can see your breath reads as pure season — it's the frame that says 'winter' without a single snowflake." },

      { type: "h3", id: "scarf-frame", text: "4. The Shared Scarf" },
      { type: "p", text: "One long scarf around two necks. It's cozy, it's a little silly, and it forces the kind of closeness that makes a frame feel earned." },

      { type: "h3", id: "bare-branches", text: "5. Silhouettes in Bare Branches" },
      { type: "p", text: "Winter trees are graphic — bare branches against a pale sky make clean, dramatic silhouettes. A kiss or an embrace against that skeletal backdrop is quiet and strong." },

      { type: "h3", id: "snow-dust", text: "6. Let It Snow On You" },
      { type: "p", text: "If it snows, don't rush inside. Stand in it, look up, let it land on your shoulders and hair. Snowflakes in the hair are the frames couples print." },

      { type: "h3", id: "hand-pocket", text: "7. Hands in One Pocket" },
      { type: "p", text: "Both your hands in one coat pocket. It's warm, it's intimate, and it's the kind of small, unposed gesture that reads as real life." },

      { type: "h3", id: "warm-layers", text: "8. Chunky Knits & Layers" },
      { type: "p", text: "Layer up in chunky knits, coats and scarves in a coordinated palette. Texture reads beautifully in soft winter light, and the layers tell the season's story without a word." },

      { type: "h3", id: "first-snow-dance", text: "9. A Slow Dance in the Cold" },
      { type: "p", text: "A slow dance with no music, breath visible, wrapped in coats. It's quiet, a little ridiculous, and completely romantic." },

      { type: "h3", id: "hot-chocolate", text: "10. Hot Chocolate on a Bench" },
      { type: "p", text: "Two mugs, one bench, steam rising. It's the coziest frame in the book, and it gives your hands something warm to hold while the camera does its work." },

      { type: "h3", id: "frost-detail", text: "11. Frost on the Details" },
      { type: "p", text: "Frost on a leaf, a car window, a blade of grass — shoot the small stuff. A macro of frost beside the ring is a detail frame people keep." },

      { type: "h3", id: "golden-winter", text: "12. Winter Golden Hour" },
      { type: "p", text: "Winter sun sits low all day, so golden light lasts longer. A backlit walk at 4pm in January gives you that warm rim light for an hour, not twenty minutes." },

      { type: "h3", id: "umbrella-frame", text: "13. One Umbrella, Two People" },
      { type: "p", text: "If it rains or sleets, share one umbrella and lean in. The umbrella frames the two of you and the weather becomes the mood." },

      { type: "h3", id: "cold-cheeks", text: "14. Cold Cheeks, Real Laugh" },
      { type: "p", text: "By minute ten your cheeks are pink and you're laughing to stay warm. Don't wipe the pink away — it reads as warmth and life, and it's the most flattering 'blush' there is." },

      { type: "h3", id: "end-of-day-glow", text: "15. The End-of-Day Glow" },
      { type: "p", text: "The last frame: wrapped in coats, holding hands, walking back as the light goes soft and blue. It's the quiet goodbye that closes a winter session perfectly." },
      { type: "ad", slot: "mid-article" },

      { type: "h2", id: "what-couples-get-wrong", text: "What Most Couples Get Wrong" },
      { type: "p", text: "The biggest winter mistake is dressing for the photo instead of the weather — a thin dress in the cold reads as miserable, not elegant. Dress warm, then make the warm look intentional. Second is fighting the grey: a grey sky is a softbox, not a letdown. Third is rushing inside the moment it gets cold — the best winter frames happen in the last ten minutes, when the light goes soft and blue. And last, skipping the layers: layers are the texture of winter, and a session with no layers has no season in it at all." },
      { type: "ad", slot: "before-faq" },

      { type: "h2", id: "harpers-tips-winter", text: "Harper's Tips & What I've Learned" },
      { type: "p", text: "Keep hand warmers in a pocket and use them between frames, not during. Cold hands make stiff photos; warm hands relax the whole body. The two minutes of warmth buy you ten minutes of natural frames." },
      { type: "p", text: "Shoot the in-between: the walk back to the car, the laugh at frozen fingers, the scarf pulled over one ear. The unposed winter moments are the ones that make a couple say 'that's us.'" },
      { type: "quote", text: "Winter doesn't make you pose less. It makes you pose less on purpose.", cite: "Harper, from 400+ sessions" },
      { type: "p", text: "The winter couples I remember best are the ones who stopped trying to look warm and just got warm. The cold is the collaborator. Let it in, and the frames come out honest." },

      { type: "faq", items: [
        { q: "Is winter a bad time for engagement photos?", a: "No — winter is one of the best times. The light is soft all day, there are no harsh shadows, and mist, snow and bare branches add natural texture you can't fake. The cold also keeps couples close, which reads as intimacy. Many of my favorite sessions were winter shoots." },
        { q: "What should we wear for winter engagement photos?", a: "Dress warm, then make it intentional. Chunky knits, coats, scarves and layers in a coordinated palette read beautifully in soft winter light. Layers are the texture of winter, and warm hands make relaxed photos. Avoid thin dresses in the cold." },
        { q: "What if it's grey and overcast?", a: "A grey sky is a softbox, not a letdown. Overcast winter light is soft, even and flattering, with no harsh shadows or squinting. Misty mornings are even better — they turn a plain field into a dreamscape." },
        { q: "How do we stay warm without ruining the photos?", a: "Use hand warmers between frames, not during. Wear warm layers you can keep on, and let your cheeks go pink — it reads as warmth and life. Warm hands relax the whole body and make natural frames." },
        { q: "What if it snows during our session?", a: "Celebrate it. Snow is the one weather event that elevates an engagement session. Let it land on your shoulders and hair, stand in it, look up. Snowflakes in the hair are the frames couples print." },
        { q: "How long should a winter session last?", a: "Keep it shorter than a summer session — 45 to 60 minutes is plenty, because the cold has a limit. Plan the must-haves first, shoot the details when hands are warm, and end on the soft end-of-day light." },
      ]},

      { type: "leadMagnet", title: "The Winter Session Prep Card", subtitle: "Everything for a warm, honest winter session: what to wear, when to shoot, and the cold-weather kit that keeps hands warm and photos natural.", bullets: ["The winter layer formula, palette by palette", "When to shoot: mist, snow, and end-of-day glow", "The cold-weather kit: hand warmers, scarves, spares"], cta: "Get the Winter Session Prep Card" },

      { type: "shop", section: "outfits", items: [
        { label: "Chunky cable knit", store: "Outfitter", href: "#" },
        { label: "Wool scarf (camel)", store: "Outfitter", href: "#" },
        { label: "Hand warmers (pack)", store: "Outfitter", href: "#" },
      ]},

      { type: "p", text: "It's the end of the session and the light has gone soft and blue. Your cheeks are pink, your hands are finally warm again, and the scarf is pulled up to one chin. You look at each other and laugh at the cold, and the camera catches it — and it's the frame that ends up on the mantel. That's the whole point of a winter session. The cold isn't the obstacle. It's the reason the photo feels like the two of you." },

      { type: "keepReading", items: [
        { label: "Black and White Engagement Photos", to: "/engagement-photo-ideas/black-and-white-engagement-photos", note: "The timeless look that flatters winter light" },
        { label: "Casual Engagement Photo Ideas", to: "/engagement-photo-ideas/casual-engagement-photo-ideas", note: "Real-life ideas that work in any season" },
        { label: "Best Outfits for Engagement Photos", to: "/engagement-photo-outfits/best-outfits-engagement-photos", note: "The layer formula, season by season" },
      ]},
    ],
  },
];
