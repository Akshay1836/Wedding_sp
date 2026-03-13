import React from 'react'
import './footer.css'

const footerColumns = [
  {
    title: 'PORTFOLIO',
    items: ['All', 'About', 'Watch Now'],
  },
  {
    title: 'SERVICES',
    items: [
      'Wedding Photography',
      'Wedding Videography',
      'Engagement Sessions',
      'Elopements',
      'Albums & Prints',
      'Full-Day Coverage',
    ],
  },
  {
    title: 'CINEMOTION PICTURES',
    items: ['Home', 'FAQs', 'Terms of Use', 'Privacy Policy', 'Cookie Policy', 'Contact'],
  },
]

const socialLinks = [
  {
    label: 'Instagram',
    className: 'social-large',
    href: 'https://www.instagram.com/cinemotionpictures.uk',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: 'TikTok',
    className: 'social-large',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M17 7.5c-.5 0-1-.1-1.5-.2v5.7a3.5 3.5 0 1 1-3.5-3.5V19a5 5 0 1 0 5-5v-6.0z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: 'X',
    className: 'social-small',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M7 7l10 10M17 7L7 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    className: 'social-small',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M15 8.5h1.8V5.7H15c-1.6 0-2.8 1.1-2.8 2.8V11H10v2.3h2.2V19h2.6v-5.7H17l.5-2.3h-2.1V8.9c0-.3.2-.4.4-.4z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    className: 'social-small',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="2.5" y="5" width="19" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M10 9.5l5 3-5 3v-6z" fill="currentColor"/>
      </svg>
    ),
  },
]

export default function Footer(){
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {footerColumns.map((column) => (
          <div className="footer-col" key={column.title}>
            <div className="footer-box">
              <h5>{column.title}</h5>
              <ul>
                {column.items.map((item) => (
                  <li key={`${column.title}-${item}`}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="footer-col">
          <div className="footer-box social-boxes">
              <div className="social-grid">
                {socialLinks.slice(0, 2).map((social) => (
                  <a key={social.label} className={social.className} href={social.href} aria-label={social.label} target="_blank" rel="noreferrer">
                    {social.icon}
                  </a>
                ))}
                <div className="grid-spacer" />
                {socialLinks.slice(2).map((social) => (
                  <a key={social.label} className={social.className} href={social.href} aria-label={social.label} target="_blank" rel="noreferrer">
                    {social.icon}
                  </a>
                ))}
              </div>
          </div>
        </div>

        <div className="footer-meta" role="contentinfo" aria-label="Footer details">
          <p>{'\u00A9'} {year} Cinemotion Pictures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
