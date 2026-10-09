'use client';

import React, { useState } from 'react';
import { MapPin, Clock, PhoneCall, CheckCircle2, ArrowRight } from 'lucide-react';
import { SITE_CONFIG, EVENT_TYPE_OPTIONS } from '@/data/weddingData';
import { EventType } from '@/types';
import ScrollReveal from '@/components/ScrollReveal';

export default function ContactClient() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [eventType, setEventType] = useState<EventType>('Wedding');
  const [customEventType, setCustomEventType] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const directWhatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    'Hello LK Capture Weddings,\n\nI would like to inquire about wedding photography and date availability.\n\nThank you.'
  )}`;

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

    const messageText = `Hello LK Capture Weddings,\n\nI would like to make a booking.\n\nFull Name: ${fullName.trim()}\nPhone Number: ${phoneNumber.trim()}\nEvent Type: ${resolvedEventType}\n\nThank you.`;

    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(messageText)}`;

    // Direct WhatsApp redirection
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setIsSubmitted(true);
  };

  return (
    <main className="contact-page-main">
      {/* 1. Page Header */}
      <section className="contact-hero-header">
        <div className="container">
          <ScrollReveal>
            <span className="section-badge">GET IN TOUCH</span>
            <h1 className="contact-hero-title">Connect with Our Studio</h1>
            <p className="contact-hero-subtitle">
              We would be honored to hear the story of your celebration.
              Reach out directly on WhatsApp for prompt availability and personal consultation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Booking Form & WhatsApp Contact Section */}
      <section className="contact-grid-section">
        <div className="container">
          <div className="contact-main-grid">
            {/* Left Column: Booking Form */}
            <ScrollReveal delay={100} className="contact-form-col">
              <div className="form-card-wrap">
                <span className="card-kicker">DIRECT RESERVATION</span>
                <h2 className="card-heading">Book Your Date</h2>
                <p className="card-sub">
                  Submit your details below to immediately start your consultation on WhatsApp.
                </p>

                {isSubmitted ? (
                  <div className="form-success-box">
                    <div className="success-icon-wrap">
                      <CheckCircle2 size={44} className="success-icon" />
                    </div>
                    <span className="success-badge">RESERVATION REQUESTED</span>
                    <h3 className="success-heading">Opening WhatsApp...</h3>
                    <p className="success-sub">
                      Your booking details have been prepared for <strong>{SITE_CONFIG.brandName}</strong>.
                      Continuing in WhatsApp now.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFullName('');
                        setPhoneNumber('');
                      }}
                      className="btn-reset-inquiry"
                    >
                      <span>SUBMIT ANOTHER INQUIRY</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="onpage-booking-form" noValidate>
                    {formError && (
                      <div className="form-error-banner" role="alert">
                        <span className="error-dot" />
                        <span>{formError}</span>
                      </div>
                    )}

                    {/* 1. Full Name */}
                    <div className="form-group">
                      <label htmlFor="contact-full-name" className="form-label">
                        Full Name <span className="req">*</span>
                      </label>
                      <input
                        id="contact-full-name"
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

                    {/* 2. Phone Number */}
                    <div className="form-group">
                      <label htmlFor="contact-phone" className="form-label">
                        Phone Number <span className="req">*</span>
                      </label>
                      <input
                        id="contact-phone"
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

                    {/* 3. Event Type */}
                    <div className="form-group">
                      <label htmlFor="contact-event-type" className="form-label">
                        Event Type <span className="req">*</span>
                      </label>
                      <div className="select-wrap">
                        <select
                          id="contact-event-type"
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
                      </div>
                    </div>

                    {/* If Others */}
                    {eventType === 'Others' && (
                      <div className="form-group">
                        <label htmlFor="contact-custom-event" className="form-label">
                          Specify Event Type <span className="req">*</span>
                        </label>
                        <input
                          id="contact-custom-event"
                          type="text"
                          required
                          placeholder="e.g. Engagement, Pre-wedding, Anniversary"
                          value={customEventType}
                          onChange={(e) => setCustomEventType(e.target.value)}
                          className="form-input"
                        />
                      </div>
                    )}

                    {/* Exact Mandatory Note */}
                    <div className="mandatory-note-box">
                      <PhoneCall size={17} className="note-icon" />
                      <p className="note-text">
                        Package details will be discussed and finalized over the phone.
                      </p>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      id="contact-form-submit-btn"
                      className="submit-whatsapp-btn"
                    >
                      <span className="btn-icon-circle">
                        <svg
                          viewBox="0 0 24 24"
                          width="17"
                          height="17"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.89 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </span>
                      <span>SUBMIT TO WHATSAPP</span>
                      <ArrowRight size={15} className="btn-arrow" />
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Right Column: WhatsApp Contact Spotlight & Studio Details */}
            <ScrollReveal delay={200} className="contact-info-col">
              {/* WhatsApp Spotlight Card */}
              <div className="wa-spotlight-card">
                <div className="wa-badge-pill">PRIMARY CONTACT</div>

                <div className="wa-icon-glow">
                  <svg
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.89 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>

                <h3 className="wa-title">Direct WhatsApp Chat</h3>
                <p className="wa-phone-number">{SITE_CONFIG.whatsappDisplay}</p>
                <p className="wa-desc">
                  Skip the form and chat with our wedding studio directly for immediate date checks and quick questions.
                </p>

                <a
                  href={directWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wa-direct-btn"
                  id="contact-page-whatsapp-direct"
                >
                  <span className="btn-icon-circle">
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.89 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  <span>START WHATSAPP CHAT</span>
                  <ArrowRight size={15} className="btn-arrow" />
                </a>
              </div>

              {/* Two Compact Studio Details Cards */}
              <div className="info-cards-stack">
                <div className="info-tile">
                  <div className="tile-icon-box">
                    <MapPin size={18} strokeWidth={1.8} />
                  </div>
                  <div className="tile-content">
                    <h4 className="tile-title">Studio Location</h4>
                    <p className="tile-text">{SITE_CONFIG.location}</p>
                    <span className="tile-note">Available worldwide for destination celebrations</span>
                  </div>
                </div>

                <div className="info-tile">
                  <div className="tile-icon-box">
                    <Clock size={18} strokeWidth={1.8} />
                  </div>
                  <div className="tile-content">
                    <h4 className="tile-title">Studio Hours</h4>
                    <p className="tile-text">Monday – Sunday: 9:00 AM – 8:30 PM (IST)</p>
                    <span className="tile-note">WhatsApp messages answered promptly</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-page-main {
          background-color: var(--cream-bg);
          padding-top: 5.5rem;
        }

        .contact-hero-header {
          padding-top: clamp(3.5rem, 6vw, 5.5rem);
          padding-bottom: clamp(2.5rem, 5vw, 4rem);
          text-align: center;
          border-bottom: 1px solid var(--beige-border);
          background: linear-gradient(180deg, rgba(245, 240, 230, 0.5) 0%, var(--cream-bg) 100%);
        }

        .contact-hero-title {
          font-family: var(--font-serif);
          font-size: clamp(2.2rem, 4.2vw, 3.6rem);
          font-weight: 500;
          color: var(--charcoal-black);
          line-height: 1.15;
          letter-spacing: -0.015em;
          margin-bottom: 1rem;
        }

        .contact-hero-subtitle {
          font-family: var(--font-sans);
          font-size: clamp(0.95rem, 1.2vw, 1.05rem);
          color: var(--charcoal-muted);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .contact-grid-section {
          padding-top: var(--section-padding-y);
          padding-bottom: var(--section-padding-y);
        }

        /* Balanced Two-Column Layout */
        .contact-main-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          max-width: 1120px;
          margin: 0 auto;
        }

        @media (min-width: 960px) {
          .contact-main-grid {
            grid-template-columns: 1.28fr 1fr;
            gap: 2.75rem;
            align-items: start;
          }
        }

        /* Left Column: Form Card */
        .form-card-wrap {
          background: #ffffff;
          border: 1px solid var(--beige-border);
          border-top: 3px solid #bfa583;
          border-radius: 12px;
          padding: clamp(2rem, 4vw, 3rem);
          box-shadow: 0 10px 30px -5px rgba(23, 25, 22, 0.05);
        }

        .card-kicker {
          font-family: var(--font-sans);
          font-size: 0.68rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #9c8360;
          font-weight: 600;
          display: block;
          margin-bottom: 0.45rem;
        }

        .card-heading {
          font-family: var(--font-serif);
          font-size: clamp(1.9rem, 3vw, 2.4rem);
          font-weight: 500;
          color: var(--charcoal-black);
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }

        .card-sub {
          font-family: var(--font-sans);
          font-size: 0.92rem;
          color: var(--charcoal-muted);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .onpage-booking-form {
          display: flex;
          flex-direction: column;
          gap: 1.35rem;
        }

        .form-error-banner {
          background-color: #fdf2f2;
          color: #9b1c1c;
          padding: 0.75rem 1rem;
          font-size: 0.85rem;
          border: 1px solid #f8b4b4;
          border-left: 3px solid #e02424;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .error-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #e02424;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-label {
          font-family: var(--font-sans);
          font-size: 0.74rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--charcoal-dark);
        }

        .req {
          color: #c53030;
        }

        .form-input,
        .form-select {
          width: 100%;
          padding: 0.88rem 1.1rem;
          font-family: var(--font-sans);
          font-size: 0.92rem;
          color: var(--charcoal-black);
          background-color: #fdfcf9;
          border: 1px solid var(--beige-border);
          border-radius: 8px;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        }

        .form-input:focus,
        .form-select:focus {
          background-color: #ffffff;
          border-color: #bfa583;
          box-shadow: 0 0 0 3px rgba(191, 165, 131, 0.18);
        }

        .select-wrap {
          position: relative;
        }

        .mandatory-note-box {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background-color: #f8f4ec;
          border: 1px solid #e8decb;
          border-radius: 8px;
          padding: 0.9rem 1.15rem;
          margin-top: 0.25rem;
        }

        .note-icon {
          color: #9c8360;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .note-text {
          font-family: var(--font-sans);
          font-size: 0.82rem;
          color: var(--charcoal-dark);
          line-height: 1.5;
          font-weight: 500;
        }

        /* Warm/Refined Submit Button */
        .submit-whatsapp-btn {
          width: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          background-color: var(--charcoal-black);
          color: #ffffff;
          padding: 1rem 1.75rem;
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          border: 1px solid var(--charcoal-black);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          margin-top: 0.5rem;
        }

        .submit-whatsapp-btn:hover {
          background: linear-gradient(135deg, #a48c6b 0%, #8f7756 100%);
          border-color: #8f7756;
          transform: translateY(-2px);
          box-shadow: 0 8px 22px -4px rgba(157, 133, 100, 0.45);
        }

        .btn-icon-circle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #25d366;
        }

        .submit-whatsapp-btn:hover .btn-icon-circle {
          color: #ffffff;
        }

        .btn-arrow {
          transition: transform 0.2s ease;
        }

        .submit-whatsapp-btn:hover .btn-arrow {
          transform: translateX(3px);
        }

        /* Success Box */
        .form-success-box {
          padding: 2.5rem 1rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .success-icon-wrap {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: #f4eee2;
          border: 1px solid #decfae;
          color: #9c8360;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .success-badge {
          font-family: var(--font-sans);
          font-size: 0.65rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #9c8360;
          font-weight: 600;
        }

        .success-heading {
          font-family: var(--font-serif);
          font-size: 1.85rem;
          font-weight: 500;
          color: var(--charcoal-black);
        }

        .success-sub {
          font-family: var(--font-sans);
          font-size: 0.92rem;
          color: var(--charcoal-muted);
          max-width: 380px;
          line-height: 1.6;
        }

        .btn-reset-inquiry {
          margin-top: 1rem;
          background: transparent;
          border: 1px solid var(--charcoal-black);
          color: var(--charcoal-black);
          padding: 0.75rem 1.5rem;
          font-family: var(--font-sans);
          font-size: 0.74rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-reset-inquiry:hover {
          background-color: var(--charcoal-black);
          color: #ffffff;
        }

        /* Right Column */
        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .wa-spotlight-card {
          background: #ffffff;
          border: 1px solid var(--beige-border);
          border-top: 3px solid #bfa583;
          border-radius: 12px;
          padding: clamp(2rem, 3.5vw, 2.5rem) 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 10px 30px -5px rgba(23, 25, 22, 0.05);
        }

        .wa-badge-pill {
          font-family: var(--font-sans);
          font-size: 0.62rem;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #8e734e;
          background: #f6efe3;
          border: 1px solid #e7d8be;
          padding: 0.35rem 0.9rem;
          border-radius: 20px;
          font-weight: 600;
          margin-bottom: 1.35rem;
        }

        .wa-icon-glow {
          width: 62px;
          height: 62px;
          border-radius: 50%;
          background: #fbf7f0;
          border: 1px solid #ebdcc8;
          color: #25d366;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .wa-title {
          font-family: var(--font-serif);
          font-size: 1.6rem;
          font-weight: 500;
          color: var(--charcoal-black);
          margin-bottom: 0.35rem;
        }

        .wa-phone-number {
          font-family: var(--font-sans);
          font-size: 1.15rem;
          font-weight: 600;
          color: #9c8360;
          letter-spacing: 0.03em;
          margin-bottom: 0.75rem;
        }

        .wa-desc {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          color: var(--charcoal-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          max-width: 320px;
        }

        .wa-direct-btn {
          width: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          background: linear-gradient(135deg, #a48c6b 0%, #8f7756 100%);
          color: #ffffff;
          padding: 0.95rem 1.5rem;
          border-radius: 8px;
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
        }

        .wa-direct-btn:hover {
          background: linear-gradient(135deg, #ad9574 0%, #98805f 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px -4px rgba(157, 133, 100, 0.45);
          color: #ffffff;
        }

        .wa-direct-btn .btn-icon-circle {
          color: #ffffff;
        }

        .wa-direct-btn:hover .btn-arrow {
          transform: translateX(3px);
        }

        /* Two Compact Information Cards */
        .info-cards-stack {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
        }

        .info-tile {
          background-color: #ffffff;
          border: 1px solid var(--beige-border);
          border-radius: 10px;
          padding: 1.25rem 1.4rem;
          display: flex;
          align-items: flex-start;
          gap: 1.15rem;
          box-shadow: 0 4px 16px -2px rgba(23, 25, 22, 0.03);
          transition: all 0.25s ease;
        }

        .info-tile:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px -4px rgba(23, 25, 22, 0.07);
          border-color: #d8cdbe;
        }

        .tile-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          flex-shrink: 0;
          background-color: #f7f3ec;
          color: #9c8360;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #e7ded0;
        }

        .tile-content {
          display: flex;
          flex-direction: column;
        }

        .tile-title {
          font-family: var(--font-serif);
          font-size: 1.18rem;
          font-weight: 500;
          color: var(--charcoal-black);
          margin-bottom: 0.25rem;
          line-height: 1.2;
        }

        .tile-text {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          color: var(--charcoal-dark);
          line-height: 1.5;
          font-weight: 500;
        }

        .tile-note {
          display: block;
          font-family: var(--font-sans);
          font-size: 0.76rem;
          color: #9c8360;
          margin-top: 0.35rem;
          font-weight: 500;
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .form-card-wrap,
          .wa-spotlight-card {
            padding: 1.75rem 1.25rem;
            border-radius: 10px;
          }

          .info-tile {
            padding: 1.15rem 1.2rem;
          }
        }
      `}</style>
    </main>
  );
}
