import React from 'react'
import { FaHandshake, FaMoneyBillWave, FaRegCommentDots } from 'react-icons/fa'
import { FaChartLine, FaIdCard } from 'react-icons/fa6'

const Benefits = () => {
    return (
        <section className='flex flex-col gap-24 items-center justify-center mt-20'>

            <h1 className='uppercase text-blue text-4xl font-bold mb-7'>Benefícios</h1>

            <div className='flex items-center w-full justify-around mt-10'>
                <div className='flex flex-col items-center justify-center w-[350px] gap-3'>
                    <FaRegCommentDots size={100} className='text-orange' />

                    <h3 className='text-center uppercase text-blue font-semibold'>Desenvolvimento e criação de novas ideias</h3>

                    <span className='text-center font-normal'>Cada um dos projetos selecionados receberá cerca de R$50 mil em subvenção econômica para o desenvolvimento das soluções inovadoras.</span>
                </div>

                <div className='flex flex-col items-center justify-center w-[350px] gap-3'>
                    <FaIdCard size={100} className='text-orange' />

                    <h3 className='text-center uppercase text-blue font-semibold'>Capacitações e suporte para alavancar seu projeto</h3>

                    <span className='text-center font-normal'>Cada um dos projetos selecionados receberá cerca de R$50 mil em subvenção econômica para o desenvolvimento das soluções inovadoras.</span>
                </div>

                <div className='flex flex-col items-center justify-center w-[350px] gap-3'>
                    <FaMoneyBillWave size={100} className='text-orange' />

                    <h3 className='text-center uppercase text-blue font-semibold'>Acesso a incubadoras e potenciais investidores</h3>

                    <span className='text-center font-normal'>Cada um dos projetos selecionados receberá cerca de R$50 mil em subvenção econômica para o desenvolvimento das soluções inovadoras.</span>
                </div>
            </div>


            <div className='flex items-center w-full justify-around mt-20'>
                <div className='flex flex-col items-center justify-center w-[350px] gap-3'>
                <FaChartLine size={100} className='text-orange' />

                    <h3 className='text-center uppercase text-blue font-semibold'>Ampliação do networking e divulgação do negócio</h3>

                    <span className='text-center font-normal'>Cada um dos projetos selecionados receberá cerca de R$50 mil em subvenção econômica para o desenvolvimento das soluções inovadoras.</span>
                </div>

                <div className='flex flex-col items-center justify-center w-[350px] gap-3'>
                    <FaHandshake size={100} className='text-orange' />

                    <h3 className='text-center uppercase text-blue font-semibold'>Serviços de parceiros</h3>

                    <span className='text-center font-normal'>Cada um dos projetos selecionados receberá cerca de R$50 mil em subvenção econômica para o desenvolvimento das soluções inovadoras.</span>
                </div>
            </div>


        </section>
    )
}

export default Benefits