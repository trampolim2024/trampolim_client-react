import React from 'react'

const Dashboard = () => {
    return (
        <div className='w-full h-[55vh] p-10 bg-[#3A6ABE]/90 flex flex-col items-center justify-center gap-4 mt-20'>

            <h1 className='text-3xl text-white uppercase font-bold py-10'>Impacto do programa trampolim</h1>


            <div className='flex items-center gap-4'>
                <div className='background-orange w-[20vw] h-[20vh] p-3 rounded-xl flex items-center justify-center flex-col shadow-xl hover:scale-105 duration-300 transition-all'>
                    <span className='text-4xl text-white font-bold'>+1000</span>
                    <p className='text-white text-base'>Emprendedores</p>
                </div>

                <div className='background-orange w-[20vw] h-[20vh] p-3 rounded-xl flex items-center justify-center flex-col shadow-xl hover:scale-105 duration-300 transition-all'>
                    <span className='text-4xl text-white font-bold'>+1000</span>
                    <p className='text-white text-base'>Projetos Submetidos</p>
                </div>

                <div className='background-orange w-[20vw] h-[20vh] p-3 rounded-xl flex items-center justify-center flex-col shadow-xl hover:scale-105 duration-300 transition-all'>
                    <span className='text-4xl text-white font-bold'>+1000</span>
                    <p className='text-white text-base'>Projetos Aprovados</p>
                </div>

                <div className='background-orange w-[20vw] h-[20vh] p-3 rounded-xl flex items-center justify-center flex-col shadow-xl hover:scale-105 duration-300 transition-all'>
                    <span className='text-4xl text-white font-bold'>+1000</span>
                    <p className='text-white text-base'>Projetos Iniciados</p>
                </div>
            </div>



        </div>
    )
}

export default Dashboard