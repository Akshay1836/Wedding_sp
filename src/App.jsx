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
import ConnectWithUs from './components/ConnectWithUs'
import ServicesGrid from './components/ServicesGrid'
import FooterAlt from './components/FooterAlt'

export default function App(){
  return (
    <div className="app">
      <Header />
      <main>
    
        <Hero />

  <About />

  <FeaturedProject />
  <ServicesGrid />
  <BoutiqueFocus />
  <Services />
  <Gallery />
    <ProfileHero />
        <VideoHero />
  </main>
  <ConnectWithUs />
  <Footer />

    </div>
  )
}
