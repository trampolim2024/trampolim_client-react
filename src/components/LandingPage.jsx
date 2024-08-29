import React from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'

const LandingPage = () => {
  return (
    <main className='min-h-screen flex flex-col bg-center bg-no-repeat bg-cover' style={{ backgroundImage: "url('background/Noise & Texture.svg')" }}>
        <Header/>
        <Hero/>
        <About/>
    </main>
  )
}

export default LandingPage