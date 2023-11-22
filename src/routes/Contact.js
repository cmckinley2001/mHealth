import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Form from '../components/ContactForm'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='CONTACT' text='Contact M Health' />
        <Form />
        <Footer />
    </div>
  )
}

export default Contact