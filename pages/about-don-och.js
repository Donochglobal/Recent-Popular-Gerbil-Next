import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const AboutDONOCH = (props) => {
  return (
    <>
      <div className="about-donoch-container1">
        <Head>
          <title>About-DON-OCH - Recent Popular Gerbil</title>
          <meta
            property="og:title"
            content="About-DON-OCH - Recent Popular Gerbil"
          />
          <link
            rel="canonical"
            href="https://recent-popular-gerbil-i84oq5.teleporthq.site/about-don-och"
          />
          <meta
            property="og:url"
            content="https://recent-popular-gerbil-i84oq5.teleporthq.site/about-don-och"
          />
        </Head>
        <Navigation></Navigation>
        <section id="hero" className="page-hero-slider">
          <div id="heroSlides" className="hero-slides-container">
            <div data-slide="1" className="page-hero-slide active">
              <div className="hero-slide-bg">
                <img
                  src="https://images.pexels.com/photos/19065333/pexels-photo-19065333.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Luxury solar farm and real estate"
                />
                <div className="page-hero-overlay"></div>
              </div>
              <div className="hero-slide-content">
                <div className="header-container">
                  <h1 className="page-hero-title1 hero-title">
                    Powering Homes &amp; Building Futures
                  </h1>
                  <p className="page-hero-subtitle hero-subtitle">
                    DON OCH GLOBAL delivers premium solar energy solutions while
                    Lemoex Properties helps clients secure quality lands and
                    housing investments.
                  </p>
                  <div className="hero-cta-group">
                    <a href="#solutions">
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
            <div data-slide="2" className="page-hero-slide">
              <div className="hero-slide-bg">
                <img
                  src="https://images.pexels.com/photos/8457866/pexels-photo-8457866.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Reliable Solar Energy"
                />
                <div className="page-hero-overlay"></div>
              </div>
              <div className="hero-slide-content">
                <div className="header-container">
                  <h1 className="page-hero-title1 hero-title">
                    Reliable Solar Energy For Homes &amp; Industries
                  </h1>
                  <p className="page-hero-subtitle hero-subtitle">
                    Installation of solar systems, lithium batteries, inverters,
                    electric fencing, CCTV systems and industrial energy
                    solutions.
                  </p>
                  <div className="hero-cta-group">
                    <a href="#contact">
                      <div className="btn btn-primary btn-lg">
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
            <div data-slide="3" className="page-hero-slide">
              <div className="hero-slide-bg">
                <img
                  src="https://images.pexels.com/photos/34823930/pexels-photo-34823930.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Smart Property Investments"
                />
                <div className="page-hero-overlay"></div>
              </div>
              <div className="hero-slide-content">
                <div className="header-container">
                  <h1 className="page-hero-title1 hero-title">
                    Smart Property Investments With Lemoex Properties
                  </h1>
                  <p className="page-hero-subtitle hero-subtitle">
                    Affordable lands, housing projects, real estate development
                    and trusted property investment opportunities.
                  </p>
                  <div className="hero-cta-group">
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
          <div className="hero-controls">
            <button id="prevSlide" className="hero-control-btn">
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
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </button>
            <button id="nextSlide" className="hero-control-btn">
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
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
          <div id="heroParticles" className="hero-particles"></div>
        </section>
        <section id="about" className="about-section">
          <div className="header-container">
            <div className="about-grid">
              <div className="about-content">
                <h2 className="section-title">About DON OCH GLOBAL</h2>
                <p className="section-content">
                  At DON OCH Global, we are redefining the future of energy,
                  infrastructure, and real estate development across Nigeria
                  through innovation, reliability, and premium service delivery.
                </p>
                <div className="about-stats">
                  <div className="page-stat-item">
                    <span data-target="150" className="page-stat-number1">
                      0
                    </span>
                    <span className="stat-plus">+</span>
                    <span className="page-stat-label stat-label">
                      Successful Projects
                    </span>
                  </div>
                  <div className="page-stat-item">
                    <span data-target="10" className="page-stat-number1">
                      0
                    </span>
                    <span className="stat-plus">Y+</span>
                    <span className="page-stat-label stat-label">
                      Years Experience
                    </span>
                  </div>
                  <div className="page-stat-item">
                    <span data-target="500" className="page-stat-number1">
                      0
                    </span>
                    <span className="stat-plus">+</span>
                    <span className="page-stat-label stat-label">
                      Solar Systems Installed
                    </span>
                  </div>
                </div>
                <div className="about-mission-vision">
                  <div className="mission-card">
                    <div className="mission-icon">
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
                        <circle cx="12" cy="12" r="6"></circle>
                        <circle cx="12" cy="12" r="2"></circle>
                      </svg>
                    </div>
                    <div className="mission-text">
                      <h3 className="section-subtitle">Our Vision</h3>
                      <p className="section-content">
                        To become Africa’s most trusted and innovative energy
                        and infrastructure brand.
                      </p>
                    </div>
                  </div>
                  <div className="mission-card">
                    <div className="mission-icon">
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
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                      </svg>
                    </div>
                    <div className="mission-text">
                      <h3 className="section-subtitle">Our Mission</h3>
                      <p className="section-content">
                        To provide world-class renewable energy, smart
                        infrastructure, and real estate solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-image-stack">
                <div className="image-wrapper main-img">
                  <img
                    src="https://images.pexels.com/photos/7031594/pexels-photo-7031594.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200"
                    alt="Corporate Excellence"
                  />
                </div>
                <div className="image-wrapper overlay-img">
                  <img
                    src="https://images.pexels.com/photos/32387194/pexels-photo-32387194.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=900"
                    alt="Solar Innovation"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="solutions" className="services-section">
          <div className="header-container">
            <div className="section-header-center">
              <h2 className="section-title">Our Premium Services</h2>
              <p className="section-content">
                Comprehensive energy and infrastructure solutions tailored for
                modern needs.
              </p>
            </div>
            <div className="page-services-grid1">
              <div className="page-service-card1">
                <div className="page-service-icon1">
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
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                </div>
                <h3 className="service-title">
                  Residential Solar Installation
                </h3>
                <p className="service-description">
                  Clean, reliable power for your home with premium rooftop solar
                  integrations.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="page-service-card1">
                <div className="page-service-icon1">
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
                    <rect
                      width="16"
                      height="20"
                      x="4"
                      y="2"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M9 22v-4h6v4"></path>
                    <path d="M8 6h.01"></path>
                    <path d="M16 6h.01"></path>
                    <path d="M12 6h.01"></path>
                    <path d="M12 10h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M16 10h.01"></path>
                    <path d="M16 14h.01"></path>
                    <path d="M8 10h.01"></path>
                    <path d="M8 14h.01"></path>
                  </svg>
                </div>
                <h3 className="service-title">Commercial Solar Systems</h3>
                <p className="service-description">
                  Scalable energy solutions designed to power businesses and
                  reduce overhead costs.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="page-service-card1">
                <div className="page-service-icon1">
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
                    <path d="M22 20V8l-7-3-7 3v12"></path>
                    <path d="M2 20V12l5-2 5 2v8"></path>
                    <path d="M7 20v-4"></path>
                    <path d="M15 20v-4"></path>
                  </svg>
                </div>
                <h3 className="service-title">Industrial Solar Solutions</h3>
                <p className="service-description">
                  Heavy-duty power infrastructure for large-scale industrial and
                  manufacturing operations.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="page-service-card1">
                <div className="page-service-icon1">
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
                    <path d="M22 14v-4"></path>
                    <rect width="16" height="12" x="2" y="6" rx="2"></rect>
                  </svg>
                </div>
                <h3 className="service-title">Lithium Battery Supply</h3>
                <p className="service-description">
                  High-performance energy storage solutions for long-lasting
                  power backup.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="page-service-card1">
                <div className="page-service-icon1">
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
                    <path d="m11 7-3 5h4l-3 5"></path>
                    <path d="M22 14v-4"></path>
                    <rect width="16" height="12" x="2" y="6" rx="2"></rect>
                  </svg>
                </div>
                <h3 className="service-title">Inverter Installation</h3>
                <p className="service-description">
                  Professional setup of smart inverters for efficient energy
                  conversion and management.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="page-service-card1">
                <div className="page-service-icon1">
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
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                    <circle cx="12" cy="13" r="3"></circle>
                  </svg>
                </div>
                <h3 className="service-title">CCTV Installation</h3>
                <p className="service-description">
                  Advanced surveillance systems to keep your property secure
                  24/7.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="page-service-card1">
                <div className="page-service-icon1">
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
                    <path d="M12 2v20"></path>
                    <path d="m5 12 7-7 7 7"></path>
                    <path d="m5 19 7-7 7 7"></path>
                  </svg>
                </div>
                <h3 className="service-title">Electric Perimeter Fencing</h3>
                <p className="service-description">
                  Smart electrified fencing solutions for robust physical
                  property security.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="page-service-card1">
                <div className="page-service-icon1">
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
                    <path d="M2 20h20"></path>
                    <path d="m7 10 5 5 5-5"></path>
                    <path d="M12 15V3"></path>
                  </svg>
                </div>
                <h3 className="service-title">Smart Home Integration</h3>
                <p className="service-description">
                  Full automation of lighting, security, and energy management
                  for modern living.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="page-service-card1">
                <div className="page-service-icon1">
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
                    <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path>
                    <path d="M2 20h20"></path>
                    <path d="M14 12v.01"></path>
                  </svg>
                </div>
                <h3 className="service-title">House Wiring</h3>
                <p className="service-description">
                  Professional electrical wiring services for new constructions
                  and renovations.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="page-service-card1">
                <div className="page-service-icon1">
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
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3 className="service-title">Energy Consultation</h3>
                <p className="service-description">
                  Expert advisory services to optimize your energy consumption
                  and sustainability.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="page-service-card1">
                <div className="page-service-icon1">
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
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                  </svg>
                </div>
                <h3 className="service-title">Maintenance &amp; Support</h3>
                <p className="service-description">
                  Reliable after-sales maintenance to ensure your systems
                  perform at peak efficiency.
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
        <section id="products" className="products-section">
          <div className="header-container">
            <div className="section-header-center">
              <h2 className="section-title">Premium Product Showcase</h2>
              <p className="section-content">
                World-class components for your energy and security
                infrastructure.
              </p>
            </div>
            <div className="products-carousel-wrapper">
              <div id="productSlider" className="products-carousel">
                <div className="page-product-card">
                  <div className="page-product-image">
                    <img
                      src="https://images.pexels.com/photos/12284244/pexels-photo-12284244.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      alt="Solar Panels"
                    />
                    <div className="product-overlay">
                      <button className="product-quick-view btn btn-sm btn-primary">
                        Quick Inquiry
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <h4 className="product-name">Solar Panels</h4>
                    <p className="product-spec">
                      Mono-crystalline High Efficiency
                    </p>
                  </div>
                </div>
                <div className="page-product-card">
                  <div className="page-product-image">
                    <img
                      src="https://images.pexels.com/photos/11330160/pexels-photo-11330160.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      alt="Lithium Batteries"
                    />
                    <div className="product-overlay">
                      <button className="product-quick-view btn btn-sm btn-primary">
                        Quick Inquiry
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <h4 className="product-name">Lithium Batteries</h4>
                    <p className="product-spec">
                      Deep Cycle LifePO4 Technology
                    </p>
                  </div>
                </div>
                <div className="page-product-card">
                  <div className="page-product-image">
                    <img
                      src="https://images.pexels.com/photos/8134745/pexels-photo-8134745.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      alt="Inverters"
                    />
                    <div className="product-overlay">
                      <button className="product-quick-view btn btn-sm btn-primary">
                        Quick Inquiry
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <h4 className="product-name">Inverters</h4>
                    <p className="product-spec">
                      Pure Sine Wave Smart Inverters
                    </p>
                  </div>
                </div>
                <div className="page-product-card">
                  <div className="page-product-image">
                    <img
                      src="https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      alt="CCTV Cameras"
                    />
                    <div className="product-overlay">
                      <button className="product-quick-view btn btn-sm btn-primary">
                        Quick Inquiry
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <h4 className="product-name">CCTV Cameras</h4>
                    <p className="product-spec">4K Night Vision Security</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="lemoex" className="page-lemoex-section">
          <div className="lemoex-bg-layer"></div>
          <div className="header-container">
            <div className="lemoex-grid">
              <div className="lemoex-content">
                <span className="lemoex-tag">PREMIUM REAL ESTATE</span>
                <h2 className="section-title">
                  Lemoex Properties — Building Dreams Through Smart Investments
                </h2>
                <p className="section-content">
                  Securing high-value opportunities in Nigeria’s evolving real
                  estate market with transparency and integrity.
                </p>
                <div className="page-lemoex-stats">
                  <div className="l-stat">
                    <span className="l-stat-val">50+</span>
                    <span className="l-stat-label">Lands Sold</span>
                  </div>
                  <div className="l-stat">
                    <span className="l-stat-val">12</span>
                    <span className="l-stat-label">Estates Developed</span>
                  </div>
                  <div className="l-stat">
                    <span className="l-stat-val">98%</span>
                    <span className="l-stat-label">Client Satisfaction</span>
                  </div>
                </div>
                <div className="lemoex-actions">
                  <a href="#">
                    <div className="btn btn-accent btn-lg">
                      <span>View Available Properties</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="btn btn-lg btn-outline">
                      <span>Book Inspection</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="lemoex-visual">
                <div className="property-card-main">
                  <img
                    src="https://images.pexels.com/photos/34823937/pexels-photo-34823937.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Luxury Estate"
                  />
                  <div className="property-card-info">
                    <h4>Prime Abuja Estates</h4>
                    <p>Smart living in the heart of the capital.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ceo-section">
          <div className="header-container">
            <div className="page-ceo-grid">
              <div className="ceo-image-side">
                <div className="ceo-portrait-frame">
                  <img
                    src="https://images.pexels.com/photos/7031598/pexels-photo-7031598.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="CEO Placeholder"
                  />
                  <div className="ceo-badge">
                    <span className="ceo-name">CEO Message</span>
                  </div>
                </div>
              </div>
              <div className="ceo-content-side">
                <h2 className="section-title">Message From The CEO</h2>
                <div className="ceo-message-body">
                  <p className="section-content">
                    &quot;At DON OCH Global, we are redefining the future of
                    energy, infrastructure, and real estate development across
                    Nigeria through innovation, reliability, and premium service
                    delivery.&quot;
                  </p>
                  <p className="section-content">
                    Our commitment is to bridge the gap between sustainability
                    and luxury, providing our clients with peace of mind through
                    world-class engineering and trusted property investments. We
                    believe in building not just systems, but lasting legacies
                    for communities across Africa.
                  </p>
                </div>
                <div className="page-ceo-signature">
                  <div className="sig-line"></div>
                  <span className="sig-text">DON OCH GLOBAL</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="projects-section">
          <div className="header-container">
            <div className="section-header-center">
              <h2 className="section-title">Our Portfolio</h2>
              <p className="section-content">
                A showcase of engineering excellence and architectural
                brilliance.
              </p>
            </div>
            <div className="page-projects-masonry">
              <div className="project-item tall">
                <img
                  src="https://images.pexels.com/photos/19065333/pexels-photo-19065333.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Residential Solar Project"
                />
                <div className="project-overlay">
                  <h4>Villa Solar Integration</h4>
                  <p>Residential Energy</p>
                </div>
              </div>
              <div className="project-item">
                <img
                  src="https://images.pexels.com/photos/34823932/pexels-photo-34823932.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Estate Development"
                />
                <div className="project-overlay">
                  <h4>Lemoex Heights</h4>
                  <p>Real Estate</p>
                </div>
              </div>
              <div className="project-item">
                <img
                  src="https://images.pexels.com/photos/6641571/pexels-photo-6641571.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Industrial Solar"
                />
                <div className="project-overlay">
                  <h4>Industrial Power Hub</h4>
                  <p>Commercial Energy</p>
                </div>
              </div>
              <div className="project-item wide">
                <img
                  src="https://images.pexels.com/photos/34823930/pexels-photo-34823930.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Smart City Project"
                />
                <div className="project-overlay">
                  <h4>Smart Estate Infrastructure</h4>
                  <p>Integrated Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonial-section">
          <div className="header-container">
            <div className="section-header-center">
              <h2 className="section-title">Client Trust</h2>
              <p className="section-content">
                What our premium clients say about our services.
              </p>
            </div>
            <div id="testimonialSlider" className="testimonial-carousel">
              <div className="testimonial-item active">
                <div className="testimonial-card">
                  <div className="stars">
                    <span>★★★★★</span>
                  </div>
                  <p className="testimonial-text">
                    &quot;The transition to solar was seamless. DON OCH Global
                    provided a solution that actually works and has saved us
                    millions in energy costs.&quot;
                  </p>
                  <div className="testimonial-user">
                    <span className="user-name">Dr. Emeka N.</span>
                    <span className="user-role">Homeowner, Abuja</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="location-section">
          <div className="location-split">
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.0202888034!2d7.306031252119958!3d9.03387249112702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48971%3A0x1bbbae3f475a4ad1!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1715421234567!5m2!1sen!2sng"
                width="100%"
                height="100%"
                allowFullScreen="true"
                loading="lazy"
                className="about-donoch-iframe"
              ></iframe>
            </div>
            <div className="location-info">
              <div className="info-card">
                <h2 className="section-title">Visit Our Office</h2>
                <div className="info-item">
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
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <p className="section-content">
                    Headquarters: Abuja, Federal Capital Territory, Nigeria.
                  </p>
                </div>
                <div className="info-item">
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
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <p className="section-content">
                    Mon - Sat: 8:00 AM - 6:00 PM
                  </p>
                </div>
                <a href="#">
                  <div className="btn btn-primary">
                    <span>Get Directions</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="header-container">
            <div className="page-contact-grid">
              <div className="contact-form-side">
                <h2 className="section-title">Start Your Journey</h2>
                <p className="section-content">
                  Ready to power your future or secure a premium investment?
                  Contact us today.
                </p>
                <form
                  action="/submit"
                  method="POST"
                  data-form-id="68c579d8-6053-46fa-a494-dd1a6b239369"
                  className="contact-form"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Full Name"
                      required="true"
                      id="thq_textinput_8HpJ"
                      name="textinput"
                      data-form-field-id="thq_textinput_8HpJ"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Email Address"
                      required="true"
                      id="thq_textinput_G9pD"
                      name="textinput"
                      data-form-field-id="thq_textinput_G9pD"
                    />
                  </div>
                  <div className="form-group">
                    <select
                      required="true"
                      id="thq_select_B7q2"
                      name="select"
                      data-form-field-id="thq_select_B7q2"
                    >
                      <option value="true" disabled="true" selected="true">
                        Service of Interest
                      </option>
                      <option>Solar Solutions</option>
                      <option>Lemoex Properties</option>
                      <option>Security Systems</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea
                      placeholder="Your Message"
                      rows="5"
                      required="true"
                      id="thq_textarea_Y8OH"
                      name="textarea"
                      data-form-field-id="thq_textarea_Y8OH"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    id="thq_button_ZXgs"
                    name="button"
                    data-form-field-id="thq_button_ZXgs"
                    className="btn btn-accent btn-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <a href="https://wa.me/234000000000">
          <div aria-label="Chat on WhatsApp" className="page-floating-whatsapp">
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
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-14h.1c2.3 0 4.4 1.1 5.7 3l1.1-.3a1 1 0 0 1 1.3 1.3l-.3 1.1c1.9 1.3 3 3.4 3 5.7v.1z"></path>
            </svg>
          </div>
        </a>
        <div className="about-donoch-container2">
          <div className="about-donoch-container3">
            <Script
              html={`<script defer data-name="don-och-logic">
(function(){
  // Header Scroll Effect
  const header = document.getElementById("headerMain")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Hero Slider Logic
  let currentSlide = 0
  const slides = document.querySelectorAll(".hero-slide")
  const totalSlides = slides.length

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"))
    slides[index].classList.add("active")
  }

  document.getElementById("nextSlide").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % totalSlides
    showSlide(currentSlide)
  })

  document.getElementById("prevSlide").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
    showSlide(currentSlide)
  })

  // Auto-advance hero slides
  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides
    showSlide(currentSlide)
  }, 8000)

  // Simple Particle Effect for Hero
  const particlesContainer = document.getElementById("heroParticles")
  if (particlesContainer) {
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div")
      particle.style.cssText = \`
      position: absolute;
      width: \${Math.random() * 5 + 2}px;
      height: \${Math.random() * 5 + 2}px;
      background: rgba(255, 165, 0, 0.3);
      top: \${Math.random() * 100}%;
      left: \${Math.random() * 100}%;
      border-radius: 50%;
      pointer-events: none;
      animation: float \${Math.random() * 10 + 10}s infinite linear;
    \`
      particlesContainer.appendChild(particle)
    }
  }

  // Stats Counter Animation
  const stats = document.querySelectorAll(".stat-number")
  const observerOptions = {
    threshold: 0.5,
  }

  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = +entry.target.getAttribute("data-target")
        let count = 0
        const speed = target / 50

        const updateCount = () => {
          if (count < target) {
            count += speed
            entry.target.innerText = Math.ceil(count)
            setTimeout(updateCount, 20)
          } else {
            entry.target.innerText = target
          }
        }
        updateCount()
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  stats.forEach((stat) => statsObserver.observe(stat))

  // Simple Mobile Menu Toggle
  const menuToggle = document.getElementById("menuToggle")
  const headerMenu = document.getElementById("headerMenu")

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      headerMenu.style.display = headerMenu.style.display === "flex" ? "none" : "flex"
      headerMenu.style.flexDirection = "column"
      headerMenu.style.position = "absolute"
      headerMenu.style.top = "100%"
      headerMenu.style.left = "0"
      headerMenu.style.width = "100%"
      headerMenu.style.background = "var(--color-primary)"
      headerMenu.style.padding = "20px"
    })
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
        <div className="about-donoch-container4">
          <div className="about-donoch-container5">
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
        <div>
          <div className="about-donoch-container7">
            <Script
              html={`<style>
@media (max-width: 1024px) {
.page-hero-slider {
  min-height: 650px;
}
.hero-slide-content {
  max-width: 90%;
  padding: 0 var(--spacing-xl);
}
.page-hero-title1 {
  font-size: 3rem;
}
.page-services-grid1 {
  grid-template-columns: repeat(2, 1fr);
}
.page-projects-masonry {
  grid-template-columns: repeat(2, 1fr);
}
.lemoex-grid {
  grid-template-columns: 1fr;
}
.page-ceo-grid {
  grid-template-columns: 1fr;
}
.location-split {
  grid-template-columns: 1fr;
  height: auto;
}
.page-contact-grid {
  grid-template-columns: 1fr;
}
.about-grid {
  grid-template-columns: 1fr;
}
.footer-top-row {
  flex-wrap: wrap;
  gap: var(--spacing-2xl);
}
}
</style>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .about-donoch-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .about-donoch-iframe {
            border: 0;
          }
          .about-donoch-container2 {
            display: none;
          }
          .about-donoch-container3 {
            display: contents;
          }
          .about-donoch-container4 {
            display: none;
          }
          .about-donoch-container5 {
            display: contents;
          }
          .about-donoch-container7 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default AboutDONOCH
