import React from 'react'
import { FaBook, FaUser, FaCalendarAlt, FaGraduationCap, FaBriefcase, FaVenusMars, FaEnvelope, FaIdCard, FaPhone, FaMapMarkerAlt, FaMap, FaCity, FaStreetView, FaHome, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const AppraiserSignup = () => {
    return (
        <section className='h-auto p-4 flex flex-col items-center justify-center'>

            <div className='flex items-center gap-3 py-10'>
                <FaBook className='text-orange' size={40} />
                <h2 className='text-orange text-4xl uppercase'>Inscrição avaliador</h2>
            </div>

            <div className='flex items-center justify-center gap-10 w-[75vw] border-b-2 border-orange-300 pb-10'>

                <div className='flex flex-col'>
                    <label htmlFor="nome">
                        Nome completo
                        <div className='relative'>
                            <FaUser className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                            <input type="text" id="nome" className='pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent' />
                        </div>
                    </label>

                    <label htmlFor="data-nascimento">
                        Data de nascimento
                        <div className='relative'>
                            <FaCalendarAlt className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                            <input type="date" id="data-nascimento" className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent' />
                        </div>
                    </label>

                    <label htmlFor="grau-escolaridade">
                        Grau de escolaridade
                        <div className='relative'>
                            <FaGraduationCap className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                            <select name="grau-escolaridade" id="grau-escolaridade" className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent'>
                                <option value="fundamental">Fundamental</option>
                                <option value="medio">Médio</option>
                                <option value="superior">Superior</option>
                            </select>
                        </div>
                    </label>

                    <label htmlFor="area-experiencia">
                        Área de experiência
                        <div className='relative'>
                            <FaBriefcase className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                            <select name="area-experiencia" id="area-experiencia" className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent'>
                                <option value="">opt1</option>
                                <option value="">opt2</option>
                                <option value="">opt3</option>
                            </select>
                        </div>
                    </label>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="genero">
                        Gênero
                        <div className='relative'>
                            <FaVenusMars className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                            <select name="genero" id="genero" className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent'>
                                <option value="">Masculino</option>
                                <option value="">Feminino</option>
                                <option value="">Outro</option>
                            </select>
                        </div>
                    </label>

                    <label htmlFor="email">
                        Email
                        <div className='relative'>
                            <FaEnvelope className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                            <input type="email" id="email" className='pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent' />
                        </div>
                    </label>

                    <label htmlFor="CPF">
                        CPF
                        <div className='relative'>
                            <FaIdCard className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                            <input type="text" id="CPF" className='pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent' />
                        </div>
                    </label>

                    <label htmlFor="telefone">
                        Telefone
                        <div className='relative'>
                            <FaPhone className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                            <input type="text" id="telefone" className='pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent' />
                        </div>
                    </label>
                </div>


            </div>

            <div className='w-[75vw] border-b-2 border-orange-300 pb-10 pt-10'>
                <div className='flex items-center gap-4'>
                    <label htmlFor="CEP">
                        CEP
                        <div className='relative'>
                            <FaMapMarkerAlt className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                            <input type="text" id="CEP" className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent' />
                        </div>
                    </label>

                    <label htmlFor="estado">
                        Estado
                        <div className='relative'>
                            <FaMap className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                            <input type="text" id="estado" className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent' />
                        </div>
                    </label>

                    <label htmlFor="cidade">
                        Cidade
                        <div className='relative'>
                            <FaCity className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                            <input type="text" id="cidade" className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent' />
                        </div>
                    </label>

                    <label htmlFor="bairro">
                        Bairro
                        <div className='relative'>
                            <FaStreetView className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                            <input type="text" id="bairro" className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent' />
                        </div>
                    </label>

                    <label htmlFor="endereco">
                        Endereço
                        <div className='relative'>
                            <FaHome className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                            <input type="text" id="endereco" className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent' />
                        </div>
                    </label>
                </div>
            </div>




            <div className='w-[75vw] border-b-2 border-orange-300 pb-10 pt-10'>
                <div className='flex items-center gap-4'>
                    <label htmlFor="CEP">
                        Linkedin
                        <div className='relative'>
                            <FaLinkedin className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                            <input type="text" id="CEP" className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent' />
                        </div>
                    </label>

                    <label htmlFor="estado">
                        Instagram
                        <div className='relative'>
                            <FaInstagram className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                            <input type="text" id="estado" className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent' />
                        </div>
                    </label>

                    <label htmlFor="cidade">
                        Facebook
                        <div className='relative'>
                            <FaFacebook className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                            <input type="text" id="cidade" className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent' />
                        </div>
                    </label>
                </div>
            </div>

            <div className='w-[75vw] pb-10 pt-10'>
                <div className='flex flex-col gap-4'>


                    <label htmlFor="startup">
                        Já monitorou alguma startup?
                        <div className='relative'>
                            <FaVenusMars className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                            <select name="startup" id="startup" className=' pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent'>
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </select>
                        </div>
                    </label>



                    <label htmlFor="descricao">
                        Descreva quais programas de incubação ou aceleração você participou:
                        <div className='relative'>
                            <FaMapMarkerAlt className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                            <textarea className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent'>

                            </textarea>
                        </div>
                    </label>
                </div>
            </div>


            <button className='p-3 outline-none background-orange rounded-xl border-none text-white w-[20vw] font-semibold'>Inscrever-se</button>

        </section>
    )
}

export default AppraiserSignup