import React from 'react'
import './services-grid.css'

export default function ServicesGrid(){
  const items = [
    { id: 'photo', img: '/wed3.jpg', label: 'PHOTOGRAPHY', href: '#photography' },
    { id: 'film', img: '/wed11.jpg', label: 'CINEMATOGRAPHY', href: '#cinematography' },
    { id: 'lux', img: '/wed7.jpg', label: 'WEDDING TRANSPORT', href: '#transport' }
  ]

  return (
    <section className="featured-grid">
      <div className="container grid-inner">
        {items.map(item => (
          <a key={item.id} className="grid-card" href={item.href} aria-label={item.label}>
            <div className="card-media">
              <img src={item.img} alt={item.label} loading="lazy" />
            </div>
            <div className="card-caption">{item.label}</div>
          </a>
        ))}
      </div>
    </section>
  )
}
