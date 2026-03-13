import React from 'react'
import { motion } from 'framer-motion'
import './expertise.css'

const cards = [
  {
    title: 'Cinematic Storytelling',
    copy:
      'Highlight films and full edits with careful colour grading and sound design to preserve the emotion of your day.',
    img: '/wed16.jpg',
  },
  {
    title: 'Heirloom Albums',
    copy:
      'Handmade luxury albums and archival prints — heirloom-quality keepsakes crafted to last generations.',
    img: '/wed21.jpg',
  },
  {
    title: 'Planning & Direction',
    copy:
      'We coordinate timeline and creative direction so your story unfolds naturally and beautifully.',
    img: '/wed42.jpg',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.4, delayChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 36, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.6, ease: [0.22, 0.9, 0.15, 1] },
  },
}

export default function Expertise() {
  return (
    <section className="expertise-section">
      <div className="expertise-inner container">
        <div className="expertise-left">
          <span className="eyebrow">OUR EXPERTISE</span>
          <h2 className="expertise-title">
            Complex Problems.<br />
            Elegant Solutions.
          </h2>
        </div>

        <div className="expertise-right">
          <p className="expertise-copy">
            We craft thoughtful, timeless solutions for weddings — from cinematic storytelling to heirloom
            keepsakes. Below are a few areas where we excel.
          </p>

          <motion.div
            className="expertise-cards"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {cards.map((c, idx) => (
              <motion.article className="expertise-card" key={idx} variants={item} tabIndex={0}>
                <div className="card-thumb">
                  <img src={c.img} alt={c.title} />
                </div>

                <div className="card-body">
                  <h3>{c.title}</h3>
                  <p>{c.copy}</p>
                </div>

                <div className="card-cta" aria-hidden>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M9 6l6 6-6 6" stroke="#0b0b0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
