import React from 'react'
import { Link } from 'react-router-dom'

export default function FeaturedProject(){
  return (
<section className="featured-project">
  <div className="container featured-inner">
    <p className="featured-kicker">LOVE STORIES WE’VE CELEBRATED</p>

    <h2 className="featured-title">
        FEATURED WEDDING
    </h2>

    <p className="featured-sub">
      A beautiful celebration filled with timeless romance, elegant décor, and unforgettable moments shared with family and friends.
    </p>

    <Link className="btn ghost featured-cta" to="/gallery">
      VIEW LOVE STORY
    </Link>
  </div>
</section>
  )
}
