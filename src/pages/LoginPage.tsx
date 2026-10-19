import React from 'react';
import {
  Gift,
  LogIn,
  UserPlus,
  Download,
  ShieldCheck,
  Key,
  Smartphone,
  HelpCircle,
  Lock,
  Clock,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
} from 'lucide-react';
import { NavTab } from '../types';
import { AFFILIATE_LINK } from '../constants';

interface LoginPageProps {
  onNavigate: (tab: NavTab) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  return (
    <article className="content" id="login-page-article">
      <h1>How to Login on Sagar Club</h1>

      <p>
        Signing in to{' '}
        <a
          href="/"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club</strong>
        </a>{' '}
        gives you immediate access to your real-time gaming balance, ongoing Wingo color prediction rounds, active Aviator flights, and daily agent salary credits on Sagar Club. Whether you are using an Android phone, an iPhone via Safari, or a laptop web browser, our authentication portal connects you quickly and securely with bank-grade 256-bit SSL encryption.
      </p>

      <p>
        In this comprehensive guide for{' '}
        <a
          href="/sagarclub-login"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club Login</strong>
        </a>
        , we cover step-by-step sign-in instructions across devices, fast password recovery options, and practical security tips to ensure your wallet funds stay completely safe. New to the platform? Visit our{' '}
        <a
          href="/sagarclub-register"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club Register</strong>
        </a>{' '}
        guide to claim your <strong>₹500 Welcome Bonus</strong> using promo code <strong>SAGARCLUB2026</strong>, or grab the official APK from our{' '}
        <a
          href="/sagarclub-download"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club APK Download</strong>
        </a>{' '}
        portal.
      </p>

      <h2>Sagar Club Login Overview</h2>

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
        <span className="screenshot-badge">Official Member Login Gateway</span>
        <div className="phone-mockup-frame">
          <div className="phone-top-notch">
            <div className="phone-top-speaker"></div>
            <div className="phone-top-camera"></div>
          </div>
          <div className="phone-screen">
            <a href="https://ibb.co/vxVgjSV3" target="_blank">
              <img
                src="https://i.ibb.co/vxVgjSV3/Sagar-Club-Login.webp"
                alt="Sagar-Club-Login"
                title="Sagar Club Member Login Gateway"
                loading="eager"
                decoding="async"
                style={{ border: 0, width: '100%', height: 'auto', display: 'block' }}
              />
            </a>
          </div>
          <div className="phone-home-indicator"></div>
        </div>
        <figcaption className="screenshot-caption">
          <strong>Sagar Club Member Login Gateway</strong>
          <span>Secure authentication screen providing instant profile access and wallet controls on Sagar Club.</span>
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
              <Lock size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0369a1' }}>
              Encrypted Authentication
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
            Your login token and credentials are encrypted using 256-bit SSL, protecting against session hijacking and eavesdropping on Sagar Club.
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
              <Smartphone size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0369a1' }}>
              One-Tap Biometrics
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
            On the Android APK, log in quickly with your phone's fingerprint sensor or face unlock for instant access to high-frequency Wingo rounds.
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
              <Clock size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0369a1' }}>
              Instant Sync
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
            Log in and see your live balance, transaction history, and VIP rebate status refreshed down to the millisecond.
          </p>
        </div>
      </div>

      {/* SECTION 1: HOW TO LOG IN */}
      <h2>How to Login</h2>
      <p>
        Follow these steps to access your player profile without delays:
      </p>

      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', margin: '16px 0' }}>
        <ol style={{ margin: '0 0 16px 20px', padding: 0, color: '#334155', fontSize: '14.5px', lineHeight: '1.8' }}>
          <li>
            <strong>Open the Login Gateway:</strong> Click the{' '}
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              style={{ color: '#0369a1', fontWeight: 700 }}
            >
              Sagar Club Login Link
            </a>{' '}
            or tap Login from your installed APK dashboard.
          </li>
          <li>
            <strong>Enter Your Registered Mobile Number:</strong> Type the 10-digit Indian phone number you utilized during registration. Do not add "+91" or "0" in the primary number box.
          </li>
          <li>
            <strong>Input Your Account Password:</strong> Enter the exact secret password you established during signup.
          </li>
          <li>
            <strong>Enable "Remember Login":</strong> If this is your personal, private smartphone, keep the Remember checkbox selected so you don't get logged out mid-session.
          </li>
          <li>
            <strong>Submit &amp; Enter Dashboard:</strong> Click <strong>Sagar Club Login</strong>. You will be routed immediately to your active gaming lobby with your real balance displayed in the upper-right corner.
          </li>
        </ol>
        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            className="cta"
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            Open Sagar Club Login
          </a>
        </div>
      </div>

      {/* SECTION 2: FORGOT PASSWORD */}
      <h2>Account Recovery</h2>
      <p>
        If you misplaced your password or are receiving an incorrect credentials prompt, don't worry. Your balance and account records remain entirely safe:
      </p>

      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', margin: '16px 0' }}>
        <h4 style={{ margin: '0 0 10px', color: '#0369a1', fontSize: '15px', fontWeight: 700 }}>
          Self-Service Reset Process:
        </h4>
        <ol style={{ margin: '0 0 12px 20px', padding: 0, color: '#334155', fontSize: '14px', lineHeight: '1.7' }}>
          <li>On the login screen, click the <strong>Forgot Password?</strong> prompt.</li>
          <li>Enter your registered 10-digit mobile number and click <strong>Send OTP</strong>.</li>
          <li>Type in the 6-digit verification code sent to your phone via SMS.</li>
          <li>Create and confirm a fresh, strong password, then tap <strong>Reset Password</strong>.</li>
          <li>Return to the login screen and log in with your updated password!</li>
        </ol>
        <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
          <em>Need extra help?</em> Contact the 24/7 Sagar Club Customer Support Help Desk on Telegram if you no longer have access to your registered SIM card.
        </p>
      </div>

      {/* SECTION 3: SECURITY TIPS */}
      <h2>Login Security Tips</h2>
      <ul style={{ margin: '0 0 18px 22px', color: '#334155', fontSize: '14.5px', lineHeight: '1.8' }}>
        <li>
          <strong>Beware of Fake Phishing Domains:</strong> Always ensure the address bar says <code>https://sagarclub.in</code> before typing in your login credentials. We never ask for your password via Telegram direct message.
        </li>
        <li>
          <strong>Never Share One-Time Passwords (OTPs):</strong> Sagar Club customer support representatives will never ask you for your login OTP or withdrawal verification code.
        </li>
        <li>
          <strong>Log Out on Shared Computers:</strong> If you ever sign in from a friend’s computer or an internet cafe, always click the Profile icon and select <strong>Log Out</strong> when finished.
        </li>
      </ul>

      {/* SECTION 4: FAQS */}
      <h2>Sagar Club Login FAQs</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '20px 0' }}>
        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0369a1', fontSize: '15px', marginBottom: '6px' }}>
            1. Why am I getting an "Incorrect Password" error?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.6 }}>
            Check that Caps Lock isn't accidentally enabled on your keyboard. Passwords on Sagar Club are strictly case-sensitive. If you still cannot log in, use the "Forgot Password" link to reset it.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0369a1', fontSize: '15px', marginBottom: '6px' }}>
            2. Can I stay logged in on multiple devices simultaneously?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.6 }}>
            For your security and wallet integrity, logging in on a second active device will automatically log out the previous session. This prevents unauthorized simultaneous betting on your balance.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0369a1', fontSize: '15px', marginBottom: '6px' }}>
            3. How do I enable fingerprint login on the Sagar Club APK?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.6 }}>
            After logging in normally once on the official Android APK, open your profile settings and toggle "Enable Biometric Login". The app will use your Android device's native fingerprint reader for subsequent sign-ins.
          </p>
        </div>
      </div>
    </article>
  );
};

export default LoginPage;
