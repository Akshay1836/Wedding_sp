import React, { useRef, useState } from 'react'
import './video.css'

export default function VideoHero(){
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)

  function toggleMute(){
    const v = videoRef.current
    if(!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  return (
    <section className="video-hero">
      <video
        ref={videoRef}
        className="video-bg"
  src="https://www.w3schools.com/html/mov_bbb.mp4"
  poster="/wed13.jfif"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="video-overlay">
        <div className="video-inner">
          <h2 className="video-title">WEDDING</h2>
        </div>
        <button className="mute-toggle" onClick={toggleMute} aria-label="Toggle sound">
          {muted ? '🔇' : '🔊'}
        </button>
      </div>
    </section>
  )
}
