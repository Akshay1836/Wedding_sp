import React, { useRef, useState } from 'react'
import './video.css'

const videoSources = ['/video4.mp4', '/video5.mp4', '/video1.mp4', '/video2.mp4', '/video3.mp4']

export default function VideoHero(){
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)
  const [videoIndex, setVideoIndex] = useState(0)
  const [checkedCount, setCheckedCount] = useState(0)

  function toggleMute(){
    const v = videoRef.current
    if(!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  function handleLoadedMetadata() {
    const v = videoRef.current
    if (!v) return

    const isPortrait = v.videoHeight > v.videoWidth
    if (isPortrait && checkedCount < videoSources.length - 1) {
      setCheckedCount((prev) => prev + 1)
      setVideoIndex((prev) => (prev + 1) % videoSources.length)
    }
  }

  return (
    <section className="video-hero">
      <video
        ref={videoRef}
        className="video-bg"
        src={videoSources[videoIndex]}
        poster="/wed13.jpg"
        autoPlay
        muted
        loop
        playsInline
        onLoadedMetadata={handleLoadedMetadata}
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
