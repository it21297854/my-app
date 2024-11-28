import { Link } from 'react-router-dom'
import './AboutContentStyles.css'

import React from 'react'
import React1 from '../assets/react.png'
import Java from '../assets/Java-developers.jpg'

const AboutContent = () => {
  return (
    <div className='about'>
      <div className='left'>
        <h1>Who Am I?</h1>
        <p>
          I'm a passionate Full-Stack Software Developer with over 3 years of
          experience working as a Software Engineer specializing in Spring Boot
          and Java development. Additionally, I have honed my skills as a
          freelancer in MERN technology, building dynamic and responsive web
          applications. My journey has been one of constant learning, as I
          strive to deliver secure and efficient solutions that exceed
          expectations. Whether crafting intuitive front-end interfaces or
          implementing robust back-end systems, I am committed to blending
          creativity with technical expertise to create exceptional user
          experiences. .
        </p>
        <Link to='/contact'>
          <button className='btn'>Contact</button>
        </Link>
      </div>
      <div className='left'>
        <h1>Technically?</h1>
        <p>
          I bring a versatile skill set to the table:
          <br />- **Frontend:** Proficient in HTML, CSS, JavaScript, and
          frameworks like React, I create visually engaging and user-friendly
          interfaces.
          <br />- **Backend:** Skilled in Node.js, Express, and Java Spring
          Boot, I deliver secure and efficient server-side functionality.
          <br />- **Databases:** Experienced with MySQL and MongoDB, I ensure
          data is structured and accessible.
          <br />- **Security:** I prioritize secure development practices to
          protect against vulnerabilities.
        </p>
        <Link to='/contact'>
          <button className='btn'>Contact</button>
        </Link>
      </div>
      {/* <div className='right'>
        <div className='img-container'>
          <div className='img-stack top'>
            <img src={React1} alt='React' className='img'></img>
          </div>
          <div className='img-stack bottom'>
            <img src={Java} alt='Java' className='img'></img>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default AboutContent
