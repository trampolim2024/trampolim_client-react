import React from 'react'
import { FaFileAlt, FaCalendar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AnnouncementCard = () => {
  return (
    <Link to="/detalhes-edital">
      <div className='flex items-center justify-center gap-5 bg-white w-fit py-10 px-10 rounded-xl shadow-xl cursor-pointer'>

        <FaFileAlt className='text-orange text-7xl' />

        <div className='flex flex-col gap-2 '>
          <h1 className='text-blue text-xl font-bold'>Edital 2025.1</h1>
          <div className='flex items-center gap-3'>
            <FaCalendar className='text-orange text-xl' />
            <span className='text-orange font-bold'>Início</span>
            <span className='text-orange'>01/10/2024</span>
          </div>

          <div className='flex items-center gap-3'>
            <FaCalendar className='text-orange text-xl' />
            <span className='text-orange font-bold'>Término</span>
            <span className='text-orange'>01/11/2024</span>
          </div>
        </div>

      </div>
    </Link>

  )
}

export default AnnouncementCard