import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Filter from '../components/FIlter'

const Home = () => {
    return (
        <main className='h-auto'>
            <Header />
            <section className='flex p-5'>
                <Filter/>
            </section>
            <Footer/>
        </main>
    )
}

export default Home