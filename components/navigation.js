import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <nav id="main-nav" className="navigation-wrapper">
          <div className="navigation-top-bar">
            <div className="navigation-top-container">
              <div className="navigation-top-info">
                <a href="tel:+2348000000000">
                  <div className="navigation-info-item">
                    <svg
                      fill="none"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>+2348073652760</span>
                  </div>
                </a>
                <a href="mailto:info@donochglobal.com?subject=">
                  <div className="navigation-info-item">
                    <svg
                      fill="none"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                    </svg>
                    <span>info@donochglobal.com</span>
                  </div>
                </a>
              </div>
              <div className="navigation-top-socials">
                <a href="#">
                  <div aria-label="Facebook" className="navigation-social-link">
                    <svg
                      fill="none"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="LinkedIn" className="navigation-social-link">
                    <svg
                      fill="none"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div
                    aria-label="Instagram"
                    className="navigation-social-link"
                  >
                    <svg
                      fill="none"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                        width="20"
                        height="20"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="navigation-main-bar">
            <div className="navigation-main-container">
              <Link href="/">
                <a>
                  <div className="navigation-logo-link">
                    <div className="navigation-logo-content">
                      <span className="section-title navigation-brand-name">
                        DON OCH GLOBAL
                      </span>
                      <span className="navigation-brand-tagline">
                        Solar Super Powered
                      </span>
                    </div>
                  </div>
                </a>
              </Link>
              <div className="navigation-desktop-menu">
                <ul className="navigation-menu-list">
                  <li className="navigation-menu-item">
                    <Link href="/">
                      <a>
                        <div className="navigation-menu-link">
                          <span>Home</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="navigation-menu-item">
                    <a href="About">
                      <div className="navigation-menu-link">
                        <span>About</span>
                      </div>
                    </a>
                  </li>
                  <li className="navigation-menu-item navigation-has-dropdown">
                    <Link href="/solar-solutions">
                      <a>
                        <div className="navigation-menu-link">
                          <span>Solar Solutions</span>
                          <svg
                            fill="none"
                            width="14"
                            xmlns="http://www.w3.org/2000/svg"
                            height="14"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                        </div>
                      </a>
                    </Link>
                    <ul className="navigation-dropdown">
                      <li>
                        <Link href="/solar-solutions">
                          <a>
                            <div className="navigation-dropdown-link">
                              <span>Residential Solar</span>
                            </div>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/solar-solutions">
                          <a>
                            <div className="navigation-dropdown-link">
                              <span>Commercial Solar</span>
                            </div>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/solar-solutions">
                          <a>
                            <div className="navigation-dropdown-link">
                              <span>Industrial Solutions</span>
                            </div>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="navigation-menu-item">
                    <a href="Products">
                      <div className="navigation-menu-link">
                        <span>Products</span>
                      </div>
                    </a>
                  </li>
                  <li className="navigation-menu-item">
                    <Link href="/lemoex-properties">
                      <a>
                        <div className="navigation-menu-link">
                          <span>Lemoex Properties</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="navigation-menu-item">
                    <Link href="/projects-portfolio">
                      <a>
                        <div className="navigation-menu-link">
                          <span>Projects</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="navigation-menu-item">
                    <Link href="/contact">
                      <a>
                        <div className="navigation-menu-link">
                          <span>Contact</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="navigation-actions">
                <Link href="/shop-now">
                  <a>
                    <div className="btn-sm navigation-quote-btn btn-primary btn">
                      <span>Buy Solar</span>
                    </div>
                  </a>
                </Link>
                <button
                  id="mobile-toggle"
                  aria-label="Toggle Menu"
                  aria-expanded="false"
                  className="navigation-mobile-toggle"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <g fill="none">
                      <path
                        d="M2 8a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2zm0 8a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2z"
                        fill="currentColor"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div id="mobile-overlay" className="navigation-mobile-overlay">
          <div className="navigation-mobile-header">
            <span className="section-title navigation-brand-name">
              DON OCH GLOBAL
            </span>
            <button
              id="mobile-close"
              aria-label="Close Menu"
              className="navigation-mobile-close"
            >
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
                <path d="M18 6 6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="navigation-mobile-content">
            <ul className="navigation-mobile-list">
              <li className="navigation-mobile-item">
                <Link href="/">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>Home</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="navigation-mobile-item">
                <a href="About">
                  <div className="navigation-mobile-link">
                    <span>About</span>
                  </div>
                </a>
              </li>
              <li className="navigation-mobile-item">
                <Link href="/solar-solutions">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>Solar Solutions</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="navigation-mobile-item">
                <a href="Products">
                  <div className="navigation-mobile-link">
                    <span>Products</span>
                  </div>
                </a>
              </li>
              <li className="navigation-mobile-item">
                <Link href="/lemoex-properties">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>Lemoex Properties</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="navigation-mobile-item">
                <Link href="/projects-portfolio">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>Projects</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="navigation-mobile-item">
                <Link href="/shop-now">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>CEO Message</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="navigation-mobile-item">
                <Link href="/contact">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>Contact</span>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
            <div className="navigation-mobile-footer">
              <div className="navigation-mobile-contact">
                <p className="section-content">Contact Us</p>
                <a href="tel:+2348000000000">
                  <div>
                    <span>+234 800 000 0000</span>
                  </div>
                </a>
                <a href="mailto:info@donochglobal.com?subject=">
                  <div>
                    <span>info@donochglobal.com</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="navigation-container4">
          <div className="navigation-container5">
            <Script
              html={`<script defer data-name="navigation-logic">
(function(){
  const nav = document.getElementById("main-nav")
  const mobileToggle = document.getElementById("mobile-toggle")
  const mobileClose = document.getElementById("mobile-close")
  const mobileOverlay = document.getElementById("mobile-overlay")
  const body = document.body

  // Scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled")
    } else {
      nav.classList.remove("scrolled")
    }
  })

  // Mobile menu toggle
  const openMenu = () => {
    mobileOverlay.classList.add("active")
    mobileToggle.setAttribute("aria-expanded", "true")
    body.style.overflow = "hidden"
  }

  const closeMenu = () => {
    mobileOverlay.classList.remove("active")
    mobileToggle.setAttribute("aria-expanded", "false")
    body.style.overflow = ""
  }

  mobileToggle.addEventListener("click", openMenu)
  mobileClose.addEventListener("click", closeMenu)

  // Close menu on link click
  const mobileLinks = document.querySelectorAll(".navigation-mobile-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  // Close menu on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileOverlay.classList.contains("active")) {
      closeMenu()
    }
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-container4 {
            display: none;
          }
          .navigation-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
