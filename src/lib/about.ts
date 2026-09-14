import type { ButtonProps } from './misc';

export interface Thing {
  href: string;
  text: string;
}

export const ThingsIUse: Thing[] = [
  { href: 'https://astro.build', text: 'Astro' },
  { href: 'https://bun.sh', text: 'Bun' },
  { href: 'https://cloudflare.com', text: 'Cloudflare' },
  { href: 'https://discord.js.org', text: 'Discord.js' },
  { href: 'https://ejs.co', text: 'EJS' },
  { href: 'https://nodejs.org/en', text: 'Node.js' },
  { href: 'https://react.dev', text: 'React' },
  { href: 'https://sass-lang.com', text: 'SASS' },
  { href: 'https://svelte.dev', text: 'Svelte' },
  { href: 'https://tailwindcss.com', text: 'TailwindCSS' }
];

export interface PersonProps {
  name: string;
  links?: Thing[];
  note?: string;
  shouldRandomCase?: boolean;
}

export const CoolPeople: PersonProps[] = [
  { name: 'aidn5', links: [{ href: 'https://github.com/aidn3', text: 'Github' }] },
  { name: 'amy', links: [{ href: 'https://amy.rip', text: 'Site' }] },
  { name: 'autumn', links: [{ href: 'https://itpuppy.pet', text: 'Site' }] },
  {
    name: 'AzureAaron',
    links: [
      { href: 'https://github.com/AzureAaron', text: 'Github' },
      { href: 'https://azureaaron.net', text: 'Site' }
    ]
  },
  {
    name: 'Bloxigus',
    links: [{ href: 'https://github.com/Bloxigus', text: 'Github' }],
    note: 'Cardbord Box',
    shouldRandomCase: true
  },
  {
    name: 'DarthGigi',
    links: [
      { href: 'https://github.com/DarthGigi', text: 'Github' },
      { href: 'https://mrgigi.me', text: 'Site' }
    ]
  },
  {
    name: 'DuckySoLucky',
    links: [
      { href: 'https://github.com/DuckySoLucky', text: 'Github' },
      { href: 'https://duckysolucky.is-a.dev', text: 'Site' }
    ]
  },
  { name: 'Empa', links: [{ href: 'https://github.com/ItsEmpa', text: 'Github' }], note: 'emma' },
  {
    name: 'juna',
    links: [{ href: 'https://github.com/j10a1n15', text: 'Github' }],
    note: 'Tuba 🎺',
    shouldRandomCase: true
  },
  {
    name: 'MadelynWith5Ns',
    links: [
      { href: 'https://github.com/madelynwith5ns', text: 'Github' },
      { href: 'https://mw5ns.com', text: 'Site' }
    ],
    note: 'woof'
  },
  {
    name: 'Mat',
    links: [
      { href: 'https://github.com/mat-1', text: 'Github' },
      { href: 'https://matdoes.dev', text: 'Site' }
    ]
  },
  {
    name: 'Meowora',
    links: [
      { href: 'https://github.com/meowora', text: 'Github' },
      { href: 'https://mona.gay', text: 'Site' }
    ]
  },
  {
    name: 'nea',
    links: [
      { href: 'https://github.com/lineargraph', text: 'Github' },
      { href: 'https://nea.moe', text: 'Site' }
    ]
  },
  {
    name: 'RagingEnby',
    links: [
      { href: 'https://github.com/RagingEnby', text: 'Github' },
      { href: 'https://ragingenby.dev', text: 'Site' }
    ]
  },
  { name: 'saadndm', links: [{ href: 'https://github.com/saadndm', text: 'Github' }] },
  {
    name: 'Shine',
    links: [
      { href: 'https://codeberg.org/awruff', text: 'Codeberg' },
      { href: 'https://github.com/awruff', text: 'Github' },
      { href: 'https://awruff.dog', text: 'Site' }
    ]
  },
  {
    name: 'Soopyboo32',
    links: [
      { href: 'https://github.com/Soopyboo32', text: 'Github' },
      { href: 'https://soopy.dev', text: 'Site' }
    ],
    note: 'SoopyV3'
  },
  {
    name: 'ThatGravyBoat',
    links: [
      { href: 'https://github.com/ThatGravyBoat', text: 'Github' },
      { href: 'https://thatgravyboat.tech', text: 'Site' }
    ]
  },
  {
    name: 'WarpWing',
    links: [
      { href: 'https://github.com/WarpWing', text: 'Github' },
      { href: 'https://blog.warpwing.cloud', text: 'Site' }
    ]
  },
  {
    name: 'Wyvest',
    links: [
      { href: 'https://github.com/Wyvest', text: 'Github' },
      { href: 'https://wyvest.net', text: 'Site' }
    ]
  },
  { name: 'Zickles', links: [{ href: 'https://github.com/Zickles', text: 'Github' }], note: '🐀' }
];

export interface PersonButtonProps extends Omit<ButtonProps, 'src'> {
  src?: string;
  light?: string;
  dark?: string;
}

export const PeopleButtons: PersonButtonProps[] = [
  {
    alt: 'Amber',
    src: '/button/people/Amber_dark.png',
    href: 'https://kathund.dev',
    light: '/button/people/Amber_light.png',
    dark: '/button/people/Amber_dark.png'
  },
  { alt: 'mat', href: 'https://matdoes.dev' },
  { alt: 'Shiny', href: 'https://awruff.dog' },
  { alt: 'nea', href: 'https://nea.moe' },
  { alt: 'amy', href: 'https://amy.rip' },
  { alt: 'itpuppy', href: 'https://itpuppy.pet' },
  { alt: 'meowona', href: 'https://mona.gay' }
];
export const PeopleButtonsByAlt = new Map(PeopleButtons.map((person) => [person.alt, person]));

export const Buttons: PersonButtonProps[] = [
  { alt: 'I use NixOS by the way!', src: '/button/nix_dark.webp', href: 'https://nixos.org' },
  { alt: 'Powered By NixOS', src: '/button/powered_by_nixos.gif', href: 'https://nixos.org' },
  { alt: 'Built With Nix!', src: '/button/built_with_nix.gif', href: 'https://nixos.org' },
  { alt: 'Teted on Firefox', src: '/button/tested_on_firefox.gif', href: 'https://firefox.com' },
  { alt: 'Build With Astro', src: '/button/build_with_astro.png', href: 'https://astro.build' },
  { alt: 'Build With Svelte', src: '/button/build_with_svelte.gif', href: 'https://svelte.dev' },
  { alt: 'neovim', src: '/button/neovim.gif', href: 'https://neovim.io' },
  { alt: 'Anything But Chrome', src: '/button/anything_but_chrome.gif', href: 'https://firefox.com' },
  { alt: 'I like pooters', src: '/button/i_like_computer.png' },
  { alt: 'Internet Privacy', src: '/button/internet_privacy.gif', href: 'https://eff.org' },
  { alt: 'Internet Archive', src: '/button/internet-archive.png', href: 'https://archive.org/' },
  { alt: 'Privacy Now!', src: '/button/privacy_now.gif', href: '/kathund-pgp-public.pgp' },
  { alt: 'qBittorrent', src: '/button/qbittorrent.png', href: 'https://www.qbittorrent.org/' },
  { alt: 'Seed Torrents! Please', src: '/button/seed-torrents.gif', href: 'https://www.qbittorrent.org/' },
  { alt: 'Best Viewed On Desktop!', src: '/button/best-on-desktop.gif' },
  { alt: "Don't feed AI", src: '/button/dont_feed_ai.gif' },
  { alt: 'AI is theft', src: '/button/ai_is_theft.webp' },
  { alt: 'No AI', src: '/button/anti_ai.gif' },
  {
    alt: 'Pride Progress',
    src: '/button/progress_button.png',
    href: 'https://en.pronouns.page/terminology?filter=progress'
  },
  {
    alt: 'Pansexual',
    src: '/button/pansexual_button.png',
    href: 'https://en.pronouns.page/terminology?filter=pansexual'
  },
  {
    alt: 'Transgender',
    src: '/button/transgender_button.png',
    href: 'https://en.pronouns.page/terminology?filter=transgender'
  }
];
