import React, { useRef, useEffect } from 'react'

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
          <img ref={mainRef} className="main-img" src="/wed5.jfif" alt="Portrait of a couple embracing" />
          <img ref={accentRef} className="accent-img" src="/wed6.jfif" alt="Small scene of a seaside ceremony" />
        </div>

        <div className="about-content">
          <h2 className="about-title">We craft <span className="accent">unforgettable</span> wedding stories</h2>
          <p className="about-sub">Cinematic imagery. Honest moments. A relaxed experience.</p>

          <p className="about-copy">Picturthat is a London-based creative studio crafting cinematic wedding photography and film. We combine documentary instincts with refined composition to create imagery that feels natural, timeless and deeply personal. From full-day coverage to bespoke films and keepsake albums, we design a calm, thoughtful experience that lets your story unfold.</p>

          <div className="about-note">Free consultation available</div>
        </div>
      </div>
    </section>
  )
}
