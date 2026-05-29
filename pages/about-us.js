import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const AboutUs = (props) => {
  return (
    <>
      <div className="about-us-container1">
        <Head>
          <title>About-Us - Recent Popular Gerbil</title>
          <meta
            property="og:title"
            content="About-Us - Recent Popular Gerbil"
          />
          <link
            rel="canonical"
            href="https://recent-popular-gerbil-i84oq5.teleporthq.site/about-us"
          />
          <meta
            property="og:url"
            content="https://recent-popular-gerbil-i84oq5.teleporthq.site/about-us"
          />
        </Head>
        <Navigation></Navigation>
        <section id="home" className="page-hero-slider1">
          <div id="mainHeroSlider" className="slider-container">
            <div data-index="0" className="page-slide active">
              <div className="page-slide-media">
                <video
                  autoPlay="true"
                  muted="true"
                  loop="true"
                  playsInline="true"
                  poster="https://images.pexels.com/videos/9790192/pictures/preview-0.jpeg"
                  src="https://videos.pexels.com/video-files/9790192/9790192-hd_1280_720_30fps.mp4"
                ></video>
                <div className="slide-overlay"></div>
              </div>
              <div className="page-slide-content">
                <div className="content-inner">
                  <h1 className="page-hero-title2 hero-title">
                    Powering Homes &amp; Building Futures
                  </h1>
                  <p className="hero-subtitle">
                    DON OCH GLOBAL delivers premium solar energy solutions while
                    Lemoex Properties helps clients secure quality lands and
                    housing investments.
                  </p>
                  <div className="page-hero-actions">
                    <a href="#services">
                      <div className="btn btn-primary btn-lg">
                        <span>Explore Solar Solutions</span>
                      </div>
                    </a>
                    <a href="#lemoex">
                      <div className="btn btn-lg btn-outline">
                        <span>Explore Properties</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div data-index="1" className="page-slide">
              <div className="page-slide-media">
                <img
                  src="https://images.pexels.com/photos/35454189/pexels-photo-35454189.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Reliable Solar Energy"
                />
                <div className="slide-overlay"></div>
                <div className="sunlight-effect"></div>
              </div>
              <div className="page-slide-content">
                <div className="content-inner">
                  <h2 className="page-hero-title2 hero-title">
                    Reliable Solar Energy For Homes &amp; Industries
                  </h2>
                  <p className="hero-subtitle">
                    Installation of solar systems, lithium batteries, inverters,
                    electric fencing, CCTV systems and industrial energy
                    solutions.
                  </p>
                  <div className="page-hero-actions">
                    <a href="#contact">
                      <div className="btn btn-lg btn-accent">
                        <span>Get Free Consultation</span>
                      </div>
                    </a>
                    <a href="#products">
                      <div className="btn btn-lg btn-outline">
                        <span>View Products</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div data-index="2" className="page-slide">
              <div className="page-slide-media">
                <img
                  src="https://images.pexels.com/photos/34823930/pexels-photo-34823930.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Smart Property Investments"
                />
                <div className="slide-overlay"></div>
              </div>
              <div className="page-slide-content">
                <div className="content-inner">
                  <h2 className="page-hero-title2 hero-title">
                    Smart Property Investments With Lemoex Properties
                  </h2>
                  <p className="hero-subtitle">
                    Affordable lands, housing projects, real estate development
                    and trusted property investment opportunities.
                  </p>
                  <div className="page-hero-actions">
                    <a href="#lemoex">
                      <div className="btn btn-primary btn-lg">
                        <span>View Properties</span>
                      </div>
                    </a>
                    <a href="#contact">
                      <div className="btn btn-lg btn-outline">
                        <span>Contact Team</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-slider-nav">
            <button
              data-slide="0"
              aria-label="Slide 1"
              className="page-nav-dot active"
            ></button>
            <button
              data-slide="1"
              aria-label="Slide 2"
              className="page-nav-dot"
            ></button>
            <button
              data-slide="2"
              aria-label="Slide 3"
              className="page-nav-dot"
            ></button>
          </div>
        </section>
        <section id="about" className="page-about-section about-section">
          <div className="page-container">
            <div className="page-about-grid">
              <div className="about-content">
                <h2 className="section-title">About DON OCH GLOBAL</h2>
                <p className="section-content">
                  DON OCH Global is a leading energy and infrastructure company
                  headquartered in Abuja, Nigeria. We operate at the
                  intersection of sustainability, technology, and modern living,
                  delivering world-class solutions across renewable energy, CCTV
                  security, and smart home automation.
                </p>
                <div className="page-stats-grid1">
                  <div className="page-stat-card">
                    <span data-target="500" className="page-stat-number2">
                      0
                    </span>
                    <span className="page-stat-label1 stat-label">
                      Projects Completed
                    </span>
                  </div>
                  <div className="page-stat-card">
                    <span data-target="150" className="page-stat-number2">
                      0
                    </span>
                    <span className="page-stat-label1 stat-label">
                      Solar MW Installed
                    </span>
                  </div>
                  <div className="page-stat-card">
                    <span data-target="1200" className="page-stat-number2">
                      0
                    </span>
                    <span className="page-stat-label1 stat-label">
                      Happy Clients
                    </span>
                  </div>
                  <div className="page-stat-card">
                    <span data-target="15" className="page-stat-number2">
                      0
                    </span>
                    <span className="page-stat-label1 stat-label">
                      Years Experience
                    </span>
                  </div>
                </div>
              </div>
              <div className="vision-mission-grid">
                <div className="glass-card vision-card">
                  <div className="page-card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"
                      ></path>
                      <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                    </svg>
                  </div>
                  <h3>VISION</h3>
                  <p>
                    To become Africa’s most trusted and innovative energy and
                    infrastructure brand.
                  </p>
                </div>
                <div className="glass-card mission-card">
                  <div className="page-card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path>
                        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                      </g>
                    </svg>
                  </div>
                  <h3>MISSION</h3>
                  <p>
                    To provide world-class renewable energy, smart
                    infrastructure, and real estate solutions through
                    innovation, integrity, technical excellence, and
                    customer-centered service delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="page-services-section services-section"
        >
          <div className="page-container">
            <div className="section-header">
              <h2 className="section-title">Our Premium Services</h2>
              <p className="section-subtitle">
                Excellence in Energy, Security, and Real Estate
              </p>
            </div>
            <div className="page-services-grid2">
              <div className="page-service-card2 glass-card">
                <div className="page-service-icon2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.28 14h15.44a1 1 0 0 0 .97-1.243l-1.5-6A1 1 0 0 0 18.22 6H5.78a1 1 0 0 0-.97.757l-1.5 6A1 1 0 0 0 4.28 14M4 10h16M10 6l-1 8m5-8l1 8m-3 0v4m-5 0h10"
                    ></path>
                  </svg>
                </div>
                <h3>Residential Solar</h3>
                <p>Reliable clean energy for your home with 24/7 support.</p>
                <a href="#contact">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="page-service-card2 glass-card">
                <div className="page-service-icon2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6.28v11.44a1 1 0 0 0 1.243.97l6-1.5a1 1 0 0 0 .757-.97V7.78a1 1 0 0 0-.757-.97l-6-1.5A1 1 0 0 0 4 6.28M8 6v12m4-6H4m16-5l-3 5h4l-3 5"
                    ></path>
                  </svg>
                </div>
                <h3>Commercial Solar</h3>
                <p>
                  Optimize your business operations with industrial-grade
                  energy.
                </p>
                <a href="#contact">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="page-service-card2 glass-card">
                <div className="page-service-icon2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    </g>
                  </svg>
                </div>
                <h3>Smart Homes</h3>
                <p>Intelligent automation for modern living and convenience.</p>
                <a href="#contact">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="page-service-card2 glass-card">
                <div className="page-service-icon2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    ></path>
                  </svg>
                </div>
                <h3>CCTV &amp; Security</h3>
                <p>
                  Advanced surveillance and perimeter fencing for total peace of
                  mind.
                </p>
                <a href="#contact">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="lemoex" className="lemoex-subsidiary">
          <div className="lemoex-bg">
            <img
              src="https://images.pexels.com/photos/27938900/pexels-photo-27938900.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="Luxury Real Estate"
            />
            <div className="lemoex-scrim"></div>
          </div>
          <div className="page-container lemoex-container">
            <div className="lemoex-header">
              <span className="page-lemoex-tag">Subsidiary Brand</span>
              <h2 className="section-title">
                Lemoex Properties — Building Dreams Through Smart Investments
              </h2>
              <p className="section-content">
                Experience the pinnacle of real estate investment with Lemoex
                Properties. From strategic land acquisitions to luxury housing
                developments, we provide high-yield opportunities for discerning
                investors.
              </p>
            </div>
            <div className="lemoex-features">
              <div className="lemoex-feature-item">
                <div className="feature-dot"></div>
                <div className="feature-text">
                  <h4>Property Brokerage</h4>
                  <p>Trusted mediation for lands and homes.</p>
                </div>
              </div>
              <div className="lemoex-feature-item">
                <div className="feature-dot"></div>
                <div className="feature-text">
                  <h4>Development</h4>
                  <p>Architectural excellence in modern housing.</p>
                </div>
              </div>
              <div className="lemoex-feature-item">
                <div className="feature-dot"></div>
                <div className="feature-text">
                  <h4>Management</h4>
                  <p>Professional oversight of high-value assets.</p>
                </div>
              </div>
            </div>
            <div className="lemoex-cta">
              <button id="openLemoexModal" className="btn btn-accent btn-xl">
                View Available Properties
              </button>
              <button className="btn btn-outline btn-xl">
                Book Inspection
              </button>
            </div>
          </div>
        </section>
        <section className="ceo-message">
          <div className="page-container">
            <div className="page-ceo-grid1">
              <div className="page-ceo-image">
                <img
                  src="https://images.pexels.com/photos/27938904/pexels-photo-27938904.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="CEO Portrait"
                />
                <div className="ceo-frame"></div>
              </div>
              <div className="ceo-text">
                <h2 className="section-title">Message From The CEO</h2>
                <blockquote className="ceo-quote">
                  <span>
                    &quot;As a modern African enterprise with global ambitions,
                    DON OCH Global continues to position itself as a premium
                    brand in energy, infrastructure, and real estate. Our
                    commitment to innovation and technical excellence drives
                    every project we undertake.&quot;
                  </span>
                </blockquote>
                <div className="page-ceo-signature1">
                  <span className="page-signature-font signature-font">
                    Don Och
                  </span>
                  <span className="page-ceo-name ceo-name">Engr. Don Och</span>
                  <span className="ceo-title">
                    Founder &amp; CEO, DON OCH GLOBAL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sustainability-section dark-theme">
          <div className="page-container">
            <div className="sustainability-grid">
              <div className="sustainability-info">
                <h2 className="section-title">
                  Our Commitment to Sustainability
                </h2>
                <p className="section-content">
                  We are pioneering a greener future for Nigeria and beyond. Our
                  infrastructure is built with environmental longevity in mind.
                </p>
                <ul className="sustainability-list">
                  <li>
                    <span>Clean Energy Integration</span>
                  </li>
                  <li>
                    <span>Green Technology Innovation</span>
                  </li>
                  <li>
                    <span>Sustainable Smart Communities</span>
                  </li>
                  <li>
                    <span>Energy Independence Solutions</span>
                  </li>
                </ul>
              </div>
              <div className="sustainability-visual">
                <div className="glowing-orb"></div>
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="energy-wave"
                >
                  <path
                    fill="var(--color-accent)"
                    d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,87.1,0C87.1,15.7,83.7,31.3,76.4,44.7C69.2,58.1,58.1,69.2,44.7,76.4C31.3,83.7,15.7,87.1,0,87.1C-15.7,87.1,-31.3,83.7,-44.7,76.4C-58.1,69.2,-69.2,58.1,-76.4,44.7C-83.7,31.3,-87.1,15.7,-87.1,0C-87.1,-15.7,-83.7,-31.3,-76.4,-44.7C-69.2,-58.1,-58.1,-69.2,-44.7,-76.4C-31.3,-83.7,-15.7,-87.1,0,-87.1C15.7,-87.1,31.3,-83.7,44.7,-76.4Z"
                    transform="translate(100 100)"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="page-contact-section contact-section">
          <div className="page-container">
            <div className="page-contact-grid1">
              <div className="contact-form-wrapper glass-card">
                <h2 className="section-title">
                  Let’s Build a Smarter Future Together
                </h2>
                <form
                  action="/submit"
                  method="POST"
                  data-form-id="4cd90edb-7828-4005-a770-3d57dba47602"
                  className="modern-form"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      name="true"
                      placeholder="Full Name"
                      required="true"
                      id="thq_true_G2pO"
                      data-form-field-id="thq_true_G2pO"
                      className="page-form-input1 form-input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required="true"
                      id="thq_email_h0tN"
                      data-form-field-id="thq_email_h0tN"
                      className="page-form-input1 form-input"
                    />
                  </div>
                  <div className="form-group">
                    <select
                      name="interest"
                      id="thq_interest_te6I"
                      data-form-field-id="thq_interest_te6I"
                      className="page-form-input1 form-input"
                    >
                      <option value="solar">Solar Solutions</option>
                      <option value="realestate">Lemoex Properties</option>
                      <option value="security">Security Systems</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Project Details"
                      required="true"
                      rows="4"
                      id="thq_message_LdS4"
                      data-form-field-id="thq_message_LdS4"
                      className="page-form-input1 form-input"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    id="thq_button_aSuu"
                    name="button"
                    data-form-field-id="thq_button_aSuu"
                    className="btn btn-primary btn-xl"
                  >
                    Request Quote
                  </button>
                </form>
              </div>
              <div className="contact-info-wrapper">
                <div className="page-info-card">
                  <h3>Visit Our Office</h3>
                  <p>Plot 45, Infrastructure Way, Abuja, Nigeria</p>
                </div>
                <div className="page-info-card">
                  <h3>Contact Details</h3>
                  <p>Phone: +234 800 DON OCH</p>
                  <p>Email: info@donochglobal.com</p>
                </div>
                <div className="whatsapp-cta">
                  <a href="https://wa.me/2340000000000">
                    <div className="btn btn-lg btn-accent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24m-3.53 4.75c-.19 0-.52.07-.79.37c-.27.3-.84.82-.84 2s.87 2.35.99 2.51c.12.16 1.71 2.61 4.14 3.65c.58.25 1.03.4 1.38.51c.58.18 1.11.16 1.53.1c.47-.07 1.44-.59 1.64-1.15c.2-.56.2-1.04.14-1.15c-.06-.11-.22-.17-.47-.29c-.25-.12-1.44-.71-1.66-.8c-.22-.08-.38-.12-.54.12c-.16.24-.61.76-.75.91c-.14.15-.28.17-.53.05c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.15-.25-.02-.38.11-.5c.11-.11.25-.29.37-.44c.12-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.54-1.29-.74-1.77c-.19-.48-.39-.42-.54-.42"
                        ></path>
                      </svg>
                      <span>
                        {' '}
                        Chat on WhatsApp
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <dialog id="lemoexModal" className="lemoex-dialog">
          <div className="page-modal-content">
            <button id="closeModal" className="close-btn">
              ×
            </button>
            <h2 className="section-title">Available Properties</h2>
            <div className="modal-grid">
              <div className="property-mini-card">
                <img
                  src="https://images.pexels.com/photos/9875684/pexels-photo-9875684.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Estate"
                />
                <h4>Greenview Estate</h4>
                <p>Strategic lands in Abuja prime locations.</p>
              </div>
              <div className="property-mini-card">
                <img
                  src="https://images.pexels.com/photos/32652321/pexels-photo-32652321.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Estate"
                />
                <h4>Solar Heights</h4>
                <p>Modern smart-homes with full solar integration.</p>
              </div>
            </div>
          </div>
        </dialog>
        <a href="https://wa.me/2340000000000">
          <div
            aria-label="WhatsApp Contact"
            className="page-floating-whatsapp1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24m-3.53 4.75c-.19 0-.52.07-.79.37c-.27.3-.84.82-.84 2s.87 2.35.99 2.51c.12.16 1.71 2.61 4.14 3.65c.58.25 1.03.4 1.38.51c.58.18 1.11.16 1.53.1c.47-.07 1.44-.59 1.64-1.15c.2-.56.2-1.04.14-1.15c-.06-.11-.22-.17-.47-.29c-.25-.12-1.44-.71-1.66-.8c-.22-.08-.38-.12-.54.12c-.16.24-.61.76-.75.91c-.14.15-.28.17-.53.05c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.15-.25-.02-.38.11-.5c.11-.11.25-.29.37-.44c.12-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.54-1.29-.74-1.77c-.19-.48-.39-.42-.54-.42"
              ></path>
            </svg>
          </div>
        </a>
        <div className="about-us-container2">
          <div className="about-us-container3">
            <Script
              html={`<script defer data-name="don-och-global-about">
(function(){
  // Hero Slider Functionality
  const slides = document.querySelectorAll(".slide")
  const dots = document.querySelectorAll(".nav-dot")
  let currentSlide = 0

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"))
    dots.forEach((dot) => dot.classList.remove("active"))

    slides[index].classList.add("active")
    dots[index].classList.add("active")
    currentSlide = index
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index))
  })

  setInterval(() => {
    let next = (currentSlide + 1) % slides.length
    showSlide(next)
  }, 6000)

  // Animated Counters
  const stats = document.querySelectorAll(".stat-number")
  const observerOptions = {
    threshold: 0.5,
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute("data-target"))
        let count = 0
        const duration = 2000
        const increment = target / (duration / 16)

        const timer = setInterval(() => {
          count += increment
          if (count >= target) {
            entry.target.innerText = target + "+"
            clearInterval(timer)
          } else {
            entry.target.innerText = Math.floor(count) + "+"
          }
        }, 16)
        statsObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  stats.forEach((stat) => statsObserver.observe(stat))

  // Modal Logic
  const lemoexModal = document.getElementById("lemoexModal")
  const openModalBtn = document.getElementById("openLemoexModal")
  const closeModalBtn = document.getElementById("closeModal")

  if (openModalBtn && lemoexModal) {
    openModalBtn.addEventListener("click", () => {
      lemoexModal.showModal()
    })
  }

  if (closeModalBtn && lemoexModal) {
    closeModalBtn.addEventListener("click", () => {
      lemoexModal.close()
    })

    lemoexModal.addEventListener("click", (e) => {
      if (e.target === lemoexModal) {
        lemoexModal.close()
      }
    })
  }

  // Scroll Reveal Animation (Simple Implementation)
  const revealElements = document.querySelectorAll(".glass-card, .service-card, .ceo-text")
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    },
    { threshold: 0.1 }
  )

  revealElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "all 0.6s ease-out"
    revealObserver.observe(el)
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <div className="about-us-container4">
          <div className="about-us-container5">
            <Script
              html={`<style>
        @keyframes pulse {from {opacity: 0.4;
transform: scale(1);}
to {opacity: 0.8;
transform: scale(1.2);}}@keyframes orbFloat {from {transform: translate(-20px, -20px);}
to {transform: translate(20px, 20px);}}@keyframes rotate {from {transform: rotate(0deg);}
to {transform: rotate(360deg);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .about-us-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .about-us-container2 {
            display: none;
          }
          .about-us-container3 {
            display: contents;
          }
          .about-us-container4 {
            display: none;
          }
          .about-us-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default AboutUs
