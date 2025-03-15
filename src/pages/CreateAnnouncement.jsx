import React from 'react'

import { FaBook, FaCalendarAlt, FaFileAlt } from 'react-icons/fa';
import HeaderPanel from '../components/HeaderPanel';

const CreateAnnouncement = () => {
  return (
    <main className='flex flex-col h-screen'>

      <HeaderPanel />

      <section className='h-screen p-4 flex flex-col items-center justify-center'>
        <form className='flex flex-col items-center gap-10 w-full'>
          <div className='flex items-center gap-3 py-10'>
            <FaBook className='text-orange' size={40} />
            <h2 className='text-orange text-4xl uppercase'>Criar novo edital</h2>
          </div>

          <div className='flex items-center flex-col justify-center gap-10 w-[80vw]'>

            <label htmlFor="inicioSubmissao">
              Data para início das submissões:
              <div className='relative'>
                <FaCalendarAlt className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                <input
                  type="date"
                  id="inicioSubmissao"
                  className='mt-2 pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent w-[30vw]'
                  name="inicioSubmissao"

                />
              </div>
            </label>

            <label htmlFor="fimSubmissao">
              Data do fim das submissões
              <div className='relative'>
                <FaCalendarAlt className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                <input
                  type="date"
                  id="fimSubmissao"
                  className='mt-2 pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent w-[30vw]'
                  name="fimSubmissao"

                />
              </div>
            </label>

            <label htmlFor="inicioAvaliacao">
              Início das avaliações
              <div className='relative'>
                <FaCalendarAlt className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                <input
                  type="date"
                  id="inicioAvaliacao"
                  className='mt-2 pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent w-[30vw]'
                  name="inicioAvaliacao"

                />
              </div>
            </label>

            <label htmlFor="fimAvaliacao">
              Fim das avaliações
              <div className='relative'>
                <FaCalendarAlt className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                <input
                  type="date"
                  id="fimAvaliacao"
                  className='mt-2 pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent w-[30vw]'
                  name="fimAvaliacao"

                />
              </div>
            </label>

            <label htmlFor="arquivoEdital">
              Arquivo do edital
              <div className='relative'>
                <FaFileAlt className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                <input
                  type="file"
                  id="arquivoEdital"
                  className='mt-2 pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent w-[30vw]'
                  name="arquivoEdital"

                />
              </div>
            </label>

          </div>

          <button type="submit" className='p-3 outline-none background-orange rounded-xl border-none text-white w-[30vw] font-semibold'>Submeter</button>
        </form>
      </section>




    </main>
  )
}

export default CreateAnnouncement