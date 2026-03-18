import React, { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './cinematic-hero.css'

const slides = [
  {
    id: '01',
    title: 'Wedding Stories',
    text: 'Emotion-first wedding photography that captures real moments, family warmth, and timeless beauty.',
    category: 'Signature',
    image: '/wed18.jpg',
    position: 'center center',
  },
  {
    id: '02',
    title: 'Sacred Rituals',
    text: 'From vows to blessings, each ceremony detail is documented with elegant and storytelling.',
    category: 'Ceremony',
    image: '/wed54.jpg',
    position: 'center center',
  },
  {
    id: '03',
    title: 'Couple Portraits',
    text: 'Editorial portraits designed with natural light, graceful direction, and composition.',
    category: 'Portraits',
    image: '/wed51.jpg',
    position: 'center center',
  },
  {
    id: '04',
    title: 'Reception Highlights',
    text: 'Grand entries, first dances, and celebration moments delivered with cinematic style.',
    category: 'Reception',
    image: '/wed55.jpg',
    position: 'center center',
  },
]

export default function CinematicHero() {
  const USE_LOCAL_INTRO = typeof window !== 'undefined' && window.sessionStorage.getItem('cin-hero-intro-done') !== '1'
  const [activeIndex, setActiveIndex] = useState(0)
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const [isReady, setIsReady] = useState(!USE_LOCAL_INTRO)
  const [loadProgress, setLoadProgress] = useState(USE_LOCAL_INTRO ? 0 : 100)

  const activeSlide = useMemo(() => slides[activeIndex], [activeIndex])

  function goPrev() {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  function goNext() {
    setActiveIndex((prev) => (prev + 1) % slides.length)
  }

  function selectSlide(index) {
    setActiveIndex(index)
    setIsOverlayOpen(false)
  }

  useEffect(() => {
    if (!USE_LOCAL_INTRO) return undefined

    let isCancelled = false
    let loadedCount = 0

    const onAssetDone = () => {
      if (isCancelled) return
      loadedCount += 1
      const pct = Math.round((loadedCount / slides.length) * 100)
      setLoadProgress(pct)
      if (loadedCount === slides.length) {
        setTimeout(() => {
          if (!isCancelled) {
            setIsReady(true)
            if (typeof window !== 'undefined') {
              window.sessionStorage.setItem('cin-hero-intro-done', '1')
            }
          }
        }, 180)
      }
    }

    slides.forEach((slide) => {
      const img = new Image()
      img.src = slide.image
      img.onload = onAssetDone
      img.onerror = onAssetDone
    })

    return () => {
      isCancelled = true
    }
  }, [USE_LOCAL_INTRO])

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'ArrowLeft') goPrev()
      if (event.key === 'ArrowRight') goNext()
      if (event.key === 'Escape') setIsOverlayOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (!isOverlayOpen) return undefined
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isOverlayOpen])

  return (
    <>
      <section className="cin-hero">
        <div className="cin-bg-stage" aria-hidden="true">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.image}
              className="cin-bg-layer"
              style={{
                backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.2), rgba(5, 5, 5, 0.62)), url(${activeSlide.image})`,
                backgroundPosition: activeSlide.position,
              }}
              initial={{ opacity: isReady ? 0.2 : 1, scale: isReady ? 1.04 : 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.62, ease: 'easeOut' }}
            />
          </AnimatePresence>
        </div>

        {USE_LOCAL_INTRO && (
          <AnimatePresence>
            {!isReady && (
              <motion.div
                className="cin-loader"
                initial={{ y: '0%' }}
                animate={{ y: '0%' }}
                exit={{ y: '-100%' }}
                transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="cin-loader-box">
                  <p>Loading...</p>
                  <strong>{loadProgress}%</strong>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}

        <div className="container cin-hero-inner">
          <div className="cin-meta-row">
            <p className="cin-kicker">Cinemotion Pictures</p>
            <button className="cin-open-overlay" type="button" onClick={() => setIsOverlayOpen(true)}>
              Select Style
            </button>
          </div>

          <div className="cin-main-grid">
            <AnimatePresence mode="wait">
              <motion.div
                key={`title-${activeSlide.id}`}
                className="cin-title-block"
                initial={{ opacity: 0, y: isReady ? 28 : 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.44, ease: 'easeOut' }}
              >
                <div className="cin-number-wrap">
                  <span className="cin-number">{activeSlide.id}</span>
                  <span className="cin-number-total">/ {String(slides.length).padStart(2, '0')}</span>
                </div>
                <h1 className="cin-title">{activeSlide.title}</h1>
                <p className="cin-text">{activeSlide.text}</p>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`info-${activeSlide.id}`}
                className="cin-info-box"
                initial={{ opacity: 0, y: isReady ? 24 : 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.42, ease: 'easeOut', delay: 0.06 }}
              >
                <p className="cin-info-category">{activeSlide.category}</p>
                <h3>Need More Info & Pricing?</h3>
                <p>Tell us your date and vision. We will share collections that fit your celebration.</p>
                <Link to="/details-form" className="cin-info-link">Contact Us</Link>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="cin-controls" aria-label="Hero slider controls">
            <button type="button" className="cin-control-btn" onClick={goPrev} aria-label="Previous slide" disabled={!isReady}>
              <span className="cin-control-icon" aria-hidden="true">&#8249;</span>
            </button>
            <button type="button" className="cin-control-btn" onClick={goNext} aria-label="Next slide" disabled={!isReady}>
              <span className="cin-control-icon" aria-hidden="true">&#8250;</span>
            </button>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isOverlayOpen && (
          <motion.div
            className="cin-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Select your purpose"
            onClick={() => setIsOverlayOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <motion.div
              className="cin-overlay-inner"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, y: 26, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.99 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="cin-overlay-head">
                <div>
                  <h3>Select your purpose</h3>
                  <p>You can click any preview to switch the hero instantly.</p>
                </div>
                <button className="cin-close" type="button" onClick={() => setIsOverlayOpen(false)}>
                  Close
                </button>
              </div>

              <div className="cin-preview-grid">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    className={`cin-preview-card ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => selectSlide(index)}
                    style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.38)), url(${slide.image})` }}
                  >
                    <span className="cin-preview-number">{slide.id}</span>
                    <span className="cin-preview-title">{slide.category}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
