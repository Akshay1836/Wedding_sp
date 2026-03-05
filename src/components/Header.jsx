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
        <div className="brand">
          <h1 className="logo">Wedding</h1>
        </div>

        <ToggleButton open={open} setOpen={setOpen} />

        {/* desktop nav shown inline inside header-inner */}
        {!isMobile && (
          <nav id="primary-navigation" ref={navRef} className={`nav ${open ? 'open' : ''}`} onClick={close}>
            <div className="nav-brand">Wedding</div>
            <a className="nav-link" href="#home">Home</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="#portfolio">Portfolio</a>
            <a className="nav-link" href="#contact">Contact</a>
          </nav>
        )}
      </div>

      {/* render nav as portal for mobile overlay */}
      {isMobile && createPortal(
        <nav
          id="primary-navigation"
          ref={navRef}
          className={`nav ${open ? 'open' : ''}`}
          aria-hidden={!open && isMobile}
          onClick={close}
        >
          {/* mobile close button placed inside nav so menu can be dismissed */}
          <button className="nav-close" onClick={() => setOpen(false)} aria-label="Close menu">
            <svg width="26" height="26" viewBox="0 0 23 23" aria-hidden>
              <path d="M 3 3 L 20 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <path d="M 20 3 L 3 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </button>
         
          <a className="nav-link" href="#home">Home</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#services">Services</a>
          <a className="nav-link" href="#portfolio">Portfolio</a>
          <a className="nav-link" href="#contact">Contact</a>
        </nav>,
        document.body
      )}
    </header>
  )
}
