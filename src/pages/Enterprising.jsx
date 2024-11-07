import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutEnterprising from '../components/AboutEnterprising'
import EnterprisingBenefits from '../components/EnterprisingBenefits'

const Enterprising = () => {
    return (
        <main className='h-screen'>
            <Header />
            <AboutEnterprising />
            <EnterprisingBenefits />
            <Footer/>
        </main>
    )
}

export default Enterprising