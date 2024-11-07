import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import User from './User'

const HeaderPanel = () => {
  const navigate = useNavigate(); // Hook do React Router para navegação programática

  // Função para tratar o logout
  const handleLogout = () => {
    // Remove o token de autenticação do localStorage
    localStorage.removeItem('token');

    // Redireciona o usuário para a página inicial (ou página de login)
    navigate('/');
  };

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

        <div className='flex items-center justify-center gap-3 flex-col'>
          <User />
          {/* Botão de Sair, chamando a função handleLogout */}
          <span 
            onClick={handleLogout} 
            className='text-orange font-bold text-base cursor-pointer'>
            Sair
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeaderPanel;
