'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { SITE_CONFIG, NAV_LINKS } from '@/data/weddingData';
import { useBookingModal } from '@/context/BookingContext';

export default function Navbar() {
  const pathname = usePathname();
  const currentPath = pathname || '/';
  const { openBooking } = useBookingModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const isLinkActive = (href: string) => {
    if (href === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(href);
  };

  return (
    <>
      <header
        className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}
        id="main-navbar"
      >
        <div className="navbar-container">
          {/* Column 1: Brand Logo (Left) */}
          <div className="brand-col">
            <Link href="/" className="brand-logo" onClick={handleLinkClick}>
              <span className="brand-main">{SITE_CONFIG.brandShort}</span>
              <span className="brand-sub">{SITE_CONFIG.brandSub}</span>
            </Link>
          </div>

          {/* Column 2: Desktop Navigation Links (Center) */}
          <nav className="desktop-nav nav-col" aria-label="Main Navigation">
            <ul className="nav-list">
              {NAV_LINKS.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <li key={link.label} className="nav-item">
                    <Link
                      href={link.href}
                      className={`nav-link ${active ? 'active' : ''}`}
                      contentEditable={false}
                    >
                      <span className="nav-link-text" contentEditable={false}>{link.label}</span>
                      {active && <span className="nav-active-underline" aria-hidden="true" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Column 3: Actions (Right) - BOOK NOW Button & Mobile Hamburger */}
          <div className="actions-col">
            <button
              type="button"
              id="navbar-book-now-btn"
              onClick={openBooking}
              className="navbar-book-btn"
              aria-label="Open booking consultation"
            >
              <span>BOOK NOW</span>
              <ArrowRight size={13} strokeWidth={2.2} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              id="mobile-menu-toggle"
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className="mobile-menu-drawer"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mobile-menu-header">
            <Link href="/" className="mobile-drawer-brand" onClick={handleLinkClick}>
              <span className="drawer-brand-main">{SITE_CONFIG.brandShort}</span>
              <span className="drawer-brand-sub">{SITE_CONFIG.brandSub}</span>
            </Link>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation"
            >
              <X size={22} />
            </button>
          </div>

          <div className="mobile-menu-divider" />

          <nav className="mobile-nav" aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {NAV_LINKS.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <li key={link.label} className="mobile-nav-item">
                    <Link
                      href={link.href}
                      className={`mobile-nav-link ${active ? 'active' : ''}`}
                      onClick={handleLinkClick}
                      contentEditable={false}
                    >
                      <span className="mobile-nav-text" contentEditable={false}>{link.label}</span>
                      {active && <span className="mobile-active-dot" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mobile-menu-footer">
            <button
              type="button"
              id="mobile-drawer-book-btn"
              className="mobile-book-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                openBooking();
              }}
            >
              <span>BOOK NOW</span>
              <ArrowRight size={14} strokeWidth={2.2} />
            </button>
            <p className="mobile-location-tag">{SITE_CONFIG.location}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* 1. Header Wrapper */
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background-color: #ffffff;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 1px 6px rgba(0, 0, 0, 0.02);
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .navbar-header.scrolled {
          box-shadow: 0 3px 18px rgba(0, 0, 0, 0.06);
          border-bottom-color: rgba(0, 0, 0, 0.08);
        }

        /* 2. Container: 3-column layout (Logo LEFT | Nav CENTER | Actions RIGHT) */
        .navbar-container {
          max-width: 1360px;
          width: 100%;
          margin: 0 auto;
          height: 60px;
          padding: 0 clamp(1.25rem, 3.5vw, 3rem);
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          box-sizing: border-box;
        }

        /* Column Alignments */
        .brand-col {
          justify-self: start;
          display: flex;
          align-items: center;
        }

        .nav-col {
          justify-self: center;
          display: flex;
          align-items: center;
        }

        .actions-col {
          justify-self: end;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        /* 3. Logo */
        .brand-logo {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-decoration: none;
          line-height: 1;
          user-select: none;
        }

        .brand-main {
          display: block;
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #171916;
          line-height: 1.1;
          transition: opacity 0.25s ease;
        }

        .brand-logo:hover .brand-main {
          opacity: 0.85;
        }

        .brand-sub {
          display: block;
          font-family: var(--font-sans);
          font-size: 0.52rem;
          font-weight: 600;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: #a07f59;
          margin-top: 3px;
          padding-left: 1px;
          line-height: 1;
        }

        /* 4. Desktop Navigation Links */
        .desktop-nav {
          display: block;
          user-select: none;
          -webkit-user-select: none;
          caret-color: transparent;
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: clamp(1.75rem, 2.5vw, 2.75rem);
          list-style: none;
          margin: 0;
          padding: 0;
          user-select: none;
          -webkit-user-select: none;
          caret-color: transparent;
        }

        .nav-item {
          display: inline-flex;
          align-items: center;
          user-select: none;
          -webkit-user-select: none;
          caret-color: transparent;
        }

        .nav-link {
          position: relative;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          font-family: var(--font-sans);
          font-size: 0.74rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #242623;
          padding: 0.35rem 0;
          transition: color 0.25s ease;
          cursor: pointer;
          user-select: none;
          -webkit-user-select: none;
          caret-color: transparent;
        }

        .nav-link:focus {
          outline: none;
          caret-color: transparent;
        }

        .nav-link:focus-visible {
          outline: 2px solid var(--sage-primary);
          outline-offset: 3px;
          border-radius: 2px;
          caret-color: transparent;
        }

        .nav-link-text {
          position: relative;
          display: inline-block;
          cursor: pointer;
          user-select: none;
          -webkit-user-select: none;
          caret-color: transparent;
        }

        .nav-link:hover {
          color: #a07f59;
        }

        .nav-link.active {
          color: #a07f59;
          font-weight: 600;
        }

        /* Subtle warm-brown underline matching reference */
        .nav-active-underline {
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 1.5px;
          background-color: #a07f59;
          border-radius: 1px;
        }

        /* 5. BOOK NOW Button */
        .navbar-book-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          padding: 0.52rem 1.25rem;
          height: 35px;
          background-color: #9f805a;
          color: #ffffff;
          border: none;
          border-radius: 7px;
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
          transition: background-color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
        }

        .navbar-book-btn:hover {
          background-color: #8e6f47;
          transform: translateY(-1px);
          box-shadow: 0 4px 10px rgba(159, 128, 90, 0.26);
        }

        .navbar-book-btn:active {
          transform: translateY(0);
        }

        /* 6. Mobile Toggle Hamburger */
        .mobile-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          padding: 0.4rem;
          background: transparent;
          border: none;
          color: #171916;
          cursor: pointer;
          border-radius: 4px;
          transition: color 0.25s ease, background-color 0.25s ease;
        }

        .mobile-toggle:hover {
          color: #a07f59;
          background-color: rgba(0, 0, 0, 0.04);
        }

        /* 7. Mobile Drawer Overlay */
        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(23, 25, 22, 0.55);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 1050;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s ease;
        }

        .mobile-menu-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-menu-drawer {
          position: absolute;
          top: 0;
          right: 0;
          width: 84%;
          max-width: 360px;
          height: 100%;
          background-color: #ffffff;
          box-shadow: -8px 0 35px rgba(0, 0, 0, 0.18);
          display: flex;
          flex-direction: column;
          padding: 1.75rem 1.5rem;
          box-sizing: border-box;
          transform: translateX(100%);
          transition: transform 0.38s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-menu-overlay.open .mobile-menu-drawer {
          transform: translateX(0);
        }

        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .mobile-drawer-brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-decoration: none;
          line-height: 1;
        }

        .drawer-brand-main {
          display: block;
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          color: #171916;
          text-transform: uppercase;
          line-height: 1.1;
        }

        .drawer-brand-sub {
          display: block;
          font-family: var(--font-sans);
          font-size: 0.52rem;
          font-weight: 600;
          letter-spacing: 0.36em;
          color: #a07f59;
          text-transform: uppercase;
          margin-top: 3px;
          line-height: 1;
        }

        .mobile-close-btn {
          color: #242623;
          background: transparent;
          border: none;
          padding: 0.4rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          transition: color 0.2s ease;
        }

        .mobile-close-btn:hover {
          color: #a07f59;
        }

        .mobile-menu-divider {
          height: 1px;
          background-color: rgba(0, 0, 0, 0.08);
          margin: 1.5rem 0;
        }

        .mobile-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding: 0;
          margin: 0;
        }

        .mobile-nav-link {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          color: #242623;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.35rem 0;
          text-decoration: none;
          transition: color 0.2s ease, transform 0.2s ease;
          cursor: pointer;
          user-select: none;
          -webkit-user-select: none;
          caret-color: transparent;
        }

        .mobile-nav-link:focus {
          outline: none;
          caret-color: transparent;
        }

        .mobile-nav-link:focus-visible {
          outline: 2px solid var(--sage-primary);
          outline-offset: 3px;
          border-radius: 2px;
          caret-color: transparent;
        }

        .mobile-nav-link.active {
          color: #a07f59;
          font-weight: 600;
        }

        .mobile-nav-link:hover {
          color: #a07f59;
          transform: translateX(4px);
        }

        .mobile-active-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #a07f59;
        }

        .mobile-menu-footer {
          margin-top: auto;
          padding-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-book-btn {
          width: 100%;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background-color: #9f805a;
          color: #ffffff;
          border: none;
          border-radius: 7px;
          font-size: 0.76rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background-color 0.25s ease;
        }

        .mobile-book-btn:hover {
          background-color: #8e6f47;
        }

        .mobile-location-tag {
          font-size: 0.72rem;
          color: #7a7d77;
          text-align: center;
          line-height: 1.4;
          margin: 0;
        }

        /* 8. Responsive Breakpoints */
        @media (max-width: 991px) {
          .navbar-container {
            display: flex;
            justify-content: space-between;
            height: 58px;
          }

          .desktop-nav {
            display: none;
          }

          .mobile-toggle {
            display: flex;
          }
        }

        @media (max-width: 640px) {
          .navbar-container {
            height: 56px;
            padding: 0 1.25rem;
          }

          .navbar-book-btn {
            display: none;
          }

          .brand-main {
            font-size: 1.15rem;
            letter-spacing: 0.14em;
          }

          .brand-sub {
            font-size: 0.48rem;
            letter-spacing: 0.32em;
          }
        }
      `}</style>
    </>
  );
}
