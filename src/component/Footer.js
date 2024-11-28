import './FooterStyles.css'

import React from 'react'
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
            <div>
              <p>Anderson Road</p>
              <p>Dehiwala, Srilanka</p>
            </div>
          </div>
          <div className='phone'>
            <h4>
              <FaPhone
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              +94 76 880 0398
            </h4>
          </div>
          <div className='email'>
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              sabeelzaim@gmail.com
            </h4>
          </div>
        </div>
        <div className='right'>
          <h4>About the company</h4>
          <p>
            This is me Sabeelus Saraf. CEO & Founder of S3 Developments. I enjoy
            discussing new challenges and projects
          </p>
          <div className='social'>
            <FaFacebook
              size={30}
              style={{ color: '#fff', marginRight: '2rem' }}
            />
            <FaTwitter
              size={30}
              style={{ color: '#fff', marginRight: '2rem' }}
            />
            <FaLinkedin
              size={30}
              style={{ color: '#fff', marginRight: '2rem' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
