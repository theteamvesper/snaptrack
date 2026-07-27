export const PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.teamvesper.snapvision';

export const NAV = [
  { label: 'SnapTrack', href: '#snaptrack' },
  { label: 'Bird Clash', href: '#birdclash' },
  { label: 'About', href: '#about', hideSm: true },
  { label: 'Contact', href: '#contact', hideSm: true },
];

export const SNAPTRACK_TAGS = [
  'AI photo scan', 'Barcode', 'Describe your meal',
  'Protein · Carbs · Fat · Fiber', 'Water & steps', 'Weekly reports',
];

export const SNAPTRACK_SHOTS = [
  { src: '/assets/st-2.jpg', alt: 'Guessing is over — point your camera at any meal' },
  { src: '/assets/st-3.jpg', alt: 'Forgot to log it? Just say it' },
  { src: '/assets/st-4.jpg', alt: "Don't break the streak" },
];

export const SNAPTRACK_SHOTS_B = [
  { src: '/assets/st-6.jpg', alt: 'Every trend, in focus' },
  { src: '/assets/st-7.jpg', alt: 'Know your patterns' },
  { src: '/assets/st-5.jpg', alt: 'Make it yours — four hand-crafted themes' },
];

/* Two rows on desktop, one swipeable row on phones — same images either way. */
export const SNAPTRACK_SHOTS_ALL = [...SNAPTRACK_SHOTS, ...SNAPTRACK_SHOTS_B];

export const BIRD_CLASH_STATS = ['50 stages', '13 worlds', '9 bows'];

export const BIRD_CLASH_SHOTS = [
  { src: '/assets/bc-1.jpg', alt: 'Bird Clash main menu' },
  { src: '/assets/bc-4.jpg', alt: 'Three ways to play — levels, practice, attack' },
  { src: '/assets/bc-2.jpg', alt: '13 stunning worlds' },
  { src: '/assets/bc-3.jpg', alt: '9 legendary bows' },
];

export const SOCIALS = [
  { label: 'X / Twitter', href: '#', icon: 'x' },
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'YouTube', href: '#', icon: 'youtube' },
  { label: 'TikTok', href: '#', icon: 'tiktok' },
];

export const ABOUT_FACTS = [
  { label: 'Products', value: 'SnapTrack AI · Bird Clash' },
  { label: 'Platform', value: 'Android · Google Play' },
];
