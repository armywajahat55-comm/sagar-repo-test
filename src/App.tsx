import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { getTabFromPath, navigateTo, routeMap } from './utils/navigation';
import { NavTab } from './types';

// Lazy-load secondary pages for ultra-fast initial bundle & sub-1.2s LCP
const RegisterPage = lazy(() => import('./pages/RegisterPage').then((m) => ({ default: m.RegisterPage })));
const LoginPage = lazy(() => import('./pages/LoginPage').then((m) => ({ default: m.LoginPage })));
const DownloadPage = lazy(() => import('./pages/DownloadPage').then((m) => ({ default: m.DownloadPage })));
const ResponsibleGamingPage = lazy(() => import('./pages/ResponsibleGamingPage').then((m) => ({ default: m.ResponsibleGamingPage })));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage').then((m) => ({ default: m.AboutUsPage })));
const ContactUsPage = lazy(() => import('./pages/ContactUsPage').then((m) => ({ default: m.ContactUsPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then((m) => ({ default: m.TermsPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage })));
const NotFoundView = lazy(() => import('./components/NotFoundView').then((m) => ({ default: m.NotFoundView })));

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPhone, setUserPhone] = useState('');
  const [_walletBalance, setWalletBalance] = useState(500);

  useEffect(() => {
    const handleLocation = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      const tab = getTabFromPath(path, hash);
      setCurrentTab(tab);
    };

    handleLocation();
    window.addEventListener('popstate', handleLocation);
    window.addEventListener('hashchange', handleLocation);
    return () => {
      window.removeEventListener('popstate', handleLocation);
      window.removeEventListener('hashchange', handleLocation);
    };
  }, []);

  useEffect(() => {
    const titles: Record<NavTab, string> = {
      home: 'Sagar Club - Sagar Club Login & SagarClub Apk',
      register: 'How To Register on Sagar Club',
      login: 'How to Login on Sagar Club',
      download: 'How To Download Sagar Club APK',
      'responsible-gaming': 'Sagar Club Responsible Gaming',
      'about-us': 'Sagar Club About Us',
      'contact-us': 'Sagar Club Support',
      'terms-and-conditions': 'Sagar Club Terms and Conditions',
      'privacy-policy': 'Sagar Club Privacy Policy',
      '404': 'Sagar Club 404 - Page Not Found',
    };

    const descriptions: Record<NavTab, string> = {
      home: "Official Sagar Club Game - India's premier online color prediction platform, Wingo games, daily salary agent rewards, and official Sagar Club APK download portal.",
      register: 'Register on Sagar Club to claim your ₹500 welcome bonus. Create your account in 30 seconds and start playing Wingo color prediction games.',
      login: 'Log in to your official Sagar Club account. Access your gaming dashboard, wallet balance, daily check-in rewards, and instant UPI withdrawals.',
      download: 'Download the official Sagar Club APK (v2.1.8) for Android. Lightweight 15.4 MB package with ultra-low latency and 60 FPS performance.',
      'responsible-gaming': 'Sagar Club Responsible Gaming policy. Promoting safe, controlled, and fair gaming entertainment with player protection limits.',
      'about-us': 'Learn about Sagar Club platform history, technology infrastructure, certified RNG security, and our commitment to transparency.',
      'contact-us': 'Official Sagar Club Support desk. 24/7 customer assistance via Telegram, Live Chat, and email for deposits, withdrawals, and bonus inquiries.',
      'terms-and-conditions': 'Sagar Club Terms and Conditions. Official user agreement, player responsibilities, fair play rules, and payout policies.',
      'privacy-policy': 'Sagar Club Privacy Policy. Strict 256-bit SSL encryption, data protection protocols, and confidential player account handling.',
      '404': '404 - Page Not Found. Return to the official Sagar Club portal to explore games, daily bonuses, and APK downloads.',
    };

    if (titles[currentTab]) {
      document.title = titles[currentTab];
    }

    const staticCanonicalUrls: Record<NavTab, string> = {
      home: 'https://sagarclub.in/',
      register: 'https://sagarclub.in/sagarclub-register',
      login: 'https://sagarclub.in/sagarclub-login',
      download: 'https://sagarclub.in/sagarclub-download',
      'responsible-gaming': 'https://sagarclub.in/responsible-gaming',
      'about-us': 'https://sagarclub.in/about-us',
      'contact-us': 'https://sagarclub.in/contact-us',
      'terms-and-conditions': 'https://sagarclub.in/terms-and-conditions',
      'privacy-policy': 'https://sagarclub.in/privacy-policy',
      '404': 'https://sagarclub.in/404',
    };
    const canonicalUrl = staticCanonicalUrls[currentTab] || 'https://sagarclub.in/';

    // Dynamic Canonical Tag Update
    let canonicalLink: HTMLLinkElement | null = document.querySelector("link[rel~='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

    // Dynamic OpenGraph URL
    let ogUrlMeta: HTMLMetaElement | null = document.querySelector("meta[property='og:url']");
    if (!ogUrlMeta) {
      ogUrlMeta = document.createElement('meta');
      ogUrlMeta.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrlMeta);
    }
    ogUrlMeta.content = canonicalUrl;

    // Dynamic Meta Description
    let descMeta: HTMLMetaElement | null = document.querySelector("meta[name='description']");
    if (descMeta && descriptions[currentTab]) {
      descMeta.content = descriptions[currentTab];
    }
    let ogDescMeta: HTMLMetaElement | null = document.querySelector("meta[property='og:description']");
    if (ogDescMeta && descriptions[currentTab]) {
      ogDescMeta.content = descriptions[currentTab];
    }
  }, [currentTab]);

  const handleTabChange = (tab: NavTab) => {
    setCurrentTab(tab);
    navigateTo(tab);
  };

  const handleLoginSuccess = (phone: string) => {
    setIsLoggedIn(true);
    setUserPhone(phone);
  };

  const handleRegisterSuccess = (phone: string) => {
    setIsLoggedIn(true);
    setUserPhone(phone);
    setWalletBalance(500);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserPhone('');
  };

  return (
    <div className="main-content-wrapper" id="app-root">
      {/* Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleTabChange}
        isLoggedIn={isLoggedIn}
        userPhone={userPhone}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <main id="content" className="site" style={{ marginTop: '20px' }}>
        {currentTab === 'home' ? (
          <HomePage onNavigate={handleTabChange} />
        ) : (
          <Suspense fallback={<div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />}>
            {currentTab === '404' ? (
              <NotFoundView onSelectTab={handleTabChange} />
            ) : currentTab === 'register' ? (
              <RegisterPage onNavigate={handleTabChange} />
            ) : currentTab === 'login' ? (
              <LoginPage onNavigate={handleTabChange} />
            ) : currentTab === 'download' ? (
              <DownloadPage onNavigate={handleTabChange} />
            ) : currentTab === 'responsible-gaming' ? (
              <ResponsibleGamingPage onNavigate={handleTabChange} />
            ) : currentTab === 'about-us' ? (
              <AboutUsPage onNavigate={handleTabChange} />
            ) : currentTab === 'contact-us' ? (
              <ContactUsPage onNavigate={handleTabChange} />
            ) : currentTab === 'terms-and-conditions' ? (
              <TermsPage onNavigate={handleTabChange} />
            ) : currentTab === 'privacy-policy' ? (
              <PrivacyPage onNavigate={handleTabChange} />
            ) : (
              <HomePage onNavigate={handleTabChange} />
            )}
          </Suspense>
        )}
      </main>

      {/* Footer */}
      <Footer onSelectTab={handleTabChange} />
    </div>
  );
};

export default App;
