import React from 'react'
import { Link } from 'react-router-dom'
import User from './User'

const HeaderPanel = () => {
    return (
        <div className='w-full h-[20vh] p-3 flex items-center justify-around shadow-xl background-white'>

            <Link to="/">
                <img src="logos/trampolim-header.svg" alt="Logo do Programa Trampolim" className='' />
            </Link>

            <div className='flex items-center w-[50%] justify-evenly '>
                <Link to="/painel" className='font-semibold text-blue text-xl hover:text-orange transition-all duration-300'>
                    Painel
                </Link>

                <a href="#" className='font-semibold text-blue text-xl hover:text-orange transition-all duration-300'>
                    Eventos
                </a>

                <Link to="#" className='font-semibold text-blue text-xl hover:text-orange transition-all duration-300'>
                    Certificados
                </Link>

                <a href="#" className='font-semibold text-blue text-xl hover:text-orange transition-all duration-300'>
                    Diagnósticos
                </a>

                <User/>
            </div>
        </div>
    )
}

export default HeaderPanel