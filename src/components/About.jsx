import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function About(){
  const containerRef = useRef(null)
  const mainRef = useRef(null)
  const accentRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const main = mainRef.current
    const accent = accentRef.current
  if(!container || !main || !accent) return

  // ensure elements are flagged for transform optimization
  main.style.willChange = 'transform'
  accent.style.willChange = 'transform'

    let rafId = null

  function onScroll(){
      if(rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect()
        const vh = window.innerHeight || 1
        // compute normalized -1..1 center offset
        const center = rect.top + rect.height/2
        const ratio = (center - vh/2) / (vh/2)
        const clamp = (v, a=-1, b=1) => Math.max(a, Math.min(b, v))
        const r = clamp(ratio)

  // read strength from CSS variables (fallback to numbers)
  const style = getComputedStyle(container)
  const mainMove = parseFloat(style.getPropertyValue('--about-main-move')) || 12
  const accentMove = parseFloat(style.getPropertyValue('--about-accent-move')) || 28
  const mainScale = parseFloat(style.getPropertyValue('--about-main-scale')) || 1.01
  const accentScale = parseFloat(style.getPropertyValue('--about-accent-scale')) || 1.02

  // apply transforms (subtle): main moves up slightly, accent moves more
  const mainY = (-r) * mainMove // px
  const accentY = (r) * accentMove // px

  // use translate3d for better GPU compositing
  main.style.transform = `translate3d(0, ${mainY}px, 0) scale(${mainScale})`
  accent.style.transform = `translate3d(0, ${accentY}px, 0) scale(${accentScale})`
      })
    }

    // initial position
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if(rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section id="about" className="about-section">
      <div className="container about-inner" ref={containerRef}>
        <div className="about-visual">
          <img ref={mainRef} className="main-img" src="/wed4.jpg" alt="Portrait of a couple embracing" />
          <img ref={accentRef} className="accent-img" src="/wed18.jpg" alt="Small scene of a seaside ceremony" />
        </div>

        <div className="about-content">
          <h2 className="about-title">We craft <span className="accent">unforgettable</span> wedding stories</h2>
          <p className="about-sub">We create timeless wedding stories with a refined, editorial touch.
Elegant visuals. Genuine emotion. A seamless, considered experience.
</p>

          <p className="about-copy">Cinemotion is a London-based wedding photography and videography studio dedicated to storytelling with depth and style. Blending a documentary approach with an editorial eye, we capture moments as they naturally unfold—honest, sophisticated, and enduring. From comprehensive day coverage to bespoke films and beautifully crafted albums, we offer a calm, professional experience designed to let your story be told with authenticity and grace.</p>

          <Link className="about-note" to="/details-form">Book an appointment</Link>
        </div>
      </div>
    </section>
  )
}
