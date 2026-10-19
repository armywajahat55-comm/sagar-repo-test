import React from 'react';
import {
  Gift,
  Award,
  Users,
  ShieldCheck,
  Zap,
  Globe,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Lock,
  UserPlus,
  LogIn,
  HeartHandshake,
  Compass,
} from 'lucide-react';
import { NavTab } from '../types';
import { AFFILIATE_LINK } from '../constants';

interface AboutUsPageProps {
  onNavigate: (tab: NavTab) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigate }) => {
  return (
    <article className="content" id="about-us-page-article">
      <h1>Sagar Club About Us</h1>

      <p>
        Welcome to{' '}
        <a
          href="/"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club</strong>
        </a>
        , an interactive color prediction and entertainment platform engineered specifically for passionate mobile players across India. Founded on the bedrock principles of statistical transparency, certified algorithmic fairness, instant UPI cash settlements, and community empowerment, Sagar Club brings together hundreds of thousands of active gamers into a secure, thriving digital arena on Sagar Club.
      </p>

      <p>
        On this{' '}
        <a
          href="/about-us"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club About Us</strong>
        </a>{' '}
        page, you will discover the vision behind our platform, the advanced server architecture powering our 60-second Wingo countdowns, our rigorous security protocols, and our commitment to long-term player trust. Whether you are exploring our{' '}
        <a
          href="/sagarclub-register"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club Register</strong>
        </a>{' '}
        welcome rewards or downloading our mobile app via{' '}
        <a
          href="/sagarclub-download"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club APK Download</strong>
        </a>
        , we welcome you to our community.
      </p>

      <figure className="screenshot-card" style={{ margin: '30px auto' }}>
        <span className="screenshot-badge">Sagar Club Official Platform</span>
        <a
          href="https://ibb.co/27777cvR"
          target="_blank"
          className="screenshot-link"
          title="Sagar Club Interface"
        >
          <img
            src="https://i.ibb.co/27777cvR/Sagar-Club-App.webp"
            alt="Sagar-Club-App"
            title="Sagar Club Interface"
            className="screenshot-img"
            width="288"
            height="640"
            loading="lazy"
            decoding="async"
            style={{ maxWidth: '100%', height: 'auto', aspectRatio: '288 / 640', display: 'block' }}
          />
        </a>
        <figcaption className="screenshot-caption">
          <strong>The Sagar Club Gaming Ecosystem</strong>
          <span>Built for low latency, verified mathematical integrity, and prompt payment settlements on Sagar Club.</span>
        </figcaption>
      </figure>

      <h2>Our Story</h2>
      <p>
        The online gaming landscape in India has historically been plagued by two critical issues: slow, opaque withdrawal systems and unreliable game engines that leave players questioning algorithmic fairness. In 2024, our founding team of passionate software engineers and gaming veterans set out to build a platform that completely solves these pain points.
      </p>
      <p>
        The result is <strong>Sagar Club</strong>: an environment where game outcomes are produced by mathematically audited Random Number Generators (RNG) and public decentralized blockchain hashes (Trx Hash), where UPI deposits take under 60 seconds, and where player withdrawals reach bank accounts via automated IMPS within 10 to 30 minutes.
      </p>

      <h2>Our Core Values</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px',
          margin: '24px 0',
        }}
      >
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <div style={{ background: '#f0f9ff', color: '#0284c7', padding: '8px', borderRadius: '8px' }}>
              <ShieldCheck size={20} />
            </div>
            <strong style={{ fontSize: '16px', color: '#0369a1' }}>Provable Integrity</strong>
          </div>
          <p style={{ margin: 0, fontSize: '13.5px', color: '#64748b', lineHeight: 1.6 }}>
            Every Wingo countdown, Aviator flight trajectory, and Trx lottery draw is backed by cryptographically verifiable algorithms. No manual interventions, ever.
          </p>
        </div>

        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <div style={{ background: '#f0f9ff', color: '#0284c7', padding: '8px', borderRadius: '8px' }}>
              <Zap size={20} />
            </div>
            <strong style={{ fontSize: '16px', color: '#0369a1' }}>Punctual Cash Settlements</strong>
          </div>
          <p style={{ margin: 0, fontSize: '13.5px', color: '#64748b', lineHeight: 1.6 }}>
            We understand that when you win, you want your funds promptly. We prioritize withdrawal processing 24/7 with zero artificial payout queues.
          </p>
        </div>

        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <div style={{ background: '#fef3c7', color: '#d97706', padding: '8px', borderRadius: '8px' }}>
              <HeartHandshake size={20} />
            </div>
            <strong style={{ fontSize: '16px', color: '#0369a1' }}>Community Prosperity</strong>
          </div>
          <p style={{ margin: 0, fontSize: '13.5px', color: '#64748b', lineHeight: 1.6 }}>
            Through our Daily Salary Agent Program, we share platform success with hundreds of clan leaders who earn reliable recurring income every midnight.
          </p>
        </div>
      </div>

      <h2>Technology Architecture</h2>
      <p>
        Behind the elegant interface of Sagar Club lies a robust cloud infrastructure built to serve over 100,000 concurrent players without lag or downtime:
      </p>
      <ul style={{ margin: '0 0 18px 22px', color: '#334155', fontSize: '14.5px', lineHeight: '1.8' }}>
        <li>
          <strong>Low-Latency Edge Servers:</strong> CDN nodes distributed strategically across Mumbai, Bengaluru, and Delhi ensure sub-20ms ping times throughout India.
        </li>
        <li>
          <strong>Real-Time WebSocket Sync:</strong> Dynamic countdown timers synchronize in real time down to the single millisecond across web browsers and native mobile APKs.
        </li>
        <li>
          <strong>Institutional SSL Encryption:</strong> Every byte of traffic is guarded with 256-bit encryption, matching online banking standards for utmost privacy.
        </li>
      </ul>

      <h2>Join Our Community</h2>
      <p>
        Whether you are testing color strategies with our ₹500 welcome bonus or building a thriving community of gamers, Sagar Club provides the tools, transparency, and support you need to succeed.
      </p>
      <div style={{ textAlign: 'center', margin: '24px 0' }}>
        <a
          href={AFFILIATE_LINK}
          target="_blank"
          className="cta"
          style={{ textDecoration: 'none', display: 'inline-block' }}
        >
          Join Sagar Club Community Today &rarr;
        </a>
      </div>
    </article>
  );
};

export default AboutUsPage;
