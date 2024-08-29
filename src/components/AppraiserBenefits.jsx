import React from 'react'
import { FaMedal, FaLightbulb, FaHandsHelping, FaCertificate } from 'react-icons/fa'

const AppraiserBenefits = () => {
    return (
        <section className='h-screen flex items-center justify-center mt-20 mb-20 flex-col gap-10'>
            <h1 className='text-4xl text-blue uppercase font-semibold'>Benefícios em ser avaliador</h1>
            <div className='flex w-full justify-around mt-20'>

                <div className='flex flex-col items-center w-[350px] gap-4'>
                    <FaMedal size={80} className='text-orange mb-2' />
                    <h3 className='text-blue text-xl font-semibold text-center'>Selo Avaliador</h3>
                    <p className='text-base text-center'>
                        Já pensou em ter o seu currículo carimbado com o Selo Avaliador TRAMPOLIM? O Programa Trampolim é um dos maiores
                        programas de fomento à inovação do agreste e, por isso, fazer parte desse time é uma posição de visibilidade em meio ao mercado!
                    </p>
                </div>

                <div className='flex flex-col items-center w-[350px] gap-4'>
                    <FaLightbulb size={80} className='text-orange mb-2' />
                    <h3 className='text-blue text-xl font-semibold text-center'>Proximidade ao ecossistema de inovação agrestino</h3>
                    <p className='text-base text-center'>
                        Por meio de sua atuação como avaliador, o especialista é contemplado com a oportunidade de acompanhar de perto diferentes ecossistemas
                        de inovação do Agreste, tendo acesso, em primeira mão, a ideias inovadoras, potenciais negócios, talentos, parceiros, entre outros.
                    </p>
                </div>

                <div className='flex flex-col items-center w-[350px] gap-4'>
                    <FaHandsHelping size={80} className='text-orange mb-2' />
                    <h3 className='text-blue text-xl font-semibold text-center'>Give Back – Retorno à sociedade</h3>
                    <p className='text-base text-center'>Ao conferir feedbacks em suas avaliações, o avaliador apoia empreendedores iniciantes a melhor desenvolverem seus projetos e a prosseguirem suas jornadas, retribuindo à sociedade pelas próprias oportunidades que obteve.</p>
                </div>

                <div className='flex flex-col items-center w-[350px] gap-4'>
                    <FaCertificate size={80} className='text-orange mb-2' />
                    <h3 className='text-blue text-xl font-semibold text-center'>Certificado</h3>
                    <p className='text-base text-center'> Todos os avaliadores atuantes no Programa Trampolim recebem, ao final de cada etapa de seleção, um certificado que comprova sua participação.</p>
                </div>

            </div>
        </section>
    )
}

export default AppraiserBenefits