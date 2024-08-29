import React from 'react'
import MapaAgreste from './MapaAgreste'

const Hero = () => {
    return (
        <section className='h-screen flex items-center justify-around'>
            <div className='flex flex-col items-center justify-center relative'>
                <img src="logos/trampolim-hero.png" alt="LOgo Programa Trampolim" className='w-[100%]' />
                <span className='text-blue text-3xl font-normal uppercase'>O primeiro salto para conectar ideias inovadoras!</span>

            </div>

            <div className='flex flex-col items-center justify-center relative' >
                <span className='absolute top-0 mt-10 text-orange text-xl font-normal uppercase'>Agreste De Pernambuco</span>

                <MapaAgreste />
                <span className='absolute bottom-0 mb-10 text-orange text-xl font-normal uppercase'> <span className='hover:text-blue transition-all duration-300 cursor-pointer'>Clique em sua cidade</span> no mapa para mais informações</span>
            </div>

        </section>
    )
}

export default Hero