'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Youtube, ArrowUp, ArrowRight, MapPin } from 'lucide-react';
import { SITE_CONFIG, NAV_LINKS } from '@/data/weddingData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    'Hello LK Capture Weddings, I am inquiring from your website footer.'
  )}`;

  return (
    <footer className="footer-root" role="contentinfo">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-main-grid">
          {/* Column 1: Brand, Tagline & Location */}
          <div className="footer-brand-col">
            <Link href="/" className="footer-logo">
              <span className="logo-main">{SITE_CONFIG.brandShort}</span>
              <span className="logo-sub">{SITE_CONFIG.brandSub}</span>
            </Link>

            <div className="accent-line" aria-hidden="true" />

            <p className="footer-tagline">{SITE_CONFIG.tagline}</p>

            <div className="footer-location">
              <MapPin size={16} className="loc-icon" strokeWidth={1.8} />
              <span>{SITE_CONFIG.location}</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-nav-col">
            <span className="footer-col-title">NAVIGATION</span>
            <div className="col-accent-line" aria-hidden="true" />

            <ul className="footer-links-list">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="footer-nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: WhatsApp & Inquiries + Socials */}
          <div className="footer-connect-col">
            <span className="footer-col-title">WHATSAPP &amp; INQUIRIES</span>
            <div className="col-accent-line" aria-hidden="true" />

            <p className="footer-connect-desc">
              For direct date availability, wedding collections, and personal consultations:
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-wa-btn"
              aria-label="Direct WhatsApp message"
              id="footer-whatsapp-btn"
            >
              <span className="wa-icon-wrap">
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.89 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <span className="wa-number">{SITE_CONFIG.whatsappDisplay}</span>
              <ArrowRight size={15} className="wa-arrow" strokeWidth={2} />
            </a>

            {/* Circular Outlined Social Icons */}
            <div className="footer-social-icons">
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Instagram profile"
              >
                <Instagram size={16} strokeWidth={1.8} />
              </a>
              <a
                href={SITE_CONFIG.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Facebook page"
              >
                <Facebook size={16} strokeWidth={1.8} />
              </a>
              <a
                href={SITE_CONFIG.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="YouTube channel"
              >
                <Youtube size={16} strokeWidth={1.8} />
              </a>
            </div>
          </div>
        </div>

        {/* Subtle Divider Line */}
        <div className="footer-bottom-divider" aria-hidden="true" />

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.brandName}. All rights reserved.
          </p>

          <div className="footer-bottom-right">
            <div className="developer-credit">
              <span className="dev-brand">Developed by ECRONIX</span>{' '}
              <span className="dev-tech">TECH</span>
            </div>

            <div className="back-to-top-wrap">
              <button
                type="button"
                onClick={scrollToTop}
                className="back-to-top-btn"
                aria-label="Scroll back to top"
              >
                <span>BACK TO TOP</span>
                <ArrowUp size={13} strokeWidth={2.2} />
              </button>
              <div className="top-indicator-line" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Root footer with rounded top corners */
        .footer-root {
          background-color: #131411;
          color: #ffffff;
          border-top-left-radius: 28px;
          border-top-right-radius: 28px;
          padding-top: clamp(3.75rem, 5.5vw, 4.75rem);
          padding-bottom: 2rem;
          position: relative;
          overflow: hidden;
        }

        /* Hide Next.js dev indicator */
        :global(nextjs-portal),
        :global([data-nextjs-dev-tools-indicator]),
        :global([data-nextjs-toast-wrapper]) {
          display: none !important;
        }

        /* Three-column layout */
        .footer-main-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.75rem;
        }

        @media (min-width: 900px) {
          .footer-main-grid {
            grid-template-columns: 1.45fr 1fr 1.35fr;
            gap: clamp(2rem, 4vw, 4.5rem);
            align-items: start;
          }
        }

        /* 1. Brand column */
        .footer-brand-col {
          display: flex;
          flex-direction: column;
        }

        .footer-logo {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
          text-decoration: none;
          width: fit-content;
        }

        .logo-main {
          font-family: var(--font-serif);
          font-size: clamp(1.45rem, 2vw, 1.7rem);
          font-weight: 500;
          letter-spacing: 0.18em;
          color: #f3efe8;
          text-transform: uppercase;
        }

        .logo-sub {
          font-family: var(--font-sans);
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.35em;
          color: #c4ad8d;
          text-transform: uppercase;
          margin-top: 5px;
        }

        .accent-line {
          width: 26px;
          height: 1px;
          background-color: #bfa583;
          margin-top: 1rem;
          margin-bottom: 1.25rem;
        }

        .footer-tagline {
          font-family: var(--font-sans);
          font-size: 0.84rem;
          color: #a8a39b;
          line-height: 1.65;
          max-width: 320px;
          margin-bottom: 1.5rem;
        }

        .footer-location {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          font-family: var(--font-sans);
          font-size: 0.82rem;
          color: #ded7ce;
        }

        :global(.loc-icon) {
          color: #bfa583;
          flex-shrink: 0;
        }

        /* Section Headings */
        .footer-col-title {
          display: block;
          font-family: var(--font-sans);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #bfa583;
        }

        .col-accent-line {
          width: 22px;
          height: 1px;
          background-color: #bfa583;
          margin-top: 0.5rem;
          margin-bottom: 1.25rem;
        }

        /* 2. Navigation Column */
        .footer-nav-col {
          display: flex;
          flex-direction: column;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-nav-link {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #ded7ce;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
          text-decoration: none;
        }

        .footer-nav-link:hover {
          color: #ffffff;
          transform: translateX(3px);
        }

        /* 3. WhatsApp & Inquiries Column */
        .footer-connect-col {
          display: flex;
          flex-direction: column;
        }

        .footer-connect-desc {
          font-family: var(--font-sans);
          font-size: 0.84rem;
          color: #a8a39b;
          line-height: 1.55;
          max-width: 340px;
          margin-bottom: 1.15rem;
        }

        /* WhatsApp Tan/Gold Pill Button */
        .footer-wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: #9d8564;
          background: linear-gradient(135deg, #a48c6b 0%, #8f7756 100%);
          color: #ffffff;
          padding: 0.7rem 1.35rem;
          border-radius: 9px;
          text-decoration: none;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
          transition: all 0.25s ease;
          width: fit-content;
        }

        .footer-wa-btn:hover {
          background: linear-gradient(135deg, #ad9574 0%, #98805f 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
          color: #ffffff;
        }

        .wa-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .wa-number {
          color: #ffffff;
          white-space: nowrap;
        }

        .wa-arrow {
          color: rgba(255, 255, 255, 0.85);
          margin-left: 0.5rem;
          transition: transform 0.2s ease;
          flex-shrink: 0;
        }

        .footer-wa-btn:hover .wa-arrow {
          transform: translateX(3px);
          color: #ffffff;
        }

        /* Circular Outlined Social Icons */
        .footer-social-icons {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 1.25rem;
        }

        .social-icon-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f0ede6;
          background: transparent;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .social-icon-btn:hover {
          border-color: #bfa583;
          color: #bfa583;
          background: rgba(191, 165, 131, 0.12);
          transform: translateY(-2px);
        }

        /* Bottom Divider & Copyright Bar */
        .footer-bottom-divider {
          width: 100%;
          height: 1px;
          background-color: rgba(255, 255, 255, 0.08);
          margin-top: clamp(2.75rem, 4.5vw, 3.75rem);
          margin-bottom: 1.5rem;
        }

        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.25rem;
        }

        .copyright-text {
          font-family: var(--font-sans);
          font-size: 0.76rem;
          color: #858077;
          letter-spacing: 0.02em;
        }

        .footer-bottom-right {
          display: flex;
          align-items: center;
          gap: clamp(1.5rem, 3vw, 2.5rem);
        }

        .developer-credit {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-family: var(--font-sans);
          font-size: 0.76rem;
          letter-spacing: 0.04em;
          white-space: nowrap;
        }

        .dev-brand {
          color: #ded7ce;
          font-weight: 500;
        }

        .dev-tech {
          color: #36D6E7;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .back-to-top-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .back-to-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: transparent;
          border: none;
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #bfa583;
          cursor: pointer;
          padding: 0;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .back-to-top-btn:hover {
          color: #ffffff;
          transform: translateY(-2px);
        }

        .top-indicator-line {
          width: 24px;
          height: 1px;
          background-color: rgba(191, 165, 131, 0.4);
          margin-top: 4px;
        }

        /* Mobile Adjustments */
        @media (max-width: 899px) {
          .footer-root {
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            padding-top: 3.25rem;
            padding-bottom: 2rem;
          }

          .footer-main-grid {
            gap: 2.25rem;
          }

          .footer-bottom-divider {
            margin-top: 2.25rem;
            margin-bottom: 1.25rem;
          }

          .footer-bottom-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.25rem;
          }

          .footer-bottom-right {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.25rem;
            width: 100%;
          }

          .developer-credit {
            white-space: normal;
          }

          .back-to-top-wrap {
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}
