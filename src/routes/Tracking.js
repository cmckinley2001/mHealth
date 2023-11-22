import React from 'react'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import TrackingSection from '../components/Tracking'
import Footer from '../components/Footer'

const Tracking = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='TRACKING' text='Here is some text.' />
        <TrackingSection />
        <Footer />
    </div>
  )
}

export default Tracking