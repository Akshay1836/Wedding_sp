import React, { useState, useRef } from 'react'
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
  // autoplay delay (ms) and transition speed (ms) for a slow, flowing carousel
  const AUTOPLAY_DELAY = 3000
  const TRANSITION_SPEED = 1000

  return (
    <section className="hero large-hero">
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
            <div className="slide-bg" style={{ backgroundImage: `url(${s.img})` }} role="img" aria-label={s.alt} />
            <div className="hero-overlay">
              <div className="container hero-content">
                <h2 className="hero-title">WEDDING</h2>
                <p className="hero-sub">Picturthat helps bring your magical day to life. We will follow you across the day wherever you wish.</p>

                <div className="share-vertical" aria-hidden>
                  <div className="share-line"></div>
                  <div className="share-text">SHARE</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* pagination and arrows live once for the Swiper container */}
        <div className="hero-carousel-indicator" aria-hidden>
          <div className="hero-pagination"></div>
        </div>

        <div className="hero-arrows" aria-hidden>
          <button className="arrow prev swiper-button-prev" aria-label="Previous slide">
            <ChevronLeft aria-hidden="true" />
          </button>
          <button className="arrow next swiper-button-next" aria-label="Next slide">
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      </Swiper>
    </section>
  )
}
