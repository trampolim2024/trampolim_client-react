import React from 'react'
import { MdPerson } from 'react-icons/md'

const AboutAppraiser = () => {
    return (
        <section className='h-auto flex items-center justify-around m-20'>

            <div className='w-[60%] mt-20 flex flex-col gap-10'>

                <div className='border-b-4 border-orange-400 w-fit'>
                    <h1 className='text-5xl text-blue font-semibold py-2'>Avaliador</h1>
                </div>

                <div className='flex flex-col gap-4'>
                    <h3 className='text-blue uppercase text-4xl font-semibold'>Quem são os especialistas do trampolim?</h3>
                    <p className='text-base ml-10'>Especialistas do meio acadêmico ou empresarial, com experiência em inovação e segmentos ou temáticas contempladas pelo Programa Trampolim.</p>
                </div>

                <div className='flex flex-col gap-4'>
                    <h3 className='text-blue uppercase text-4xl font-semibold'>Qual o dever de um avaliador do trampolim?</h3>
                    <p className='text-base ml-10'>Avaliar ideias ou projetos submetidos às edições estaduais do Programa, seguindo a Metodologia Trampolim de Avaliação e as demais orientações fornecidas.</p>
                </div>

            </div>

            <button className='background-orange uppercase  w-[450px] h-[100px] text-3xl font-semibold text-white rounded-2xl flex items-center justify-center gap-3 hover:bg-[#c97b37] transition-all duration-300 cursor-pointer'>
                <MdPerson size={40} className='text-white' />
                Inscrição avaliador
            </button>


        </section>
    )
}

export default AboutAppraiser