import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Profile = (props) => {
  return (
    <>
      <div className="profile-container1">
        <Head>
          <title>Profile - Recent Popular Gerbil</title>
          <meta property="og:title" content="Profile - Recent Popular Gerbil" />
          <link
            rel="canonical"
            href="https://recent-popular-gerbil-i84oq5.teleporthq.site/profile"
          />
          <meta
            property="og:url"
            content="https://recent-popular-gerbil-i84oq5.teleporthq.site/profile"
          />
        </Head>
        <Navigation></Navigation>
        <section id="hero" className="page-hero-slider3">
          <div className="page-hero-slides-container1">
            <div data-slide="1" className="page-hero-slide2 active">
              <div className="hero-bg-media">
                <video
                  autoPlay="true"
                  muted="true"
                  loop="true"
                  playsInline="true"
                  src="https://videos.pexels.com/video-files/26547062/11958297_640_360_30fps.mp4"
                  className="hero-video"
                ></video>
                <div className="page-hero-overlay2"></div>
              </div>
              <div className="page-hero-content-wrapper">
                <div className="page-hero-text-content">
                  <h1 className="page-hero-title5 hero-title">
                    <span>
                      {' '}
                      Building Sustainable Energy.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      {' '}
                      Creating Lasting Value.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </h1>
                  <p className="page-hero-subtitle1 hero-subtitle">
                    DON OCH Global delivers reliable solar energy solutions,
                    infrastructure services, and real estate opportunities that
                    empower homes, businesses, institutions, and communities
                    across Nigeria.
                  </p>
                  <div className="page-hero-cta-group1">
                    <a href="#services">
                      <div className="btn btn-primary btn-lg">
                        <span>Explore Solar Solutions</span>
                      </div>
                    </a>
                    <a href="#properties">
                      <div className="btn btn-lg btn-outline">
                        <span>Explore Properties</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div data-slide="2" className="page-hero-slide2">
              <div className="hero-bg-media">
                <img
                  src="https://images.pexels.com/photos/9799766/pexels-photo-9799766.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Solar Infrastructure"
                  className="hero-image"
                />
                <div className="page-hero-overlay2"></div>
              </div>
              <div className="page-hero-content-wrapper">
                <div className="page-hero-text-content">
                  <h2 className="page-hero-title5 hero-title">
                    Reliable Solar Energy For Homes &amp; Industries
                  </h2>
                  <p className="page-hero-subtitle1 hero-subtitle">
                    Installation of solar systems, lithium batteries, inverters,
                    electric fencing, CCTV systems and industrial energy
                    solutions.
                  </p>
                  <div className="page-hero-cta-group1">
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
            <div data-slide="3" className="page-hero-slide2">
              <div className="hero-bg-media">
                <img
                  src="https://images.pexels.com/photos/36622005/pexels-photo-36622005.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Luxury Real Estate"
                  className="hero-image"
                />
                <div className="page-hero-overlay2"></div>
              </div>
              <div className="page-hero-content-wrapper">
                <div className="page-hero-text-content">
                  <h2 className="page-hero-title5 hero-title">
                    Smart Property Investments With Lemoex Properties
                  </h2>
                  <p className="page-hero-subtitle1 hero-subtitle">
                    Affordable lands, housing projects, real estate development
                    and trusted property investment opportunities.
                  </p>
                  <div className="page-hero-cta-group1">
                    <a href="#properties">
                      <div className="btn btn-lg btn-secondary">
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
          <div className="page-hero-controls">
            <button
              id="heroPrev"
              aria-label="Previous Slide"
              className="page-hero-nav-btn prev"
            >
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
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <div className="hero-indicators">
              <span data-index="0" className="indicator active"></span>
              <span data-index="1" className="indicator"></span>
              <span data-index="2" className="indicator"></span>
            </div>
            <button
              id="heroNext"
              aria-label="Next Slide"
              className="page-hero-nav-btn next"
            >
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
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </section>
        <section id="about" className="page-about-section2 about-section">
          <div className="container-max">
            <div className="page-about-grid2">
              <div className="about-visual">
                <div className="page-about-image-stack">
                  <img
                    src="https://images.pexels.com/photos/8457866/pexels-photo-8457866.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Project Delivery"
                    className="about-img-main"
                  />
                  <div className="about-experience-badge">
                    <span data-target="15" className="page-badge-number">
                      0
                    </span>
                    <span className="page-badge-text">Years of Excellence</span>
                  </div>
                </div>
              </div>
              <div className="about-content-area">
                <span className="section-subtitle">WHO WE ARE</span>
                <h2 className="section-title">
                  A Trusted Partner For Energy &amp; Infrastructure Growth
                </h2>
                <p className="section-content">
                  DON OCH Global is a forward-thinking energy and infrastructure
                  company committed to providing innovative solar solutions,
                  professional project delivery, and strategic real estate
                  opportunities. With a focus on quality, sustainability, and
                  customer satisfaction, we help individuals, businesses,
                  institutions, and organizations achieve energy independence
                  and long-term value creation.
                </p>
                <div className="page-about-stats-grid">
                  <div className="page-stat-card1">
                    <span data-target="100" className="page-stat-number5">
                      0
                    </span>
                    <span className="stat-suffix">+</span>
                    <span className="page-stat-label3 stat-label">
                      Projects Supported
                    </span>
                  </div>
                  <div className="page-stat-card1">
                    <span data-target="500" className="page-stat-number5">
                      0
                    </span>
                    <span className="stat-suffix">+</span>
                    <span className="page-stat-label3 stat-label">
                      Customers Served
                    </span>
                  </div>
                  <div className="page-stat-card1">
                    <span data-target="100" className="page-stat-number5">
                      0
                    </span>
                    <span className="stat-suffix">%</span>
                    <span className="page-stat-label3 stat-label">
                      Commitment
                    </span>
                  </div>
                </div>
                <div className="about-mission-vision">
                  <div className="mv-card">
                    <div className="mv-icon">
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
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </div>
                    <div className="mv-text">
                      <h3 className="mv-title">Our Vision</h3>
                      <p>
                        To become a leading force in sustainable energy,
                        infrastructure development, and real estate innovation
                        across Africa.
                      </p>
                    </div>
                  </div>
                  <div className="mv-card">
                    <div className="mv-icon">
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
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <div className="mv-text">
                      <h3 className="mv-title">Our Mission</h3>
                      <p>
                        To deliver reliable, innovative, and customer-focused
                        solutions that improve lives and support sustainable
                        economic growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="page-services-section2 services-section"
        >
          <div className="container-max">
            <div className="text-center-wrapper">
              <span className="section-subtitle">WHAT WE DO</span>
              <h2 className="section-title">
                Premium Energy &amp; Infrastructure Services
              </h2>
            </div>
            <div className="page-services-grid4">
              <div className="page-service-card4">
                <div className="page-service-icon4">
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
                    <path d="M11 2h2m1.28 12l-4.56 8M21 22l-1.558-4H4.558M3 10v2"></path>
                    <path d="M6.245 15.04A2 2 0 0 1 8 14h12a1 1 0 0 1 .864 1.505l-3.11 5.457A2 2 0 0 1 16 22H4a1 1 0 0 1-.863-1.506zM7 2a4 4 0 0 1-4 4m5.66 1.66l1.41 1.41"></path>
                  </svg>
                </div>
                <h3 className="service-name">Residential Solar</h3>
                <p className="service-desc">
                  Complete home solar installations tailored to your
                  family&apos;s energy needs and budget.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="page-service-card4">
                <div className="page-service-icon4">
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
                    <path d="M4 6.28v11.44a1 1 0 0 0 1.243.97l6-1.5a1 1 0 0 0 .757-.97V7.78a1 1 0 0 0-.757-.97l-6-1.5A1 1 0 0 0 4 6.28M8 6v12m4-6H4m16-5l-3 5h4l-3 5"></path>
                  </svg>
                </div>
                <h3 className="service-name">Commercial Solar</h3>
                <p className="service-desc">
                  Scalable energy solutions for businesses to reduce overheads
                  and ensure 24/7 power.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="page-service-card4">
                <div className="page-service-icon4">
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
                    <path d="M22 14v-4"></path>
                    <rect width="16" height="12" x="2" y="6" rx="2"></rect>
                  </svg>
                </div>
                <h3 className="service-name">Lithium Battery Supply</h3>
                <p className="service-desc">
                  High-performance energy storage units with long lifespans for
                  consistent power backup.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="page-service-card4">
                <div className="page-service-icon4">
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
                    <path d="M5 12H3l9-9l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"></path>
                    <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"></path>
                  </svg>
                </div>
                <h3 className="service-name">Smart Home Integration</h3>
                <p className="service-desc">
                  Automated energy management systems for the ultimate modern
                  living experience.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="page-service-card4">
                <div className="page-service-icon4">
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
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <h3 className="service-name">CCTV Installation</h3>
                <p className="service-desc">
                  Professional security surveillance systems for comprehensive
                  property protection.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="page-service-card4">
                <div className="page-service-icon4">
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
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  </svg>
                </div>
                <h3 className="service-name">Electric Fencing</h3>
                <p className="service-desc">
                  Secure your perimeter with high-voltage, reliable electric
                  fencing solutions.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          id="products"
          className="page-products-section products-section"
        >
          <div className="container-max">
            <div className="flex-row-between">
              <h2 className="section-title">Hardware Showcase</h2>
              <div className="carousel-nav">
                <button id="prodPrev" className="prev carousel-btn">
                  ←
                </button>
                <button id="prodNext" className="next carousel-btn">
                  →
                </button>
              </div>
            </div>
            <div className="page-products-carousel-wrapper">
              <div id="productSlider" className="products-carousel">
                <div className="page-product-card2">
                  <div className="product-img-box">
                    <img
                      src="https://images.pexels.com/photos/9800003/pexels-photo-9800003.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      alt="Solar Panels"
                    />
                  </div>
                  <div className="page-product-info1">
                    <h4 className="page-product-title">Premium Solar Panels</h4>
                    <p className="product-specs">
                      High-efficiency monocrystalline cells.
                    </p>
                    <button className="btn btn-primary btn-sm">
                      Quick Inquiry
                    </button>
                  </div>
                </div>
                <div className="page-product-card2">
                  <div className="product-img-box">
                    <img
                      src="https://images.pexels.com/photos/159243/solar-solar-cells-photovoltaic-environmentally-friendly-159243.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      alt="Inverters"
                    />
                  </div>
                  <div className="page-product-info1">
                    <h4 className="page-product-title">
                      Smart Hybrid Inverters
                    </h4>
                    <p className="product-specs">
                      Pure sine wave with Wi-Fi monitoring.
                    </p>
                    <button className="btn btn-primary btn-sm">
                      Quick Inquiry
                    </button>
                  </div>
                </div>
                <div className="page-product-card2">
                  <div className="product-img-box">
                    <img
                      src="https://images.pexels.com/photos/9799767/pexels-photo-9799767.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      alt="Batteries"
                    />
                  </div>
                  <div className="page-product-info1">
                    <h4 className="page-product-title">Lithium-Ion Storage</h4>
                    <p className="product-specs">
                      5kWh Deep cycle energy wall.
                    </p>
                    <button className="btn btn-primary btn-sm">
                      Quick Inquiry
                    </button>
                  </div>
                </div>
                <div className="page-product-card2">
                  <div className="product-img-box">
                    <img
                      src="https://images.pexels.com/photos/9799742/pexels-photo-9799742.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      alt="Street Lights"
                    />
                  </div>
                  <div className="page-product-info1">
                    <h4 className="page-product-title">Solar Street Lights</h4>
                    <p className="product-specs">
                      All-in-one motion sensing LED.
                    </p>
                    <button className="btn btn-primary btn-sm">
                      Quick Inquiry
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="properties" className="properties-section">
          <div className="container-max">
            <div className="properties-header">
              <div className="brand-badge">
                <span>LEMOEX PROPERTIES</span>
              </div>
              <h2 className="text-gold section-title">
                Lemoex Properties — Building Dreams Through Smart Investments
              </h2>
              <p className="section-content">
                Strategic real estate opportunities that deliver long-term value
                and security.
              </p>
            </div>
            <div className="page-property-grid">
              <div className="property-card large">
                <img
                  src="https://images.pexels.com/photos/37845135/pexels-photo-37845135.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Land Sales"
                />
                <div className="property-overlay">
                  <h3 className="property-name">Strategic Land Sales</h3>
                  <p>Verified lands in prime Abuja locations.</p>
                  <button className="btn btn-accent">View Details</button>
                </div>
              </div>
              <div className="page-property-stats">
                <div className="page-p-stat">
                  <span className="p-stat-val">20+</span>
                  <span className="p-stat-lbl">Active Estates</span>
                </div>
                <div className="page-p-stat">
                  <span className="p-stat-val">1.2k+</span>
                  <span className="p-stat-lbl">Happy Landowners</span>
                </div>
                <div className="page-p-stat">
                  <span className="p-stat-val">100%</span>
                  <span className="p-stat-lbl">Verified Titles</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="page-ceo-section ceo-section">
          <div className="container-max">
            <div className="ceo-layout">
              <div className="ceo-visual">
                <div className="page-ceo-frame1">
                  <img
                    src="https://images.pexels.com/photos/22601673/pexels-photo-22601673.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="CEO Portrait"
                    className="ceo-img"
                  />
                </div>
              </div>
              <div className="ceo-content">
                <span className="section-subtitle">LEADERSHIP VISION</span>
                <h2 className="section-title">Message From The CEO</h2>
                <blockquote className="page-ceo-quote1">
                  <span>
                    &quot;At DON OCH Global, we are committed to building
                    sustainable solutions that empower communities, strengthen
                    businesses, and create lasting value for future generations.
                    Our goal is to remain a trusted partner for energy
                    independence, infrastructure growth, and real estate
                    development through innovation, professionalism, and
                    integrity.&quot;
                  </span>
                </blockquote>
                <div className="page-ceo-signature3">
                  <span className="page-ceo-name2 ceo-name">
                    Executive Director
                  </span>
                  <span className="ceo-brand">DON OCH GLOBAL</span>
                </div>
                <div className="ceo-actions">
                  <button className="btn btn-primary">Meet Our Team</button>
                  <button className="btn btn-outline">
                    Contact Leadership
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="timeline-section">
          <div className="container-max">
            <div className="text-center-wrapper">
              <h2 className="section-title">Our Journey</h2>
            </div>
            <div className="timeline-container">
              <div className="timeline-line"></div>
              <div className="page-timeline-item">
                <div className="page-timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">Founded</span>
                  <h4 className="timeline-title">Company Establishment</h4>
                  <p>
                    Laying the foundation for engineering excellence in Abuja.
                  </p>
                </div>
              </div>
              <div className="page-timeline-item">
                <div className="page-timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">Expansion</span>
                  <h4 className="timeline-title">Solar Solutions Division</h4>
                  <p>
                    Pioneering renewable energy installations across Nigeria.
                  </p>
                </div>
              </div>
              <div className="page-timeline-item">
                <div className="page-timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">Diversification</span>
                  <h4 className="timeline-title">Lemoex Properties Launch</h4>
                  <p>
                    Venturing into strategic real estate and land development.
                  </p>
                </div>
              </div>
              <div className="page-timeline-item">
                <div className="page-timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">Milestone</span>
                  <h4 className="timeline-title">Major Project Completion</h4>
                  <p>
                    Successfully delivering 100+ large-scale infrastructure
                    projects.
                  </p>
                </div>
              </div>
              <div className="page-timeline-item">
                <div className="page-timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">Future</span>
                  <h4 className="timeline-title">Pan-African Vision</h4>
                  <p>Scaling our sustainable impact beyond national borders.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="page-contact-section1 contact-section">
          <div className="container-max">
            <div className="page-contact-grid2">
              <div className="contact-info-panel">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-content">
                  Ready to power your future? Contact our expert team today for
                  a free consultation.
                </p>
                <div className="contact-methods">
                  <div className="method-item">
                    <span className="method-icon">📍</span>
                    <div className="method-text">
                      <strong>Office Address</strong>
                      <p>Headquarters, Abuja, Nigeria</p>
                    </div>
                  </div>
                  <div className="method-item">
                    <span className="method-icon">📞</span>
                    <div className="method-text">
                      <strong>Call Us</strong>
                      <p>+234 800 000 0000</p>
                    </div>
                  </div>
                  <div className="method-item">
                    <span className="method-icon">✉️</span>
                    <div className="method-text">
                      <strong>Email</strong>
                      <p>info@donochglobal.com</p>
                    </div>
                  </div>
                </div>
                <div className="social-links-large">
                  <a href="#">
                    <div className="social-link-item">
                      <span>FB</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="social-link-item">
                      <span>LI</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="social-link-item">
                      <span>IG</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="social-link-item">
                      <span>X</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="contact-form-panel">
                <form
                  action="#"
                  method="POST"
                  data-form-id="fc6534aa-e183-475d-b173-7b7731227ae3"
                  className="lead-form"
                >
                  <div className="page-form-group1 form-group">
                    <input
                      type="text"
                      placeholder="Full Name"
                      required="true"
                      id="thq_textinput_ePvV"
                      name="textinput"
                      data-form-field-id="thq_textinput_ePvV"
                      className="page-form-input2 form-input"
                    />
                  </div>
                  <div className="page-form-group1 form-group">
                    <input
                      type="email"
                      placeholder="Email Address"
                      required="true"
                      id="thq_textinput_mwqO"
                      name="textinput"
                      data-form-field-id="thq_textinput_mwqO"
                      className="page-form-input2 form-input"
                    />
                  </div>
                  <div className="page-form-group1 form-group">
                    <select
                      required="true"
                      id="thq_select_erZF"
                      name="select"
                      data-form-field-id="thq_select_erZF"
                      className="page-form-input2 form-input"
                    >
                      <option value="true" disabled="true" selected="true">
                        Select Service
                      </option>
                      <option value="solar">Solar Energy</option>
                      <option value="properties">Real Estate</option>
                      <option value="infrastructure">Infrastructure</option>
                    </select>
                  </div>
                  <div className="page-form-group1 form-group">
                    <textarea
                      placeholder="Your Message"
                      required="true"
                      rows="4"
                      id="thq_textarea_wrMI"
                      name="textarea"
                      data-form-field-id="thq_textarea_wrMI"
                      className="page-form-input2 form-input"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    id="thq_button_3hDn"
                    name="button"
                    data-form-field-id="thq_button_3hDn"
                    className="btn btn-primary btn-xl"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="pre-footer-cta">
          <div className="container-max text-center">
            <h2 className="page-hero-title5 hero-title">
              Let&apos;s Build A Sustainable Future Together.
            </h2>
            <p className="page-hero-subtitle1 hero-subtitle">
              Partner with DON OCH Global for reliable energy solutions,
              infrastructure support, and strategic real estate opportunities.
            </p>
            <div className="page-cta-actions">
              <button className="btn btn-lg btn-accent">
                Request Consultation
              </button>
              <button className="btn btn-lg btn-outline">Contact Us</button>
            </div>
          </div>
        </section>
        <a
          href="https://wa.me/2340000000000"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div
            target="_blank"
            aria-label="Chat on WhatsApp"
            className="page-floating-whatsapp3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
            </svg>
          </div>
        </a>
        <div className="profile-container2">
          <div className="profile-container3">
            <Script
              html={`<script defer data-name="don-och-global-scripts">
(function(){
  document.addEventListener("DOMContentLoaded", () => {
    // Sticky Header Logic
    const header = document.getElementById("header")
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })

    // Hero Slider Logic
    const slides = document.querySelectorAll(".hero-slide")
    const indicators = document.querySelectorAll(".indicator")
    const nextBtn = document.getElementById("heroNext")
    const prevBtn = document.getElementById("heroPrev")
    let currentSlide = 0

    function showSlide(index) {
      slides.forEach((s) => s.classList.remove("active"))
      indicators.forEach((i) => i.classList.remove("active"))

      slides[index].classList.add("active")
      indicators[index].classList.add("active")
      currentSlide = index
    }

    nextBtn.addEventListener("click", () => {
      let next = (currentSlide + 1) % slides.length
      showSlide(next)
    })

    prevBtn.addEventListener("click", () => {
      let prev = (currentSlide - 1 + slides.length) % slides.length
      showSlide(prev)
    })

    // Auto-advance hero
    setInterval(() => {
      let next = (currentSlide + 1) % slides.length
      showSlide(next)
    }, 8000)

    // Counter Animation Logic
    const counters = document.querySelectorAll(".stat-number, .badge-number")
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = +entry.target.getAttribute("data-target")
            let count = 0
            const increment = target / 50
            const updateCount = () => {
              if (count < target) {
                count += increment
                entry.target.innerText = Math.ceil(count)
                setTimeout(updateCount, 20)
              } else {
                entry.target.innerText = target
              }
            }
            updateCount()
            counterObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    counters.forEach((c) => counterObserver.observe(c))

    // Product Carousel Basic Navigation
    const slider = document.getElementById("productSlider")
    const prodNext = document.getElementById("prodNext")
    const prodPrev = document.getElementById("prodPrev")
    let scrollPos = 0

    prodNext.addEventListener("click", () => {
      scrollPos += 320
      if (scrollPos > slider.scrollWidth - slider.clientWidth) scrollPos = 0
      slider.scrollTo({ left: scrollPos, behavior: "smooth" })
    })

    prodPrev.addEventListener("click", () => {
      scrollPos -= 320
      if (scrollPos < 0) scrollPos = slider.scrollWidth - slider.clientWidth
      slider.scrollTo({ left: scrollPos, behavior: "smooth" })
    })

    // Mobile Menu Toggle (Simplified)
    const mobileToggle = document.querySelector(".header-mobile-toggle")
    mobileToggle.addEventListener("click", () => {
      const nav = document.querySelector(".header-nav")
      nav.style.display = nav.style.display === "flex" ? "none" : "flex"
      if (nav.style.display === "flex") {
        nav.style.position = "absolute"
        nav.style.top = "100%"
        nav.style.left = "0"
        nav.style.width = "100%"
        nav.style.background = "var(--color-primary)"
        nav.style.padding = "20px"
        document.querySelector(".header-menu").style.flexDirection = "column"
      }
    })
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .profile-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .profile-container2 {
            display: none;
          }
          .profile-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Profile
