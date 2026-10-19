import React, { useState } from 'react';
import { Menu, X, Smartphone, UserPlus } from 'lucide-react';
import { NavTab } from '../types';
import { AFFILIATE_LINK } from '../constants';

interface HeaderProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  isLoggedIn: boolean;
  userPhone: string;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  isLoggedIn,
  userPhone,
  onLogout,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: NavTab) => {
    onSelectTab(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header" id="site-header">
      <div className="header-top-accent" id="header-top-accent"></div>
      <div className="inside-header" id="inside-header">
        {/* Brand Logo - Just the 1 official logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a
            href="/"
            target="_blank"
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
            id="header-logo-link"
            aria-label="Sagar Club"
          >
            <img
              src="/sagar-club.webp"
              alt="Sagar Club"
              className="header-logo"
              width={44}
              height={44}
              loading="eager"
              decoding="async"
              style={{ height: '44px', width: '44px', aspectRatio: '1 / 1', objectFit: 'contain', borderRadius: '10px' }}
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav hidden md:flex" id="desktop-nav">
          <a
            href="/"
            target="_blank"
            className={`nav-link ${currentTab === 'home' ? 'active' : ''}`}
            id="nav-home-btn"
          >
            Sagar Club
          </a>
          <a
            href="/sagarclub-register"
            target="_blank"
            className={`nav-link ${currentTab === 'register' ? 'active' : ''}`}
            id="nav-register-link"
          >
            Sagar Club Register
          </a>
          <a
            href="/sagarclub-login"
            target="_blank"
            className={`nav-link ${currentTab === 'login' ? 'active' : ''}`}
            id="nav-login-link"
          >
            Sagar Club Login
          </a>
          <a
            href="/sagarclub-download"
            target="_blank"
            className={`nav-link ${currentTab === 'download' ? 'active' : ''}`}
            id="nav-download-btn"
          >
            <Smartphone size={14} className="nav-icon" /> Sagar Club APK Download
          </a>

          {isLoggedIn ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '8px' }}>
              <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#0f172a' }} id="user-phone-badge">
                Player: {userPhone}
              </span>
              <button
                type="button"
                className="nav-link"
                onClick={onLogout}
                style={{ color: '#000000' }}
                id="logout-btn"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                className="header-cta-btn"
                id="nav-register-live-cta"
                style={{ textDecoration: 'none' }}
              >
                <UserPlus size={14} /> Register
              </a>
            </>
          )}
        </nav>

        {/* Mobile menu trigger */}
        <button
          type="button"
          className="mobile-menu-btn md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          id="mobile-menu-toggle-btn"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="nav nav-mobile-open md:hidden" id="mobile-nav-dropdown">
          <a
            href="/"
            target="_blank"
            className={`nav-link ${currentTab === 'home' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
            id="mobile-nav-home"
          >
            Sagar Club Overview
          </a>
          <a
            href="/sagarclub-register"
            target="_blank"
            className={`nav-link ${currentTab === 'register' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
            id="mobile-nav-register-link"
          >
            Sagar Club Register
          </a>
          <a
            href="/sagarclub-login"
            target="_blank"
            className={`nav-link ${currentTab === 'login' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
            id="mobile-nav-login-link"
          >
            Sagar Club Login
          </a>
          <a
            href="/sagarclub-download"
            target="_blank"
            className={`nav-link ${currentTab === 'download' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
            id="mobile-nav-download"
          >
            Sagar Club APK Download (v2.1.8)
          </a>
          <a
            href="/about-us"
            target="_blank"
            className={`nav-link ${currentTab === 'about-us' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
            id="mobile-nav-about"
          >
            About Sagar Club
          </a>
          <a
            href="/contact-us"
            target="_blank"
            className={`nav-link ${currentTab === 'contact-us' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
            id="mobile-nav-contact"
          >
            Sagar Club Support
          </a>
          <a
            href="/responsible-gaming"
            target="_blank"
            className={`nav-link ${currentTab === 'responsible-gaming' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
            id="mobile-nav-resp-gaming"
          >
            Sagar Club Responsible Gaming
          </a>
          
          {isLoggedIn ? (
            <div style={{ padding: '12px 14px', borderTop: '1px solid #e2e8f0' }}>
              <div style={{ fontWeight: 600, color: '#0f172a', marginBottom: '8px' }}>
                Player: {userPhone}
              </div>
              <button
                type="button"
                className="cta"
                style={{ width: '100%' }}
                onClick={() => {
                  onLogout();
                  setIsMobileMenuOpen(false);
                }}
                id="mobile-logout-btn"
              >
                Logout
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                className="cta"
                style={{ width: '100%', textAlign: 'center', textDecoration: 'none', display: 'block' }}
                onClick={() => setIsMobileMenuOpen(false)}
                id="mobile-nav-login"
              >
                Sagar Club Login
              </a>
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                className="cta"
                style={{ width: '100%', background: 'linear-gradient(180deg, #0ea5e9 0%, #0284c7 100%)', textAlign: 'center', textDecoration: 'none', display: 'block' }}
                onClick={() => setIsMobileMenuOpen(false)}
                id="mobile-nav-register"
              >
                Sagar Club Register
              </a>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
