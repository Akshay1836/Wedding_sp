import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import ToggleButton from './ToggleButton'

const navVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
}

const navItemVariants = {
  hidden: { opacity: 0, x: 26, y: 6, scale: 0.99 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.38,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Header(){
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 800 : false)
  const navRef = useRef(null)

  // close mobile menu on resize to desktop
  useEffect(() => {
    function onResize(){
      const mobile = window.innerWidth <= 800
      setIsMobile(mobile)
      if(!mobile) setOpen(false)
    }
    function onKey(e){
      if(e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('resize', onResize)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="header-left">
          {/* ToggleButton immediately left of RESIDENCES */}
          <ToggleButton open={open} setOpen={setOpen} />
          <span className="menu-label" role="button" onClick={() => setOpen(true)}>MENU</span>
          <a href="/#home" className="nav-link">PHOTOGRAPHY</a>
        </div>

        <div className="brand">
          <a href="/" className="logo" aria-label="Home">
            <span className="brand-text">WEDDING</span>
          </a>
        </div>

        <div className="header-right">
          <a href="/details-form" className="contact-link">CONTACT</a>
          <button className="fav" aria-label="Favorites">♡</button>
        </div>

  {/* desktop nav removed from inline header; overlay menu opens via toggle */}
      </div>

      {/* render overlay nav as a portal when `open` is true (works on mobile and desktop) */}
      {open && createPortal(
        <motion.nav
          id="primary-navigation"
          ref={navRef}
          className={`nav ${open ? 'open' : ''}`}
          aria-hidden={!open}
          onClick={close}
          variants={navVariants}
          initial="hidden"
          animate="show"
        >
          {/* overlay uses header toggle as control, so no separate close button here */}

          <motion.a className="nav-link" href="/" variants={navItemVariants}>Home</motion.a>
          <motion.a className="nav-link" href="/gallery" variants={navItemVariants}>Gallery</motion.a>
          <motion.a className="nav-link" href="/details-form" variants={navItemVariants}>Contact</motion.a>
          <motion.a className="nav-link" href="/what-we-do" variants={navItemVariants}>What We Do</motion.a>
        </motion.nav>,
        document.body
      )}
    </header>
  )
}
