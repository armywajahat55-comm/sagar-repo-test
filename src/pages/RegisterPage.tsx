import React from 'react';
import {
  UserPlus,
  LogIn,
  Download,
  Gift,
  CheckCircle2,
  ShieldCheck,
  Lock,
  Clock,
  Award,
  Sparkles,
  HelpCircle,
  Smartphone,
  ChevronRight,
  AlertTriangle,
  FileCheck,
} from 'lucide-react';
import { NavTab } from '../types';
import { AFFILIATE_LINK } from '../constants';

interface RegisterPageProps {
  onNavigate: (tab: NavTab) => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onNavigate }) => {
  return (
    <article className="content" id="register-page-article">
      <h1>How To Register on Sagar Club</h1>

      <p>
        Getting started with{' '}
        <a
          href="/"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club</strong>
        </a>{' '}
        takes under a minute. If you are looking for an intuitive online gaming platform featuring 60-second Wingo color prediction rounds, high-altitude Aviator multipliers, and genuine instant UPI cash withdrawals, this comprehensive walkthrough will guide you through creating and securing your profile on Sagar Club today.
      </p>

      <p>
        By registering through our official portal with invitation code <strong>SAGARCLUB2026</strong>, you immediately unlock eligibility for the <strong>₹500 Welcome Bonus</strong> to test game rounds without dipping heavily into your personal funds. If you already have an account, head over to{' '}
        <a
          href="/sagarclub-login"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club Login</strong>
        </a>
        , or grab the official Android app from our{' '}
        <a
          href="/sagarclub-download"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club APK Download</strong>
        </a>{' '}
        page.
      </p>

      <h2>Sagar Club Register Overview</h2>

      {/* Logo Card */}
      <div className="logo-card">
        <a href="https://ibb.co/qMYm28zX" target="_blank">
          <img
            src="/sagar-club.webp"
            alt="Sagar-Club"
            className="logo-img"
            width={160}
            height={160}
            loading="eager"
            decoding="async"
          />
        </a>
      </div>

      {/* Hero Action Buttons */}
      <div
        className="hero-actions"
        style={{
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          marginTop: '20px',
          marginBottom: '20px',
        }}
      >
        <a
          href={AFFILIATE_LINK}
          target="_blank"
          className="cta"
          style={{ textDecoration: 'none' }}
        >
          Sagar Club Login
        </a>
        <a
          href={AFFILIATE_LINK}
          target="_blank"
          className="cta"
          style={{ textDecoration: 'none' }}
        >
          Sagar Club Register
        </a>
        <a
          href={AFFILIATE_LINK}
          target="_blank"
          className="cta"
          style={{ textDecoration: 'none' }}
        >
          Sagar Club Apk Download
        </a>
      </div>

      {/* Screenshot Card */}
      <figure className="screenshot-card">
        <span className="screenshot-badge">Official Registration Portal</span>
        <div className="phone-mockup-frame">
          <div className="phone-top-notch">
            <div className="phone-top-speaker"></div>
            <div className="phone-top-camera"></div>
          </div>
          <div className="phone-screen">
            <a href="https://ibb.co/VYj1HhyD" target="_blank">
              <img
                src="https://i.ibb.co/VYj1HhyD/Sagar-Club-Register.webp"
                alt="Sagar-Club-Register"
                title="Sagar Club Register Screen"
                loading="eager"
                decoding="async"
                style={{ border: 0, width: '100%', height: 'auto', display: 'block' }}
              />
            </a>
          </div>
          <div className="phone-home-indicator"></div>
        </div>
        <figcaption className="screenshot-caption">
          <strong>Sagar Club Registration &amp; Account Portal</strong>
          <span>Instant mobile registration interface offering verified SSL signup, ₹500 welcome bonus credit, and referral activation on Sagar Club.</span>
        </figcaption>
      </figure>

      {/* 3 Core Highlight Feature Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
          margin: '24px 0',
        }}
      >
        <div
          style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <div style={{ background: '#f0f9ff', color: '#0284c7', padding: '8px', borderRadius: '8px' }}>
              <Gift size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0369a1' }}>
              ₹500 Starter Balance
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
            Apply referral code <strong>SAGARCLUB2026</strong> to have ₹500 added straight to your gaming balance on first sign-in.
          </p>
        </div>

        <div
          style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <div style={{ background: '#f0f9ff', color: '#0284c7', padding: '8px', borderRadius: '8px' }}>
              <Clock size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0369a1' }}>
              Swift Sign-Up Process
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
            No tedious forms or delayed approvals. Enter your phone number, pick your secret password, and start playing within seconds.
          </p>
        </div>

        <div
          style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <div style={{ background: '#fef3c7', color: '#b45309', padding: '8px', borderRadius: '8px' }}>
              <ShieldCheck size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0369a1' }}>
              Protected Account Gateway
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
            Your credentials, phone number, and wallet data are protected with 256-bit SSL encryption on Sagar Club.
          </p>
        </div>
      </div>

      {/* SECTION 1: STEP-BY-STEP REGISTRATION */}
      <h2>How to Register</h2>
      <p>
        Setting up your account on <strong>Sagar Club</strong> is straightforward. Just follow this easy sequence to get your profile active and ready:
      </p>

      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', margin: '16px 0' }}>
        <ol style={{ margin: '0 0 16px 20px', padding: 0, color: '#334155', fontSize: '14.5px', lineHeight: '1.8' }}>
          <li>
            <strong>Open the Sign-Up Screen:</strong> Tap the{' '}
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              style={{ color: '#0369a1', fontWeight: 700 }}
            >
              Live Sagar Club Register Link
            </a>{' '}
            or use the quick button on this page to launch the official registration page.
          </li>
          <li>
            <strong>Provide Your Active Mobile Number:</strong> Type in your 10-digit Indian phone number (+91). Make sure you have access to this number, as it doubles as your account username and wallet recovery key.
          </li>
          <li>
            <strong>Create Your Account Password:</strong> Pick a strong password between 6 and 16 characters. A blend of numbers and letters ensures your wallet stays well protected.
          </li>
          <li>
            <strong>Confirm Your Password:</strong> Retype your password to make sure there are no accidental typing mistakes.
          </li>
          <li>
            <strong>Verify Invitation Code:</strong> Make sure the invite field shows <strong>SAGARCLUB2026</strong>. This code is required to receive your ₹500 welcome bonus and unlock VIP level promotions on Sagar Club.
          </li>
          <li>
            <strong>Agree to Terms &amp; Complete:</strong> Check the agreement box confirming you are at least 18 years old and agree to the platform guidelines. Click <strong>Complete Sagar Club Register &amp; Claim ₹500</strong> to finish.
          </li>
        </ol>
        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            className="cta"
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            Open Sagar Club Register &amp; Claim ₹500
          </a>
        </div>
      </div>

      {/* SECTION 2: REGISTRATION REQUIREMENTS */}
      <h2>Registration Requirements</h2>
      <p>
        To ensure a safe, fair, and legally sound community for every gamer, Sagar Club maintains clear rules on player onboarding:
      </p>
      <ul style={{ margin: '0 0 18px 22px', color: '#334155', fontSize: '14.5px', lineHeight: '1.8' }}>
        <li>
          <strong>Age Requirement:</strong> You must be 18 years or older. Minor play is strictly prohibited.
        </li>
        <li>
          <strong>Single Account Policy:</strong> Each player is permitted only one active profile. Multiple accounts registered from the same mobile device or home Wi-Fi network to repeatedly farm welcome bonuses will be flagged and permanently suspended.
        </li>
        <li>
          <strong>Valid Indian Mobile Number:</strong> A working 10-digit Indian SIM card (Jio, Airtel, Vi, or BSNL) is necessary for SMS alerts and transactional confirmations.
        </li>
        <li>
          <strong>Matching Bank Account Holder:</strong> To withdraw cash winnings smoothly, the bank account name linked for payouts must match the real name declared during KYC verification.
        </li>
      </ul>

      {/* SECTION 3: TROUBLESHOOTING REGISTRATION */}
      <h2>Troubleshooting Registration</h2>
      <p>
        If you experience an unexpected hiccup while attempting to register on Sagar Club, here is how to resolve it immediately:
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '16px 0' }}>
        <div style={{ background: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '10px', padding: '16px' }}>
          <strong style={{ color: '#0284c7', fontSize: '14.5px' }}>"Phone Number Already Registered"</strong>
          <p style={{ margin: '6px 0 0', fontSize: '13.5px', color: '#0369a1', lineHeight: 1.6 }}>
            This occurs if you signed up previously. Instead of registering again, switch to the{' '}
            <a
              href="/sagarclub-login"
              target="_blank"
              style={{ color: '#0284c7', fontWeight: 700, textDecoration: 'underline' }}
            >
              Sagar Club Login
            </a>{' '}
            page and use the <em>Forgot Password</em> link to recover your existing account.
          </p>
        </div>

        <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', padding: '16px' }}>
          <strong style={{ color: '#92400e', fontSize: '14.5px' }}>"Invalid Invitation Code" Error</strong>
          <p style={{ margin: '6px 0 0', fontSize: '13.5px', color: '#78350f', lineHeight: 1.6 }}>
            Ensure you type <strong>SAGARCLUB2026</strong> in capital letters with no accidental leading or trailing spaces. Using the direct link on this website automatically fills the valid invite code for you.
          </p>
        </div>

        <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '16px' }}>
          <strong style={{ color: '#1e40af', fontSize: '14.5px' }}>Slow SMS Delivery on Certain Networks</strong>
          <p style={{ margin: '6px 0 0', fontSize: '13.5px', color: '#1e3a8a', lineHeight: 1.6 }}>
            During peak network hours on state telecom towers, verification SMS messages may take up to 45 seconds. Wait for the countdown timer before hitting "Resend Code" to avoid requesting multiple overlapping codes.
          </p>
        </div>
      </div>

      {/* SECTION 4: REGISTRATION SPECIFICATIONS TABLE */}
      <h2>Registration Summary</h2>
      <div className="app-table-wrapper" style={{ margin: '16px 0 24px' }}>
        <table className="app-table">
          <tbody>
            <tr>
              <td style={{ fontWeight: 700 }}>Portal Name</td>
              <td>Sagar Club Official Register</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 700 }}>Welcome Bonus Code</td>
              <td><strong>SAGARCLUB2026</strong> (Credits ₹500 Starter Balance)</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 700 }}>Registration Fee</td>
              <td>100% Free - Zero Onboarding Cost</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 700 }}>Verification Time</td>
              <td>Instant Automated Verification (&lt; 30 Seconds)</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 700 }}>Device Support</td>
              <td>Android APK, iOS Safari PWA, Mobile Chrome, Desktop Browsers</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 700 }}>Security Protocol</td>
              <td>256-Bit SSL Transport Security</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 5: FAQS */}
      <h2>Sagar Club Register FAQs</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '20px 0' }}>
        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0369a1', fontSize: '15px', marginBottom: '6px' }}>
            1. Is registration on Sagar Club completely free?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.6 }}>
            Yes, creating an account on Sagar Club is 100% free of charge. There are no registration fees, hidden account maintenance charges, or subscription dues.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0369a1', fontSize: '15px', marginBottom: '6px' }}>
            2. How do I make sure I get the ₹500 welcome bonus?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.6 }}>
            Ensure that the recommendation code field contains <strong>SAGARCLUB2026</strong> when you submit the registration form. Your starter bonus balance will be initialized automatically upon your first profile login.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0369a1', fontSize: '15px', marginBottom: '6px' }}>
            3. Can I register with more than one phone number?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.6 }}>
            No. Sagar Club enforces a strict one-account-per-person policy. Attempting to register multiple numbers under the same identity or IP address to abuse promotions will result in automated account freezing.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0369a1', fontSize: '15px', marginBottom: '6px' }}>
            4. What should I do if I didn't receive the SMS code?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.6 }}>
            Check that your mobile phone has active signal coverage and isn't blocking short-code SMS messages in its spam settings. Wait 60 seconds and tap "Resend Code" once. If the issue persists, reach out to the 24/7 Sagar Club Customer Support team.
          </p>
        </div>
      </div>
    </article>
  );
};

export default RegisterPage;
