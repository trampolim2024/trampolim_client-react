import React from 'react'
import HeaderAdmPanel from '../components/HeaderAdmPanel'
import { FaFile, FaFilter, FaSearch } from 'react-icons/fa'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <main className='flex flex-col h-screen'>

      <HeaderAdmPanel />

      <div className='flex items-center gap-5 justify-center w-full py-10'>

        <div className='flex items-center gap-2'>
          <input type="text" placeholder='Pesquisar por um projeto' className='w-[600px] p-2 rounded-xl outline-none border border-transparent focus:border-orange-500 transition-all duration-300' />
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

        <div className='relative'>
          <FaFile className='absolute top-1/2 left-3 transform -translate-y-1/2 text-orange' />
          <select name="type" id="type" className='p-2 pl-10 rounded-xl outline-none border border-transparent focus:border-orange-500 transition-all duration-300'>
            <option defaultChecked disabled>Selecionar Edital</option>
            <option value="">Edital 2025.1</option>
            <option value="">Edital 2025.2</option>
            <option value="">Edital 2025.3</option>
          </select>
        </div>

      </div>

      <div className="flex flex-col gap-5 items-center justify-center">
        <h1 className='text-5xl text-blue font-semibold py-2'>Projetos</h1>
        <div className="flex items-center gap-3">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <button className='orange-button'>Ver mais</button>
      </div>

    </main>
  )
}

export default Projects