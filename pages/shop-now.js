import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const ShopNow = (props) => {
  return (
    <>
      <div className="shop-now-container1">
        <Head>
          <title>Shop-Now - Recent Popular Gerbil</title>
          <meta
            property="og:title"
            content="Shop-Now - Recent Popular Gerbil"
          />
          <link
            rel="canonical"
            href="https://recent-popular-gerbil-i84oq5.teleporthq.site/shop-now"
          />
          <meta
            property="og:url"
            content="https://recent-popular-gerbil-i84oq5.teleporthq.site/shop-now"
          />
        </Head>
        <Navigation></Navigation>
        <div className="promo-bar">
          <div className="promo-container">
            <span className="section-content">
              Reliable Solar &amp; Power Solutions for Homes &amp; Businesses
            </span>
          </div>
        </div>
        <section className="hero-slider">
          <div id="heroSlider" className="slider-track">
            <div className="active slide">
              <div className="slide-media">
                <img
                  alt="Luxury Solar &amp; Real Estate"
                  src="https://images.pexels.com/photos/9875681/pexels-photo-9875681.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="overlay"></div>
              </div>
              <div className="slide-content">
                <h1 className="hero-title page-hero-title">
                  Powering Homes &amp; Building Futures
                </h1>
                <p className="hero-subtitle">
                  DON OCH GLOBAL delivers premium solar energy solutions while
                  Lemoex Properties helps clients secure quality lands and
                  housing investments.
                </p>
                <div className="hero-btns">
                  <button className="btn-primary btn btn-lg">
                    Explore Solar Solutions
                  </button>
                  <button className="btn-outline btn btn-lg">
                    Explore Properties
                  </button>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="slide-media">
                <img
                  alt="Solar Energy Solutions"
                  src="https://images.pexels.com/photos/29923357/pexels-photo-29923357.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="overlay"></div>
              </div>
              <div className="slide-content">
                <h1 className="hero-title page-hero-title">
                  Reliable Solar Energy For Homes &amp; Industries
                </h1>
                <p className="hero-subtitle">
                  Installation of solar systems, lithium batteries, inverters,
                  electric fencing, CCTV systems and industrial energy
                  solutions.
                </p>
                <div className="hero-btns">
                  <button className="btn-accent btn btn-lg">
                    Get Free Consultation
                  </button>
                  <button className="btn-primary btn btn-lg">
                    View Products
                  </button>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="slide-media">
                <img
                  alt="Lemoex Properties"
                  src="https://images.pexels.com/photos/27151846/pexels-photo-27151846.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="overlay"></div>
              </div>
              <div className="slide-content">
                <h1 className="hero-title page-hero-title">
                  Smart Property Investments With Lemoex Properties
                </h1>
                <p className="hero-subtitle">
                  Affordable lands, housing projects, real estate development
                  and trusted property investment opportunities.
                </p>
                <div className="hero-btns">
                  <button className="btn-secondary btn btn-lg">
                    View Properties
                  </button>
                  <button className="btn-outline btn btn-lg">
                    Contact Team
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-nav">
            <button data-index="0" className="nav-dot active"></button>
            <button data-index="1" className="nav-dot"></button>
            <button data-index="2" className="nav-dot"></button>
          </div>
        </section>
        <section className="products-section">
          <div className="container">
            <div className="flex-header">
              <h2 className="section-title">Best Sellers</h2>
              <button className="btn-outline btn-sm btn">
                View All Products
              </button>
            </div>
            <div className="products-grid">
              <div className="product-card">
                <div className="product-badge">
                  <span>Hot</span>
                </div>
                <div className="product-image">
                  <img
                    alt="Mono Solar Panel"
                    src="https://images.pexels.com/photos/7102661/pexels-photo-7102661.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="product-details">
                  <h3 className="product-title">
                    Premium Mono Solar Panel 550W
                  </h3>
                  <div className="product-rating">
                    <span>⭐⭐⭐⭐⭐ (24)</span>
                  </div>
                  <div className="price-wrapper">
                    <span className="current-price">₦145,000</span>
                    <span className="old-price">₦160,000</span>
                  </div>
                  <div className="product-actions">
                    <button className="btn-sm btn-primary btn full-width">
                      Add to Cart
                    </button>
                    <a
                      href="https://wa.me/09132371332"
                      target="_blank"
                      rel="noreferrer noopener"
                      data-action="whatsapp-inquiry"
                    >
                      <div
                        rel="noopener noreferrer"
                        target="_blank"
                        className="btn-sm btn btn-whatsapp"
                      >
                        <svg
                          width="18"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                          </g>
                        </svg>
                        <span>
                          {' '}
                          Inquire on WhatsApp
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                    <button className="btn-outline btn-sm btn">
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-badge">
                  <span>Hot</span>
                </div>
                <div className="product-image">
                  <img
                    alt="Mono Solar Panel"
                    src="https://images.pexels.com/photos/6158868/pexels-photo-6158868.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="product-details">
                  <h3 className="product-title">
                    Premium Mono Solar Panel 550W
                  </h3>
                  <div className="product-rating">
                    <span>⭐⭐⭐⭐⭐ (24)</span>
                  </div>
                  <div className="price-wrapper">
                    <span className="current-price">₦145,000</span>
                    <span className="old-price">₦160,000</span>
                  </div>
                  <div className="product-actions">
                    <button className="btn-sm btn-primary btn full-width">
                      Add to Cart
                    </button>
                    <a
                      href="https://wa.me/09132371332"
                      target="_blank"
                      rel="noreferrer noopener"
                      data-action="whatsapp-inquiry"
                    >
                      <div
                        rel="noopener noreferrer"
                        target="_blank"
                        className="btn-sm btn btn-whatsapp"
                      >
                        <svg
                          width="18"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                          </g>
                        </svg>
                        <span>
                          {' '}
                          Inquire on WhatsApp
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                    <button className="btn-outline btn-sm btn">
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-badge">
                  <span>Hot</span>
                </div>
                <div className="product-image">
                  <img
                    alt="Mono Solar Panel"
                    src="https://images.pexels.com/photos/9875448/pexels-photo-9875448.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="product-details">
                  <h3 className="product-title">
                    Premium Mono Solar Panel 550W
                  </h3>
                  <div className="product-rating">
                    <span>⭐⭐⭐⭐⭐ (24)</span>
                  </div>
                  <div className="price-wrapper">
                    <span className="current-price">₦145,000</span>
                    <span className="old-price">₦160,000</span>
                  </div>
                  <div className="product-actions">
                    <button className="btn-sm btn-primary btn full-width">
                      Add to Cart
                    </button>
                    <a
                      href="https://wa.me/09132371332"
                      target="_blank"
                      rel="noreferrer noopener"
                      data-action="whatsapp-inquiry"
                    >
                      <div
                        rel="noopener noreferrer"
                        target="_blank"
                        className="btn-sm btn btn-whatsapp"
                      >
                        <svg
                          width="18"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                          </g>
                        </svg>
                        <span>
                          {' '}
                          Inquire on WhatsApp
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                    <button className="btn-outline btn-sm btn">
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-badge">
                  <span>Hot</span>
                </div>
                <div className="product-image">
                  <img
                    alt="Mono Solar Panel"
                    src="https://images.unsplash.com/photo-1615630859219-0459703c34e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDg4fHxSRU5FV0FCTEUlMjBFTkVSR1l8ZW58MHx8fHwxNzgwMDM3NjQ5fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
                  />
                </div>
                <div className="product-details">
                  <h3 className="product-title">Mini Industrial Solar Setup</h3>
                  <div className="product-rating">
                    <span>⭐⭐⭐⭐⭐ (24)</span>
                  </div>
                  <div className="price-wrapper">
                    <span className="current-price">₦145,000</span>
                    <span className="old-price">₦160,000</span>
                  </div>
                  <div className="product-actions">
                    <button className="btn-sm btn-primary btn full-width">
                      Add to Cart
                    </button>
                    <a
                      href="https://wa.me/09132371332"
                      target="_blank"
                      rel="noreferrer noopener"
                      data-action="whatsapp-inquiry"
                    >
                      <div
                        rel="noopener noreferrer"
                        target="_blank"
                        className="btn-sm btn btn-whatsapp"
                      >
                        <svg
                          width="18"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                          </g>
                        </svg>
                        <span>
                          {' '}
                          Inquire on WhatsApp
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                    <button className="btn-outline btn-sm btn">
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-badge">
                  <span>Hot</span>
                </div>
                <div className="product-image">
                  <img
                    alt="Mono Solar Panel"
                    src="https://images.unsplash.com/photo-1768602214330-7f47e076cdca?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI3fHxTT0xBUiUyMEJBVFRFUll8ZW58MHx8fHwxNzgwMDM3MTk1fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
                  />
                </div>
                <div className="product-details">
                  <h3 className="product-title">Inverter</h3>
                  <div className="product-rating">
                    <span>⭐⭐⭐⭐⭐ (24)</span>
                  </div>
                  <div className="price-wrapper">
                    <span className="current-price">₦150,000</span>
                    <span className="old-price">₦160,000</span>
                  </div>
                  <div className="product-actions">
                    <button className="btn-sm btn-primary btn full-width">
                      Add to Cart
                    </button>
                    <a
                      href="https://wa.me/09132371332"
                      target="_blank"
                      rel="noreferrer noopener"
                      data-action="whatsapp-inquiry"
                    >
                      <div
                        rel="noopener noreferrer"
                        target="_blank"
                        className="btn-sm btn btn-whatsapp"
                      >
                        <svg
                          width="18"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                          </g>
                        </svg>
                        <span>
                          {' '}
                          Inquire on WhatsApp
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                    <button className="btn-outline btn-sm btn">
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-badge">
                  <span>Hot</span>
                </div>
                <div className="product-image">
                  <img
                    alt="Mono Solar Panel"
                    src="https://images.unsplash.com/photo-1766507680004-1c71007aefe5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMwfHxTT0xBUiUyMEJBVFRFUll8ZW58MHx8fHwxNzgwMDM3MTk1fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
                  />
                </div>
                <div className="product-details">
                  <h3 className="product-title">
                    Premium Mono Solar Panel 550W
                  </h3>
                  <div className="product-rating">
                    <span>⭐⭐⭐⭐⭐ (24)</span>
                  </div>
                  <div className="price-wrapper">
                    <span className="current-price">₦145,000</span>
                    <span className="old-price">₦160,000</span>
                  </div>
                  <div className="product-actions">
                    <button className="btn-sm btn-primary btn full-width">
                      Add to Cart
                    </button>
                    <a
                      href="https://wa.me/09132371332"
                      target="_blank"
                      rel="noreferrer noopener"
                      data-action="whatsapp-inquiry"
                    >
                      <div
                        rel="noopener noreferrer"
                        target="_blank"
                        className="btn-sm btn btn-whatsapp"
                      >
                        <svg
                          width="18"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                          </g>
                        </svg>
                        <span>
                          {' '}
                          Inquire on WhatsApp
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                    <button className="btn-outline btn-sm btn">
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-badge">
                  <span>Hot</span>
                </div>
                <div className="product-image">
                  <img
                    alt="Mono Solar Panel"
                    src="https://images.pexels.com/photos/9875684/pexels-photo-9875684.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="product-details">
                  <h3 className="product-title">
                    Premium Mono Solar Panel 550W
                  </h3>
                  <div className="product-rating">
                    <span>⭐⭐⭐⭐⭐ (24)</span>
                  </div>
                  <div className="price-wrapper">
                    <span className="current-price">₦145,000</span>
                    <span className="old-price">₦160,000</span>
                  </div>
                  <div className="product-actions">
                    <button className="btn-sm btn-primary btn full-width">
                      Add to Cart
                    </button>
                    <a
                      href="https://wa.me/09132371332"
                      target="_blank"
                      rel="noreferrer noopener"
                      data-action="whatsapp-inquiry"
                    >
                      <div
                        rel="noopener noreferrer"
                        target="_blank"
                        className="btn-sm btn btn-whatsapp"
                      >
                        <svg
                          width="18"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                          </g>
                        </svg>
                        <span>
                          {' '}
                          Inquire on WhatsApp
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                    <button className="btn-outline btn-sm btn">
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-badge">
                  <span>Hot</span>
                </div>
                <div className="product-image">
                  <img
                    alt="Mono Solar Panel"
                    src="https://images.pexels.com/photos/9875684/pexels-photo-9875684.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="product-details">
                  <h3 className="product-title">
                    Premium Mono Solar Panel 550W
                  </h3>
                  <div className="product-rating">
                    <span>⭐⭐⭐⭐⭐ (24)</span>
                  </div>
                  <div className="price-wrapper">
                    <span className="current-price">₦145,000</span>
                    <span className="old-price">₦160,000</span>
                  </div>
                  <div className="product-actions">
                    <button className="btn-sm btn-primary btn full-width">
                      Add to Cart
                    </button>
                    <a
                      href="https://wa.me/09132371332"
                      target="_blank"
                      rel="noreferrer noopener"
                      data-action="whatsapp-inquiry"
                    >
                      <div
                        rel="noopener noreferrer"
                        target="_blank"
                        className="btn-sm btn btn-whatsapp"
                      >
                        <svg
                          width="18"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                          </g>
                        </svg>
                        <span>
                          {' '}
                          Inquire on WhatsApp
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                    <button className="btn-outline btn-sm btn">
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-badge">
                  <span>Hot</span>
                </div>
                <div className="product-image">
                  <img
                    alt="Mono Solar Panel"
                    src="https://images.unsplash.com/photo-1676337167748-00b4e684322a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIwfHxTT0xBUiUyMEJBVFRFUll8ZW58MHx8fHwxNzgwMDM3MTY0fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
                  />
                </div>
                <div className="product-details">
                  <h3 className="product-title">
                    Premium Newpowa 12V 100Ah Battery
                  </h3>
                  <div className="product-rating">
                    <span>⭐⭐⭐⭐⭐ (24)</span>
                  </div>
                  <div className="price-wrapper">
                    <span className="current-price">₦145,000</span>
                    <span className="old-price">₦160,000</span>
                  </div>
                  <div className="product-actions">
                    <button className="btn-sm btn-primary btn full-width">
                      Add to Cart
                    </button>
                    <a
                      href="https://wa.me/09132371332"
                      target="_blank"
                      rel="noreferrer noopener"
                      data-action="whatsapp-inquiry"
                    >
                      <div
                        rel="noopener noreferrer"
                        target="_blank"
                        className="btn-sm btn btn-whatsapp"
                      >
                        <svg
                          width="18"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                          </g>
                        </svg>
                        <span>
                          {' '}
                          Inquire on WhatsApp
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                    <button className="btn-outline btn-sm btn">
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-badge">
                  <span>Hot</span>
                </div>
                <div className="product-image">
                  <img
                    alt="Mono Solar Panel"
                    src="https://images.unsplash.com/photo-1662340696153-ebc6941a0b4b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzM3x8U09MQVIlMjBCQVRURVJZfGVufDB8fHx8MTc4MDAzNzQ2M3ww&amp;ixlib=rb-4.1.0&amp;w=1500"
                  />
                </div>
                <div className="product-details">
                  <h3 className="product-title">Newpowa Inverter</h3>
                  <div className="product-rating">
                    <span>⭐⭐⭐⭐⭐ (24)</span>
                  </div>
                  <div className="price-wrapper">
                    <span className="current-price">₦200,000</span>
                    <span className="old-price">₦160,000</span>
                  </div>
                  <div className="product-actions">
                    <button className="btn-sm btn-primary btn full-width">
                      Add to Cart
                    </button>
                    <a
                      href="https://wa.me/09132371332"
                      target="_blank"
                      rel="noreferrer noopener"
                      data-action="whatsapp-inquiry"
                    >
                      <div
                        rel="noopener noreferrer"
                        target="_blank"
                        className="btn-sm btn btn-whatsapp"
                      >
                        <svg
                          width="18"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                          </g>
                        </svg>
                        <span>
                          {' '}
                          Inquire on WhatsApp
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                    <button className="btn-outline btn-sm btn">
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-form-area">
                <h2 className="section-title">Get in Touch</h2>
                <form
                  action="/submit"
                  method="POST"
                  data-form-id="f1d9ada6-1a4c-4254-a7ac-77a457b9e775"
                  className="main-form"
                >
                  <div className="form-row">
                    <input
                      type="text"
                      id="thq_textinput_j0Vk"
                      name="textinput"
                      required="true"
                      placeholder="Full Name"
                      data-form-field-id="thq_textinput_j0Vk"
                      className="page-form-input form-input"
                    />
                    <input
                      type="email"
                      id="thq_textinput_Zq-A"
                      name="textinput"
                      required="true"
                      placeholder="Email Address"
                      data-form-field-id="thq_textinput_Zq-A"
                      className="page-form-input form-input"
                    />
                  </div>
                  <input
                    type="text"
                    id="thq_textinput_mq1W"
                    name="textinput"
                    placeholder="Subject"
                    data-form-field-id="thq_textinput_mq1W"
                    className="page-form-input form-input"
                  />
                  <textarea
                    id="thq_textarea_89cZ"
                    name="textarea"
                    rows="5"
                    required="true"
                    placeholder="Your Message"
                    data-form-field-id="thq_textarea_89cZ"
                    className="page-form-input form-input"
                  ></textarea>
                  <button
                    id="thq_button_Xa0Y"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_Xa0Y"
                    className="btn-primary btn btn-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div className="map-area">
                <div className="map-placeholder">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126844.06348612!2d3.33624!3d6.52437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a397c9523!2sLagos!5e0!3m2!1sen!2sng!4v1625000000000!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    allowFullScreen="true"
                    className="shop-now-iframe"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        <a
          href="https://wa.me/2348079446510"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div
            target="_blank"
            aria-label="Chat on WhatsApp"
            className="whatsapp-float"
          >
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
            >
              <path d="m3 21 1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
            </svg>
          </div>
        </a>
        <div className="shop-now-container2">
          <div className="shop-now-container3">
            <Script
              html={`<script defer data-name="don-och-engine">
(function(){
  // Header Scroll Effect
  const header = document.getElementById("stickyHeader")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Hero Slider Logic
  const slider = document.getElementById("heroSlider")
  const slides = slider.querySelectorAll(".slide")
  const dots = document.querySelectorAll(".nav-dot")
  let currentSlide = 0

  function updateSlider() {
    slider.style.transform = \`translateX(-\${currentSlide * 100}%)\`
    slides.forEach((s, i) => s.classList.toggle("active", i === currentSlide))
    dots.forEach((d, i) => d.classList.toggle("active", i === currentSlide))
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length
    updateSlider()
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      currentSlide = parseInt(dot.dataset.index)
      updateSlider()
    })
  })

  setInterval(nextSlide, 6000)

  // Animated Counters
  const stats = document.querySelectorAll(".stat-number")
  const observerOptions = { threshold: 0.5 }

  const statObserver = new IntersectionObserver((entries) => {
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
        statObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  stats.forEach((stat) => statObserver.observe(stat))

  // Mobile Menu Placeholder
  const mobileToggle = document.querySelector(".mobile-toggle")
  mobileToggle.addEventListener("click", () => {
    alert("Mobile menu feature would expand here in production.")
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
          .shop-now-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .shop-now-iframe {
            border: 0;
          }
          .shop-now-container2 {
            display: none;
          }
          .shop-now-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default ShopNow
