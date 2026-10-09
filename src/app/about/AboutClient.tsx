'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Camera, Heart, Sparkles, Feather, Bookmark, Compass } from 'lucide-react';
import { SITE_CONFIG } from '@/data/weddingData';
import { useBookingModal } from '@/context/BookingContext';
import ScrollReveal from '@/components/ScrollReveal';

export default function AboutClient() {
  const { openBooking } = useBookingModal();

  return (
    <main className="about-page-main">
      {/* 1. Page Header */}
      <section className="about-hero-header">
        <div className="container">
          <ScrollReveal>
            <div className="header-badge-row">
              <span className="section-badge">ABOUT OUR STUDIO</span>
            </div>
            <h1 className="page-hero-title">
              Preserving the Poetry, Stillness &amp; <br className="hidden-mobile" />
              <em>Sacred Radiance</em> of Your Day
            </h1>
            <p className="page-hero-subtitle">
              A fine art wedding photography atelier honoring honest emotion,
              timeless romance, and natural light.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Main Story Grid */}
      <section className="about-story-section">
        <div className="container">
          <div className="about-grid">
            {/* Visual Column */}
            <div className="about-visual-col">
              <ScrollReveal delay={100}>
                <div className="about-image-frame">
                  <div className="image-outer">
                    <Image
                      src="/images/slider/slide-2.jpg"
                      alt="LK Capture Weddings bridal portraiture"
                      width={620}
                      height={820}
                      priority
                      className="about-portrait-img"
                    />
                  </div>
                  <div className="about-experience-badge">
                    <span className="exp-num">8+</span>
                    <span className="exp-label">Years Documenting Sacred Love</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Editorial Content Column */}
            <div className="about-content-col">
              <ScrollReveal delay={150}>
                <span className="story-kicker">OUR CRAFT &amp; PHILOSOPHY</span>
                <h2 className="story-heading">
                  More than photographs—these are heirloom memories for a lifetime.
                </h2>

                <div className="story-paragraphs">
                  <p>
                    At <strong>{SITE_CONFIG.brandName}</strong>, we view wedding photography as
                    an enduring art form. A sacred celebration is never a sequence of staged poses;
                    it is a living tapestry of quiet glances, trembling hands during sacred vows,
                    and the euphoric, unscripted laughter that echoes through twilight.
                  </p>
                  <p>
                    Our visual language seamlessly blends fine art editorial finesse with sensitive,
                    unobtrusive documentary photojournalism. We honor the delicate interplay of warm
                    golden hour light, muted earthy palettes, and genuine human connection.
                  </p>
                  <p>
                    From intimate coastal elopements to grand multi-day heritage ceremonies across
                    Tamil Nadu and destination locations worldwide, we approach every celebration
                    with deep reverence, artistic intention, and calm presence.
                  </p>
                </div>

                {/* Studio Pillars */}
                <div className="studio-pillars-list">
                  <div className="pillar-row">
                    <div className="pillar-icon-box">
                      <Camera size={19} />
                    </div>
                    <div>
                      <h4 className="pillar-name">Editorial Eye</h4>
                      <p className="pillar-text">
                        Carefully composed frames inspired by European Vogue Wedding aesthetics and painterly balance.
                      </p>
                    </div>
                  </div>

                  <div className="pillar-row">
                    <div className="pillar-icon-box">
                      <Heart size={19} />
                    </div>
                    <div>
                      <h4 className="pillar-name">Unspoken Emotion</h4>
                      <p className="pillar-text">
                        Honoring quiet, vulnerable connections and authentic candid moments without rigid directing.
                      </p>
                    </div>
                  </div>

                  <div className="pillar-row">
                    <div className="pillar-icon-box">
                      <Sparkles size={19} />
                    </div>
                    <div>
                      <h4 className="pillar-name">Timeless Earthy Art</h4>
                      <p className="pillar-text">
                        Calibrated color palettes grounded in warm creams, soft sage, and natural golden hues.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Three Pillars of Excellence */}
      <section className="about-values-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">CORE PRINCIPLES</span>
              <h2 className="section-title">The Three Pillars of Our Studio</h2>
              <p className="section-subtitle">
                Every photograph captured under LK Capture Weddings is guided by these enduring commitments.
              </p>
            </div>
          </ScrollReveal>

          <div className="values-grid">
            <ScrollReveal delay={50}>
              <div className="value-card">
                <div className="value-num">01</div>
                <Feather size={24} className="value-icon" />
                <h3 className="value-title">Quiet Intimacy</h3>
                <p className="value-text">
                  The deepest emotions often exist in subtle pauses—the breath before walking down the aisle,
                  a mother&apos;s gentle embrace, and the quiet glance across a crowded room.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="value-card">
                <div className="value-num">02</div>
                <Bookmark size={24} className="value-icon" />
                <h3 className="value-title">Sacred Traditions</h3>
                <p className="value-text">
                  We approach rituals, spiritual customs, and heritage ceremonies with deep cultural sensitivity,
                  ensuring sacred moments are documented with profound respect.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="value-card">
                <div className="value-num">03</div>
                <Compass size={24} className="value-icon" />
                <h3 className="value-title">Destination Ready</h3>
                <p className="value-text">
                  Based in Tamil Nadu, our team travels seamlessly across India and internationally,
                  bringing our signature editorial vision to breathtaking destination weddings.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Bottom Reservation CTA */}
      <section className="about-cta-section">
        <div className="container">
          <ScrollReveal>
            <div className="about-cta-card">
              <span className="cta-kicker">BEGIN YOUR JOURNEY</span>
              <h2 className="cta-heading">Let Us Tell Your Story</h2>
              <p className="cta-text">
                Dates for upcoming wedding seasons are reserved strictly on a first-come basis.
                Connect with our studio to check availability and discuss your celebration.
              </p>
              <button
                type="button"
                id="about-reserve-btn"
                onClick={openBooking}
                className="btn-primary cta-btn"
              >
                <span>RESERVE YOUR DATE</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <style jsx>{`
        .about-page-main {
          background-color: var(--cream-bg);
          padding-top: 5.5rem;
        }

        .about-hero-header {
          padding-top: clamp(3.5rem, 6vw, 5.5rem);
          padding-bottom: clamp(3rem, 5vw, 4.5rem);
          text-align: center;
          border-bottom: 1px solid var(--beige-border);
          background: linear-gradient(180deg, rgba(245, 240, 230, 0.5) 0%, var(--cream-bg) 100%);
        }

        .header-badge-row {
          margin-bottom: 0.5rem;
        }

        .page-hero-title {
          font-family: var(--font-serif);
          font-size: clamp(2.2rem, 4.2vw, 3.6rem);
          font-weight: 500;
          color: var(--charcoal-black);
          line-height: 1.15;
          letter-spacing: -0.015em;
          margin-bottom: 1.25rem;
          max-width: 860px;
          margin-left: auto;
          margin-right: auto;
        }

        .page-hero-title em {
          font-style: italic;
          color: var(--sage-primary);
        }

        .page-hero-subtitle {
          font-family: var(--font-sans);
          font-size: clamp(0.95rem, 1.2vw, 1.1rem);
          color: var(--charcoal-muted);
          max-width: 580px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .about-story-section {
          padding-top: var(--section-padding-y);
          padding-bottom: var(--section-padding-y);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(3rem, 6vw, 6rem);
          align-items: center;
        }

        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr 1.15fr;
          }
        }

        .about-visual-col {
          display: flex;
          justify-content: center;
        }

        .about-image-frame {
          position: relative;
          width: 100%;
          max-width: 480px;
        }

        .image-outer {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background-color: var(--beige-sand);
          box-shadow: var(--shadow-luxury);
        }

        :global(.about-portrait-img) {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .about-image-frame:hover :global(.about-portrait-img) {
          transform: scale(1.03);
        }

        .about-experience-badge {
          position: absolute;
          bottom: -1.5rem;
          right: -1.25rem;
          background: var(--charcoal-black);
          color: #ffffff;
          padding: 1.35rem 1.65rem;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-medium);
          border: 1px solid var(--beige-dark);
        }

        .exp-num {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          font-weight: 600;
          color: var(--beige-primary);
          line-height: 1;
        }

        .exp-label {
          font-family: var(--font-sans);
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #ded7ce;
          margin-top: 0.35rem;
          max-width: 130px;
        }

        .about-content-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .story-kicker {
          font-family: var(--font-sans);
          font-size: 0.7rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--sage-primary);
          font-weight: 600;
        }

        .story-heading {
          font-family: var(--font-serif);
          font-size: clamp(1.65rem, 2.8vw, 2.4rem);
          font-weight: 500;
          letter-spacing: -0.01em;
          color: var(--charcoal-black);
          line-height: 1.25;
        }

        .story-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
        }

        .story-paragraphs p {
          color: var(--charcoal-muted);
          line-height: 1.8;
          font-size: 0.98rem;
        }

        .studio-pillars-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 0.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--beige-border);
        }

        .pillar-row {
          display: flex;
          align-items: flex-start;
          gap: 1.15rem;
        }

        .pillar-icon-box {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          background-color: var(--sage-tint);
          color: var(--sage-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--sage-subtle);
        }

        .pillar-name {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--charcoal-dark);
          margin-bottom: 0.2rem;
        }

        .pillar-text {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          color: var(--charcoal-muted);
          line-height: 1.55;
        }

        /* Values Section */
        .about-values-section {
          background-color: var(--cream-card);
          padding-top: var(--section-padding-y);
          padding-bottom: var(--section-padding-y);
          border-top: 1px solid rgba(201, 186, 164, 0.35);
          border-bottom: 1px solid rgba(201, 186, 164, 0.35);
        }

        .values-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .values-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .value-card {
          background-color: var(--cream-bg);
          border: 1px solid var(--beige-border);
          padding: 2.25rem 2rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-subtle);
          position: relative;
        }

        .value-num {
          font-family: var(--font-serif);
          font-size: 1.75rem;
          font-weight: 600;
          color: var(--beige-primary);
          margin-bottom: 1rem;
        }

        :global(.value-icon) {
          color: var(--sage-primary);
          margin-bottom: 1rem;
        }

        .value-title {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 500;
          color: var(--charcoal-black);
          margin-bottom: 0.65rem;
        }

        .value-text {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          color: var(--charcoal-muted);
          line-height: 1.65;
        }

        /* CTA Section */
        .about-cta-section {
          padding-top: clamp(4rem, 7vw, 6rem);
          padding-bottom: clamp(4rem, 7vw, 6rem);
        }

        .about-cta-card {
          max-width: 820px;
          margin: 0 auto;
          background: linear-gradient(145deg, #ffffff 0%, var(--cream-card) 100%);
          border: 1px solid var(--beige-border);
          padding: clamp(2.5rem, 5vw, 4rem);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: var(--shadow-luxury);
        }

        .cta-kicker {
          font-family: var(--font-sans);
          font-size: 0.68rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--sage-primary);
          font-weight: 600;
          margin-bottom: 0.65rem;
        }

        .cta-heading {
          font-family: var(--font-serif);
          font-size: clamp(2rem, 3.6vw, 2.85rem);
          font-weight: 500;
          color: var(--charcoal-black);
          margin-bottom: 0.85rem;
        }

        .cta-text {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: var(--charcoal-muted);
          max-width: 520px;
          margin-bottom: 2rem;
          line-height: 1.7;
        }

        .cta-btn {
          padding: 1rem 2.4rem;
        }

        @media (max-width: 640px) {
          .about-experience-badge {
            bottom: -1rem;
            right: 0.5rem;
            padding: 1rem 1.25rem;
          }

          .hidden-mobile {
            display: none;
          }
        }
      `}</style>
    </main>
  );
}
