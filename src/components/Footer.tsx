import React from 'react';
import { ShieldCheck, Lock, Phone, ArrowUp, Award } from 'lucide-react';
import { NavTab } from '../types';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer">
      <div className="footer-widgets">
        <div className="footer-inner">
          {/* Col 1: Brand & Bio */}
          <div className="footer-col">
            <div className="footer-logo-wrapper" style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img
                src="/sagar-club.webp"
                alt="Sagar-Club"
                width={36}
                height={36}
                loading="lazy"
                decoding="async"
                style={{ height: '36px', width: '36px', aspectRatio: '1 / 1', maxHeight: '36px', objectFit: 'contain' }}
              />
              <span
                style={{
                  fontSize: '22px',
                  fontWeight: 900,
                  letterSpacing: '-0.5px',
                  color: '#ffffff',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
              >
                SAGAR <span style={{ color: '#38bdf8' }}>CLUB</span>
              </span>
            </div>
            <p className="footer-description">
              Sagar Club is the leading online gaming, color prediction, and interactive gaming community. Featuring high-performance 60 FPS gameplay, certified fair RNG algorithms, instant Sagar Club Android APK downloads, and 24/7 player support.
            </p>
            <div className="trust-pills">
              <span className="trust-pill">
                <ShieldCheck size={12} /> Fair Play Certified
              </span>
              <span className="trust-pill">
                <Lock size={12} /> 256-bit SSL
              </span>
              <span className="trust-pill">
                <Award size={12} /> RNG Verified
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Sagar Club Quick Links</h4>
            <ul className="footer-links-list">
              <li>
                <a href="/" target="_blank">
                  Sagar Club Overview
                </a>
              </li>
              <li>
                <a href="/sagarclub-register" target="_blank">
                  Sagar Club Register (₹500 Bonus)
                </a>
              </li>
              <li>
                <a href="/sagarclub-login" target="_blank">
                  Sagar Club Login
                </a>
              </li>
              <li>
                <a href="/sagarclub-download" target="_blank">
                  Sagar Club APK Download (v2.1.8)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Member Services & Legal */}
          <div className="footer-col">
            <h4 className="footer-col-title">Player Services &amp; Legal</h4>
            <ul className="footer-links-list">
              <li>
                <a href="/about-us" target="_blank">
                  About Sagar Club
                </a>
              </li>
              <li>
                <a href="/contact-us" target="_blank">
                  Sagar Club Support
                </a>
              </li>
              <li>
                <a href="/responsible-gaming" target="_blank">
                  Sagar Club Responsible Gaming
                </a>
              </li>
              <li>
                <a href="/terms-and-conditions" target="_blank">
                  Sagar Club Terms and Conditions
                </a>
              </li>
              <li>
                <a href="/privacy-policy" target="_blank">
                  Sagar Club Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/SagarClub_Official"
                  target="_blank"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  <Phone size={12} /> 24/7 Telegram Support (New Tab)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Platform Engine & Security */}
          <div className="footer-col">
            <h4 className="footer-col-title">Platform &amp; Security</h4>
            <p className="payments-subtext">
              High-performance cloud gaming architecture engineered for low-latency gameplay on Sagar Club:
            </p>
            <div className="payment-badges-grid">
              <div className="pay-badge easypaisa">Anti-Cheat 2.0</div>
              <div className="pay-badge jazzcash">Certified RNG</div>
              <div className="pay-badge bank">60 FPS Engine</div>
              <div className="pay-badge usdt">SSL Secured</div>
            </div>
            <div className="footer-security-note">
              <Lock size={14} color="#38bdf8" />
              <span>All player data on Sagar Club is protected by 256-bit SSL encryption.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright bar */}
      <div className="site-info">
        <div className="site-info-inner">
          <p className="copyright-text">
            © 2026 <strong>Sagar Club</strong>. All rights reserved. Official Online Gaming Platform.
          </p>
          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            id="footer-back-to-top"
          >
            <ArrowUp size={14} /> Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};
