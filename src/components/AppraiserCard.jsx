import React from 'react';
import { FaPhone, FaUser, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AppraiserCard = ({ user }) => {
  return (
    <Link to={`/perfil-avaliador/${user._id}`}>
      <div className='flex items-center justify-center gap-5 bg-white w-fit py-10 px-10 rounded-xl shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300'>
        <FaUser className='text-orange text-7xl' />
        <div className='flex flex-col gap-2'>
          <h1 className='text-blue text-xl font-bold'>{user.nomeCompleto}</h1>
          <div className='flex items-center gap-3'>
            <FaPhone className='text-orange text-xl' />
            <span className='text-orange'>{user.telefone}</span>
          </div>
          <div className='flex items-center gap-3'>
            <FaEnvelope className='text-orange text-xl' />
            <span className='text-orange'>{user.email}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppraiserCard;