import React, { useState } from 'react';
import {
  Download,
  Copy,
  Check,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Sparkles,
  Award,
  Gamepad2,
  HelpCircle,
  AlertCircle,
  FileText,
} from 'lucide-react';
import { NavTab } from '../types';

interface HomePageProps {
  onNavigate: (tab: NavTab) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText('392a083s0a');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <article className="content" id="home-page-article">
      <h1>Sagar Club Game</h1>

      <div className="entry-content" itemProp="text">
        <p className="wp-block-paragraph">
          <a href="/" target="_blank">
            Sagar Club
          </a>{' '}
          offers popular online games including Wingo, K3, 5D, and Aviator in one intuitive platform.
        </p>

        <p className="wp-block-paragraph">
          Learn how to complete your{' '}
          <a href="/sagarclub-login" target="_blank">
            Sagar Club Login
          </a>
          , access the{' '}
          <a href="/sagarclub-download" target="_blank">
            Sagar Club App
          </a>
          , and get the official{' '}
          <a href="/sagarclub-download" target="_blank">
            Sagar Club APK Download
          </a>
          .
        </p>

        {/* Section 1: Sagar Club App */}
        <h2 className="wp-block-heading">Sagar Club App</h2>
        <p className="wp-block-paragraph">
          If you prefer mobile access, the{' '}
          <a href="/sagarclub-download" target="_blank">
            Sagar Club App Download
          </a>{' '}
          page is the place to review the current installation information. Check the source and app details before downloading an APK.
        </p>

        <div className="logo-card">
          <a href="https://ibb.co/qMYm28zX" target="_blank">
            <img
              alt="Sagar-Club"
              className="logo-img"
              decoding="sync"
              height={160}
              width={160}
              loading="eager"
              // @ts-expect-error fetchPriority is a valid HTML image attribute for LCP optimization
              fetchpriority="high"
              src="/sagar-club.webp"
            />
          </a>
        </div>

        {/* Verification Code Box in Middle */}
        <div
          style={{
            maxWidth: '460px',
            margin: '18px auto 20px',
            padding: '14px 20px',
            background: '#ffffff',
            border: '1.5px solid #e2e8f0',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
          }}
        >
          <span
            style={{
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
              fontSize: '15.5px',
              fontWeight: 700,
              letterSpacing: '1px',
              color: '#0f172a',
              wordBreak: 'break-all',
              display: 'block',
              textAlign: 'center',
              userSelect: 'all',
            }}
          >
            B8DA250869DE9796AD054977E7273FCF
          </span>
        </div>

        <div style={{ textAlign: 'center', margin: '20px 0 24px' }}>
          <a
            href="/sagarclub-register"
            target="_blank"
            className="cta"
          >
            <Download size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
            Download or Register
          </a>
        </div>

        {/* Information Table */}
        <div className="app-table-wrapper">
          <table className="app-table">
            <tbody>
              <tr>
                <td style={{ fontWeight: 700, backgroundColor: '#f1f5f9' }}>Information</td>
                <td style={{ fontWeight: 700, backgroundColor: '#f8fafc' }}>Details</td>
              </tr>
              <tr>
                <td>App Name</td>
                <td>
                  <a href="/" target="_blank">
                    <strong>Sagar Club</strong>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Current Version</td>
                <td>2.1 (Latest Updates)</td>
              </tr>
              <tr>
                <td>Available Games</td>
                <td>Wingo, 5D, K3, Aviator</td>
              </tr>
              <tr>
                <td>Download Size</td>
                <td>8 MB</td>
              </tr>
              <tr>
                <td>Official Site</td>
                <td>
                  <a href="/" target="_blank">
                    sagarclub.in
                  </a>
                </td>
              </tr>
              <tr>
                <td>Invite Code</td>
                <td>
                  <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '15px', color: '#0284c7' }}>
                    392a083s0a
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    style={{
                      marginLeft: '12px',
                      padding: '4px 10px',
                      minWidth: '96px',
                      justifyContent: 'center',
                      borderRadius: '6px',
                      border: '1px solid #bae6fd',
                      background: '#f0f9ff',
                      color: '#0284c7',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    {copiedCode ? <Check size={12} /> : <Copy size={12} />}
                    {copiedCode ? 'Copied' : 'Copy Code'}
                  </button>
                </td>
              </tr>
              <tr>
                <td>Welcome Reward</td>
                <td><strong>Up to ₹149</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 2: Screenshots */}
        <h2 className="wp-block-heading">Sagar Club App Screenshots</h2>
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            margin: '24px 0 32px',
            alignItems: 'start',
          }}
        >
          {/* 1. Register Screenshot */}
          <figure className="screenshot-card" style={{ margin: 0 }}>
            <span className="screenshot-badge">Sagar Club Register</span>
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
                    width={288}
                    height={640}
                    loading="lazy"
                    decoding="async"
                    style={{ border: 0, width: '100%', height: 'auto', aspectRatio: '288 / 640', display: 'block' }}
                  />
                </a>
              </div>
              <div className="phone-home-indicator"></div>
            </div>
            <figcaption className="screenshot-caption">
              <strong>Sagar Club Register Screen</strong>
              <span>Fast 30-second mobile sign-up with instant ₹500 welcome bonus verification.</span>
            </figcaption>
          </figure>

          {/* 2. App Screenshot */}
          <figure className="screenshot-card" style={{ margin: 0 }}>
            <span className="screenshot-badge">Sagar Club App</span>
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
                    width={288}
                    height={640}
                    loading="lazy"
                    decoding="async"
                    style={{ border: 0, width: '100%', height: 'auto', aspectRatio: '288 / 640', display: 'block' }}
                  />
                </a>
              </div>
              <div className="phone-home-indicator"></div>
            </div>
            <figcaption className="screenshot-caption">
              <strong>Sagar Club Mobile App Interface</strong>
              <span>Fluid 60 FPS gaming lobby with Wingo, K3, 5D, Aviator, and wallet controls.</span>
            </figcaption>
          </figure>

          {/* 3. Login Screenshot */}
          <figure className="screenshot-card" style={{ margin: 0 }}>
            <span className="screenshot-badge">Sagar Club Login</span>
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
                    width={288}
                    height={640}
                    loading="lazy"
                    decoding="async"
                    style={{ border: 0, width: '100%', height: 'auto', aspectRatio: '288 / 640', display: 'block' }}
                  />
                </a>
              </div>
              <div className="phone-home-indicator"></div>
            </div>
            <figcaption className="screenshot-caption">
              <strong>Sagar Club Login Screen</strong>
              <span>Secure member login gateway with instant OTP and wallet balance overview.</span>
            </figcaption>
          </figure>
        </div>

        {/* Section 3: Why Choose Sagar Club */}
        <h2 className="wp-block-heading">Why Choose Sagar Club?</h2>
        <p className="wp-block-paragraph">
          <a href="/" target="_blank">
            Sagar Club
          </a>{' '}
          offers different types of games, from quick prediction rounds to casual arcade-style options. Players can switch between Aviator, Plinko, Wingo, Slots, Limbo, K3, and 5D, although the available game list may change over time.
        </p>

        <h3 className="wp-block-heading">How to Use the Sagar Club Platform</h3>
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', margin: '16px 0' }}>
          <ul className="wp-block-list" style={{ margin: 0, paddingLeft: '22px', color: '#334155', lineHeight: 1.8 }}>
            <li>Open an account using your phone number</li>
            <li>Confirm your number with the OTP you receive</li>
            <li>Add balance to your pocket before playing</li>
            <li>
              Explore{' '}
              <a href="/" target="_blank">
                games
              </a>{' '}
              like <strong>Aviator, WinGo, K3, 5D, Slots, or Colour Prediction</strong>
            </li>
            <li>Enter the game and choose an active round</li>
            <li>Results appear automatically once the round ends</li>
            <li>Any rewards you receive are added to your wallet balance</li>
            <li>Withdraw available funds after meeting the platform’s withdrawal requirements</li>
          </ul>
        </div>

        {/* Section 4: Registration Tutorial */}
        <h2 className="wp-block-heading">Create Your Sagar Club Account (Registration Tutorial)</h2>
        <p className="wp-block-paragraph">
          Opening an account on{' '}
          <a href="/" target="_blank">
            Sagar Club
          </a>{' '}
          doesn’t take much. You’ll just need a working phone number and a few minutes to finish the setup.
        </p>

        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', margin: '16px 0' }}>
          <ul className="wp-block-list" style={{ margin: 0, paddingLeft: '22px', color: '#334155', lineHeight: 1.8 }}>
            <li>
              Open the{' '}
              <a href="/" target="_blank">
                Sagar Club website
              </a>{' '}
              on your phone or computer
            </li>
            <li>Choose the sign-up option</li>
            <li>Enter the mobile number you want to use</li>
            <li>Create a password for your account</li>
            <li>Type in the OTP sent to your phone</li>
            <li>Add a referral code (<code>392a083s0a</code>) if you have one</li>
            <li>Finish the registration and log in to your new account</li>
          </ul>
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <a href="/sagarclub-register" target="_blank">
              Open Sagar Club Register
            </a>
          </div>
        </div>

        {/* Section 5: Sagar Club Login */}
        <h2 className="wp-block-heading">Sagar Club Login (Accessing Your Account)</h2>
        <p className="wp-block-paragraph">
          If you already have a{' '}
          <a href="/" target="_blank">
            Sagar Club
          </a>{' '}
          account, use the{' '}
          <a href="/sagarclub-login" target="_blank">
            Sagar Club Login
          </a>{' '}
          page to access it. Keep the phone number and password you used during registration ready before you start. If you are using a mobile device, you can also check the{' '}
          <a href="/sagarclub-download" target="_blank">
            Sagar Club App
          </a>{' '}
          information before signing in.
        </p>

        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', margin: '16px 0' }}>
          <ul className="wp-block-list" style={{ margin: 0, paddingLeft: '22px', color: '#334155', lineHeight: 1.8 }}>
            <li>
              Open the{' '}
              <a href="/" target="_blank">
                Sagar Club app
              </a>{' '}
              or website
            </li>
            <li>
              Find the{' '}
              <a href="/sagarclub-login" target="_blank">
                login
              </a>{' '}
              section on the main page
            </li>
            <li>Enter your registered mobile number</li>
            <li>Type in your account password</li>
            <li>Select Sign In to open your account</li>
          </ul>
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <a href="/sagarclub-login" target="_blank">
              Sign In to Sagar Club
            </a>
          </div>
        </div>

        <p className="wp-block-paragraph">
          Once you’re in, you can view your wallet balance, browse the available games, and check your recent account activity from the same dashboard.
        </p>

        {/* Section 6: Sagar Club App Download */}
        <h2 className="wp-block-heading">Sagar Club App Download (Android Installation)</h2>
        <p className="wp-block-paragraph">
          The{' '}
          <a href="/sagarclub-download" target="_blank">
            Sagar Club App
          </a>{' '}
          can be installed on Android using an APK file when that option is available. If you are searching for{' '}
          <a href="/sagarclub-download" target="_blank">
            Sagar Club APK Download
          </a>
          , check the current app information on the download page and confirm that the file is from a source you trust. The{' '}
          <a href="/sagarclub-download" target="_blank">
            Sagar Club APK
          </a>{' '}
          version and availability may change, so review the information shown before installing it. Only continue with a{' '}
          <a href="/sagarclub-download" target="_blank">
            Sagar Club APK Download
          </a>{' '}
          after checking that the source is trusted.
        </p>

        <div className="logo-card">
          <a href="https://ibb.co/qMYm28zX" target="_blank">
            <img
              alt="Sagar-Club"
              className="logo-img"
              decoding="async"
              height={160}
              width={160}
              loading="lazy"
              src="https://i.ibb.co/qMYm28zX/Sagar-Club.webp"
            />
          </a>
        </div>

        <div style={{ textAlign: 'center', margin: '20px 0 24px' }}>
          <a
            href="/sagarclub-download"
            target="_blank"
            className="cta"
            aria-label="Open Sagar Club app download information"
          >
            <Download size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
            Download Now
          </a>
        </div>

        <h3 className="wp-block-heading">How to Download the Sagar Club App on Android</h3>
        <p className="wp-block-paragraph">
          If you’re installing{' '}
          <a href="/" target="_blank">
            Sagar Club
          </a>{' '}
          through an APK file, the process is fairly straightforward:
        </p>

        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', margin: '16px 0' }}>
          <ul className="wp-block-list" style={{ margin: 0, paddingLeft: '22px', color: '#334155', lineHeight: 1.8 }}>
            <li>Open the official Sagar Club website on your Android phone</li>
            <li>
              Look for the app download option and review the available{' '}
              <a href="/" target="_blank">
                Sagar Club APK Download
              </a>{' '}
              information
            </li>
            <li>Download the installation file to your device</li>
            <li>If Android blocks the file, open your phone settings and allow installs from that browser or file manager</li>
            <li>Return to the downloaded APK and open it</li>
            <li>Tap Install and let the process finish</li>
            <li>Launch the app once it has been added to your phone</li>
            <li>Sign in with your existing account or create a new one</li>
          </ul>
        </div>

        <div style={{ background: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '10px', padding: '14px 18px', margin: '16px 0', fontSize: '13.5px', color: '#0369a1' }}>
          <strong>Note:</strong> Use a trusted source for APK downloads, check the permissions the app requests, and never share your password or OTP with anyone.
        </div>

        {/* Section 7: Game Options Available */}
        <h2 className="wp-block-heading">Game Options Available on Sagar Club</h2>
        <p className="wp-block-paragraph">
          <a href="/" target="_blank">
            Sagar Club
          </a>{' '}
          gives players a mix of{' '}
          <a href="/" target="_blank">
            game
          </a>{' '}
          styles to choose from, so the experience doesn’t feel limited to just one type of play. Depending on what’s currently available, users may find prediction games, number-based titles, card games, quick-action games, and other casual options in the same place.
        </p>

        {/* 6 Game Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            margin: '24px 0 32px',
          }}
        >
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
            <h3 className="wp-block-heading" style={{ marginTop: 0 }}>Colour Prediction &amp; Win Go</h3>
            <p className="wp-block-paragraph" style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.6 }}>
              Wingo offers quick colour prediction rounds with different time options, including 30 seconds, 1 minute, 3 minutes, and 5 minutes.
            </p>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
            <h3 className="wp-block-heading" style={{ marginTop: 0 }}>Dragon Tiger</h3>
            <p className="wp-block-paragraph" style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.6 }}>
              Dragon Tiger is a quick card game where players choose which side, Dragon or Tiger, will receive the higher card.
            </p>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
            <h3 className="wp-block-heading" style={{ marginTop: 0 }}>Aviator Game</h3>
            <p className="wp-block-paragraph" style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.6 }}>
              Aviator brings a faster style of play, with short rounds and a simple interface that keeps the action moving.
            </p>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
            <h3 className="wp-block-heading" style={{ marginTop: 0 }}>Slots &amp; Casino Games</h3>
            <p className="wp-block-paragraph" style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.6 }}>
              Browse a mix of slot and casino-style games from providers such as Pragmatic Play, PG Soft, Microgaming, JDB, and other well-known game studios.
            </p>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
            <h3 className="wp-block-heading" style={{ marginTop: 0 }}>Chicken Road &amp; Crash Games</h3>
            <p className="wp-block-paragraph" style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.6 }}>
              Chicken Road is a fast-paced crash game where each successful step increases the multiplier and players decide when to cash out.
            </p>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
            <h3 className="wp-block-heading" style={{ marginTop: 0 }}>5D &amp; K3 Games</h3>
            <p className="wp-block-paragraph" style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.6 }}>
              5D and K3 focus on number-based rounds with a simple format and quick results, making them easy to pick up for players who prefer faster gameplay.
            </p>
          </div>
        </div>

        {/* Section 8: Depositing Funds */}
        <h2 className="wp-block-heading">Depositing Funds on Sagar Club</h2>
        <p className="wp-block-paragraph">
          Once you’re logged in, the deposit section is available through your{' '}
          <a href="/" target="_blank">
            Sagar Club
          </a>{' '}
          wallet. From there, you can check the payment methods currently supported, choose the one that suits you, enter the amount you want to deposit, and follow the on-screen instructions to complete the payment.
        </p>

        <h3 className="wp-block-heading">How to Fund Your Sagar Club Wallet</h3>
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', margin: '16px 0' }}>
          <ul className="wp-block-list" style={{ margin: 0, paddingLeft: '22px', color: '#334155', lineHeight: 1.8 }}>
            <li>
              Sign in to your{' '}
              <a href="/" target="_blank">
                Sagar Club
              </a>{' '}
              account
            </li>
            <li>Open the Wallet, Recharge, or Funds section</li>
            <li>Choose the Deposit option</li>
            <li>Enter the amount you want to add</li>
            <li>Pick one of the payment methods currently available</li>
            <li>Check the payment information before continuing</li>
            <li>Follow the instructions shown on the screen to finish the transaction</li>
          </ul>
        </div>

        <p className="wp-block-paragraph">
          After the payment goes through, the new balance should appear in your wallet based on the platform’s processing time.
        </p>

        <div style={{ background: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '10px', padding: '14px 18px', margin: '16px 0', fontSize: '13.5px', color: '#0369a1' }}>
          <strong>Tip:</strong> Double-check the payment details before confirming anything, and keep your OTP, password, and banking information private.
        </div>

        {/* Section 9: Linking Bank Account */}
        <h2 className="wp-block-heading">Linking Your Bank Account to Sagar Club</h2>
        <p className="wp-block-paragraph">
          Before requesting a withdrawal, you may need to connect a bank account to your{' '}
          <a href="/" target="_blank">
            Sagar Club
          </a>{' '}
          profile. This can usually be done from the wallet or payment settings, where you can enter your banking details and save them for future withdrawal requests.
        </p>

        <h3 className="wp-block-heading">Adding Your Bank Details</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '16px 0' }}>
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px' }}>
            <h4 className="wp-block-heading" style={{ margin: '0 0 6px', textAlign: 'left', padding: '4px 10px', borderRadius: '6px' }}>
              1. Sign In to Sagar Club
            </h4>
            <p className="wp-block-paragraph" style={{ margin: 0, fontSize: '14px', color: '#475569' }}>
              Open{' '}
              <a href="/" target="_blank">
                Sagar Club
              </a>{' '}
              and log in with the mobile number and password connected to your account.
            </p>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px' }}>
            <h4 className="wp-block-heading" style={{ margin: '0 0 6px', textAlign: 'left', padding: '4px 10px', borderRadius: '6px' }}>
              2. Open Your Account Settings
            </h4>
            <p className="wp-block-paragraph" style={{ margin: 0, fontSize: '14px', color: '#475569' }}>
              Go to the Wallet, Profile, or Account area from the main dashboard.
            </p>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px' }}>
            <h4 className="wp-block-heading" style={{ margin: '0 0 6px', textAlign: 'left', padding: '4px 10px', borderRadius: '6px' }}>
              3. Find the Bank Account Section
            </h4>
            <p className="wp-block-paragraph" style={{ margin: 0, fontSize: '14px', color: '#475569' }}>
              Look for an option such as Bank Account, Payment Details, or Add Bank Account.
            </p>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px' }}>
            <h4 className="wp-block-heading" style={{ margin: '0 0 6px', textAlign: 'left', padding: '4px 10px', borderRadius: '6px' }}>
              4. Fill In Your Banking Information
            </h4>
            <p className="wp-block-paragraph" style={{ margin: '0 0 8px', fontSize: '14px', color: '#475569' }}>
              Enter the details requested on the page, which may include:
            </p>
            <ul className="wp-block-list" style={{ margin: 0, paddingLeft: '22px', fontSize: '13.5px', color: '#334155' }}>
              <li>Account holder name</li>
              <li>Bank name</li>
              <li>Account number</li>
              <li>IFSC code</li>
            </ul>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px' }}>
            <h4 className="wp-block-heading" style={{ margin: '0 0 6px', textAlign: 'left', padding: '4px 10px', borderRadius: '6px' }}>
              5. Review Everything Before Saving
            </h4>
            <p className="wp-block-paragraph" style={{ margin: 0, fontSize: '14px', color: '#475569' }}>
              Check the information carefully, especially the account number and IFSC code, before submitting it.
            </p>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px' }}>
            <h4 className="wp-block-heading" style={{ margin: '0 0 6px', textAlign: 'left', padding: '4px 10px', borderRadius: '6px' }}>
              6. Verify Your Account
            </h4>
            <p className="wp-block-paragraph" style={{ margin: 0, fontSize: '14px', color: '#475569' }}>
              If{' '}
              <a href="/" target="_blank">
                Sagar Club
              </a>{' '}
              asks for additional confirmation, complete the OTP or verification step shown on the screen.
            </p>
          </div>
        </div>

        <div style={{ background: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '10px', padding: '14px 18px', margin: '16px 0', fontSize: '13.5px', color: '#0369a1' }}>
          <strong>Tip:</strong> Keep your OTP, password, PIN, and other private banking details to yourself, and always make sure the information you enter is correct.
        </div>

        {/* Section 10: Playing Wingo */}
        <h2 className="wp-block-heading">Playing Wingo Colour Prediction on Sagar Club</h2>
        <p className="wp-block-paragraph">
          Wingo is built around short prediction rounds where players choose a colour or number before the timer ends. The available choices can vary by round, so it helps to check the current options before placing a prediction.
        </p>

        <h2 className="wp-block-heading">How a Wingo Round Works on Sagar Club</h2>
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', margin: '16px 0' }}>
          <ul className="wp-block-list" style={{ margin: 0, paddingLeft: '22px', color: '#334155', lineHeight: 1.8 }}>
            <li>
              Sign in to your{' '}
              <a href="/" target="_blank">
                Sagar Club
              </a>{' '}
              account
            </li>
            <li>Open Wingo from the game menu</li>
            <li>Pick a round length, such as 30 seconds, 1 minute, 3 minutes, or 5 minutes</li>
            <li>Choose whether you want to predict a colour or a number</li>
            <li>Make your selection before the countdown reaches zero</li>
            <li>Check the round rules before confirming your choice</li>
            <li>Wait for the result once the round closes</li>
            <li>View the outcome and any balance changes directly from your account</li>
          </ul>
        </div>

        {/* Win Go Colour Guide */}
        <h2 className="wp-block-heading">🎯 Win Go Colour &amp; Number Guide</h2>
        <p className="wp-block-paragraph">
          In Wingo, each number is usually linked to a specific colour group. Based on the rules shown for the round, the combinations may look like this:
        </p>

        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', margin: '16px 0' }}>
          <ul className="wp-block-list" style={{ margin: 0, paddingLeft: '22px', color: '#334155', lineHeight: 2, fontSize: '15px' }}>
            <li>🟢 <strong>Green:</strong> 1, 3, 7, 9</li>
            <li>🔴 <strong>Red:</strong> 2, 4, 6, 8</li>
            <li>🟣 <strong>Violet:</strong> 0, 5</li>
          </ul>
        </div>

        <div style={{ background: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '10px', padding: '14px 18px', margin: '16px 0', fontSize: '13.5px', color: '#0369a1' }}>
          <strong>Note:</strong> The colour mapping and round rules can change, so always check the latest details shown in the game before making a selection.
        </div>

        {/* Section 11: Withdrawing Funds */}
        <h2 className="wp-block-heading">Withdrawing Funds from Sagar Club</h2>
        <p className="wp-block-paragraph">
          If you have an available balance in your{' '}
          <a href="/" target="_blank">
            Sagar Club
          </a>{' '}
          account, you can request a withdrawal through the payment or wallet section. Before submitting it, check the current withdrawal limits, linked bank details, and any requirements shown on your account.
        </p>

        <h3 className="wp-block-heading">Sagar Club Withdrawal Process</h3>
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', margin: '16px 0' }}>
          <p className="wp-block-paragraph" style={{ margin: '0 0 10px', color: '#334155' }}>
            <strong>Step 1: Sign In.</strong> Open{' '}
            <a href="/" target="_blank">
              Sagar Club
            </a>{' '}
            and log in with the details linked to your account.
          </p>
          <p className="wp-block-paragraph" style={{ margin: '0 0 10px', color: '#334155' }}>
            <strong>Step 2: Open the Withdrawal Section.</strong> Go to your Wallet or Funds area and select the withdrawal option.
          </p>
          <p className="wp-block-paragraph" style={{ margin: '0 0 10px', color: '#334155' }}>
            <strong>Step 3: Choose Where to Receive the Money.</strong> Pick one of the available withdrawal methods, which may include:
          </p>
          <ul className="wp-block-list" style={{ margin: '0 0 10px', paddingLeft: '22px', color: '#334155' }}>
            <li><strong>Bank Account</strong></li>
            <li><strong>UPI ID</strong></li>
          </ul>
          <p className="wp-block-paragraph" style={{ margin: '0 0 10px', color: '#334155' }}>
            <strong>Step 4: Enter the Amount.</strong> Type in how much you want to withdraw and make sure it falls within the limits shown on your account.
          </p>
          <p className="wp-block-paragraph" style={{ margin: 0, color: '#334155' }}>
            <strong>Step 5: Check and Confirm.</strong> Review the payment details and withdrawal amount before sending the request.
          </p>
        </div>

        <h3 className="wp-block-heading">Withdrawal Information</h3>
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', margin: '16px 0' }}>
          <ul className="wp-block-list" style={{ margin: 0, paddingLeft: '22px', color: '#334155', lineHeight: 1.8 }}>
            <li><strong>Minimum Amount:</strong> Based on the current withdrawal rules</li>
            <li><strong>Maximum Amount:</strong> Can vary depending on account limits</li>
            <li><strong>Processing Time:</strong> Depends on the payment method and account verification</li>
            <li><strong>Withdrawal Frequency:</strong> Daily requests may have certain limits</li>
          </ul>
        </div>

        <div style={{ background: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '10px', padding: '14px 18px', margin: '16px 0', fontSize: '13.5px', color: '#0369a1' }}>
          <strong>Tip:</strong> Check your bank account or UPI details carefully before confirming. Keep your OTP, password, and other account information private.
        </div>

        {/* Section 12: Redeem Gift Code */}
        <h2 className="wp-block-heading">Redeem Your Sagar Club Gift Code</h2>
        <p className="wp-block-paragraph">
          <a href="/" target="_blank">
            Sagar Club
          </a>{' '}
          gift codes can unlock promotional rewards or special bonuses when an active offer is available. Each code may have different terms, so it’s best to check whether the code is still valid before trying to use it.
        </p>

        <h3 className="wp-block-heading">Steps to Claim Your Sagar Club Gift Code</h3>
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', margin: '16px 0' }}>
          <ul className="wp-block-list" style={{ margin: 0, paddingLeft: '22px', color: '#334155', lineHeight: 1.8 }}>
            <li>
              Log in to your{' '}
              <a href="/" target="_blank">
                Sagar Club
              </a>{' '}
              account
            </li>
            <li>Open the Gift Code or Rewards section</li>
            <li>Enter the code exactly as provided (e.g. <code>392a083s0a</code>)</li>
            <li>Tap the redeem button to submit it</li>
            <li>Wait for the code to be checked</li>
            <li>If accepted, the reward will be added based on the current promotion</li>
          </ul>
        </div>

        <div style={{ background: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '10px', padding: '14px 18px', margin: '16px 0', fontSize: '13.5px', color: '#0369a1' }}>
          <strong>Tip:</strong> Some codes may expire or only work for selected accounts, so always check the conditions before redeeming.
        </div>

        {/* Section 13: Disclaimer */}
        <h2 className="wp-block-heading">Disclaimer</h2>
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', margin: '16px 0', color: '#475569', fontSize: '14px', lineHeight: 1.7 }}>
          <p className="wp-block-paragraph">
            This website is an independent information resource and is not operated, owned, or officially connected with{' '}
            <a href="/" target="_blank">
              Sagar Club
            </a>{' '}
            or any other gaming platform mentioned here. The content is provided to help readers understand general topics such as account setup, app installation, platform features, and basic usage.
          </p>

          <p className="wp-block-paragraph">
            We do not represent{' '}
            <a href="/" target="_blank">
              Sagar Club
            </a>
            , manage its services, or control any third-party platform featured on this website. Brand names, logos, trademarks, and other related materials remain the property of their respective owners.
          </p>

          <p className="wp-block-paragraph">
            Any activity involving real money comes with financial risk. Deposits, withdrawals, bonuses, and game results are handled by the third-party platform itself, and there is no guarantee of profit or successful returns. Users should review the rules carefully and make their own decisions before spending money.
          </p>

          <p className="wp-block-paragraph" style={{ margin: 0 }}>
            Anyone who chooses to use a gaming app or website does so at their own discretion. This website is not responsible for losses, account restrictions, payment delays, technical problems, or other issues that may arise from using third-party services. Users are encouraged to play responsibly, protect their personal information, and follow the laws that apply in their location.
          </p>
        </div>

        {/* Section 14: Play Responsibly */}
        <h2 className="wp-block-heading">Play Responsibly on Sagar Club</h2>
        <p className="wp-block-paragraph">
          <a href="/" target="_blank">
            Sagar Club
          </a>{' '}
          should be used for entertainment, not as a way to make guaranteed income. Keeping track of your time and spending can help make the experience more manageable and reduce unnecessary financial risk.
        </p>

        <h3 className="wp-block-heading">Simple Ways to Stay in Control</h3>
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', margin: '16px 0' }}>
          <ul className="wp-block-list" style={{ margin: 0, paddingLeft: '22px', color: '#334155', lineHeight: 1.8 }}>
            <li><strong>Choose a Budget:</strong> Decide how much you are comfortable spending before you start and stick to that amount.</li>
            <li><strong>Take Regular Breaks:</strong> Avoid playing for long periods without stopping.</li>
            <li>
              <strong>Keep Expectations Realistic:</strong>{' '}
              <a href="/" target="_blank">
                Game
              </a>{' '}
              results are never guaranteed, and losses are always possible.
            </li>
            <li><strong>Don’t Try to Win Back Losses:</strong> Increasing your spending after losing can quickly lead to bigger losses.</li>
            <li><strong>Know When to Stop:</strong> If playing starts to feel stressful or frustrating, step away for a while.</li>
            <li><strong>Keep Your Account Secure:</strong> Never share your password, OTP, PIN, or login information with anyone.</li>
            <li>
              <strong>Follow Age and Local Rules:</strong>{' '}
              <a href="/" target="_blank">
                Sagar Club
              </a>{' '}
              should only be accessed by adults aged 18 or above where permitted by applicable law.
            </li>
          </ul>
        </div>

        {/* Section 15: Sagar Club FAQs */}
        <h2 className="wp-block-heading">Sagar Club FAQs</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '20px 0 28px' }}>
          <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <h3 className="wp-block-heading" style={{ fontSize: '15px', color: '#ffffff', margin: '0 0 8px', textAlign: 'left', padding: '6px 12px', borderRadius: '8px' }}>
              1. What is Sagar Club?
            </h3>
            <p className="wp-block-paragraph" style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
              <a href="/" target="_blank">
                Sagar Club
              </a>{' '}
              is a gaming platform that brings together different types of games, including prediction games, card games, crash-style games, and slots. The available titles and features may change over time depending on the platform.
            </p>
          </div>

          <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <h3 className="wp-block-heading" style={{ fontSize: '15px', color: '#ffffff', margin: '0 0 8px', textAlign: 'left', padding: '6px 12px', borderRadius: '8px' }}>
              2. Can I install Sagar Club on an Android phone?
            </h3>
            <p className="wp-block-paragraph" style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
              Yes, if a compatible{' '}
              <a href="/" target="_blank">
                Sagar Club APK
              </a>{' '}
              is currently available from a source you trust. Download the file only after checking the source, requested permissions, and compatibility with your Android device.
            </p>
          </div>

          <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <h3 className="wp-block-heading" style={{ fontSize: '15px', color: '#ffffff', margin: '0 0 8px', textAlign: 'left', padding: '6px 12px', borderRadius: '8px' }}>
              3. Where can I see my Sagar Club payment history?
            </h3>
            <p className="wp-block-paragraph" style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
              You can usually find deposit, withdrawal, and wallet activity inside the transaction or wallet section of your account.
            </p>
          </div>

          <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <h3 className="wp-block-heading" style={{ fontSize: '15px', color: '#ffffff', margin: '0 0 8px', textAlign: 'left', padding: '6px 12px', borderRadius: '8px' }}>
              4. Why can a Sagar Club withdrawal take longer than expected?
            </h3>
            <p className="wp-block-paragraph" style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
              Processing may take extra time because of payment checks, verification, or the selected withdrawal method. It is best to check the transaction status before trying again.
            </p>
          </div>

          <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <h3 className="wp-block-heading" style={{ fontSize: '15px', color: '#ffffff', margin: '0 0 8px', textAlign: 'left', padding: '6px 12px', borderRadius: '8px' }}>
              5. Can I connect my bank account to Sagar Club?
            </h3>
            <p className="wp-block-paragraph" style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
              If bank withdrawals are supported, you may be able to add your bank details from the wallet or withdrawal settings.
            </p>
          </div>

          <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <h3 className="wp-block-heading" style={{ fontSize: '15px', color: '#ffffff', margin: '0 0 8px', textAlign: 'left', padding: '6px 12px', borderRadius: '8px' }}>
              6. What are Sagar Club gift codes used for?
            </h3>
            <p className="wp-block-paragraph" style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
              Gift codes may be used to claim selected bonuses, rewards, or promotional offers. The value and validity of each code can vary.
            </p>
          </div>

          <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <h3 className="wp-block-heading" style={{ fontSize: '15px', color: '#ffffff', margin: '0 0 8px', textAlign: 'left', padding: '6px 12px', borderRadius: '8px' }}>
              7. Does Sagar Club have an invite or referral feature?
            </h3>
            <p className="wp-block-paragraph" style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
              A referral feature may be available for users who want to invite other people. Any rewards depend on the current referral terms shown on the platform.
            </p>
          </div>

          <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <h3 className="wp-block-heading" style={{ fontSize: '15px', color: '#ffffff', margin: '0 0 8px', textAlign: 'left', padding: '6px 12px', borderRadius: '8px' }}>
              8. What should I do if my deposit does not show up?
            </h3>
            <p className="wp-block-paragraph" style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
              Check whether the payment was completed successfully and keep the transaction reference. If the wallet still does not update, contact the available support channel.
            </p>
          </div>

          <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <h3 className="wp-block-heading" style={{ fontSize: '15px', color: '#ffffff', margin: '0 0 8px', textAlign: 'left', padding: '6px 12px', borderRadius: '8px' }}>
              9. Can Sagar Club games change over time?
            </h3>
            <p className="wp-block-paragraph" style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
              Yes. The game list can be updated, and some titles or providers may be added or removed depending on availability.
            </p>
          </div>

          <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <h3 className="wp-block-heading" style={{ fontSize: '15px', color: '#ffffff', margin: '0 0 8px', textAlign: 'left', padding: '6px 12px', borderRadius: '8px' }}>
              10. How can I protect my Sagar Club account?
            </h3>
            <p className="wp-block-paragraph" style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
              Use a strong password, keep your OTP private, and never share your login or banking details with anyone.
            </p>
          </div>
        </div>

        {/* Section 16: What to Keep in Mind */}
        <h2 className="wp-block-heading">What to Keep in Mind</h2>
        <p className="wp-block-paragraph">
          <a href="/" target="_blank">
            Sagar Club
          </a>{' '}
          gives users access to different games, wallet features, deposits, withdrawals, gift codes, and referral options in one place. Since the platform can update its games, bonuses, and payment methods over time, the experience may not always stay exactly the same.
        </p>

        <p className="wp-block-paragraph">
          This guide covers the main things you may want to know about Sagar Club, including registration, login, APK installation, wallet use, game options, deposits, withdrawals, gift codes, and referrals.
        </p>

        <p className="wp-block-paragraph">
          When using Sagar Club, keep an eye on your spending and play within limits that feel comfortable for you. Gaming should stay as entertainment, and there’s never a guarantee that every round will end in a win.
        </p>
      </div>
    </article>
  );
};

export default HomePage;
