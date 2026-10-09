'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Maximize2, X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '@/data/weddingData';
import { PortfolioItem } from '@/types';
import { useBookingModal } from '@/context/BookingContext';
import ScrollReveal from '@/components/ScrollReveal';

type CategoryFilter = 'All' | 'Ceremonies' | 'Portraits' | 'Moments' | 'Details';

const CATEGORIES: CategoryFilter[] = ['All', 'Ceremonies', 'Portraits', 'Moments', 'Details'];

export default function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);
  const { openBooking } = useBookingModal();

  const filteredItems =
    activeCategory === 'All'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (item: PortfolioItem) => {
    setLightboxItem(item);
  };

  const closeLightbox = () => {
    setLightboxItem(null);
  };

  const navigateLightbox = (direction: 'next' | 'prev') => {
    if (!lightboxItem) return;
    const currentList = filteredItems;
    const currentIndex = currentList.findIndex((item) => item.id === lightboxItem.id);
    if (currentIndex === -1) return;

    if (direction === 'next') {
      const nextIdx = (currentIndex + 1) % currentList.length;
      setLightboxItem(currentList[nextIdx]);
    } else {
      const prevIdx = (currentIndex - 1 + currentList.length) % currentList.length;
      setLightboxItem(currentList[prevIdx]);
    }
  };

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxItem) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateLightbox('next');
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    if (lightboxItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxItem, filteredItems]);

  return (
    <main className="portfolio-page-main">
      {/* 1. Page Header */}
      <section className="portfolio-hero-header">
        <div className="container">
          <ScrollReveal>
            <span className="section-badge">GALLERY ARCHIVE</span>
            <h1 className="portfolio-hero-title">The Wedding Portfolio</h1>
            <p className="portfolio-hero-subtitle">
              An editorial gallery of sacred celebrations, intimate quietude,
              and spontaneous joy captured across bespoke celebrations.
            </p>
          </ScrollReveal>

          {/* Category Filters */}
          <ScrollReveal delay={100}>
            <div className="filter-tab-bar" role="tablist" aria-label="Portfolio category filters">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Gallery Grid with Varied Aspect Ratios */}
      <section className="portfolio-grid-section">
        <div className="container">
          <div className="gallery-masonry-grid">
            {filteredItems.map((item, index) => {
              const isTall = item.height > item.width;

              return (
                <ScrollReveal
                  key={item.id}
                  delay={(index % 4) * 80}
                  className="gallery-grid-item"
                >
                  <article
                    className={`gallery-card ${isTall ? 'card-portrait' : 'card-landscape'}`}
                    onClick={() => openLightbox(item)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${item.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') openLightbox(item);
                    }}
                  >
                    <div className="card-image-wrap">
                      <Image
                        src={item.imageUrl}
                        alt={item.altText || item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={index < 3}
                        className="gallery-photo"
                        style={{ objectPosition: item.objectPosition || 'center center' }}
                      />
                      <div className="card-overlay">
                        <span className="overlay-category">{item.category}</span>
                        <h3 className="overlay-title">{item.title}</h3>
                        {item.location && <span className="overlay-location">{item.location}</span>}
                        <div className="overlay-zoom-icon">
                          <Maximize2 size={16} />
                        </div>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Bottom Consultation CTA */}
          <ScrollReveal delay={150}>
            <div className="portfolio-bottom-cta">
              <span className="cta-kicker">CHERISH EVERY MOMENT</span>
              <h2 className="cta-title">Inspired by Our Work?</h2>
              <p className="cta-sub">
                Every love story is unique. We would be honored to document your celebration.
              </p>
              <button
                type="button"
                id="portfolio-book-btn"
                onClick={openBooking}
                className="btn-primary"
              >
                <span>BOOK YOUR DATE</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Lightbox Modal */}
      {lightboxItem && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
        >
          <button
            type="button"
            className="lightbox-close-btn"
            onClick={closeLightbox}
            aria-label="Close fullscreen view"
          >
            <X size={26} />
          </button>

          <button
            type="button"
            className="lightbox-nav-btn prev-btn"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('prev');
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={26} />
          </button>

          <button
            type="button"
            className="lightbox-nav-btn next-btn"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('next');
            }}
            aria-label="Next image"
          >
            <ChevronRight size={26} />
          </button>

          <div className="lightbox-content-box" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-image-container">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightboxItem.imageUrl}
                alt={lightboxItem.altText || lightboxItem.title}
                className="lightbox-main-img"
              />
            </div>
            <div className="lightbox-caption">
              <div className="lightbox-meta">
                <span className="lightbox-category">{lightboxItem.category}</span>
                {lightboxItem.location && <span className="lightbox-loc"> • {lightboxItem.location}</span>}
              </div>
              <h3 className="lightbox-title">{lightboxItem.title}</h3>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .portfolio-page-main {
          background-color: var(--cream-bg);
          padding-top: 5.5rem;
        }

        .portfolio-hero-header {
          padding-top: clamp(3.5rem, 6vw, 5.5rem);
          padding-bottom: clamp(2rem, 4vw, 3rem);
          text-align: center;
          border-bottom: 1px solid var(--beige-border);
          background: linear-gradient(180deg, rgba(245, 240, 230, 0.5) 0%, var(--cream-bg) 100%);
        }

        .portfolio-hero-title {
          font-family: var(--font-serif);
          font-size: clamp(2.2rem, 4.2vw, 3.6rem);
          font-weight: 500;
          color: var(--charcoal-black);
          line-height: 1.15;
          letter-spacing: -0.015em;
          margin-bottom: 1rem;
        }

        .portfolio-hero-subtitle {
          font-family: var(--font-sans);
          font-size: clamp(0.95rem, 1.2vw, 1.05rem);
          color: var(--charcoal-muted);
          max-width: 600px;
          margin: 0 auto clamp(2rem, 4vw, 3rem) auto;
          line-height: 1.7;
        }

        .filter-tab-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(0.4rem, 1.5vw, 1.25rem);
          flex-wrap: wrap;
        }

        .filter-btn {
          font-family: var(--font-sans);
          font-size: 0.74rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 0.6rem 1.35rem;
          color: var(--charcoal-muted);
          background-color: transparent;
          border: 1px solid transparent;
          transition: var(--transition-fast);
        }

        .filter-btn:hover {
          color: var(--charcoal-black);
          background-color: rgba(201, 186, 164, 0.2);
        }

        .filter-btn.active {
          color: #ffffff;
          background-color: var(--sage-primary);
          border-color: var(--sage-primary);
        }

        .portfolio-grid-section {
          padding-top: clamp(3rem, 5vw, 4.5rem);
          padding-bottom: var(--section-padding-y);
        }

        .gallery-masonry-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 640px) {
          .gallery-masonry-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .gallery-masonry-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .gallery-card {
          position: relative;
          cursor: pointer;
          overflow: hidden;
          background-color: var(--beige-sand);
          box-shadow: var(--shadow-subtle);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
          outline: none;
        }

        .gallery-card:focus-visible {
          box-shadow: 0 0 0 3px var(--sage-primary);
        }

        .card-portrait {
          aspect-ratio: 3 / 4;
        }

        .card-landscape {
          aspect-ratio: 4 / 3;
        }

        .card-image-wrap {
          position: relative;
          width: 100%;
          height: 100%;
        }

        :global(.gallery-photo) {
          object-fit: cover !important;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gallery-card:hover :global(.gallery-photo) {
          transform: scale(1.045);
        }

        .gallery-card:hover {
          box-shadow: var(--shadow-luxury);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(20, 22, 19, 0.85) 0%,
            rgba(20, 22, 19, 0.2) 50%,
            transparent 100%
          );
          opacity: 0;
          transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.75rem;
          color: #ffffff;
        }

        .gallery-card:hover .card-overlay {
          opacity: 1;
        }

        .overlay-category {
          font-family: var(--font-sans);
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--beige-primary);
          margin-bottom: 0.3rem;
          font-weight: 500;
        }

        .overlay-title {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: #ffffff;
          line-height: 1.25;
        }

        .overlay-location {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          color: #e5ded5;
          margin-top: 0.25rem;
        }

        .overlay-zoom-icon {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          width: 34px;
          height: 34px;
          background: rgba(20, 22, 19, 0.65);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Bottom CTA */
        .portfolio-bottom-cta {
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

        /* Lightbox Overlay */
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(18, 20, 17, 0.94);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: lbFadeIn 0.25s ease;
        }

        .lightbox-close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          color: #ffffff;
          background: transparent;
          padding: 0.5rem;
          z-index: 2020;
          transition: transform 0.2s ease;
        }

        .lightbox-close-btn:hover {
          transform: scale(1.1);
        }

        .lightbox-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(20, 22, 19, 0.65);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          z-index: 2020;
          transition: background-color 0.2s ease;
        }

        .lightbox-nav-btn:hover {
          background-color: var(--sage-primary);
        }

        .prev-btn {
          left: 1.5rem;
        }

        .next-btn {
          right: 1.5rem;
        }

        .lightbox-content-box {
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .lightbox-image-container {
          display: flex;
          align-items: center;
          justify-content: center;
          max-height: 75vh;
        }

        .lightbox-main-img {
          max-height: 75vh;
          max-width: 85vw;
          width: auto;
          height: auto;
          object-fit: contain;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .lightbox-caption {
          margin-top: 1.25rem;
          text-align: center;
          color: #ffffff;
        }

        .lightbox-meta {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--beige-primary);
          margin-bottom: 0.25rem;
        }

        .lightbox-title {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: #ffffff;
        }

        @keyframes lbFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .lightbox-nav-btn {
            width: 40px;
            height: 40px;
          }
          .prev-btn {
            left: 0.5rem;
          }
          .next-btn {
            right: 0.5rem;
          }
        }
      `}</style>
    </main>
  );
}
