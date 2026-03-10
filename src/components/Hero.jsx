import React, { useState, useRef, useEffect } from 'react'
// Swiper removed: using a static hero image instead
// arrow icons removed
import Loader from './Loader'

const slides = [
         { id: 3, img: '/wed28.jpg', alt: 'wedding 3' },
  { id: 1, img: '/wed28.jpg', alt: 'wedding 1' },
  { id: 2, img: '/wed28.jpg', alt: 'wedding 2' }
 
]

export default function Hero(){
  const [index, setIndex] = useState(0)
  // swiper removed
  const heroRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState('loading') // 'loading' | 'stack' | 'final'
  const [showText, setShowText] = useState(true)
  const lastY = useRef(typeof window !== 'undefined' ? window.scrollY : 0)
  // autoplay delay (ms) and transition speed (ms) for a slow, flowing carousel
  const AUTOPLAY_DELAY = 2000
  const TRANSITION_SPEED = 1000

  useEffect(() => {
    const heroEl = heroRef.current
    if (!heroEl) return

    const updateContrast = (idx) => {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.src = slides[idx].img
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas')
          canvas.width = img.width
          canvas.height = img.height
          const ctx = canvas.getContext('2d')
          ctx.drawImage(img, 0, 0)
          const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data
          let r=0,g=0,b=0,count=0
          for (let i = 0; i < data.length; i += 40) {
            r += data[i]; g += data[i+1]; b += data[i+2]; count++
          }
          const avg = (r/count*0.299 + g/count*0.587 + b/count*0.114)
          heroEl.classList.toggle('light', avg > 140)
        } catch (e) {
          heroEl.classList.remove('light')
        }
      }
      img.onerror = () => heroEl.classList.remove('light')
    }

    updateContrast(index)
    // update when index changes (onSlideChange already sets index state)
  }, [index])

  // Loading -> stack -> final sequence
  useEffect(() => {
    // preload images so reveal is smooth
    slides.forEach(s => { const i = new Image(); i.src = s.img })

    let raf
    let start
    const duration = 1500
    function step(ts){
      if (!start) start = ts
      const elapsed = ts - start
      const pct = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(pct)
      if (elapsed < duration) raf = requestAnimationFrame(step)
      else {
          // small pause then go straight to final hero (skip stacked preview)
          setTimeout(() => setPhase('final'), 350)
        }
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  // no stacked preview: loading -> final handled in the loader completion

  // reflect loading state on the document so header can adapt
  useEffect(() => {
    const active = phase !== 'final'
    document.body.classList.toggle('hero-loading-active', active)
    return () => document.body.classList.remove('hero-loading-active')
  }, [phase])

  // hide hero texts when user scrolls up; show when scrolling down
  useEffect(() => {
    const heroEl = heroRef.current
    const overlay = heroEl && heroEl.querySelector('.hero-overlay')

    function applyHidden(hide){
      setShowText(!hide)
      if (overlay) {
        overlay.classList.toggle('hidden-on-scroll', hide)
      }
    }

    function onScroll(){
      const y = window.scrollY || 0
      const delta = y - lastY.current
      // delta > 0 means scrolling down (page moved up) -> hide
      if (delta > 2) applyHidden(true)
      else if (delta < -2) applyHidden(false)
      lastY.current = y
    }

    function onWheel(e){
      // wheel.deltaY > 0 => scrolling down, <0 scrolling up
      if (e.deltaY > 0) applyHidden(true)
      else if (e.deltaY < 0) applyHidden(false)
    }

    let touchStartY = null
    function onTouchStart(e){ touchStartY = e.touches && e.touches[0] ? e.touches[0].clientY : null }
    function onTouchMove(e){
      if (touchStartY == null) return
      const y = e.touches[0].clientY
      const delta = y - touchStartY
      // finger moved up (delta < 0) -> page scroll down -> hide
      if (delta < -6) applyHidden(true)
      else if (delta > 6) applyHidden(false)
      touchStartY = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  // when finalize, stop the swiper autoplay and lock the background to the chosen stack image
  useEffect(() => {
    if (phase !== 'final') return
    // our stack reveal order used to pick a final image; use index 1 as final
    const finalImage = slides[1] && slides[1].img
    if (finalImage && heroRef.current) {
      const img = new Image()
      img.src = finalImage
      img.onload = () => {
        heroRef.current.style.backgroundImage = `url(${finalImage})`
        heroRef.current.style.backgroundSize = 'cover'
        heroRef.current.style.backgroundPosition = 'center'
        heroRef.current.classList.add('bg-fade-in')
      }
    }
  }, [phase])

  return (
  <section className={`hero large-hero ${phase === 'final' ? 'hero-ready' : ''}`} ref={heroRef}>
      {/* static hero image (Swiper removed) */}
      <div className="hero-static">
        <img className="slide-bg" src={slides[1].img} alt={slides[1].alt} />
      </div>

      {/* cinematic loading overlay (percent counter) */}
      {phase === 'loading' && (
        <Loader progress={progress} />
      )}

      {/* render overlay once so text doesn't move with slide transitions */}
<div className={`hero-overlay ${!showText ? 'hidden-on-scroll' : ''}`}>
  <div className="container hero-grid">
    <div className="hero-left">
      <p className="hero-sub">
        Capturing heartfelt moments<br/>
        and timeless memories<br/>
        of your wedding day
      </p>
    </div>

    <div className="hero-right" aria-hidden>
      <h1 className="hero-title hero-title--stack">
        Timeless<br/>Love Stories
      </h1>
    </div>
  </div>
</div>
    </section>
  )
}
