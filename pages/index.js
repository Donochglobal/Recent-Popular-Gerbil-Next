import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container10">
        <Head>
          <title>Recent Popular Gerbil</title>
          <meta property="og:title" content="Recent Popular Gerbil" />
          <link
            rel="canonical"
            href="https://recent-popular-gerbil-i84oq5.teleporthq.site/"
          />
          <meta
            property="og:url"
            content="https://recent-popular-gerbil-i84oq5.teleporthq.site/"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-carousel">
          <div className="hero-carousel__track">
            <div data-slide="1" className="active hero-carousel__slide">
              <div className="hero-carousel__bg-wrap">
                <img
                  alt="Solar Farm and Real Estate"
                  src="https://images.pexels.com/photos/9875684/pexels-photo-9875684.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="hero-carousel__img"
                />
                <div className="hero-carousel__overlay"></div>
              </div>
              <div className="hero-carousel__content">
                <h1 className="hero-title home-hero-title home-thq-hero-title-elm1">
                  Powering Homes &amp; Building Futures
                </h1>
                <p className="hero-subtitle">
                  DON OCH GLOBAL delivers premium solar energy solutions while
                  Lemoex Properties helps clients secure quality lands and
                  housing investments.
                </p>
                <div className="hero-carousel__actions">
                  <a href="#">
                    <div className="btn-primary btn btn-lg">
                      <span>Explore Solar Solutions</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="btn-secondary btn btn-lg">
                      <span>Explore Properties</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div data-slide="2" className="hero-carousel__slide">
              <div className="home-thq-hero-carouselbg-wrap-elm2 hero-carousel__bg-wrap">
                <div className="hero-carousel__overlay"></div>
              </div>
              <div className="hero-carousel__content">
                <h1 className="hero-title home-hero-title">
                  Reliable Solar Energy For Homes &amp; Industries
                </h1>
                <p className="hero-subtitle">
                  Installation of solar systems, lithium batteries, inverters,
                  electric fencing, CCTV systems and industrial energy
                  solutions.
                </p>
                <div className="hero-carousel__actions">
                  <a href="#">
                    <div className="btn-primary btn btn-lg">
                      <span>Get Free Consultation</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="btn-outline btn btn-lg">
                      <span>View Products</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div data-slide="3" className="hero-carousel__slide">
              <div className="hero-carousel__bg-wrap">
                <img
                  alt="Property Focus"
                  src="https://images.pexels.com/photos/12558848/pexels-photo-12558848.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="hero-carousel__img"
                />
                <div className="hero-carousel__overlay"></div>
              </div>
              <div className="hero-carousel__content">
                <h1 className="hero-title home-hero-title">
                  Smart Property Investments With Lemoex Properties
                </h1>
                <p className="hero-subtitle">
                  Affordable lands, housing projects, real estate development
                  and trusted property investment opportunities.
                </p>
                <div className="hero-carousel__actions">
                  <a href="#">
                    <div className="btn-secondary btn btn-lg">
                      <span>View Properties</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="btn-outline btn btn-lg">
                      <span>Contact Team</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-carousel__controls">
            <button
              aria-label="Slide 1"
              data-target="0"
              className="active hero-carousel__dot"
            ></button>
            <button
              aria-label="Slide 2"
              data-target="1"
              className="hero-carousel__dot"
            ></button>
            <button
              aria-label="Slide 3"
              data-target="2"
              className="hero-carousel__dot"
            ></button>
          </div>
        </section>
        <section className="home-thq-solutions-showcase-elm">
          <div className="home-thq-solutions-showcasecontainer-elm">
            <div className="home-thq-solutions-showcaseheader-elm">
              <h2 className="home-thq-solutions-showcasetitle-elm">
                Smart Energy &amp; Property Solutions
              </h2>
              <p className="home-thq-solutions-showcasesubtitle-elm">
                Reliable solar systems, industrial energy solutions, and premium
                real estate opportunities designed for modern living and
                business growth.
              </p>
            </div>
            <div className="home-thq-solutions-showcasegrid-elm">
              <Link href="/solar-solutions">
                <a>
                  <div className="solutions-showcase__card">
                    <div className="solutions-showcase__icon">
                      <svg
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M11 2h2m1.28 12l-4.56 8M21 22l-1.558-4H4.558M3 10v2"></path>
                          <path d="M6.245 15.04A2 2 0 0 1 8 14h12a1 1 0 0 1 .864 1.505l-3.11 5.457A2 2 0 0 1 16 22H4a1 1 0 0 1-.863-1.506zM7 2a4 4 0 0 1-4 4m5.66 1.66l1.41 1.41"></path>
                        </g>
                      </svg>
                    </div>
                    <h3 className="solutions-showcase__card-title">
                      GO SOLAR TODAY
                    </h3>
                    <p className="solutions-showcase__card-text">
                      Switch to clean, reliable, and cost-effective solar energy
                      solutions for homes and businesses.
                    </p>
                    <span className="solutions-showcase__btn">
                      {' '}
                      Explore Solar Solutions
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
              </Link>
              <Link href="/shop-now">
                <a>
                  <div className="solutions-showcase__card">
                    <div className="solutions-showcase__icon">
                      <svg
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                        height="32"
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
                    <h3 className="solutions-showcase__card-title">
                      BUY HOME SOLAR SYSTEMS
                    </h3>
                    <p className="solutions-showcase__card-text">
                      Discover complete residential solar packages including
                      panels, batteries, and smart inverters.
                    </p>
                    <span className="solutions-showcase__btn">
                      {' '}
                      Shop Home Systems
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
              </Link>
              <Link href="/solar-solutions">
                <a>
                  <div className="solutions-showcase__card">
                    <div className="solutions-showcase__icon">
                      <svg
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 16h.01M16 16h.01M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm5-3h.01"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="solutions-showcase__card-title">
                      FACTORY SOLAR INSTALLATIONS
                    </h3>
                    <p className="solutions-showcase__card-text">
                      Industrial-grade solar and power backup systems designed
                      for factories, warehouses, and large facilities.
                    </p>
                    <span className="solutions-showcase__btn">
                      {' '}
                      Industrial Solutions
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
              </Link>
              <Link href="/lemoex-properties">
                <a>
                  <div className="home-thq-solutions-showcasecard-elm4 solutions-showcase__card">
                    <div className="home-thq-solutions-showcaseicon-elm4 solutions-showcase__icon">
                      <svg
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                          <rect
                            x="4"
                            y="2"
                            rx="2"
                            width="16"
                            height="20"
                          ></rect>
                        </g>
                      </svg>
                    </div>
                    <h3 className="home-thq-solutions-showcasecard-title-elm4 solutions-showcase__card-title">
                      BUY YOUR HOME AT LEMOEX PROPERTIES
                    </h3>
                    <p className="home-thq-solutions-showcasecard-text-elm4 solutions-showcase__card-text">
                      Find premium homes, estates, and smart property investment
                      opportunities through Lemoex Properties.
                    </p>
                    <span className="home-thq-solutions-showcasebtn-elm4 solutions-showcase__btn">
                      {' '}
                      Explore Properties
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
              </Link>
              <Link href="/lemoex-properties">
                <a>
                  <div className="home-thq-solutions-showcasecard-elm5 solutions-showcase__card">
                    <div className="home-thq-solutions-showcaseicon-elm5 solutions-showcase__icon">
                      <svg
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="home-thq-solutions-showcasecard-title-elm5 solutions-showcase__card-title">
                      EXPLORE AVAILABLE LANDS
                    </h3>
                    <p className="home-thq-solutions-showcasecard-text-elm5 solutions-showcase__card-text">
                      Secure genuine land opportunities in developing and prime
                      locations with flexible options.
                    </p>
                    <span className="home-thq-solutions-showcasebtn-elm5 solutions-showcase__btn">
                      {' '}
                      View Lands
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="about-impact">
          <div className="about-impact__container">
            <div className="about-impact__header">
              <h2 className="section-title">
                How To Own Reliable Solar Power Solutions
              </h2>
              <p className="section-content">
                We make the transition to reliable solar energy simple,
                professional, and stress-free for homes and businesses.
              </p>
            </div>
            <div className="home-thq-about-impactgrid-elm">
              <div className="home-thq-solar-processconnector-elm"></div>
              <div data-step="1" className="solar-process__card">
                <div className="solar-process__badge">
                  <span>01</span>
                </div>
                <div className="solar-process__icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="solar-process__title">
                  Tell Us Your Energy Needs
                </h3>
                <p className="solar-process__desc">
                  Contact us and explain your home, office, shop, factory, or
                  business power challenges.
                </p>
              </div>
              <div data-step="2" className="solar-process__card">
                <div className="solar-process__badge">
                  <span>02</span>
                </div>
                <div className="solar-process__icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m21 21l-4.34-4.34"></path>
                      <circle r="8" cx="11" cy="11"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="solar-process__title">
                  We Recommend The Right Solution
                </h3>
                <p className="solar-process__desc">
                  Our experts analyze your energy usage and recommend the best
                  solar panels, batteries, inverters, and backup systems for
                  you.
                </p>
              </div>
              <div data-step="3" className="solar-process__card">
                <div className="solar-process__badge">
                  <span>03</span>
                </div>
                <div className="solar-process__icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="solar-process__title">
                  Professional Installation
                </h3>
                <p className="solar-process__desc">
                  We handle installation professionally using quality equipment
                  and experienced engineers.
                </p>
              </div>
              <div data-step="4" className="solar-process__card">
                <div className="solar-process__badge">
                  <span>04</span>
                </div>
                <div className="solar-process__icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="solar-process__title">
                  Enjoy Stable Power &amp; Lower Energy Costs
                </h3>
                <p className="solar-process__desc">
                  Experience uninterrupted electricity, improved efficiency, and
                  long-term savings.
                </p>
              </div>
              <div data-step="5" className="solar-process__card">
                <div className="solar-process__badge">
                  <span>05</span>
                </div>
                <div className="solar-process__icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="solar-process__title">Ongoing Support</h3>
                <p className="solar-process__desc">
                  We remain available for maintenance, upgrades, and technical
                  support whenever needed.
                </p>
              </div>
            </div>
            <div className="solar-process__actions">
              <Link href="/contact">
                <a>
                  <div className="btn-primary btn">
                    <span>Get Started Today</span>
                  </div>
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <div className="btn-outline btn">
                    <span>Speak With Our Experts</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section
          data-section="marketplace"
          className="home-thq-products-rail-elm"
        >
          <div className="home-thq-products-railcontainer-elm">
            <div className="home-thq-products-railheader-elm">
              <h2 className="section-title">Premium Solar Products</h2>
              <p className="home-thq-products-marketplacesubtitle-elm">
                Explore high-performance solar panels, lithium batteries, hybrid
                inverters, power storage systems, and smart energy devices.
              </p>
            </div>
            <div
              data-role="marketplace-filters"
              className="home-thq-products-marketplacefilters-elm"
            >
              <div className="home-thq-filter-group-elm1 filter-group">
                <svg
                  fill="none"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="home-thq-filter-icon-elm"
                >
                  <path d="m21 21l-4.34-4.34"></path>
                  <circle r="8" cx="11" cy="11"></circle>
                </svg>
                <input
                  type="text"
                  data-filter="search"
                  placeholder="Search products..."
                  className="input filter-input"
                />
              </div>
              <div className="filter-group">
                <select data-filter="category" className="filter-select">
                  <option value="all">All Categories</option>
                  <option value="panels">Solar Panels</option>
                  <option value="batteries">Batteries</option>
                  <option value="inverters">Inverters</option>
                  <option value="accessories">Accessories</option>
                </select>
              </div>
              <div className="filter-group">
                <select data-filter="price" className="filter-select">
                  <option value="all">All Prices</option>
                  <option value="0-500000">₦0 - ₦500,000</option>
                  <option value="500000-1000000">₦500,000 - ₦1,000,000</option>
                  <option value="1000000+">₦1,000,000+</option>
                </select>
              </div>
              <div className="filter-group">
                <select data-filter="availability" className="filter-select">
                  <option value="all">Availability</option>
                  <option value="in-stock">In Stock</option>
                  <option value="limited">Limited Stock</option>
                </select>
              </div>
              <div className="filter-group">
                <select data-filter="sort" className="filter-select">
                  <option value="popular">Sort By</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="newest">Newest</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>
            </div>
            <div data-category="panels" className="products-marketplace__row">
              <div className="products-marketplace__row-header">
                <h3 className="products-marketplace__row-title">
                  Solar Panels
                </h3>
                <Link href="/shop-solar-products">
                  <a>
                    <div className="products-marketplace__row-link">
                      <span>View All</span>
                    </div>
                  </a>
                </Link>
              </div>
              <div
                data-role="product-row"
                className="products-marketplace__track"
              >
                <div
                  data-price="850000"
                  data-stock="in-stock"
                  data-category="panels"
                  data-product-id="panel-550"
                  className="product-card"
                >
                  <div className="product-card__img-box">
                    <img
                      alt="550W Mono Solar Panel"
                      src="https://images.pexels.com/photos/9799702/pexels-photo-9799702.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                    <div className="product-card__dots">
                      <span></span>
                      <span></span>
                      <span className="active"></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="product-card__info">
                    <h4 className="product-card__name">
                      550W Mono Solar Panel
                    </h4>
                    <div className="product-card__price">
                      <span>₦850,000</span>
                    </div>
                    <div className="product-card__meta">
                      <span className="stock-dot"></span>
                      <span className="product-card__stock--in product-card__stock">
                        {' '}
                        In Stock
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <div className="product-card__stars">
                        <span>★★★★★</span>
                      </div>
                    </div>
                    <div className="product-card__actions">
                      <button
                        data-action="add-to-cart"
                        className="btn-sm button btn-accent btn"
                      >
                        Add to Cart
                      </button>
                      <button
                        data-action="quick-view"
                        className="btn-outline btn-sm button btn"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  data-price="980000"
                  data-stock="in-stock"
                  data-category="panels"
                  data-product-id="panel-600"
                  className="product-card"
                >
                  <div className="product-card__img-box">
                    <img
                      alt="600W Mono Solar Panel"
                      src="https://images.pexels.com/photos/8853509/pexels-photo-8853509.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                    <div className="product-card__dots">
                      <span></span>
                      <span className="active"></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="product-card__info">
                    <h4 className="product-card__name">
                      600W Mono Solar Panel
                    </h4>
                    <div className="product-card__price">
                      <span>₦980,000</span>
                    </div>
                    <div className="product-card__meta">
                      <span className="stock-dot"></span>
                      <span className="product-card__stock--in product-card__stock">
                        {' '}
                        In Stock
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <div className="product-card__stars">
                        <span>★★★★★</span>
                      </div>
                    </div>
                    <div className="product-card__actions">
                      <button
                        data-action="add-to-cart"
                        className="btn-sm button btn-accent btn"
                      >
                        Add to Cart
                      </button>
                      <button
                        data-action="quick-view"
                        className="btn-outline btn-sm button btn"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  data-price="1200000"
                  data-stock="limited"
                  data-category="panels"
                  data-product-id="panel-bifacial"
                  className="product-card"
                >
                  <div className="product-card__img-box">
                    <img
                      alt="Bifacial Solar Panels"
                      src="https://images.pexels.com/photos/7102661/pexels-photo-7102661.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                    <div className="product-card__dots">
                      <span className="active"></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="product-card__info">
                    <h4 className="product-card__name">
                      Bifacial Solar Panels
                    </h4>
                    <div className="product-card__price">
                      <span>₦1,200,000</span>
                    </div>
                    <div className="product-card__meta">
                      <span className="stock-dot"></span>
                      <span className="product-card__stock product-card__stock--limited">
                        {' '}
                        Limited Stock
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <div className="product-card__stars">
                        <span>★★★★☆</span>
                      </div>
                    </div>
                    <div className="product-card__actions">
                      <button
                        data-action="add-to-cart"
                        className="btn-sm button btn-accent btn"
                      >
                        Add to Cart
                      </button>
                      <button
                        data-action="quick-view"
                        className="btn-outline btn-sm button btn"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  data-price="850000"
                  data-stock="in-stock"
                  data-category="panels"
                  data-product-id="panel-550"
                  className="product-card"
                >
                  <div className="product-card__img-box">
                    <img
                      alt="550W Mono Solar Panel"
                      src="https://images.pexels.com/photos/9799702/pexels-photo-9799702.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                    <div className="product-card__dots">
                      <span></span>
                      <span></span>
                      <span className="active"></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="product-card__info">
                    <h4 className="product-card__name">
                      550W Mono Solar Panel
                    </h4>
                    <div className="product-card__price">
                      <span>₦850,000</span>
                    </div>
                    <div className="product-card__meta">
                      <span className="stock-dot"></span>
                      <span className="product-card__stock--in product-card__stock">
                        In Stock
                      </span>
                      <div className="product-card__stars">
                        <span>★★★★★</span>
                      </div>
                    </div>
                    <div className="product-card__actions">
                      <button
                        data-action="add-to-cart"
                        className="btn-sm button btn-accent btn"
                      >
                        Add to Cart
                      </button>
                      <button
                        data-action="quick-view"
                        className="btn-outline btn-sm button btn"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  data-price="980000"
                  data-stock="in-stock"
                  data-category="panels"
                  data-product-id="panel-600"
                  className="product-card"
                >
                  <div className="product-card__img-box">
                    <img
                      alt="600W Mono Solar Panel"
                      src="https://images.pexels.com/photos/8853509/pexels-photo-8853509.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                    <div className="product-card__dots">
                      <span></span>
                      <span className="active"></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="product-card__info">
                    <h4 className="product-card__name">
                      600W Mono Solar Panel
                    </h4>
                    <div className="product-card__price">
                      <span>₦980,000</span>
                    </div>
                    <div className="product-card__meta">
                      <span className="stock-dot"></span>
                      <span className="product-card__stock--in product-card__stock">
                        In Stock
                      </span>
                      <div className="product-card__stars">
                        <span>★★★★★</span>
                      </div>
                    </div>
                    <div className="product-card__actions">
                      <button
                        data-action="add-to-cart"
                        className="btn-sm button btn-accent btn"
                      >
                        Add to Cart
                      </button>
                      <button
                        data-action="quick-view"
                        className="btn-outline btn-sm button btn"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  data-price="1200000"
                  data-stock="limited"
                  data-category="panels"
                  data-product-id="panel-bifacial"
                  className="product-card"
                >
                  <div className="product-card__img-box">
                    <img
                      alt="Bifacial Solar Panels"
                      src="https://images.pexels.com/photos/7102661/pexels-photo-7102661.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                    <div className="product-card__dots">
                      <span className="active"></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="product-card__info">
                    <h4 className="product-card__name">
                      Bifacial Solar Panels
                    </h4>
                    <div className="product-card__price">
                      <span>₦1,200,000</span>
                    </div>
                    <div className="product-card__meta">
                      <span className="stock-dot"></span>
                      <span className="product-card__stock product-card__stock--limited">
                        Limited Stock
                      </span>
                      <div className="product-card__stars">
                        <span>★★★★☆</span>
                      </div>
                    </div>
                    <div className="product-card__actions">
                      <button
                        data-action="add-to-cart"
                        className="btn-sm button btn-accent btn"
                      >
                        Add to Cart
                      </button>
                      <button
                        data-action="quick-view"
                        className="btn-outline btn-sm button btn"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-category="batteries"
              className="products-marketplace__row"
            >
              <div className="products-marketplace__row-header">
                <h3 className="products-marketplace__row-title">
                  Batteries &amp; Energy Storage
                </h3>
                <Link href="/shop-solar-products">
                  <a>
                    <div className="products-marketplace__row-link">
                      <span>View All</span>
                    </div>
                  </a>
                </Link>
              </div>
              <div
                data-role="product-row"
                className="products-marketplace__track"
              >
                <div
                  data-price="450000"
                  data-stock="in-stock"
                  data-category="batteries"
                  data-product-id="battery-2-5"
                  className="product-card"
                >
                  <div className="product-card__img-box">
                    <img
                      alt="2.5kWh Lithium Battery"
                      src="https://images.pexels.com/photos/698485/pexels-photo-698485.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                    <div className="product-card__dots">
                      <span></span>
                      <span className="active"></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="product-card__info">
                    <h4 className="product-card__name">
                      2.5kWh Lithium Battery
                    </h4>
                    <div className="product-card__price">
                      <span>₦450,000</span>
                    </div>
                    <div className="product-card__meta">
                      <span className="stock-dot"></span>
                      <span className="product-card__stock--in product-card__stock">
                        {' '}
                        In Stock
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <div className="product-card__stars">
                        <span>★★★★★</span>
                      </div>
                    </div>
                    <div className="product-card__actions">
                      <button
                        data-action="add-to-cart"
                        className="btn-sm button btn-accent btn"
                      >
                        Add to Cart
                      </button>
                      <button
                        data-action="quick-view"
                        className="btn-outline btn-sm button btn"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  data-price="850000"
                  data-stock="in-stock"
                  data-category="batteries"
                  data-product-id="battery-5"
                  className="product-card"
                >
                  <div className="product-card__img-box">
                    <img
                      alt="5kWh Lithium Battery"
                      src="https://images.pexels.com/photos/3639037/pexels-photo-3639037.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                    <div className="product-card__dots">
                      <span></span>
                      <span></span>
                      <span className="active"></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="product-card__info">
                    <h4 className="product-card__name">5kWh Lithium Battery</h4>
                    <div className="product-card__price">
                      <span>₦850,000</span>
                    </div>
                    <div className="product-card__meta">
                      <span className="stock-dot"></span>
                      <span className="product-card__stock--in product-card__stock">
                        {' '}
                        In Stock
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <div className="product-card__stars">
                        <span>★★★★★</span>
                      </div>
                    </div>
                    <div className="product-card__actions">
                      <button
                        data-action="add-to-cart"
                        className="btn-sm button btn-accent btn"
                      >
                        Add to Cart
                      </button>
                      <button
                        data-action="quick-view"
                        className="btn-outline btn-sm button btn"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  data-price="1600000"
                  data-stock="limited"
                  data-category="batteries"
                  data-product-id="battery-10"
                  className="product-card"
                >
                  <div className="product-card__img-box">
                    <img
                      alt="10kWh Lithium Battery"
                      src="https://images.pexels.com/photos/33751638/pexels-photo-33751638.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                    <div className="product-card__dots">
                      <span className="active"></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="product-card__info">
                    <h4 className="product-card__name">
                      10kWh Lithium Battery
                    </h4>
                    <div className="product-card__price">
                      <span>₦1,600,000</span>
                    </div>
                    <div className="product-card__meta">
                      <span className="stock-dot"></span>
                      <span className="product-card__stock product-card__stock--limited">
                        {' '}
                        Limited Stock
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <div className="product-card__stars">
                        <span>★★★★☆</span>
                      </div>
                    </div>
                    <div className="product-card__actions">
                      <button
                        data-action="add-to-cart"
                        className="btn-sm button btn-accent btn"
                      >
                        Add to Cart
                      </button>
                      <button
                        data-action="quick-view"
                        className="btn-outline btn-sm button btn"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  data-price="450000"
                  data-stock="in-stock"
                  data-category="batteries"
                  data-product-id="battery-2-5"
                  className="product-card"
                >
                  <div className="product-card__img-box">
                    <img
                      alt="2.5kWh Lithium Battery"
                      src="https://images.pexels.com/photos/698485/pexels-photo-698485.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                    <div className="product-card__dots">
                      <span></span>
                      <span className="active"></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="product-card__info">
                    <h4 className="product-card__name">
                      2.5kWh Lithium Battery
                    </h4>
                    <div className="product-card__price">
                      <span>₦450,000</span>
                    </div>
                    <div className="product-card__meta">
                      <span className="stock-dot"></span>
                      <span className="product-card__stock--in product-card__stock">
                        In Stock
                      </span>
                      <div className="product-card__stars">
                        <span>★★★★★</span>
                      </div>
                    </div>
                    <div className="product-card__actions">
                      <button
                        data-action="add-to-cart"
                        className="btn-sm button btn-accent btn"
                      >
                        Add to Cart
                      </button>
                      <button
                        data-action="quick-view"
                        className="btn-outline btn-sm button btn"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  data-price="850000"
                  data-stock="in-stock"
                  data-category="batteries"
                  data-product-id="battery-5"
                  className="product-card"
                >
                  <div className="product-card__img-box">
                    <img
                      alt="5kWh Lithium Battery"
                      src="https://images.pexels.com/photos/3639037/pexels-photo-3639037.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                    <div className="product-card__dots">
                      <span></span>
                      <span></span>
                      <span className="active"></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="product-card__info">
                    <h4 className="product-card__name">5kWh Lithium Battery</h4>
                    <div className="product-card__price">
                      <span>₦850,000</span>
                    </div>
                    <div className="product-card__meta">
                      <span className="stock-dot"></span>
                      <span className="product-card__stock--in product-card__stock">
                        In Stock
                      </span>
                      <div className="product-card__stars">
                        <span>★★★★★</span>
                      </div>
                    </div>
                    <div className="product-card__actions">
                      <button
                        data-action="add-to-cart"
                        className="btn-sm button btn-accent btn"
                      >
                        Add to Cart
                      </button>
                      <button
                        data-action="quick-view"
                        className="btn-outline btn-sm button btn"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  data-price="1600000"
                  data-stock="limited"
                  data-category="batteries"
                  data-product-id="battery-10"
                  className="product-card"
                >
                  <div className="product-card__img-box">
                    <img
                      alt="10kWh Lithium Battery"
                      src="https://images.pexels.com/photos/33751638/pexels-photo-33751638.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                    <div className="product-card__dots">
                      <span className="active"></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="product-card__info">
                    <h4 className="product-card__name">
                      10kWh Lithium Battery
                    </h4>
                    <div className="product-card__price">
                      <span>₦1,600,000</span>
                    </div>
                    <div className="product-card__meta">
                      <span className="stock-dot"></span>
                      <span className="product-card__stock product-card__stock--limited">
                        Limited Stock
                      </span>
                      <div className="product-card__stars">
                        <span>★★★★☆</span>
                      </div>
                    </div>
                    <div className="product-card__actions">
                      <button
                        data-action="add-to-cart"
                        className="btn-sm button btn-accent btn"
                      >
                        Add to Cart
                      </button>
                      <button
                        data-action="quick-view"
                        className="btn-outline btn-sm button btn"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-category="inverters"
              className="products-marketplace__row"
            >
              <div className="products-marketplace__row-header">
                <h3 className="products-marketplace__row-title">
                  Inverters &amp; Accessories
                </h3>
                <Link href="/shop-solar-products">
                  <a>
                    <div className="products-marketplace__row-link">
                      <span>View All</span>
                    </div>
                  </a>
                </Link>
              </div>
              <div
                data-role="product-row"
                className="products-marketplace__track"
              >
                <div
                  data-price="320000"
                  data-stock="in-stock"
                  data-category="inverters"
                  data-product-id="inverter-3kva"
                  className="product-card"
                >
                  <div className="product-card__img-box">
                    <img
                      alt="3kVA Hybrid Inverter"
                      src="https://images.pexels.com/photos/33438229/pexels-photo-33438229.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                    <div className="product-card__dots">
                      <span></span>
                      <span className="active"></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="product-card__info">
                    <h4 className="product-card__name">3kVA Hybrid Inverter</h4>
                    <div className="product-card__price">
                      <span>₦320,000</span>
                    </div>
                    <div className="product-card__meta">
                      <span className="stock-dot"></span>
                      <span className="product-card__stock--in product-card__stock">
                        {' '}
                        In Stock
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <div className="product-card__stars">
                        <span>★★★★★</span>
                      </div>
                    </div>
                    <div className="product-card__actions">
                      <button
                        data-action="add-to-cart"
                        className="btn-sm button btn-accent btn"
                      >
                        Add to Cart
                      </button>
                      <button
                        data-action="quick-view"
                        className="btn-outline btn-sm button btn"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  data-price="520000"
                  data-stock="in-stock"
                  data-category="inverters"
                  data-product-id="inverter-5kva"
                  className="product-card"
                >
                  <div className="product-card__img-box">
                    <img
                      alt="5kVA Hybrid Inverter"
                      src="https://images.pexels.com/photos/33751639/pexels-photo-33751639.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                    <div className="product-card__dots">
                      <span></span>
                      <span></span>
                      <span className="active"></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="product-card__info">
                    <h4 className="product-card__name">5kVA Hybrid Inverter</h4>
                    <div className="product-card__price">
                      <span>₦520,000</span>
                    </div>
                    <div className="product-card__meta">
                      <span className="stock-dot"></span>
                      <span className="product-card__stock--in product-card__stock">
                        {' '}
                        In Stock
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <div className="product-card__stars">
                        <span>★★★★★</span>
                      </div>
                    </div>
                    <div className="product-card__actions">
                      <button
                        data-action="add-to-cart"
                        className="btn-sm button btn-accent btn"
                      >
                        Add to Cart
                      </button>
                      <button
                        data-action="quick-view"
                        className="btn-outline btn-sm button btn"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  data-price="950000"
                  data-stock="limited"
                  data-category="inverters"
                  data-product-id="inverter-10kva"
                  className="product-card"
                >
                  <div className="product-card__img-box">
                    <img
                      alt="10kVA Hybrid Inverter"
                      src="https://images.pexels.com/photos/11645013/pexels-photo-11645013.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                    <div className="product-card__dots">
                      <span className="active"></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="product-card__info">
                    <h4 className="product-card__name">
                      10kVA Hybrid Inverter
                    </h4>
                    <div className="product-card__price">
                      <span>₦950,000</span>
                    </div>
                    <div className="product-card__meta">
                      <span className="stock-dot"></span>
                      <span className="product-card__stock product-card__stock--limited">
                        {' '}
                        Limited Stock
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <div className="product-card__stars">
                        <span>★★★★☆</span>
                      </div>
                    </div>
                    <div className="product-card__actions">
                      <button
                        data-action="add-to-cart"
                        className="btn-sm button btn-accent btn"
                      >
                        Add to Cart
                      </button>
                      <button
                        data-action="quick-view"
                        className="btn-outline btn-sm button btn"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  data-price="85000"
                  data-stock="in-stock"
                  data-category="accessories"
                  data-product-id="controller-60a"
                  className="product-card"
                >
                  <div className="product-card__img-box">
                    <img
                      alt="60A MPPT Charge Controller"
                      src="https://images.pexels.com/photos/8853468/pexels-photo-8853468.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                    <div className="product-card__dots">
                      <span></span>
                      <span className="active"></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="product-card__info">
                    <h4 className="product-card__name">60A MPPT Controller</h4>
                    <div className="product-card__price">
                      <span>₦85,000</span>
                    </div>
                    <div className="product-card__meta">
                      <span className="stock-dot"></span>
                      <span className="product-card__stock--in product-card__stock">
                        {' '}
                        In Stock
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <div className="product-card__stars">
                        <span>★★★★★</span>
                      </div>
                    </div>
                    <div className="product-card__actions">
                      <button
                        data-action="add-to-cart"
                        className="btn-sm button btn-accent btn"
                      >
                        Add to Cart
                      </button>
                      <button
                        data-action="quick-view"
                        className="btn-outline btn-sm button btn"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  data-price="45000"
                  data-stock="in-stock"
                  data-category="accessories"
                  data-product-id="cable-solar"
                  className="product-card"
                >
                  <div className="product-card__img-box">
                    <img
                      alt="Solar Cables &amp; Connectors"
                      src="https://images.pexels.com/photos/8853526/pexels-photo-8853526.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                    <div className="product-card__dots">
                      <span className="active"></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="product-card__info">
                    <h4 className="product-card__name">
                      Solar Cables &amp; Connectors
                    </h4>
                    <div className="product-card__price">
                      <span>₦45,000</span>
                    </div>
                    <div className="product-card__meta">
                      <span className="stock-dot"></span>
                      <span className="product-card__stock--in product-card__stock">
                        {' '}
                        In Stock
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <div className="product-card__stars">
                        <span>★★★★☆</span>
                      </div>
                    </div>
                    <div className="product-card__actions">
                      <button
                        data-action="add-to-cart"
                        className="btn-sm button btn-accent btn"
                      >
                        Add to Cart
                      </button>
                      <button
                        data-action="quick-view"
                        className="btn-outline btn-sm button btn"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  data-price="120000"
                  data-stock="in-stock"
                  data-category="accessories"
                  data-product-id="mounting-kit"
                  className="product-card"
                >
                  <div className="product-card__img-box">
                    <img
                      alt="Mounting Structures Kit"
                      src="https://images.pexels.com/photos/15751134/pexels-photo-15751134.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                    <div className="product-card__dots">
                      <span></span>
                      <span></span>
                      <span className="active"></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="product-card__info">
                    <h4 className="product-card__name">
                      Mounting Structures Kit
                    </h4>
                    <div className="product-card__price">
                      <span>₦120,000</span>
                    </div>
                    <div className="product-card__meta">
                      <span className="stock-dot"></span>
                      <span className="product-card__stock--in product-card__stock">
                        {' '}
                        In Stock
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <div className="product-card__stars">
                        <span>★★★★★</span>
                      </div>
                    </div>
                    <div className="product-card__actions">
                      <button
                        data-action="add-to-cart"
                        className="btn-sm button btn-accent btn"
                      >
                        Add to Cart
                      </button>
                      <button
                        data-action="quick-view"
                        className="btn-outline btn-sm button btn"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            aria-label="Shopping Cart"
            data-action="toggle-cart"
            data-cart-fab="true"
            className="marketplace-cart-fab"
          >
            <svg
              width="22"
              xmlns="http://www.w3.org/2000/svg"
              height="22"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle r="1" cx="8" cy="21"></circle>
                <circle r="1" cx="19" cy="21"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </g>
            </svg>
            <span
              data-role="cart-count"
              className="home-thq-marketplace-cart-fabbadge-elm"
            >
              0
            </span>
          </button>
          <div
            data-role="cart-toast"
            aria-hidden="true"
            className="thq-cart-toast-elm"
          >
            <span className="home-thq-cart-toasticon-elm">✓</span>
            <span className="home-thq-cart-toasttext-elm">
              Product added to cart
            </span>
          </div>
          <div
            data-role="cart-drawer"
            aria-hidden="true"
            className="cart-drawer"
          >
            <div
              data-action="close-cart"
              className="home-thq-cart-draweroverlay-elm"
            ></div>
            <div className="home-thq-cart-drawerpanel-elm">
              <div className="home-thq-cart-drawerheader-elm">
                <div className="home-thq-cart-drawerheader-title-elm">
                  <h3 className="home-thq-cart-drawertitle-elm">
                    Shopping Cart
                  </h3>
                  <span
                    data-role="cart-items-count"
                    className="home-thq-cart-draweritem-count-elm"
                  >
                    0 items
                  </span>
                </div>
                <button
                  aria-label="Close cart"
                  data-action="close-cart"
                  className="cart-drawer__close"
                >
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18 6L6 18M6 6l12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                data-role="cart-items"
                className="home-thq-cart-draweritems-elm"
              >
                <div className="cart-drawer__empty">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                  </svg>
                  <p className="home-thq-cart-drawerempty-elm2">
                    Your cart is empty
                  </p>
                  <p className="home-thq-cart-drawerempty-text-elm">
                    Add products to continue shopping
                  </p>
                  <button
                    data-action="close-cart"
                    className="home-thq-btn-elm18 btn btn-primary btn-sm button"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
              <div className="home-thq-cart-drawersummary-elm">
                <div className="cart-summary__row">
                  <span>Subtotal</span>
                  <span data-role="cart-subtotal">₦0</span>
                </div>
                <div className="cart-summary__row">
                  <span>Estimated Delivery</span>
                  <span>₦5,000</span>
                </div>
                <div className="home-thq-cart-summaryrow-elm3 cart-summary__row">
                  <span>Total Amount</span>
                  <span data-role="cart-total">₦0</span>
                </div>
              </div>
              <div className="home-thq-cart-drawerform-elm">
                <div className="home-thq-cart-drawerform-title-elm">
                  <span>Customer Details</span>
                </div>
                <div className="cart-drawer__field">
                  <label>Full Name</label>
                  <input
                    type="text"
                    data-field="cart-name"
                    placeholder="Enter your full name"
                    className="input"
                  />
                </div>
                <div className="cart-drawer__field">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    data-field="cart-phone"
                    placeholder="Enter phone number"
                    className="input"
                  />
                </div>
                <div className="cart-drawer__field">
                  <label>Email Address</label>
                  <input
                    type="email"
                    data-field="cart-email"
                    placeholder="Enter email address"
                    className="input"
                  />
                </div>
                <div className="cart-drawer__field">
                  <label>Delivery Address</label>
                  <textarea
                    rows="2"
                    data-field="cart-address"
                    placeholder="Enter delivery address"
                    className="textarea"
                  ></textarea>
                </div>
                <div className="cart-drawer__field">
                  <label>Order Notes (Optional)</label>
                  <textarea
                    rows="2"
                    data-field="cart-notes"
                    placeholder="Any special instructions..."
                    className="textarea"
                  ></textarea>
                </div>
              </div>
              <div className="home-container11"></div>
            </div>
          </div>
          <div
            data-role="checkout-modal"
            aria-hidden="true"
            className="checkout-modal"
          >
            <div
              data-action="close-checkout"
              className="home-thq-checkout-modaloverlay-elm"
            ></div>
            <div className="home-thq-checkout-modalpanel-elm">
              <button
                aria-label="Close checkout"
                data-action="close-checkout"
                className="home-thq-checkout-modalclose-elm"
              >
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <div className="home-thq-checkout-modalcontent-elm">
                <div className="home-thq-checkout-form-elm">
                  <h3 className="home-thq-checkout-modaltitle-elm">
                    Secure Checkout
                  </h3>
                  <div className="checkout-form__field">
                    <label>Full Name</label>
                    <input
                      type="text"
                      data-field="name"
                      placeholder="Enter your full name"
                      className="input"
                    />
                  </div>
                  <div className="checkout-form__field">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      data-field="phone"
                      placeholder="Enter phone number"
                      className="input"
                    />
                  </div>
                  <div className="checkout-form__field">
                    <label>Email Address</label>
                    <input
                      type="email"
                      data-field="email"
                      placeholder="Enter email address"
                      className="input"
                    />
                  </div>
                  <div className="checkout-form__field">
                    <label>Delivery Address</label>
                    <textarea
                      rows="3"
                      data-field="address"
                      placeholder="Enter delivery address"
                      className="textarea"
                    ></textarea>
                  </div>
                  <div className="checkout-form__field">
                    <label>Order Notes (Optional)</label>
                    <textarea
                      rows="2"
                      data-field="notes"
                      placeholder="Any special instructions..."
                      className="textarea"
                    ></textarea>
                  </div>
                </div>
                <div className="checkout-summary">
                  <h4>Order Summary</h4>
                  <div
                    data-role="checkout-items"
                    className="home-thq-checkout-summaryitems-elm"
                  ></div>
                  <div>
                    <div className="checkout-summary__row">
                      <span>Subtotal</span>
                      <span data-role="checkout-subtotal">₦0</span>
                    </div>
                    <div className="checkout-summary__row">
                      <span>Delivery</span>
                      <span>₦5,000</span>
                    </div>
                    <div className="checkout-summary__row">
                      <span>Total</span>
                      <span data-role="checkout-total">₦0</span>
                    </div>
                  </div>
                  <div className="checkout-summary__meta">
                    <p>
                      {' '}
                      Order Ref:
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <span data-role="checkout-date">--</span>
                    <span data-role="checkout-ref">DO-0000</span>
                    <p>
                      {' '}
                      Date:
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                  <button
                    data-action="proceed-payment"
                    className="home-thq-btn-elm19 btn-accent btn"
                  >
                    Proceed to Secure Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            data-role="payment-success"
            aria-hidden="true"
            className="payment-result"
          >
            <div
              data-action="close-payment"
              className="payment-result__overlay"
            ></div>
            <div className="payment-result__panel">
              <div className="home-thq-payment-resulticon-elm1 payment-result__icon">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="payment-result__title">Payment Successful</h3>
              <p className="payment-result__text">
                Thank you for your purchase!
              </p>
              <div className="payment-result__details">
                <p>
                  {' '}
                  Order Ref:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <strong data-role="success-name">--</strong>
                <strong data-role="success-amount">₦0</strong>
                <strong data-role="success-ref">DO-0000</strong>
                <p>
                  {' '}
                  Amount Paid:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <p>
                  {' '}
                  Customer:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="payment-result__actions">
                <button
                  data-action="continue-shopping"
                  className="btn-primary btn"
                >
                  Continue Shopping
                </button>
                <Link href="/contact">
                  <a>
                    <div className="btn-outline btn">
                      <span>Contact Support</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            data-role="payment-failure"
            aria-hidden="true"
            className="payment-result"
          >
            <div
              data-action="close-payment"
              className="payment-result__overlay"
            ></div>
            <div className="payment-result__panel">
              <div className="home-thq-payment-resulticon-elm2 payment-result__icon">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="payment-result__title">Payment Incomplete</h3>
              <p className="payment-result__text">
                We couldn&apos;t process your payment. Please try again.
              </p>
              <div className="payment-result__actions">
                <button data-action="retry-payment" className="btn-accent btn">
                  Retry Payment
                </button>
                <Link href="/contact">
                  <a>
                    <div className="btn-outline btn">
                      <span>Contact Support</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="services-teaser">
          <div className="services-teaser__container">
            <h2 className="section-title">Premium Energy Solutions</h2>
            <div className="services-teaser__grid">
              <div className="services-teaser__card">
                <div className="services-teaser__icon">
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
                  Custom solar installations for homes, ensuring 24/7 power and
                  zero noise pollution.
                </p>
                <a href="#">
                  <div className="btn btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="services-teaser__card">
                <div className="services-teaser__icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4 6.28v11.44a1 1 0 0 0 1.243.97l6-1.5a1 1 0 0 0 .757-.97V7.78a1 1 0 0 0-.757-.97l-6-1.5A1 1 0 0 0 4 6.28M8 6v12m4-6H4m16-5l-3 5h4l-3 5"
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
                  Scalable energy solutions for businesses to reduce overhead
                  and increase reliability.
                </p>
                <a href="#">
                  <div className="btn btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="services-teaser__card">
                <div className="services-teaser__icon">
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
                  Premium high-capacity lithium storage for long-lasting backup
                  energy.
                </p>
                <a href="#">
                  <div className="btn btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="services-teaser__card">
                <div className="services-teaser__icon">
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
                      <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path>
                      <circle r="3" cx="12" cy="13"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">CCTV &amp; Security</h3>
                <p className="section-content">
                  Smart security surveillance and electric fencing for total
                  peace of mind.
                </p>
                <a href="#">
                  <div className="btn btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="services-teaser__card">
                <div className="services-teaser__icon">
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
                <h3 className="section-subtitle">Smart Home Integration</h3>
                <p className="section-content">
                  Automate your lifestyle with intelligent lighting and energy
                  management.
                </p>
                <a href="#">
                  <div className="btn btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="services-teaser__card">
                <div className="services-teaser__icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-8-5v4m0 4h.01"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Maintenance &amp; Support</h3>
                <p className="section-content">
                  Lifetime support and regular maintenance for all our energy
                  installations.
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
        <section className="lemoex-showcase">
          <div className="lemoex-showcase__container">
            <div className="lemoex-showcase__header">
              <h2 className="section-title">
                Lemoex Properties — Building Dreams Through Smart Investments
              </h2>
              <p className="section-content">
                Premium real estate development and trusted property investment
                opportunities across Nigeria.
              </p>
            </div>
            <div className="lemoex-showcase__grid">
              <div className="lemoex-showcase__card">
                <img
                  alt="Lands for Sale"
                  src="https://images.pexels.com/photos/36622005/pexels-photo-36622005.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="lemoex-showcase__img"
                />
                <div className="lemoex-showcase__content">
                  <h3 className="section-subtitle">Prime Lands for Sale</h3>
                  <p className="section-content">
                    Strategically located lands with verified C of O titles for
                    immediate development.
                  </p>
                  <div className="lemoex-showcase__stats">
                    <span>Verified Titles</span>
                    <span>Fast Appreciation</span>
                  </div>
                  <a href="#">
                    <div className="btn-sm btn-secondary btn">
                      <span>Book Inspection</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="lemoex-showcase__card">
                <img
                  alt="Housing Projects"
                  src="https://images.pexels.com/photos/32656347/pexels-photo-32656347.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="lemoex-showcase__img"
                />
                <div className="lemoex-showcase__content">
                  <h3 className="section-subtitle">Modern Housing Projects</h3>
                  <p className="section-content">
                    Luxury residential developments combining comfort with smart
                    energy features.
                  </p>
                  <div className="lemoex-showcase__stats">
                    <span>Solar Ready</span>
                    <span>Smart Security</span>
                  </div>
                  <a href="#">
                    <div className="btn-sm btn-secondary btn">
                      <span>View Listings</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="lemoex-showcase__card">
                <img
                  alt="Estate Development"
                  src="https://images.pexels.com/photos/37352207/pexels-photo-37352207.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="lemoex-showcase__img"
                />
                <div className="lemoex-showcase__content">
                  <h3 className="section-subtitle">Estate Development</h3>
                  <p className="section-content">
                    Comprehensive estate management and large-scale
                    infrastructure development.
                  </p>
                  <div className="lemoex-showcase__stats">
                    <span>Global Standards</span>
                    <span>Eco-Friendly</span>
                  </div>
                  <a href="#">
                    <div className="btn-sm btn-secondary btn">
                      <span>Partner With Us</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="projects-masonry">
          <div className="projects-masonry__container">
            <div className="projects-masonry__header">
              <h2 className="section-title">Featured Projects</h2>
              <div className="projects-masonry__filter">
                <button
                  data-filter="all"
                  className="active projects-masonry__filter-btn"
                >
                  All Projects
                </button>
                <button
                  data-filter="solar"
                  className="projects-masonry__filter-btn"
                >
                  Solar
                </button>
                <button
                  data-filter="realestate"
                  className="projects-masonry__filter-btn"
                >
                  Real Estate
                </button>
              </div>
            </div>
            <div className="projects-masonry__grid">
              <div data-category="solar" className="projects-masonry__item">
                <div className="projects-masonry__media">
                  <img
                    alt="Solar Project"
                    src="https://images.pexels.com/photos/13963757/pexels-photo-13963757.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                  <div className="projects-masonry__overlay">
                    <h3 className="section-subtitle">Industrial 50kW Array</h3>
                    <p className="section-content">Lagos Industrial Zone</p>
                  </div>
                </div>
              </div>
              <div
                data-category="realestate"
                className="projects-masonry__item"
              >
                <div className="projects-masonry__media">
                  <img
                    alt="Estate Project"
                    src="https://images.pexels.com/photos/17188088/pexels-photo-17188088.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                  <div className="projects-masonry__overlay">
                    <h3 className="section-subtitle">Lemoex View Estate</h3>
                    <p className="section-content">Abuja Phase 2</p>
                  </div>
                </div>
              </div>
              <div data-category="solar" className="projects-masonry__item">
                <div className="projects-masonry__media">
                  <img
                    alt="Residential Solar"
                    src="https://images.pexels.com/photos/31912311/pexels-photo-31912311.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                  <div className="projects-masonry__overlay">
                    <h3 className="section-subtitle">Luxury Villa Solar</h3>
                    <p className="section-content">Lekki Residence</p>
                  </div>
                </div>
              </div>
              <div
                data-category="realestate"
                className="projects-masonry__item"
              >
                <div className="projects-masonry__media">
                  <img
                    alt="Urban Project"
                    src="https://images.pexels.com/photos/36622014/pexels-photo-36622014.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                  <div className="projects-masonry__overlay">
                    <h3 className="section-subtitle">Smart City Hub</h3>
                    <p className="section-content">Port Harcourt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-testimonials-carousel">
          <div className="testimonials-carousel__container">
            <div className="testimonials-carousel__icon">
              <svg
                width="48"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 5a2 2 0 0 1 2 2v6c0 3.13-1.65 5.193-4.757 5.97a1 1 0 1 1-.486-1.94C7.984 16.473 9 15.203 9 13v-1H6a2 2 0 0 1-1.995-1.85L4 10V7a2 2 0 0 1 2-2zm9 0a2 2 0 0 1 2 2v6c0 3.13-1.65 5.193-4.757 5.97a1 1 0 1 1-.486-1.94C16.984 16.473 18 15.203 18 13v-1h-3a2 2 0 0 1-1.995-1.85L13 10V7a2 2 0 0 1 2-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div id="testimonialTrack" className="testimonials-carousel__track">
              <div className="active testimonials-carousel__slide">
                <p className="testimonials-carousel__text">
                  &quot;DON OCH GLOBAL transformed our business operations. The
                  50kW solar installation has completely eliminated our reliance
                  on generators. Truly world-class service.&quot;
                </p>
                <div className="testimonials-carousel__author">
                  <div className="testimonials-carousel__info">
                    <span className="testimonials-carousel__name">
                      Engr. Chidi Eze
                    </span>
                    <span className="testimonials-carousel__role">
                      CEO, TechHub Nigeria
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonials-carousel__slide">
                <p className="testimonials-carousel__text">
                  &quot;Investing in Lemoex Properties was the best decision for
                  our family portfolio. The transparency and professionalism are
                  unmatched in the Nigerian real estate market.&quot;
                </p>
                <div className="testimonials-carousel__author">
                  <div className="testimonials-carousel__info">
                    <span className="testimonials-carousel__name">
                      Mrs. Adeola Bakare
                    </span>
                    <span className="testimonials-carousel__role">
                      Property Investor
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonials-carousel__slide">
                <p className="testimonials-carousel__text">
                  &quot;The lithium battery and inverter setup from DON OCH
                  GLOBAL powers our entire factory floor without a single
                  outage. Their engineering team is exceptional.&quot;
                </p>
                <div className="testimonials-carousel__author">
                  <div className="testimonials-carousel__info">
                    <span className="testimonials-carousel__name">
                      Alhaji Musa Ibrahim
                    </span>
                    <span className="testimonials-carousel__role">
                      MD, Northern Textiles Ltd
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonials-carousel__slide">
                <p className="testimonials-carousel__text">
                  &quot;From CCTV installation to solar street lights, DON OCH
                  GLOBAL handled everything for our estate. Security and power
                  have never been better.&quot;
                </p>
                <div className="testimonials-carousel__author">
                  <div className="testimonials-carousel__info">
                    <span className="testimonials-carousel__name">
                      Dr. Ngozi Okonkwo
                    </span>
                    <span className="testimonials-carousel__role">
                      Estate Developer, Abuja
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonials-carousel__slide">
                <p className="testimonials-carousel__text">
                  &quot;Lemoex Properties guided us through every step of
                  acquiring land in a prime location. Their after-sales support
                  is as impressive as their listings.&quot;
                </p>
                <div className="testimonials-carousel__author">
                  <div className="testimonials-carousel__info">
                    <span className="testimonials-carousel__name">
                      Mr. Femi Adeyemi
                    </span>
                    <span className="testimonials-carousel__role">
                      First-Time Land Buyer
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonials-carousel__dots">
              <button
                data-target="0"
                className="active testimonials-carousel__dot"
              ></button>
              <button
                data-target="1"
                className="testimonials-carousel__dot"
              ></button>
              <button
                data-target="2"
                className="button testimonials-carousel__dot"
              ></button>
              <button
                data-target="3"
                className="button testimonials-carousel__dot"
              ></button>
              <button
                data-target="4"
                className="button testimonials-carousel__dot"
              ></button>
            </div>
          </div>
        </section>
        <section className="contact-cta">
          <div className="contact-cta__container">
            <div className="contact-cta__content">
              <h2 className="section-title">Ready to Power Your Future?</h2>
              <p className="section-content">
                Get a customized solar quote or book a property inspection
                today. Our team is ready to assist you.
              </p>
              <div className="contact-cta__shortcuts">
                <div className="contact-cta__item">
                  <span className="contact-cta__label">Call Us</span>
                  <a
                    href="tel:+2349132371332"
                    className="home-thq-contact-ctavalue-elm1 contact-cta__value"
                  >
                    +2349132371332
                  </a>
                </div>
                <a href="mailto:info@donochglobal.com?subject=Hello DON OCH Global">
                  <div className="home-thq-contact-ctaitem-elm2 contact-cta__item">
                    <span className="contact-cta__label">Email Us</span>
                    <span className="contact-cta__value">
                      info@donochglobal.com
                    </span>
                  </div>
                </a>
              </div>
              <div className="contact-cta__actions">
                <a href="https://wa.me/2349132371332">
                  <div className="btn-accent btn btn-lg">
                    <span>Chat on WhatsApp</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="contact-cta__form-box">
              <form
                action="/submit"
                method="POST"
                data-form-id="e0e47412-05ca-4ebc-adae-fb640ea19192"
                className="contact-cta__form"
              >
                <div className="contact-cta__field">
                  <input
                    type="text"
                    id="thq_textinput_31D7"
                    name="textinput"
                    required="true"
                    placeholder="Full Name"
                    data-form-field-id="thq_textinput_31D7"
                    className="contact-cta__input"
                  />
                </div>
                <div className="contact-cta__field contact-cta__field--phone">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                  <input
                    type="tel"
                    id="thq_textinput_phone"
                    name="phone"
                    required="true"
                    placeholder="Phone Number"
                    data-form-field-id="thq_textinput_phone"
                    className="input contact-cta__input"
                  />
                </div>
                <div className="contact-cta__field">
                  <input
                    type="email"
                    id="thq_textinput_a-Dc"
                    name="textinput"
                    required="true"
                    placeholder="Email Address"
                    data-form-field-id="thq_textinput_a-Dc"
                    className="contact-cta__input"
                  />
                </div>
                <div className="contact-cta__field">
                  <select
                    id="thq_select_8lCr"
                    name="select"
                    required="true"
                    data-form-field-id="thq_select_8lCr"
                    className="contact-cta__input"
                  >
                    <option value="true">Interested In...</option>
                    <option value="solar">Solar Solutions</option>
                    <option value="property">Lemoex Properties</option>
                    <option value="both">Both</option>
                  </select>
                </div>
                <div className="contact-cta__field">
                  <textarea
                    id="thq_textarea_NSSG"
                    name="textarea"
                    required="true"
                    placeholder="Your Message"
                    data-form-field-id="thq_textarea_NSSG"
                    className="contact-cta__input contact-cta__textarea"
                  ></textarea>
                </div>
                <button
                  id="thq_button_9sxf"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_9sxf"
                  className="btn-xl btn-primary btn"
                >
                  Request Quote
                </button>
              </form>
            </div>
          </div>
        </section>
        <div className="home-container12">
          <div className="home-container13">
            <Script
              html={`<script>
        ;(function () {
          // Hero Carousel Logic
          const initHero = () => {
            const slides = document.querySelectorAll(".hero-carousel__slide")
            const dots = document.querySelectorAll(".hero-carousel__dot")
            let current = 0
            const showSlide = (index) => {
              slides.forEach((s) => s.classList.remove("active"))
              dots.forEach((d) => d.classList.remove("active"))
              slides[index].classList.add("active")
              dots[index].classList.add("active")
              current = index
            }
            dots.forEach((dot) => {
              dot.addEventListener("click", () => {
                showSlide(parseInt(dot.dataset.target))
              })
            })
            setInterval(() => {
              let next = (current + 1) % slides.length
              showSlide(next)
            }, 7000)
          }
          // Counter Animation
          const initCounters = () => {
            const observer = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    const target = entry.target
                    const countTo = parseInt(target.dataset.count)
                    let current = 0
                    const duration = 2000
                    const increment = countTo / (duration / 16)
                    const update = () => {
                      current += increment
                      if (current < countTo) {
                        target.innerText = Math.floor(current).toLocaleString() + (countTo > 100 ? "+" : "")
                        requestAnimationFrame(update)
                      } else {
                        target.innerText = countTo.toLocaleString() + (countTo > 100 ? "+" : "")
                      }
                    }
                    update()
                    observer.unobserve(target)
                  }
                })
              },
              { threshold: 0.5 }
            )
            document.querySelectorAll(".about-impact__number").forEach((n) => observer.observe(n))
          }
          // Product Rail Navigation
          // Product Rail Navigation
          const initRail = () => {
            document.querySelectorAll('[data-role="product-row"]').forEach((track) => {
              const cards = track.querySelectorAll(".product-card")
              if (!cards.length) return
              const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(track).gap || 16)
              let autoScrollInterval
              let touchStartX = 0
              let touchEndX = 0
              let isHovered = false
              const startAutoScroll = () => {
                autoScrollInterval = setInterval(() => {
                  if (isHovered) return
                  const maxScroll = track.scrollWidth - track.clientWidth
                  if (track.scrollLeft >= maxScroll - 5) {
                    track.scrollTo({ left: 0, behavior: "smooth" })
                  } else {
                    track.scrollBy({ left: cardWidth, behavior: "smooth" })
                  }
                }, 4000)
              }
              const stopAutoScroll = () => {
                clearInterval(autoScrollInterval)
              }
              track.addEventListener("mouseenter", () => {
                isHovered = true
                stopAutoScroll()
              })
              track.addEventListener("mouseleave", () => {
                isHovered = false
                startAutoScroll()
              })
              track.addEventListener(
                "touchstart",
                (e) => {
                  touchStartX = e.changedTouches[0].screenX
                  stopAutoScroll()
                },
                { passive: true }
              )
              track.addEventListener(
                "touchend",
                (e) => {
                  touchEndX = e.changedTouches[0].screenX
                  const diff = touchStartX - touchEndX
                  if (Math.abs(diff) > 40) {
                    if (diff > 0) {
                      track.scrollBy({ left: cardWidth, behavior: "smooth" })
                    } else {
                      track.scrollBy({ left: -cardWidth, behavior: "smooth" })
                    }
                  }
                  startAutoScroll()
                },
                { passive: true }
              )
              track.addEventListener(
                "touchmove",
                (e) => {
                  e.stopPropagation()
                },
                { passive: true }
              )
              startAutoScroll()
            })
          }
          // Modern Mini-Cart System
          const initMarketplace = () => {
            const STORAGE_KEY = "donoch_cart_v1"
            let cart = []
            const cartFab = document.querySelector('[data-action="toggle-cart"]')
            const cartDrawer = document.querySelector('[data-role="cart-drawer"]')
            // Dynamic cart FAB positioning based on header height
            const updateCartFabPosition = () => {
              if (!cartFab) return
              const nav = document.getElementById("main-nav")
              if (!nav) return
              const navRect = nav.getBoundingClientRect()
              const headerHeight = navRect.height || nav.offsetHeight || 0
              const scrollY = window.scrollY || window.pageYOffset || 0
              // When nav is sticky/fixed at top, use its rendered height + offset
              const cartTopPosition = Math.max(headerHeight + 12, 72)
              cartFab.style.top = cartTopPosition + "px"
              cartFab.style.bottom = "auto"
            }
            // Initial position
            updateCartFabPosition()
            // Recalculate on scroll and resize
            window.addEventListener("scroll", updateCartFabPosition, { passive: true })
            window.addEventListener("resize", updateCartFabPosition, { passive: true })
            // Also update when nav class changes (scrolled state)
            const navObserver = new MutationObserver(updateCartFabPosition)
            const navEl = document.getElementById("main-nav")
            if (navEl) {
              navObserver.observe(navEl, { attributes: true, attributeFilter: ["class", "style"] })
            }
            const cartItems = document.querySelector('[data-role="cart-items"]')
            const cartCount = document.querySelector('[data-role="cart-count"]')
            const cartItemsCount = document.querySelector('[data-role="cart-items-count"]')
            const cartSubtotal = document.querySelector('[data-role="cart-subtotal"]')
            const cartTotal = document.querySelector('[data-role="cart-total"]')
            const cartTotalBtn = document.querySelector('[data-role="cart-total-btn"]')
            const cartToast = document.querySelector('[data-role="cart-toast"]')
            const checkoutModal = document.querySelector('[data-role="checkout-modal"]')
            const paymentSuccess = document.querySelector('[data-role="payment-success"]')
            const paymentFailure = document.querySelector('[data-role="payment-failure"]')
            const formatPrice = (n) => "\u20A6" + n.toLocaleString()
            const genRef = () => "DO-" + Math.floor(1000 + Math.random() * 9000)
            const loadCart = () => {
              try {
                const raw = localStorage.getItem(STORAGE_KEY)
                if (raw) {
                  const parsed = JSON.parse(raw)
                  if (Array.isArray(parsed)) cart = parsed
                }
              } catch (e) {
                cart = []
              }
            }
            const saveCart = () => {
              try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
              } catch (e) {}
            }
            const updateFabVisibility = () => {
              if (!cartFab) return
              const totalQty = cart.reduce((s, i) => s + i.qty, 0)
              if (totalQty > 0) {
                cartFab.classList.add("is-visible")
                // Ensure position is correct when becoming visible
                updateCartFabPosition()
              } else {
                cartFab.classList.remove("is-visible")
              }
            }
            const showToast = (message) => {
              if (!cartToast) return
              const textEl = cartToast.querySelector(".thq-cart-toasttext-elm")
              if (textEl) textEl.textContent = message
              cartToast.setAttribute("aria-hidden", "false")
              cartToast.classList.add("cart-toast--visible")
              setTimeout(() => {
                cartToast.classList.remove("cart-toast--visible")
                cartToast.setAttribute("aria-hidden", "true")
              }, 2500)
            }
            const animateCartIcon = () => {
              if (!cartFab) return
              cartFab.classList.add("cart-bounce")
              setTimeout(() => cartFab.classList.remove("cart-bounce"), 400)
            }
            const updateCart = () => {
              const totalQty = cart.reduce((s, i) => s + i.qty, 0)
              const sub = cart.reduce((s, i) => s + i.price * i.qty, 0)
              if (cartCount) cartCount.textContent = totalQty
              if (cartItemsCount) cartItemsCount.textContent = totalQty + (totalQty === 1 ? " item" : " items")
              if (cartSubtotal) cartSubtotal.textContent = formatPrice(sub)
              if (cartTotal) cartTotal.textContent = formatPrice(sub + 5000)
              if (cartTotalBtn) cartTotalBtn.textContent = formatPrice(sub + 5000)
              updateFabVisibility()
              saveCart()
              if (!cart.length) {
                if (cartItems) {
                  cartItems.innerHTML = \`
                              <div class="cart-drawer__empty">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                  <circle cx="9" cy="21" r="1"></circle>
                                  <circle cx="20" cy="21" r="1"></circle>
                                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                                </svg>
                                <p class="cart-drawer__empty-title">Your cart is empty</p>
                                <p class="cart-drawer__empty-text">Add products to continue shopping</p>
                                <button data-action="close-cart" class="btn btn-primary btn-sm cart-drawer__empty-btn">Continue Shopping</button>
                              </div>
                            \`
                  cartItems.querySelectorAll('[data-action="close-cart"]').forEach((btn) => {
                    btn.addEventListener("click", () => {
                      if (cartDrawer) cartDrawer.setAttribute("aria-hidden", "true")
                    })
                  })
                }
              } else {
                if (cartItems) {
                  cartItems.innerHTML = cart
                    .map(
                      (item, idx) => \`
                                <div class="cart-item">
                                  <img class="cart-item__thumb" src="\\\\\${item.image}" alt="\\\\\${item.name}" />
                                  <div class="cart-item__info">
                                    <div class="cart-item__name">\\\\\${item.name}</div>
                                    <div class="cart-item__price">\\\\\${formatPrice(item.price)} &times; \\\\\${item.qty}</div>
                                    <div class="cart-item__subtotal">\\\\\${formatPrice(item.price * item.qty)}</div>
                                  </div>
                                  <div class="cart-item__qty">
                                    <button class="cart-item__qty-btn" data-idx="\\\\\${idx}" data-delta="-1" aria-label="Decrease quantity">-</button>
                                    <span class="cart-item__qty-value">\\\\\${item.qty}</span>
                                    <button class="cart-item__qty-btn" data-idx="\\\\\${idx}" data-delta="1" aria-label="Increase quantity">+</button>
                                  </div>
                                  <button class="cart-item__remove" data-remove="\\\\\${idx}" aria-label="Remove item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                                  </button>
                                </div>
                              \`
                    )
                    .join("")
                  cartItems.querySelectorAll("[data-delta]").forEach((btn) => {
                    btn.addEventListener("click", () => {
                      const idx = parseInt(btn.dataset.idx)
                      const delta = parseInt(btn.dataset.delta)
                      cart[idx].qty += delta
                      if (cart[idx].qty <= 0) cart.splice(idx, 1)
                      updateCart()
                    })
                  })
                  cartItems.querySelectorAll("[data-remove]").forEach((btn) => {
                    btn.addEventListener("click", () => {
                      cart.splice(parseInt(btn.dataset.remove), 1)
                      updateCart()
                    })
                  })
                }
              }
            }
            const addToCart = (card) => {
              const id = card.dataset.productId
              const name = card.querySelector(".product-card__name").textContent.trim()
              const priceText = card.querySelector(".product-card__price").textContent
              const price = parseInt(priceText.replace(/[^0-9]/g, ""))
              const image = card.querySelector("img").src
              const existing = cart.find((i) => i.id === id)
              if (existing) {
                existing.qty++
              } else {
                cart.push({ id, name, price, image, qty: 1 })
              }
              updateCart()
              animateCartIcon()
              showToast(\`\u2713 \\\\\${name} added to cart\`)
            }
            document.querySelectorAll('[data-action="add-to-cart"]').forEach((btn) => {
              btn.addEventListener("click", (e) => {
                e.stopPropagation()
                const card = btn.closest(".product-card")
                if (card) addToCart(card)
              })
            })
            const cartCheckoutBtn = document.querySelector('[data-role="cart-checkout-btn"]')
            let isCartOpen = false
            let bodyOverflow = ""
            const closeCartDrawer = () => {
              isCartOpen = false
              if (cartDrawer) {
                cartDrawer.setAttribute("aria-hidden", "true")
                cartDrawer.setAttribute("data-state", "closed")
              }
              document.body.style.overflow = bodyOverflow || ""
            }
            const openCartDrawer = () => {
              isCartOpen = true
              bodyOverflow = document.body.style.overflow || ""
              if (cartDrawer) {
                cartDrawer.setAttribute("aria-hidden", "false")
                cartDrawer.setAttribute("data-state", "open")
              }
              document.body.style.overflow = "hidden"
            }
            document.querySelectorAll('[data-action="close-cart"]').forEach((el) => {
              el.addEventListener("click", closeCartDrawer)
            })
            if (cartFab) {
              cartFab.addEventListener("click", openCartDrawer)
            }
            if (cartDrawer) {
              cartDrawer.addEventListener("click", (e) => {
                if (e.target === cartDrawer || e.target.classList.contains("thq-cart-draweroverlay-elm") || e.target.dataset.action === "close-cart") {
                  closeCartDrawer()
                }
              })
            }
            document.addEventListener("keydown", (e) => {
              if (e.key === "Escape" && isCartOpen) {
                closeCartDrawer()
              }
            })
            // Initialize: load from storage and render
            loadCart()
            updateCart()
            document.querySelectorAll('[data-action="checkout"]').forEach((btn) => {
              btn.addEventListener("click", () => {
                if (!cart.length) return
                closeCartDrawer()
                // Sync cart drawer form fields to checkout modal
                const cartName = document.querySelector('[data-field="cart-name"]')
                const cartPhone = document.querySelector('[data-field="cart-phone"]')
                const cartEmail = document.querySelector('[data-field="cart-email"]')
                const cartAddress = document.querySelector('[data-field="cart-address"]')
                const cartNotes = document.querySelector('[data-field="cart-notes"]')
                const checkoutName = document.querySelector('[data-field="name"]')
                const checkoutPhone = document.querySelector('[data-field="phone"]')
                const checkoutEmail = document.querySelector('[data-field="email"]')
                const checkoutAddress = document.querySelector('[data-field="address"]')
                const checkoutNotes = document.querySelector('[data-field="notes"]')
                if (checkoutName && cartName) checkoutName.value = cartName.value
                if (checkoutPhone && cartPhone) checkoutPhone.value = cartPhone.value
                if (checkoutEmail && cartEmail) checkoutEmail.value = cartEmail.value
                if (checkoutAddress && cartAddress) checkoutAddress.value = cartAddress.value
                if (checkoutNotes && cartNotes) checkoutNotes.value = cartNotes.value
                const items = document.querySelector('[data-role="checkout-items"]')
                if (items) {
                  items.innerHTML = cart
                    .map(
                      (i) => \`
                                <div class="checkout-summary__item"><span>\\\\\${i.name} \u00D7 \\\\\${i.qty}</span><span>\\\\\${formatPrice(i.price * i.qty)}</span></div>
                              \`
                    )
                    .join("")
                }
                const sub = cart.reduce((s, i) => s + i.price * i.qty, 0)
                const checkoutSub = document.querySelector('[data-role="checkout-subtotal"]')
                const checkoutTot = document.querySelector('[data-role="checkout-total"]')
                const checkoutRef = document.querySelector('[data-role="checkout-ref"]')
                const checkoutDate = document.querySelector('[data-role="checkout-date"]')
                if (checkoutSub) checkoutSub.textContent = formatPrice(sub)
                if (checkoutTot) checkoutTot.textContent = formatPrice(sub + 5000)
                if (checkoutRef) checkoutRef.textContent = genRef()
                if (checkoutDate) checkoutDate.textContent = new Date().toLocaleString()
                if (checkoutModal) checkoutModal.setAttribute("aria-hidden", "false")
              })
            })
            document.querySelectorAll('[data-action="close-checkout"]').forEach((el) => {
              el.addEventListener("click", () => {
                if (checkoutModal) checkoutModal.setAttribute("aria-hidden", "true")
              })
            })
            document.querySelectorAll('[data-action="proceed-payment"]').forEach((btn) => {
              btn.addEventListener("click", () => {
                const nameField = document.querySelector('[data-field="name"]')
                const phoneField = document.querySelector('[data-field="phone"]')
                const emailField = document.querySelector('[data-field="email"]')
                const addressField = document.querySelector('[data-field="address"]')
                const name = nameField?.value?.trim() || "Guest"
                const phone = phoneField?.value?.trim() || ""
                const email = emailField?.value?.trim() || ""
                const address = addressField?.value?.trim() || ""
                if (!name || !phone || !email || !address) {
                  alert("Please fill in all required fields: Name, Phone, Email, and Delivery Address.")
                  return
                }
                const sub = cart.reduce((s, i) => s + i.price * i.qty, 0)
                const total = sub + 5000
                const ref = genRef()
                // Generate order summary
                const orderSummary = {
                  orderNumber: ref,
                  customerName: name,
                  customerPhone: phone,
                  customerEmail: email,
                  deliveryAddress: address,
                  products: cart.map((i) => ({ name: i.name, qty: i.qty, price: i.price, subtotal: i.price * i.qty })),
                  subtotal: sub,
                  delivery: 5000,
                  totalAmount: total,
                  dateTime: new Date().toISOString(),
                }
                // Flutterwave integration
                const flutterwaveConfig = {
                  public_key: "FLWPUBK_TEST-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-X", // Replace with live key
                  tx_ref: ref,
                  amount: total,
                  currency: "NGN",
                  payment_options: "card,ussd,banktransfer,mpesa",
                  customer: {
                    email: email,
                    phone_number: phone,
                    name: name,
                  },
                  customizations: {
                    title: "DON OCH GLOBAL",
                    description: "Solar Products Purchase",
                    logo: "https://your-logo-url.com/logo.png",
                  },
                  callback: function (payment) {
                    if (checkoutModal) checkoutModal.setAttribute("aria-hidden", "true")
                    const successRef = document.querySelector('[data-role="success-ref"]')
                    const successAmt = document.querySelector('[data-role="success-amount"]')
                    const successName = document.querySelector('[data-role="success-name"]')
                    if (successRef) successRef.textContent = ref
                    if (successAmt) successAmt.textContent = formatPrice(total)
                    if (successName) successName.textContent = name
                    if (paymentSuccess) paymentSuccess.setAttribute("aria-hidden", "false")
                    cart.length = 0
                    updateCart()
                  },
                  onclose: function () {
                    // User closed payment modal
                  },
                }
                // For demo: simulate payment flow
                if (checkoutModal) checkoutModal.setAttribute("aria-hidden", "true")
                if (Math.random() > 0.05) {
                  const successRef = document.querySelector('[data-role="success-ref"]')
                  const successAmt = document.querySelector('[data-role="success-amount"]')
                  const successName = document.querySelector('[data-role="success-name"]')
                  if (successRef) successRef.textContent = ref
                  if (successAmt) successAmt.textContent = formatPrice(total)
                  if (successName) successName.textContent = name
                  if (paymentSuccess) paymentSuccess.setAttribute("aria-hidden", "false")
                  cart.length = 0
                  updateCart()
                } else {
                  if (paymentFailure) paymentFailure.setAttribute("aria-hidden", "false")
                }
              })
            })
            document.querySelectorAll('[data-action="retry-payment"]').forEach((btn) => {
              btn.addEventListener("click", () => {
                if (paymentFailure) paymentFailure.setAttribute("aria-hidden", "true")
                if (checkoutModal) checkoutModal.setAttribute("aria-hidden", "false")
              })
            })
            document.querySelectorAll('[data-action="continue-shopping"]').forEach((btn) => {
              btn.addEventListener("click", () => {
                if (paymentSuccess) paymentSuccess.setAttribute("aria-hidden", "true")
              })
            })
            document.querySelectorAll('[data-action="close-payment"]').forEach((el) => {
              el.addEventListener("click", () => {
                if (paymentSuccess) paymentSuccess.setAttribute("aria-hidden", "true")
                if (paymentFailure) paymentFailure.setAttribute("aria-hidden", "true")
              })
            })
            // Filter functionality
            document.querySelectorAll("[data-filter]").forEach((filter) => {
              filter.addEventListener("change", () => {
                const cat = document.querySelector('[data-filter="category"]')?.value || "all"
                const search = (document.querySelector('[data-filter="search"]')?.value || "").toLowerCase()
                document.querySelectorAll(".products-marketplace__row").forEach((row) => {
                  const rowCat = row.dataset.category
                  const showRow = cat === "all" || cat === rowCat
                  row.style.display = showRow ? "" : "none"
                })
                document.querySelectorAll(".product-card").forEach((card) => {
                  const name = card.querySelector(".product-card__name").textContent.toLowerCase()
                  const matchesSearch = !search || name.includes(search)
                  const parentRow = card.closest(".products-marketplace__row")
                  const rowCat = parentRow.dataset.category
                  const showCat = cat === "all" || cat === rowCat
                  card.style.display = matchesSearch && showCat ? "" : "none"
                })
              })
            })
            document.querySelector('[data-filter="search"]')?.addEventListener("input", () => {
              document.querySelector('[data-filter="category"]')?.dispatchEvent(new Event("change"))
            })
          }
          // Project Filtering
          const initFilters = () => {
            const buttons = document.querySelectorAll(".projects-masonry__filter-btn")
            const items = document.querySelectorAll(".projects-masonry__item")
            buttons.forEach((btn) => {
              btn.addEventListener("click", () => {
                buttons.forEach((b) => b.classList.remove("active"))
                btn.classList.add("active")
                const filter = btn.dataset.filter
                items.forEach((item) => {
                  if (filter === "all" || item.dataset.category === filter) {
                    item.style.display = "block"
                  } else {
                    item.style.display = "none"
                  }
                })
              })
            })
          }
          // Testimonial Carousel
          const initTestimonials = () => {
            const track = document.getElementById("testimonialTrack")
            const slides = document.querySelectorAll(".testimonials-carousel__slide")
            const dots = document.querySelectorAll(".testimonials-carousel__dot")
            let current = 0
            let autoPlayInterval
            let touchStartX = 0
            let touchEndX = 0
            const total = slides.length
            const show = (idx) => {
              slides.forEach((s) => s.classList.remove("active"))
              dots.forEach((d) => d.classList.remove("active"))
              slides[idx].classList.add("active")
              dots[idx].classList.add("active")
              current = idx
            }
            const next = () => show((current + 1) % total)
            const prev = () => show((current - 1 + total) % total)
            const startAutoPlay = () => {
              autoPlayInterval = setInterval(next, 6000)
            }
            const stopAutoPlay = () => {
              clearInterval(autoPlayInterval)
            }
            dots.forEach((dot) => {
              dot.addEventListener("click", () => {
                stopAutoPlay()
                show(parseInt(dot.dataset.target))
                startAutoPlay()
              })
            })
            if (track) {
              track.addEventListener(
                "touchstart",
                (e) => {
                  touchStartX = e.changedTouches[0].screenX
                  stopAutoPlay()
                },
                { passive: true }
              )
              track.addEventListener(
                "touchend",
                (e) => {
                  touchEndX = e.changedTouches[0].screenX
                  const diff = touchStartX - touchEndX
                  if (Math.abs(diff) > 40) {
                    if (diff > 0) next()
                    else prev()
                  }
                  startAutoPlay()
                },
                { passive: true }
              )
              track.addEventListener("mouseenter", stopAutoPlay)
              track.addEventListener("mouseleave", startAutoPlay)
            }
            startAutoPlay()
          }
          // Initialize all
          initHero()
          initCounters()
          initRail()
          initMarketplace()
          initFilters()
          initTestimonials()
        })()
      </script>`}
            ></Script>
          </div>
        </div>
        <div className="home-container14">
          <div className="home-container15">
            <Script
              html={`<script>
(function(){
    ;(function () {
      // Intersection Observer for solutions showcase cards
      const observerOptions = {
        root: null,
        rootMargin: "0px 0px -50px 0px",
        threshold: 0.1,
      }
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("is-visible")
            }, index * 100)
            observer.unobserve(entry.target)
          }
        })
      }, observerOptions)
      document.querySelectorAll(".solutions-showcase__card").forEach((card) => {
        observer.observe(card)
      })
    })()
  })()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
        <a
          href="https://wa.me/09132371332"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Message DON OCH on WhatsApp"
            className="whatsapp-float-btn"
          >
            <span className="whatsapp-float-tooltip">
              Message DON OCH on WhatsApp
            </span>
            <svg
              fill="none"
              width="28"
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
            </svg>
          </div>
        </a>
        <div>
          <div className="home-container17">
            <Script
              html={`<style>
@keyframes fadeInUp {
from {
  opacity: 0;
  transform: translateY(30px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div>
          <div className="home-container19">
            <Script
              html={`<style>
@keyframes cartBounce {
0% {
  transform: scale(1);
}
30% {
  transform: scale(1.25);
}
60% {
  transform: scale(0.95);
}
100% {
  transform: scale(1);
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div>
          <div className="home-container21">
            <Script
              html={`<style>
@keyframes cartBounce {
0% {
  transform: scale(1);
}
30% {
  transform: scale(1.2);
}
50% {
  transform: scale(0.95);
}
70% {
  transform: scale(1.05);
}
100% {
  transform: scale(1);
}
}
</style>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container10 {
            width: 100%;
            min-height: 100vh;
          }
          .home-thq-hero-carouselbg-wrap-elm2 {
            background-size: cover;
            background-image: url('/hero-solar-commercial-installation-1500w.jpg');
            background-position: center;
          }
          .home-thq-solutions-showcase-elm {
            padding: 80px 0;
            background: linear-gradient(180deg, #fffcf7 0%, #f5f0e8 100%);
            margin-top: 2rem;
          }
          .home-thq-solutions-showcasecontainer-elm {
            margin: 0 auto;
            padding: 0 var(--spacing-xl);
            max-width: var(--content-max-width);
          }
          .home-thq-solutions-showcaseheader-elm {
            max-width: 800px;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: var(--spacing-4xl);
          }
          .home-thq-solutions-showcasetitle-elm {
            color: var(--color-primary);
            font-size: var(--font-size-3xl);
            font-style: var(--font-style-heading);
            font-family: var(--font-family-heading);
            font-weight: var(--font-weight-heading);
            line-height: var(--line-height-heading);
            margin-bottom: var(--spacing-md);
            letter-spacing: var(--letter-spacing-heading);
            text-transform: var(--text-transform-heading);
          }
          .home-thq-solutions-showcasesubtitle-elm {
            color: var(--color-on-surface-secondary);
            font-size: var(--font-size-lg);
            font-family: var(--font-family-body);
            font-weight: var(--font-weight-body);
            line-height: var(--line-height-body);
          }
          .home-thq-solutions-showcasegrid-elm {
            gap: var(--spacing-xl);
            margin: 0 auto;
            display: grid;
            max-width: 800px;
            grid-template-columns: 1fr;
          }
          .home-thq-solutions-showcasecard-elm4 {
            border: 1px solid #b28e36;
            background: #0a1a3a;
            box-shadow: 0 8px 32px rgba(10, 26, 58, 0.4);
          }
          .home-thq-solutions-showcaseicon-elm4 {
            color: #b28e36;
          }
          .home-thq-solutions-showcasecard-title-elm4 {
            color: #b28e36;
          }
          .home-thq-solutions-showcasecard-text-elm4 {
            color: #4a90d9;
          }
          .home-thq-solutions-showcasebtn-elm4 {
            color: #0a1a3a;
            border-color: #b28e36;
            background-color: #b28e36;
          }
          .home-thq-solutions-showcasecard-elm5 {
            border: 1px solid #b28e36;
            background: #0a1628;
            box-shadow: 0 8px 32px rgba(10, 22, 40, 0.5);
          }
          .home-thq-solutions-showcaseicon-elm5 {
            color: #b28e36;
          }
          .home-thq-solutions-showcasecard-title-elm5 {
            color: #b28e36;
          }
          .home-thq-solutions-showcasecard-text-elm5 {
            color: #4a90d9;
          }
          .home-thq-solutions-showcasebtn-elm5 {
            color: #0a1628;
            border-color: #b28e36;
            background-color: #b28e36;
          }
          .home-thq-about-impactgrid-elm {
            gap: var(--spacing-xl);
            display: grid;
            position: relative;
            margin-bottom: var(--spacing-4xl);
            grid-template-columns: repeat(5, 1fr);
          }
          .home-thq-solar-processconnector-elm {
            top: 40px;
            left: calc(10% + 20px);
            right: calc(10% + 20px);
            height: 3px;
            opacity: 0.35;
            z-index: 0;
            position: absolute;
            background: linear-gradient(
              90deg,
              var(--color-primary) 0%,
              var(--color-secondary) 50%,
              var(--color-accent) 100%
            );
            border-radius: 2px;
          }
          .home-thq-products-rail-elm {
            padding: var(--spacing-4xl) 0;
            overflow: visible;
            position: relative;
            background: var(--color-surface-elevated);
          }
          .home-thq-products-railcontainer-elm {
            margin: 0 auto;
            padding: 0 var(--spacing-xl);
            overflow: visible;
            max-width: var(--content-max-width);
          }
          .home-thq-products-railheader-elm {
            gap: var(--spacing-sm);
            display: flex;
            text-align: center;
            align-items: center;
            margin-bottom: var(--spacing-xl);
            flex-direction: column;
            justify-content: center;
          }
          .home-thq-products-marketplacesubtitle-elm {
            color: var(--color-on-surface-secondary);
            opacity: 0.75;
            font-size: var(--font-size-base);
            max-width: 640px;
            line-height: var(--line-height-body);
          }
          .home-thq-products-marketplacefilters-elm {
            gap: var(--spacing-sm);
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin-bottom: var(--spacing-2xl);
            justify-content: center;
          }
          .home-thq-filter-group-elm1 {
            gap: var(--spacing-xs);
            border: 1px solid var(--color-border);
            padding: var(--spacing-xs) var(--spacing-sm);
            background: var(--color-surface);
            border-radius: var(--border-radius-md);
          }
          .home-thq-filter-icon-elm {
            color: var(--color-on-surface-secondary);
            flex-shrink: 0;
          }
          .home-thq-marketplace-cart-fabbadge-elm {
            top: -4px;
            color: var(--color-on-accent);
            right: -4px;
            height: 22px;
            display: flex;
            padding: 0 6px;
            position: absolute;
            font-size: 11px;
            min-width: 22px;
            background: var(--color-accent);
            align-items: center;
            font-weight: var(--font-weight-medium);
            border-radius: var(--border-radius-full);
            justify-content: center;
          }
          .home-thq-cart-toasticon-elm {
            color: #2d7a4e;
            width: 24px;
            height: 24px;
            display: flex;
            font-size: 14px;
            background: rgba(45, 122, 78, 0.15);
            align-items: center;
            flex-shrink: 0;
            border-radius: var(--border-radius-full);
            justify-content: center;
          }
          .home-thq-cart-toasttext-elm {
            color: var(--color-on-primary);
            font-size: var(--font-size-sm);
            font-weight: var(--font-weight-medium);
          }
          .home-thq-cart-draweroverlay-elm {
            inset: 0;
            z-index: 1900;
            position: absolute;
            background: var(--color-scrim);
            pointer-events: none;
          }
          .home-thq-cart-drawerpanel-elm {
            top: 0;
            right: 0;
            width: 420px;
            height: 100%;
            display: flex;
            z-index: 2001;
            position: absolute;
            max-width: 100%;
            transform: translateX(100%);
            background: var(--color-surface);
            box-shadow: -10px 0 40px rgba(0, 0, 0, 0.15);
            max-height: 100vh;
            transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
            flex-direction: column;
          }
          .home-thq-cart-drawerheader-elm {
            display: flex;
            padding: var(--spacing-lg) var(--spacing-xl);
            align-items: center;
            flex-shrink: 0;
            border-bottom: 1px solid var(--color-border);
            justify-content: space-between;
          }
          .home-thq-cart-drawerheader-title-elm {
            gap: 2px;
            display: flex;
            flex-direction: column;
          }
          .home-thq-cart-drawertitle-elm {
            color: var(--color-primary);
            font-size: var(--font-size-xl);
            font-family: var(--font-family-heading);
            line-height: 1.2;
          }
          .home-thq-cart-draweritem-count-elm {
            color: var(--color-on-surface-secondary);
            font-size: var(--font-size-xs);
          }
          .home-thq-cart-draweritems-elm {
            flex: 1;
            padding: var(--spacing-md) var(--spacing-xl);
            min-height: 0;
            overflow-y: auto;
          }
          .home-thq-cart-drawerempty-elm2 {
            color: var(--color-on-surface);
            font-size: var(--font-size-lg);
            font-weight: var(--font-weight-medium);
            margin-bottom: 4px;
          }
          .home-thq-cart-drawerempty-text-elm {
            color: var(--color-on-surface-secondary);
            font-size: var(--font-size-sm);
            margin-bottom: var(--spacing-md);
          }
          .home-thq-btn-elm18 {
            margin-top: var(--spacing-sm);
          }
          .home-thq-cart-drawersummary-elm {
            padding: var(--spacing-lg) var(--spacing-xl);
            background: rgba(0, 0, 0, 0.02);
            border-top: 1px solid var(--color-border);
            flex-shrink: 0;
          }
          .home-thq-cart-summaryrow-elm3 {
            color: var(--color-on-surface);
            font-size: var(--font-size-lg);
            border-top: 1px dashed var(--color-border);
            margin-top: var(--spacing-sm);
            font-weight: var(--font-weight-heading);
            padding-top: var(--spacing-sm);
          }
          .home-thq-cart-drawerform-elm {
            padding: var(--spacing-md) var(--spacing-xl);
            border-top: 1px solid var(--color-border);
            flex-shrink: 0;
          }
          .home-thq-cart-drawerform-title-elm {
            color: var(--color-primary);
            font-size: var(--font-size-sm);
            font-family: var(--font-family-heading);
            font-weight: var(--font-weight-heading);
            margin-bottom: var(--spacing-sm);
          }
          .home-container11 {
            padding: 0 var(--spacing-xl) var(--spacing-lg) var(--spacing-xl);
            flex-shrink: 0;
          }
          .home-thq-checkout-modaloverlay-elm {
            inset: 0;
            z-index: 1900;
            position: absolute;
            background: var(--color-scrim);
            pointer-events: none;
          }
          .home-thq-checkout-modalpanel-elm {
            width: 100%;
            position: relative;
            max-width: 800px;
            transform: scale(0.95);
            background: var(--color-surface);
            box-shadow: var(--shadow-level-3);
            max-height: 90vh;
            overflow-y: auto;
            transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            border-radius: var(--border-radius-xl);
          }
          .home-thq-checkout-modalclose-elm {
            top: var(--spacing-md);
            color: var(--color-on-surface);
            right: var(--spacing-md);
            width: 36px;
            border: none;
            cursor: pointer;
            height: 36px;
            display: flex;
            z-index: 2;
            position: absolute;
            background: rgba(255, 255, 255, 0.9);
            box-shadow: var(--shadow-level-1);
            align-items: center;
            border-radius: var(--border-radius-full);
            justify-content: center;
          }
          .home-thq-checkout-modalcontent-elm {
            gap: var(--spacing-xl);
            display: grid;
            padding: var(--spacing-2xl);
            grid-template-columns: 1fr 340px;
          }
          .home-thq-checkout-form-elm {
            display: flex;
            flex-direction: column;
          }
          .home-thq-checkout-modaltitle-elm {
            color: var(--color-primary);
            font-size: var(--font-size-2xl);
            font-family: var(--font-family-heading);
            margin-bottom: var(--spacing-lg);
          }
          .home-thq-checkout-summaryitems-elm {
            margin-bottom: var(--spacing-md);
          }
          .home-thq-btn-elm19 {
            width: 100%;
            margin-top: var(--spacing-md);
            font-weight: var(--font-weight-medium);
            letter-spacing: 0.02em;
          }
          .home-thq-payment-resulticon-elm1 {
            color: #2d7a4e;
            background: rgba(45, 122, 78, 0.1);
          }
          .home-thq-payment-resulticon-elm2 {
            color: #c0392b;
            background: rgba(192, 57, 43, 0.1);
          }
          .home-thq-contact-ctavalue-elm1 {
            text-decoration: none;
          }
          .home-thq-contact-ctaitem-elm2 {
            text-decoration: none;
          }
          .home-container12 {
            display: none;
          }
          .home-container13 {
            display: contents;
          }
          .home-container14 {
            display: none;
          }
          .home-container15 {
            display: contents;
          }
          .home-container17 {
            display: contents;
          }
          .home-container19 {
            display: contents;
          }
          .home-container21 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-thq-solutions-showcasegrid-elm {
              grid-template-columns: 1fr;
            }
            .home-thq-about-impactgrid-elm {
              grid-template-columns: repeat(3, 1fr);
            }
            .home-thq-solar-processconnector-elm {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .home-thq-solutions-showcase-elm {
              padding: 60px 0;
            }
            .home-thq-solutions-showcasegrid-elm {
              max-width: 100%;
              grid-template-columns: 1fr;
            }
            .home-thq-about-impactgrid-elm {
              gap: var(--spacing-lg);
              grid-template-columns: 1fr;
            }
            .home-thq-products-marketplacefilters-elm {
              flex-wrap: nowrap;
              overflow-x: auto;
              padding-bottom: var(--spacing-sm);
              justify-content: flex-start;
              scrollbar-width: none;
            }
            .home-thq-filter-group-elm1 {
              min-width: 180px;
            }
            .home-thq-cart-drawerpanel-elm {
              top: auto;
              left: 0;
              right: 0;
              width: 100%;
              bottom: 0;
              height: auto;
              max-width: 100%;
              transform: translateY(100%);
              box-shadow: 0 -8px 40px rgba(0, 0, 0, 0.15);
              max-height: 80vh;
              border-radius: var(--border-radius-xl) var(--border-radius-xl) 0 0;
            }
            .home-thq-cart-drawerform-elm {
              padding: var(--spacing-sm) var(--spacing-lg);
            }
            .home-thq-checkout-modalpanel-elm {
              max-height: 95vh;
            }
            .home-thq-checkout-modalcontent-elm {
              gap: var(--spacing-lg);
              padding: var(--spacing-lg);
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 479px) {
            .home-thq-hero-title-elm1 {
              font-size: 35px;
            }
            .home-thq-products-railcontainer-elm {
              padding: 0 var(--spacing-md);
            }
            .home-thq-cart-drawerheader-elm {
              padding: var(--spacing-md) var(--spacing-lg);
            }
            .home-thq-cart-draweritems-elm {
              padding: var(--spacing-sm) var(--spacing-lg);
            }
            .home-thq-cart-drawersummary-elm {
              padding: var(--spacing-md) var(--spacing-lg);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
