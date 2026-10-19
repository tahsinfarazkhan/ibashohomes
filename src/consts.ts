import type { Site, Socials } from './types';

export const SITE: Site = {
  COMPANY_NAME: 'Ibasho Homes',
  LEGAL_NAME: 'Ibasho Homes Private Limited',
  TITLE: 'Home, just the way you like.',
  DESCRIPTION: 'Live Well.',
  CANONICAL_URL: import.meta.env.DEV
    ? 'http://localhost:4321'
    : 'https://ibasho.homes',
  LOCALE: 'en',
  TELEPHONE: '(310) 555-2389',
  EMAIL: 'hello@ibasho.homes',
  ADDRESS: 'Jamshedpur, Jharkhand - 831012',

  OG_IMAGE: '/og-image.webp',

  TWITTER: {
    CREATOR: '@one_space_away',
    CARD: 'summary_large_image',
  },
};

export const SOCIALS: Socials = [
  {
    NAME: 'Instagram',
    ICON: 'instagram',
    LABEL: `${SITE.COMPANY_NAME} on Instagram`,
    HREF: 'https://www.instagram.com/',
  },
  {
    NAME: 'Facebook',
    ICON: 'facebook',
    LABEL: `${SITE.COMPANY_NAME} on Facebook`,
    HREF: 'https://www.facebook.com/',
  },
  {
    NAME: 'Pinterest',
    ICON: 'pinterest',
    LABEL: `${SITE.COMPANY_NAME} on Pinterest`,
    HREF: 'https://www.pinterest.com/',
  },
  {
    NAME: 'Youtube',
    ICON: 'youtube',
    LABEL: `${SITE.COMPANY_NAME} on YouTube`,
    HREF: 'https://www.youtube.com/',
  },
];
