import React from 'react'
import './services.css'

const serviceList = [
  {
    key: 'candid-photography',
    title: 'Candid Wedding Photography',
    desc:
      'Natural, emotion-led moments captured throughout your celebrations so every laugh, tear, and ritual feels real and timeless.',
    icon: 'camera',
  },
  {
    key: 'traditional-coverage',
    title: 'Traditional Ceremony Coverage',
    desc:
      'Complete documentation of all key rituals, family groups, and stage portraits with clean, classic compositions.',
    icon: 'calendar',
  },
  {
    key: 'pre-wedding',
    title: 'Pre-Wedding Couple Shoot',
    desc:
      'Styled outdoor or lifestyle sessions before the wedding day, perfect for invitations, decor screens, and keepsake memories.',
    icon: 'flowers',
  },
  {
    key: 'cinematic-films',
    title: 'Cinematic Wedding Films',
    desc:
      'Story-driven wedding films with music, colour grading, and audio moments crafted into a beautiful highlight narrative.',
    icon: 'film',
  },
  {
    key: 'reels-teasers',
    title: 'Instagram Reels & Teasers',
    desc:
      'Quick turnaround short edits designed for social media so you can share your wedding highlights with friends and family instantly.',
    icon: 'music',
  },
  {
    key: 'albums-prints',
    title: 'Premium Albums & Prints',
    desc: 'Elegant handcrafted albums and fine-art prints that preserve your wedding story in a timeless, tangible format.',
    icon: 'album',
  },
]

function Icon({ name }) {
  // small, lightweight inline SVG icons tuned for the wedding theme
  switch (name) {
    case 'camera':
      return (
        <svg aria-hidden="true" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="6" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="12" cy="13" r="3.2" stroke="currentColor" strokeWidth="1.2" />
          <path d="M7 6l1.2-2h7.6L17 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      )
    case 'film':
      return (
        <svg aria-hidden="true" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.2" />
          <path d="M7 4v16" stroke="currentColor" strokeWidth="1.2" />
          <path d="M17 4v16" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      )
    case 'album':
      return (
        <svg aria-hidden="true" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="5" width="14" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
          <path d="M18 8v10" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="7.5" cy="12.5" r="2.5" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      )
    case 'calendar':
      return (
        <svg aria-hidden="true" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.2" />
          <path d="M16 3v4M8 3v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      )
    case 'flowers':
      return (
        <svg aria-hidden="true" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.2" />
          <path d="M12 10.5c-1.8 0-3.6 1-4.8 2.6C5.6 15 6.8 18 9 18c.7 0 1.4-.3 2-.7.6.4 1.3.7 2 .7 2.2 0 3.4-3 1.8-4.9C15.6 11.5 13.8 10.5 12 10.5z" stroke="currentColor" strokeWidth="1.0" />
        </svg>
      )
    case 'music':
      return (
        <svg aria-hidden="true" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 17c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1z" stroke="currentColor" strokeWidth="1.2" />
          <path d="M9 16V6l10-3v10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    default:
      return null
  }
}

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-hero">
        <div className="hero-inner container">
          <h1 className="hero-title">Our Services</h1>
          <div className="hero-divider" aria-hidden="true"></div>
          <p className="hero-sub">
            From planning to celebration, we take care of every detail to make your dream wedding come true.
          </p>
        </div>
      </div>

      <div className="services-content container">
        <div className="services-grid" role="list">
          {serviceList.map((s, idx) => (
            <article className="service-card" key={s.key} role="listitem">
              <div className="card-icon" aria-hidden="true">
                <Icon name={s.icon} />
              </div>
              <div className="card-body">
                <div className="card-meta" aria-hidden="true">
                  <span className="service-index">{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
