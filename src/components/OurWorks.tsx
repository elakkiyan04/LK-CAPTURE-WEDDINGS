'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { OUR_WORKS_ITEMS } from '@/data/weddingData';
import ScrollReveal from '@/components/ScrollReveal';

export default function OurWorks() {
  const [item1, item2, item3, item4, item5] = OUR_WORKS_ITEMS;

  return (
    <section className="our-works-section" id="our-works" aria-label="Our Works - Selected Wedding Highlights">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="section-header">
            <span className="section-badge">SELECTED PORTFOLIO</span>
            <h2 className="section-title">Our Works</h2>
            <p className="section-subtitle">
              An intentional curation of authentic connection, sacred rituals,
              and cinematic light captured across bespoke celebrations.
            </p>
          </div>
        </ScrollReveal>

        {/* Modern Premium Editorial Layout (5 Images: 2 Grand Features + 3 Curated Highlights) */}
        <div className="editorial-works-grid">
          {/* Row 1: Two Grand Editorial Features */}
          <div className="works-row row-duo">
            <ScrollReveal className="work-item-col" delay={50}>
              <article className="work-card card-duo">
                <div className="work-image-wrap">
                  <Image
                    src={item1.imageUrl}
                    alt={item1.altText || item1.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="work-photo"
                    style={{ objectPosition: item1.objectPosition || 'center center' }}
                  />
                  <div className="work-card-overlay">
                    <span className="card-cat">{item1.category}</span>
                    <h3 className="card-title">{item1.title}</h3>
                    <span className="card-loc">{item1.location}</span>
                  </div>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal className="work-item-col" delay={150}>
              <article className="work-card card-duo">
                <div className="work-image-wrap">
                  <Image
                    src={item2.imageUrl}
                    alt={item2.altText || item2.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="work-photo"
                    style={{ objectPosition: item2.objectPosition || 'center center' }}
                  />
                  <div className="work-card-overlay">
                    <span className="card-cat">{item2.category}</span>
                    <h3 className="card-title">{item2.title}</h3>
                    <span className="card-loc">{item2.location}</span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          </div>

          {/* Row 2: Three Curated Editorial Highlights */}
          <div className="works-row row-trio">
            <ScrollReveal className="work-item-col" delay={100}>
              <article className="work-card card-trio">
                <div className="work-image-wrap">
                  <Image
                    src={item3.imageUrl}
                    alt={item3.altText || item3.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="work-photo"
                    style={{ objectPosition: item3.objectPosition || 'center center' }}
                  />
                  <div className="work-card-overlay">
                    <span className="card-cat">{item3.category}</span>
                    <h3 className="card-title">{item3.title}</h3>
                    <span className="card-loc">{item3.location}</span>
                  </div>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal className="work-item-col" delay={180}>
              <article className="work-card card-trio">
                <div className="work-image-wrap">
                  <Image
                    src={item4.imageUrl}
                    alt={item4.altText || item4.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="work-photo"
                    style={{ objectPosition: item4.objectPosition || 'center center' }}
                  />
                  <div className="work-card-overlay">
                    <span className="card-cat">{item4.category}</span>
                    <h3 className="card-title">{item4.title}</h3>
                    <span className="card-loc">{item4.location}</span>
                  </div>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal className="work-item-col" delay={260}>
              <article className="work-card card-trio">
                <div className="work-image-wrap">
                  <Image
                    src={item5.imageUrl}
                    alt={item5.altText || item5.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="work-photo"
                    style={{ objectPosition: item5.objectPosition || 'center center' }}
                  />
                  <div className="work-card-overlay">
                    <span className="card-cat">{item5.category}</span>
                    <h3 className="card-title">{item5.title}</h3>
                    <span className="card-loc">{item5.location}</span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </div>

        {/* View All Portfolio Link */}
        <ScrollReveal delay={150}>
          <div className="portfolio-cta-bar">
            <Link href="/portfolio" className="btn-explore-portfolio">
              <span>EXPLORE COMPLETE PORTFOLIO</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        .our-works-section {
          background-color: var(--cream-bg);
          padding-top: var(--section-padding-y);
          padding-bottom: var(--section-padding-y);
          position: relative;
        }

        .editorial-works-grid {
          display: flex;
          flex-direction: column;
          gap: 2.25rem;
          margin-bottom: 3.5rem;
        }

        .works-row {
          display: grid;
          gap: 2rem;
          align-items: stretch;
        }

        .row-duo {
          grid-template-columns: repeat(2, 1fr);
        }

        .row-trio {
          grid-template-columns: repeat(3, 1fr);
        }

        .work-card {
          position: relative;
          width: 100%;
          overflow: hidden;
          background-color: var(--beige-sand);
          box-shadow: var(--shadow-subtle);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.4s ease;
        }

        .work-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-luxury);
        }

        .card-duo {
          aspect-ratio: 4 / 5;
        }

        .card-trio {
          aspect-ratio: 3 / 4;
        }

        .work-image-wrap {
          position: relative;
          width: 100%;
          height: 100%;
        }

        :global(.work-photo) {
          object-fit: cover !important;
          transition: transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .work-card:hover :global(.work-photo) {
          transform: scale(1.04);
        }

        .work-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(20, 22, 19, 0.85) 0%,
            rgba(20, 22, 19, 0.25) 45%,
            transparent 75%
          );
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.85rem;
          color: #ffffff;
          transition: opacity 0.3s ease;
        }

        .card-cat {
          font-family: var(--font-sans);
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--beige-primary);
          margin-bottom: 0.35rem;
          font-weight: 500;
        }

        .card-title {
          font-family: var(--font-serif);
          font-size: clamp(1.2rem, 1.8vw, 1.6rem);
          font-weight: 500;
          letter-spacing: -0.01em;
          color: #ffffff;
          line-height: 1.25;
        }

        .card-loc {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          color: #ded6cc;
          margin-top: 0.25rem;
        }

        .portfolio-cta-bar {
          display: flex;
          justify-content: center;
          padding-top: 1rem;
        }

        .btn-explore-portfolio {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          background-color: var(--charcoal-black);
          color: #ffffff;
          padding: 1rem 2.25rem;
          font-family: var(--font-sans);
          font-size: 0.76rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          transition: var(--transition-smooth);
          border: 1px solid var(--charcoal-black);
        }

        .btn-explore-portfolio:hover {
          background-color: var(--sage-primary);
          border-color: var(--sage-primary);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(23, 25, 22, 0.25);
        }

        @media (max-width: 900px) {
          .row-duo {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }

          .row-trio {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }

          .card-trio:last-child {
            grid-column: span 2;
            aspect-ratio: 16 / 9;
          }
        }

        @media (max-width: 640px) {
          .row-duo,
          .row-trio {
            grid-template-columns: 1fr;
            gap: 1.75rem;
          }

          .card-duo,
          .card-trio,
          .card-trio:last-child {
            aspect-ratio: 4 / 5;
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
}
