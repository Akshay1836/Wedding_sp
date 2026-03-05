import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import VideoHero from './components/VideoHero'
import ProfileHero from './components/ProfileHero'
import About from './components/About'
import FeaturedProject from './components/FeaturedProject'
import BoutiqueFocus from './components/BoutiqueFocus'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="app">
      <Header />
      <main>
    
        <Hero />

  <About />

  <FeaturedProject />
  <BoutiqueFocus />
  <Services />
  <Gallery />
    <ProfileHero />
        <VideoHero />
      </main>
      <Footer />
    </div>
  )
}
