import React from 'react'
import { FaPhone, FaUser, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const EnterprisingCard = () => {
  return (
    <Link to="/perfil-empreendedor">
      <div className='flex items-center justify-center gap-5 bg-white w-fit py-10 px-10 rounded-xl shadow-xl cursor-pointer'>

        <FaUser className='text-orange text-7xl' />

        <div className='flex flex-col gap-2 '>
          <h1 className='text-blue text-xl font-bold'>Lucas Cordeiro</h1>
          <div className='flex items-center gap-3'>
            <FaPhone className='text-orange text-xl' />
            <span className='text-orange'>87 98100-0000</span>
          </div>

          <div className='flex items-center gap-3'>
            <FaEnvelope className='text-orange text-xl' />
            <span className='text-orange'>lucas@email.com</span>
          </div>
        </div>

      </div>
    </Link>
  )
}

export default EnterprisingCard         