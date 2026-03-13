import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './fabulous-gallery.css'

const MotionLink = motion(Link)

const galleryImages = [
  { src: '/wed33.jpg', alt: 'Cinematic courtyard portrait', size: 'wide' },
  { src: '/wed29.jpg', alt: 'Bride entry emotional moment', size: 'tall' },
  { src: '/wed35.jpg', alt: 'Ceremony details and decor capture', size: 'tall' },
  { src: '/wed30.jpg', alt: 'Joyful pre-ceremony candid frame', size: 'mid' },
  { src: '/wed38.jpg', alt: 'Couple portrait with elegant styling', size: 'mid' },
  { src: '/wed31.jpg', alt: 'Family rituals and blessings', size: 'wide' },
  { src: '/wed36.jpg', alt: 'Bride and groom portrait after ceremony', size: 'tall' },
  { src: '/wed39.jpg', alt: 'Close-up candid wedding smile', size: 'wide' },
  { src: '/wed34.jpg', alt: 'Elegant bridal portrait with veil', size: 'mid' },
  { src: '/wed32.jpg', alt: 'Family celebration at wedding stage', size: 'tall' },
  { src: '/wed37.jpg', alt: 'Decor and floral setup before function', size: 'mid' },
  { src: '/wed29.jpg', alt: 'Couple walking hand in hand', size: 'wide' },
  { src: '/wed26.jpg', alt: 'Wedding ceremony emotional moment', size: 'mid' },
  { src: '/wed24.jpg', alt: 'Sunset silhouette couple frame', size: 'tall' },
  { src: '/wed27.jpg', alt: 'Grand reception dance frame', size: 'wide' },
  { src: '/wed12.jpg', alt: 'Celebration dance and crowd energy', size: 'wide' },
  { src: '/wed10.jpg', alt: 'Ritual close-up with warm tones', size: 'mid' },
  { src: '/wed11.jpg', alt: 'Portrait under evening lights', size: 'tall' },
  { src: '/wed13.jpg', alt: 'Bride candid with friends', size: 'mid' },
  { src: '/wed14.jpg', alt: 'Cinematic couple silhouette frame', size: 'tall' },
  { src: '/wed15.jpg', alt: 'Reception decor and mood lighting', size: 'mid' },
]

const parentVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 34, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function FabulousGallery() {
  return (
    <section className="fabulous-gallery-section" aria-labelledby="fabulous-gallery-heading">
      <div className="container fabulous-gallery-inner">
        <motion.div
          className="fabulous-gallery-hero"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <p className="gallery-kicker">Gallery</p>
          <h2 id="fabulous-gallery-heading" className="gallery-title-stack" aria-label="Cinematic Wedding Gallery">
            <span className="gallery-title-line">CINEMATIC</span>
            <span className="gallery-title-line">WEDDING GALLERY</span>
          </h2>
          <p className="gallery-hero-lead">
            A curated collection of heartfelt frames, dynamic movement, and timeless moments from real weddings.
          </p>
          <div className="gallery-meta-row" aria-label="Gallery highlights">
            <span>2000+ delivered photos</span>
            <span>Real weddings</span>
            <span>Editorial + candid style</span>
          </div>
        </motion.div>

        <div className="film-strip" aria-hidden="true">
          <div className="film-strip-track">
            {['/wed29.jpg', '/wed33.jpg', '/wed30.jpg', '/wed36.jpg', '/wed31.jpg', '/wed38.jpg', '/wed32.jpg', '/wed29.jpg', '/wed33.jpg', '/wed30.jpg', '/wed36.jpg', '/wed31.jpg', '/wed38.jpg', '/wed32.jpg'].map((src, i) => (
              <img key={`${src}-${i}`} src={src} alt="" loading="lazy" />
            ))}
          </div>
        </div>

        <motion.div
          className="fabulous-grid"
          variants={parentVariants}
          initial="hidden"
          animate="show"
        >
          {galleryImages.map((image, index) => (
            <motion.figure
              key={`${image.src}-${index}`}
              className={`fabulous-card ${image.size}`}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02, rotate: index % 2 === 0 ? -0.4 : 0.4 }}
              transition={{ type: 'spring', stiffness: 180, damping: 18 }}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption>{image.alt}</figcaption>
            </motion.figure>
          ))}
        </motion.div>

        <motion.div
          className="gallery-bottom-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="gallery-cta-copy">
            <p className="gallery-cta-kicker">Ready to create yours?</p>
            <h3>Love This Visual Style?</h3>
            <p className="gallery-cta-sub">Tell us your date, city, and vision. We will craft a tailored wedding coverage plan.</p>
          </div>
          <MotionLink
            to="/details-form"
            className="gallery-cta-btn"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 240, damping: 18 }}
          >
            <span>Book Your Date</span>
          </MotionLink>
        </motion.div>
      </div>
    </section>
  )
}
