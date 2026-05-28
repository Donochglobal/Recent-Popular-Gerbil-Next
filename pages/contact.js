import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container10">
        <Head>
          <title>Contact - Recent Popular Gerbil</title>
          <meta property="og:title" content="Contact - Recent Popular Gerbil" />
          <link
            rel="canonical"
            href="https://recent-popular-gerbil-i84oq5.teleporthq.site/contact"
          />
          <meta
            property="og:url"
            content="https://recent-popular-gerbil-i84oq5.teleporthq.site/contact"
          />
        </Head>
        <Navigation></Navigation>
        <section className="contact-hero">
          <div className="contact-hero__bg">
            <img
              alt="Luxury Solar Infrastructure"
              src="https://images.pexels.com/photos/18825426/pexels-photo-18825426.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="contact-hero__image"
            />
            <div className="contact-hero__overlay"></div>
          </div>
          <div className="contact-hero__container">
            <div className="contact-hero__content">
              <h1 className="hero-title contact-hero__title">
                Connect with Global Excellence
              </h1>
              <p className="contact-hero__subtitle hero-subtitle">
                Whether you&apos;re powering your future with solar or securing
                your legacy through premium real estate, DON OCH GLOBAL and
                Lemoex Properties are here to guide you.
              </p>
              <div className="contact-hero__actions">
                <a href="#hub">
                  <div className="btn-primary btn btn-lg">
                    <span>Request Quote</span>
                  </div>
                </a>
                <a href="https://wa.me/2340000000000">
                  <div className="btn-secondary btn btn-lg">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M18.497 4.409a10 10 0 0 1-10.36 16.828l-.223-.098l-4.759.849l-.11.011a1 1 0 0 1-.11 0l-.102-.013l-.108-.024l-.105-.037l-.099-.047l-.093-.058l-.014-.011l-.012-.007l-.086-.073l-.077-.08l-.067-.088l-.056-.094l-.034-.07l-.04-.108l-.028-.128l-.012-.102a1 1 0 0 1 0-.125l.012-.1l.024-.11l.045-.122l1.433-3.304l-.009-.014A10 10 0 0 1 5.056 4.83l.215-.203a10 10 0 0 1 13.226-.217M9.5 7.5A1.5 1.5 0 0 0 8 9v1a6 6 0 0 0 6 6h1a1.5 1.5 0 0 0 0-3h-1l-.144.007a1.5 1.5 0 0 0-1.128.697l-.042.074l-.022-.007a4.01 4.01 0 0 1-2.435-2.435l-.008-.023l.075-.041A1.5 1.5 0 0 0 11 10V9a1.5 1.5 0 0 0-1.5-1.5"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span>WhatsApp Chat</span>
                  </div>
                </a>
              </div>
              <div className="contact-hero__quick-info">
                <div className="contact-hero__info-item">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>+234 800 DON OCH</span>
                </div>
                <div className="contact-hero__info-item">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                    </g>
                  </svg>
                  <span>hello@donochglobal.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="hub" className="contact-hub">
          <div className="contact-hub__container">
            <div className="contact-hub__grid">
              <div className="contact-hub__form-wrapper">
                <h2 className="section-title">Send a Message</h2>
                <p className="section-content">
                  Our executive team typically responds within 2 hours during
                  business hours.
                </p>
                <form
                  action="/submit-contact"
                  method="POST"
                  data-form-id="70b8b389-9941-47a0-a86e-97b514971a62"
                  className="contact-hub__form"
                >
                  <div className="contact-hub__field-group">
                    <div className="contact-hub__field">
                      <label htmlFor="service-type">Inquiry Type</label>
                      <select
                        id="service-type"
                        name="service"
                        required="true"
                        data-form-field-id="service-type"
                      >
                        <option value="solar">Solar Energy Solutions</option>
                        <option value="properties">
                          Lemoex Properties &amp; Real Estate
                        </option>
                        <option value="maintenance">
                          Electrical Maintenance
                        </option>
                        <option value="support">Technical Support</option>
                      </select>
                    </div>
                  </div>
                  <div className="contact-hub__field">
                    <label htmlFor="full-name">Full Name</label>
                    <input
                      type="text"
                      id="full-name"
                      name="true"
                      required="true"
                      placeholder="John Doe"
                      data-form-field-id="full-name"
                    />
                  </div>
                  <div className="contact-hub__field">
                    <label htmlFor="email-addr">Email Address</label>
                    <input
                      type="email"
                      id="email-addr"
                      name="email"
                      required="true"
                      placeholder="john@example.com"
                      data-form-field-id="email-addr"
                    />
                  </div>
                  <div className="contact-hub__field">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required="true"
                      placeholder="How can we help you today?"
                      data-form-field-id="message"
                    ></textarea>
                  </div>
                  <div className="contact-hub__field">
                    <label htmlFor="attachment">
                      Upload Site Photos (Optional)
                    </label>
                    <input
                      type="file"
                      id="attachment"
                      name="attachment"
                      accept="image/*"
                      data-form-field-id="attachment"
                    />
                  </div>
                  <button
                    id="thq_button_H83O"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_H83O"
                    className="btn-xl btn-primary btn"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
              <div className="contact-hub__channels">
                <h2 className="section-title">Direct Channels</h2>
                <div className="contact-hub__channel-list">
                  <div className="contact-hub__channel-card">
                    <div className="contact-hub__channel-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M18.497 4.409a10 10 0 0 1-10.36 16.828l-.223-.098l-4.759.849l-.11.011a1 1 0 0 1-.11 0l-.102-.013l-.108-.024l-.105-.037l-.099-.047l-.093-.058l-.014-.011l-.012-.007l-.086-.073l-.077-.08l-.067-.088l-.056-.094l-.034-.07l-.04-.108l-.028-.128l-.012-.102a1 1 0 0 1 0-.125l.012-.1|l.024-.11l.045-.122l1.433-3.304l-.009-.014A10 10 0 0 1 5.056 4.83l.215-.203a10 10 0 0 1 13.226-.217M9.5 7.5A1.5 1.5 0 0 0 8 9v1a6 6 0 0 0 6 6h1a1.5 1.5 0 0 0 0-3h-1l-.144.007a1.5 1.5 0 0 0-1.128.697l-.042.074l-.022-.007a4.01 4.01 0 0 1-2.435-2.435l-.008-.023l.075-.041A1.5 1.5 0 0 0 11 10V9a1.5 1.5 0 0 0-1.5-1.5"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="contact-hub__channel-content">
                      <h3>WhatsApp Chat</h3>
                      <p>Instant support for solar &amp; properties.</p>
                      <a href="https://wa.me/2340000000000">
                        <div className="btn btn-link">
                          <span>Chat Now</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="contact-hub__channel-card">
                    <div className="contact-hub__channel-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="contact-hub__channel-content">
                      <h3>Sales Line</h3>
                      <p>Speak to our energy consultants.</p>
                      <a href="tel:+2340000000000">
                        <div className="btn btn-link">
                          <span>Call Sales</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="contact-hub__channel-card">
                    <div className="contact-hub__channel-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle r="10" cx="12" cy="12"></circle>
                          <path d="M12 6v6l4 2"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="contact-hub__channel-content">
                      <h3>Schedule Inspection</h3>
                      <p>Book a physical site or property audit.</p>
                      <button id="open-booking" className="btn btn-link">
                        Check Availability
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="map-directions">
          <div className="map-directions__grid">
            <div className="map-directions__map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126844.0634860001!2d3.3333!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e8db0e0741756!2sLagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowFullScreen="true"
                className="contact-iframe"
              ></iframe>
            </div>
            <div className="map-directions__info">
              <div className="map-directions__content">
                <h2 className="section-title">Visit Our Headquarters</h2>
                <div className="map-directions__address-card">
                  <div className="map-directions__icon-box">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle r="3" cx="12" cy="10"></circle>
                      </g>
                    </svg>
                  </div>
                  <div className="map-directions__details">
                    <p className="section-content">
                      <span className="contact-text27">
                        Global HQ &amp; Lemoex Office
                      </span>
                    </p>
                    <p className="section-content">
                      123 Corporate Plaza, Lekki Phase 1, Lagos, Nigeria.
                    </p>
                  </div>
                </div>
                <div className="map-directions__hours">
                  <h3 className="section-subtitle">Business Hours</h3>
                  <ul className="map-directions__list">
                    <li className="map-directions__list-item">
                      <span>Monday — Friday:</span>
                      <span>08:00 AM — 06:00 PM</span>
                    </li>
                    <li className="map-directions__list-item">
                      <span>Saturday:</span>
                      <span>09:00 AM — 03:00 PM</span>
                    </li>
                    <li className="map-directions__list-item">
                      <span>Sunday:</span>
                      <span>Closed (Emergency Only)</span>
                    </li>
                  </ul>
                </div>
                <div className="map-directions__notes">
                  <p className="section-content">
                    <span>
                      * Secure parking available for all visitors. Please book
                      property viewings 24 hours in advance.
                    </span>
                  </p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div target="_blank" className="btn-accent btn btn-lg">
                    <span>Get Directions</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="regional-contacts">
          <div className="regional-contacts__container">
            <div className="regional-contacts__header">
              <h2 className="section-title">
                Regional Support &amp; Enquiries
              </h2>
              <p className="section-content">
                Direct lines to our department heads and regional leads.
              </p>
            </div>
            <div className="regional-contacts__grid">
              <div className="regional-contacts__card">
                <div className="regional-contacts__badge">
                  <span>Solar Sales</span>
                </div>
                <h3>Lagos Central</h3>
                <p className="section-content">Engr. Tunde Adebayo</p>
                <div className="regional-contacts__actions">
                  <a href="tel:+2341">
                    <div className="btn-outline btn-sm btn">
                      <span>Call</span>
                    </div>
                  </a>
                  <a href="https://wa.me/2341">
                    <div className="btn-sm btn-secondary btn">
                      <span>WhatsApp</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="regional-contacts__card">
                <div className="regional-contacts__badge">
                  <span>Properties</span>
                </div>
                <h3>Lemoex Real Estate</h3>
                <p className="section-content">Mrs. Chiamaka Okafor</p>
                <div className="regional-contacts__actions">
                  <a href="tel:+2342">
                    <div className="btn-outline btn-sm btn">
                      <span>Call</span>
                    </div>
                  </a>
                  <a href="https://wa.me/2342">
                    <div className="btn-sm btn-secondary btn">
                      <span>WhatsApp</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="regional-contacts__card">
                <div className="regional-contacts__badge">
                  <span>Installation</span>
                </div>
                <h3>Technical Dept.</h3>
                <p className="section-content">Lead Engineer Musa</p>
                <div className="regional-contacts__actions">
                  <a href="tel:+2343">
                    <div className="btn-outline btn-sm btn">
                      <span>Call</span>
                    </div>
                  </a>
                  <a href="https://wa.me/2343">
                    <div className="btn-sm btn-secondary btn">
                      <span>WhatsApp</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="regional-contacts__card">
                <div className="regional-contacts__badge">
                  <span>Abuja</span>
                </div>
                <h3>Northern Region</h3>
                <p className="section-content">Alhaji Ibrahim</p>
                <div className="regional-contacts__actions">
                  <a href="tel:+2344">
                    <div className="btn-outline btn-sm btn">
                      <span>Call</span>
                    </div>
                  </a>
                  <a href="https://wa.me/2344">
                    <div className="btn-sm btn-secondary btn">
                      <span>WhatsApp</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="regional-contacts__card">
                <div className="regional-contacts__badge">
                  <span>Port Harcourt</span>
                </div>
                <h3>South-South Region</h3>
                <p className="section-content">Mr. Efosa Williams</p>
                <div className="regional-contacts__actions">
                  <a href="tel:+2345">
                    <div className="btn-outline btn-sm btn">
                      <span>Call</span>
                    </div>
                  </a>
                  <a href="https://wa.me/2345">
                    <div className="btn-sm btn-secondary btn">
                      <span>WhatsApp</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="regional-contacts__card--emergency regional-contacts__card">
                <div className="regional-contacts__badge--alert regional-contacts__badge">
                  <span>Emergency</span>
                </div>
                <h3>24/7 Technical Care</h3>
                <p className="section-content">Aftercare Support Team</p>
                <div className="regional-contacts__actions">
                  <a href="tel:+2346">
                    <div className="btn-sm btn-accent btn">
                      <span>Urgent Call</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="trust-stats">
          <div className="trust-stats__container">
            <div className="trust-stats__grid">
              <div className="trust-stats__item">
                <div data-target="120" className="trust-stats__number">
                  <span>0</span>
                </div>
                <div className="trust-stats__label">
                  <span>Avg. Response (Mins)</span>
                </div>
              </div>
              <div className="trust-stats__item">
                <div data-target="2500" className="trust-stats__number">
                  <span>0</span>
                </div>
                <div className="trust-stats__label">
                  <span>Projects Supported</span>
                </div>
              </div>
              <div className="trust-stats__item">
                <div data-target="15000" className="trust-stats__number">
                  <span>0</span>
                </div>
                <div className="trust-stats__label">
                  <span>Satisfied Clients</span>
                </div>
              </div>
              <div className="trust-stats__item">
                <div data-target="24" className="trust-stats__number">
                  <span>0</span>
                </div>
                <div className="trust-stats__label">
                  <span>Quote Turnaround (Hrs)</span>
                </div>
              </div>
              <div className="trust-stats__item">
                <div data-target="98" className="trust-stats__number">
                  <span>0</span>
                </div>
                <div className="trust-stats__label">
                  <span>Success Rate (%)</span>
                </div>
              </div>
              <div className="trust-stats__item">
                <div data-target="10" className="trust-stats__number">
                  <span>0</span>
                </div>
                <div className="trust-stats__label">
                  <span>Years of Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-faqs">
          <div className="contact-faqs__container">
            <div className="contact-faqs__grid">
              <div className="contact-faqs__content">
                <h2 className="section-title">Common Questions</h2>
                <div className="contact-faqs__accordion">
                  <details open="true">
                    <summary>
                      <span>How long does a site audit take?</span>
                    </summary>
                    <div className="contact-faqs__answer">
                      <p className="section-content">
                        Most solar site audits are completed within 45-60
                        minutes. For Lemoex Property inspections, we recommend
                        budgeting 90 minutes for a comprehensive tour.
                      </p>
                    </div>
                  </details>
                  <details>
                    <summary>
                      <span>Do you offer financing for solar systems?</span>
                    </summary>
                    <div className="contact-faqs__answer">
                      <p className="section-content">
                        Yes, we partner with leading financial institutions to
                        provide flexible payment plans for both residential and
                        commercial solar installations.
                      </p>
                    </div>
                  </details>
                  <details>
                    <summary>
                      <span>
                        What documents are needed for property viewing?
                      </span>
                    </summary>
                    <div className="contact-faqs__answer">
                      <p className="section-content">
                        A valid government-issued ID is required for all
                        security-cleared property inspections. Our agents will
                        provide specific checklists upon booking.
                      </p>
                    </div>
                  </details>
                  <details>
                    <summary>
                      <span>
                        Is there a warranty on inverter installations?
                      </span>
                    </summary>
                    <div className="contact-faqs__answer">
                      <p className="section-content">
                        All our premium inverters come with a standard 2-year
                        manufacturer warranty, with options to extend up to 5
                        years under our Silver Support plan.
                      </p>
                    </div>
                  </details>
                </div>
              </div>
              <div className="contact-faqs__resources">
                <div className="contact-faqs__resource-card">
                  <h3 className="section-subtitle">Resource Center</h3>
                  <ul className="contact-faqs__links">
                    <li>
                      <a href="#">
                        <div className="btn-link">
                          <span>Download Product Spec Sheets</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="btn-link">
                          <span>Warranty Terms &amp; Conditions</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="btn-link">
                          <span>Lemoex Property Portfolio PDF</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="btn-link">
                          <span>Booking &amp; Cancellation Policy</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="contact-faqs__support-cta">
                  <p className="section-content">
                    Can&apos;t find what you need?
                  </p>
                  <a href="mailto:support@donochglobal.com?subject=">
                    <div className="btn-outline btn btn-lg">
                      <span>Email Support</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="booking-cta">
          <div className="booking-cta__wrapper">
            <div className="booking-cta__alert">
              <div className="booking-cta__icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle r="10" cx="12" cy="12"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </g>
                </svg>
              </div>
              <div className="booking-cta__content">
                <h2 className="section-title">
                  Ready for a Professional Site Visit?
                </h2>
                <p className="section-content">
                  <span>
                    {' '}
                    Book your solar audit or property viewing today.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    Note: 24-hour notice required for all cancellations to avoid
                    the standard logistics fee.
                  </span>
                </p>
              </div>
              <div className="booking-cta__actions">
                <div className="booking-cta__date-wrapper">
                  <input
                    type="date"
                    id="quick-date"
                    className="booking-cta__date-input"
                  />
                </div>
                <button className="btn-primary btn">Book Inspection</button>
                <button className="btn-secondary btn">
                  Request Site Audit
                </button>
              </div>
            </div>
          </div>
        </section>
        <a href="https://wa.me/2340000000000">
          <div aria-label="Chat on WhatsApp" className="floating-whatsapp">
            <svg
              width="32"
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                d="M18.497 4.409a10 10 0 0 1-10.36 16.828l-.223-.098l-4.759.849l-.11.011a1 1 0 0 1-.11 0l-.102-.013l-.108-.024l-.105-.037l-.099-.047l-.093-.058l-.014-.011l-.012-.007l-.086-.073l-.077-.08l-.067-.088l-.056-.094l-.034-.07l-.04-.108l-.028-.128l-.012-.102a1 1 0 0 1 0-.125l.012-.1l.024-.11l.045-.122l1.433-3.304l-.009-.014A10 10 0 0 1 5.056 4.83l.215-.203a10 10 0 0 1 13.226-.217M9.5 7.5A1.5 1.5 0 0 0 8 9v1a6 6 0 0 0 6 6h1a1.5 1.5 0 0 0 0-3h-1l-.144.007a1.5 1.5 0 0 0-1.128.697l-.042.074l-.022-.007a4.01 4.01 0 0 1-2.435-2.435l-.008-.023l.075-.041A1.5 1.5 0 0 0 11 10V9a1.5 1.5 0 0 0-1.5-1.5"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </a>
        <dialog id="booking-modal" className="booking-dialog">
          <div className="booking-dialog__container">
            <h2 className="section-title">Schedule Your Visit</h2>
            <p className="section-content">
              Fill in your preferred date and time, and our team will confirm
              within 1 hour.
            </p>
            <form
              method="dialog"
              data-form-id="272c6f6e-d6c4-4bbb-83ae-6209a474ac01"
              className="booking-dialog__form"
            >
              <div className="contact-hub__field">
                <label>Service</label>
                <select
                  id="thq_select_IdrY"
                  name="select"
                  required="true"
                  data-form-field-id="thq_select_IdrY"
                >
                  <option>Solar Site Audit</option>
                  <option>Lemoex Property Viewing</option>
                  <option>Electrical System Check</option>
                </select>
              </div>
              <div className="contact-hub__field">
                <label>Preferred Date</label>
                <input
                  type="date"
                  id="thq_textinput_n1xv"
                  name="textinput"
                  required="true"
                  data-form-field-id="thq_textinput_n1xv"
                />
              </div>
              <div className="booking-dialog__buttons">
                <button
                  id="thq_button_CC9x"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_CC9x"
                  className="btn-primary btn"
                >
                  Confirm Booking
                </button>
                <button
                  id="close-booking"
                  name="button"
                  type="button"
                  data-form-field-id="close-booking"
                  className="btn-outline btn"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
        <div className="contact-container19">
          <div className="contact-container20">
            <Script
              html={`<script defer data-name="contact-page-logic">
(function(){
  // Animated Counters
  const stats = document.querySelectorAll(".trust-stats__number")

  const animateStats = () => {
    stats.forEach((stat) => {
      const target = parseInt(stat.getAttribute("data-target"))
      const count = parseInt(stat.innerText)
      const increment = target / 50

      if (count < target) {
        stat.innerText = Math.ceil(count + increment)
        setTimeout(animateStats, 30)
      } else {
        stat.innerText = target + (stat.innerText.includes("%") ? "%" : "")
      }
    })
  }

  // Intersection Observer for Stats
  const observerOptions = { threshold: 0.5 }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateStats()
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const statsSection = document.querySelector(".trust-stats")
  if (statsSection) observer.observe(statsSection)

  // Modal Functionality
  const bookingModal = document.getElementById("booking-modal")
  const openBtn = document.getElementById("open-booking")
  const closeBtn = document.getElementById("close-booking")

  if (openBtn && bookingModal) {
    openBtn.addEventListener("click", () => {
      bookingModal.showModal()
    })
  }

  if (closeBtn && bookingModal) {
    closeBtn.addEventListener("click", () => {
      bookingModal.close()
    })
  }

  // Close on backdrop click
  if (bookingModal) {
    bookingModal.addEventListener("click", (e) => {
      if (e.target === bookingModal) {
        bookingModal.close()
      }
    })
  }

  // Form Validation Feedback (Visual Only)
  const contactForm = document.querySelector(".contact-hub__form")
  if (contactForm) {
    contactForm.addEventListener("input", (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
        if (e.target.checkValidity()) {
          e.target.style.borderColor = "var(--color-primary)"
        } else {
          e.target.style.borderColor = "#e74c3c"
        }
      }
    })
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .contact-container10 {
            width: 100%;
            min-height: 100vh;
          }
          .contact-iframe {
            border: 0;
          }
          .contact-text27 {
            font-weight: 700;
          }
          .contact-container19 {
            display: none;
          }
          .contact-container20 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Contact
