import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './HomePage'
import DetailsFormPage from './DetailsFormPage'
import OtherDetailsPage from './OtherDetailsPage'
import GalleryPage from './GalleryPage'
import PageTransitionOverlay from './components/PageTransitionOverlay'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    // Disable browser's native scroll restoration so it doesn't fight us
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [pathname])
  return null
}

export default function App(){
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details-form" element={<DetailsFormPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/what-we-do" element={<OtherDetailsPage />} />
        <Route path="/other-details" element={<OtherDetailsPage />} />
      </Routes>
      <PageTransitionOverlay />
    </div>
  )
}
