import React from 'react'
import { MdPerson } from 'react-icons/md'
import { Link } from 'react-router-dom'

const AboutEnterprising = () => {
    return (
        <section className='h-auto flex items-center justify-around m-20'>

            <div className='w-[60%] mt-20 flex flex-col gap-10'>

                <div className='border-b-4 border-orange-400 w-fit'>
                    <h1 className='text-5xl text-blue font-semibold py-2'>Empreendedor</h1>
                </div>

                <div className='flex flex-col gap-4'>
                    <h3 className='text-blue uppercase text-4xl font-semibold'>Quem pode se cadastrar como empreendedor?</h3>
                    <p className='text-base ml-10'>Exercitation nostrud fugiat Lorem dolor duis tempor eu officia consequat in ex est aliqua eu.</p>
                </div>

                <div className='flex flex-col gap-4'>
                    <h3 className='text-blue uppercase text-4xl font-semibold'>Quais os benefícios do trampolim?</h3>
                    <p className='text-base ml-10'>Exercitation nostrud fugiat Lorem dolor duis tempor eu officia consequat in ex est aliqua eu.</p>
                </div>

            </div>


            <Link to="/inscricao-empreendedor">
                <button className='background-orange uppercase  w-[500px] h-[100px] text-3xl font-semibold text-white rounded-2xl flex items-center justify-center gap-3 hover:bg-[#c97b37] transition-all duration-300 cursor-pointer'>
                    <MdPerson size={40} className='text-white' />
                    Inscrição empreendedor
                </button>
            </Link>



        </section>
    )
}

export default AboutEnterprising