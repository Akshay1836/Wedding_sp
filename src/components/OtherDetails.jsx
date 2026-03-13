import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './other-details.css'

const servicePillars = [
  {
    title: 'Photography & Film Direction',
    points: [
      'Editorial portraits with natural candid moments throughout the day.',
      'Lighting-first approach for indoor ceremonies and evening receptions.',
      'Shot planning for family groups so no key moments are missed.',
      'Story-led highlight edits built around your ceremony and speeches.',
      'Clean audio capture for vows, rituals, and emotional reactions.',
      'Delivery formats optimized for mobile, TV, and social sharing.',
    ],
  },
  {
    title: 'Planning Support',
    points: [
      'Timeline consultation to align makeup, rituals, portraits, and events.',
      'Venue and light scouting notes shared before the wedding day.',
      'Vendor coordination for smooth transitions between events.',
    ],
  },
]

const processSteps = [
  { title: 'Discovery Call', desc: 'We discuss your style, events, and family priorities.' },
  { title: 'Planning Session', desc: 'You receive a custom timeline and coverage recommendation.' },
  { title: 'Wedding Coverage', desc: 'Our team captures every event with coordinated photo and film teams.' },
  { title: 'Post Production', desc: 'Color grading, curation, and storytelling edits are completed carefully.' },
  { title: 'Final Delivery', desc: 'Gallery, films, and optional album design are shared in one place.' },
]

const packageIncludes = [
  'Lead photographer and directed portrait sessions',
  'Second shooter for guest and candid coverage',
  'Drone visuals (venue and weather permitting)',
  'Sneak peek set delivered in 3-5 days',
  'Private online gallery with download access',
  'Album design consultation on request',
]

const faqList = [
  {
    q: 'How early should we book?',
    a: 'Most couples book 3-8 months in advance. Popular dates fill quickly during peak season.',
  },
  {
    q: 'Do you travel outside the city?',
    a: 'Yes. We cover destination weddings and outstation events with a clear travel plan.',
  },
  {
    q: 'Can we customize coverage?',
    a: 'Yes. We tailor coverage based on your ceremonies, guest count, and venue timeline.',
  },
]

const visualMoments = [
  { src: '/wed44.jfif', alt: 'Bride portrait moment', label: 'Bridal Portraits' },
  { src: '/wed45.jfif', alt: 'Couple sunset photoshoot', label: 'Function portraits' },
]

export default function OtherDetails() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="other-details-section" aria-labelledby="other-details-heading">
      <div className="container other-details-inner">
        <motion.div
          className="other-details-hero"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div>
            <p className="other-kicker">What We Do</p>
            <h2 id="other-details-heading" className="other-title-stack">
              {/* <span>WHAT WE DO</span> */}
              <span>WEDDING STORIES</span>
            </h2>
            <p className="other-hero-lead">
              We blend classic portraiture with documentary storytelling, so your wedding photos and films feel both timeless and personal.
            </p>
            <div className="other-stats" aria-label="Service highlights">
              <div>
                <strong>250+</strong>
                <span>Weddings Covered</span>
              </div>
              <div>
                <strong>48 hrs</strong>
                <span>Initial Response Time</span>
              </div>
              <div>
                <strong>4-6 wks</strong>
                <span>Final Delivery</span>
              </div>
            </div>
          </div>
          <img src="/wed46.jpg" alt="Wedding details and planning" className="other-hero-image" loading="lazy" />
        </motion.div>

        <div className="other-details-grid slim-grid">
          {servicePillars.map((card, index) => (
            <motion.article
              key={card.title}
              className="other-feature"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
            >
              <h3>{card.title}</h3>
              <ul>
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.section
          className="visual-strip"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5, delay: 0.16, ease: 'easeOut' }}
        >
          <div className="visual-strip-head">
            <h3>Signature Visual Style</h3>
            <p>We focus on emotions, detail shots, and intentional framing through every function.</p>
          </div>
          <div className="visual-grid">
            {visualMoments.map((item) => (
              <figure key={item.src} className="visual-frame">
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="workflow-block"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        >
          <h3>Our Workflow</h3>
          <div className="workflow-grid">
            {processSteps.map((step, idx) => (
              <article key={step.title} className="workflow-step">
                <span className="step-index">0{idx + 1}</span>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="editorial-block"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5, delay: 0.26, ease: 'easeOut' }}
        >
          <div className="info-columns">
            <div className="info-column">
              <h3>What Is Included</h3>
              <ul className="included-list">
                {packageIncludes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="info-column">
              <h3>Frequently Asked Questions</h3>
              <div className="faq-list" role="list">
              {faqList.map((item) => (
                <article key={item.q} className="faq-item" role="listitem">
                  <h4>{item.q}</h4>
                  <p>{item.a}</p>
                </article>
              ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="experience-note"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.45, delay: 0.32, ease: 'easeOut' }}
        >
          <h3>Client Experience Promise</h3>
          <p>
            From first call to final delivery, our team keeps communication clear, timelines realistic, and the process stress-free.
            You can stay present with your family while we manage the visual storytelling.
          </p>
        </motion.section>

        <motion.section
          className="other-cta"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.45, delay: 0.34, ease: 'easeOut' }}
        >
          <div>
            <h3>Ready To Plan Your Coverage?</h3>
            <p>Share your date and venue, and we will suggest the best plan for your events.</p>
          </div>
          <Link to="/details-form" className="other-cta-btn">Go To Inquiry Form</Link>
        </motion.section>
      </div>
    </section>
  )
}
