import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const CEOMessage = (props) => {
  return (
    <>
      <div className="ceo-message-container1">
        <Head>
          <title>CEO-Message - Recent Popular Gerbil</title>
          <meta
            property="og:title"
            content="CEO-Message - Recent Popular Gerbil"
          />
          <link
            rel="canonical"
            href="https://recent-popular-gerbil-i84oq5.teleporthq.site/ceo-message"
          />
          <meta
            property="og:url"
            content="https://recent-popular-gerbil-i84oq5.teleporthq.site/ceo-message"
          />
        </Head>
        <Navigation></Navigation>
        <section className="ceo-hero">
          <div className="ceo-hero-media">
            <video
              src="https://videos.pexels.com/video-files/15046856/15046856-hd_2048_1080_24fps.mp4"
              loop="true"
              muted="true"
              autoPlay="true"
              playsInline="true"
              className="ceo-hero-video"
            ></video>
            <div className="ceo-hero-overlay"></div>
          </div>
          <div className="ceo-hero-container">
            <div className="ceo-hero-content">
              <span className="ceo-hero-badge">Executive Leadership</span>
              <h1 className="hero-title ceo-message-hero-title">
                Leading the Future of Energy &amp; Infrastructure
              </h1>
              <p className="hero-subtitle">
                A personal message from the leadership of DON OCH GLOBAL and
                Lemoex Properties on our commitment to sustainable innovation
                and excellence.
              </p>
              <div className="ceo-hero-actions">
                <button id="openVideoModal" className="btn-primary btn btn-lg">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 3l14 9-14 9V3z"></path>
                  </svg>
                  <span>Watch Video Message</span>
                </button>
                <a href="#full-message">
                  <div className="btn-outline btn btn-lg">
                    <span>Read Full Message</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="full-message" className="ceo-full-message">
          <div className="ceo-message-container">
            <div className="ceo-message-split">
              <div className="ceo-message-text-block">
                <h2 className="section-title ceo-message-section-title">
                  Heritage, Vision &amp; Unwavering Commitment
                </h2>
                <div className="ceo-message-body">
                  <p className="section-content">
                    At DON OCH GLOBAL, our journey began with a singular focus:
                    to solve Nigeria&apos;s energy challenges through
                    innovative, reliable, and sustainable solar solutions.
                    Today, that vision has expanded into a multi-faceted
                    enterprise that includes premium real estate through Lemoex
                    Properties.
                  </p>
                  <blockquote className="ceo-pull-quote">
                    <span>
                      &quot;Innovation is not just about new technology;
                      it&apos;s about creating lasting value for our communities
                      and a cleaner future for the next generation.&quot;
                    </span>
                  </blockquote>
                  <p className="section-content">
                    Our commitment to excellence is reflected in every solar
                    panel we install and every property we develop. We believe
                    in the synergy of energy and infrastructure—powering the
                    homes we build and building the future we power. Innovation,
                    integrity, and customer satisfaction remain the pillars of
                    our executive strategy.
                  </p>
                  <div className="ceo-signature-block">
                    <div className="ceo-signature-image">
                      <span className="signature-font">Don Och Global</span>
                    </div>
                    <div className="ceo-designation">
                      <span className="ceo-name">
                        Executive Chairman &amp; CEO
                      </span>
                      <span className="ceo-company">
                        DON OCH GLOBAL + LEMOEX PROPERTIES
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ceo-message-media-block">
                <div className="ceo-portrait-wrapper">
                  <img
                    alt="CEO Portrait"
                    src="https://images.unsplash.com/photo-1688828792910-ca9567d15054?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI2fHxDRU98ZW58MHx8fHwxNzc5OTU2NjQ2fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
                    className="ceo-portrait-img"
                  />
                  <div className="ceo-experience-badge">
                    <span className="badge-number">15+</span>
                    <span className="badge-text">Years of Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ceo-stats">
          <div className="ceo-stats-container">
            <div className="ceo-stats-grid">
              <div className="ceo-stat-card">
                <div className="stat-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <div className="ceo-message-stat-value">
                  <span>500+</span>
                </div>
                <div className="ceo-message-stat-label">
                  <span>Projects Delivered</span>
                </div>
              </div>
              <div className="ceo-stat-card">
                <div className="stat-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                  </svg>
                </div>
                <div className="ceo-message-stat-value">
                  <span>25MW+</span>
                </div>
                <div className="ceo-message-stat-label">
                  <span>Solar Installed</span>
                </div>
              </div>
              <div className="ceo-stat-card">
                <div className="stat-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="ceo-message-stat-value">
                  <span>10k+</span>
                </div>
                <div className="ceo-message-stat-label">
                  <span>Satisfied Clients</span>
                </div>
              </div>
              <div className="ceo-stat-card">
                <div className="stat-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle r="3" cx="12" cy="10"></circle>
                  </svg>
                </div>
                <div className="ceo-message-stat-value">
                  <span>12</span>
                </div>
                <div className="ceo-message-stat-label">
                  <span>Markets Served</span>
                </div>
              </div>
              <div className="ceo-stat-card">
                <div className="stat-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3v18h18"></path>
                    <path d="m19 9-5 5-4-4-3 3"></path>
                  </svg>
                </div>
                <div className="ceo-message-stat-value">
                  <span>15</span>
                </div>
                <div className="ceo-message-stat-label">
                  <span>Years of Leadership</span>
                </div>
              </div>
              <div className="ceo-stat-card">
                <div className="stat-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                    <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                  </svg>
                </div>
                <div className="ceo-message-stat-value">
                  <span>200+</span>
                </div>
                <div className="ceo-message-stat-label">
                  <span>Properties Managed</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ceo-vision">
          <div className="ceo-vision-container">
            <div className="ceo-vision-header">
              <h2 className="section-title ceo-message-section-title">
                Strategic Pillars of Excellence
              </h2>
              <p className="section-content">
                Our core priorities define how we lead and how we deliver impact
                across all business sectors.
              </p>
            </div>
            <div className="ceo-vision-grid">
              <div className="vision-card">
                <div className="vision-icon-box">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Innovation First</h3>
                <p className="section-content">
                  We constantly integrate the latest lithium technology and
                  smart energy management systems.
                </p>
              </div>
              <div className="vision-card">
                <div className="vision-icon-box">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Uncompromising Quality</h3>
                <p className="section-content">
                  From electrical installations to housing developments, we
                  never settle for anything less than premium.
                </p>
              </div>
              <div className="vision-card">
                <div className="vision-icon-box">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Absolute Integrity</h3>
                <p className="section-content">
                  Transparency in property investments and energy consulting
                  forms the bedrock of our client relationships.
                </p>
              </div>
              <div className="vision-card">
                <div className="vision-icon-box">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"></path>
                    <path d="M12 18h.01"></path>
                    <path d="M12 14v.01"></path>
                    <path d="M16 18h.01"></path>
                    <path d="M8 18h.01"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Sustainable Future</h3>
                <p className="section-content">
                  We are dedicated to reducing carbon footprints and promoting
                  renewable energy across Africa.
                </p>
              </div>
              <div className="vision-card">
                <div className="vision-icon-box">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Community Impact</h3>
                <p className="section-content">
                  Our growth is intertwined with the development of the
                  communities we serve and the lives we empower.
                </p>
              </div>
              <div className="vision-card">
                <div className="vision-icon-box">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Global Standards</h3>
                <p className="section-content">
                  While rooted in Nigeria, our operations and engineering
                  benchmarks meet international criteria.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="ceo-timeline">
          <div className="timeline-wrapper">
            <div className="timeline-header">
              <h2 className="section-title ceo-message-section-title">
                A Legacy of Growth
              </h2>
            </div>
            <div className="timeline-scroll">
              <div className="timeline-track">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">
                    <span>2009</span>
                  </div>
                  <div className="timeline-content-box">
                    <h4 className="section-subtitle">Foundation</h4>
                    <p className="section-content">
                      Initial launch of DON OCH GLOBAL focusing on electrical
                      installations.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">
                    <span>2014</span>
                  </div>
                  <div className="timeline-content-box">
                    <h4 className="section-subtitle">Solar Pivot</h4>
                    <p className="section-content">
                      Strategic shift into renewable energy and solar technology
                      solutions.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">
                    <span>2018</span>
                  </div>
                  <div className="timeline-content-box">
                    <h4 className="section-subtitle">Lemoex Properties</h4>
                    <p className="section-content">
                      Expansion into real estate investment and property
                      development.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">
                    <span>2021</span>
                  </div>
                  <div className="timeline-content-box">
                    <h4 className="section-subtitle">Innovation Hub</h4>
                    <p className="section-content">
                      Launch of advanced lithium battery and smart home
                      integration services.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">
                    <span>2024</span>
                  </div>
                  <div className="timeline-content-box">
                    <h4 className="section-subtitle">Continental Reach</h4>
                    <p className="section-content">
                      Major infrastructure projects across West Africa and
                      digital expansion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ceo-testimonials">
          <div className="ceo-message-testimonials-container">
            <div className="ceo-message-testimonials-header">
              <h2 className="section-title ceo-message-section-title">
                Voices of Trust
              </h2>
            </div>
            <div
              id="testimonialCarousel"
              className="ceo-message-testimonials-carousel"
            >
              <div className="testimonial-track">
                <div className="active ceo-message-testimonial-card">
                  <div className="testimonial-quote">
                    <svg
                      fill="var(--color-secondary)"
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      opacity="0.2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.34315 15.3601 2 17.017 2H19.017C20.6739 2 22.017 3.34315 22.017 5V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.9124 16 4.01697 16H7.01697C7.56925 16 8.01697 15.5523 8.01697 15V9C8.01697 8.44772 7.56925 8 7.01697 8H4.01697C2.9124 8 2.01697 7.10457 2.01697 6V5C2.01697 3.34315 3.36012 2 5.01697 2H7.01697C8.67382 2 10.017 3.34315 10.017 5V15C10.017 18.3137 7.33068 21 4.01697 21H2.01697Z"></path>
                    </svg>
                  </div>
                  <p className="section-content">
                    &quot;The CEO&apos;s vision for integrated solar and
                    property solutions is revolutionary. DON OCH GLOBAL has
                    transformed our industrial energy efficiency while Lemoex
                    secured our headquarters site.&quot;
                  </p>
                  <div className="ceo-message-testimonial-author">
                    <img
                      alt="Client Photo"
                      src="https://images.pexels.com/photos/8572127/pexels-photo-8572127.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      className="author-img"
                    />
                    <div className="ceo-message-author-info">
                      <span className="ceo-message-author-name">
                        Dr. Samuel Adebayo
                      </span>
                      <span className="author-title">
                        CEO, Zenith Industrial
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-controls">
                <button id="prevBtn" className="carousel-btn prev">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                </button>
                <button id="nextBtn" className="carousel-btn next">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="ceo-cta">
          <div className="cta-split">
            <div className="cta-content-side">
              <h2 className="section-title ceo-message-section-title">
                Partner with Excellence
              </h2>
              <p className="section-content">
                Whether you are an investor looking for sustainable
                opportunities or a client seeking world-class infrastructure,
                our executive team is ready to engage.
              </p>
              <div className="cta-actions">
                <button id="requestMeeting" className="btn-accent btn btn-lg">
                  Request Executive Meeting
                </button>
                <button id="consultationBtn" className="btn-outline btn btn-lg">
                  Virtual Consultation
                </button>
              </div>
            </div>
            <div className="cta-visual-side">
              <div className="cta-glass-card">
                <div className="glass-header">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <div className="glass-content">
                  <h4 className="section-subtitle">Innovation Brief 2024</h4>
                  <p className="section-content">
                    Download our latest executive report on renewable energy
                    trends in Nigeria.
                  </p>
                  <button className="btn btn-link">
                    Download Report (PDF)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <dialog id="videoModal" className="executive-video-dialog">
          <div className="modal-header">
            <h3 className="section-subtitle">CEO Video Message</h3>
            <button id="closeVideoModal" className="close-modal">
              <svg
                fill="none"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" x2="6" y1="6" y2="18"></line>
                <line x1="6" x2="18" y1="6" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="video-container">
            <video
              src="https://videos.pexels.com/video-files/11330160/11330160-hd_1920_1080_30fps.mp4"
              controls="true"
              className="modal-video"
            ></video>
          </div>
        </dialog>
        <div className="ceo-message-container2">
          <div className="ceo-message-container3">
            <Script
              html={`<script defer data-name="ceo-page-interactions">
(function(){
  const videoModal = document.getElementById("videoModal")
  const openVideoBtn = document.getElementById("openVideoModal")
  const closeVideoBtn = document.getElementById("closeVideoModal")
  const modalVideo = videoModal?.querySelector(".modal-video")

  if (openVideoBtn && videoModal) {
    openVideoBtn.addEventListener("click", () => {
      videoModal.showModal()
      if (modalVideo) modalVideo.play()
    })
  }

  if (closeVideoBtn && videoModal) {
    closeVideoBtn.addEventListener("click", () => {
      videoModal.close()
      if (modalVideo) {
        modalVideo.pause()
        modalVideo.currentTime = 0
      }
    })
  }

  // Close modal on backdrop click
  videoModal?.addEventListener("click", (e) => {
    if (e.target === videoModal) {
      videoModal.close()
      if (modalVideo) {
        modalVideo.pause()
        modalVideo.currentTime = 0
      }
    }
  })

  // Simple Stat Counter Animation (Intersection Observer)
  const stats = document.querySelectorAll(".stat-value")
  const observerOptions = {
    threshold: 0.5,
  }

  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target
        const countTo = parseInt(target.innerText.replace(/\D/g, ""))
        const suffix = target.innerText.replace(/[0-9]/g, "")
        let currentCount = 0
        const duration = 2000
        const stepTime = Math.abs(Math.floor(duration / countTo))

        const timer = setInterval(() => {
          currentCount++
          target.innerText = currentCount + suffix
          if (currentCount === countTo) {
            clearInterval(timer)
          }
        }, stepTime)

        observer.unobserve(target)
      }
    })
  }, observerOptions)

  stats.forEach((stat) => statsObserver.observe(stat))

  // Simple Testimonial Carousel Logic
  const track = document.querySelector(".testimonial-track")
  const nextBtn = document.getElementById("nextBtn")
  const prevBtn = document.getElementById("prevBtn")

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
      // In a real implementation, we would cycle through multiple cards
      // For this component, we'll trigger a subtle fade animation to simulate a change
      track.style.opacity = "0"
      setTimeout(() => {
        track.style.opacity = "1"
      }, 400)
    })

    prevBtn.addEventListener("click", () => {
      track.style.opacity = "0"
      setTimeout(() => {
        track.style.opacity = "1"
      }, 400)
    })
  }

  // Scroll Reveal Animations
  const revealElements = document.querySelectorAll(".vision-card, .ceo-stat-card, .timeline-item")
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
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s ease-out"
    revealObserver.observe(el)
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <div className="ceo-message-container4">
          <div className="ceo-message-container5">
            <Script
              html={`<style>
        @keyframes fadeUp {from {opacity: 0;
transform: translateY(30px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .ceo-message-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .ceo-message-container2 {
            display: none;
          }
          .ceo-message-container3 {
            display: contents;
          }
          .ceo-message-container4 {
            display: none;
          }
          .ceo-message-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default CEOMessage
