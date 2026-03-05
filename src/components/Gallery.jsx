import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// curated wedding imagery
const images = [
  '/wed1.jfif',
  '/wed2.jfif',
  '/wed3.jfif',
  '/wed4.jfif',
  '/wed5.jfif',
  '/wed6.jfif',
  '/wed7.jfif',
  '/wed8.jfif',
  '/wed9.jfif',
  '/wed10.jfif',
  '/wed11.jfif',
  '/wed12.jfif',
  '/wed13.jfif',
   '/wed5.jfif',
  '/wed6.jfif',
  '/wed7.jfif',
  '/wed8.jfif',
  '/wed9.jfif',
  '/wed10.jfif',
  '/wed11.jfif',
  '/wed12.jfif',
  '/wed13.jfif',
  '/wed18.jfif',
  '/wed19.jfif'
]

function chunk(arr, size) {
  const out = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}

export default function Gallery(){
  const slides = chunk(images, 6) // each slide will show a 2x3 grid

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
          autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop
        >
          {slides.map((group, si) => (
            <SwiperSlide key={si}>
              <div className="slide-grid">
                {group.map((src, i) => (
                  <div className="slide-card" key={i}>
                    <img src={src} alt={`Wedding ${si * 6 + i + 1}`} loading="lazy" />
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
