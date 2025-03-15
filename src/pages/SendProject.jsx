import React from 'react'
import { FaBook, FaUser, FaClock, FaFile } from 'react-icons/fa';
import { FaLightbulb, FaChartLine, FaCogs, FaVideo } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css'; // Importando o estilo do Toastify
import HeaderPanel from '../components/HeaderPanel';

const SendProject = () => {
    return (
        <main className='flex flex-col h-screen'>

            <HeaderPanel />

            <section className='h-auto p-4 flex flex-col items-center justify-center'>
                <form className='flex flex-col items-center gap-10'>
                    <div className='flex items-center gap-3 py-10'>
                        <FaBook className='text-orange' size={40} />
                        <h2 className='text-orange text-4xl uppercase'>Submissão de projeto</h2>
                    </div>

                    <div className='flex items-center flex-col justify-center gap-10 w-[100vw] border-b-2 border-orange-300 pb-10'>

                        <label htmlFor="nomeProjeto">
                            Nome do projeto
                            <div className='relative'>
                                <FaLightbulb className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                <input
                                    type="text"
                                    id="nomeProjeto"
                                    className='pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent w-[510px]'
                                    name="nomeProjeto"

                                />
                            </div>
                        </label>

                        <label htmlFor="nomeCompleto">
                            Nome do líder
                            <div className='relative'>
                                <FaUser className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                <input
                                    type="text"
                                    id="nomeCompleto"
                                    className='pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent w-[510px]'
                                    name="nomeCompleto"

                                />
                            </div>
                        </label>

                        <div className='flex items-center gap-4'>
                            <div className='flex flex-col gap-8'>
                                <label htmlFor="nomeCompleto">
                                    Nome do 2° integrante
                                    <div className='relative'>
                                        <FaUser className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                        <input
                                            type="text"
                                            id="nomeCompleto"
                                            className='pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent'
                                            name="nomeCompleto"

                                        />
                                    </div>
                                </label>

                                <label htmlFor="nomeCompleto">
                                    Nome do 4° integrante
                                    <div className='relative'>
                                        <FaUser className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                        <input
                                            type="text"
                                            id="nomeCompleto"
                                            className='pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent'
                                            name="nomeCompleto"

                                        />
                                    </div>
                                </label>

                            </div>

                            <div className='flex flex-col gap-8'>
                                <label htmlFor="nomeCompleto">
                                    Nome do 3° integrante
                                    <div className='relative'>
                                        <FaUser className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                        <input
                                            type="text"
                                            id="nomeCompleto"
                                            className='pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent'
                                            name="nomeCompleto"

                                        />
                                    </div>
                                </label>

                                <label htmlFor="nomeCompleto">
                                    Nome do 5° integrante
                                    <div className='relative'>
                                        <FaUser className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                        <input
                                            type="text"
                                            id="nomeCompleto"
                                            className='pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent'
                                            name="nomeCompleto"

                                        />
                                    </div>
                                </label>
                            </div>
                        </div>

                        <label htmlFor="startup">
                            Estágio da sua ideia:
                            <div className='relative'>
                                <FaClock className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                <select
                                    name="monitorouStartup"
                                    id="startup"
                                    className='pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent w-[510px]'

                                >
                                    <option value="true">Conceitual (Pesquisa)/Ideação</option>
                                    <option value="false">Em Desenvolvimento</option>
                                    <option value="false">Protótipo de Baixa Fidelidade</option>
                                    <option value="false">MVP sem clientes pagantes</option>
                                    <option value="false">MVP com clientes pagantes
                                    </option>
                                </select>
                            </div>
                        </label>


                        <label htmlFor="startup">
                            Para qual edital você está submetendo seu projeto:
                            <div className='relative'>
                                <FaFile className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                <select
                                    name="monitorouStartup"
                                    id="startup"
                                    className='pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent w-[510px]'

                                >
                                    <option value="true">Edital 2025.1</option>
                                    <option value="true">Edital 2025.2</option>
                                </select>
                            </div>
                        </label>

                    </div>

                    <div className='w-[75vw] pb-10 pt-10'>
                        <div className='flex flex-col gap-4'>

                            <label htmlFor="descricao">
                                Descrição da sua ideia inovadora:
                                <div className='relative'>
                                    <FaLightbulb className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                    <textarea
                                        className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent'
                                        name="descricaoIncubacao"
                                    />
                                </div>
                            </label>

                            <label htmlFor="descricao">
                                Descreva o que sua ideia tem de inovadora comparada as demais:
                                <div className='relative'>
                                    <FaLightbulb className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                    <textarea
                                        className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent'
                                        name="descricaoIncubacao"
                                    />
                                </div>
                            </label>

                            <label htmlFor="descricao">
                                Modelo de negócio
                                <div className='relative'>
                                    <FaChartLine className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                    <input
                                        className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent'
                                        name="descricaoIncubacao"
                                    />
                                </div>
                            </label>

                            <label htmlFor="descricao">
                                Descreva quais tecnologias serão utilizadas:
                                <div className='relative'>
                                    <FaCogs className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                    <textarea
                                        className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent'
                                        name="descricaoIncubacao"
                                    />
                                </div>
                            </label>

                            <label htmlFor="descricao">
                                Link do pitch (vídeo de até 2 min)
                                <div className='relative'>
                                    <FaVideo className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                    <input
                                        className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent'
                                        name="descricaoIncubacao"
                                    />
                                </div>
                            </label>

                        </div>
                    </div>

                    <button type="submit" className='p-3 outline-none background-orange rounded-xl border-none text-white w-[20vw] font-semibold'>Submeter</button>
                </form>
            </section>

        </main>
    )
}

export default SendProject