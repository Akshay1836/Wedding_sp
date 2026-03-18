import React from 'react'
import CinematicHero from './components/CinematicHero'
import VideoHero from './components/VideoHero'
import ProfileHero from './components/ProfileHero'
import About from './components/About'
import FeaturedProject from './components/FeaturedProject'
import BoutiqueFocus from './components/BoutiqueFocus'
import Services from './components/Services'
import GalleryStack from './components/GalleryStack.jsx'
import Gallery from './components/Gallery'
import Expertise from './components/Expertise'
import ConnectWithUs from './components/ConnectWithUs'
import Footer from './components/Footer'
import ServicesGrid from './components/ServicesGrid'
import SignatureBlock from './components/SignatureBlock'

export default function HomePage() {
  return (
    <>
      <main>
        <CinematicHero />
        <About />
        <FeaturedProject />
        <Expertise />
        <ServicesGrid />
        <BoutiqueFocus />
        <GalleryStack />
        <Services />
        <Gallery />
        <SignatureBlock />
        <ProfileHero />
        <VideoHero />
      </main>

      <ConnectWithUs />
      <Footer />
    </>
  )
}
