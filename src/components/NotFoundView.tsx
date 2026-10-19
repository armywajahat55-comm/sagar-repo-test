import React from 'react';
import { Home, LogIn, UserPlus, Download, Compass, Sparkles } from 'lucide-react';
import { NavTab } from '../types';

interface NotFoundViewProps {
  onSelectTab: (tab: NavTab) => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onSelectTab }) => {
  return (
    <div
      style={{
        maxWidth: '680px',
        margin: '40px auto',
        padding: '36px 24px',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        textAlign: 'center',
      }}
      id="not-found-view"
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          backgroundColor: '#f0f9ff',
          color: '#0284c7',
          border: '1px solid #bae6fd',
          fontSize: '12.5px',
          fontWeight: 700,
          padding: '4px 14px',
          borderRadius: '20px',
          marginBottom: '14px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}
      >
        <Compass size={14} /> 404 Error: Page Not Found
      </div>

      <div
        style={{
          fontSize: 'clamp(56px, 10vw, 84px)',
          fontWeight: 900,
          lineHeight: 1,
          margin: '0 0 10px',
          background: 'linear-gradient(180deg, #0ea5e9 0%, #090d16 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        404
      </div>

      <h1
        style={{
          fontSize: '22px',
          fontWeight: 800,
          color: '#0f172a',
          margin: '0 0 10px',
        }}
      >
        Sagar Club 404 - Page Not Found
      </h1>

      <p
        style={{
          fontSize: '15px',
          color: '#64748b',
          lineHeight: 1.6,
          margin: '0 auto 26px',
          maxWidth: '520px',
        }}
      >
        The page or section you requested could not be found or has moved. Explore the official <strong>Sagar Club</strong> gaming lobby, Wingo 1Min prediction, or download the official Sagar Club app below.
      </p>

      {/* Main Action Buttons */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          justifyContent: 'center',
          marginBottom: '28px',
        }}
      >
        <a
          href="/"
          target="_blank"
          className="cta"
          style={{
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            borderRadius: '24px',
            fontSize: '14.5px',
            background: 'linear-gradient(180deg, #0ea5e9 0%, #0284c7 100%)',
          }}
          id="btn-404-home"
        >
          <Home size={16} /> Sagar Club Home
        </a>

        <a
          href="/sagarclub-login"
          target="_blank"
          className="cta"
          style={{
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 22px',
            borderRadius: '24px',
            fontSize: '14.5px',
            background: 'linear-gradient(180deg, #0284c7 0%, #0369a1 100%)',
          }}
          id="btn-404-login"
        >
          <LogIn size={16} /> Sagar Club Login
        </a>

        <a
          href="/sagarclub-register"
          target="_blank"
          className="cta"
          style={{
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 22px',
            borderRadius: '24px',
            fontSize: '14.5px',
            background: 'linear-gradient(180deg, #0284c7 0%, #090d16 100%)',
          }}
          id="btn-404-register"
        >
          <UserPlus size={16} /> Sagar Club Register
        </a>

        <a
          href="/sagarclub-download"
          target="_blank"
          className="cta"
          style={{
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 22px',
            borderRadius: '24px',
            fontSize: '14.5px',
            background: '#090d16',
          }}
          id="btn-404-download"
        >
          <Download size={16} /> Sagar Club APK Download
        </a>
      </div>

      {/* Quick Explore Section */}
      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '16px',
          textAlign: 'left',
        }}
      >
        <div
          style={{
            fontSize: '13px',
            fontWeight: 700,
            color: '#0f172a',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <Sparkles size={14} color="#f59e0b" /> Explore Official Sagar Club Pages:
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '8px',
          }}
        >
          <a
            href="/about-us"
            target="_blank"
            style={{
              textDecoration: 'none',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '8px',
              padding: '10px',
              textAlign: 'center',
              fontSize: '13px',
              fontWeight: 600,
              color: '#1e293b',
              display: 'block',
            }}
            id="quick-link-404-about"
          >
            Sagar Club About Us
          </a>
          <a
            href="/contact-us"
            target="_blank"
            style={{
              textDecoration: 'none',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '8px',
              padding: '10px',
              textAlign: 'center',
              fontSize: '13px',
              fontWeight: 600,
              color: '#1e293b',
              display: 'block',
            }}
            id="quick-link-404-contact"
          >
            Sagar Club Contact Us
          </a>
          <a
            href="/responsible-gaming"
            target="_blank"
            style={{
              textDecoration: 'none',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '8px',
              padding: '10px',
              textAlign: 'center',
              fontSize: '13px',
              fontWeight: 600,
              color: '#1e293b',
              display: 'block',
            }}
            id="quick-link-404-resp-gaming"
          >
            Sagar Club Responsible Gaming
          </a>
          <a
            href="/privacy-policy"
            target="_blank"
            style={{
              textDecoration: 'none',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '8px',
              padding: '10px',
              textAlign: 'center',
              fontSize: '13px',
              fontWeight: 600,
              color: '#1e293b',
              display: 'block',
            }}
            id="quick-link-404-privacy"
          >
            Sagar Club Privacy Policy
          </a>
          <a
            href="/terms-and-conditions"
            target="_blank"
            style={{
              textDecoration: 'none',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '8px',
              padding: '10px',
              textAlign: 'center',
              fontSize: '13px',
              fontWeight: 600,
              color: '#1e293b',
              display: 'block',
            }}
            id="quick-link-404-terms"
          >
            Sagar Club Terms &amp; Conditions
          </a>
        </div>
      </div>
    </div>
  );
};
