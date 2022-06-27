import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'


const Header = () => {
  return (
    <div className='gpt_header gpt_section' id="home">
         <div className='gpt_header_content'>
          <h1 className='gpt_header_gradient gradient__text'>Build Something Amazing with Open AI</h1>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
          <div className='gpt_header_content_input'>
            <input type='email' placeholder='Email Address Please...'/>
            <button type='submit' className='gpt_header_content_input_btn'>Submit</button>
          </div>
          <div className='gpt_header_content_img'>
            <img src={people} alt='placeholder' />
            <p>1600 requested access in last 24 hours</p>
          </div>
          </div>
          <div className='gpt_header_content_img2'>
            <img src={ai} alt='placeholder' />
          </div>
         
    </div>
  )
}

export default Header