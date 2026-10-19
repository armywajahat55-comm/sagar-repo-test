import React from 'react';
import {
  Gift,
  Download,
  Smartphone,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Apple,
  Lock,
  Cpu,
  RefreshCw,
  HelpCircle,
  LogIn,
  UserPlus,
  Settings,
} from 'lucide-react';
import { NavTab } from '../types';
import { AFFILIATE_LINK } from '../constants';

interface DownloadPageProps {
  onNavigate: (tab: NavTab) => void;
}

export const DownloadPage: React.FC<DownloadPageProps> = ({ onNavigate }) => {
  return (
    <article className="content" id="download-page-article">
      <h1>How To Download Sagar Club APK</h1>

      <p>
        Enjoying high-frequency color prediction rounds and live crash multipliers on{' '}
        <a
          href="/"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club</strong>
        </a>{' '}
        is substantially faster and smoother with our official Android APK (v2.1.8) and lightweight iOS Safari Web App. Designed specifically for Indian mobile network conditions across 4G, 5G, and broadband Wi-Fi, the native app delivers low-latency WebSocket synchronization, silky 60 FPS transitions, and instant push notifications for daily gift drops on Sagar Club.
      </p>

      <p>
        In this official guide for{' '}
        <a
          href="/sagarclub-download"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club APK Download</strong>
        </a>
        , you will find direct high-speed download links, verified virus-free package scans, an easy walkthrough for enabling Unknown Sources on Android (Samsung, Xiaomi, Oppo, Vivo, OnePlus), Apple iOS Safari setup steps, and technical specifications. If you are new, make sure to visit{' '}
        <a
          href="/sagarclub-register"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club Register</strong>
        </a>{' '}
        to claim your <strong>₹500 Welcome Bonus</strong> using promo code <strong>SAGARCLUB2026</strong>, or head to{' '}
        <a
          href="/sagarclub-login"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club Login</strong>
        </a>{' '}
        if you already have an account.
      </p>

      <h2>Sagar Club APK Overview</h2>

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

      {/* Big Download Button */}
      <div style={{ textAlign: 'center', margin: '24px 0' }}>
        <a
          href={AFFILIATE_LINK}
          target="_blank"
          className="cta"
          style={{
            fontSize: '16px',
            padding: '14px 32px',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <Download size={20} />
          Download Sagar Club APK (v2.1.8 - 15.4 MB)
        </a>
        <div style={{ fontSize: '12.5px', color: '#64748b', marginTop: '8px' }}>
          Safe &amp; Clean APK • Scanned with Google Play Protect • Android 5.0 and Above
        </div>
      </div>

      {/* Official Sagar Club App Screenshot */}
      <figure className="screenshot-card" style={{ margin: '24px auto' }}>
        <span className="screenshot-badge">Official Sagar Club App Interface</span>
        <div className="phone-mockup-frame">
          <div className="phone-top-notch">
            <div className="phone-top-speaker"></div>
            <div className="phone-top-camera"></div>
          </div>
          <div className="phone-screen">
            <a href="https://ibb.co/27777cvR" target="_blank">
              <img
                src="https://i.ibb.co/27777cvR/Sagar-Club-App.webp"
                alt="Sagar-Club-App"
                title="Sagar Club App Interface"
                loading="lazy"
                decoding="async"
                style={{ border: 0, width: '100%', height: 'auto', display: 'block' }}
              />
            </a>
          </div>
          <div className="phone-home-indicator"></div>
        </div>
        <figcaption className="screenshot-caption">
          <strong>Sagar Club Android App Interface</strong>
          <span>Clean 60 FPS mobile layout featuring quick lobby access, wallet integration, and live game rooms.</span>
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
              <Zap size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0369a1' }}>
              Sub-10ms Latency
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
            Direct WebSocket pipe guarantees you see Wingo countdown numbers and Aviator flight curves without browser caching lag on Sagar Club.
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
              <Cpu size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0369a1' }}>
              Featherweight 15.4 MB
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
            Consumes minimal storage space and maintains low RAM footprint, ensuring older budget Android phones run at a buttery 60 FPS.
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
              100% Virus-Free
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
            Cryptographically signed APK package free from malware, adware, or background tracking scripts. Safe and verified.
          </p>
        </div>
      </div>

      {/* SECTION 1: ANDROID STEP-BY-STEP */}
      <h2>Download on Android</h2>
      <p>
        Because Sagar Club facilitates real-money game withdrawals, the APK is distributed directly via our secure cloud servers. Follow these quick steps to install:
      </p>

      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', margin: '16px 0' }}>
        <ol style={{ margin: '0 0 16px 20px', padding: 0, color: '#334155', fontSize: '14.5px', lineHeight: '1.8' }}>
          <li>
            <strong>Download the APK:</strong> Tap the <strong>Sagar Club APK Download</strong> button to begin downloading <code>sagarclub.apk</code> to your device.
          </li>
          <li>
            <strong>Enable Unknown Sources:</strong> When Chrome or your default browser asks for installation permission, tap <em>Settings</em> and toggle <strong>"Allow from this source"</strong>.
            <div style={{ fontSize: '13px', color: '#64748b', margin: '4px 0 0' }}>
              (On Samsung: Settings &rarr; Biometrics &amp; Security &rarr; Install unknown apps; on Xiaomi/Redmi: Settings &rarr; Privacy &rarr; Special App Access &rarr; Install unknown apps).
            </div>
          </li>
          <li>
            <strong>Run the Installer:</strong> Open your notification tray or phone's <em>Downloads</em> folder and tap <code>sagarclub.apk</code>.
          </li>
          <li>
            <strong>Confirm Installation:</strong> Tap <strong>Install</strong>. Android will complete the installation in 3 to 5 seconds.
          </li>
          <li>
            <strong>Open &amp; Sign In:</strong> Launch Sagar Club from your app drawer. Sign in or register to jump straight into live games!
          </li>
        </ol>
      </div>

      {/* SECTION 2: IOS SAFARI SETUP */}
      <h2>Install on iOS</h2>
      <p>
        iOS users can enjoy an identical native app feel without downloading third-party profiles or tweaking device management profiles:
      </p>
      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', margin: '16px 0' }}>
        <ol style={{ margin: '0 0 0 20px', padding: 0, color: '#334155', fontSize: '14.5px', lineHeight: '1.8' }}>
          <li>Open <strong>Safari</strong> on your iPhone and visit <code>https://sagarclub.in</code>.</li>
          <li>Tap the <strong>Share</strong> button (box with an upward arrow) at the bottom center of Safari.</li>
          <li>Scroll through the action list and select <strong>Add to Home Screen</strong>.</li>
          <li>Keep the default name <strong>Sagar Club</strong> and tap <strong>Add</strong> in the top-right corner.</li>
          <li>You now have a full-screen, standalone app on your home screen ready with one-tap access!</li>
        </ol>
      </div>

      {/* SECTION 3: SPECIFICATIONS TABLE */}
      <h2>App Specifications</h2>
      <div className="app-table-wrapper" style={{ margin: '16px 0 24px' }}>
        <table className="app-table">
          <tbody>
            <tr>
              <td style={{ fontWeight: 700 }}>Package Name</td>
              <td>in.sagarclub.official</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 700 }}>App Version</td>
              <td>v2.1.8 (Latest Stable Release)</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 700 }}>File Size</td>
              <td>15.4 MB (Fast Download)</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 700 }}>Minimum OS Requirement</td>
              <td>Android 5.0 (Lollipop) or Later</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 700 }}>RAM Requirement</td>
              <td>1 GB Minimum (2 GB+ Recommended)</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 700 }}>Price</td>
              <td>Free Official Download</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 700 }}>Supported Architectures</td>
              <td>arm64-v8a, armeabi-v7a, x86, x86_64</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 4: FAQS */}
      <h2>Sagar Club Download FAQs</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '20px 0' }}>
        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0369a1', fontSize: '15px', marginBottom: '6px' }}>
            1. Why is Sagar Club not on the Google Play Store?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.6 }}>
            Google Play policies restrict real-money prediction and gaming applications in India. Sagar Club is distributed directly through our official verified server, completely virus-free and cryptographically signed.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0369a1', fontSize: '15px', marginBottom: '6px' }}>
            2. Is the Sagar Club APK safe for my mobile phone?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.6 }}>
            Yes, 100%. The APK contains zero intrusive permissions, does not read your contacts or media, and is verified by Google Play Protect and major mobile anti-virus scanners.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0369a1', fontSize: '15px', marginBottom: '6px' }}>
            3. How do I update to newer versions of Sagar Club?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.6 }}>
            When a new build is released, the app will show an in-app prompt offering a 1-tap seamless update. Alternatively, you can visit this page anytime to grab the newest APK version.
          </p>
        </div>
      </div>
    </article>
  );
};

export default DownloadPage;
