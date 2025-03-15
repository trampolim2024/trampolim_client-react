import React, { useState } from 'react';
import { FaBook, FaUser, FaClock, FaFile } from 'react-icons/fa';
import { FaLightbulb, FaChartLine, FaCogs, FaVideo } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css'; // Importando o estilo do Toastify
import HeaderPanel from '../components/HeaderPanel';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SendProject = () => {
    const [formData, setFormData] = useState({
        nomeProjeto: '',
        nomeLider: '',
        integrantes: ['', '', '', ''],
        estagioIdeia: '',
        edital: '',
        descricaoIdeia: '',
        diferencialInovacao: '',
        modeloNegocio: '',
        tecnologiasUtilizadas: '',
        linkPitch: ''
    });

    const navigate = useNavigate(); // Hook para redirecionamento

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleIntegranteChange = (index, value) => {
        const newIntegrantes = [...formData.integrantes];
        newIntegrantes[index] = value;
        setFormData({
            ...formData,
            integrantes: newIntegrantes
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Verifica se os campos obrigatórios estão preenchidos
            if (!formData.edital || !formData.modeloNegocio) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            const dadosEnviados = {
                ...formData,
                integrantes: formData.integrantes.filter(integrante => integrante.trim() !== '') // Remove valores vazios
            };

            console.log('Dados enviados:', dadosEnviados);
            const response = await axios.post('https://trampolim-api-express.onrender.com/api/v1/projects', dadosEnviados);
            console.log('Projeto criado com sucesso:', response.data);

            // Exibe uma notificação de sucesso
            toast.success('Projeto criado com sucesso!', {
                position: "top-right",
                autoClose: 3000, // Fecha automaticamente após 3 segundos
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            // Redireciona para a rota "/perfil-empreendedor" após 3 segundos
            setTimeout(() => {
                navigate('/perfil-empreendedor');
            }, 3000);

        } catch (error) {
            console.error('Erro ao criar projeto:', error);

            // Exibe uma notificação de erro
            toast.error('Erro ao criar projeto. Tente novamente.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };


    return (
        <main className='flex flex-col h-screen'>
            <HeaderPanel />
            <section className='h-auto p-4 flex flex-col items-center justify-center'>
                <form className='flex flex-col items-center gap-10' onSubmit={handleSubmit}>
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
                                    value={formData.nomeProjeto}
                                    onChange={handleChange}
                                />
                            </div>
                        </label>

                        <label htmlFor="nomeLider">
                            Nome do líder
                            <div className='relative'>
                                <FaUser className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                <input
                                    type="text"
                                    id="nomeLider"
                                    className='pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent w-[510px]'
                                    name="nomeLider"
                                    value={formData.nomeLider}
                                    onChange={handleChange}
                                />
                            </div>
                        </label>

                        <div className='flex items-center gap-4'>
                            <div className='flex flex-col gap-8'>
                                {[0, 1].map((index) => (
                                    <label key={index} htmlFor={`integrante${index + 2}`}>
                                        Nome do {index + 2}° integrante
                                        <div className='relative'>
                                            <FaUser className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                            <input
                                                type="text"
                                                id={`integrante${index + 2}`}
                                                className='pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent'
                                                value={formData.integrantes[index]}
                                                onChange={(e) => handleIntegranteChange(index, e.target.value)}
                                            />
                                        </div>
                                    </label>
                                ))}
                            </div>

                            <div className='flex flex-col gap-8'>
                                {[2, 3].map((index) => (
                                    <label key={index} htmlFor={`integrante${index + 2}`}>
                                        Nome do {index + 2}° integrante
                                        <div className='relative'>
                                            <FaUser className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                            <input
                                                type="text"
                                                id={`integrante${index + 2}`}
                                                className='pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent'
                                                value={formData.integrantes[index]}
                                                onChange={(e) => handleIntegranteChange(index, e.target.value)}
                                            />
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <label htmlFor="estagioIdeia">
                            Estágio da sua ideia:
                            <div className='relative'>
                                <FaClock className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                <select
                                    name="estagioIdeia"
                                    id="estagioIdeia"
                                    className='pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent w-[510px]'
                                    value={formData.estagioIdeia}
                                    onChange={handleChange}
                                >
                                    <option value="Conceitual (Pesquisa)/Ideação">Conceitual (Pesquisa)/Ideação</option>
                                    <option value="Em Desenvolvimento">Em Desenvolvimento</option>
                                    <option value="Protótipo de Baixa Fidelidade">Protótipo de Baixa Fidelidade</option>
                                    <option value="MVP sem clientes pagantes">MVP sem clientes pagantes</option>
                                    <option value="MVP com clientes pagantes">MVP com clientes pagantes</option>
                                </select>
                            </div>
                        </label>

                        <label htmlFor="edital">
                            Para qual edital você está submetendo seu projeto:
                            <div className='relative'>
                                <FaFile className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                <select
                                    name="edital"
                                    id="edital"
                                    className='pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent w-[510px]'
                                    value={formData.edital}
                                    onChange={handleChange}
                                >
                                    <option value="Edital 2025.1">Edital 2025.1</option>
                                    <option value="Edital 2025.2">Edital 2025.2</option>
                                </select>
                            </div>
                        </label>
                    </div>

                    <div className='w-[75vw] pb-10 pt-10'>
                        <div className='flex flex-col gap-4'>
                            <label htmlFor="descricaoIdeia">
                                Descrição da sua ideia inovadora:
                                <div className='relative'>
                                    <FaLightbulb className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                    <textarea
                                        className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent'
                                        name="descricaoIdeia"
                                        value={formData.descricaoIdeia}
                                        onChange={handleChange}
                                    />
                                </div>
                            </label>

                            <label htmlFor="diferencialInovacao">
                                Descreva o que sua ideia tem de inovadora comparada as demais:
                                <div className='relative'>
                                    <FaLightbulb className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                    <textarea
                                        className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent'
                                        name="diferencialInovacao"
                                        value={formData.diferencialInovacao}
                                        onChange={handleChange}
                                    />
                                </div>
                            </label>

                            <label htmlFor="modeloNegocio">
                                Modelo de negócio
                                <div className='relative'>
                                    <FaChartLine className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                    <input
                                        className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent'
                                        name="modeloNegocio"
                                        value={formData.modeloNegocio}
                                        onChange={handleChange}
                                    />
                                </div>
                            </label>

                            <label htmlFor="tecnologiasUtilizadas">
                                Descreva quais tecnologias serão utilizadas:
                                <div className='relative'>
                                    <FaCogs className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                    <textarea
                                        className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent'
                                        name="tecnologiasUtilizadas"
                                        value={formData.tecnologiasUtilizadas}
                                        onChange={handleChange}
                                    />
                                </div>
                            </label>

                            <label htmlFor="linkPitch">
                                Link do pitch (vídeo de até 2 min)
                                <div className='relative'>
                                    <FaVideo className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                    <input
                                        className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent'
                                        name="linkPitch"
                                        value={formData.linkPitch}
                                        onChange={handleChange}
                                    />
                                </div>
                            </label>
                        </div>
                    </div>

                    <button type="submit" className='p-3 outline-none background-orange rounded-xl border-none text-white w-[20vw] font-semibold'>Submeter</button>
                </form>
            </section>
        </main>
    );
};

export default SendProject;