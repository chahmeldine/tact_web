export type Theme = 'dark' | 'light';

export type SocialPlatform =
  | 'linkedin'
  | 'instagram'
  | 'twitter'
  | 'tiktok'
  | 'snapchat'
  | 'facebook'
  | 'youtube'
  | 'github'
  | 'behance'
  | 'dribbble'
  | 'pinterest'
  | 'twitch'
  | 'discord'
  | 'telegram'
  | 'whatsapp'
  | 'spotify'
  | 'soundcloud'
  | 'substack'
  | 'medium'
  | 'malt'
  | 'fiverr'
  | 'paypalme'
  | 'linktree'
  | 'custom';

export type Website = {
  id: string;
  cardId: string;
  url: string;
  label?: string;
  position: number;
  isVisible: boolean;
};

export type Social = {
  id: string;
  cardId: string;
  platform: SocialPlatform;
  url: string;
  label?: string;
  position: number;
  isVisible: boolean;
};

export type PublicCard = {
  tactId: string;
  theme: Theme;
  displayName?: string;
  jobTitle?: string;
  company?: string;
  bio?: string;
  avatarUrl?: string;
  phone?: string;
  email?: string;
  location?: string;
  websites: Website[];
  socials: Social[];
};
