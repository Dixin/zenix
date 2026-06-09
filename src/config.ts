// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'MuseumCloud.net';
export const SITE_DESCRIPTION = 'A high-performance, 100/100 Lighthouse-optimized Astro 6 SaaS theme with dark mode, MDX blog, and command palette search.';
export const SITE_URL = 'https://museumcloud.net';
export const REPOSITORY_URL = 'https://github.com/Dixin/museumcloud';

// Brand Settings
export const BRAND_NAME = 'MuseumCloud';
export const BRAND_LOGO_TEXT = 'Mc';

// Social Links
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/dixinyan',
  github: 'https://github.com/Dixin',
  linkedin: 'https://linkedin.com/in/dixin',
};

// Navigation Links
export const NAV_LINKS = [
  { href: '/#features', label: 'Features' },
  { href: '/#testimonials', label: 'Testimonials' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/blog/', label: 'Blog' },
];

// Footer Links
export const FOOTER_LINKS = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/#features' },
      { label: 'Pricing', href: '/pricing/' },
      { label: 'Changelog', href: '/changelog/' },
      { label: 'Integrations', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog/' },
      { label: 'Documentation', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Help Center', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Privacy Policy', href: '/privacy/' },
      { label: 'Terms of Service', href: '/terms/' },
    ],
  },
];
