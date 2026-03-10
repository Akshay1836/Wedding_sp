import React, { useEffect, useState, useRef } from 'react'
import './loader.css'

export default function Loader({ progress = 0 }){
  const [exiting, setExiting] = useState(false)
  // displayed progress will animate slowly toward the incoming `progress` prop
  const [display, setDisplay] = useState(0)
  const rafRef = useRef(null)
  const lastTs = useRef(null)

  // when progress hits 100, trigger an exit animation — Hero will unmount this
  useEffect(() => {
    if (progress >= 100) {
      // small delay to let final number render, then start exit animation
      const t = setTimeout(() => setExiting(true), 80)
      return () => clearTimeout(t)
    }
    setExiting(false)
  }, [progress])

  return (
    <div className={"loader-wrap" + (exiting ? ' exiting' : '')} role="status" aria-live="polite">

      <div className="loader-art" aria-hidden>
      {/* decorative artwork only - dots removed per request */}
      </div>

      <div className="loader-counter center">
        <span className="num">{String(progress).padStart(2,'0')}</span>
        <span className="pct">%</span>
      </div>
    </div>
  )
}
