import React from 'react'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'
import HeroImg2 from '../component/HeroImg2'
import AboutContent from '../component/AboutContent'

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading='ABOUT' text='Think it, dream it, I’ll code it.' />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
