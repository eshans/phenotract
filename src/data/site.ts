import type { ImageMetadata } from 'astro';
import type { SimpleIcon } from 'simple-icons';
import { siBandcamp, siFacebook, siInstagram, siSoundcloud, siSpotify, siYoutube } from 'simple-icons';

// Every image in these folders is loaded automatically. Reference one by filename:
//   cover: cover('tides.jpg')   → src/assets/releases/tides.jpg
//   photo('eric-hat.jpg')       → src/assets/photos/eric-hat.jpg
const coverFiles = import.meta.glob<ImageMetadata>('../assets/releases/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});
const photoFiles = import.meta.glob<ImageMetadata>('../assets/photos/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});

function pick(files: Record<string, ImageMetadata>, folder: string, file: string): ImageMetadata {
  const image = files[`../assets/${folder}/${file}`];
  if (!image) {
    const available = Object.keys(files).map((k) => k.split('/').pop()).join(', ');
    throw new Error(`Image not found: src/assets/${folder}/${file}\nFiles in that folder: ${available}`);
  }
  return image;
}
const cover = (file: string) => pick(coverFiles, 'releases', file);
const photo = (file: string) => pick(photoFiles, 'photos', file);

export const site = {
  name: 'Phenotract',
  description:
    'Phenotract is the dreamy, nostalgic electronic project of producer Eric Shans: ethereal synths, heavenly vocals and cinematic electronic pop.',
  email: 'eric.shans@gmail.com',
  bandcamp: 'https://phenotract.bandcamp.com',
  spotify: 'https://open.spotify.com/artist/2w08RxWYGUbQ7PanYtodue',
  soundcloud: 'https://soundcloud.com/eric-shans/sets/phenotract-its-all-we-feel',
} as const;

// Each paragraph is one string.
export const bio = [
  "Eric Shans' (Phenotract) earliest obsession with electronic music came from watching hours of new wave videos on MTV, computer game music, and getting his first Casio keyboard, on which he would write small tunes and play them back endlessly.",
  'Later influenced by industrial and techno, he began seriously producing music in 1998. His earlier sounds ranged from harder-edged, aggressive sounds to techno-influenced synth-pop. Four albums and an EP later, his sound has fully evolved into a dreamy aural palette that’s drenched with nostalgia, bringing together ethereal synth workouts and heavenly vocals.',
  'Eric also produces and records tracks under his own name which encompass some of the Phenotract sound, but are meant more for the dance floor and DJ sets, as well as ambient and meditative music meant for introspection and soundtracks. His fourth full-length, “It’s All We Feel, Every Day”, was an exercise in cinematic-sounding electronic pop.',
  'Phenotract plans for some new music in the future.',
];

export interface Release {
  title: string;
  /** Leave as null if unknown */
  year: number | null;
  cover: ImageMetadata;
  /** Where the cover links to (Bandcamp, Beatport, a smart link…) */
  url: string;
}

// Newest first: this is the order shown on the site.
export const releases: Release[] = [
  { title: 'Connections', year: 2022, cover: cover('connections.jpg'), url: 'https://phenotract.bandcamp.com/album/connections' },
  { title: 'Drifts', year: 2022, cover: cover('drifts.jpg'), url: 'https://phenotract.bandcamp.com/album/drifts' },
  {
    title: 'Out of Sequence feat. Katharine Heller (2022 Remix)',
    year: 2022,
    cover: cover('out-of-sequence.jpg'),
    url: 'https://phenotract.bandcamp.com/track/out-of-sequence-feat-katharine-heller-2022-remix',
  },
  {
    title: 'Tonight Is Forever (Pet Shop Boys cover)',
    year: 2022,
    cover: cover('tonight-is-forever.jpg'),
    url: 'https://phenotract.bandcamp.com/track/tonight-is-forever-pet-shop-boys-cover',
  },
  { title: 'Twilight Haze (2022 Remix)', year: 2022, cover: cover('twilight-haze.jpg'), url: 'https://ffm.to/twilight-haze' },
  { title: 'Vertigo of Angels', year: 2021, cover: cover('vertigo-of-angels.jpg'), url: 'https://phenotract.bandcamp.com/track/vertigo-of-angels' },
  { title: 'Tides', year: 2019, cover: cover('tides.jpg'), url: 'https://phenotract.bandcamp.com/album/tides' },
  {
    title: 'It’s All We Feel, Every Day',
    year: 2016,
    cover: cover('its-all-we-feel.jpg'),
    url: 'https://phenotract.bandcamp.com/album/its-all-we-feel-every-day',
  },
  { title: 'Drive', year: 2010, cover: cover('drive.jpg'), url: 'https://music.apple.com/us/album/drive-single/410721697' },
  { title: 'Shifting', year: 2010, cover: cover('shifting.jpg'), url: 'https://phenotract.bandcamp.com/album/shifting' },
  { title: 'Shades and Color EP', year: 2009, cover: cover('shades-and-color.jpg'), url: 'https://phenotract.bandcamp.com/album/shades-and-color-ep' },
  { title: 'Transient Messages', year: 2007, cover: cover('transient-messages.jpg'), url: 'https://phenotract.bandcamp.com/album/transient-messages' },
  { title: 'Within a Second', year: 2003, cover: cover('within-a-second.jpg'), url: 'https://phenotract.bandcamp.com/album/within-a-second' },
  { title: 'From This Picture', year: null, cover: cover('from-this-picture.jpg'), url: 'https://www.beatport.com/release/from-this-picture/1137381' },
  { title: 'Dead Ringers (LCM Remix)', year: null, cover: cover('dead-ringers.jpg'), url: 'https://www.beatport.com/release/dead-ringers-lcm-remix/1882430' },
];

export interface Photo {
  image: ImageMetadata;
  alt: string;
}

export const photos: Photo[] = [
  { image: photo('eric-hat.jpg'), alt: 'Eric Shans in a black cap' },
  { image: photo('eric-keys.jpg'), alt: 'Eric Shans holding a keytar' },
  { image: photo('eric-phones.jpg'), alt: 'Eric Shans wearing headphones' },
  { image: photo('sky-1.jpg'), alt: 'Magenta clouds' },
  { image: photo('sky-2.jpg'), alt: 'Red and pink clouds' },
  { image: photo('sky-3.jpg'), alt: 'Deep red sky' },
  { image: photo('sky-4.jpg'), alt: 'Red sky with a contrail' },
  { image: photo('sky-5.jpg'), alt: 'Sunset over the coast' },
];

export interface Social {
  name: string;
  href: string;
  icon: SimpleIcon | null;
}

export const socials: Social[] = [
  { name: 'Spotify', href: site.spotify, icon: siSpotify },
  { name: 'Bandcamp', href: site.bandcamp, icon: siBandcamp },
  { name: 'SoundCloud', href: 'https://soundcloud.com/eric-shans', icon: siSoundcloud },
  { name: 'Instagram', href: 'https://www.instagram.com/shanstasticeric/', icon: siInstagram },
  { name: 'YouTube', href: 'https://www.youtube.com/user/freezeout10/videos', icon: siYoutube },
  { name: 'Facebook', href: 'https://www.facebook.com/phenotract/', icon: siFacebook },
  { name: 'Email', href: `mailto:${site.email}?subject=Inquiry`, icon: null },
];
