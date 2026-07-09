// =====================================================================================
// VIMEO ID MAP
//
// As you upload videos to Vimeo, paste the numeric ID here (the number in the video's
// URL, e.g. vimeo.com/123456789 -> "123456789"). Leave as an empty string until then —
// the site will automatically keep using the local video file as a fallback so nothing
// breaks while you're mid-migration.
//
// Tip: you don't have to do this all at once. Upload a batch, fill in the IDs below,
// and redeploy. Repeat until everything is on Vimeo.
// =====================================================================================

export const vimeoMap: Record<string, string> = {
  // --- Priority 1: landing / hero videos ---
  showreel: '',
  billboardVideo: '', // HBO
  mcdonaldsHeader: '',
  woltHeader: '',
  animationsHeader: '',
  klarnaVideo: '',
  mobotixTease: '',
  hpTakeoverHeader: '',
  project2Video: '', // Edeka thumbnail hero

  // --- Priority 2: case study main films ---
  project1Video: '', // HBO main film
  robotFilmVideo: '', // Edeka main film
  klarnaSandstorm: '',
  klarnaFrozen: '',
  klarnaRadiation: '',
  primeVideoMain: '',
  hpTakeoverMain: '',
  mobotixFull: '',
  mobotixFull2: '',

  // --- Priority 3: everything else ---
  hboMedia14: '',
  edekaVideo2: '',
  edekaDanceVideo: '',
  edekaMelonenVideo: '',
  edekaChooseCharacterVideo: '',
  klarnaDooh: '',
  primeVideoLoop: '',
  woltVideo360: '',
  mcdonaldsBigmac: '',
  mcdonaldsMcchicken: '',
  mcdonaldsFries: '',
  animationsVideo1: '',
  animationsVideo2: '',
  animationsVideo3: '',
  animationsVideo4: '',
  animationsVideo5: '',
  animationsVideo6: '',
  animationsVideo7: '',
  printsVideo1: '',
  printsVideo2: '',
  printsVideo3: '',
  potterMedia6: '',
  potterMedia8: '',
  potterMedia11: '',
  potterMedia13: '',
};
