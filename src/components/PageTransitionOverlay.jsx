import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const pageTitles = {
  '/': 'Home',
  '/gallery': 'Gallery',
  '/details-form': 'Details Form',
  '/what-we-do': 'What We Do',
  '/other-details': 'What We Do',
}

function getPageTitle(pathname) {
  return pageTitles[pathname] || 'Page'
}

export default function PageTransitionOverlay() {
  const location = useLocation()
  const isFirstRender = useRef(true)
  const hideTimerRef = useRef(null)
  const [show, setShow] = useState(false)
  const [title, setTitle] = useState(getPageTitle(location.pathname))

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    setTitle(getPageTitle(location.pathname))
    setShow(true)

    if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
    hideTimerRef.current = setTimeout(() => {
      setShow(false)
    }, 1100)

    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
    }
  }, [location.pathname])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="route-transition-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
          aria-hidden="true"
        >
          <motion.h2
            className="route-transition-title"
            initial={{ opacity: 0, y: 26, scale: 0.985, filter: 'blur(2px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -8, scale: 0.995, filter: 'blur(1px)' }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            {title}
          </motion.h2>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
