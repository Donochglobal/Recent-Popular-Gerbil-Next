import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const SolarSolutions = (props) => {
  return (
    <>
      <div className="solar-solutions-container1">
        <Head>
          <title>Solar-Solutions - Recent Popular Gerbil</title>
          <meta
            property="og:title"
            content="Solar-Solutions - Recent Popular Gerbil"
          />
          <link
            rel="canonical"
            href="https://recent-popular-gerbil-i84oq5.teleporthq.site/solar-solutions"
          />
          <meta
            property="og:url"
            content="https://recent-popular-gerbil-i84oq5.teleporthq.site/solar-solutions"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-carousel-wrapper">
          <div id="heroCarousel" className="hero-carousel-container">
            <div data-index="0" className="active hero-slide">
              <div className="hero-media-layer">
                <video
                  src="https://videos.pexels.com/video-files/2836004/2836004-hd_1920_1080_24fps.mp4"
                  loop="true"
                  muted="true"
                  autoPlay="true"
                  playsInline="true"
                  className="hero-video"
                ></video>
                <div className="hero-overlay"></div>
              </div>
              <div className="hero-content-layer">
                <div className="hero-text-content">
                  <h1 className="hero-title solar-solutions-hero-title">
                    Powering Homes &amp; Building Futures
                  </h1>
                  <p className="hero-subtitle solar-solutions-hero-subtitle">
                    DON OCH GLOBAL delivers premium solar energy solutions while
                    Lemoex Properties helps clients secure quality lands and
                    housing investments.
                  </p>
                  <div className="hero-actions">
                    <a href="#solar">
                      <div className="btn-primary btn btn-lg">
                        <span>Explore Solar Solutions</span>
                      </div>
                    </a>
                    <a href="#properties">
                      <div className="btn-outline btn btn-lg">
                        <span>Explore Properties</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div data-index="1" className="hero-slide">
              <div className="hero-media-layer">
                <img
                  alt="Solar Installation"
                  src="https://images.pexels.com/photos/9875684/pexels-photo-9875684.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="hero-image"
                />
                <div className="hero-overlay"></div>
              </div>
              <div className="hero-content-layer">
                <div className="hero-text-content">
                  <h1 className="hero-title solar-solutions-hero-title">
                    Reliable Solar Energy For Homes &amp; Industries
                  </h1>
                  <p className="hero-subtitle solar-solutions-hero-subtitle">
                    Installation of solar systems, lithium batteries, inverters,
                    electric fencing, CCTV systems and industrial energy
                    solutions.
                  </p>
                  <div className="hero-actions">
                    <a href="#quote">
                      <div className="btn-accent btn btn-lg">
                        <span>Get Free Consultation</span>
                      </div>
                    </a>
                    <a href="#products">
                      <div className="btn-outline btn btn-lg">
                        <span>View Products</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div data-index="2" className="hero-slide">
              <div className="hero-media-layer">
                <img
                  alt="Luxury Real Estate"
                  src="https://images.pexels.com/photos/20270939/pexels-photo-20270939.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="hero-image"
                />
                <div className="hero-overlay"></div>
              </div>
              <div className="hero-content-layer">
                <div className="hero-text-content">
                  <h1 className="hero-title solar-solutions-hero-title">
                    Smart Property Investments With Lemoex Properties
                  </h1>
                  <p className="hero-subtitle solar-solutions-hero-subtitle">
                    Affordable lands, housing projects, real estate development
                    and trusted property investment opportunities.
                  </p>
                  <div className="hero-actions">
                    <a href="#properties">
                      <div className="btn-secondary btn btn-lg">
                        <span>View Properties</span>
                      </div>
                    </a>
                    <a href="#contact">
                      <div className="btn-outline btn btn-lg">
                        <span>Contact Team</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-nav-dots">
            <button aria-label="Slide 1" className="active hero-dot"></button>
            <button aria-label="Slide 2" className="hero-dot"></button>
            <button aria-label="Slide 3" className="hero-dot"></button>
          </div>
        </section>
        <section className="services-grid-wrapper">
          <div className="services-container">
            <div className="services-header">
              <h2 className="section-title">World-Class Energy Services</h2>
              <p className="section-content">
                Comprehensive renewable energy and infrastructure solutions
                tailored for excellence.
              </p>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
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
                      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">Residential Solar</h3>
                <p className="section-content">
                  Clean, reliable power for your home with premium rooftop
                  installations and smart monitoring.
                </p>
                <a href="#">
                  <div className="btn btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4.28 14h15.44a1 1 0 0 0 .97-1.243l-1.5-6A1 1 0 0 0 18.22 6H5.78a1 1 0 0 0-.97.757l-1.5 6A1 1 0 0 0 4.28 14M4 10h16M10 6l-1 8m5-8l1 8m-3 0v4m-5 0h10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Commercial Systems</h3>
                <p className="section-content">
                  Scalable energy solutions for businesses to reduce operational
                  costs and carbon footprint.
                </p>
                <a href="#">
                  <div className="btn btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="service-card">
                <div className="service-icon">
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
                      <path d="M22 14v-4"></path>
                      <rect x="2" y="6" rx="2" width="16" height="12"></rect>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">Lithium Battery Supply</h3>
                <p className="section-content">
                  High-capacity storage solutions featuring the latest
                  lithium-ion technology for 24/7 power.
                </p>
                <a href="#">
                  <div className="btn btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Security Systems</h3>
                <p className="section-content">
                  Integrated CCTV and electric fencing powered by solar for
                  uninterrupted property protection.
                </p>
                <a href="#">
                  <div className="btn btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="service-card">
                <div className="service-icon">
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
                      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                      <path d="m19 9l-5 5l-4-4l-3 3"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">Energy Optimization</h3>
                <p className="section-content">
                  Smart consulting to maximize your energy efficiency and ensure
                  rapid ROI on solar assets.
                </p>
                <a href="#">
                  <div className="btn btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="service-card">
                <div className="service-icon">
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
                      <path d="M5 12H3l9-9l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"></path>
                      <path d="M10 12h4v4h-4z"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">Lemoex Properties</h3>
                <p className="section-content">
                  Premium real estate development and housing investments
                  integrated with smart energy.
                </p>
                <a href="#">
                  <div className="btn btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="features-grid-wrapper">
          <div className="features-container">
            <div className="features-header">
              <h2 className="section-title">The DON OCH Advantage</h2>
              <p className="section-content">
                Engineering excellence meets sustainable innovation in every
                component we deploy.
              </p>
            </div>
            <div className="features-grid">
              <div className="feature-item">
                <span className="feature-number">01</span>
                <h3 className="section-subtitle">High-Efficiency Panels</h3>
                <p className="section-content">
                  Tier-1 monocrystalline panels with up to 22.8% conversion
                  efficiency for maximum yield.
                </p>
              </div>
              <div className="feature-item">
                <span className="feature-number">02</span>
                <h3 className="section-subtitle">Smart Monitoring</h3>
                <p className="section-content">
                  Real-time mobile app tracking for your energy production,
                  consumption, and battery health.
                </p>
              </div>
              <div className="feature-item">
                <span className="feature-number">03</span>
                <h3 className="section-subtitle">25-Year Warranty</h3>
                <p className="section-content">
                  Industry-leading performance warranties ensuring long-term
                  peace of mind and asset protection.
                </p>
              </div>
              <div className="feature-item">
                <span className="feature-number">04</span>
                <h3 className="section-subtitle">Rapid ROI</h3>
                <p className="section-content">
                  Optimized system design typically achieving full payback
                  within 3 to 5 years of installation.
                </p>
              </div>
              <div className="feature-item">
                <span className="feature-number">05</span>
                <h3 className="section-subtitle">Hybrid Integration</h3>
                <p className="section-content">
                  Seamless switching between solar, battery, and grid to ensure
                  zero downtime for your critical loads.
                </p>
              </div>
              <div className="feature-item">
                <span className="feature-number">06</span>
                <h3 className="section-subtitle">Expert Engineering</h3>
                <p className="section-content">
                  Certified technicians ensuring every installation meets
                  international safety and quality standards.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="process-timeline-wrapper">
          <div className="process-container">
            <div className="process-header">
              <h2 className="section-title">
                Your Journey to Energy Independence
              </h2>
              <p className="section-content">
                A transparent, professional process from initial audit to
                lifelong maintenance.
              </p>
            </div>
            <div className="process-steps">
              <div className="step-item">
                <div className="step-circle">
                  <span>1</span>
                </div>
                <h3 className="section-subtitle">Consultation</h3>
                <p className="section-content">
                  Site energy audit and requirement analysis.
                </p>
                <span className="step-time">Day 1-2</span>
              </div>
              <div className="step-item">
                <div className="step-circle">
                  <span>2</span>
                </div>
                <h3 className="section-subtitle">System Design</h3>
                <p className="section-content">
                  Customized engineering plan and ROI projection.
                </p>
                <span className="step-time">Day 3-5</span>
              </div>
              <div className="step-item">
                <div className="step-circle">
                  <span>3</span>
                </div>
                <h3 className="section-subtitle">Installation</h3>
                <p className="section-content">
                  Professional deployment by certified teams.
                </p>
                <span className="step-time">Day 7-10</span>
              </div>
              <div className="step-item">
                <div className="step-circle">
                  <span>4</span>
                </div>
                <h3 className="section-subtitle">Commissioning</h3>
                <p className="section-content">
                  System testing, certification, and app setup.
                </p>
                <span className="step-time">Day 11</span>
              </div>
              <div className="step-item">
                <div className="step-circle">
                  <span>5</span>
                </div>
                <h3 className="section-subtitle">Maintenance</h3>
                <p className="section-content">
                  Ongoing support and performance monitoring.
                </p>
                <span className="step-time">Lifetime</span>
              </div>
            </div>
          </div>
        </section>
        <section className="portfolio-grid-wrapper">
          <div className="portfolio-container">
            <div className="portfolio-header">
              <h2 className="section-title">Proven Excellence in Action</h2>
              <p className="section-content">
                Explore our recent solar and infrastructure deployments across
                Nigeria.
              </p>
            </div>
            <div className="portfolio-grid">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img
                    alt="Residential Project"
                    src="https://images.pexels.com/photos/9875683/pexels-photo-9875683.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                  <div className="portfolio-overlay">
                    <span className="portfolio-tag">Residential</span>
                    <h3 className="section-subtitle">Luxury Estate Solar</h3>
                    <p className="section-content">
                      15kW Hybrid system providing 100% energy autonomy for a
                      5-bedroom mansion.
                    </p>
                  </div>
                </div>
              </div>
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img
                    alt="Industrial Project"
                    src="https://images.pexels.com/photos/29923357/pexels-photo-29923357.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                  <div className="portfolio-overlay">
                    <span className="portfolio-tag">Industrial</span>
                    <h3 className="section-subtitle">Factory Energy Hub</h3>
                    <p className="section-content">
                      250kW Industrial array reducing diesel costs by 65%
                      annually.
                    </p>
                  </div>
                </div>
              </div>
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img
                    alt="Commercial Project"
                    src="https://images.pexels.com/photos/9875676/pexels-photo-9875676.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                  <div className="portfolio-overlay">
                    <span className="portfolio-tag">Commercial</span>
                    <h3 className="section-subtitle">Office Complex</h3>
                    <p className="section-content">
                      50kW Smart Grid integration with centralized monitoring
                      and security.
                    </p>
                  </div>
                </div>
              </div>
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img
                    alt="Lemoex Properties"
                    src="https://images.pexels.com/photos/20433881/pexels-photo-20433881.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                  <div className="portfolio-overlay">
                    <span className="portfolio-tag">Real Estate</span>
                    <h3 className="section-subtitle">
                      Green Housing Development
                    </h3>
                    <p className="section-content">
                      Smart eco-homes integrated with pre-installed solar and
                      CCTV.
                    </p>
                  </div>
                </div>
              </div>
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img
                    alt="Smart Home"
                    src="https://images.pexels.com/photos/12284244/pexels-photo-12284244.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                  <div className="portfolio-overlay">
                    <span className="portfolio-tag">Tech</span>
                    <h3 className="section-subtitle">Smart Home Integration</h3>
                    <p className="section-content">
                      Automated energy management system with lithium storage
                      backup.
                    </p>
                  </div>
                </div>
              </div>
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img
                    alt="Maintenance"
                    src="https://images.pexels.com/photos/9875447/pexels-photo-9875447.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                  <div className="portfolio-overlay">
                    <span className="portfolio-tag">Service</span>
                    <h3 className="section-subtitle">Annual Maintenance</h3>
                    <p className="section-content">
                      Ongoing support for 500+ active solar installations
                      nationwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="stats-grid-wrapper">
          <div className="stats-container">
            <div className="stats-grid">
              <div className="stat-item">
                <div data-target="1250" className="stat-value">
                  <span>0</span>
                </div>
                <div className="stat-label">
                  <span>Systems Installed</span>
                </div>
              </div>
              <div className="stat-item">
                <div data-target="8500" className="stat-value">
                  <span>0</span>
                </div>
                <div className="stat-label">
                  <span>MWh Generated</span>
                </div>
              </div>
              <div className="stat-item">
                <div data-target="4200" className="stat-value">
                  <span>0</span>
                </div>
                <div className="stat-label">
                  <span>CO2 Tons Avoided</span>
                </div>
              </div>
              <div className="stat-item">
                <div data-target="99" className="stat-value">
                  <span>0</span>
                </div>
                <div className="stat-label">
                  <span>Uptime Percentage</span>
                </div>
              </div>
              <div className="stat-item">
                <div data-target="15" className="stat-value">
                  <span>0</span>
                </div>
                <div className="stat-label">
                  <span>Years Experience</span>
                </div>
              </div>
              <div className="stat-item">
                <div data-target="500" className="stat-value">
                  <span>0</span>
                </div>
                <div className="stat-label">
                  <span>Properties Developed</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials-carousel-wrapper">
          <div className="testimonials-container">
            <div className="testimonials-header">
              <h2 className="section-title">What Our Clients Say</h2>
            </div>
            <div id="testimonialCarousel" className="testimonials-carousel">
              <div className="active testimonial-slide">
                <div className="testimonial-card">
                  <div className="testimonial-rating">
                    <span>★★★★★</span>
                  </div>
                  <p className="section-content">
                    &quot;DON OCH GLOBAL transformed our factory&apos;s energy
                    profile. Our dependence on the grid has plummeted, and the
                    system paid for itself within two years.&quot;
                  </p>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <span className="author-name">Engr. Adebayo K.</span>
                      <span className="author-role">Industrial Client</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-section-wrapper">
          <div className="cta-container">
            <div className="cta-card">
              <div className="cta-content">
                <h2 className="section-title">
                  Ready to Switch to Clean Energy?
                </h2>
                <p className="section-content">
                  Join thousands of satisfied clients powering their homes and
                  businesses with DON OCH GLOBAL solar solutions.
                </p>
                <div className="cta-buttons">
                  <a href="#">
                    <div className="btn-xl btn-primary btn">
                      <span>Request Free Quote</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="btn-outline btn-xl btn">
                      <span>View Products</span>
                    </div>
                  </a>
                </div>
                <div className="cta-quick-links">
                  <a href="https://wa.me/yournumber">
                    <div className="whatsapp-link">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24m-3.53 3.16c-.19 0-.52.07-.79.37c-.27.3-.82.81-.82 1.97s.84 2.27.96 2.42c.12.15 1.65 2.51 4 3.52c.56.24 1 .38 1.34.49c.56.18 1.07.15 1.48.09c.45-.06 1.39-.57 1.58-1.12c.19-.55.19-1.02.13-1.12c-.06-.1-.22-.16-.47-.28c-.25-.12-1.48-.73-1.71-.81c-.23-.08-.4-.12-.56.12c-.17.24-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.1-.5c.11-.11.25-.29.37-.44c.12-.14.17-.25.25-.41c.08-.17.04-.31-.02-.44c-.06-.13-.56-1.35-.77-1.85c-.2-.51-.41-.43-.56-.44c-.14-.01-.31-.01-.47-.01"
                          fill="currentColor"
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
              <div className="cta-form-wrapper">
                <form
                  action="#"
                  method="POST"
                  data-form-id="f24c8d9b-64cc-4004-901f-01637ede5945"
                  className="cta-form"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      id="thq_textinput_GHhT"
                      name="textinput"
                      required="true"
                      placeholder="Full Name"
                      data-form-field-id="thq_textinput_GHhT"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      id="thq_textinput_7tOV"
                      name="textinput"
                      required="true"
                      placeholder="Email Address"
                      data-form-field-id="thq_textinput_7tOV"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <select
                      id="thq_select_57dd"
                      name="select"
                      required="true"
                      data-form-field-id="thq_select_57dd"
                      className="form-input"
                    >
                      <option value="true" disabled="true" selected="true">
                        Select Service
                      </option>
                      <option value="residential">Residential Solar</option>
                      <option value="commercial">Commercial Solar</option>
                      <option value="properties">Lemoex Properties</option>
                    </select>
                  </div>
                  <button
                    id="thq_button_Qewp"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_Qewp"
                    className="btn-accent btn btn-lg"
                  >
                    Get My Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <div className="solar-solutions-container2">
          <div className="solar-solutions-container3">
            <Script
              html={`<script defer data-name="solar-solutions-logic">
(function(){
  // Hero Carousel Logic
  const slides = document.querySelectorAll(".hero-slide")
  const dots = document.querySelectorAll(".hero-dot")
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

  // Stats Counter Logic
  const stats = document.querySelectorAll(".stat-value")
  const observerOptions = {
    threshold: 0.5,
  }

  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute("data-target"))
        const duration = 2000
        const step = target / (duration / 16)
        let current = 0

        const timer = setInterval(() => {
          current += step
          if (current >= target) {
            entry.target.innerText = target + (target > 90 && target < 101 ? "%" : "+")
            clearInterval(timer)
          } else {
            entry.target.innerText = Math.floor(current)
          }
        }, 16)
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  stats.forEach((stat) => statsObserver.observe(stat))

  // Parallax Effect for Hero
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroMedia = document.querySelector(".hero-slide.active .hero-media-layer")
    if (heroMedia) {
      heroMedia.style.transform = \`translateY(\${scrolled * 0.4}px)\`
    }
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <div className="solar-solutions-container4">
          <div className="solar-solutions-container5">
            <Script
              html={`<style>
section {
  padding: var(--spacing-4xl) 0;
  overflow: hidden;
}
</style>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .solar-solutions-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .solar-solutions-container2 {
            display: none;
          }
          .solar-solutions-container3 {
            display: contents;
          }
          .solar-solutions-container4 {
            display: none;
          }
          .solar-solutions-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default SolarSolutions
