import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './HomePage'
import DetailsFormPage from './DetailsFormPage'
import OtherDetailsPage from './OtherDetailsPage'
import GalleryPage from './GalleryPage'
import PageTransitionOverlay from './components/PageTransitionOverlay'

export default function App(){
  return (
    <div className="app">
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
