import React from 'react';
import {
  Gift,
  FileText,
  ShieldCheck,
  Scale,
  CheckCircle2,
  AlertTriangle,
  Lock,
  ExternalLink,
  HelpCircle,
  LogIn,
  UserPlus,
} from 'lucide-react';
import { NavTab } from '../types';
import { AFFILIATE_LINK } from '../constants';

interface TermsPageProps {
  onNavigate: (tab: NavTab) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <article className="content" id="terms-page-article">
      <h1>Sagar Club Terms and Conditions</h1>

      <p>
        Welcome to the official terms agreement for{' '}
        <a
          href="/"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club</strong>
        </a>
        . These Terms and Conditions govern your access to and use of our website (<code>https://sagarclub.in</code>), mobile applications, Android APK (v2.1.8), and all interactive games and financial utilities on Sagar Club. By signing up via{' '}
        <a
          href="/sagarclub-register"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club Register</strong>
        </a>
        , accessing your dashboard via{' '}
        <a
          href="/sagarclub-login"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club Login</strong>
        </a>
        , or participating in color prediction rounds, you formally acknowledge and agree to comply with these terms.
      </p>

      <p>
        Please take a few minutes to review these conditions alongside our{' '}
        <a
          href="/privacy-policy"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club Privacy Policy</strong>
        </a>{' '}
        and{' '}
        <a
          href="/responsible-gaming"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club Responsible Gaming</strong>
        </a>{' '}
        charter. If you do not agree with any provision stated here, you must refrain from registering an account or placing predictions on Sagar Club.
      </p>

      <h2>1. Account Eligibility &amp; User Verification</h2>
      <ul style={{ margin: '0 0 18px 22px', color: '#334155', fontSize: '14.5px', lineHeight: '1.8' }}>
        <li>
          <strong>Age Requirement:</strong> You must be at least 18 years of age or the legal age of majority in your jurisdiction. Underage registration is strictly prohibited and subject to immediate account termination.
        </li>
        <li>
          <strong>One Account Restriction:</strong> Each individual is permitted only one active profile on Sagar Club. Creating multiple accounts from the same physical device, SIM card, or payment instrument to farm bonuses or manipulate referral levels will result in immediate disqualification and forfeiture of unverified balances.
        </li>
        <li>
          <strong>Accurate Details:</strong> You warrant that all information provided during registration—including your 10-digit mobile number and banking details—is authentic, current, and belongs solely to you.
        </li>
      </ul>

      <h2>2. Deposits, Withdrawals &amp; Wallet Management</h2>
      <ul style={{ margin: '0 0 18px 22px', color: '#334155', fontSize: '14.5px', lineHeight: '1.8' }}>
        <li>
          <strong>Minimum Limits:</strong> The minimum deposit threshold on Sagar Club is ₹100 via authorized UPI rails. The minimum withdrawal threshold is ₹110 per request via direct IMPS bank transfer.
        </li>
        <li>
          <strong>Turnover Requirements:</strong> In accordance with standard anti-money laundering (AML) standards, deposited funds must undergo standard 1x gameplay turnover before they become eligible for withdrawal.
        </li>
        <li>
          <strong>Bank Name Verification:</strong> Withdrawal requests will only be settled into Indian bank accounts where the account holder’s name precisely matches the verified name on your Sagar Club profile.
        </li>
      </ul>

      <h2>3. Fair Play, Algorithmic Randomness &amp; Prohibited Conduct</h2>
      <p>
        Sagar Club guarantees that all outcome calculations for Wingo, Aviator, and Trx Hash are generated through certified Random Number Generators (RNG) and decentralized cryptographic block hashes without manual administrative intervention. In return, players agree to the following conduct standards:
      </p>
      <ul style={{ margin: '0 0 18px 22px', color: '#334155', fontSize: '14.5px', lineHeight: '1.8' }}>
        <li>No use of automated prediction bots, artificial intelligence sniffing scripts, or modified APK packages.</li>
        <li>No exploitation of software bugs, network timing latency glitches, or bonus loophole abuse.</li>
        <li>No abusive, threatening, or harassing language directed at Sagar Club customer support representatives.</li>
      </ul>

      <h2>4. Promotional Rules, Gift Vouchers &amp; Daily Salaries</h2>
      <p>
        Promotional benefits, such as the <strong>₹500 Welcome Bonus</strong> unlocked with recommendation code <strong>SAGARCLUB2026</strong> and daily voucher keys, are provided to enrich player experience. Sagar Club reserves the right to audit promotional activity and revoke promotional credits in instances of systematic syndication, referral collusion, or fake registration rings.
      </p>

      <h2>5. Dispute Resolution &amp; Governing Law</h2>
      <p>
        Any disputes arising from game settlements, balance reconciliation, or account access shall be submitted to the Sagar Club Support Arbitration Desk at <code>compliance@sagarclub.in</code>. All matters shall be interpreted and governed in accordance with applicable legal statutes.
      </p>
    </article>
  );
};

export default TermsPage;
