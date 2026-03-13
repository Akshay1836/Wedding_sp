import React from 'react'
import './profile.css'

export default function ProfileHero(){
  return (
    <section className="profile-section">
      <div className="profile-inner container">
        <div className="profile-photo-wrap">
          <img className="profile-photo" src="/wed34.jpg" alt="Wedding moment" loading="lazy" />
        </div>

        <div className="profile-content">
          <h1 className="profile-title">OUR WORK</h1>
          <div className="profile-copy">
            <p>We capture every moment with care, creativity, and attention to detail — from quiet, candid glances to the big, joyful celebrations. Our approach blends documentary storytelling with refined portraiture to give you images that feel timeless and true to your day.</p>
            <p>Whether you're planning an intimate elopement or a grand celebration, we craft a visual story that reflects your personality and the emotions of the day. Let's make memories that last a lifetime.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
