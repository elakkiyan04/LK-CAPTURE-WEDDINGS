'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { SLIDER_PHOTOS } from '@/data/weddingData';
import ScrollReveal from '@/components/ScrollReveal';

export default function PhotoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDER_PHOTOS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDER_PHOTOS.length) % SLIDER_PHOTOS.length);
  }, []);

  // Automatic slide transition
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  // Touch gesture handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide(); // swipe left
    } else if (diff < -50) {
      prevSlide(); // swipe right
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="slider-section"
      id="slider"
      aria-label="4-Image Automatic Photo Slider"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="slider-container">
        {/* Editorial Section Header */}
        <ScrollReveal>
          <div className="slider-header-bar">
            <div className="slider-label-group">
              <span className="slider-badge">FEATURED CAPTURES</span>
              <h2 className="slider-heading">Curated Moments in Light</h2>
            </div>
            <div className="slider-counter">
              <span className="counter-current">0{currentIndex + 1}</span>
              <span className="counter-slash">/</span>
              <span className="counter-total">0{SLIDER_PHOTOS.length}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Main 4-Image Slider Viewport */}
        <ScrollReveal delay={150}>
          <div className="carousel-viewport">
            {SLIDER_PHOTOS.map((slide, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={slide.id}
                  className={`slide-item ${isActive ? 'active' : ''}`}
                  aria-hidden={!isActive}
                >
                  <div className="slide-image-wrapper">
                    <Image
                      src={slide.imageUrl}
                      alt={slide.altText || slide.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                      priority={index === 0}
                      className="slide-image"
                      style={{ objectPosition: slide.objectPosition || 'center center' }}
                    />
                    <div className="slide-gradient" />
                  </div>

                  {/* Slide Caption Card */}
                  <div className="slide-caption-card">
                    <span className="caption-sub">{slide.subtitle}</span>
                    <h3 className="caption-title">{slide.title}</h3>
                  </div>
                </div>
              );
            })}

            {/* Slider Progress Bar */}
            <div className="slider-progress-track">
              <div
                key={currentIndex}
                className={`slider-progress-bar ${isPlaying ? 'running' : 'paused'}`}
              />
            </div>

            {/* Navigation Controls */}
            <div className="slider-controls">
              <button
                type="button"
                onClick={prevSlide}
                className="slider-nav-btn prev-btn"
                aria-label="Previous photograph"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="slider-nav-btn play-pause-btn"
                aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              >
                {isPlaying ? <Pause size={15} /> : <Play size={15} />}
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="slider-nav-btn next-btn"
                aria-label="Next photograph"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="slider-dots">
              {SLIDER_PHOTOS.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setCurrentIndex(dotIdx)}
                  className={`slider-dot ${dotIdx === currentIndex ? 'active' : ''}`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        .slider-section {
          width: 100%;
          background-color: var(--cream-bg);
          padding-top: clamp(4rem, 6.5vw, 6.5rem);
          padding-bottom: clamp(4rem, 6.5vw, 6.5rem);
          position: relative;
          border-bottom: 1px solid rgba(201, 186, 164, 0.35);
        }

        .slider-container {
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 var(--container-padding-x);
        }

        .slider-header-bar {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--beige-border);
        }

        .slider-label-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .slider-badge {
          font-family: var(--font-sans);
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: var(--sage-primary);
        }

        .slider-heading {
          font-family: var(--font-serif);
          font-size: clamp(1.75rem, 3.2vw, 2.4rem);
          font-weight: 500;
          letter-spacing: -0.01em;
          color: var(--charcoal-black);
        }

        .slider-counter {
          font-family: var(--font-sans);
          font-size: 1.15rem;
          color: var(--charcoal-black);
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .counter-current {
          font-weight: 600;
          color: var(--sage-primary);
        }

        .counter-slash {
          color: var(--beige-dark);
          font-weight: 300;
        }

        .counter-total {
          font-size: 1rem;
          color: var(--charcoal-muted);
        }

        .carousel-viewport {
          position: relative;
          width: 100%;
          height: clamp(380px, 58vw, 660px);
          overflow: hidden;
          background-color: var(--charcoal-black);
          box-shadow: var(--shadow-luxury);
        }

        .slide-item {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.85s;
          z-index: 1;
        }

        .slide-item.active {
          opacity: 1;
          visibility: visible;
          z-index: 2;
        }

        .slide-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        :global(.slide-image) {
          object-fit: cover !important;
          object-position: center 40% !important;
          transition: transform 6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .slide-item.active :global(.slide-image) {
          transform: scale(1.025);
        }

        .slide-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(20, 22, 19, 0.85) 0%,
            rgba(20, 22, 19, 0.28) 45%,
            transparent 75%
          );
        }

        .slide-caption-card {
          position: absolute;
          bottom: 2.5rem;
          left: clamp(1.5rem, 4vw, 3.5rem);
          max-width: 580px;
          z-index: 5;
          color: #ffffff;
        }

        .caption-sub {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--beige-sand);
          margin-bottom: 0.4rem;
        }

        .caption-title {
          font-family: var(--font-serif);
          font-size: clamp(1.6rem, 3.4vw, 2.5rem);
          font-weight: 500;
          letter-spacing: -0.01em;
          color: #ffffff;
          line-height: 1.2;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        }

        .slider-progress-track {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: rgba(255, 255, 255, 0.2);
          z-index: 10;
        }

        .slider-progress-bar {
          height: 100%;
          background: var(--beige-primary);
          width: 0%;
        }

        .slider-progress-bar.running {
          animation: progressFill 4.5s linear infinite;
        }

        .slider-progress-bar.paused {
          animation-play-state: paused;
        }

        @keyframes progressFill {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .slider-controls {
          position: absolute;
          bottom: 2.5rem;
          right: clamp(1.5rem, 4vw, 3.5rem);
          display: flex;
          align-items: center;
          gap: 0.65rem;
          z-index: 10;
        }

        .slider-nav-btn {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(23, 25, 22, 0.65);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.25);
          transition: var(--transition-fast);
        }

        .slider-nav-btn:hover {
          background: var(--sage-primary);
          border-color: var(--sage-primary);
          transform: translateY(-2px);
        }

        .slider-dots {
          position: absolute;
          bottom: 1.25rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 0.65rem;
          z-index: 10;
        }

        .slider-dot {
          width: 26px;
          height: 3px;
          background: rgba(255, 255, 255, 0.35);
          transition: background-color 0.3s ease, width 0.3s ease;
        }

        .slider-dot.active {
          background: #ffffff;
          width: 42px;
        }

        @media (max-width: 640px) {
          .slider-header-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }

          .slide-caption-card {
            bottom: 4.8rem;
            right: 1.5rem;
          }

          .slider-controls {
            bottom: 1.5rem;
            right: 1.5rem;
          }

          .slider-dots {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
