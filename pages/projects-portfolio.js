import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const ProjectsPortfolio = (props) => {
  return (
    <>
      <div className="projects-portfolio-container10">
        <Head>
          <title>Projects-Portfolio - Recent Popular Gerbil</title>
          <meta
            property="og:title"
            content="Projects-Portfolio - Recent Popular Gerbil"
          />
          <link
            rel="canonical"
            href="https://recent-popular-gerbil-i84oq5.teleporthq.site/projects-portfolio"
          />
          <meta
            property="og:url"
            content="https://recent-popular-gerbil-i84oq5.teleporthq.site/projects-portfolio"
          />
        </Head>
        <Navigation></Navigation>
        <section className="projects-hero">
          <div id="heroCarousel" className="projects-hero-carousel">
            <div data-index="0" className="active projects-hero-slide">
              <img
                alt="Solar Farm"
                src="https://images.pexels.com/photos/16227451/pexels-photo-16227451.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="parallax-bg"
              />
              <div className="projects-hero-overlay"></div>
              <div className="projects-hero-content">
                <div className="projects-hero-badge">
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
                    className="lucide-sun lucide"
                  >
                    <circle r="4" cx="12" cy="12"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>
                  <span>Renewable Energy</span>
                </div>
                <h1 className="hero-title projects---portfolio-hero-title">
                  Engineering a Sustainable Future
                </h1>
                <p className="hero-subtitle">
                  Discover our signature solar installations and industrial
                  energy projects across Nigeria.
                </p>
                <div className="projects-hero-actions">
                  <button className="btn-primary btn btn-lg">
                    View Portfolio
                  </button>
                  <button className="btn-outline btn btn-lg">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
            <div data-index="1" className="projects-hero-slide">
              <img
                alt="Real Estate"
                src="https://images.pexels.com/photos/9875681/pexels-photo-9875681.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="parallax-bg"
              />
              <div className="projects-hero-overlay"></div>
              <div className="projects-hero-content">
                <div className="projects-hero-badge">
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
                    className="lucide-building lucide"
                  >
                    <rect
                      x="4"
                      y="2"
                      rx="2"
                      ry="2"
                      width="16"
                      height="20"
                    ></rect>
                    <path d="M9 22v-4h6v4"></path>
                    <path d="M8 6h.01"></path>
                    <path d="M16 6h.01"></path>
                    <path d="M8 10h.01"></path>
                    <path d="M16 10h.01"></path>
                    <path d="M8 14h.01"></path>
                    <path d="M16 14h.01"></path>
                  </svg>
                  <span>Lemoex Properties</span>
                </div>
                <h1 className="hero-title projects---portfolio-hero-title">
                  Premium Real Estate Development
                </h1>
                <p className="hero-subtitle">
                  Lemoex Properties helps clients secure quality lands and
                  housing investments for long-term growth.
                </p>
                <div className="projects-hero-actions">
                  <button className="btn-secondary btn btn-lg">
                    Explore Properties
                  </button>
                  <button className="btn-outline btn btn-lg">
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-hero-nav">
            <button data-slide="0" className="active hero-nav-btn"></button>
            <button data-slide="1" className="hero-nav-btn"></button>
          </div>
        </section>
        <section className="portfolio-masonry">
          <div className="projects---portfolio-portfolio-header">
            <h2 className="section-title">Explore Our Work</h2>
            <div className="portfolio-filters">
              <button data-filter="all" className="active filter-btn">
                All Projects
              </button>
              <button data-filter="solar" className="filter-btn">
                Solar Energy
              </button>
              <button data-filter="industrial" className="filter-btn">
                Industrial
              </button>
              <button data-filter="property" className="filter-btn">
                Properties
              </button>
            </div>
          </div>
          <div id="portfolioRail" className="portfolio-rail">
            <div
              data-category="solar"
              className="projects---portfolio-portfolio-card"
            >
              <img
                alt="Industrial Solar"
                src="https://images.pexels.com/photos/29923357/pexels-photo-29923357.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="portfolio-card-info">
                <span className="projects---portfolio-portfolio-tag">
                  Industrial
                </span>
                <h3>Lagos Industrial Hub</h3>
                <p>500KW Solar Grid Integration</p>
              </div>
            </div>
            <div
              data-category="property"
              className="projects---portfolio-portfolio-card"
            >
              <img
                alt="Luxury Estate"
                src="https://images.pexels.com/photos/9638474/pexels-photo-9638474.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="portfolio-card-info">
                <span className="projects---portfolio-portfolio-tag">
                  Real Estate
                </span>
                <h3>Lemoex Heights</h3>
                <p>Residential Smart Estate</p>
              </div>
            </div>
            <div
              data-category="solar"
              className="projects---portfolio-portfolio-card"
            >
              <img
                alt="Solar Farm"
                src="https://images.pexels.com/photos/11815854/pexels-photo-11815854.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="portfolio-card-info">
                <span className="projects---portfolio-portfolio-tag">
                  Utility Scale
                </span>
                <h3>Abuja Solar Park</h3>
                <p>Sustainable Power Distribution</p>
              </div>
            </div>
            <div
              data-category="industrial"
              className="projects---portfolio-portfolio-card"
            >
              <img
                alt="Warehouse Energy"
                src="https://images.pexels.com/photos/29289933/pexels-photo-29289933.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="portfolio-card-info">
                <span className="projects---portfolio-portfolio-tag">
                  Industrial
                </span>
                <h3>Kano Logistics Center</h3>
                <p>Hybrid Inverter Solutions</p>
              </div>
            </div>
            <div
              data-category="property"
              className="projects---portfolio-portfolio-card"
            >
              <img
                alt="Land Development"
                src="https://images.pexels.com/photos/17641131/pexels-photo-17641131.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="portfolio-card-info">
                <span className="projects---portfolio-portfolio-tag">Land</span>
                <h3>Ibeju-Lekki Lands</h3>
                <p>Strategic Investment Plots</p>
              </div>
            </div>
          </div>
        </section>
        <section className="before-after-showcase">
          <div className="section-intro">
            <h2 className="section-title">The Transformation</h2>
            <p className="section-content">
              Witness the impact of Don Och Global&apos;s engineering excellence
              on modern infrastructure.
            </p>
          </div>
          <div id="baCarousel" className="ba-carousel">
            <div className="ba-item">
              <div className="ba-container">
                <div className="projects-portfolio-thq-ba-after-elm ba-after"></div>
                <div
                  id="baBefore"
                  className="projects-portfolio-thq-ba-before-elm ba-before"
                ></div>
                <div
                  id="baHandle"
                  className="projects-portfolio-thq-ba-handle-elm ba-handle"
                >
                  <div className="ba-arrows">
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
                      className="lucide-arrow-left-right lucide"
                    >
                      <path d="M8 3 4 7l4 4"></path>
                      <path d="M4 7h16"></path>
                      <path d="m16 21 4-4-4-4"></path>
                      <path d="M20 17H4"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="ba-details">
                <h3 className="section-subtitle">
                  Renewable Upgrade: Port Harcourt Facility
                </h3>
                <p className="section-content">
                  From traditional grid reliance to 100% renewable energy
                  autonomy. Drastic reduction in operational costs and carbon
                  footprint.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="video-case-studies">
          <div className="section-intro">
            <h2 className="section-title">On-Site Walkthroughs</h2>
            <p className="section-content">
              Experience our projects through cinematic drone footage and
              technical deep-dives.
            </p>
          </div>
          <div className="video-grid">
            <div
              onclick="document.getElementById('videoModal').showModal()"
              className="video-card"
            >
              <video
                src="https://videos.pexels.com/video-files/8853529/8853529-hd_1280_720_24fps.mp4"
                loop="true"
                muted="true"
                onmouseout="this.pause()"
                onmouseover="this.play()"
                className="video-preview"
              ></video>
              <div className="video-play-overlay">
                <svg
                  fill="none"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide-play-circle lucide"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
                <span>Solar Farm Drone Tour</span>
              </div>
            </div>
            <div className="video-card">
              <video
                src="https://videos.pexels.com/video-files/20653303/20653303-hd_1280_720_30fps.mp4"
                loop="true"
                muted="true"
                onmouseout="this.pause()"
                onmouseover="this.play()"
                className="video-preview"
              ></video>
              <div className="video-play-overlay">
                <svg
                  fill="none"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide-play-circle lucide"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
                <span>Residential Installation</span>
              </div>
            </div>
            <div className="video-card">
              <video
                src="https://videos.pexels.com/video-files/9790192/9790192-hd_1280_720_30fps.mp4"
                loop="true"
                muted="true"
                onmouseout="this.pause()"
                onmouseover="this.play()"
                className="video-preview"
              ></video>
              <div className="video-play-overlay">
                <svg
                  fill="none"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide-play-circle lucide"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
                <span>Property Site Visit</span>
              </div>
            </div>
            <div className="video-card">
              <video
                src="https://videos.pexels.com/video-files/9790074/9790074-hd_1920_1080_30fps.mp4"
                loop="true"
                muted="true"
                onmouseout="this.pause()"
                onmouseover="this.play()"
                className="video-preview"
              ></video>
              <div className="video-play-overlay">
                <svg
                  fill="none"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide-play-circle lucide"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
                <span>Industrial Power Setup</span>
              </div>
            </div>
            <div className="video-card">
              <video
                src="https://videos.pexels.com/video-files/8853486/8853486-hd_1080_1920_24fps.mp4"
                loop="true"
                muted="true"
                onmouseout="this.pause()"
                onmouseover="this.play()"
                className="video-preview"
              ></video>
              <div className="video-play-overlay">
                <svg
                  fill="none"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide-play-circle lucide"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
                <span>Technical Walkthrough</span>
              </div>
            </div>
            <div className="video-card">
              <img
                alt="More Videos"
                src="https://images.pexels.com/photos/4320449/pexels-photo-4320449.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="video-preview"
              />
              <div className="video-play-overlay">
                <svg
                  fill="none"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-plus-circle"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <path d="M12 8v8"></path>
                  <path d="M8 12h8"></path>
                </svg>
                <span>View All Case Studies</span>
              </div>
            </div>
          </div>
          <dialog id="videoModal" className="video-modal">
            <div className="modal-content">
              <button
                onclick="document.getElementById('videoModal').close()"
                className="modal-close"
              >
                ×
              </button>
              <video
                src="https://videos.pexels.com/video-files/8853529/8853529-hd_1280_720_24fps.mp4"
                autoPlay="true"
                controls="true"
                className="projects---portfolio-modal-video"
              ></video>
            </div>
          </dialog>
        </section>
        <section className="project-stats">
          <div className="projects---portfolio-stats-grid">
            <div className="projects---portfolio-stat-item">
              <div className="projects---portfolio-stat-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide-zap lucide"
                >
                  <path d="M4 14.71c0-.43.23-.83.61-1.04l9.23-5.04a1 1 0 0 1 1.41.9v2.43c0 .43-.23.83-.61 1.04l-9.23 5.04a1 1 0 0 1-1.41-.9v-2.43Z"></path>
                  <path d="M14 9.29c0 .43-.23.83-.61 1.04l-9.23 5.04a1 1 0 0 0-1.41-.9V12c0-.43.23-.83.61-1.04l9.23-5.04a1 1 0 0 0 1.41.9v2.43Z"></path>
                </svg>
              </div>
              <div data-target="250" className="stat-number">
                <span>0</span>
              </div>
              <div className="projects---portfolio-stat-label">
                <span>MW Energy Installed</span>
              </div>
            </div>
            <div className="projects---portfolio-stat-item">
              <div className="projects---portfolio-stat-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide-map-pin lucide"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle r="3" cx="12" cy="10"></circle>
                </svg>
              </div>
              <div data-target="1500" className="stat-number">
                <span>0</span>
              </div>
              <div className="projects---portfolio-stat-label">
                <span>Project Sites Nationwide</span>
              </div>
            </div>
            <div className="projects---portfolio-stat-item">
              <div className="projects---portfolio-stat-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide-trending-down lucide"
                >
                  <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
                  <polyline points="17 18 23 18 23 12"></polyline>
                </svg>
              </div>
              <div data-target="40" className="stat-number">
                <span>0</span>
              </div>
              <div className="projects---portfolio-stat-label">
                <span>% Average Client Savings</span>
              </div>
            </div>
            <div className="projects---portfolio-stat-item">
              <div className="projects---portfolio-stat-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide-users lucide"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle r="4" cx="9" cy="7"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div data-target="850" className="stat-number">
                <span>0</span>
              </div>
              <div className="projects---portfolio-stat-label">
                <span>Happy Clients</span>
              </div>
            </div>
            <div className="projects---portfolio-stat-item">
              <div className="projects---portfolio-stat-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide-calendar lucide"
                >
                  <rect x="3" y="4" rx="2" ry="2" width="18" height="18"></rect>
                  <line x1="16" x2="16" y1="2" y2="6"></line>
                  <line x1="8" x2="8" y1="2" y2="6"></line>
                  <line x1="3" x2="21" y1="10" y2="10"></line>
                </svg>
              </div>
              <div data-target="12" className="stat-number">
                <span>0</span>
              </div>
              <div className="projects---portfolio-stat-label">
                <span>Years of Excellence</span>
              </div>
            </div>
            <div className="projects---portfolio-stat-item">
              <div className="projects---portfolio-stat-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide-leaf lucide"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C10.9 14.51 12 13 13 12"></path>
                </svg>
              </div>
              <div data-target="100" className="stat-number">
                <span>0</span>
              </div>
              <div className="projects---portfolio-stat-label">
                <span>% Sustainable Approach</span>
              </div>
            </div>
          </div>
        </section>
        <section className="case-study-deep-dive">
          <div className="deep-dive-grid">
            <div className="deep-dive-visual">
              <img
                alt="Case Study Hero"
                src="https://images.pexels.com/photos/13932270/pexels-photo-13932270.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="deep-dive-overlay">
                <div className="deep-dive-stats">
                  <div className="dd-stat">
                    <strong>1.2MW</strong>
                    <span>Peak Output</span>
                  </div>
                  <div className="dd-stat">
                    <strong>$12k</strong>
                    <span>Monthly Savings</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="deep-dive-content">
              <span className="section-subtitle">Flagship Project</span>
              <h2 className="section-title">Lemoex Industrial Mega-Estate</h2>
              <p className="section-content">
                A comprehensive energy and infrastructure solution for one of
                Nigeria&apos;s fastest-growing industrial hubs. Don Och Global
                designed and deployed a multi-layered solar grid with backup
                lithium storage.
              </p>
              <div className="dd-tabs">
                <details open="true">
                  <summary>
                    <span>The Challenge</span>
                  </summary>
                  <div className="dd-tab-content">
                    <p className="section-content">
                      Unreliable grid power was costing the estate over $20,000
                      monthly in diesel generator maintenance and fuel, while
                      causing frequent equipment failures.
                    </p>
                  </div>
                </details>
                <details>
                  <summary>
                    <span>The Solution</span>
                  </summary>
                  <div className="dd-tab-content">
                    <p className="section-content">
                      Installation of 3,500 high-efficiency mono-crystalline
                      panels paired with a custom industrial-grade inverter
                      system and 2MWh battery storage.
                    </p>
                  </div>
                </details>
                <details>
                  <summary>
                    <span>The Result</span>
                  </summary>
                  <div className="dd-tab-content">
                    <p className="section-content">
                      95% reduction in diesel usage, zero downtime in 18 months,
                      and a projected ROI of less than 4 years for the entire
                      estate infrastructure.
                    </p>
                  </div>
                </details>
              </div>
              <div className="dd-actions">
                <button className="btn-primary btn btn-lg">
                  Request Similar Quote
                </button>
                <button className="btn btn-link">
                  Download Technical Specs
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="projects---portfolio-testimonials-carousel">
          <div className="section-intro">
            <h2 className="section-title">Voice of Our Partners</h2>
          </div>
          <div id="testimonialSlider" className="testimonial-slider">
            <div className="projects---portfolio-testimonial-card">
              <div className="projects---portfolio-testimonial-rating">
                <svg
                  fill="currentColor"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  stroke="none"
                  viewBox="0 0 24 24"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  fill="currentColor"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  stroke="none"
                  viewBox="0 0 24 24"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  fill="currentColor"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  stroke="none"
                  viewBox="0 0 24 24"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  fill="currentColor"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  stroke="none"
                  viewBox="0 0 24 24"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  fill="currentColor"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  stroke="none"
                  viewBox="0 0 24 24"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <p className="section-content">
                &quot;Don Och Global transformed our energy profile. Their
                technical expertise in industrial solar is unmatched in the
                Nigerian market.&quot;
              </p>
              <div className="projects---portfolio-testimonial-author">
                <img
                  alt="Client"
                  src="https://images.pexels.com/photos/11815854/pexels-photo-11815854.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div>
                  <strong>Engr. Adebayo K.</strong>
                  <span>Director, Lagos Industrial Hub</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="project-inquiry">
          <div className="inquiry-grid">
            <div className="inquiry-content">
              <h2 className="section-title">Ready to Power Your Future?</h2>
              <p className="section-content">
                Whether it&apos;s a large-scale solar farm or a strategic
                property investment, our team is ready to assist you with
                world-class solutions.
              </p>
              <div className="inquiry-contacts">
                <div className="contact-item">
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
                    className="lucide-phone-call lucide"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    <path d="M14.05 2a9 9 0 0 1 8 8"></path>
                    <path d="M14.05 6A5 5 0 0 1 18 10"></path>
                  </svg>
                  <div>
                    <span>Call Our Experts</span>
                    <strong>+234 800 DON OCH</strong>
                  </div>
                </div>
                <div className="contact-item">
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
                    className="lucide-message-circle lucide"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                  </svg>
                  <div>
                    <span>WhatsApp Support</span>
                    <strong>+234 901 234 5678</strong>
                  </div>
                </div>
              </div>
              <div className="inquiry-buttons">
                <button className="btn-accent btn btn-lg">
                  Book Site Inspection
                </button>
                <button className="btn-outline btn btn-lg">
                  Request Project Quote
                </button>
              </div>
            </div>
            <div className="inquiry-form-wrapper">
              <form
                action="/submit"
                method="POST"
                data-form-id="fd02e722-9920-4c8d-9711-e4eadce75f04"
                className="inquiry-form"
              >
                <div className="projects---portfolio-form-group">
                  <input
                    type="text"
                    id="thq_textinput_rwzm"
                    name="textinput"
                    required="true"
                    placeholder="Your Full Name"
                    data-form-field-id="thq_textinput_rwzm"
                    className="form-input"
                  />
                </div>
                <div className="projects---portfolio-form-group">
                  <input
                    type="email"
                    id="thq_textinput_xu57"
                    name="textinput"
                    required="true"
                    placeholder="Email Address"
                    data-form-field-id="thq_textinput_xu57"
                    className="form-input"
                  />
                </div>
                <div className="projects---portfolio-form-group">
                  <select
                    id="thq_select_YYXS"
                    name="select"
                    required="true"
                    data-form-field-id="thq_select_YYXS"
                    className="form-input"
                  >
                    <option value="true" disabled="true" selected="true">
                      Project Type
                    </option>
                    <option value="solar">Solar Energy Solution</option>
                    <option value="property">Property Investment</option>
                    <option value="industrial">Industrial Engineering</option>
                  </select>
                </div>
                <div className="projects---portfolio-form-group">
                  <textarea
                    id="thq_textarea_n2is"
                    name="textarea"
                    rows="4"
                    required="true"
                    placeholder="Tell us about your project requirements..."
                    data-form-field-id="thq_textarea_n2is"
                    className="form-input"
                  ></textarea>
                </div>
                <button
                  id="thq_button_57-5"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_57-5"
                  className="projects-portfolio-thq-btn-elm9 btn-xl btn-primary btn"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>
        <button aria-label="Chat on WhatsApp" className="whatsapp-floating">
          <svg
            fill="currentColor"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            stroke="none"
            viewBox="0 0 24 24"
          >
            <path d="M12.012 2c-5.508 0-9.987 4.479-9.987 9.987 0 1.763.461 3.474 1.333 4.972l-1.358 4.96 5.077-1.335c1.448.79 3.074 1.205 4.735 1.205 5.508 0 9.987-4.479 9.987-9.987 0-5.508-4.479-9.987-9.987-9.987zm4.567 14.213c-.247.694-1.203 1.262-1.657 1.347-.373.072-.862.135-2.394-.498-1.957-.811-3.216-2.8-3.314-2.932-.098-.134-.796-.957-.796-1.826 0-.87.455-1.298.617-1.471.162-.173.355-.216.474-.216.12 0 .24 0 .346.005.112.005.263-.043.413.314.155.372.531 1.29.577 1.385.046.095.078.205.015.33-.063.125-.095.203-.189.314-.094.111-.198.247-.282.332-.095.094-.194.197-.083.388.111.191.493.812 1.056 1.312.727.647 1.338.847 1.529.942.191.095.303.079.416-.051.113-.13.479-.558.607-.75.127-.191.255-.16.429-.095.174.065 1.106.522 1.297.617.191.096.318.144.365.225.047.081.047.469-.2.164z"></path>
          </svg>
        </button>
        <div className="projects-portfolio-container20">
          <div className="projects-portfolio-container21">
            <Script
              html={`<script defer data-name="projects-portfolio-engine">
(function(){
  // Hero Carousel Logic
  const slides = document.querySelectorAll(".projects-hero-slide")
  const navBtns = document.querySelectorAll(".hero-nav-btn")
  let currentSlide = 0

  function showSlide(index) {
    slides.forEach((s) => s.classList.remove("active"))
    navBtns.forEach((b) => b.classList.remove("active"))
    slides[index].classList.add("active")
    navBtns[index].classList.add("active")
  }

  navBtns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      currentSlide = idx
      showSlide(currentSlide)
    })
  })

  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length
    showSlide(currentSlide)
  }, 6000)

  // Portfolio Filtering
  const filterBtns = document.querySelectorAll(".filter-btn")
  const portfolioCards = document.querySelectorAll(".portfolio-card")

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter")

      filterBtns.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")

      portfolioCards.forEach((card) => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "block"
        } else {
          card.style.display = "none"
        }
      })
    })
  })

  // Before/After Slider Logic
  const baContainer = document.querySelector(".ba-container")
  const baBefore = document.getElementById("baBefore")
  const baHandle = document.getElementById("baHandle")

  if (baContainer) {
    const move = (e) => {
      let x = e.type.includes("touch") ? e.touches[0].clientX : e.clientX
      let rect = baContainer.getBoundingClientRect()
      let position = ((x - rect.left) / rect.width) * 100

      if (position >= 0 && position <= 100) {
        baBefore.style.width = position + "%"
        baHandle.style.left = position + "%"
      }
    }

    baContainer.addEventListener("mousemove", move)
    baContainer.addEventListener("touchmove", move)
  }

  // Animated Counters
  const counters = document.querySelectorAll(".stat-number")
  const speed = 200

  const animateCounters = () => {
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target")
        const count = +counter.innerText
        const inc = target / speed

        if (count < target) {
          counter.innerText = Math.ceil(count + inc)
          setTimeout(updateCount, 1)
        } else {
          counter.innerText = target
        }
      }
      updateCount()
    })
  }

  // Intersection Observer for Stats
  const statsSection = document.querySelector(".project-stats")
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateCounters()
        observer.unobserve(statsSection)
      }
    },
    { threshold: 0.5 }
  )

  if (statsSection) observer.observe(statsSection)

  // Video Modal Logic (Native Dialog)
  const videoModal = document.getElementById("videoModal")
  if (videoModal) {
    videoModal.addEventListener("click", (e) => {
      if (e.target === videoModal) videoModal.close()
    })
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
        <div className="projects-portfolio-container22">
          <div className="projects-portfolio-container23">
            <Script
              html={`<style>
section {
  position: relative;
  overflow: hidden;
  padding: var(--spacing-4xl) 0;
  background: var(--color-surface);
}
</style>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .projects-portfolio-container10 {
            width: 100%;
            min-height: 100vh;
          }
          .projects-portfolio-thq-ba-after-elm {
            background-image: url('https://images.pexels.com/photos/15751137/pexels-photo-15751137.jpeg?auto=compress&cs=tinysrgb&w=1500');
          }
          .projects-portfolio-thq-ba-before-elm {
            width: 50%;
            background-image: url('https://images.pexels.com/photos/16659262/pexels-photo-16659262.jpeg?auto=compress&cs=tinysrgb&w=800');
          }
          .projects-portfolio-thq-ba-handle-elm {
            left: 50%;
          }
          .projects-portfolio-thq-btn-elm9 {
            width: 100%;
          }
          .projects-portfolio-container20 {
            display: none;
          }
          .projects-portfolio-container21 {
            display: contents;
          }
          .projects-portfolio-container22 {
            display: none;
          }
          .projects-portfolio-container23 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default ProjectsPortfolio
