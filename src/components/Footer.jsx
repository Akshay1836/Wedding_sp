import React from 'react'
import './footer.css'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <div className="footer-box">
            <h5>FILMS</h5>
            <ul>
              <li>All</li>
              <li>In Theaters</li>
              <li>Watch Now</li>
            </ul>
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-box">
            <h5>SHOP</h5>
            <ul>
              <li>All</li>
              <li>Apparel</li>
              <li>Collectibles</li>
              <li>Posters</li>
              <li>Bags</li>
              <li>Toys</li>
              <li>Blu-Ray</li>
            </ul>
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-box">
            <h5>NEON</h5>
            <ul>
              <li>Home</li>
              <li>FAQs</li>
              <li>Shipping & Returns</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Contact</li>
              <li>Host a Screening</li>
            </ul>
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-box social-boxes">
              <div className="social-grid">
                <a className="social-large" href="#" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor"/>
                  </svg>
                </a>

                <a className="social-large" href="#" aria-label="TikTok">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M17 7.5c-.5 0-1-.1-1.5-.2v5.7a3.5 3.5 0 1 1-3.5-3.5V19a5 5 0 1 0 5-5v-6.0z" fill="currentColor"/>
                  </svg>
                </a>

                <div className="grid-spacer" />

                <a className="social-small" href="#" aria-label="X">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M7 7l10 10M17 7L7 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>

                <a className="social-small" href="#" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M15 8.5h1.8V5.7H15c-1.6 0-2.8 1.1-2.8 2.8V11H10v2.3h2.2V19h2.6v-5.7H17l.5-2.3h-2.1V8.9c0-.3.2-.4.4-.4z" fill="currentColor"/>
                  </svg>
                </a>

                <a className="social-small" href="#" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <rect x="2.5" y="5" width="19" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M10 9.5l5 3-5 3v-6z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
