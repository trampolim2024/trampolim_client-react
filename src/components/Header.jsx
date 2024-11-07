import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='w-full h-[20vh] p-3 flex items-center justify-around shadow-xl background-white'>

            <Link to="/">
                <img src="logos/trampolim-header.svg" alt="Logo do Programa Trampolim" className='' />
            </Link>

            <div className='flex items-center w-[50%] justify-evenly '>
            

                <Link to="/empreendedor" className='font-semibold text-blue text-xl hover:text-orange transition-all duration-300'>
                    Empreendedor
                </Link>

                <Link to="/avaliador" className='font-semibold text-blue text-xl hover:text-orange transition-all duration-300'>
                    Avaliador
                </Link>

                

                <a href="#" className='font-semibold text-blue text-xl hover:text-orange transition-all duration-300'>
                    FAQ & Contatos
                </a>

                <Link to="/login" className='font-semibold text-blue text-xl hover:text-orange transition-all duration-300'>
                    Login
                </Link>
            </div>
        </div>
    )
}

export default Header