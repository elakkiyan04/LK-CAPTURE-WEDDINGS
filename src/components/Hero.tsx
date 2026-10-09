'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/data/weddingData';
import { useBookingModal } from '@/context/BookingContext';

export default function Hero() {
  const { openBooking } = useBookingModal();

  const handleScrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetEl = document.getElementById('slider') || document.getElementById('our-works');
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero" aria-label="LK Capture Weddings Hero">
      {/* 1. Single Fixed Local Hero Image */}
      <div className="hero-media-wrapper">
        <Image
          src={SITE_CONFIG.heroImage}
          alt="LK Capture Weddings - Luxury Indian bride portrait holding Nataraja idol"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="hero-image"
        />
        {/* Soft, rich left-edge vignette matching reference screenshot */}
        <div className="hero-overlay" />
      </div>

      {/* 2. Hero Content Container - Strictly Left-Aligned in Negative Space */}
      <div className="hero-container">
        <div className="hero-text-block">
          {/* Subtitle / Kicker Line with horizontal dash accent */}
          <div className="hero-kicker-row">
            <span className="kicker-line" aria-hidden="true" />
            <span className="hero-kicker-text">LUXURY WEDDING &amp; EDITORIAL PHOTOGRAPHY</span>
          </div>

          {/* Editorial Heading - Timeless Moments, Beautifully Captured (Warm Gold Italic) */}
          <h1 className="hero-title">
            Timeless Moments, <br />
            <em className="hero-title-italic">Beautifully Captured</em>
          </h1>

          {/* Minimal Supporting Text */}
          <p className="hero-description">
            Capturing genuine emotions, elegant portraits, and unforgettable moments that last a lifetime.
          </p>

          {/* Buttons: Matched precisely to reference screenshot */}
          <div className="hero-actions">
            {/* Filled warm tan/camel button */}
            <a
              href="#slider"
              onClick={handleScrollToWork}
              className="hero-btn-filled"
              id="hero-view-work-btn"
            >
              <span>VIEW OUR WORK</span>
              <ArrowRight size={14} className="btn-arrow" />
            </a>

            {/* Translucent outlined button */}
            <button
              type="button"
              id="hero-book-now-btn"
              onClick={openBooking}
              className="hero-btn-outline"
            >
              <span>BOOK NOW</span>
              <ArrowRight size={14} className="btn-arrow" />
            </button>
          </div>
        </div>

        {/* Bottom Left Discover Indicator: SCROLL TO DISCOVER ————— */}
        <div className="hero-bottom-bar">
          <a
            href="#slider"
            onClick={handleScrollToWork}
            className="scroll-discover-link"
            aria-label="Scroll down to photo showcase"
          >
            <span className="scroll-discover-text">SCROLL TO DISCOVER</span>
            <span className="scroll-discover-dash" aria-hidden="true" />
          </a>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background-color: #151714;
        }

        .hero-media-wrapper {
          position: absolute;
          top: 60px;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: calc(100% - 60px);
          z-index: 1;
        }

        :global(.hero-image) {
          object-fit: cover !important;
          /* Positions the bride holding Nataraja naturally on the right half with full head & hairstyle visible */
          object-position: 68% 0% !important;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          /* Smooth asymmetric left vignette: rich charcoal on the left for crisp text contrast, smoothly fading before the bride */
          background: linear-gradient(
            to right,
            rgba(16, 18, 15, 0.92) 0%,
            rgba(16, 18, 15, 0.76) 28%,
            rgba(16, 18, 15, 0.32) 48%,
            rgba(16, 18, 15, 0.08) 64%,
            transparent 76%
          ),
          linear-gradient(
            to top,
            rgba(16, 18, 15, 0.6) 0%,
            transparent 22%
          );
          pointer-events: none;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: clamp(6.5rem, 11vh, 8rem) var(--container-padding-x) 2.75rem var(--container-padding-x);
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          box-sizing: border-box;
        }

        .hero-text-block {
          max-width: 490px;
          text-align: left;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-top: auto;
          margin-bottom: auto;
          animation: heroFadeIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        /* Kicker with accent line */
        .hero-kicker-row {
          display: inline-flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 1.25rem;
        }

        .kicker-line {
          width: 32px;
          height: 1px;
          background-color: #c9a878;
          display: inline-block;
          flex-shrink: 0;
        }

        .hero-kicker-text {
          font-family: var(--font-sans);
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #c9a878;
        }

        /* Heading */
        .hero-title {
          font-family: var(--font-serif);
          font-size: clamp(2.35rem, 4.3vw, 3.8rem);
          font-weight: 400;
          line-height: 1.15;
          letter-spacing: -0.015em;
          color: #ffffff;
          margin-bottom: 1.25rem;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.45);
        }

        .hero-title-italic {
          font-style: italic;
          font-weight: 400;
          color: #d6b88d;
          display: inline-block;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.35);
        }

        /* Supporting Text */
        .hero-description {
          font-family: var(--font-sans);
          font-size: clamp(0.92rem, 1.15vw, 1.02rem);
          font-weight: 400;
          line-height: 1.68;
          color: #ded7ce;
          max-width: 460px;
          margin-bottom: 2.25rem;
          text-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
        }

        /* Actions: Side by Side Buttons */
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1.15rem;
          flex-wrap: wrap;
        }

        /* Filled Button - Warm camel/golden-tan tone */
        .hero-btn-filled {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          background-color: #92734b;
          color: #ffffff;
          padding: 0.88rem 1.75rem;
          font-family: var(--font-sans);
          font-size: 0.74rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          border-radius: 6px;
          border: 1px solid #92734b;
          transition: var(--transition-smooth);
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
        }

        .hero-btn-filled:hover {
          background-color: #a48356;
          border-color: #a48356;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
        }

        /* Outlined Button - Translucent dark with clean border */
        .hero-btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          background-color: rgba(20, 22, 19, 0.55);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: #ffffff;
          padding: 0.88rem 1.75rem;
          font-family: var(--font-sans);
          font-size: 0.74rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.38);
          transition: var(--transition-smooth);
          cursor: pointer;
        }

        .hero-btn-outline:hover {
          background-color: #ffffff;
          color: #171916;
          border-color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.3);
        }

        :global(.btn-arrow) {
          transition: transform 0.25s ease;
        }

        .hero-btn-filled:hover :global(.btn-arrow),
        .hero-btn-outline:hover :global(.btn-arrow) {
          transform: translateX(3px);
        }

        /* Bottom Bar: SCROLL TO DISCOVER ————— */
        .hero-bottom-bar {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          margin-top: auto;
          padding-top: 1.5rem;
        }

        .scroll-discover-link {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          color: #c9a878;
          transition: color 0.25s ease;
          text-decoration: none;
        }

        .scroll-discover-link:hover {
          color: #ffffff;
        }

        .scroll-discover-text {
          font-family: var(--font-sans);
          font-size: 0.68rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 500;
        }

        .scroll-discover-dash {
          width: 48px;
          height: 1px;
          background-color: #c9a878;
          display: inline-block;
          transition: width 0.3s ease, background-color 0.25s ease;
        }

        .scroll-discover-link:hover .scroll-discover-dash {
          width: 62px;
          background-color: #ffffff;
        }

        @keyframes heroFadeIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 991px) and (min-width: 768px) {
          .hero-media-wrapper {
            top: 58px;
            height: calc(100% - 58px);
          }

          :global(.hero-image) {
            object-fit: cover !important;
            object-position: 70% 0% !important;
          }

          .hero-overlay {
            background: linear-gradient(
              to right,
              rgba(16, 18, 15, 0.95) 0%,
              rgba(16, 18, 15, 0.82) 42%,
              rgba(16, 18, 15, 0.28) 68%,
              transparent 85%
            ),
            linear-gradient(
              to top,
              rgba(16, 18, 15, 0.6) 0%,
              transparent 25%
            );
          }

          .hero-container {
            padding-top: calc(58px + 2rem);
            padding-bottom: 2.5rem;
          }

          .hero-text-block {
            max-width: 380px;
            margin-top: auto;
            margin-bottom: auto;
          }

          .hero-title {
            font-size: 2.6rem;
          }
        }

        @media (max-width: 767px) {
          .hero-media-wrapper {
            top: 56px;
            height: 56vh;
          }

          :global(.hero-image) {
            object-fit: cover !important;
            object-position: 66% 0% !important;
          }

          .hero-overlay {
            background: linear-gradient(
              to top,
              rgba(18, 20, 17, 1) 0%,
              rgba(18, 20, 17, 0.85) 38%,
              rgba(18, 20, 17, 0.15) 75%,
              transparent 100%
            );
          }

          .hero-container {
            justify-content: flex-end;
            padding-top: calc(56px + 1rem);
            padding-bottom: 2rem;
          }

          .hero-text-block {
            margin-top: 0;
            margin-bottom: 1.5rem;
            max-width: 100%;
          }

          .hero-title {
            font-size: 2.1rem;
          }

          .hero-actions {
            width: 100%;
          }

          .hero-btn-filled,
          .hero-btn-outline {
            width: 100%;
          }

          .hero-bottom-bar {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
