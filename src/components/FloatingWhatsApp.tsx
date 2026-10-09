'use client';

import React from 'react';
import { SITE_CONFIG } from '@/data/weddingData';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    'Hello LK Capture Weddings,\n\nI would like to inquire about wedding photography dates and availability.\n\nThank you.'
  )}`;

  return (
    <aside className="floating-wa-wrapper" aria-label="WhatsApp quick contact">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa-btn"
        id="floating-whatsapp-btn"
        aria-label="Chat directly on WhatsApp with LK Capture Weddings"
      >
        <span className="wa-pulse-glow" />
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="currentColor"
          className="wa-icon"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.89 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="floating-tooltip">Chat with us</span>
      </a>

      <style jsx>{`
        .floating-wa-wrapper {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 990;
          display: flex;
          align-items: center;
        }

        .floating-wa-btn {
          position: relative;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: #25d366;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.45);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
          text-decoration: none;
        }

        .floating-wa-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 12px 30px rgba(37, 211, 102, 0.6);
        }

        .wa-pulse-glow {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid rgba(37, 211, 102, 0.5);
          animation: waPulse 2.4s infinite cubic-bezier(0.2, 0.8, 0.4, 1);
          pointer-events: none;
        }

        .wa-icon {
          width: 26px;
          height: 26px;
        }

        .floating-tooltip {
          position: absolute;
          right: 68px;
          background: rgba(23, 25, 22, 0.9);
          backdrop-filter: blur(6px);
          color: #ffffff;
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          padding: 0.45rem 0.85rem;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transform: translateX(8px);
          transition: opacity 0.25s ease, transform 0.25s ease;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .floating-wa-btn:hover .floating-tooltip {
          opacity: 1;
          transform: translateX(0);
        }

        @keyframes waPulse {
          0% {
            transform: scale(0.92);
            opacity: 0.9;
          }
          60% {
            transform: scale(1.35);
            opacity: 0;
          }
          100% {
            transform: scale(1.35);
            opacity: 0;
          }
        }

        @media (max-width: 640px) {
          .floating-wa-wrapper {
            bottom: 1.25rem;
            right: 1.25rem;
          }

          .floating-wa-btn {
            width: 50px;
            height: 50px;
          }

          .wa-icon {
            width: 23px;
            height: 23px;
          }

          .floating-tooltip {
            display: none;
          }
        }
      `}</style>
    </aside>
  );
}
