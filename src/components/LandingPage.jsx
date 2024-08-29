import React from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Benefits from './Benefits'
import FAQ from './FAQ'
import Partners from './Partners'
import Footer from './Footer'
import Realization from './Realization'

const LandingPage = () => {
  return (
    <main className='min-h-screen flex flex-col bg-center bg-no-repeat bg-cover' style={{ backgroundImage: "url('background/Noise & Texture.svg')" }}>
        <Header/>
        <Hero/>
        <About/>
        <Benefits/>
        <FAQ/>
        <Partners/>
        <Footer/>
    </main>
  )
}

export default LandingPage