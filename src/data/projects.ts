// =====================================================================================
// PROJECTS DATA — Netflix-style layout.
//
// Each project appears in every category row whose tag it carries.
// e.g. HBO Max carries ['film', 'award'] → shown in Film row AND Award Winning row.
//
// - To add a project: append a new object to `projects`.
// - To remove a project: delete it (or set hidden: true).
// - To feature a project on the landing hero: add its slug to `FEATURED_SLUGS` below.
// - To reorder within a row: reorder `projects` (rows preserve order).
// =====================================================================================

import { vimeoMap } from './vimeoMap';

export type Category = 'film' | 'ai' | 'print' | 'award';

export interface Award {
  icon: string;
  label: string;
}

export interface MediaBlock {
  type: 'video' | 'image' | 'image-row' | 'text' | 'divider' | 'credits' | 'stacked-images';
  vimeoId?: string;
  localSrc?: string;
  poster?: string;
  src?: string | string[];
  alt?: string | string[];
  width?: 'full' | 'wide' | 'medium' | 'narrow' | 'half';
  heading?: string;
  body?: string;
  lines?: string[];
  autoplayLoop?: boolean;
  playable?: boolean;
  protected?: boolean;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  client?: string; // "HBO Max", "Klarna x About You", etc.
  categories: Category[]; // which rows this appears in
  year?: string; // shown Netflix-style on the info page
  role: string;
  /** Short Netflix-style tagline shown in the row card + on the info page header */
  tagline?: string;
  /** Longer synopsis for the info page */
  description: string;
  /** Thumbnail image shown in category rows */
  thumbnail: string;
  /** Landscape backdrop for the featured-hero + info-page top (16:9-ish) */
  backdrop?: string;
  /** Autoplay-preview video shown on hover (muted, looping, short) */
  previewVideo?: { vimeoId?: string; localSrc?: string };
  /** The actual main film that plays when you click Play on the info page */
  mainVideo: { vimeoId?: string; localSrc?: string };
  /** Client logo shown lightly on the card overlay */
  logo?: string;
  logoBlendMode?: 'screen' | 'normal';
  awards?: Award[];
  /** Additional content shown below the fold on the info page */
  sections?: MediaBlock[];
  credits: string[];
  hidden?: boolean;
}

// ------------------------------------------------------------------
// Landing hero — showreel autoplays at the very top
// ------------------------------------------------------------------
import heroMain from '@/assets/hero-main.png';
import showreelLocal from '@/assets/showreel.mp4';

export const landingHero = {
  title: 'TOLGA ÜLKÜMEN',
  tagline: 'Senior Art Director • Concept Finder • AI Filmmaker',
  poster: heroMain,
  showreel: { vimeoId: vimeoMap.showreel, localSrc: showreelLocal },
};

// Projects shown large on the landing page under the showreel hero
export const FEATURED_SLUGS = ['hbo-max', 'the-beef'];

// ------------------------------------------------------------------
// Assets
// ------------------------------------------------------------------
import thumbnail1 from '@/assets/thumbnail-1.png';
import thumbnail2 from '@/assets/thumbnail-2.png';
import thumbnail4 from '@/assets/thumbnail-4.jpg';
import thumbnail5 from '@/assets/thumbnail-5.png';
import primeVideoThumb from '@/assets/prime-video-thumb.jpg';
import hpTakeoverThumb from '@/assets/hp-takeover-thumb.png';
import animationsThumb from '@/assets/animations-thumb.png';
import printsThumb from '@/assets/prints-3.jpg';
import woltThumb from '@/assets/wolt-thumb.jpg';
import mcdonaldsThumb from '@/assets/mcdonalds-thumb.png';

import hboLogo from '@/assets/hbo-logo.png';
import edekaLogo from '@/assets/edeka-logo.png';
import klarnaLogo from '@/assets/klarna-logo.png';
import mobotixLogo from '@/assets/mobotix-logo.png';
import primeVideoLogo from '@/assets/prime-video-logo.png';
import animationsLogo from '@/assets/animations-logo.gif';
import woltLogo from '@/assets/wolt-logo.png';
import mcdonaldsLogo from '@/assets/mcdonalds-logo.png';
import hpTakeoverLogo from '@/assets/hp-takeover-logo-transparent.png';

// Award badges - real award images (placeholder-safe: falls back to text if missing)
// These 4 asset.json files point to Lovable's servers - see REBUILD_NOTES.md
import gemaAwardsRow from '@/assets/gema-awards-row.png.asset.json';
import omniAwardWhite from '@/assets/omni-award-white.png.asset.json';
import awardsMobo from '@/assets/awards-mobo.png';
import awardsPreviewPrints from '@/assets/awards-preview-prints.png';

// Case study stills
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

// Local videos (used until vimeoMap fills in)
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
import hboMedia14Local from '@/assets/hbo-media-14.mp4';
import printsVideo1Local from '@/assets/prints-video-1.mp4';
import printsVideo2Local from '@/assets/prints-video-2.mp4';
import printsVideo3Local from '@/assets/prints-video-3.mp4';

// ------------------------------------------------------------------
export const projects: Project[] = [
  {
    id: 1,
    slug: 'hbo-max',
    title: 'HBO Max',
    client: 'HBO Max Germany',
    categories: ['film', 'award'],
    year: '2025',
    role: 'Concept • Script • Art Direction',
    tagline: 'Stories that stay with you',
    description:
      "For the HBO Max launch in Germany, we built a film around the feeling that great stories don't just get watched — they spill into culture and stay with you forever. Climbing the Dolomites for a three-second shot, twisting nipples all around Germany with our OOH, and premiering the spot in front of George R.R. Martin on launch night.",
    thumbnail: thumbnail1,
    backdrop: thumbnail1,
    logo: hboLogo,
    previewVideo: { vimeoId: vimeoMap.billboardVideo, localSrc: billboardVideoLocal },
    mainVideo: { vimeoId: vimeoMap.project1Video, localSrc: project1VideoLocal },
    awards: [{ icon: gemaAwardsRow.url, label: 'GEMA Gold ×4' }],
    sections: [
      { type: 'image-row', src: [hboScreenshot1, hboScreenshot2, hboScreenshot3, hboScreenshot4], width: 'wide' },
      { type: 'image-row', src: [hboMockup1, hboMockup2, hboMockup3, hboMockup4, hboMockup5, hboMockup6, hboMockup7], width: 'wide' },
      { type: 'video', vimeoId: vimeoMap.hboMedia14, localSrc: hboMedia14Local, autoplayLoop: true, width: 'wide' },
      { type: 'image-row', src: [hboMedia15, hboMedia16, hboMedia17], width: 'wide' },
    ],
    credits: ['Agency: DOJO Berlin', 'Director: Daniel Warwick', 'Production: Zauberberg', 'Producer: Michael Karg', 'VFX: bEpic', 'Music: Supreme Music'],
  },

  {
    id: 6,
    slug: 'the-beef',
    title: 'The Beef',
    client: 'Personal / AI Film',
    categories: ['ai', 'award'],
    year: '2025',
    role: 'Writer • Director • AI Filmmaker',
    tagline: 'A late-night experiment that won a global AI award',
    description:
      'An OMNI Award winning AI film I made during a late-night experiment. Special thanks to Bernhard Pausch (Supreme Music) for the track that brought this video to life.',
    thumbnail: animationsThumb,
    backdrop: animationsThumb,
    logo: animationsLogo,
    previewVideo: { vimeoId: vimeoMap.animationsHeader, localSrc: animationsHeaderLocal },
    mainVideo: { vimeoId: vimeoMap.animationsHeader, localSrc: animationsHeaderLocal },
    awards: [{ icon: omniAwardWhite.url, label: 'OMNI 1.5 Silver — AI Performance Award' }],
    sections: [
      { type: 'video', vimeoId: vimeoMap.animationsVideo1, localSrc: animationsVideo1Local, playable: true, width: 'wide' },
      { type: 'video', vimeoId: vimeoMap.animationsVideo2, localSrc: animationsVideo2Local, playable: true, width: 'wide' },
      { type: 'video', vimeoId: vimeoMap.animationsVideo3, localSrc: animationsVideo3Local, playable: true, width: 'wide' },
      { type: 'video', vimeoId: vimeoMap.animationsVideo4, localSrc: animationsVideo4Local, autoplayLoop: true, width: 'medium' },
      { type: 'video', vimeoId: vimeoMap.animationsVideo5, localSrc: animationsVideo5Local, autoplayLoop: true, width: 'medium' },
      { type: 'video', vimeoId: vimeoMap.animationsVideo6, localSrc: animationsVideo6Local, autoplayLoop: true, width: 'medium' },
      { type: 'video', vimeoId: vimeoMap.animationsVideo7, localSrc: animationsVideo7Local, autoplayLoop: true, width: 'medium' },
    ],
    credits: ['Music: Bernhard Pausch / Supreme Music'],
  },

  {
    id: 2,
    slug: 'edeka',
    title: 'Edeka — AZUBOT',
    client: 'EDEKA',
    categories: ['ai', 'film'],
    year: '2024',
    role: 'Script • AI Film Direction • Post Production',
    tagline: 'The internet lost its mind. Exactly as planned.',
    description:
      'A fake announcement film. People did not take the news calmly — and that was the point. One week later we dropped the second film: real people, real casting, revealing EDEKA is hiring humans. Because no robot can replace human care. At least, not yet.',
    thumbnail: thumbnail2,
    backdrop: thumbnail2,
    logo: edekaLogo,
    previewVideo: { vimeoId: vimeoMap.project2Video, localSrc: project2VideoLocal },
    mainVideo: { vimeoId: vimeoMap.robotFilmVideo, localSrc: robotFilmVideoLocal },
    sections: [
      { type: 'image', src: edekaComments2, width: 'medium' },
      { type: 'stacked-images', src: [edekaViewCount], alt: ['15M views'], width: 'medium' },
      { type: 'video', vimeoId: vimeoMap.edekaVideo2, localSrc: edekaVideo2Local, playable: true, width: 'wide' },
      { type: 'video', vimeoId: vimeoMap.edekaDanceVideo, localSrc: edekaDanceVideoLocal, autoplayLoop: true, width: 'medium' },
    ],
    credits: ['Agency: DOJO Berlin', 'Client: EDEKA'],
  },

  {
    id: 3,
    slug: 'klarna',
    title: 'Klarna x About You',
    client: 'Klarna x About You',
    categories: ['film'],
    year: '2024',
    role: 'Concept • Art Direction',
    tagline: 'Save Earth. F**k Mars.',
    description:
      'Sandstorm, freezing weather, radiation. Sounds like a dream, right? So why bother moving to a radioactive planet instead of trying to save Earth first? We turned Mars-travel hype into a sustainability message with a group of influencers.',
    thumbnail: thumbnail5,
    backdrop: thumbnail5,
    logo: klarnaLogo,
    previewVideo: { vimeoId: vimeoMap.klarnaVideo, localSrc: klarnaVideoLocal },
    mainVideo: { vimeoId: vimeoMap.klarnaSandstorm, localSrc: klarnaSandstormLocal },
    sections: [
      { type: 'video', vimeoId: vimeoMap.klarnaFrozen, localSrc: klarnaFrozenLocal, playable: true, width: 'wide' },
      { type: 'video', vimeoId: vimeoMap.klarnaRadiation, localSrc: klarnaRadiationLocal, playable: true, width: 'wide' },
      { type: 'image', src: klarnaBackstage1, width: 'wide' },
      { type: 'image', src: klarnaBackstage2, width: 'wide' },
      { type: 'image', src: klarnaReezy, width: 'wide' },
      { type: 'image', src: klarnaBaochi, width: 'wide' },
      { type: 'video', vimeoId: vimeoMap.klarnaDooh, localSrc: klarnaDoohLocal, autoplayLoop: true, width: 'wide' },
    ],
    credits: ['Agency: DOJO Berlin', 'Director: Malin Ingrid Johansson', 'Production: Le Berg'],
  },

  {
    id: 4,
    slug: 'mobotix',
    title: 'Mobotix — Impossible To Enter',
    client: 'Mobotix',
    categories: ['film', 'award'],
    year: '2023',
    role: 'Concept • Script • Art Direction',
    tagline: 'A really bad night for burglars.',
    description:
      'A campaign showing how impossible it is to enter a place protected by Mobotix cameras. Two films with different scenarios of impossible break-in attempts.',
    thumbnail: thumbnail4,
    backdrop: thumbnail4,
    logo: mobotixLogo,
    previewVideo: { vimeoId: vimeoMap.mobotixTease, localSrc: mobotixTeaseLocal },
    mainVideo: { vimeoId: vimeoMap.mobotixFull, localSrc: mobotixFullLocal },
    awards: [{ icon: awardsMobo, label: 'Mobotix Awards' }],
    sections: [
      { type: 'video', vimeoId: vimeoMap.mobotixFull2, localSrc: mobotixFull2Local, playable: true, width: 'wide' },
    ],
    credits: ['Agency: DOJO Berlin', 'Client: Mobotix'],
  },

  {
    id: 5,
    slug: 'prime-video',
    title: 'Prime Video',
    client: 'Amazon Prime Video',
    categories: ['film'],
    year: '2023',
    role: 'Art Direction • Concept • Script',
    tagline: 'Documentary campaign for Prime Video',
    description: 'Documentary campaign work for Amazon Prime Video.',
    thumbnail: primeVideoThumb,
    backdrop: primeVideoThumb,
    logo: primeVideoLogo,
    previewVideo: { vimeoId: vimeoMap.primeVideoMain, localSrc: primeVideoMainLocal },
    mainVideo: { vimeoId: vimeoMap.primeVideoMain, localSrc: primeVideoMainLocal },
    sections: [
      { type: 'image', src: primeVideoCase, width: 'wide' },
      { type: 'stacked-images', src: [primeVideoScreenshot], alt: ['Prime Video screenshot'], width: 'wide' },
    ],
    credits: ['Client: Amazon Prime Video', 'Agency: Dojo Berlin', 'Post Production: Sucuk & Bratwurst'],
  },

  {
    id: 11,
    slug: 'harry-potter-takeover',
    title: 'Harry Potter — Berlin Takeover',
    client: 'HBO Max Germany',
    categories: ['film'],
    year: '2025',
    role: 'Concept',
    tagline: 'The night wizards took over Berlin',
    description:
      "On the night of HBO Max's premiere in Berlin, right across the street from the red carpet, we staged a massive Harry Potter stunt that went viral. Dementors over the rooftops, wizarding-world projections on historic buildings, the whole city taken over.",
    thumbnail: hpTakeoverThumb,
    backdrop: hpTakeoverThumb,
    logo: hpTakeoverLogo,
    previewVideo: { vimeoId: vimeoMap.hpTakeoverHeader, localSrc: hpTakeoverHeaderLocal },
    mainVideo: { vimeoId: vimeoMap.hpTakeoverMain, localSrc: hpTakeoverMainLocal },
    sections: [{ type: 'image', src: hpCaseBoard, width: 'full' }],
    credits: ['Agency: DOJO Berlin', 'Client: HBO Max Germany'],
  },

  {
    id: 9,
    slug: 'mcdonalds',
    title: "McDonald's",
    client: "McDonald's",
    categories: ['film'],
    year: '2022',
    role: 'Art Direction • Concept • Script',
    tagline: 'TV campaign for the classics',
    description: "TV commercial work for McDonald's — Big Mac, McChicken, and Fries.",
    thumbnail: mcdonaldsThumb,
    backdrop: mcdonaldsThumb,
    logo: mcdonaldsLogo,
    previewVideo: { vimeoId: vimeoMap.mcdonaldsHeader, localSrc: mcdonaldsHeaderLocal },
    mainVideo: { vimeoId: vimeoMap.mcdonaldsBigmac, localSrc: mcdonaldsBigmacLocal },
    sections: [
      { type: 'video', vimeoId: vimeoMap.mcdonaldsMcchicken, localSrc: mcdonaldsMcchickenLocal, playable: true, width: 'wide' },
      { type: 'video', vimeoId: vimeoMap.mcdonaldsFries, localSrc: mcdonaldsFriesLocal, playable: true, width: 'wide' },
    ],
    credits: ["Client: McDonald's", 'Agency: TBWA\\ISTANBUL', 'Production: Anima Istanbul', 'Director: Stjephan Klein'],
  },

  {
    id: 8,
    slug: 'wolt',
    title: 'Wolt',
    client: 'Wolt',
    categories: ['film'],
    year: '2023',
    role: 'Art Direction • Concept • Character Design',
    tagline: 'Character-led brand campaign',
    description: 'Brand campaign work for Wolt with a character-led approach across film and page design.',
    thumbnail: woltThumb,
    backdrop: woltThumb,
    logo: woltLogo,
    logoBlendMode: 'screen',
    previewVideo: { vimeoId: vimeoMap.woltHeader, localSrc: woltHeaderLocal },
    mainVideo: { vimeoId: vimeoMap.woltHeader, localSrc: woltHeaderLocal },
    sections: [
      { type: 'image-row', src: [woltPage1, woltPage2, woltPage3, woltPage4], width: 'full' },
      { type: 'video', vimeoId: vimeoMap.woltVideo360, localSrc: woltVideo360Local, autoplayLoop: true, width: 'medium' },
    ],
    credits: ['Client: Wolt', 'Agency: Dojo Berlin'],
  },

  {
    id: 7,
    slug: 'print-ads',
    title: 'Print Ads — IKEA & Spotify',
    client: 'IKEA • Spotify',
    categories: ['print', 'award'],
    year: '2020',
    role: 'Art Direction • Concept',
    tagline: 'Award-winning print work',
    description: 'A collection of award-winning print advertising work for IKEA and Spotify.',
    thumbnail: printsThumb,
    backdrop: prints4,
    previewVideo: { vimeoId: vimeoMap.printsVideo1, localSrc: printsVideo1Local },
    mainVideo: { vimeoId: vimeoMap.printsVideo1, localSrc: printsVideo1Local },
    awards: [{ icon: awardsPreviewPrints, label: 'IKEA / Spotify Awards' }],
    sections: [
      { type: 'image', src: prints4, width: 'wide' },
      { type: 'image-row', src: [prints5, prints6], width: 'wide' },
      { type: 'image', src: prints3, width: 'wide' },
      { type: 'image-row', src: [prints1, prints2], width: 'wide' },
      { type: 'video', vimeoId: vimeoMap.printsVideo2, localSrc: printsVideo2Local, autoplayLoop: true, width: 'medium' },
      { type: 'video', vimeoId: vimeoMap.printsVideo3, localSrc: printsVideo3Local, autoplayLoop: true, width: 'medium' },
    ],
    credits: ['Client: Ikea, Spotify', 'Agency: TBWA\\Istanbul'],
  },
];

// ------------------------------------------------------------------
// Category rows configuration - shown on the landing page in this order
// ------------------------------------------------------------------
export const CATEGORY_ROWS: { key: Category; label: string }[] = [
  { key: 'film', label: 'Film' },
  { key: 'ai', label: 'AI' },
  { key: 'award', label: 'Award Winning' },
  { key: 'print', label: 'Print' },
];

// ------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------
export const visibleProjects = projects.filter((p) => !p.hidden);

export function projectsInCategory(cat: Category) {
  return visibleProjects.filter((p) => p.categories.includes(cat));
}

export function getProject(id: number) {
  return visibleProjects.find((p) => p.id === id);
}

export function getProjectBySlug(slug: string) {
  return visibleProjects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return FEATURED_SLUGS.map((slug) => visibleProjects.find((p) => p.slug === slug)).filter(Boolean) as Project[];
}
