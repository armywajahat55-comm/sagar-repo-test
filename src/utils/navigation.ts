import { NavTab } from '../types';

export const routeMap: Record<NavTab, string> = {
  home: '/',
  register: '/sagarclub-register',
  login: '/sagarclub-login',
  download: '/sagarclub-download',
  'responsible-gaming': '/responsible-gaming',
  'about-us': '/about-us',
  'contact-us': '/contact-us',
  'terms-and-conditions': '/terms-and-conditions',
  'privacy-policy': '/privacy-policy',
  '404': '/404',
};

export const pathToTabMap: Record<string, NavTab> = {
  '/': 'home',
  '': 'home',
  '/sagarclub-register': 'register',
  '/sagarclub-register/': 'register',
  '/sagar-club-register': 'register',
  '/sagar-club-register/': 'register',
  '/dmplay-register': 'register',
  '/dmplay-register/': 'register',
  '/dm-play-register': 'register',
  '/dm-play-register/': 'register',
  '/register': 'register',
  '/register/': 'register',

  '/sagarclub-login': 'login',
  '/sagarclub-login/': 'login',
  '/sagar-club-login': 'login',
  '/sagar-club-login/': 'login',
  '/dmplay-login': 'login',
  '/dmplay-login/': 'login',
  '/dm-play-login': 'login',
  '/dm-play-login/': 'login',
  '/login': 'login',
  '/login/': 'login',

  '/sagarclub-download': 'download',
  '/sagarclub-download/': 'download',
  '/sagar-club-download': 'download',
  '/sagar-club-download/': 'download',
  '/shree-win-app-download': 'download',
  '/shree-win-app-download/': 'download',
  '/sagarclub-apk': 'download',
  '/sagar-club-apk': 'download',
  '/dmplay-download': 'download',
  '/dmplay-download/': 'download',
  '/dm-play-download': 'download',
  '/dm-play-download/': 'download',
  '/download': 'download',
  '/download/': 'download',
  '/apk-download': 'download',
  '/dmplay-apk': 'download',
  '/dm-play-apk': 'download',

  '/responsible-gaming': 'responsible-gaming',
  '/responsible-gaming/': 'responsible-gaming',
  '/about-us': 'about-us',
  '/about-us/': 'about-us',
  '/contact-us': 'contact-us',
  '/contact-us/': 'contact-us',
  '/support': 'contact-us',
  '/support/': 'contact-us',
  '/customer-support': 'contact-us',
  '/customer-support/': 'contact-us',
  '/terms-and-conditions': 'terms-and-conditions',
  '/terms-and-conditions/': 'terms-and-conditions',
  '/terms': 'terms-and-conditions',
  '/privacy-policy': 'privacy-policy',
  '/privacy-policy/': 'privacy-policy',
  '/privacy': 'privacy-policy',
  '/404': '404',
};

export const getTabFromPath = (path: string, hash?: string): NavTab => {
  // Backward compatibility for hashes if present:
  if (hash) {
    const cleanHash = hash.replace(/^#/, '');
    if (
      cleanHash === 'sagarclub-register' ||
      cleanHash === 'sagar-club-register' ||
      cleanHash === 'dmplay-register' ||
      cleanHash === 'register'
    )
      return 'register';
    if (
      cleanHash === 'sagarclub-login' ||
      cleanHash === 'sagar-club-login' ||
      cleanHash === 'dmplay-login' ||
      cleanHash === 'login'
    )
      return 'login';
    if (
      cleanHash === 'sagarclub-download' ||
      cleanHash === 'sagar-club-download' ||
      cleanHash === 'sagarclub-apk' ||
      cleanHash === 'dmplay-download' ||
      cleanHash === 'download'
    )
      return 'download';
    if (cleanHash === '404') return '404';
  }

  const normalized = path.toLowerCase().replace(/\/$/, '') || '/';
  return pathToTabMap[normalized] || pathToTabMap[path.toLowerCase()] || '404';
};

export const navigateTo = (tab: NavTab) => {
  const path = routeMap[tab] || '/';
  if (window.location.pathname !== path) {
    window.history.pushState(null, '', path);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
