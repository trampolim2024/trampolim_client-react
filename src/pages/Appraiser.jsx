import React from 'react'
import Header from '../components/Header'
import Realization from '../components/Realization'
import AppraiserBenefits from '../components/AppraiserBenefits'
import AboutAppraiser from '../components/AboutAppraiser'
import Footer from '../components/Footer'

const Appraiser = () => {
    return (
        <main className='h-screen'>
            <Header />
            <AboutAppraiser />
            <AppraiserBenefits />
            <Realization />
            <Footer/>
        </main>
    )
}

export default Appraiser