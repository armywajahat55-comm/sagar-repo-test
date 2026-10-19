import React from 'react';
import {
  Gift,
  ShieldAlert,
  HeartHandshake,
  Clock,
  Ban,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Phone,
  ExternalLink,
  ShieldCheck,
  UserCheck,
  Scale,
} from 'lucide-react';
import { NavTab } from '../types';
import { AFFILIATE_LINK } from '../constants';

interface ResponsibleGamingPageProps {
  onNavigate: (tab: NavTab) => void;
}

export const ResponsibleGamingPage: React.FC<ResponsibleGamingPageProps> = ({ onNavigate }) => {
  return (
    <article className="content" id="responsible-gaming-page-article">
      <h1>Sagar Club Responsible Gaming</h1>

      <p>
        At{' '}
        <a
          href="/"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club</strong>
        </a>
        , we believe that interactive online entertainment should always remain engaging, enjoyable, and well within your personal financial boundaries. Color prediction rounds and high-flying multiplier games are designed purely for digital recreation and strategic fun—never as a guaranteed scheme for wealth generation or a substitute for professional employment on Sagar Club.
      </p>

      <p>
        This comprehensive{' '}
        <a
          href="/responsible-gaming"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club Responsible Gaming</strong>
        </a>{' '}
        manifesto details our player protection policies, strict 18+ age verification, an interactive self-assessment checklist, deposit limit tools, and self-exclusion resources. We encourage all players to review our guidelines thoroughly to maintain healthy gaming habits.
      </p>

      <h2>Player Well-Being</h2>
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
            <div style={{ background: '#e0f2fe', color: '#0284c7', padding: '8px', borderRadius: '8px' }}>
              <Ban size={20} />
            </div>
            <strong style={{ fontSize: '16px', color: '#0369a1' }}>Zero Tolerance for Underage Play</strong>
          </div>
          <p style={{ margin: 0, fontSize: '13.5px', color: '#64748b', lineHeight: 1.6 }}>
            Users must be at least 18 years of age. Accounts identified as belonging to minors are immediately suspended and balances refunded.
          </p>
        </div>

        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <div style={{ background: '#fef3c7', color: '#d97706', padding: '8px', borderRadius: '8px' }}>
              <Clock size={20} />
            </div>
            <strong style={{ fontSize: '16px', color: '#0369a1' }}>Session Time Warnings</strong>
          </div>
          <p style={{ margin: 0, fontSize: '13.5px', color: '#64748b', lineHeight: 1.6 }}>
            The platform alerts players after extended gaming sessions, encouraging regular breaks away from screens and devices.
          </p>
        </div>

        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <div style={{ background: '#f0f9ff', color: '#0284c7', padding: '8px', borderRadius: '8px' }}>
              <ShieldCheck size={20} />
            </div>
            <strong style={{ fontSize: '16px', color: '#0369a1' }}>Self-Exclusion Options</strong>
          </div>
          <p style={{ margin: 0, fontSize: '13.5px', color: '#64748b', lineHeight: 1.6 }}>
            Players can request voluntary account cool-down periods ranging from 7 days to permanent closure at any time through support.
          </p>
        </div>
      </div>

      <h2>Self-Assessment Checklist</h2>
      <p>
        Take a moment to honestly reflect on your gaming behavior. If you answer "Yes" to two or more of the questions below, it may be time to take a step back and recalibrate:
      </p>
      <ul style={{ margin: '0 0 18px 22px', color: '#334155', fontSize: '14.5px', lineHeight: '1.8' }}>
        <li>Do you ever game with money intended for essential bills, rent, or groceries?</li>
        <li>Do you immediately place larger bets after a loss in an urgent attempt to win it back ("chasing losses")?</li>
        <li>Have you ever borrowed funds or taken a personal loan to recharge your gaming account?</li>
        <li>Do gaming sessions interfere with your work productivity, family time, or personal relationships?</li>
        <li>Do you feel anxious, restless, or irritable when you are unable to play?</li>
      </ul>

      <h2>Player Safety Tools</h2>
      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', margin: '20px 0' }}>
        <h4 style={{ margin: '0 0 12px', color: '#0369a1', fontSize: '16px', fontWeight: 700 }}>
          Practical Safety Steps You Can Take Today:
        </h4>
        <ol style={{ margin: '0 0 0 20px', padding: 0, color: '#334155', fontSize: '14.5px', lineHeight: '1.8' }}>
          <li>
            <strong>Set a Rigid Daily Budget:</strong> Before opening Sagar Club, decide on a fixed amount you can comfortably afford to spend for entertainment (e.g. ₹200 or ₹500). Once spent, close the app regardless of outcomes.
          </li>
          <li>
            <strong>Never Game Under Emotional Distress:</strong> Avoid gaming when stressed, angry, or exhausted, as emotional states severely distort rational decision-making.
          </li>
          <li>
            <strong>Withdraw Your Winnings Promptly:</strong> Don't leave large accumulated balances in your wallet. Transfer profits directly to your bank account via instant UPI.
          </li>
          <li>
            <strong>Request Temporary Cooling-Off:</strong> If you feel you need a breather, email <code>support@sagarclub.in</code> with the subject <em>"Cool-Off Request"</em> to freeze your account for 7 to 30 days.
          </li>
        </ol>
      </div>

      <h2>Counseling Resources</h2>
      <p>
        If you or someone close to you is experiencing challenges with problem gaming, free and confidential professional counseling is available:
      </p>
      <ul style={{ margin: '0 0 18px 22px', color: '#334155', fontSize: '14.5px', lineHeight: '1.8' }}>
        <li><strong>National Mental Health Helpline (KIRAN):</strong> Call 1800-599-0019 (24/7 toll-free support in multiple Indian languages).</li>
        <li><strong>Gamblers Anonymous India:</strong> Mutual support groups and peer recovery resources across Indian metropolitan chapters.</li>
        <li><strong>Hope Trust India:</strong> Confidential counseling and behavioral addiction support services.</li>
      </ul>
    </article>
  );
};

export default ResponsibleGamingPage;
