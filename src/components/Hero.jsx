import React, { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// for Swiper v10+ import modules from their module paths
import { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ChevronLeft, ChevronRight } from './Icons'

const slides = [
         { id: 3, img: '/wed26.jpg', alt: 'wedding 3' },
  { id: 1, img: '/wed21.webp', alt: 'wedding 1' },
  { id: 2, img: '/wed22.jpg', alt: 'wedding 2' }
 
]

export default function Hero(){
  const [index, setIndex] = useState(0)
  const swiperRef = useRef(null)
  const heroRef = useRef(null)
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

  return (
  <section className="hero large-hero" ref={heroRef}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        onSwiper={(s) => (swiperRef.current = s)}
        onSlideChange={(s) => setIndex(s.realIndex)}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        pagination={{ el: '.hero-pagination', clickable: true }}
        slidesPerView={1}
        loop
        speed={TRANSITION_SPEED}
        autoplay={{ delay: AUTOPLAY_DELAY, disableOnInteraction: false, pauseOnMouseEnter: true, waitForTransition: true }}
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            {/* use an actual image element with object-fit:cover for predictable sizing */}
            <img className="slide-bg" src={s.img} alt={s.alt} />
          </SwiperSlide>
        ))}

        {/* pagination and arrows live once for the Swiper container */}
        <div className="hero-carousel-indicator" aria-hidden>
          <div className="hero-pagination"></div>
        </div>

        <div className="hero-arrows" aria-hidden>
          <button className="arrow prev swiper-button-prev" aria-label="Previous slide">
            {/* swapped icons: show right chevron on the left control to swap positions visually */}
            <ChevronRight aria-hidden="true" />
          </button>
          <button className="arrow next swiper-button-next" aria-label="Next slide">
            <ChevronLeft aria-hidden="true" />
          </button>
        </div>
      </Swiper>

      {/* render overlay once so text doesn't move with slide transitions */}
      <div className="hero-overlay">
        <div className="container hero-content">
          <h2 className="hero-title">WEDDING</h2>
          <p className="hero-sub">We helps bring your magical day to life. We will follow you across the day wherever you wish.</p>
        </div>
      </div>
    </section>
  )
}
