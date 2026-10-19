import React, { useState } from 'react';
import {
  Gift,
  Phone,
  Mail,
  Send,
  MessageSquare,
  Clock,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  UserCheck,
  Headphones,
} from 'lucide-react';
import { NavTab } from '../types';
import { AFFILIATE_LINK } from '../constants';

interface ContactUsPageProps {
  onNavigate: (tab: NavTab) => void;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <article className="content" id="contact-us-page-article">
      <h1>Sagar Club Support</h1>

      <p>
        Welcome to the official player support desk for{' '}
        <a
          href="/"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club</strong>
        </a>
        . Having reliable, responsive, and genuinely helpful customer care is essential when dealing with real-money interactive games. Whether you have questions regarding your <strong>₹500 Welcome Bonus</strong>, need help verifying your UPI withdrawal details, or require assistance with the Daily Salary Agent Program, our dedicated support team is available 24 hours a day, 7 days a week on Sagar Club.
      </p>

      <p>
        On this{' '}
        <a
          href="/contact-us"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club Support</strong>
        </a>{' '}
        directory, you will find direct links to our official Telegram support channels, verified department email addresses, estimated response times, and an interactive support inquiry form. You can also explore our{' '}
        <a
          href="/sagarclub-register"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club Register</strong>
        </a>{' '}
        guide or head over to the{' '}
        <a
          href="/sagarclub-login"
          target="_blank"
          style={{ color: '#0369a1', fontWeight: 600 }}
        >
          <strong>Sagar Club Login</strong>
        </a>{' '}
        page if you need credentials assistance.
      </p>

      {/* Hero Action Buttons */}
      <div
        className="hero-actions"
        style={{
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          marginTop: '20px',
          marginBottom: '24px',
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

      <h2>Communication Channels</h2>
      <div className="app-table-wrapper" style={{ margin: '16px 0 24px' }}>
        <table className="app-table">
          <thead>
            <tr style={{ background: '#f0f9ff', color: '#0284c7', fontWeight: 700 }}>
              <th style={{ padding: '10px', textAlign: 'left' }}>Channel</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Department &amp; Purpose</th>
              <th style={{ padding: '10px', textAlign: 'center' }}>Availability</th>
              <th style={{ padding: '10px', textAlign: 'right' }}>Average Response</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: 700 }}>In-App Live Chat</td>
              <td>General Queries, Recharge Issues, Bonus Claims</td>
              <td style={{ textAlign: 'center', color: '#0369a1', fontWeight: 600 }}>24/7 / 365 Days</td>
              <td style={{ textAlign: 'right', fontWeight: 600 }}>1 – 3 Minutes</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 700 }}>Official Telegram Desk</td>
              <td>Agent Promotions, Daily Salary &amp; VIP Concierge</td>
              <td style={{ textAlign: 'center', color: '#0369a1', fontWeight: 600 }}>24/7 / 365 Days</td>
              <td style={{ textAlign: 'right', fontWeight: 600 }}>2 – 5 Minutes</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 700 }}>Customer Care Email</td>
              <td><code>support@sagarclub.in</code> (Account &amp; Technical Support)</td>
              <td style={{ textAlign: 'center' }}>Daily 08:00 - 24:00</td>
              <td style={{ textAlign: 'right', fontWeight: 600 }}>Within 2 Hours</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 700 }}>VIP Host Liaison</td>
              <td><code>vip@sagarclub.in</code> (VIP Level 6+ Dedicated Support)</td>
              <td style={{ textAlign: 'center', color: '#0369a1', fontWeight: 600 }}>24/7 Priority</td>
              <td style={{ textAlign: 'right', fontWeight: 600 }}>Immediate (&lt; 60s)</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 700 }}>Compliance &amp; Legal</td>
              <td><code>compliance@sagarclub.in</code> (KYC, Security Audits)</td>
              <td style={{ textAlign: 'center' }}>Mon - Fri Business Hours</td>
              <td style={{ textAlign: 'right', fontWeight: 600 }}>Within 24 Hours</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Submit Support Ticket</h2>
      <p>
        If your inquiry involves a deposit confirmation, withdrawal status check, or account detail update, please complete the form below. Our support agents will process your request directly:
      </p>

      {submitted ? (
        <div
          style={{
            background: '#f1f5f9',
            border: '1px solid #a7f3d0',
            borderRadius: '12px',
            padding: '24px',
            margin: '20px 0',
            textAlign: 'center',
          }}
        >
          <div style={{ display: 'inline-flex', background: '#e2e8f0', color: '#0369a1', padding: '12px', borderRadius: '50%', marginBottom: '12px' }}>
            <CheckCircle2 size={32} />
          </div>
          <h3 style={{ margin: '0 0 8px', color: '#065f46' }}>Inquiry Submitted Successfully!</h3>
          <p style={{ margin: '0 0 16px', color: '#0369a1', fontSize: '14px' }}>
            Ticket <strong>#SAGARCLUB-{Math.floor(100000 + Math.random() * 900000)}</strong> has been opened. Our support liaison will contact you via your registered mobile number shortly.
          </p>
          <button
            type="button"
            className="cta"
            onClick={() => setSubmitted(false)}
            style={{ padding: '8px 20px', fontSize: '13px' }}
          >
            Submit Another Query
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '24px',
            margin: '20px 0',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                Registered Mobile Number (+91) *
              </label>
              <input
                type="tel"
                required
                placeholder="10-digit number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box' }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
              Category
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box', background: '#ffffff' }}
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Recharge / Deposit">Recharge / UPI Deposit Issue</option>
              <option value="Withdrawal Settlement">Withdrawal Status &amp; Settlement</option>
              <option value="Agent Salary">Daily Salary Agent Commission</option>
              <option value="Account &amp; Security">Account Login &amp; Password Recovery</option>
            </select>
          </div>

          <div style={{ marginBottom: '18px' }}>
            <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
              Message &amp; Details *
            </label>
            <textarea
              required
              rows={4}
              placeholder="Describe your issue or provide your 12-digit UTR number if reporting a payment..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box' }}
            />
          </div>

          <button
            type="submit"
            className="cta"
            style={{ width: '100%', padding: '12px', fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            <Send size={16} /> Submit Ticket to Support Desk
          </button>
        </form>
      )}

      <h2>Support FAQs</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '20px 0' }}>
        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0369a1', fontSize: '15px', marginBottom: '6px' }}>
            1. My UPI recharge shows successful in my bank app, but not on Sagar Club. What should I do?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.6 }}>
            Do not panic. Locate the 12-digit UTR / UPI Transaction Reference Number from your PhonePe, Google Pay, or Paytm receipt. Open the in-app chat and paste your UTR number. The automated payment reconciliation engine will confirm your transaction and credit your balance in under 2 minutes.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0369a1', fontSize: '15px', marginBottom: '6px' }}>
            2. When is the Agent Daily Salary credited each day?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.6 }}>
            The Daily Salary is calculated based on active invited members at the end of each day and credited automatically to your agent wallet at 24:00 (midnight). If you notice any discrepancy, reach out directly to your assigned Telegram Agent Liaison.
          </p>
        </div>
      </div>
    </article>
  );
};

export default ContactUsPage;
