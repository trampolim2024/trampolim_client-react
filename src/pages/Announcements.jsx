import React from 'react'
import { FaFile, FaFilter, FaSearch } from 'react-icons/fa'
import AnnouncementCard from '../components/AnnouncementCard'
import { Link } from 'react-router-dom'
import HeaderPanel from '../components/HeaderPanel'

const Announcements = () => {
  return (
    <main className='flex flex-col h-screen'>

      <HeaderPanel />

      <div className='flex items-center gap-5 justify-center w-full py-10'>

        <div className='flex items-center gap-2'>
          <input type="text" placeholder='Pesquisar por um edital' className='w-[600px] p-2 rounded-xl outline-none border border-transparent focus:border-orange-500 transition-all duration-300' />
          <button className='background-orange w-[40px] h-[40px] rounded-lg flex items-center justify-center'>
            <FaSearch className='text-blue text-xl' />
          </button>
        </div>

        <div className='relative'>
          <FaFilter className='absolute top-1/2 left-3 transform -translate-y-1/2 text-orange' />
          <select name="type" id="type" className='p-2 pl-10 rounded-xl outline-none border border-transparent focus:border-orange-500 transition-all duration-300'>
            <option defaultChecked disabled>Filtros</option>
            <option value="recente">Mais Recentes</option>
            <option value="antigo">Mais Antigos</option>
            <option value="maior">A-Z</option>
          </select>
        </div>

        <Link to="/criar-edital">
          <button className='background-orange w-[200px] h-[40px] rounded-lg flex items-center justify-center gap-3 text-white'>
            <FaFile className=' text-white' />
            Criar novo edital
          </button>
        </Link>



      </div>


      <section className='flex items-center justify-center flex-wrap gap-3'>
        <AnnouncementCard />
        <AnnouncementCard />
        <AnnouncementCard />
        <AnnouncementCard />
      </section>

    </main>
  )
}

export default Announcements