import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserCard = ({ nomeCompleto, email, tipo, area_atuacao }) => {
  return (
    <Link to="/detalhes-usuario" className="w-full max-w-sm mx-auto">
      <div className='flex flex-col md:flex-row items-center gap-5 bg-white rounded-lg shadow-xl p-5 hover:shadow-2xl transition-shadow duration-300'>
        {/* Ícone */}
        <div className="flex-shrink-0">
          <FaUser className='text-orange text-6xl md:text-8xl' />
        </div>

        {/* Informações do usuário */}
        <div className='flex flex-col gap-2 text-center md:text-left'>
          <p className='text-blue font-semibold'>
            Nome: <span className='text-orange font-normal block md:inline'>{nomeCompleto}</span>
          </p>
          <p className='text-blue font-semibold'>
            Email: <span className='text-orange font-normal block md:inline'>{email}</span>
          </p>
          <p className='text-blue font-semibold'>
            Tipo: <span className='text-orange font-normal block md:inline'>{tipo}</span>
          </p>
          <p className='text-blue font-semibold'>
            Área de Atuação: <span className='text-orange font-normal block md:inline'>{area_atuacao}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;