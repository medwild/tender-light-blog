import { IMAGES } from "../lib/constants";
import type { Author, Post } from "./types";

const harper: Author = {
  handle: "harper-ellis",
  name: "Harper Ellis",
  role: "Founder & Engagement Photo Editor",
  bio: "Harper spent 8 years behind the lens shooting 400+ engagement and wedding sessions across the US before trading her camera for a keyboard. Based in Austin and married to her high school sweetheart, she writes the warm, practical guides every couple deserves.",
  avatar: IMAGES.about,
  instagram: "@tenderlight.journal",
};

const M = { adsense: true, affiliate: false, leadMagnet: true };

export const WEDDING_CHECKLIST_POSTS: Post[] = [
  {
    slug: "wedding-photo-checklist",
    title: "Wedding Day Checklist: 47 Photo & Logistics Details That Save the Album",
    seoTitle: "Wedding Day Checklist: 47 Photo & Logistics Details",
    seoDescription:
      "A wedding day checklist built by a photographer: 47 photo and logistics details — the timeline, formals, displays, QR setup, delegation and vendor handoff.",
    excerpt:
      "One couple's album was missing the grandmother, the first dance and the cake cutting — all because nobody owned the photo timeline. These are the 47 photo and logistics details that keep a wedding day from leaking out of the album.",
    category: "tips",
    date: "2026-09-10",
    dateModified: "2026-09-10",
    featuredImage: IMAGES.classicDip,
    featuredAlt: "a wedding photographer checking the timeline card beside a couple on their wedding day",
    tags: ["wedding checklist", "photo timeline", "delegation", "formals", "wedding logistics"],
    author: harper,
    primaryKeyword: "wedding day checklist",
    cluster: "wedding-day-logistics",
    relatedPosts: ["save-the-date-photo-ideas", "engagement-photo-albums", "proposal-poses"],
    internalLinks: [
      { url: "/engagement-photo-prints/engagement-photo-albums", anchor: "engagement photo albums" },
      { url: "/save-the-date-photos/save-the-date-photo-ideas", anchor: "save the date photo ideas" },
      { url: "/save-the-date-photos/proposal-poses", anchor: "proposal poses" },
      { url: "/engagement-photo-prints/mini-photo-print-ideas", anchor: "mini photo print ideas" },
    ],
    monetization: M,
    pinImages: [
      { image: IMAGES.classicDip, overlayText: "47 Details, One Album", pinTitle: "Wedding Day Checklist: 47 Photo & Logistics Details", pinDescription: "The photo timeline, family formals, displays, QR codes and delegation that keep your wedding day from leaking out of the album. Save the checklist." },
      { image: IMAGES.galleryLaugh, overlayText: "Own the Timeline", pinTitle: "The Wedding Photo Timeline That Saves the Album", pinDescription: "The golden-hour block, the formals list, the candid coverage — the photo timeline every couple should own before the wedding. Save it." },
      { image: IMAGES.galleryRing, overlayText: "Delegate the Photos", pinTitle: "Who Runs the Family Formals? (Not You.)", pinDescription: "One named person with the list, a photographer who shoots, and formals under twenty minutes. The delegation that saves your wedding day." },
    ],
    blocks: [
      { type: "p", text: "The album was beautiful — and it was missing the grandmother, the first dance, and the cake cutting. Not because the photographer missed them. Because nobody owned the list of moments, so the day simply moved past them. After 400+ sessions, I can tell you the albums that feel complete are never the luckiest days. They're the days where one person held the photo timeline the way a conductor holds a score. A wedding day is a logistics problem before it's an art problem. This checklist is the 47 details that keep a wedding day from leaking out of the album — the timeline, the formals, the displays, the tech, and the delegation that decides how it all gets captured." },

      { type: "keyTakeaways", items: [
        "One person owns the photo timeline — a wedding day with no conductor leaks moments.",
        "Family formals need a named list-runner, not the couple; keep them under twenty minutes.",
        "Protect a 60–90 minute golden-hour block like the ceremony itself.",
        "Displays, QR codes and the photo station are set up by 3 p.m., or they don't happen.",
      ]},

      { type: "h2", id: "why-photo-logistics-get-skipped", text: "Why the Photo Logistics Get Skipped" },
      { type: "p", text: "Couples plan the ceremony to the minute and the flowers to the stem, then hand the photography to chance. The reason is simple: the visible day has a checklist everyone knows — venue, food, dress. The photo day has a checklist nobody hands you, because it only exists once you've shot a hundred weddings and watched the same moments go missing. The first dance gets skipped because the timeline ran long. The grandmother gets missed because she left early and nobody flagged her. The displays never go up because there was no name on the task. None of it is hard. It's just unassigned. The 47 details below are that hidden checklist, made visible and assignable." },
      { type: "ad", slot: "after-first-h2" },

      { type: "h2", id: "the-47-details", text: "The 47 Photo & Logistics Details" },
      { type: "list", items: [
        "Assign one named person to own the photo timeline — the conductor, not the couple.",
        "Send the final shot list to the photographer two weeks before the day.",
        "Flag the must-not-miss moments: the ring exchange, the vows, the first dance.",
        "List every family formal combination by name, in the exact order you'll shoot them.",
        "Name a formals list-runner (MC or gregarious relative) who wrangles while the photographer shoots.",
        "Cap family formals at twenty minutes; a long list is a leaky one.",
        "Photograph the grandmother and the elders early, before they tire and slip away.",
        "Schedule a 60–90 minute golden-hour block for couple portraits — protect it like the ceremony.",
        "Give the photographer the venue floor plan with the best-light corners marked.",
        "Confirm the venue allows flash, drones or off-camera light, in writing, before the day.",
        "Tell the DJ or band the couple's entrance song before the day, not at the door.",
        "Flag the first dance song with the photographer so they're in position, not chasing it.",
        "Assign someone to gather the detail shots: rings, dress, shoes, bouquet, invitation suite.",
        "Set aside the rings with the best man, photographed in good light, not on a nightstand.",
        "Photograph the invitation suite flat-lay once, early, before it's scattered.",
        "Capture the getting-ready room wide and the candid details before the chaos peaks.",
        "Photograph the dress hanging in window light before it's on.",
        "Get the boutonniere pinned-on shot before it wilts.",
        "Photograph the shoes with the dress, once, on purpose.",
        "Capture a getting-ready portrait of each parent, separately, on purpose.",
        "Photograph the couple's first look, if you have one — the reaction, not the setup.",
        "Photograph the ceremony wide, then tight on hands and rings during the vows.",
        "Capture the kiss from two angles — one wide, one tight — assign both before the ceremony.",
        "Photograph the recessional as the couple walks out, faces to the crowd.",
        "Capture the guests' reactions during the vows — assign a second angle if you can.",
        "Photograph the reception room empty, set and lit, before guests arrive.",
        "Photograph the place settings, centerpieces and favors once, styled, before they're touched.",
        "Capture the cake before it's cut, whole and styled.",
        "Photograph the cake cutting from the front and one side.",
        "Photograph the toast-giver mid-speech, and the couple listening.",
        "Capture the first dance wide, then a tight frame of hands and faces.",
        "Photograph the bouquet toss from the crowd's side, the catch and the reaction.",
        "Photograph the garter toss only if the couple wants it — confirm the day before.",
        "Capture the send-off (sparklers, bubbles, car) with the couple briefed on the count.",
        "Photograph the couple's exit wide, with the guests in frame.",
        "Set up the photo display — printed photos, frames, the engagement board — by 3 p.m.",
        "Set up the guest-book photo station with the instant camera, tape and pens by 3 p.m.",
        "Set up the wedding website QR code cards at the entrance and on the tables by 3 p.m.",
        "Test every QR code on two phones the day before, not the day of.",
        "Print enough QR cards for every table plus ten spares, in one batch so the paper matches.",
        "Set up the hashtag sign or frame where guests will actually photograph.",
        "Assign someone to flip the slideshow or photo loop running at the reception.",
        "Hand the photographer the tip envelopes, labeled by vendor, at the start of the day.",
        "Confirm every vendor arrival time in writing the week before.",
        "Get the venue teardown window and who owns what, before the day.",
        "Charge the photo station, the guestbook camera, and a backup power bank the night before.",
        "Do a final walk-through of the display locations with your design person the week before.",
      ]},
      { type: "ad", slot: "mid-article" },

      { type: "h2", id: "what-couples-get-wrong", text: "What Most Couples Get Wrong" },
      { type: "p", text: "The most common miss is the unowned timeline: the couple assumes the photographer knows what to capture, and the photographer assumes the couple will say. Nobody's wrong, and the moments leak. The second is formals that run long because nobody wrangled them; a formals list with no runner takes an hour and eats the golden-hour block. The third is the displays and QR codes that never go up, because 'someone' was supposed to do it and 'someone' was dancing. And the last is photographing the day's end without a plan: the send-off happens once, in a crowd, on a count nobody rehearsed. Assign, cap, set up early, and rehearse the one-shot moments. That's the whole discipline." },
      { type: "ad", slot: "before-faq" },

      { type: "h2", id: "harpers-tips-logistics", text: "Harper's Tips & What I've Learned" },
      { type: "p", text: "Print the timeline and the formals list on paper and hand one to the conductor, one to the formals-runner, and one to the photographer. A phone list gets buried in notifications; a paper card lives in a hand. The day runs on paper." },
      { type: "p", text: "The moments that matter most are the ones nobody is posing for. Assign the photographer to the reactions — the parent wiping a tear, the friend who flew in, the grandmother laughing — because those are the frames that end up above the mantel, and they only happen once." },
      { type: "quote", text: "A wedding day is a logistics problem before it's an art problem. Solve the first and the second takes care of itself.", cite: "Harper, from 400+ sessions" },
      { type: "p", text: "The couples whose albums feel complete aren't the ones with the fanciest weddings. They're the ones where one person held the list, the formals ran short, and the displays went up at three. Completeness isn't luck. It's the forty-seven details, assigned." },

      { type: "faq", items: [
        { q: "Who should own the wedding photo timeline?", a: "One named person — the conductor — who isn't the couple and isn't the photographer. They hold the shot list and the clock, flag the must-not-miss moments, and keep the formals running. A wedding day with no conductor leaks the moments nobody's watching." },
        { q: "How do we keep family formals from taking all day?", a: "Write every combination by name, in order, and hand the list to a named runner — the MC or a gregarious relative — while the photographer shoots. Cap the list at twenty minutes; the runner wrangles, the photographer shoots, and the list keeps it honest." },
        { q: "Is the golden-hour portrait block really worth protecting?", a: "Yes — protect 60–90 minutes around golden hour the way you'd protect the ceremony itself. It produces the portraits you'll frame and hang, and guests won't notice the gap. Let the timeline bend elsewhere, not there." },
        { q: "When should the photo displays and QR codes go up?", a: "By 3 p.m., or they don't happen — the evening belongs to the party. Assign one person to set up the displays, the guestbook photo station and the QR cards by mid-afternoon, and test every QR code on two phones the day before." },
        { q: "How do we make sure nobody important gets missed?", a: "Flag the elders and the must-not-miss people by name on the shot list, and photograph them early, before they tire and slip away. The grandmother doesn't wait for the golden-hour block; the list has to reach her first." },
        { q: "Do we really need a printed timeline?", a: "Yes — print the timeline and the formals list on paper, one for the conductor, one for the runner, one for the photographer. A phone list gets buried in notifications on the busiest day of your life. A paper card lives in a hand, and the day runs on it." },
      ]},

      { type: "leadMagnet", title: "The Wedding Photo Timeline Card", subtitle: "All 47 details on one printable card — the timeline, the formals list, the 3 p.m. setup, and the delegation — so one person can conduct the day.", bullets: ["The 47 details, grouped and assignable", "The family formals list template", "The 3 p.m. display-and-QR setup list"], cta: "Get the Wedding Photo Timeline Card" },

      { type: "p", text: "It's the end of the night, and the conductor folds the paper card, creased soft from a day in her hand. The grandmother is in the album. The first dance is in the album. The cake cutting, the send-off, the friend who flew in — all of it, because one person held the list and the day bent around it. That's the whole secret. A wedding day doesn't photograph itself. It gets photographed by whoever owns the list." },

      { type: "keepReading", items: [
        { label: "Engagement Photo Albums", to: "/engagement-photo-prints/engagement-photo-albums", note: "Where the day you just saved gets kept" },
        { label: "Save the Date Photo Ideas", to: "/save-the-date-photos/save-the-date-photo-ideas", note: "The frames that go out before the day" },
        { label: "Proposal Poses", to: "/save-the-date-photos/proposal-poses", note: "The moment that started the whole list" },
      ]},
    ],
  },
];
