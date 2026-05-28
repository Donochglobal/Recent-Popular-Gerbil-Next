import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const LemoexProperties = (props) => {
  return (
    <>
      <div className="lemoex-properties-container1">
        <Head>
          <title>Lemoex-Properties - Recent Popular Gerbil</title>
          <meta
            property="og:title"
            content="Lemoex-Properties - Recent Popular Gerbil"
          />
          <link
            rel="canonical"
            href="https://recent-popular-gerbil-i84oq5.teleporthq.site/lemoex-properties"
          />
          <meta
            property="og:url"
            content="https://recent-popular-gerbil-i84oq5.teleporthq.site/lemoex-properties"
          />
        </Head>
        <Navigation></Navigation>
        <section className="lemoex-hero">
          <div className="lemoex-hero-video-wrapper">
            <video
              src="https://videos.pexels.com/video-files/37446297/15859944_360_640_30fps.mp4"
              loop="true"
              muted="true"
              autoPlay="true"
              playsInline="true"
              className="lemoex-hero-video"
            ></video>
            <div className="lemoex-hero-overlay"></div>
          </div>
          <div className="lemoex-hero-content-container">
            <div className="lemoex-hero-text-block">
              <span className="lemoex-hero-badge">Luxury Real Estate Hub</span>
              <h1 className="hero-title">
                Lemoex Properties: Building Dreams Through Smart Investments
              </h1>
              <p className="hero-subtitle">
                DON OCH GLOBAL delivers premium solar energy solutions while
                Lemoex Properties helps clients secure quality lands and housing
                investments.
              </p>
              <div className="lemoex-hero-actions">
                <a href="#properties">
                  <div className="btn-primary btn btn-lg">
                    <span>View Available Properties</span>
                  </div>
                </a>
                <a href="#contact">
                  <div className="btn-outline btn btn-lg lemoex-hero-btn-outline">
                    <span>Book Inspection</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="lemoex-hero-scroll-indicator">
            <div className="lemoex-hero-mouse">
              <div className="lemoex-hero-wheel"></div>
            </div>
          </div>
        </section>
        <section className="lemoex-featured">
          <div className="lemoex-featured-container">
            <div className="lemoex-featured-header">
              <h2 className="section-title">Premium Real Estate Solutions</h2>
              <p className="section-content">
                Invest in a future of luxury and sustainability with our curated
                property offerings.
              </p>
            </div>
            <div className="lemoex-featured-grid">
              <div className="lemoex-featured-card">
                <div className="lemoex-featured-icon">
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
                <h3 className="lemoex-featured-card-title">Lands for Sale</h3>
                <p className="section-content">
                  Prime locations in rapidly developing areas, perfect for
                  residential or commercial use with verified documentation.
                </p>
                <button className="btn btn-link">Learn More</button>
              </div>
              <div className="lemoex-featured-card">
                <div className="lemoex-featured-icon">
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
                <h3 className="lemoex-featured-card-title">Housing Projects</h3>
                <p className="section-content">
                  Modern, solar-powered luxury homes designed for comfort,
                  energy efficiency, and long-term value.
                </p>
                <button className="btn btn-link">Learn More</button>
              </div>
              <div className="lemoex-featured-card">
                <div className="lemoex-featured-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12.516 2.17a.75.75 0 0 0-1.032 0a11.2 11.2 0 0 1-7.877 3.08a.75.75 0 0 0-.722.515A12.7 12.7 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348c0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08m3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094z"
                      fill="none"
                      stroke="currentColor"
                      clipRule="evenodd"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="lemoex-featured-card-title">
                  Estate Development
                </h3>
                <p className="section-content">
                  Comprehensive planning and execution of world-class gated
                  communities with modern infrastructure.
                </p>
                <button className="btn btn-link">Learn More</button>
              </div>
              <div className="lemoex-featured-card">
                <div className="lemoex-featured-icon">
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
                      <path d="m16 11l2 2l4-4m-6 12v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle r="4" cx="9" cy="7"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="lemoex-featured-card-title">
                  Property Consultation
                </h3>
                <p className="section-content">
                  Expert advice on real estate acquisition, market trends, and
                  maximizing your investment ROI.
                </p>
                <button className="btn btn-link">Learn More</button>
              </div>
            </div>
          </div>
        </section>
        <section className="lemoex-about">
          <div className="lemoex-about-container">
            <div className="lemoex-about-media">
              <img
                alt="Modern Luxury Estate"
                src="https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="lemoex-about-img"
              />
              <div className="lemoex-about-experience">
                <span className="lemoex-about-exp-num">15+</span>
                <span className="lemoex-about-exp-text">
                  Years of Excellence
                </span>
              </div>
            </div>
            <div className="lemoex-about-content">
              <span className="lemoex-hero-badge">Our Legacy</span>
              <h2 className="section-title">
                Redefining Luxury Living Through Sustainable Innovation
              </h2>
              <p className="section-content">
                Lemoex Properties, the real estate arm of DON OCH GLOBAL, stands
                at the intersection of architectural brilliance and renewable
                energy. Our investment philosophy is rooted in the belief that
                luxury and sustainability should coexist seamlessly.
              </p>
              <p className="section-content">
                We specialize in identifying high-growth land opportunities and
                developing housing projects that integrate smart energy
                solutions. Every estate we build is a testament to our
                commitment to engineering excellence and customer satisfaction.
              </p>
              <div className="lemoex-about-values">
                <div className="lemoex-about-value-item">
                  <div className="lemoex-about-value-dot"></div>
                  <span>Unmatched Market Integrity</span>
                </div>
                <div className="lemoex-about-value-item">
                  <div className="lemoex-about-value-dot"></div>
                  <span>Green Energy Integration</span>
                </div>
                <div className="lemoex-about-value-item">
                  <div className="lemoex-about-value-dot"></div>
                  <span>Premium Customer Care</span>
                </div>
              </div>
              <a href="#contact">
                <div className="btn-secondary lemoex-about-cta btn btn-lg">
                  <span>Explore Our Vision</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section id="properties" className="lemoex-gallery">
          <div className="lemoex-gallery-header">
            <h2 className="section-title">The Lemoex Showcase</h2>
            <p className="section-content">
              A visual journey through our most prestigious developments and
              investment opportunities.
            </p>
          </div>
          <div className="lemoex-gallery-grid">
            <div className="lemoex-gallery-item">
              <img
                alt="The Heights Estate"
                src="https://images.pexels.com/photos/7350889/pexels-photo-7350889.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="lemoex-gallery-overlay">
                <span className="lemoex-gallery-tag">Housing Project</span>
                <h3>The Emerald Heights</h3>
                <button className="btn-sm btn-accent btn">Quick Inquiry</button>
              </div>
            </div>
            <div className="lemoex-gallery-item">
              <img
                alt="Prime Lands"
                src="https://images.pexels.com/photos/34973979/pexels-photo-34973979.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="lemoex-gallery-overlay">
                <span className="lemoex-gallery-tag">Land Investment</span>
                <h3>Lekki Phase 3 Plots</h3>
                <button className="btn-sm btn-accent btn">Quick Inquiry</button>
              </div>
            </div>
            <div className="lemoex-gallery-item">
              <img
                alt="Solar Villa"
                src="https://images.pexels.com/photos/8082328/pexels-photo-8082328.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="lemoex-gallery-overlay">
                <span className="lemoex-gallery-tag">Solar Smart Home</span>
                <h3>Eco-Villa Series</h3>
                <button className="btn-sm btn-accent btn">Quick Inquiry</button>
              </div>
            </div>
            <div className="lemoex-gallery-item">
              <img
                alt="Luxury Interior"
                src="https://images.pexels.com/photos/16573669/pexels-photo-16573669.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="lemoex-gallery-overlay">
                <span className="lemoex-gallery-tag">Interior Design</span>
                <h3>Modern Classics</h3>
                <button className="btn-sm btn-accent btn">Quick Inquiry</button>
              </div>
            </div>
            <div className="lemoex-gallery-item">
              <img
                alt="Gated Community"
                src="https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="lemoex-gallery-overlay">
                <span className="lemoex-gallery-tag">Estate Development</span>
                <h3>Oakwood Gardens</h3>
                <button className="btn-sm btn-accent btn">Quick Inquiry</button>
              </div>
            </div>
            <div className="lemoex-gallery-item">
              <img
                alt="Aerial View"
                src="https://images.pexels.com/photos/34973971/pexels-photo-34973971.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="lemoex-gallery-overlay">
                <span className="lemoex-gallery-tag">Land Investment</span>
                <h3>Heritage Park Phase 2</h3>
                <button className="btn-sm btn-accent btn">Quick Inquiry</button>
              </div>
            </div>
          </div>
        </section>
        <section className="lemoex-stats">
          <div className="lemoex-stats-grid">
            <div className="lemoex-stats-item">
              <div data-target="1250" className="lemoex-stats-number">
                <span>0</span>
              </div>
              <div className="lemoex-stats-label">
                <span>Acres Sold</span>
              </div>
            </div>
            <div className="lemoex-stats-item">
              <div data-target="48" className="lemoex-stats-number">
                <span>0</span>
              </div>
              <div className="lemoex-stats-label">
                <span>Projects Delivered</span>
              </div>
            </div>
            <div className="lemoex-stats-item">
              <div data-target="25" className="lemoex-stats-number">
                <span>0</span>
              </div>
              <div className="lemoex-stats-label">
                <span>Average ROI %</span>
              </div>
            </div>
            <div className="lemoex-stats-item">
              <div data-target="5200" className="lemoex-stats-number">
                <span>0</span>
              </div>
              <div className="lemoex-stats-label">
                <span>Inspections Completed</span>
              </div>
            </div>
            <div className="lemoex-stats-item">
              <div data-target="85" className="lemoex-stats-number">
                <span>0</span>
              </div>
              <div className="lemoex-stats-label">
                <span>Active Listings</span>
              </div>
            </div>
            <div className="lemoex-stats-item">
              <div data-target="99" className="lemoex-stats-number">
                <span>0</span>
              </div>
              <div className="lemoex-stats-label">
                <span>Customer Satisfaction %</span>
              </div>
            </div>
          </div>
        </section>
        <section className="lemoex-process">
          <div className="lemoex-process-container">
            <div className="lemoex-process-header">
              <h2 className="section-title">Your Investment Journey</h2>
              <p className="section-content">
                A seamless path from dreaming to owning, guided by our expert
                team.
              </p>
            </div>
            <div className="lemoex-process-steps">
              <div className="lemoex-step">
                <div className="lemoex-step-number">
                  <span>01</span>
                </div>
                <div className="lemoex-step-content">
                  <h3>Discover</h3>
                  <p>
                    Explore our curated portfolio of premium lands and luxury
                    housing projects tailored to your goals.
                  </p>
                </div>
              </div>
              <div className="lemoex-step">
                <div className="lemoex-step-number">
                  <span>02</span>
                </div>
                <div className="lemoex-step-content">
                  <h3>Inspect</h3>
                  <p>
                    Schedule a guided tour of your chosen property to experience
                    the quality and environment firsthand.
                  </p>
                </div>
              </div>
              <div className="lemoex-step">
                <div className="lemoex-step-number">
                  <span>03</span>
                </div>
                <div className="lemoex-step-content">
                  <h3>Invest</h3>
                  <p>
                    Secure your asset with verified documentation and flexible
                    payment plans designed for your convenience.
                  </p>
                </div>
              </div>
              <div className="lemoex-step">
                <div className="lemoex-step-number">
                  <span>04</span>
                </div>
                <div className="lemoex-step-content">
                  <h3>Develop</h3>
                  <p>
                    Watch your vision come to life as we integrate smart
                    infrastructure and luxury finishes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="lemoex-testimonials">
          <div id="testimonialCarousel" className="lemoex-testimonial-carousel">
            <div className="active lemoex-testimonial-slide">
              <div className="lemoex-testimonial-card">
                <div className="lemoex-testimonial-rating">
                  <span>★★★★★</span>
                </div>
                <p className="lemoex-testimonial-text">
                  &quot;Investing with Lemoex Properties was the best decision I
                  made for my portfolio. The integration of solar power in their
                  housing projects is a game-changer for long-term
                  sustainability.&quot;
                </p>
                <div className="lemoex-testimonial-user">
                  <img
                    alt="Investor"
                    src="https://images.pexels.com/photos/7937765/pexels-photo-7937765.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                  <div className="lemoex-testimonial-info">
                    <strong>Adewale Johnson</strong>
                    <span>Real Estate Investor</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lemoex-testimonial-slide">
              <div className="lemoex-testimonial-card">
                <div className="lemoex-testimonial-rating">
                  <span>★★★★★</span>
                </div>
                <p className="lemoex-testimonial-text">
                  &quot;The transparency during the land acquisition process was
                  refreshing. Lemoex Properties handled all the documentation
                  with absolute professionalism. Highly recommended!&quot;
                </p>
                <div className="lemoex-testimonial-user">
                  <img
                    alt="Investor"
                    src="https://images.pexels.com/photos/7937750/pexels-photo-7937750.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                  <div className="lemoex-testimonial-info">
                    <strong>Chidinma Okoro</strong>
                    <span>Homeowner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lemoex-testimonial-controls">
            <button
              aria-label="Previous testimonial"
              className="lemoex-carousel-btn prev"
            >
              ←
            </button>
            <button
              aria-label="Next testimonial"
              className="next lemoex-carousel-btn"
            >
              →
            </button>
          </div>
        </section>
        <section id="contact" className="lemoex-contact">
          <div className="lemoex-contact-container">
            <div className="lemoex-contact-info">
              <h2 className="section-title">Start Your Luxury Journey</h2>
              <p className="section-content">
                Ready to invest or have questions? Our team of property experts
                is here to guide you every step of the way.
              </p>
              <div className="lemoex-contact-details">
                <div className="lemoex-contact-item">
                  <div className="lemoex-contact-icon">
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
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle r="3" cx="12" cy="10"></circle>
                      </g>
                    </svg>
                  </div>
                  <div className="lemoex-contact-text">
                    <strong>Head Office</strong>
                    <span>Lagos, Nigeria — Premium Infrastructure Hub</span>
                  </div>
                </div>
                <div className="lemoex-contact-item">
                  <div className="lemoex-contact-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="lemoex-contact-text">
                    <strong>Phone Support</strong>
                    <span>+234 800 LEMOEX (Call/WhatsApp)</span>
                  </div>
                </div>
              </div>
              <div className="lemoex-whatsapp-cta">
                <a href="https://wa.me/234800000000">
                  <div className="btn-xl btn-accent btn">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.5c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
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
            <div className="lemoex-contact-form-wrapper">
              <form
                data-form-id="fc20dddd-93c7-492c-8831-b06def4f2a71"
                className="lemoex-contact-form"
              >
                <div className="lemoex-form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="textinput"
                    required="true"
                    placeholder="John Doe"
                    data-form-field-id="name"
                  />
                </div>
                <div className="lemoex-form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="textinput"
                    required="true"
                    placeholder="john@example.com"
                    data-form-field-id="email"
                  />
                </div>
                <div className="lemoex-form-group">
                  <label htmlFor="interest">Property Interest</label>
                  <select
                    id="interest"
                    name="select"
                    required="true"
                    data-form-field-id="interest"
                  >
                    <option value="true">Select an option</option>
                    <option value="lands">Lands for Sale</option>
                    <option value="housing">Housing Projects</option>
                    <option value="development">Estate Development</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
                <div className="lemoex-form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="textarea"
                    rows="4"
                    placeholder="Tell us about your investment goals..."
                    data-form-field-id="message"
                  ></textarea>
                </div>
                <button
                  id="thq_button_zBVg"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_zBVg"
                  className="btn-primary btn lemoex-form-submit btn-lg"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>
        <div className="lemoex-properties-container2">
          <div className="lemoex-properties-container3">
            <Script
              html={`<script defer data-name="lemoex-scripts">
(function(){
  // Counter Animation
  const animateStats = () => {
    const stats = document.querySelectorAll(".lemoex-stats-number")
    const observerOptions = {
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute("data-target"))
          let count = 0
          const duration = 2000
          const increment = target / (duration / 16)

          const updateCount = () => {
            count += increment
            if (count < target) {
              entry.target.innerText = Math.ceil(count)
              requestAnimationFrame(updateCount)
            } else {
              entry.target.innerText = target
            }
          }
          updateCount()
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    stats.forEach((stat) => observer.observe(stat))
  }

  // Testimonial Carousel
  const initCarousel = () => {
    const carousel = document.getElementById("testimonialCarousel")
    const slides = document.querySelectorAll(".lemoex-testimonial-slide")
    const nextBtn = document.querySelector(".lemoex-carousel-btn.next")
    const prevBtn = document.querySelector(".lemoex-carousel-btn.prev")
    let currentSlide = 0

    const updateCarousel = () => {
      carousel.style.transform = \`translateX(-\${currentSlide * 100}%)\`
    }

    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slides.length
      updateCarousel()
    })

    prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length
      updateCarousel()
    })

    // Auto play
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length
      updateCarousel()
    }, 5000)
  }

  // Form Interaction
  const initForm = () => {
    const form = document.querySelector(".lemoex-contact-form")
    if (!form) return

    form.addEventListener("submit", (e) => {
      // Native validation handles the check, we just show feedback
      const btn = form.querySelector("button")
      const originalText = btn.innerText

      btn.innerText = "Sending..."
      btn.disabled = true

      setTimeout(() => {
        btn.innerText = "Inquiry Sent!"
        btn.style.backgroundColor = "#2ecc71"
        form.reset()

        setTimeout(() => {
          btn.innerText = originalText
          btn.style.backgroundColor = ""
          btn.disabled = false
        }, 3000)
      }, 1500)
    })
  }

  // Parallax Hero Effect
  const initParallax = () => {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset
      const heroVideo = document.querySelector(".lemoex-hero-video")
      if (heroVideo) {
        heroVideo.style.transform = \`translateY(\${scrolled * 0.5}px)\`
      }
    })
  }

  // Initialize all
  animateStats()
  initCarousel()
  initForm()
  initParallax()
})()
</script>`}
            ></Script>
          </div>
        </div>
        <div className="lemoex-properties-container4">
          <div className="lemoex-properties-container5">
            <Script
              html={`<style>
        @keyframes fadeInUp {from {opacity: 0;
transform: translateY(30px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes fadeInDown {from {opacity: 0;
transform: translateY(-30px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes scrollWheel {0% {transform: translateY(0);
opacity: 1;}
100% {transform: translateY(15px);
opacity: 0;}}@keyframes bounce {0%,20%,50%,80%,100% {transform: translateX(-50%) translateY(0);}
40% {transform: translateX(-50%) translateY(-10px);}
60% {transform: translateX(-50%) translateY(-5px);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .lemoex-properties-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .lemoex-properties-container2 {
            display: none;
          }
          .lemoex-properties-container3 {
            display: contents;
          }
          .lemoex-properties-container4 {
            display: none;
          }
          .lemoex-properties-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default LemoexProperties
