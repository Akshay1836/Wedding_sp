import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// curated wedding imagery
const images = [
  '/wed33.jpg',
  '/wed29.jpg',
  '/wed36.jpg',
  '/wed31.jpg',
  '/wed39.jpg',
  '/wed34.jpg',
  '/wed30.jpg',
  '/wed37.jpg',
  '/wed32.jpg',
  '/wed35.jpg',
  '/wed38.jpg',
  '/wed4.jpg',
  '/wed1.jpg',
  '/wed7.jpg',
  '/wed10.jpg',
  '/wed2.jpg',
  '/wed12.jpg',
  '/wed5.jpg',
  '/wed8.jpg',

  '/wed11.jpg',

]

function chunk(arr, size) {
  const out = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}

export default function Gallery(){
  const slides = chunk(images, 10) // each slide will show a 2x5 grid on desktop

  return (
    <section id="gallery" className="gallery-section">
      <div className="container gallery-inner">
        <div className="gallery-heading">
          <h2 className="section-title">Wedding Gallery</h2>
        </div>
        <div className="gallery-subtext-wrap">
          <p className="gallery-subtext">A glimpse into the beautiful moments we've captured and celebrated.</p>
        </div>
      </div>

      {/* full-bleed swiper below the centered container */}
      <div className="gallery-swiper-wrap full-bleed">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          className="gallery-swiper"
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop
        >
          {slides.map((group, si) => (
            <SwiperSlide key={si}>
              <div className="slide-grid">
                {group.map((src, i) => (
                  <div className="slide-card" key={i}>
                    <img src={src} alt={`Wedding ${si * 10 + i + 1}`} loading="lazy" />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  </section>
  )
}
