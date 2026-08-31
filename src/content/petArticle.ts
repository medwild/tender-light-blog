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

export const PET_POSTS: Post[] = [
  {
    slug: "pet-engagement-photos",
    title: "Pet Engagement Photos: 15 Ideas That Actually Work",
    seoTitle: "Pet Engagement Photos: 15 Ideas That Actually Work",
    seoDescription:
      "Pet engagement photos with your dog or cat that actually work: 15 ideas with treats, timing and positioning that keep the pet in the frame.",
    excerpt:
      "Your dog is the third person in the relationship. These 15 pet engagement photo ideas use treats, timing and positioning to keep the pet in the frame — not running out of it.",
    category: "ideas",
    date: "2026-09-10",
    dateModified: "2026-09-10",
    featuredImage: IMAGES.galleryLaugh,
    featuredAlt: "couple laughing with their dog during a pet engagement photo session",
    tags: ["pet", "dog", "pet photos", "candid", "fun"],
    author: harper,
    primaryKeyword: "pet engagement photos",
    cluster: "engagement-photo-ideas",
    relatedPosts: ["casual-engagement-photo-ideas", "scenario-based-engagement-poses", "how-to-smile-naturally-in-photos"],
    internalLinks: [
      { url: "/engagement-photo-ideas/casual-engagement-photo-ideas", anchor: "casual engagement photo ideas" },
      { url: "/engagement-photo-poses/scenario-based-engagement-poses", anchor: "scenario-based engagement poses" },
      { url: "/engagement-photo-poses/how-to-smile-naturally-in-photos", anchor: "how to smile naturally in photos" },
      { url: "/engagement-photo-ideas/black-and-white-engagement-photos", anchor: "black and white engagement photos" },
    ],
    monetization: M,
    pinImages: [
      { image: IMAGES.galleryLaugh, overlayText: "The Third Person", pinTitle: "Pet Engagement Photos: 15 Ideas That Actually Work", pinDescription: "Your dog is part of the engagement. 15 pet engagement photo ideas with treats, timing and positioning that keep the pet in the frame. Save for your shoot." },
      { image: IMAGES.galleryRing, overlayText: "Treats Are the Key", pinTitle: "The Treat Trick for Pet Engagement Photos", pinDescription: "The secret to pet engagement photos is the treat in the right hand at the right time. How to keep your dog looking at you both. Save it." },
      { image: IMAGES.hero, overlayText: "Let Them Lead", pinTitle: "Let the Pet Lead: Candid Pet Engagement Ideas", pinDescription: "The best pet engagement photos are the ones where the pet is doing its thing. Ideas for letting your dog lead the session. Save it." },
    ],
    blocks: [
      { type: "p", text: "The best pet engagement photos are the ones where the pet is doing exactly what it wants to do — because the moment you try to make a dog pose, you've lost it. After 400+ sessions, the pet frames couples love are never the stiff sit-and-stay shots. They're the dog mid-sprint, the cat judging from the windowsill, the lab with its head on your knee. The trick isn't control; it's setup. You create the situation, the pet does the rest. These 15 ideas use treats, timing and positioning to keep the pet in the frame — not running out of it." },

      { type: "keyTakeaways", items: [
        "Treats in the right hand, at the right time, do the posing.",
        "Let the pet lead — the candid moments are the keepers.",
        "A second pair of hands is worth more than a perfect pose.",
        "Short sessions keep the pet engaged and the photos natural.",
      ]},

      { type: "h2", id: "why-pets-work", text: "Why Pets Make Better Photos Than You Think" },
      { type: "p", text: "A pet is the best director you'll ever have, because it refuses to be directed. The moment a dog bursts into the frame, the couple stops performing and starts reacting — and that reaction is the photo. Pets also give your hands something to do and your eyes somewhere honest to look. And because pets are pure present-moment, they pull you into the now, which is exactly where the best photos live." },
      { type: "ad", slot: "after-first-h2" },

      { type: "h2", id: "the-15-ideas", text: "The 15 Ideas" },

      { type: "h3", id: "head-on-knee", text: "1. Head on Your Knee" },
      { type: "p", text: "Sitting on a bench with the dog's head on your knee is the classic for a reason. It's warm, it's intimate, and the dog is completely at ease. Hold a treat near the camera and the dog looks exactly where you want." },

      { type: "h3", id: "mid-sprint", text: "2. The Mid-Sprint Burst" },
      { type: "p", text: "Throw the ball and shoot the sprint. A dog at full run, ears back, tongue out, is pure joy — and it pulls the couple into a real laugh. This is the frame that makes the whole session." },

      { type: "h3", id: "treat-look", text: "3. The Treat Look" },
      { type: "p", text: "Hold a treat just above the camera and the dog looks up at both of you with total devotion. It's the single most reliable way to get the pet looking where you want, and it reads as love, not training." },

      { type: "h3", id: "walk-together", text: "4. The Three-of-You Walk" },
      { type: "p", text: "Walk away from the camera, dog between you, leash loose. A three-of-you walk from behind is one of the most honest engagement frames there is — it's just your life, moving." },

      { type: "h3", id: "cat-windowsill", text: "5. The Cat on the Windowsill" },
      { type: "p", text: "Cats won't perform, but they'll judge. A cat on a windowsill, backlit, with the couple soft in the background is a quiet, elegant frame. Let the cat be the star; it will be anyway." },

      { type: "h3", id: "tug-of-war", text: "6. Tug-of-War" },
      { type: "p", text: "A gentle tug-of-war with a rope toy gets the dog engaged and the couple laughing. It's playful, it's active, and it's the kind of frame that says 'this is our life.'" },

      { type: "h3", id: "lap-sit", text: "7. The Lap Sit" },
      { type: "p", text: "A small dog on a lap, or a big dog trying to be a lap dog, is instant comedy and warmth. The contrast between the dog's size and its confidence is the frame." },

      { type: "h3", id: "peek-frame", text: "8. The Peek Over the Shoulder" },
      { type: "p", text: "A couple embracing with the dog peeking around a shoulder or between the two of you. It's the frame that says the pet is part of the family, not an accessory." },

      { type: "h3", id: "fetch-anticipation", text: "9. The Fetch Anticipation" },
      { type: "p", text: "The moment before the throw — the dog coiled, eyes locked on the ball, body ready. Shoot the anticipation, not the fetch. The coiled energy is the frame." },

      { type: "h3", id: "nose-boop", text: "10. The Nose Boop" },
      { type: "p", text: "A gentle nose-to-nose or a kiss on the top of the head. It's tender, it's brief, and it's the frame that melts everyone who sees it." },

      { type: "h3", id: "golden-hour-silhouette", text: "11. The Golden-Hour Silhouette" },
      { type: "p", text: "The three of you against a low sun — two legs and four, all in silhouette. It's the most romantic pet frame there is, and it needs no posing at all." },

      { type: "h3", id: "treat-trade", text: "12. The Treat Trade" },
      { type: "p", text: "A 'shake' or a high-five for a treat, caught mid-motion. The paw-up is the frame, and the dog's focused face is pure character." },

      { type: "h3", id: "couch-cuddle", text: "13. The Couch Cuddle" },
      { type: "p", text: "For a cozy, at-home session: the three of you on the couch, dog in the middle, warm light. It's the frame that says home, and it's the one couples keep on the wall." },

      { type: "h3", id: "zoomies", text: "14. The Zoomies" },
      { type: "p", text: "Every dog has zoomies. Let them happen, then shoot the chaos. A dog at full zoomies with a couple laughing in the background is pure, unrepeatable joy." },

      { type: "h3", id: "the-goodbye", text: "15. The Tired Goodbye" },
      { type: "p", text: "By the end, the dog is tired and leans its whole weight against you. That full-body lean is the frame that says trust. End the session on it." },
      { type: "ad", slot: "mid-article" },

      { type: "h2", id: "what-couples-get-wrong", text: "What Most Couples Get Wrong" },
      { type: "p", text: "The biggest mistake is trying to make the pet perform. The moment you say 'sit and stay,' the pet is no longer itself, and the photo loses everything that made it worth taking. Second is skipping the helper: one person can't hold the leash, hold the treat, and hold the partner. Bring a friend to wrangle. Third is a long session — pets lose interest fast, so shoot the pet frames first, in the first thirty minutes, while the pet is fresh. And last, clean the pet before the session: a brushed coat and wiped paws make all the difference in close-ups." },
      { type: "ad", slot: "before-faq" },

      { type: "h2", id: "harpers-tips-pets", text: "Harper's Tips & What I've Learned" },
      { type: "p", text: "Feed the pet a little before the session, not right before — a satisfied pet is calm, a hungry pet is a vacuum. And keep the favorite treat for the camera, not the walk. The treat is the currency; spend it where it counts." },
      { type: "p", text: "Let the pet break the pose. Every time the dog interrupts the embrace or the cat walks across the frame, let it stay. The interrupted frame is almost always better than the clean one, because it's real." },
      { type: "quote", text: "A pet won't pose for you. It'll be itself — which is better.", cite: "Harper, from 400+ sessions" },
      { type: "p", text: "The couples with the best pet frames are the ones who treated the pet like a collaborator, not a prop. The pet sets the pace, breaks the tension, and steals the show. Let it." },

      { type: "faq", items: [
        { q: "How do we get our dog to look at the camera?", a: "Hold a treat just above the camera and the dog looks up at both of you with total devotion. It's the most reliable trick there is, and it reads as love, not training. Keep the favorite treat for the camera, not the walk." },
        { q: "Should we bring a helper for a pet session?", a: "Yes, absolutely. One person can't hold the leash, the treat, and the partner at once. A friend to wrangle the pet between frames is worth more than any perfect pose, and keeps the pet calm and the couple relaxed." },
        { q: "How long should a pet engagement session last?", a: "Keep it shorter than usual — shoot the pet frames first, in the first thirty minutes, while the pet is fresh and interested. Pets lose interest fast, so front-load the pet shots and keep the session relaxed." },
        { q: "What if our cat won't cooperate?", a: "Cats won't perform, so don't ask them to. Let the cat be itself — a cat on a windowsill, backlit, with the couple soft in the background is a beautiful frame. Let the cat be the star; it will be anyway." },
        { q: "How do we prepare our pet for the session?", a: "Brush the coat, wipe the paws, and feed the pet a little before the session (not right before, or it's a vacuum). A satisfied, clean pet is calm and photographs beautifully." },
        { q: "Should we do pet photos at home or outside?", a: "Both work. At home gives you the cozy couch-cuddle frames and your cat's favorite spot; outside gives you sprints, fetch and golden-hour silhouettes. Many couples do a short home session plus an outdoor walk." },
      ]},

      { type: "leadMagnet", title: "The Pet Session Prep Card", subtitle: "Everything for a relaxed pet session: the treat plan, the helper's job, and the 30-minute pet-first timeline.", bullets: ["The treat plan: what, when, and who holds it", "The helper's job: leash, treats, calm", "The pet-first 30-minute timeline"], cta: "Get the Pet Session Prep Card" },

      { type: "shop", section: "prints", items: [
        { label: "High-value treats", store: "Pet shop", href: "#" },
        { label: "Pet grooming brush", store: "Pet shop", href: "#" },
        { label: "Pet photo blanket", store: "Pet shop", href: "#" },
      ]},

      { type: "p", text: "It's the end of the session and the dog is tired, leaning its whole weight against you, tongue out, completely done. You look down and laugh, and your partner looks down too, and the camera catches the three of you exactly as you are — a little messy, a little tired, completely yours. That's the frame that goes on the mantel. The pet didn't pose once. That's why it works." },

      { type: "keepReading", items: [
        { label: "Casual Engagement Photo Ideas", to: "/engagement-photo-ideas/casual-engagement-photo-ideas", note: "Real-life ideas that work with or without a pet" },
        { label: "Scenario-Based Engagement Poses", to: "/engagement-photo-poses/scenario-based-engagement-poses", note: "Action prompts that keep everyone (including the dog) natural" },
        { label: "How to Smile Naturally in Photos", to: "/engagement-photo-poses/how-to-smile-naturally-in-photos", note: "The real laugh, every time" },
      ]},
    ],
  },
];
