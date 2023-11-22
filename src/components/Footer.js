import React from 'react'
import './FooterStyles.css'
import { FaMailBulk, FaPhone, FaSearchLocation } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='location'>
                <h4><FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}} />123 Tech St. City, KY</h4>
            </div>
            <div className='phone' >
                <h4><FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}}/> 1-800-555-1234</h4>
            </div>
            <div className='email'>
                <h4><FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}}/> hello@mhealth.com</h4>
            </div>
        </div>
    </div>
  )
}

export default Footer