import './HeroImgStyles.css'
import IntroImg from '../assets/bg.avif'
import profile from '../assets/profile3.jpg'
import React from 'react'
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='into-img' src={IntroImg} alt='IntroImg' />
      </div>
      <div className='content'>
        <div className='profile-container'>
          <img className='profile-img' src={profile} alt='IntroImg' />
        </div>
        <p>HI, I'M Sabeel Sharaf</p>
        <h1>Software Develeoper</h1>
        <div>
          <Link to='/project' className='btn'>
            Projects
          </Link>
          <Link to='/contact' className='btn btn-light'>
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
