'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Play, Film, ArrowUpRight } from 'lucide-react';
import { STORIES_VIDEOS } from '@/data/weddingData';
import { StoryVideo } from '@/types';
import { useBookingModal } from '@/context/BookingContext';
import ScrollReveal from '@/components/ScrollReveal';

export default function StoriesClient() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const { openBooking } = useBookingModal();

  const handlePlayToggle = (story: StoryVideo) => {
    const videoEl = videoRefs.current[story.id];
    if (!videoEl) return;

    if (activeVideoId === story.id) {
      if (videoEl.paused) {
        videoEl.play();
      } else {
        videoEl.pause();
      }
    } else {
      // Pause previously active video
      if (activeVideoId && videoRefs.current[activeVideoId]) {
        videoRefs.current[activeVideoId]?.pause();
      }
      setActiveVideoId(story.id);
      videoEl.play().catch(() => {});
    }
  };

  return (
    <main className="stories-page-main">
      {/* 1. Page Header */}
      <section className="stories-hero-header">
        <div className="container">
          <ScrollReveal>
            <span className="section-badge">CINEMATIC FILMS</span>
            <h1 className="stories-hero-title">Stories in Motion</h1>
            <p className="stories-hero-subtitle">
              Three signature films capturing the cadence of sacred vows,
              the gentle whisper of tears, and the quiet poetry between two souls.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Three Cinematic Videos Layout */}
      <section className="stories-grid-section">
        <div className="container">
          <div className="stories-grid">
            {STORIES_VIDEOS.map((story, index) => {
              const isPlaying = activeVideoId === story.id;

              return (
                <ScrollReveal key={story.id} delay={index * 120}>
                  <div className="story-card">
                    {/* 16:9 Cinematic Video Container */}
                    <div className="story-media-box">
                      <video
                        ref={(el) => {
                          videoRefs.current[story.id] = el;
                        }}
                        src={story.videoUrl}
                        poster={story.posterUrl}
                        playsInline
                        controls={isPlaying}
                        className={`story-video-el ${isPlaying ? 'visible' : ''}`}
                        onEnded={() => setActiveVideoId(null)}
                      />

                      {/* Poster & Play Button State */}
                      {!isPlaying && (
                        <div
                          className="story-poster-overlay"
                          onClick={() => handlePlayToggle(story)}
                          role="button"
                          tabIndex={0}
                          aria-label={`Play film for ${story.couple}`}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') handlePlayToggle(story);
                          }}
                        >
                          <Image
                            src={story.posterUrl}
                            alt={`${story.couple} cinematic wedding film`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="story-poster-img"
                          />
                          <div className="poster-gradient" />

                          {/* Top Tag Badges */}
                          <div className="poster-top-bar">
                            <span className="film-tag">
                              <Film size={12} />
                              <span>4K CINEMA</span>
                            </span>
                            <span className="duration-tag">{story.duration}</span>
                          </div>

                          {/* Center Play Button */}
                          <div className="play-btn-wrap">
                            <div className="play-pulse-ring" />
                            <div className="play-btn-circle">
                              <Play size={20} fill="currentColor" className="play-icon" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Story Details Card Footer */}
                    <div className="story-info">
                      <div className="story-meta-row">
                        <span className="story-couple">{story.couple}</span>
                        <span className="story-location">{story.location}</span>
                      </div>
                      <h3 className="story-title">{story.title}</h3>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Cinematic Consultation CTA */}
          <ScrollReveal delay={150}>
            <div className="stories-bottom-cta">
              <span className="cta-kicker">CINEMATOGRAPHY COLLECTIONS</span>
              <h2 className="cta-title">Document Your Vows in Motion</h2>
              <p className="cta-sub">
                Our bespoke cinematography packages capture both candid whispers and cinematic grandeur.
                Reach out to discuss your wedding film vision.
              </p>
              <button
                type="button"
                id="stories-inquire-btn"
                onClick={openBooking}
                className="btn-primary"
              >
                <span>INQUIRE ABOUT FILMS</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <style jsx>{`
        .stories-page-main {
          background-color: var(--cream-bg);
          padding-top: 5.5rem;
        }

        .stories-hero-header {
          padding-top: clamp(3.5rem, 6vw, 5.5rem);
          padding-bottom: clamp(2.5rem, 5vw, 4rem);
          text-align: center;
          border-bottom: 1px solid var(--beige-border);
          background: linear-gradient(180deg, rgba(245, 240, 230, 0.5) 0%, var(--cream-bg) 100%);
        }

        .stories-hero-title {
          font-family: var(--font-serif);
          font-size: clamp(2.2rem, 4.2vw, 3.6rem);
          font-weight: 500;
          color: var(--charcoal-black);
          line-height: 1.15;
          letter-spacing: -0.015em;
          margin-bottom: 1rem;
        }

        .stories-hero-subtitle {
          font-family: var(--font-sans);
          font-size: clamp(0.95rem, 1.2vw, 1.05rem);
          color: var(--charcoal-muted);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .stories-grid-section {
          padding-top: var(--section-padding-y);
          padding-bottom: var(--section-padding-y);
        }

        .stories-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }

        @media (min-width: 768px) {
          .stories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .stories-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .story-card {
          background-color: #ffffff;
          border: 1px solid rgba(201, 186, 164, 0.45);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-subtle);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }

        .story-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-luxury);
        }

        .story-media-box {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background-color: var(--charcoal-black);
          overflow: hidden;
        }

        .story-video-el {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .story-poster-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        :global(.story-poster-img) {
          object-fit: cover !important;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .story-card:hover :global(.story-poster-img) {
          transform: scale(1.04);
        }

        .poster-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(20, 22, 19, 0.82) 0%,
            rgba(20, 22, 19, 0.25) 50%,
            rgba(20, 22, 19, 0.5) 100%
          );
        }

        .poster-top-bar {
          position: absolute;
          top: 1rem;
          left: 1rem;
          right: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 3;
        }

        .film-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.62rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          background: rgba(20, 22, 19, 0.65);
          backdrop-filter: blur(4px);
          color: #ffffff;
          padding: 0.3rem 0.65rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .duration-tag {
          font-size: 0.68rem;
          font-family: var(--font-sans);
          letter-spacing: 0.1em;
          color: var(--beige-primary);
          background: rgba(20, 22, 19, 0.65);
          backdrop-filter: blur(4px);
          padding: 0.3rem 0.65rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .play-btn-wrap {
          position: relative;
          z-index: 3;
        }

        .play-btn-circle {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: rgba(245, 239, 230, 0.95);
          color: var(--charcoal-black);
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 3px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
          transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
        }

        .story-poster-overlay:hover .play-btn-circle {
          transform: scale(1.1);
          background-color: #ffffff;
          color: var(--sage-primary);
        }

        .play-pulse-ring {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 1.5px solid rgba(245, 239, 230, 0.65);
          animation: pulseRing 2.4s infinite cubic-bezier(0.25, 1, 0.5, 1);
        }

        @keyframes pulseRing {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.35);
            opacity: 0;
          }
        }

        .story-info {
          padding: 1.6rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          background-color: #ffffff;
        }

        .story-meta-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .story-couple {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          font-weight: 500;
          color: var(--charcoal-black);
        }

        .story-location {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--sage-primary);
          font-weight: 500;
        }

        .story-title {
          font-family: var(--font-sans);
          font-size: 0.92rem;
          color: var(--charcoal-muted);
          font-style: italic;
          font-weight: 400;
          line-height: 1.5;
        }

        /* Bottom CTA */
        .stories-bottom-cta {
          margin-top: clamp(4rem, 7vw, 6rem);
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
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: var(--sage-primary);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .cta-title {
          font-family: var(--font-serif);
          font-size: clamp(1.85rem, 3.4vw, 2.6rem);
          font-weight: 500;
          color: var(--charcoal-black);
          margin-bottom: 0.75rem;
        }

        .cta-sub {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: var(--charcoal-muted);
          max-width: 520px;
          margin-bottom: 1.85rem;
          line-height: 1.7;
        }
      `}</style>
    </main>
  );
}
