import React from 'react'
import './connect.css'

export default function ConnectWithUs(){
  return (
    <section className="connect-section">
      <div className="container connect-inner">
        <div className="hero-col">
          <h1 className="connect-hero">Connect With Us</h1>
          <p className="connect-sub">Stay in touch through our social platforms or reach out directly.</p>

          <div className="connect-body">
            <div className="social-grid">
              <a href="#" className="social-btn" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.4" />
                  <circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="1.4" />
                  <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" />
                </svg>
              </a>

              <a href="#" className="social-btn" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M15 8.5h1.8V5.7H15c-1.6 0-2.8 1.1-2.8 2.8V11H10v2.3h2.2V19h2.6v-5.7H17l.5-2.3h-2.1V8.9c0-.3.2-.4.4-.4z" fill="currentColor" />
                </svg>
              </a>

              <a href="#" className="social-btn" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M22 5.9c-.6.3-1.2.6-1.9.7.7-.4 1.2-1 1.4-1.8-.7.4-1.4.6-2.2.8C18.6 4.7 17.6 4 16.4 4c-1.6 0-2.9 1.3-2.9 2.9 0 .2 0 .4.1.6C10 7.3 7.1 5.9 5 3.6c-.3.5-.4 1-.4 1.6 0 1.1.6 2 1.5 2.6-.6 0-1.2-.2-1.7-.5v.1c0 1.4 1 2.6 2.3 2.9-.3.1-.6.2-.9.2-.2 0-.4 0-.6-.1.4 1.3 1.6 2.2 3 2.2-1.1.9-2.5 1.4-4 1.4H6c1.5.9 3.3 1.4 5.2 1.4 6.2 0 9.6-5.1 9.6-9.6v-.4c.7-.5 1.3-1.2 1.7-2z" fill="currentColor" />
                </svg>
              </a>

              <a href="#" className="social-btn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M6 9H3V21H6V9ZM4.5 3C3.7 3 3 3.7 3 4.5 3 5.3 3.7 6 4.5 6 5.3 6 6 5.3 6 4.5 6 3.7 5.3 3 4.5 3ZM21 21H18V14.5C18 12.6 17.5 11 15.2 11 12.9 11 12.4 12.5 12.4 14.4V21H9.4V9H12.2V10.5H12.3C12.7 9.6 13.9 8.7 15.7 8.7 19 8.7 21 10.9 21 14.2V21Z" fill="currentColor" />
                </svg>
              </a>

              <a href="#" className="social-btn" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <rect x="2.5" y="5" width="19" height="14" rx="3" stroke="currentColor" strokeWidth="1.4" fill="none" />
                  <path d="M10 9.5l5 3-5 3v-6z" fill="currentColor" />
                </svg>
              </a>
            </div>

            <div className="contact-card">
              <h4>Get in touch</h4>
              <p className="contact-item"><a href="mailto:info@wedding.com">info@wedding.com</a></p>
              <p className="contact-item muted">+44 (0) 20 3633 2627</p>
              <p className="contact-note">We typically reply within 24–48 hours.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
