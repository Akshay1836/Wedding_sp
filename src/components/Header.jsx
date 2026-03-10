import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import ToggleButton from './ToggleButton'

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
          <a href="#residences" className="nav-link">PHOTOGRAPHY</a>
        </div>

        <div className="brand">
          <a href="#home" className="logo" aria-label="Home">
            <span className="brand-text">WEDDING</span>
          </a>
        </div>

        <div className="header-right">
          <a href="#contact" className="contact-link">CONTACT US</a>
          <button className="fav" aria-label="Favorites">♡</button>
        </div>

  {/* desktop nav removed from inline header; overlay menu opens via toggle */}
      </div>

      {/* render overlay nav as a portal when `open` is true (works on mobile and desktop) */}
      {open && createPortal(
        <nav
          id="primary-navigation"
          ref={navRef}
          className={`nav ${open ? 'open' : ''}`}
          aria-hidden={!open}
          onClick={close}
        >
          {/* overlay uses header toggle as control, so no separate close button here */}

          <a className="nav-link" href="#home">Home</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#services">Services</a>
        </nav>,
        document.body
      )}
    </header>
  )
}
