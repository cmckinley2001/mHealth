import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import ProviderLocation from '../components/ProviderLocation'


const Provider = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='PROVIDER' text='Find a provider.' />
        <ProviderLocation />
        <Footer />
    </div>
  )
}

export default Provider