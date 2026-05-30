import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Team = (props) => {
  return (
    <>
      <div className="team-container10">
        <Head>
          <title>Team - Recent Popular Gerbil</title>
          <meta property="og:title" content="Team - Recent Popular Gerbil" />
          <link
            rel="canonical"
            href="https://recent-popular-gerbil-i84oq5.teleporthq.site/team"
          />
          <meta
            property="og:url"
            content="https://recent-popular-gerbil-i84oq5.teleporthq.site/team"
          />
        </Head>
        <Navigation></Navigation>
        <section className="team-hero">
          <div className="team-hero-overlay"></div>
          <div id="heroParticles" className="team-hero-particles"></div>
          <div className="team-hero-content">
            <h1 className="page-hero-title4 hero-title">
              Meet The Team Driving Innovation &amp; Sustainable Growth
            </h1>
            <p className="hero-subtitle">
              Behind every successful solar installation, infrastructure
              project, and real estate opportunity is a dedicated team committed
              to excellence, innovation, and customer satisfaction.
            </p>
            <div className="team-hero-btns">
              <a href="#leadership">
                <div className="btn btn-primary btn-lg">
                  <span>Our Leadership</span>
                </div>
              </a>
              <a href="#join">
                <div className="btn btn-lg btn-outline">
                  <span>Join Our Team</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="team-intro">
          <div className="team-intro-container">
            <div className="team-intro-text">
              <span className="team-label">WHO WE ARE</span>
              <h2 className="section-title">People. Vision. Excellence.</h2>
              <p className="section-content">
                At DON OCH Global, our strength lies in our people. Our
                multidisciplinary team combines expertise in solar energy,
                engineering, project management, real estate development,
                customer relations, and business operations to deliver
                exceptional results across every project.
              </p>
            </div>
            <div className="team-stats-grid">
              <div data-role="stat-card" className="team-stat-card">
                <span
                  data-target="10"
                  data-role="counter"
                  data-counter="true"
                  className="page-stat-number4"
                >
                  0
                </span>
                <span className="page-stat-plus1">+</span>
                <p className="stat-label">Team Members</p>
              </div>
              <div data-role="stat-card" className="team-stat-card">
                <span
                  data-target="100"
                  data-role="counter"
                  data-counter="true"
                  className="page-stat-number4"
                >
                  0
                </span>
                <span className="page-stat-plus1">+</span>
                <p className="stat-label">Projects Supported</p>
              </div>
              <div data-role="stat-card" className="team-stat-card">
                <span
                  data-target="500"
                  data-role="counter"
                  data-counter="true"
                  className="page-stat-number4"
                >
                  0
                </span>
                <span className="page-stat-plus1">+</span>
                <p className="stat-label">Customers Served</p>
              </div>
              <div data-role="stat-card" className="team-stat-card">
                <span
                  data-target="100"
                  data-role="counter"
                  data-counter="true"
                  className="page-stat-number4"
                >
                  0
                </span>
                <span className="stat-percent">%</span>
                <p className="stat-label">Commitment To Excellence</p>
              </div>
            </div>
          </div>
        </section>
        <section id="leadership" className="leadership-section">
          <div className="leadership-container">
            <h2 className="section-title text-center">Executive Leadership</h2>
            <div className="leadership-grid">
              <div className="executive-card">
                <div className="exec-image-wrapper">
                  <img
                    src="https://images.pexels.com/photos/36453960/pexels-photo-36453960.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="CEO"
                    className="exec-image"
                  />
                  <div className="exec-socials">
                    <a href="#">
                      <div aria-label="LinkedIn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </div>
                    </a>
                    <a href="#">
                      <div aria-label="Email">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="exec-info">
                  <h3 className="exec-name">Engr. Donald Oche</h3>
                  <p className="exec-role">Chief Executive Officer</p>
                  <p className="exec-bio">
                    Visionary leader with 15+ years in renewable energy and
                    infrastructure development across West Africa.
                  </p>
                </div>
              </div>
              <div className="executive-card">
                <div className="exec-image-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1581092570490-cc40829efaae?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fEZlbWFsZSUyMGVuZ2luZWVyfGVufDB8fHx8MTc4MDE3Mzk1NHww&amp;ixlib=rb-4.1.0&amp;w=1500"
                    alt="Managing Director"
                    className="exec-image"
                  />
                  <div className="exec-socials">
                    <a href="#">
                      <div aria-label="LinkedIn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </div>
                    </a>
                    <a href="#">
                      <div aria-label="Email">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="exec-info">
                  <h3 className="exec-name">Barr. Linda Emu</h3>
                  <p className="exec-role">
                    Managing Director, Lemoex Properties
                  </p>
                  <p className="exec-bio">
                    Expert in real estate law and property investment strategy,
                    securing premium assets for our clients.
                  </p>
                </div>
              </div>
              <div className="executive-card">
                <div className="exec-image-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMyfHxFbmdpbmVlcnxlbnwwfHx8fDE3ODAxNzQwOTR8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
                    alt="Operations Director"
                    className="exec-image"
                  />
                  <div className="exec-socials">
                    <a href="#">
                      <div aria-label="LinkedIn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </div>
                    </a>
                    <a href="#">
                      <div aria-label="Email">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="exec-info">
                  <h3 className="exec-name">Samuel Okoro</h3>
                  <p className="exec-role">Operations Director</p>
                  <p className="exec-bio">
                    Specializing in supply chain optimization and technical
                    project execution across Nigeria.
                  </p>
                </div>
              </div>
              <div className="executive-card">
                <div className="exec-image-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1649955879980-ea2625d2ade4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxBZnJpY2FuJTIwRmVtYWxlJTIwRW5naW5lZXJ8ZW58MHx8fHwxNzgwMTc0MjI0fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
                    alt="Business Development"
                    className="exec-image"
                  />
                  <div className="exec-socials">
                    <a href="#">
                      <div aria-label="LinkedIn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </div>
                    </a>
                    <a href="#">
                      <div aria-label="Email">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="exec-info">
                  <h3 className="exec-name">Aisha Bello</h3>
                  <p className="exec-role">Business Development Director</p>
                  <p className="exec-bio">
                    Driving strategic partnerships and expanding the DON OCH
                    footprint in emerging energy markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="team-structure">
          <div className="structure-container">
            <h2 className="section-title text-center">
              Organizational Departments
            </h2>
            <div className="accordion-group">
              <details className="dept-accordion">
                <summary className="dept-summary">
                  <span className="dept-title">
                    Solar &amp; Energy Solutions
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="dept-icon"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div className="dept-content">
                  <p className="section-content">
                    Our core energy team focuses on PV design, battery storage
                    systems, and industrial energy audits.
                  </p>
                  <ul className="dept-team-list">
                    <li>
                      <span>
                        Lead Solar Engineer • Energy Consultants • PV
                        Technicians
                      </span>
                    </li>
                  </ul>
                </div>
              </details>
              <details className="dept-accordion">
                <summary className="dept-summary">
                  <span className="dept-title">
                    Engineering &amp; Technical Operations
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="dept-icon"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div className="dept-content">
                  <p className="section-content">
                    Overseeing structural integrity and electrical installations
                    for all infrastructure projects.
                  </p>
                  <ul className="dept-team-list">
                    <li>
                      <span>
                        Civil Engineers • Electrical Supervisors • Safety
                        Officers
                      </span>
                    </li>
                  </ul>
                </div>
              </details>
              <details className="dept-accordion">
                <summary className="dept-summary">
                  <span className="dept-title">
                    Real Estate &amp; Property Management
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="dept-icon"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div className="dept-content">
                  <p className="section-content">
                    Managing the Lemoex Properties portfolio, from land
                    acquisition to facility management.
                  </p>
                  <ul className="dept-team-list">
                    <li>
                      <span>
                        Property Consultants • Estate Managers • Legal Advisors
                      </span>
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="featured-experts">
          <div className="experts-container">
            <h2 className="section-title text-center">
              Meet The Experts Behind Our Success
            </h2>
            <div className="experts-horizontal-scroll">
              <div className="expert-profile-card">
                <div className="expert-badge">
                  <span>8+ YRS EXP</span>
                </div>
                <div className="expert-card-inner">
                  <img
                    src="https://images.pexels.com/photos/15010364/pexels-photo-15010364.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                    alt="Solar Engineer"
                    className="expert-img"
                  />
                  <div className="expert-details">
                    <h4 className="expert-name">Engr. Tunde Williams</h4>
                    <p className="expert-role">Senior Solar Engineer</p>
                    <p className="expert-desc">
                      Expert in high-voltage lithium storage and grid-tied
                      industrial systems.
                    </p>
                  </div>
                </div>
              </div>
              <div className="expert-profile-card">
                <div className="expert-badge">
                  <span>6+ YRS EXP</span>
                </div>
                <div className="expert-card-inner">
                  <img
                    src="https://images.pexels.com/photos/20433881/pexels-photo-20433881.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                    alt="Project Manager"
                    className="expert-img"
                  />
                  <div className="expert-details">
                    <h4 className="expert-name">Sarah Johnson</h4>
                    <p className="expert-role">Project Manager</p>
                    <p className="expert-desc">
                      Certified specialist in renewable energy infrastructure
                      project lifecycles.
                    </p>
                  </div>
                </div>
              </div>
              <div className="expert-profile-card">
                <div className="expert-badge">
                  <span>10+ YRS EXP</span>
                </div>
                <div className="expert-card-inner">
                  <img
                    src="https://images.pexels.com/photos/32388465/pexels-photo-32388465.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                    alt="Property Consultant"
                    className="expert-img"
                  />
                  <div className="expert-details">
                    <h4 className="expert-name">Emmanuel Chidi</h4>
                    <p className="expert-role">Senior Property Consultant</p>
                    <p className="expert-desc">
                      Dedicated to identifying high-yield real estate
                      opportunities in Abuja.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="core-values">
          <div className="values-container">
            <h2 className="section-title text-center">Our Core Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="value-title">Integrity</h3>
                <p className="section-content">
                  Unwavering honesty in every transaction and technical
                  recommendation.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                  </svg>
                </div>
                <h3 className="value-title">Innovation</h3>
                <p className="section-content">
                  Leveraging the latest solar and smart-home technologies for
                  our clients.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="7"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <h3 className="value-title">Professionalism</h3>
                <p className="section-content">
                  Adhering to international engineering and corporate standards.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="value-title">Customer Satisfaction</h3>
                <p className="section-content">
                  Our success is measured by the reliability of the energy we
                  provide.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <h3 className="value-title">Excellence</h3>
                <p className="section-content">
                  Striving for perfection in every solar panel installed and
                  house built.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                  </svg>
                </div>
                <h3 className="value-title">Sustainability</h3>
                <p className="section-content">
                  Building a future that respects the environment and empowers
                  the next generation.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="join" className="join-team">
          <div className="join-overlay"></div>
          <div className="join-container">
            <h2 className="section-title">Build The Future With Us</h2>
            <p className="section-content">
              We are always looking for passionate professionals who share our
              commitment to innovation, sustainability, and excellence.
            </p>
            <div className="join-btns">
              <button className="btn btn-primary btn-lg">
                Submit Application
              </button>
              <button className="btn btn-lg btn-outline">
                View Opportunities
              </button>
            </div>
          </div>
        </section>
        <section className="team-testimonials">
          <div className="page-testimonials-container">
            <h2 className="section-title text-center">
              What Clients Say About Working With Our Team
            </h2>
            <div className="testimonial-slider">
              <div className="page-testimonial-card testimonial-card">
                <div className="testimonial-content">
                  <p>
                    &quot;The engineering team at DON OCH Global is world-class.
                    Their attention to detail during our industrial solar setup
                    was impeccable.&quot;
                  </p>
                </div>
                <div className="page-testimonial-author">
                  <img
                    src="https://images.pexels.com/photos/15389268/pexels-photo-15389268.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                    alt="Client"
                    className="page-author-img"
                  />
                  <div className="author-info">
                    <h4 className="author-name">Alhaji Musa Dikko</h4>
                    <p className="author-title">CEO, Northern Logistics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="team-prefooter">
          <div className="prefooter-container">
            <div className="prefooter-content">
              <h2 className="section-title">
                Ready To Work With A Team You Can Trust?
              </h2>
              <p className="section-content">
                Partner with DON OCH Global for reliable energy solutions,
                quality real estate opportunities, and professional project
                delivery.
              </p>
              <div className="prefooter-btns">
                <a href="#">
                  <div className="btn btn-lg btn-accent">
                    <span>Contact Us</span>
                  </div>
                </a>
                <a href="#">
                  <div className="btn btn-lg btn-outline">
                    <span>Request Consultation</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <a href="https://wa.me/2340000000000">
          <div aria-label="Chat on WhatsApp" className="page-whatsapp-float">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.031 6.172c-2.32 0-4.591.908-6.23 2.558a8.811 8.811 0 0 0-2.558 6.226c0 1.548.42 3.03 1.213 4.316l-1.29 4.708 4.82-1.265A8.775 8.775 0 0 0 12.03 24c4.856 0 8.811-3.954 8.811-8.811 0-4.857-3.955-8.811-8.81-8.811zm5.758 12.425c-.244.688-1.42 1.25-1.946 1.336-.527.085-1.022.126-2.88-.614-2.22-.888-3.655-3.142-3.766-3.29-.111-.149-.906-1.205-.906-2.298 0-1.093.573-1.631.777-1.855.204-.224.446-.28.594-.28.148 0 .296.002.425.01.135.006.315-.052.493.376.182.44.62 1.512.673 1.623.054.111.09.24.016.39-.074.15-.111.24-.22.37-.11.13-.23.29-.328.39-.11.11-.225.23-.096.45.13.22.576.95 1.238 1.54.853.76 1.57.994 1.793 1.104.223.111.353.093.484-.056.13-.149.558-.65.706-.873.149-.224.297-.186.494-.112.197.074 1.25.59 1.464.7.214.11.357.166.41.257.053.09.053.52-.19.1.208z"></path>
            </svg>
          </div>
        </a>
        <div className="team-container19">
          <div className="team-container20">
            <Script
              html={`<script>
        ;(function () {
          // Smooth Count-Up Counter Animation
          const animateCounters = () => {
            const counters = document.querySelectorAll("[data-target]")
            const duration = 2000
            const easing = (t) => 1 - Math.pow(1 - t, 3)
            const startCounter = (counter) => {
              const target = +counter.getAttribute("data-target")
              const startTime = performance.now()
              const updateCount = (currentTime) => {
                const elapsed = currentTime - startTime
                const progress = Math.min(elapsed / duration, 1)
                const easedProgress = easing(progress)
                const currentValue = Math.round(easedProgress * target)
                counter.innerText = currentValue
                if (progress < 1) {
                  requestAnimationFrame(updateCount)
                } else {
                  counter.innerText = target
                }
              }
              requestAnimationFrame(updateCount)
            }
            const observerOptions = {
              threshold: 0.3,
            }
            const observer = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  startCounter(entry.target)
                  observer.unobserve(entry.target)
                }
              })
            }, observerOptions)
            counters.forEach((counter) => observer.observe(counter))
          }
          // Particle Background for Hero
          const initHeroParticles = () => {
            const container = document.getElementById("heroParticles")
            if (!container) return
            for (let i = 0; i < 30; i++) {
              const particle = document.createElement("div")
              particle.style.position = "absolute"
              particle.style.width = Math.random() * 4 + "px"
              particle.style.height = particle.style.width
              particle.style.background = "var(--color-accent)"
              particle.style.borderRadius = "50%"
              particle.style.top = Math.random() * 100 + "%"
              particle.style.left = Math.random() * 100 + "%"
              particle.style.opacity = Math.random() * 0.5
              // Simple float animation
              particle.animate(
                [
                  { transform: "translateY(0) translateX(0)", opacity: 0.2 },
                  { transform: \`translateY(-\\\${Math.random() * 100}px) translateX(\\\${Math.random() * 50}px)\`, opacity: 0.5 },
                  { transform: "translateY(0) translateX(0)", opacity: 0.2 },
                ],
                {
                  duration: 5000 + Math.random() * 5000,
                  iterations: Infinity,
                  easing: "ease-in-out",
                }
              )
              container.appendChild(particle)
            }
          }
          // Reveal Animations on Scroll
          const initScrollReveals = () => {
            const revealElements = document.querySelectorAll(".executive-card, .value-card, .expert-profile-card, .dept-accordion")
            const observer = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry, index) => {
                  if (entry.isIntersecting) {
                    setTimeout(() => {
                      entry.target.style.opacity = "1"
                      entry.target.style.transform = "translateY(0)"
                    }, index * 100)
                    observer.unobserve(entry.target)
                  }
                })
              },
              { threshold: 0.1 }
            )
            revealElements.forEach((el) => {
              el.style.opacity = "0"
              el.style.transform = "translateY(30px)"
              el.style.transition = "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)"
              observer.observe(el)
            })
          }
          // Initialize everything
          animateCounters()
          initHeroParticles()
          initScrollReveals()
        })()
      </script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .team-container10 {
            width: 100%;
            min-height: 100vh;
          }
          .team-container19 {
            display: none;
          }
          .team-container20 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Team
