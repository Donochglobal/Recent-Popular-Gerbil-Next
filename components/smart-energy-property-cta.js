import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const SmartEnergyPropertyCta = (props) => {
  return (
    <>
      <div className="smart-energy-property-cta-container1">
        <section className="smart-energy-property-cta">
          <div className="smart-energy-property-cta__container">
            <header className="smart-energy-property-cta__header">
              <h2 className="section-title">
                Smart Energy &amp; Property Solutions
              </h2>
              <p className="section-subtitle">
                Reliable solar systems, industrial energy solutions, and premium
                real estate opportunities designed for modern living and
                business growth.
              </p>
            </header>
            <div className="smart-energy-property-cta__grid">
              <Link href="/solar-solutions">
                <a>
                  <div className="smart-energy-property-cta__card">
                    <div className="smart-energy-property-cta__icon-wrapper">
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
                        <path d="M11 2h2m1.28 12l-4.56 8M21 22l-1.558-4H4.558M3 10v2"></path>
                        <path d="M6.245 15.04A2 2 0 0 1 8 14h12a1 1 0 0 1 .864 1.505l-3.11 5.457A2 2 0 0 1 16 22H4a1 1 0 0 1-.863-1.506zM7 2a4 4 0 0 1-4 4m5.66 1.66l1.41 1.41"></path>
                      </svg>
                    </div>
                    <h3 className="smart-energy-property-cta__card-title">
                      GO SOLAR TODAY
                    </h3>
                    <p className="smart-energy-property-cta__card-text">
                      Switch to clean, reliable, and cost-effective solar energy
                      solutions for homes and businesses.
                    </p>
                    <span className="btn-link">Explore Solar Solutions</span>
                  </div>
                </a>
              </Link>
              <Link href="/solar-solutions">
                <a>
                  <div className="smart-energy-property-cta__card">
                    <div className="smart-energy-property-cta__icon-wrapper">
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
                        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                        <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      </svg>
                    </div>
                    <h3 className="smart-energy-property-cta__card-title">
                      BUY HOME SOLAR SYSTEMS
                    </h3>
                    <p className="smart-energy-property-cta__card-text">
                      Discover complete residential solar packages including
                      panels, batteries, and smart inverters.
                    </p>
                    <span className="btn-link">Shop Home Systems</span>
                  </div>
                </a>
              </Link>
              <Link href="/solar-solutions">
                <a>
                  <div className="smart-energy-property-cta__card">
                    <div className="smart-energy-property-cta__icon-wrapper">
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
                        <path d="M12 16h.01M16 16h.01M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm5-3h.01"></path>
                      </svg>
                    </div>
                    <h3 className="smart-energy-property-cta__card-title">
                      FACTORY SOLAR INSTALLATIONS
                    </h3>
                    <p className="smart-energy-property-cta__card-text">
                      Industrial-grade solar and power backup systems designed
                      for factories, warehouses, and large facilities.
                    </p>
                    <span className="btn-link">Industrial Solutions</span>
                  </div>
                </a>
              </Link>
              <Link href="/lemoex-properties">
                <a>
                  <div className="smart-energy-property-cta__card">
                    <div className="smart-energy-property-cta__icon-wrapper">
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
                        <path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                        <rect x="4" y="2" rx="2" width="16" height="20"></rect>
                      </svg>
                    </div>
                    <h3 className="smart-energy-property-cta__card-title">
                      BUY YOUR HOME AT LEMOEX PROPERTIES
                    </h3>
                    <p className="smart-energy-property-cta__card-text">
                      Find premium homes, estates, and smart property investment
                      opportunities through Lemoex Properties.
                    </p>
                    <span className="btn-link">Explore Properties</span>
                  </div>
                </a>
              </Link>
              <Link href="/lemoex-properties">
                <a>
                  <div className="smart-energy-property-cta__card">
                    <div className="smart-energy-property-cta__icon-wrapper">
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
                    <h3 className="smart-energy-property-cta__card-title">
                      EXPLORE AVAILABLE LANDS
                    </h3>
                    <p className="smart-energy-property-cta__card-text">
                      Secure genuine land opportunities in developing and prime
                      locations with flexible options.
                    </p>
                    <span className="btn-link">View Lands</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <div className="smart-energy-property-cta-container2">
          <div className="smart-energy-property-cta-container3">
            <Script
              html={`<script defer data-name="smart-energy-property-cta-animations">
(function(){
  // No complex logic required as CSS handles the hover transitions and grid responsiveness.
  // Intersection Observer could be added here for fade-in effects if global animation level was higher.
  const ctaCards = document.querySelectorAll(".smart-energy-property-cta__card")

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const ctaObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }, index * 100)
        ctaObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  ctaCards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = "opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)"
    ctaObserver.observe(card)
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <div className="smart-energy-property-cta-container4">
          <div className="smart-energy-property-cta-container5">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.smart-energy-property-cta__card {
  transition: none;
}
.smart-energy-property-cta__card:hover {
  transform: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .smart-energy-property-cta-container1 {
            display: contents;
          }
          .smart-energy-property-cta-container2 {
            display: none;
          }
          .smart-energy-property-cta-container3 {
            display: contents;
          }
          .smart-energy-property-cta-container4 {
            display: none;
          }
          .smart-energy-property-cta-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default SmartEnergyPropertyCta
