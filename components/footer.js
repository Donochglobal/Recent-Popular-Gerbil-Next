import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <footer className="footer-root">
          <div className="footer-container">
            <div className="footer-top-row">
              <div className="footer-brand-column">
                <div className="footer-logo-wrapper">
                  <span className="footer-brand-name">
                    <span>
                      {' '}
                      DON OCH
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="footer-thq-footer-brand-accent-elm">
                      GLOBAL
                    </span>
                  </span>
                  <span className="footer-tagline">Solar Super Powered</span>
                </div>
                <p className="section-content footer-description">
                  A world-class leader in renewable energy and premium
                  infrastructure. We specialize in high-end solar solutions and
                  strategic real estate investments through Lemoex Properties.
                </p>
                <div className="footer-social-links">
                  <a href="#">
                    <div aria-label="Facebook" className="footer-social-btn">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Instagram" className="footer-social-btn">
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
                          <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"></path>
                          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="LinkedIn" className="footer-social-btn">
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
                          <path d="M8 11v5m0-8v.01M12 16v-5m4 5v-3a2 2 0 1 0-4 0"></path>
                          <path d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Twitter" className="footer-social-btn">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 4.01c-1 .49-1.98.689-3 .99c-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4c0 0-4.182 7.433 4 11c-1.872 1.247-3.739 2.088-6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58-1.04 6.522-3.723 7.651-7.742a13.8 13.8 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <nav
                aria-labelledby="footer-nav-heading"
                className="footer-nav-column"
              >
                <h3 id="footer-nav-heading" className="footer-column-title">
                  Quick Links
                </h3>
                <ul className="footer-link-list">
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Home</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>About Us</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>CEO Message</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Projects</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Contact</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </nav>
              <nav
                aria-labelledby="footer-services-heading"
                className="footer-nav-column"
              >
                <h3
                  id="footer-services-heading"
                  className="footer-column-title"
                >
                  Our Solutions
                </h3>
                <ul className="footer-link-list">
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Solar Solutions</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Lemoex Properties</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Energy Consulting</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Electrical Installations</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Battery &amp; Inverters</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="footer-contact-column">
                <h3 className="footer-column-title">Get In Touch</h3>
                <div className="footer-contact-info">
                  <div className="footer-contact-item">
                    <span className="footer-icon-box">
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
                    </span>
                    <span className="section-content footer-contact-text">
                      Lagos, Nigeria | Abuja Office | Port Harcourt
                    </span>
                  </div>
                  <div className="footer-contact-item">
                    <span className="footer-icon-box">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
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
                    </span>
                    <span className="section-content footer-contact-text">
                      +234 (0) 800 DON OCH
                    </span>
                  </div>
                  <div className="footer-contact-item">
                    <span className="footer-icon-box">
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
                          <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                          <rect
                            x="2"
                            y="4"
                            rx="2"
                            width="20"
                            height="16"
                          ></rect>
                        </g>
                      </svg>
                    </span>
                    <span className="section-content footer-contact-text">
                      info@donochglobal.com
                    </span>
                  </div>
                </div>
              </div>
              <div className="footer-newsletter-column">
                <h3 className="footer-column-title">Newsletter</h3>
                <p className="footer-newsletter-text section-content">
                  Subscribe for smart energy tips and property investment
                  alerts.
                </p>
                <form
                  action="/subscribe"
                  method="POST"
                  data-form-id="4d96a46a-d420-473b-a2ba-c3aadd767530"
                  className="footer-newsletter-form"
                >
                  <div className="footer-input-group">
                    <input
                      type="email"
                      id="thq_textinput_Q2J2"
                      name="textinput"
                      required="true"
                      aria-label="Email for newsletter"
                      placeholder="Your Email Address"
                      data-form-field-id="thq_textinput_Q2J2"
                      className="footer-input"
                    />
                    <button
                      id="thq_button_6XNF"
                      name="button"
                      type="submit"
                      data-form-field-id="thq_button_6XNF"
                      className="btn-sm btn-accent btn footer-submit-btn"
                    >
                      Join
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="footer-bottom-row">
              <div className="footer-legal-links">
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Privacy Policy</span>
                  </div>
                </a>
                <span className="footer-legal-divider"></span>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Terms of Service</span>
                  </div>
                </a>
              </div>
              <p className="section-content footer-copyright">
                © 2026 DON OCH GLOBAL. All rights reserved. Redefining Energy
                &amp; Real Estate.
              </p>
            </div>
          </div>
          <div className="footer-floating-actions">
            <a href="https://wa.me/yournumber">
              <div
                aria-label="Chat on WhatsApp"
                className="footer-whatsapp-float"
              >
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.191 8.191 0 0 1-1.26-4.38c0-4.51 3.67-8.18 8.18-8.18c2.19 0 4.24.85 5.78 2.4a8.13 8.13 0 0 1 2.4 5.78c.01 4.51-3.66 8.19-8.17 8.19zM15.76 13.2c-.2-.1-.1.2-.54.42c-.44.22-.88.44-1.32.22c-.44-.22-1.32-.44-2.2-1.32c-.88-.88-1.1-1.76-1.32-2.2c-.22-.44.22-.44.44-.88c.22-.44.1-.88-.1-1.1c-.2-.2-.88-2.12-1.21-2.93c-.33-.81-.66-.69-.88-.69s-.44-.01-.66-.01s-.66.1-1.1.55c-.44.45-1.76 1.76-1.76 4.29s1.87 5.06 2.12 5.39c.25.33 3.63 5.4 8.71 7.21c1.21.43 2.15.69 2.88.92c1.21.38 2.32.33 3.19.2c.97-.14 2.97-1.21 3.39-2.39c.42-1.18.42-2.2.3-2.39c-.12-.19-.44-.31-.64-.41z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<script defer data-name="footer-reveal">
(function(){
  const footerReveal = () => {
    const footer = document.querySelector(".footer-root")
    if (!footer) return

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          footer.style.opacity = "1"
          footer.style.transform = "translateY(0)"

          // Animate children sequentially
          const columns = footer.querySelectorAll(".footer-top-row > div")
          columns.forEach((col, index) => {
            setTimeout(() => {
              col.style.opacity = "1"
              col.style.transform = "translateY(0)"
            }, index * 100)
          })

          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Initial state for animation
    footer.style.opacity = "0"
    footer.style.transform = "translateY(30px)"
    footer.style.transition = "opacity 0.8s ease, transform 0.8s ease"

    const columns = footer.querySelectorAll(".footer-top-row > div")
    columns.forEach((col) => {
      col.style.opacity = "0"
      col.style.transform = "translateY(20px)"
      col.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    })

    observer.observe(footer)
  }

  footerReveal()
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-thq-footer-brand-accent-elm {
            color: var(--color-accent);
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
