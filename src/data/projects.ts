// =====================================================================================
// PROJECTS DATA — single source of truth for the whole site.
//
// To ADD a project: add a new object to the `projects` array below.
// To REMOVE a project: delete its object (or set `hidden: true` to keep it but hide it).
// To ADD an award icon to a project's hero: add it to that project's `awards` array —
//   all award icons render at the SAME size automatically (see AwardsRow component).
// To reorder the homepage grid: reorder the `projects` array.
//
// Media (images/videos) referenced by `video:` keys point to Vimeo IDs — see
// `src/data/vimeoMap.ts` for the id -> Vimeo mapping. Local files (imported from
// src/assets) are used for stills, thumbnails, and any video not yet migrated to Vimeo.
// =====================================================================================

export interface Award {
  /** Path to the award badge image (local import or URL) */
  icon: string;
  /** Accessible label, e.g. "GEMA Gold — HBO Max" */
  label: string;
}

export interface MediaBlock {
  type: 'video' | 'image' | 'image-row' | 'text' | 'divider' | 'credits' | 'stacked-images';
  /** For video: a vimeoId (preferred) or a local mp4 import as fallback */
  vimeoId?: string;
  localSrc?: string;
  poster?: string;
  /** For image / image-row */
  src?: string | string[];
  alt?: string | string[];
  /** Layout hint */
  width?: 'full' | 'wide' | 'medium' | 'narrow' | 'half'; // maps to consistent max-width classes
  /** For text blocks */
  heading?: string;
  body?: string;
  /** For credits blocks */
  lines?: string[];
  /** Player chrome for videos */
  autoplayLoop?: boolean; // silent looping background-style video
  playable?: boolean; // click-to-play with our minimal player
  protected?: boolean; // requires password gate (off by default, all work is released)
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  role: string; // shown on the case-study hero overlay
  thumbnail: string; // grid thumbnail image
  logo?: string; // client logo shown on thumbnail hover
  logoBlendMode?: 'screen' | 'normal';
  heroVideo?: { vimeoId?: string; localSrc?: string };
  heroImage?: string;
  awards?: Award[];
  intro?: { heading?: string; body: string[] };
  sections: MediaBlock[];
  credits: string[];
  hidden?: boolean;
}

// -------------------------------------------------------------------------------------
// Local asset imports (stills + fallback videos not yet on Vimeo)
// -------------------------------------------------------------------------------------
import heroMain from '@/assets/hero-main.png';
import thumbnail1 from '@/assets/thumbnail-1.png';
import thumbnail2 from '@/assets/thumbnail-2.png';
import thumbnail4 from '@/assets/thumbnail-4.jpg';
import thumbnail5 from '@/assets/thumbnail-5.png';

import hboLogo from '@/assets/hbo-logo.png';
import edekaLogo from '@/assets/edeka-logo.png';
import klarnaLogo from '@/assets/klarna-logo.png';
import mobotixLogo from '@/assets/mobotix-logo.png';
import primeVideoLogo from '@/assets/prime-video-logo.png';
import animationsLogo from '@/assets/animations-logo.gif';
import woltLogo from '@/assets/wolt-logo.png';
import mcdonaldsLogo from '@/assets/mcdonalds-logo.png';
import hpTakeoverLogo from '@/assets/hp-takeover-logo-transparent.png';

import primeVideoThumb from '@/assets/prime-video-thumb.jpg';
import hpTakeoverThumb from '@/assets/hp-takeover-thumb.png';
import animationsThumb from '@/assets/animations-thumb.png';
import printsThumb from '@/assets/prints-3.jpg';
import woltThumb from '@/assets/wolt-thumb.jpg';
import mcdonaldsThumb from '@/assets/mcdonalds-thumb.png';

// Awards — NOTE: these 4 files are Lovable-hosted placeholders (see BUILD NOTES).
// Replace with real files in src/assets/awards/ once you export them from Lovable.
import gemaAwardsRow from '@/assets/gema-awards-row.png.asset.json';
import omniAwardWhite from '@/assets/omni-award-white.png.asset.json';
import awardsMobo from '@/assets/awards-mobo.png';
import awardsPreviewPrints from '@/assets/awards-preview-prints.png';

import hboScreenshot1 from '@/assets/hbo-screenshot-1.png';
import hboScreenshot2 from '@/assets/hbo-screenshot-2.png';
import hboScreenshot3 from '@/assets/hbo-screenshot-3.png';
import hboScreenshot4 from '@/assets/hbo-screenshot-4.png';
import hboMockup1 from '@/assets/hbo-mockup-1.png';
import hboMockup2 from '@/assets/hbo-mockup-2.png';
import hboMockup3 from '@/assets/hbo-mockup-3.png';
import hboMockup4 from '@/assets/hbo-mockup-4.png';
import hboMockup5 from '@/assets/hbo-mockup-5.png';
import hboMockup6 from '@/assets/hbo-mockup-6.png';
import hboMockup7 from '@/assets/hbo-mockup-7.png';
import hboMedia15 from '@/assets/hbo-media-15.jpg';
import hboMedia16 from '@/assets/hbo-media-16.jpg';
import hboMedia17 from '@/assets/hbo-media-17-new.jpg';

import edekaComments2 from '@/assets/edeka-comments-2.png';
import edekaViewCount from '@/assets/edeka-view-count.png';

import klarnaBackstage1 from '@/assets/klarna-backstage-1.png';
import klarnaBackstage2 from '@/assets/klarna-backstage-2.png';
import klarnaReezy from '@/assets/klarna-reezy.jpg';
import klarnaBaochi from '@/assets/klarna-baochi.jpg';

import primeVideoCase from '@/assets/prime-video-case.png';
import primeVideoScreenshot from '@/assets/prime-video-screenshot.png';

import hpCaseBoard from '@/assets/hp-case-board.jpg';

import woltPage1 from '@/assets/wolt-page-1.jpg';
import woltPage2 from '@/assets/wolt-page-2.jpg';
import woltPage3 from '@/assets/wolt-page-3.jpg';
import woltPage4 from '@/assets/wolt-page-4.jpg';

import prints1 from '@/assets/prints-1.jpg';
import prints2 from '@/assets/prints-2.jpg';
import prints3 from '@/assets/prints-3.jpg';
import prints4 from '@/assets/prints-4.png';
import prints5 from '@/assets/prints-5.png';
import prints6 from '@/assets/prints-6.png';

// Local video fallbacks (used until you send Vimeo links to swap in)
import showreelLocal from '@/assets/showreel.mp4';
import billboardVideoLocal from '@/assets/billboard-video.mp4';
import project1VideoLocal from '@/assets/project-1-video.mp4';
import project2VideoLocal from '@/assets/project-2-video.mp4';
import robotFilmVideoLocal from '@/assets/robot-film-video.mp4';
import klarnaVideoLocal from '@/assets/klarna-video.mp4';
import klarnaSandstormLocal from '@/assets/klarna-sandstorm.mp4';
import klarnaFrozenLocal from '@/assets/klarna-frozen.mp4';
import klarnaRadiationLocal from '@/assets/klarna-radiation.mp4';
import klarnaDoohLocal from '@/assets/klarna-dooh.mp4';
import mobotixTeaseLocal from '@/assets/mobotix-tease.mp4';
import mobotixFullLocal from '@/assets/mobotix-full.mp4';
import mobotixFull2Local from '@/assets/mobotix-full-2.mp4';
import primeVideoMainLocal from '@/assets/prime-video-main.mp4';
import primeVideoLoopLocal from '@/assets/prime-video-loop.mp4';
import hpTakeoverHeaderLocal from '@/assets/hp-takeover-header.mp4';
import hpTakeoverMainLocal from '@/assets/hp-takeover-main.mp4';
import animationsHeaderLocal from '@/assets/animations-header.mp4';
import animationsVideo1Local from '@/assets/animations-video-1.mp4';
import animationsVideo2Local from '@/assets/animations-video-2.mp4';
import animationsVideo3Local from '@/assets/animations-video-3.mp4';
import animationsVideo4Local from '@/assets/animations-video-4.mp4';
import animationsVideo5Local from '@/assets/animations-video-5.mp4';
import animationsVideo6Local from '@/assets/animations-video-6.mp4';
import animationsVideo7Local from '@/assets/animations-video-7.mp4';
import woltHeaderLocal from '@/assets/wolt-header.mp4';
import woltVideo360Local from '@/assets/wolt_360p.mp4';
import mcdonaldsHeaderLocal from '@/assets/mcdonalds-header.mp4';
import mcdonaldsBigmacLocal from '@/assets/mcdonalds-bigmac.mp4';
import mcdonaldsMcchickenLocal from '@/assets/mcdonalds-mcchicken.mp4';
import mcdonaldsFriesLocal from '@/assets/mcdonalds-fries.mp4';
import edekaVideo2Local from '@/assets/edeka-video-2.mp4';
import edekaDanceVideoLocal from '@/assets/edeka-challenge-dance.mp4';
import edekaMelonenVideoLocal from '@/assets/edeka-challenge-melonen.mp4';
import edekaChooseCharacterVideoLocal from '@/assets/edeka-choose-character.mp4';
import hboMedia14Local from '@/assets/hbo-media-14.mp4';
import potterMedia6Local from '@/assets/potter-media-6.mp4';
import potterMedia7 from '@/assets/potter-media-7.png';
import potterMedia8Local from '@/assets/potter-media-8.mp4';
import potterMedia9 from '@/assets/potter-media-9.png';
import potterMedia10 from '@/assets/potter-media-10.png';
import potterMedia11Local from '@/assets/potter-media-11.mp4';
import potterMedia12 from '@/assets/potter-media-12.png';
import potterMedia13Local from '@/assets/potter-media-13.mp4';
import printsVideo1Local from '@/assets/prints-video-1.mp4';
import printsVideo2Local from '@/assets/prints-video-2.mp4';
import printsVideo3Local from '@/assets/prints-video-3.mp4';

// -------------------------------------------------------------------------------------
// Vimeo ID lookup — fill these in as you upload. Anything left blank falls back
// to the local mp4 automatically, so the site keeps working during migration.
// -------------------------------------------------------------------------------------
import { vimeoMap } from './vimeoMap';

// Landing hero (no thumbnail — shown only on initial page load)
export const landingHero = {
  id: 0,
  title: 'Welcome',
  image: heroMain,
  showreel: { vimeoId: vimeoMap.showreel, localSrc: showreelLocal },
};

export const projects: Project[] = [
  {
    id: 1,
    slug: 'hbo-max',
    title: 'HBO Max',
    category: 'Launch Campaign',
    role: 'CONCEPT • SCRIPT • ART DIRECTION',
    thumbnail: thumbnail1,
    logo: hboLogo,
    heroVideo: { vimeoId: vimeoMap.billboardVideo, localSrc: billboardVideoLocal },
    awards: [{ icon: gemaAwardsRow.url, label: 'GEMA Gold — HBO Max (x4)' }],
    intro: {
      heading: 'Stories that stay with you...',
      body: [
        "bbzzt… aaaaa…",
        "That sound. The moment you know a story is about to start and probably won't leave you for a long time. HBO has always been famous for stories that stay with you. For the HBO max launch in Germany, we built a film around exactly that feeling. Because you don't just watch great stories on HBO max, they spill into culture and stay with you forever.",
      ],
    },
    sections: [
      { type: 'video', vimeoId: vimeoMap.project1Video, localSrc: project1VideoLocal, poster: thumbnail1, playable: true, width: 'wide' },
      { type: 'image-row', src: [hboScreenshot1, hboScreenshot2, hboScreenshot3, hboScreenshot4], width: 'wide' },
      {
        type: 'image-row',
        src: [hboMockup1, hboMockup2, hboMockup3, hboMockup4, hboMockup5, hboMockup6, hboMockup7],
        width: 'medium',
      },
      {
        type: 'text',
        body: [
          "During the campaign work, we felt HBO's emotional damage under our skin. With an amazing team, a client who became a friend, and the crazy vision of our director, Daniel Warwick, we chased the emotional aftermath HBO Max leaves behind. We even climbed the Dolomites for a three-second shot (who needs CGI anyway?). And soon, HBO was everywhere — on the streets, on the walls, trains, in your face, with outdoor work that twisted nipples all around Germany.",
        ].join(' '),
        width: 'narrow',
      },
      {
        type: 'text',
        body: [
          "On the day HBO Max launched in Germany, a new series from the Game of Thrones universe, The Knight of the Seven Kingdoms, had its world premiere in Berlin. And we were invited.",
          "That same night, our spot was shown for the very first time during the premiere, in front of George R.R. Martin and the global film industry.",
        ].join('\n\n'),
        width: 'narrow',
      },
      { type: 'video', vimeoId: vimeoMap.hboMedia14, localSrc: hboMedia14Local, autoplayLoop: true, width: 'wide' },
      { type: 'image-row', src: [hboMedia15, hboMedia16, hboMedia17], width: 'wide' },
      {
        type: 'text',
        body: "The night was not over. Right across the street of the premiere, we prepared a big stunt for Harry Potter that went viral. HBO Max literally dominated the city and social media that night.",
        width: 'narrow',
      },
    ],
    credits: ['Agency: DOJO Berlin', 'Client: HBO Max Germany', 'Director: Daniel Warwick', 'Production: Zauberberg', 'Producer: Michael Karg', 'VFX: bEpic', 'Music: Supreme Music'],
  },

  {
    id: 11,
    slug: 'harry-potter-takeover',
    title: 'Harry Potter',
    category: 'Stunt Campaign',
    role: 'CONCEPT',
    thumbnail: hpTakeoverThumb,
    logo: hpTakeoverLogo,
    heroVideo: { vimeoId: vimeoMap.hpTakeoverHeader, localSrc: hpTakeoverHeaderLocal },
    intro: {
      heading: 'The Harry Potter Takeover',
      body: [
        "On the night of the HBO Max premiere in Berlin, right across the street from the red carpet, we staged a massive Harry Potter stunt that took over the city and went viral on social media.",
        "Dementors flew over Berlin's rooftops, magical projections lit up historic buildings, and the wizarding world spilled into the streets. The stunt was designed to make HBO Max's launch unforgettable — and it worked.",
      ],
    },
    sections: [
      { type: 'video', vimeoId: vimeoMap.hpTakeoverMain, localSrc: hpTakeoverMainLocal, playable: true, width: 'wide' },
      { type: 'image', src: hpCaseBoard, width: 'full' },
    ],
    credits: ['Agency: DOJO Berlin', 'Client: HBO Max Germany'],
  },

  {
    id: 2,
    slug: 'edeka',
    title: 'Edeka',
    category: 'A.I. Film',
    role: 'SCRIPT • A.I. FILM DIRECTION • POST PRODUCTION',
    thumbnail: thumbnail2,
    logo: edekaLogo,
    heroVideo: { vimeoId: vimeoMap.project2Video, localSrc: project2VideoLocal },
    sections: [
      { type: 'video', vimeoId: vimeoMap.robotFilmVideo, localSrc: robotFilmVideoLocal, playable: true, width: 'wide' },
      { type: 'text', body: 'After the release of the first spot, things went exactly as planned. Sh*t hit the fan. People did not receive the news calmly, and that was the point.', width: 'narrow' },
      { type: 'image', src: edekaComments2, width: 'medium' },
      {
        type: 'stacked-images',
        src: [edekaViewCount],
        alt: ['15M views in total'],
        width: 'medium',
      },
      {
        type: 'text',
        body: 'One week after the fake announcement, we dropped a second film.\nThis time with real people and real casting, revealing the truth: EDEKA is hiring humans.\nBecause no robot can replace human care. At least… not yet 🙂',
        width: 'narrow',
      },
      { type: 'video', vimeoId: vimeoMap.edekaVideo2, localSrc: edekaVideo2Local, playable: true, width: 'narrow' },
      { type: 'text', body: 'After turning our AZUBOT into the punchline, we kept the conversation going on social media, had some fun to win back the hearts of our future employees.', width: 'narrow' },
      {
        type: 'video',
        vimeoId: vimeoMap.edekaDanceVideo,
        localSrc: edekaDanceVideoLocal,
        autoplayLoop: true,
        width: 'medium',
      },
    ],
    credits: ['Agency: DOJO Berlin', 'Client: EDEKA'],
  },

  {
    id: 3,
    slug: 'klarna',
    title: 'Klarna',
    category: 'Brand Film',
    role: 'CONCEPT • ART DIRECTION',
    thumbnail: thumbnail5,
    logo: klarnaLogo,
    heroVideo: { vimeoId: vimeoMap.klarnaVideo, localSrc: klarnaVideoLocal },
    intro: {
      heading: 'Save Earth. F**k Mars.',
      body: [
        "Sandstorm, freezing weather, radiation. Sounds like a dream right? So why bother moving to a f***ing RADIOACTIVE planet instead of trying to save the earth first? With our campaign for Klarna and About You, our goal was to turn Mars travel hype into a sustainability message. We made a campaign with a group of influencers to express the urgency and importance of protecting our pale blue dot, instead of moving to the red planet.",
      ],
    },
    sections: [
      { type: 'video', vimeoId: vimeoMap.klarnaSandstorm, localSrc: klarnaSandstormLocal, playable: true, width: 'wide' },
      { type: 'video', vimeoId: vimeoMap.klarnaFrozen, localSrc: klarnaFrozenLocal, playable: true, width: 'wide' },
      { type: 'video', vimeoId: vimeoMap.klarnaRadiation, localSrc: klarnaRadiationLocal, playable: true, width: 'wide' },
      { type: 'image', src: klarnaBackstage1, width: 'wide' },
      { type: 'image', src: klarnaBackstage2, width: 'wide' },
      { type: 'image', src: klarnaReezy, width: 'wide' },
      { type: 'image', src: klarnaBaochi, width: 'wide' },
      { type: 'video', vimeoId: vimeoMap.klarnaDooh, localSrc: klarnaDoohLocal, autoplayLoop: true, width: 'wide' },
    ],
    credits: ['Agency: DOJO Berlin', 'Client: Klarna x About You', 'Director: Malin Ingrid Johansson', 'Production: Le Berg'],
  },

  {
    id: 4,
    slug: 'mobotix',
    title: 'Mobotix',
    category: 'Product Film',
    role: 'CONCEPT • SCRIPT • ART DIRECTION',
    thumbnail: thumbnail4,
    logo: mobotixLogo,
    heroVideo: { vimeoId: vimeoMap.mobotixTease, localSrc: mobotixTeaseLocal },
    awards: [{ icon: awardsMobo, label: 'Mobotix Awards' }],
    intro: {
      heading: 'IMPOSSIBLE TO ENTER.',
      body: [
        'Welcome to the Twilight Zone…or just a really bad night for burglars thanks to Mobotix security systems.',
        'We created a campaign that shows how impossible it is to enter a place that is protected by Mobotix cameras. The campaign consists of two films that show different scenarios of impossible break-in attempts.',
      ],
    },
    sections: [
      { type: 'video', vimeoId: vimeoMap.mobotixFull, localSrc: mobotixFullLocal, playable: true, width: 'wide' },
      { type: 'video', vimeoId: vimeoMap.mobotixFull2, localSrc: mobotixFull2Local, playable: true, width: 'wide' },
    ],
    credits: ['Agency: DOJO Berlin', 'Client: Mobotix'],
  },

  {
    id: 5,
    slug: 'prime-video',
    title: 'Prime Video',
    category: 'Documentary Campaign',
    role: 'ART DIRECTION • CONCEPT • SCRIPT',
    thumbnail: primeVideoThumb,
    logo: primeVideoLogo,
    heroImage: primeVideoThumb,
    sections: [
      { type: 'image', src: primeVideoCase, width: 'wide' },
      { type: 'video', vimeoId: vimeoMap.primeVideoMain, localSrc: primeVideoMainLocal, poster: primeVideoThumb, playable: true, width: 'wide' },
      {
        type: 'stacked-images',
        src: [primeVideoScreenshot],
        alt: ['Prime Video screenshot'],
        width: 'wide',
      },
    ],
    credits: ['Client: Amazon Prime Video', 'Agency: Dojo Berlin', 'Post Production: Sucuk & Bratwurst'],
  },

  {
    id: 6,
    slug: 'personal-projects',
    title: 'Personal Projects',
    category: 'Animations & Illustrations',
    role: 'ILLUSTRATOR • 2D ANIMATOR',
    thumbnail: animationsThumb,
    logo: animationsLogo,
    heroVideo: { vimeoId: vimeoMap.animationsHeader, localSrc: animationsHeaderLocal },
    awards: [{ icon: omniAwardWhite.url, label: 'OMNI 1.5 Silver AI Performance Award — The Beef' }],
    intro: {
      body: [
        'The Beef is real. 😡\nAn OMNI Award Winner AI film I made during a late-night experiment.\nSpecial thanks to Bernhard Pausch (Supreme Music) for the track that brought this video to life.',
      ],
    },
    sections: [
      { type: 'video', vimeoId: vimeoMap.animationsHeader, localSrc: animationsHeaderLocal, playable: true, width: 'wide' },
      {
        type: 'video',
        vimeoId: vimeoMap.animationsVideo1,
        localSrc: animationsVideo1Local,
        playable: true,
        width: 'wide',
      },
      { type: 'video', vimeoId: vimeoMap.animationsVideo2, localSrc: animationsVideo2Local, playable: true, width: 'wide' },
      { type: 'video', vimeoId: vimeoMap.animationsVideo3, localSrc: animationsVideo3Local, playable: true, width: 'wide' },
      { type: 'video', vimeoId: vimeoMap.animationsVideo4, localSrc: animationsVideo4Local, autoplayLoop: true, width: 'medium' },
      { type: 'video', vimeoId: vimeoMap.animationsVideo5, localSrc: animationsVideo5Local, autoplayLoop: true, width: 'medium' },
      { type: 'video', vimeoId: vimeoMap.animationsVideo6, localSrc: animationsVideo6Local, autoplayLoop: true, width: 'medium' },
      { type: 'video', vimeoId: vimeoMap.animationsVideo7, localSrc: animationsVideo7Local, autoplayLoop: true, width: 'medium' },
    ],
    credits: [],
  },

  {
    id: 9,
    slug: 'mcdonalds',
    title: "McDonald's",
    category: 'TV Commercial',
    role: 'ART DIRECTION • CONCEPT • SCRIPT',
    thumbnail: mcdonaldsThumb,
    logo: mcdonaldsLogo,
    heroVideo: { vimeoId: vimeoMap.mcdonaldsHeader, localSrc: mcdonaldsHeaderLocal },
    sections: [
      { type: 'video', vimeoId: vimeoMap.mcdonaldsBigmac, localSrc: mcdonaldsBigmacLocal, playable: true, width: 'wide' },
      { type: 'video', vimeoId: vimeoMap.mcdonaldsMcchicken, localSrc: mcdonaldsMcchickenLocal, playable: true, width: 'wide' },
      { type: 'video', vimeoId: vimeoMap.mcdonaldsFries, localSrc: mcdonaldsFriesLocal, playable: true, width: 'wide' },
    ],
    credits: ["Client: McDonald's", 'Advertising Agency: TBWA\\ISTANBUL', 'Production Company: Anima Istanbul', 'Director: Stjephan Klein', 'Post Production: Telesine', 'Music: Jingle Jackson'],
  },

  {
    id: 8,
    slug: 'wolt',
    title: 'Wolt',
    category: 'Brand Campaign',
    role: 'ART DIRECTION • CONCEPT • CHARACTER DESIGN',
    thumbnail: woltThumb,
    logo: woltLogo,
    logoBlendMode: 'screen',
    heroVideo: { vimeoId: vimeoMap.woltHeader, localSrc: woltHeaderLocal },
    sections: [
      { type: 'image-row', src: [woltPage1, woltPage2, woltPage3, woltPage4], width: 'full' },
      { type: 'video', vimeoId: vimeoMap.woltVideo360, localSrc: woltVideo360Local, autoplayLoop: true, width: 'medium' },
    ],
    credits: ['Client: Wolt', 'Agency: Dojo Berlin'],
  },

  {
    id: 7,
    slug: 'print-ads',
    title: 'Print Ads',
    category: '',
    role: 'ART DIRECTION • CONCEPT',
    thumbnail: printsThumb,
    heroImage: printsThumb,
    awards: [{ icon: awardsPreviewPrints, label: 'IKEA / Spotify Awards' }],
    sections: [
      { type: 'image', src: prints4, alt: 'IKEA Sofa print ad', width: 'wide' },
      { type: 'image-row', src: [prints5, prints6], width: 'wide' },
      { type: 'image', src: prints3, alt: 'IKEA Shelf print ad', width: 'wide' },
      { type: 'image-row', src: [prints1, prints2], width: 'wide' },
      { type: 'video', vimeoId: vimeoMap.printsVideo1, localSrc: printsVideo1Local, autoplayLoop: true, width: 'wide' },
      { type: 'video', vimeoId: vimeoMap.printsVideo2, localSrc: printsVideo2Local, autoplayLoop: true, width: 'medium' },
      { type: 'video', vimeoId: vimeoMap.printsVideo3, localSrc: printsVideo3Local, autoplayLoop: true, width: 'medium' },
    ],
    credits: ['Client: Ikea', 'Agency: TBWA\\Istanbul'],
  },
];

export const orderedIds = projects.filter((p) => !p.hidden).map((p) => p.id);

export function getProject(id: number) {
  return projects.find((p) => p.id === id);
}

export function getAdjacentProjects(id: number) {
  const idx = orderedIds.indexOf(id);
  if (idx === -1) return { prev: undefined, next: undefined };
  const prevId = orderedIds[(idx - 1 + orderedIds.length) % orderedIds.length];
  const nextId = orderedIds[(idx + 1) % orderedIds.length];
  return { prev: getProject(prevId), next: getProject(nextId) };
}
