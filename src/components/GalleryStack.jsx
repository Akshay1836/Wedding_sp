import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './gallery-stack.css'

const images = [
  { src: '/wed6.jpg', caption: "Bridal Details" },
  { src: '/wed2.jpg', caption: "First Dance" },
  { src: '/wed8.jpg', caption: "Couple Walk" },
  { src: '/wed4.jpg', caption: "Rings Close-up" },
  { src: '/wed1.jpg', caption: "Bride & Groom Candid" },
  { src: '/wed7.jpg', caption: "Groom's Smile" },
  { src: '/wed3.jpg', caption: "Portrait in the Garden" },
  { src: '/wed5.jpg', caption: "Ceremony Moments" },

]

function GalleryStack({
  sectionTitle = 'Love Stories in Frames',
  sectionSubtext = 'Explore captured moments of joy, love, and celebration. Each image tells a unique story from our wedding photography portfolio.'
}){
  return (
    <section id="gallery-stack" className="gallery-stack-section">
      <div className="container gallery-stack-inner">
        <div className="gallery-stack-heading">
          <h2 className="section-title">{sectionTitle}</h2>
        </div>
        <div className="gallery-stack-subtext-wrap">
          <p className="gallery-subtext">{sectionSubtext}</p>
        </div>
      </div>

      <div className="gallery-stack-swiper-wrap full-bleed">
   
        <Swiper
          modules={[Pagination, Navigation]}
          className="gallery-stack-swiper"
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={16}
          pagination={{ clickable: true }}
          navigation
          loop={images.length > 2}
          rewind={false}
          loopedSlides={images.length}
          loopAdditionalSlides={images.length}
          breakpoints={{
            700: {
              slidesPerView: 'auto',
              centeredSlides: false,
              spaceBetween: -6,
            },
          }}
        >
          {images.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="gallery-stack-slide-card" tabIndex={0}>
                <img src={item.src} alt={item.caption || `Wedding ${i+1}`} loading="lazy" />
                <div className="gallery-stack-caption" aria-hidden>
                  <div className="caption-inner">{item.caption}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default GalleryStack;