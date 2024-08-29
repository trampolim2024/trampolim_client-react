import React from 'react'
import { FaFileAlt, FaUser } from 'react-icons/fa'

const Realization = () => {
    return (
        <section className='h-auto flex flex-col gap-10 mt-20 mb-20'>


            <div className='w-full flex items-center justify-around'>
                <div className='background-purple w-full h-[30vh] p-4 flex items-center justify-center shadow-lg flex-col'>
                    <h1 className='text-white uppercase text-4xl font-semibold'>Ficou interessado? SAIBA MAIS!</h1>
                    <p className='text-white text-xl font-normal mt-10'>Para mais informações, consulte o Regulamento do Banco Nacional de Avaliadores do Programa Centelha, clicando aqui.</p>
                </div>

            </div>



            <h1 className='ml-[5%] text-4xl text-blue uppercase font-bold'>Realização</h1>

            <div className='flex items-center w-full justify-around'>
                <div className='w-[300px] h-[300px] rounded-full background-white border-2 border-[#F79B4B] flex items-center justify-center'>
                    <FaUser className='text-blue' size={100} />
                </div>

                <div className='w-[300px] h-[300px] rounded-full background-white border-2 border-[#F79B4B] flex items-center justify-center'>
                    <FaUser className='text-blue' size={100} />
                </div>

                <div className='w-[300px] h-[300px] rounded-full background-white border-2 border-[#F79B4B] flex items-center justify-center'>
                    <FaUser className='text-blue' size={100} />
                </div>

                <div className='w-[300px] h-[300px] rounded-full background-white border-2 border-[#F79B4B] flex items-center justify-center'>
                    <FaUser className='text-blue' size={100} />
                </div>
            </div>
        </section>
    )
}

export default Realization