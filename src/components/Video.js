import React from 'react'
import {Link} from 'react-router-dom'
import './VideoStyles.css'

import homeVideo from '../assets/istockphoto-619023696-640_adpp_is.mp4'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={homeVideo} type='video/mp4' />
        </video>
        <div className='content'>
            <h1>Take Control</h1>
            <h3>OF YOUR HEALTH</h3>
        </div>
    </div>
  )
}

export default Video