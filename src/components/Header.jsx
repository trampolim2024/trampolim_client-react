import React from 'react'

const Header = () => {
    return (
        <div className='w-full h-[20%] p-3 flex items-center justify-around shadow-xl background-white'>
            <img src="logos/trampolim-header.svg" alt="Logo do Programa Trampolim" className=''/>

            <div className='flex items-center w-[50%] justify-evenly '>
                <a href="#" className='font-semibold text-blue text-xl hover:text-orange transition-all duration-300'>
                    Portal
                </a>

                <a href="#" className='font-semibold text-blue text-xl hover:text-orange transition-all duration-300'>
                    Sobre
                </a>

                <a href="#" className='font-semibold text-blue text-xl hover:text-orange transition-all duration-300'>
                    Avaliador
                </a>

                <a href="#" className='font-semibold text-blue text-xl hover:text-orange transition-all duration-300'>
                    Conteúdos
                </a>

                <a href="#" className='font-semibold text-blue text-xl hover:text-orange transition-all duration-300'>
                    FAQ & Contatos
                </a>
            </div>
        </div>
    )
}

export default Header