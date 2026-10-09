'use client';

import React, { useState, useEffect } from 'react';
import { X, PhoneCall, CheckCircle2, ArrowRight } from 'lucide-react';
import { SITE_CONFIG, EVENT_TYPE_OPTIONS } from '@/data/weddingData';
import { EventType } from '@/types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [eventType, setEventType] = useState<EventType>('Wedding');
  const [customEventType, setCustomEventType] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setFormError('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }

    if (!phoneNumber.trim()) {
      setFormError('Please enter your phone number.');
      return;
    }

    const resolvedEventType =
      eventType === 'Others'
        ? customEventType.trim()
          ? `Others (${customEventType.trim()})`
          : 'Others'
        : eventType;

    // Exact WhatsApp message format requested
    const messageText = `Hello LK Capture Weddings,\n\nI would like to make a booking.\n\nFull Name: ${fullName.trim()}\nPhone Number: ${phoneNumber.trim()}\nEvent Type: ${resolvedEventType}\n\nThank you.`;

    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(messageText)}`;

    // Open direct WhatsApp chat
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setIsSubmitted(true);

    setTimeout(() => {
      onClose();
    }, 2800);
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        {/* Subtle Top Accent Bar */}
        <div className="modal-accent-bar" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close booking modal"
        >
          <X size={18} />
        </button>

        {isSubmitted ? (
          <div className="modal-success-state">
            <div className="success-icon-wrap">
              <CheckCircle2 size={44} className="success-icon" />
            </div>
            <span className="success-badge">RESERVATION REQUESTED</span>
            <h3 className="success-title">Opening WhatsApp...</h3>
            <p className="success-text">
              Your inquiry has been prepared for <strong>{SITE_CONFIG.brandName}</strong>.
              Connecting you directly to our studio consultation now.
            </p>
          </div>
        ) : (
          <>
            {/* Modal Header */}
            <div className="modal-header">
              <span className="modal-kicker">{SITE_CONFIG.brandName}</span>
              <h2 id="modal-title" className="modal-title">
                Reserve Your Date
              </h2>
              <p className="modal-subtitle">
                Enter your details below to begin your bespoke photography consultation via WhatsApp.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="booking-form" noValidate>
              {formError && (
                <div className="form-error-banner" role="alert">
                  <span className="error-dot" />
                  <span>{formError}</span>
                </div>
              )}

              {/* 1. Full Name */}
              <div className="form-group">
                <label htmlFor="booking-full-name" className="form-label">
                  <span>Full Name</span>
                  <span className="req-indicator">*</span>
                </label>
                <div className="input-wrap">
                  <input
                    id="booking-full-name"
                    type="text"
                    required
                    placeholder="e.g. Priyadarshini & Vikram"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (formError) setFormError('');
                    }}
                    className="form-input"
                  />
                </div>
              </div>

              {/* 2. Phone Number */}
              <div className="form-group">
                <label htmlFor="booking-phone" className="form-label">
                  <span>Phone Number</span>
                  <span className="req-indicator">*</span>
                </label>
                <div className="input-wrap">
                  <input
                    id="booking-phone"
                    type="tel"
                    required
                    placeholder="+94 77 247 8445"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      if (formError) setFormError('');
                    }}
                    className="form-input"
                  />
                </div>
              </div>

              {/* 3. Event Type */}
              <div className="form-group">
                <label htmlFor="booking-event-type" className="form-label">
                  <span>Event Type</span>
                  <span className="req-indicator">*</span>
                </label>
                <div className="select-wrap">
                  <select
                    id="booking-event-type"
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value as EventType)}
                    className="form-select"
                  >
                    {EVENT_TYPE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className="select-chevron" aria-hidden="true">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="#9f805a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Custom Event Specification if Others */}
              {eventType === 'Others' && (
                <div className="form-group">
                  <label htmlFor="booking-custom-event" className="form-label">
                    <span>Specify Event Type</span>
                    <span className="req-indicator">*</span>
                  </label>
                  <div className="input-wrap">
                    <input
                      id="booking-custom-event"
                      type="text"
                      required
                      placeholder="e.g. Engagement, Pre-wedding, Anniversary"
                      value={customEventType}
                      onChange={(e) => setCustomEventType(e.target.value)}
                      className="form-input"
                    />
                  </div>
                </div>
              )}

              {/* MANDATORY EXACT NOTE */}
              <div className="package-note-card">
                <div className="note-icon-box">
                  <PhoneCall size={15} />
                </div>
                <p className="note-text">
                  Package details will be discussed and finalized over the phone.
                </p>
              </div>

              {/* Premium Submit Button */}
              <div className="submit-action-wrap">
                <button
                  type="submit"
                  id="booking-form-submit-btn"
                  className="booking-submit-btn"
                >
                  <span>BOOK NOW</span>
                  <ArrowRight size={15} className="submit-arrow" />
                </button>
                <span className="submit-disclaimer">
                  Direct inquiry to WhatsApp • Quick response
                </span>
              </div>
            </form>
          </>
        )}
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(23, 25, 22, 0.68);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 3000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
          animation: overlayFadeIn 0.28s ease;
        }

        .modal-panel {
          position: relative;
          background-color: #faf7f2;
          width: 100%;
          max-width: 480px;
          max-height: 90vh;
          overflow-y: auto;
          padding: clamp(2rem, 5vw, 2.6rem) clamp(1.75rem, 4.5vw, 2.35rem);
          border: 1px solid #ded3c3;
          border-radius: 12px;
          box-shadow: 0 20px 48px -12px rgba(23, 25, 22, 0.22);
          animation: modalSlideUp 0.32s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Top Muted Gold Border Accent */
        .modal-accent-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #c4b59f 0%, #9f805a 50%, #c4b59f 100%);
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
        }

        .modal-close-btn {
          position: absolute;
          top: 1.15rem;
          right: 1.15rem;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid #ded3c3;
          color: #5e6359;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          color: #171916;
          border-color: #9f805a;
          background: #faf7f2;
          transform: scale(1.05);
        }

        .modal-header {
          text-align: center;
          margin-bottom: 1.6rem;
          padding-bottom: 1.35rem;
          border-bottom: 1px solid rgba(222, 211, 195, 0.65);
        }

        .modal-kicker {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 0.66rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #9f805a;
          font-weight: 600;
          margin-bottom: 0.35rem;
        }

        .modal-title {
          font-family: var(--font-serif);
          font-size: clamp(1.8rem, 3.2vw, 2.15rem);
          font-weight: 500;
          letter-spacing: -0.015em;
          color: #171916;
          margin: 0.2rem 0 0.45rem 0;
          line-height: 1.2;
        }

        .modal-subtitle {
          font-family: var(--font-sans);
          font-size: 0.86rem;
          color: #696e64;
          line-height: 1.55;
          max-width: 380px;
          margin: 0 auto;
        }

        .booking-form {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
        }

        .form-error-banner {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          background-color: #fdf5ef;
          color: #9c4221;
          padding: 0.75rem 1rem;
          font-size: 0.82rem;
          border: 1px solid #ebd0bc;
          border-radius: 6px;
        }

        .error-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #c53030;
          flex-shrink: 0;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.38rem;
        }

        .form-label {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #232621;
        }

        .req-indicator {
          color: #9f805a;
          font-weight: 600;
        }

        .input-wrap,
        .select-wrap {
          position: relative;
          width: 100%;
        }

        .form-input {
          width: 100%;
          height: 46px;
          padding: 0 1rem;
          font-family: var(--font-sans);
          font-size: 0.92rem;
          color: #171916;
          background-color: #ffffff;
          border: 1px solid #ded3c3;
          border-radius: 6px;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .form-input::placeholder {
          color: #a8a094;
          font-weight: 400;
        }

        .form-input:focus {
          border-color: #9f805a;
          box-shadow: 0 0 0 3px rgba(159, 128, 90, 0.12);
        }

        .select-wrap {
          position: relative;
        }

        .form-select {
          width: 100%;
          height: 46px;
          padding: 0 2.5rem 0 1rem;
          font-family: var(--font-sans);
          font-size: 0.92rem;
          color: #171916;
          background-color: #ffffff;
          border: 1px solid #ded3c3;
          border-radius: 6px;
          outline: none;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          cursor: pointer;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .form-select:focus {
          border-color: #9f805a;
          box-shadow: 0 0 0 3px rgba(159, 128, 90, 0.12);
        }

        .select-chevron {
          position: absolute;
          right: 1.05rem;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Package Details Note Card */
        .package-note-card {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background-color: #f5efe6;
          border: 1px solid #e3d8c8;
          border-radius: 6px;
          padding: 0.85rem 1rem;
          margin-top: 0.15rem;
        }

        .note-icon-box {
          color: #9f805a;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .note-text {
          font-family: var(--font-sans);
          font-size: 0.82rem;
          color: #3b3f37;
          line-height: 1.5;
          font-weight: 500;
          margin: 0;
        }

        /* Submit Action Wrap */
        .submit-action-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.4rem;
        }

        .booking-submit-btn {
          width: 100%;
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          background-color: #9f805a;
          color: #ffffff;
          border: none;
          border-radius: 7px;
          font-family: var(--font-sans);
          font-size: 0.76rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(159, 128, 90, 0.22);
          transition: background-color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
        }

        .booking-submit-btn:hover {
          background-color: #8e6f47;
          transform: translateY(-1px);
          box-shadow: 0 5px 14px rgba(159, 128, 90, 0.32);
        }

        .booking-submit-btn:active {
          transform: translateY(0);
        }

        .submit-arrow {
          transition: transform 0.2s ease;
        }

        .booking-submit-btn:hover .submit-arrow {
          transform: translateX(3px);
        }

        .submit-disclaimer {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          color: #7b8075;
          letter-spacing: 0.02em;
        }

        /* Success State */
        .modal-success-state {
          padding: 2.5rem 1rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }

        .success-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #f5efe6;
          border: 1px solid #ded3c3;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
        }

        :global(.success-icon) {
          color: #9f805a;
        }

        .success-badge {
          font-family: var(--font-sans);
          font-size: 0.66rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #9f805a;
          font-weight: 600;
        }

        .success-title {
          font-family: var(--font-serif);
          font-size: 1.85rem;
          font-weight: 500;
          color: #171916;
          margin: 0;
        }

        .success-text {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          color: #5e6359;
          max-width: 340px;
          line-height: 1.6;
          margin: 0;
        }

        @keyframes overlayFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 480px) {
          .modal-panel {
            padding: 2rem 1.35rem 1.75rem 1.35rem;
          }

          .modal-title {
            font-size: 1.65rem;
          }

          .booking-submit-btn {
            height: 46px;
          }
        }
      `}</style>
    </div>
  );
}
