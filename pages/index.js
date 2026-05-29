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
      <div className="home-container1">
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
              <h2 className="section-title">About DON OCH GLOBAL</h2>
              <p className="section-content">
                A world-class energy and infrastructure leader, driving
                sustainability through engineering excellence and premium real
                estate solutions.
              </p>
            </div>
            <div className="about-impact__grid">
              <div className="about-impact__card">
                <div className="about-impact__icon">
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
                <div data-count="15" className="about-impact__number">
                  <span>0</span>
                </div>
                <div className="about-impact__label">
                  <span>Years Experience</span>
                </div>
              </div>
              <div className="about-impact__card">
                <div className="about-impact__icon">
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
                <div data-count="1200" className="about-impact__number">
                  <span>0</span>
                </div>
                <div className="about-impact__label">
                  <span>Successful Projects</span>
                </div>
              </div>
              <div className="about-impact__card">
                <div className="about-impact__icon">
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
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="M6.376 18.91a6 6 0 0 1 11.249.003"></path>
                      <circle r="4" cx="12" cy="11"></circle>
                    </g>
                  </svg>
                </div>
                <div data-count="5000" className="about-impact__number">
                  <span>0</span>
                </div>
                <div className="about-impact__label">
                  <span>Happy Clients</span>
                </div>
              </div>
              <div className="about-impact__card">
                <div className="about-impact__icon">
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
                <div data-count="850" className="about-impact__number">
                  <span>0</span>
                </div>
                <div className="about-impact__label">
                  <span>Installed Systems</span>
                </div>
              </div>
              <div className="about-impact__card">
                <div className="about-impact__icon">
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
                <div data-count="98" className="about-impact__number">
                  <span>0</span>
                </div>
                <div className="about-impact__label">
                  <span>Client Satisfaction %</span>
                </div>
              </div>
              <div className="about-impact__card">
                <div className="about-impact__icon">
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
                <div data-count="250" className="about-impact__number">
                  <span>0</span>
                </div>
                <div className="about-impact__label">
                  <span>MW Energy Generated</span>
                </div>
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
        <section className="products-rail">
          <div className="products-rail__container">
            <div className="products-rail__header">
              <h2 className="section-title">Premium Products</h2>
              <div className="products-rail__nav">
                <button
                  id="railPrev"
                  aria-label="Previous"
                  className="products-rail__btn"
                >
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
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                </button>
                <button
                  id="railNext"
                  aria-label="Next"
                  className="products-rail__btn"
                >
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
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div id="railTrack" className="products-rail__track">
              <div className="products-rail__card">
                <div className="products-rail__img-box">
                  <img
                    alt="Mono Solar Panels"
                    src="https://images.pexels.com/photos/19065333/pexels-photo-19065333.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <h3 className="section-subtitle">Premium Mono Panels</h3>
                <p className="section-content">
                  High-efficiency monocrystalline solar panels with 25-year
                  warranty.
                </p>
                <button className="btn-sm btn-primary btn">
                  Quick Inquiry
                </button>
              </div>
              <div className="products-rail__card">
                <div className="products-rail__img-box">
                  <img
                    alt="Lithium Battery"
                    src="https://images.pexels.com/photos/31462219/pexels-photo-31462219.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <h3 className="section-subtitle">Lithium LifePO4</h3>
                <p className="section-content">
                  Deep cycle lithium batteries for maximum storage life and
                  efficiency.
                </p>
                <button className="btn-sm btn-primary btn">
                  Quick Inquiry
                </button>
              </div>
              <div className="products-rail__card">
                <div className="products-rail__img-box">
                  <img
                    alt="Hybrid Inverter"
                    src="https://images.pexels.com/photos/9875673/pexels-photo-9875673.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <h3 className="section-subtitle">Smart Hybrid Inverters</h3>
                <p className="section-content">
                  Pure sine wave inverters with integrated MPPT controllers.
                </p>
                <button className="btn-sm btn-primary btn">
                  Quick Inquiry
                </button>
              </div>
              <div className="products-rail__card">
                <div className="products-rail__img-box">
                  <img
                    alt="Smart CCTV"
                    src="https://images.pexels.com/photos/31723766/pexels-photo-31723766.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <h3 className="section-subtitle">AI CCTV Systems</h3>
                <p className="section-content">
                  Advanced surveillance cameras with night vision and remote
                  access.
                </p>
                <button className="btn-sm btn-primary btn">
                  Quick Inquiry
                </button>
              </div>
              <div className="products-rail__card">
                <div className="products-rail__img-box">
                  <img
                    alt="Street Lights"
                    src="https://images.pexels.com/photos/29923357/pexels-photo-29923357.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <h3 className="section-subtitle">Solar Street Lights</h3>
                <p className="section-content">
                  All-in-one solar street lighting for residential and
                  commercial estates.
                </p>
                <button className="btn-sm btn-primary btn">
                  Quick Inquiry
                </button>
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
                    src="https://images.pexels.com/photos/8457866/pexels-photo-8457866.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
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
                    src="https://images.pexels.com/photos/27938900/pexels-photo-27938900.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
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
                    src="https://images.pexels.com/photos/6641571/pexels-photo-6641571.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
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
                  <span className="contact-cta__value">+2349132371332</span>
                </div>
                <div className="contact-cta__item">
                  <span className="contact-cta__label">Email Us</span>
                  <span className="contact-cta__value">
                    info@donochglobal.com
                  </span>
                </div>
              </div>
              <div className="contact-cta__actions">
                <a href="https://wa.me/2348000000000">
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
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<script defer data-name="homepage-interactions">
(function(){
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
  const initRail = () => {
    const track = document.getElementById("railTrack")
    const next = document.getElementById("railNext")
    const prev = document.getElementById("railPrev")

    if (track && next && prev) {
      next.addEventListener("click", () => {
        track.scrollBy({ left: 340, behavior: "smooth" })
      })
      prev.addEventListener("click", () => {
        track.scrollBy({ left: -340, behavior: "smooth" })
      })
    }
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
    const slides = document.querySelectorAll(".testimonials-carousel__slide")
    const dots = document.querySelectorAll(".testimonials-carousel__dot")
    let current = 0

    const show = (idx) => {
      slides.forEach((s) => s.classList.remove("active"))
      dots.forEach((d) => d.classList.remove("active"))
      slides[idx].classList.add("active")
      dots[idx].classList.add("active")
      current = idx
    }

    dots.forEach((dot) => {
      dot.addEventListener("click", () => show(parseInt(dot.dataset.target)))
    })
  }

  // Initialize all
  initHero()
  initCounters()
  initRail()
  initFilters()
  initTestimonials()
})()
</script>`}
            ></Script>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
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
      </div>
      <style jsx>
        {`
          .home-container1 {
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
            color: #ffffff;
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
            color: #7eb8da;
          }
          .home-thq-solutions-showcasebtn-elm5 {
            color: #0a1628;
            border-color: #b28e36;
            background-color: #b28e36;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-thq-solutions-showcasegrid-elm {
              grid-template-columns: 1fr;
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
          }
          @media (max-width: 479px) {
            .home-thq-hero-title-elm1 {
              font-size: 35px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
