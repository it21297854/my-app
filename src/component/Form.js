import './FormStyles.css'

import React from 'react'

const Form = () => {
  return (
    <div className='form'>
      <form action='https://formsubmit.co/sabeelzaim@gmail.com' method='POST'>
        <label>Your Name</label>
        <input type='text' name='name'></input>
        <label>Email</label>
        <input type='email' name='email'></input>
        <label>Subject</label>
        <input type='text' name='subject'></input>
        <label>Message</label>
        <textarea
          rows='6'
          name='message'
          placeholder='Type your message here'
        />
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default Form
