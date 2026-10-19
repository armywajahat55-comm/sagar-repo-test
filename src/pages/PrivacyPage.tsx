import React from 'react';
import {
  Gift,
  ShieldCheck,
  Lock,
  EyeOff,
  CheckCircle2,
  FileCheck,
  Server,
  HelpCircle,
  ExternalLink,
  UserPlus,
  LogIn,
} from 'lucide-react';
import { NavTab } from '../types';
import { AFFILIATE_LINK } from '../constants';

interface PrivacyPageProps {
  onNavigate: (tab: NavTab) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  return (
    <article className="content" id="privacy-page-article">
      <h1>Sagar Club Privacy Policy</h1>

      <p>
        Your digital privacy, identity security, and transactional confidentiality are foundational priorities at{' '}
        <a
          href="/"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club</strong>
        </a>
        . This Privacy Policy outlines how we collect, store, safeguard, and manage your personal data when you interact with our website (<code>https://sagarclub.in</code>), mobile web interfaces, and the official Sagar Club Android APK (v2.1.8).
      </p>

      <p>
        In this official{' '}
        <a
          href="/privacy-policy"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club Privacy Policy</strong>
        </a>{' '}
        guide, you can read about our 256-bit SSL encryption standards, our strict zero-third-party-monetization guarantee, secure session storage, and how you can exercise full control over your profile data. Feel free to also review our{' '}
        <a
          href="/terms-and-conditions"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club Terms and Conditions</strong>
        </a>{' '}
        or explore our{' '}
        <a
          href="/responsible-gaming"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club Responsible Gaming</strong>
        </a>{' '}
        charter.
      </p>

      <h2>1. The Information We Collect</h2>
      <p>
        Sagar Club strictly follows the principle of data minimization—we only collect data that is strictly essential to manage your account, protect your balance, and comply with financial regulations:
      </p>
      <ul style={{ margin: '0 0 18px 22px', color: '#334155', fontSize: '14.5px', lineHeight: '1.8' }}>
        <li>
          <strong>Contact Credentials:</strong> Your 10-digit Indian mobile telephone number used for two-factor authentication, account recovery, and withdrawal confirmation OTPs.
        </li>
        <li>
          <strong>Banking &amp; Settlement Details:</strong> Your designated Bank Account Number, IFSC code, and legal Account Holder Name provided exclusively to process outbound IMPS withdrawals.
        </li>
        <li>
          <strong>Technical &amp; Telemetry Data:</strong> IP address, device model, operating system version, and browser user agent to prevent automated bot intrusion and detect multi-accounting.
        </li>
      </ul>

      <h2>2. How We Safeguard Your Information</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
          margin: '20px 0',
        }}
      >
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <div style={{ background: '#f0f9ff', color: '#0284c7', padding: '6px', borderRadius: '6px' }}>
              <Lock size={18} />
            </div>
            <strong style={{ fontSize: '15px', color: '#0369a1' }}>256-Bit SSL Transport</strong>
          </div>
          <p style={{ margin: 0, fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>
            All communications are encrypted end-to-end matching international online banking and payment gateway encryption standards.
          </p>
        </div>

        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <div style={{ background: '#f0f9ff', color: '#0284c7', padding: '6px', borderRadius: '6px' }}>
              <EyeOff size={18} />
            </div>
            <strong style={{ fontSize: '15px', color: '#0369a1' }}>Zero Data Monetization</strong>
          </div>
          <p style={{ margin: 0, fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>
            We never sell, rent, trade, or lease your phone number or gaming habits to external advertisers or telemarketing agencies.
          </p>
        </div>

        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <div style={{ background: '#fef3c7', color: '#d97706', padding: '6px', borderRadius: '6px' }}>
              <Server size={18} />
            </div>
            <strong style={{ fontSize: '15px', color: '#0369a1' }}>Salted Password Hashing</strong>
          </div>
          <p style={{ margin: 0, fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>
            Your account passwords are stored using one-way cryptographic salted hashes. Even internal engineers cannot view your actual password.
          </p>
        </div>
      </div>

      <h2>3. Your Data Rights &amp; Deletion Requests</h2>
      <p>
        You retain full ownership of your personal data on Sagar Club. At any time, you have the right to:
      </p>
      <ul style={{ margin: '0 0 18px 22px', color: '#334155', fontSize: '14.5px', lineHeight: '1.8' }}>
        <li>Request a full export of your gameplay and financial transaction history.</li>
        <li>Update or correct outdated banking and contact information via verified customer support.</li>
        <li>
          Request permanent account closure and profile anonymization by emailing{' '}
          <code>privacy@sagarclub.in</code> from your registered mobile contact.
        </li>
      </ul>

      <h2>4. Privacy Inquiries &amp; Contact Desk</h2>
      <p>
        For inquiries regarding our data handling practices or to report a privacy concern, please contact our Data Protection Officer at{' '}
        <code>privacy@sagarclub.in</code>.
      </p>
    </article>
  );
};

export default PrivacyPage;
