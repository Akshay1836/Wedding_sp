import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './fabulous-gallery.css'

const MotionLink = motion(Link)

const galleryImages = [
  { src: '/wed33.jpg', alt: 'Bride entry emotional moment', size: 'tall' },
  { src: '/wed45.jfif', alt: 'Cinematic courtyard portrait', size: 'wide' },
  { src: '/wed30.jpg', alt: 'Joyful pre-ceremony candid frame', size: 'mid' },
  { src: '/wed38.jpg', alt: 'Couple portrait with elegant styling', size: 'mid' },
  { src: '/wed12.jpg', alt: 'Bride and groom portrait after ceremony', size: 'tall' },
  { src: '/wed35.jpg', alt: 'Ceremony details and decor capture', size: 'tall' },
  { src: '/wed31.jpg', alt: 'Family rituals and blessings', size: 'wide' },
  { src: '/wed34.jpg', alt: 'Elegant bridal portrait with veil', size: 'mid' },
  { src: '/wed2.jpg', alt: 'Close-up candid wedding smile', size: 'wide' },
  { src: '/wed32.jpg', alt: 'Family celebration at wedding stage', size: 'tall' },
  { src: '/wed26.jpg', alt: 'Couple walking hand in hand', size: 'wide' },
  { src: '/wed37.jpg', alt: 'Decor and floral setup before function', size: 'mid' },
  { src: '/wed24.jpg', alt: 'Sunset silhouette couple frame', size: 'tall' },
  { src: '/wed44.jfif', alt: 'Celebration dance and crowd energy', size: 'wide' },
  { src: '/wed10.jpg', alt: 'Ritual close-up with warm tones', size: 'mid' },
  { src: '/wed40.jfif', alt: 'Grand reception dance frame', size: 'wide' },
  { src: '/wed11.jpg', alt: 'Portrait under evening lights', size: 'tall' },
  { src: '/wed34.jpg', alt: 'Wedding ceremony emotional moment', size: 'mid' },
  { src: '/wed13.jpg', alt: 'Bride candid with friends', size: 'mid' },
  { src: '/wed15.jpg', alt: 'Reception decor and mood lighting', size: 'mid' },
  { src: '/wed14.jpg', alt: 'Cinematic couple silhouette frame', size: 'tall' },
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
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  function openLightbox(index) {
    setActiveIndex(index)
    setIsLightboxOpen(true)
  }

  function closeLightbox() {
    setIsLightboxOpen(false)
  }

  function goNext() {
    setActiveIndex((prev) => (prev + 1) % galleryImages.length)
  }

  function goPrev() {
    setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  useEffect(() => {
    if (!isLightboxOpen) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function onKeyDown(event) {
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowRight') goNext()
      if (event.key === 'ArrowLeft') goPrev()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [isLightboxOpen])

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
            {['/wed36.jpg', '/wed33.jpg', '/wed38.jpg', '/wed31.jpg', '/wed29.jpg', '/wed32.jpg', '/wed30.jpg', '/wed36.jpg', '/wed33.jpg', '/wed38.jpg', '/wed31.jpg', '/wed29.jpg', '/wed32.jpg', '/wed30.jpg'].map((src, i) => (
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
              role="button"
              tabIndex={0}
              onClick={() => openLightbox(index)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  openLightbox(index)
                }
              }}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption>{image.alt}</figcaption>
            </motion.figure>
          ))}
        </motion.div>

        {isLightboxOpen && (
          <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Gallery lightbox" onClick={closeLightbox}>
            <button className="lightbox-close" type="button" onClick={closeLightbox} aria-label="Close lightbox">
              ×
            </button>

            <div className="lightbox-topbar" onClick={(event) => event.stopPropagation()}>
              <span className="lightbox-count">{String(activeIndex + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}</span>
            </div>

            <button
              className="lightbox-nav prev"
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                goPrev()
              }}
              aria-label="Previous image"
            >
              <span className="lightbox-nav-icon" aria-hidden="true">
                &#8249;
              </span>
            </button>

            <figure className="lightbox-figure" onClick={(event) => event.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={galleryImages[activeIndex].src + activeIndex}
                  src={galleryImages[activeIndex].src}
                  alt={galleryImages[activeIndex].alt}
                  loading="eager"
                  initial={{ opacity: 0.15, scale: 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.12, scale: 0.985 }}
                  transition={{ duration: 0.26, ease: 'easeOut' }}
                />
              </AnimatePresence>
            </figure>

            <button
              className="lightbox-nav next"
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                goNext()
              }}
              aria-label="Next image"
            >
              <span className="lightbox-nav-icon" aria-hidden="true">
                &#8250;
              </span>
            </button>

            <div className="lightbox-thumbs" onClick={(event) => event.stopPropagation()}>
              {galleryImages.map((image, index) => (
                <button
                  key={`thumb-${image.src}-${index}`}
                  type="button"
                  className={`lightbox-thumb ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Open image ${index + 1}`}
                >
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        )}

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
