import React from 'react'
import { FaBusinessTime, FaClock, FaFile, FaPenAlt, FaUser, FaVideo } from 'react-icons/fa'
import { FaComputer } from 'react-icons/fa6'

const ProjectDetails = () => {
    return (
        <section className='h-auto flex items-center justify-center py-10'>
            <div className='flex items-center justify-center gap-[15%] w-full'>

                <div className='bg-white w-[300px] h-[300px] rounded-full shadow-xl flex items-center justify-center'>
                    <img src="logos/trampolim-header.svg" alt="Logo do Programa Trampolim" />
                </div>


                <div className='flex flex-col gap-3 w-[30%]'>
                    <h1 className='text-orange text-7xl font-bold text-center py-5'>Inclusive Pet</h1>


                    <h2 className='text-2xl text-orange font-bold'>Integrantes</h2>

                    <div className='flex items-center gap-2 bg-white w-full p-3 rounded-lg shadow-xl'>
                        <div className='flex flex-col items-center justify-center gap-1'>
                            <FaUser className='text-blue text-3xl' />
                        </div>

                        <span className='w-full text-orange font-semibold text-center'>Lucas Cordeiro</span>
                    </div>

                    <div className='flex items-center gap-3'>
                        <div className='flex items-center gap-2 bg-white w-full p-3 rounded-lg shadow-xl'>
                            <div className='flex flex-col items-center justify-center gap-1'>
                                <FaUser className='text-blue text-3xl' />
                            </div>

                            <span className='w-full text-orange font-semibold text-center'>Lucas Cordeiro</span>
                        </div>

                        <div className='flex items-center gap-2 bg-white w-full p-3 rounded-lg shadow-xl'>
                            <div className='flex flex-col items-center justify-center gap-1'>
                                <FaUser className='text-blue text-3xl' />
                            </div>

                            <span className='w-full text-orange font-semibold text-center'>Lucas Cordeiro</span>
                        </div>
                    </div>

                    <div className='flex items-center gap-3'>
                        <div className='flex items-center gap-2 bg-white w-full p-3 rounded-lg shadow-xl'>
                            <div className='flex flex-col items-center justify-center gap-1'>
                                <FaUser className='text-blue text-3xl' />
                            </div>

                            <span className='w-full text-orange font-semibold text-center'>Lucas Cordeiro</span>
                        </div>

                        <div className='flex items-center gap-2 bg-white w-full p-3 rounded-lg shadow-xl'>
                            <div className='flex flex-col items-center justify-center gap-1'>
                                <FaUser className='text-blue text-3xl' />
                            </div>

                            <span className='w-full text-orange font-semibold text-center'>Lucas Cordeiro</span>
                        </div>
                    </div>


                    <h2 className='text-2xl text-orange font-bold'>Estágio da ideia</h2>

                    <div className='flex items-center gap-2 bg-white w-full p-3 rounded-lg shadow-xl'>
                        <div className='flex flex-col items-center justify-center gap-1'>
                            <FaClock className='text-blue text-3xl' />
                        </div>

                        <span className='w-full text-orange font-semibold text-center'>MVP</span>
                    </div>


                    <h2 className='text-2xl text-orange font-bold'>Edital </h2>

                    <div className='flex items-center gap-2 bg-white w-full p-3 rounded-lg shadow-xl'>
                        <div className='flex flex-col items-center justify-center gap-1'>
                            <FaFile className='text-blue text-3xl' />
                        </div>

                        <span className='w-full text-orange font-semibold text-center'>2025.1</span>
                    </div>

                    <h2 className='text-2xl text-orange font-bold'>Descrição da ideia</h2>

                    <div className='flex items-center gap-2 bg-white w-full p-3 rounded-lg shadow-xl'>
                        <div className='flex flex-col items-center justify-center gap-1'>
                            <FaPenAlt className='text-blue text-3xl' />
                        </div>

                        <span className='w-full text-orange font-semibold text-center'>
                            Duis duis sunt ullamco ex veniam exercitation.
                        </span>
                    </div>

                    <h2 className='text-2xl text-orange font-bold'>Diferencias da ideia</h2>

                    <div className='flex items-center gap-2 bg-white w-full p-3 rounded-lg shadow-xl'>
                        <div className='flex flex-col items-center justify-center gap-1'>
                            <FaPenAlt className='text-blue text-3xl' />
                        </div>

                        <span className='w-full text-orange font-semibold text-center'>
                            Duis duis sunt ullamco ex veniam exercitation.
                        </span>
                    </div>


                    <h2 className='text-2xl text-orange font-bold'>Modelo de negóico</h2>

                    <div className='flex items-center gap-2 bg-white w-full p-3 rounded-lg shadow-xl'>
                        <div className='flex flex-col items-center justify-center gap-1'>
                            <FaBusinessTime className='text-blue text-3xl' />
                        </div>

                        <span className='w-full text-orange font-semibold text-center'>
                            Incubação
                        </span>
                    </div>


                    <h2 className='text-2xl text-orange font-bold'>Tecnologias utilizadas</h2>

                    <div className='flex items-center gap-2 bg-white w-full p-3 rounded-lg shadow-xl'>
                        <div className='flex flex-col items-center justify-center gap-1'>
                            <FaComputer className='text-blue text-3xl' />
                        </div>

                        <span className='w-full text-orange font-semibold text-center'>
                            Java, React, Node
                        </span>
                    </div>


                    <h2 className='text-2xl text-orange font-bold'>Link do pitch</h2>

                    <div className='flex items-center gap-2 bg-white w-full p-3 rounded-lg shadow-xl'>
                        <div className='flex flex-col items-center justify-center gap-1'>
                            <FaVideo className='text-blue text-3xl' />
                        </div>

                        <span className='w-full text-orange font-semibold text-center'>
                            youtube.com.br/pitch
                        </span>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default ProjectDetails