import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importando o hook de navegação
import { FaBook, FaUser, FaCalendarAlt, FaGraduationCap, FaBriefcase, FaVenusMars, FaEnvelope, FaIdCard, FaPhone, FaMapMarkerAlt, FaMap, FaCity, FaStreetView, FaHome, FaLinkedin, FaInstagram, FaFacebook, FaLock } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify'; // Certifique-se de importar o ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Importando o estilo do Toastify

const AppraiserSignup = () => {


    const [formData, setFormData] = useState({
        nomeCompleto: '',
        grau_escolaridade: '', // Campo para grau de escolaridade
        area_atuacao: '', // Campo para área de atuação
        genero: '', // Campo para gênero
        cpf: '',
        telefone: '',
        cep: '',
        estado: '',
        cidade: '',
        bairro: '',
        endereco: '',
        linkedin: '',
        instagram: '',
        facebook: '',
        miniCurriculo: '',
        email: '',
        senha: '',
        tipo: 'avaliador', // Tipo fixo como 'empreendedor'
        monitorouStartup: '', // Novo campo
        descricaoIncubacao: '', // Novo campo
    });

    const navigate = useNavigate(); // Hook para navegação

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value, // Isso deve capturar corretamente o valor de 'genero'
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.dataNascimento) {
            toast.error('Por favor, preencha a data de nascimento.');
            return;
        }

        const payload = {
            ...formData,
            monitorouStartup: formData.monitorouStartup === 'true', // Convertendo para booleano
            descricaoIncubacao: formData.descricaoIncubacao,
            tipo: 'avaliador', // Ou outro tipo de usuário
        };

        try {
            const response = await fetch('http://localhost:3000/usuarios/cadastrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                toast.success('Cadastro realizado com sucesso!');
                setTimeout(() => {
                    navigate('/'); // Redireciona para a home
                }, 2000);
            } else {
                toast.error('Ocorreu um erro ao realizar o cadastro.');
                console.error(`Erro: ${response.status} - ${response.statusText}`);
            }
        } catch (error) {
            toast.error('Erro ao conectar com o servidor.');
            console.error('Erro de conexão:', error);
        }
    };




    return (
        <>
            <ToastContainer />
            <section className='h-auto p-4 flex flex-col items-center justify-center'>
                <form onSubmit={handleSubmit} className='flex flex-col items-center gap-10'>
                    <div className='flex items-center gap-3 py-10'>
                        <FaBook className='text-orange' size={40} />
                        <h2 className='text-orange text-4xl uppercase'>Inscrição avaliador</h2>
                    </div>

                    <div className='flex flex-col items-center justify-center w-[75vw] gap-7 border-b-2 border-orange-300 pb-10'>

                        <div className='flex items-center justify-center gap-10'>
                            <div className='flex flex-col gap-7'>
                                <label htmlFor="nomeCompleto">
                                    Nome completo
                                    <div className='relative'>
                                        <FaUser className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                        <input
                                            type="text"
                                            id="nomeCompleto"
                                            className='pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent'
                                            name="nomeCompleto" // O name precisa ser igual ao nome da chave no estado
                                            value={formData.nomeCompleto}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </label>

                                <label htmlFor="dataNascimento">
                                    Data de nascimento
                                    <div className='relative'>
                                        <FaCalendarAlt className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                        <input
                                            type="date"
                                            id="dataNascimento"
                                            className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent'
                                            name="dataNascimento"
                                            value={formData.dataNascimento}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </label>

                                <label htmlFor="grau_escolaridade">
                                    Grau de escolaridade
                                    <div className="relative">
                                        <FaGraduationCap className="absolute left-2 top-1/2 transform -translate-y-1/2 text-orange" />
                                        <select
                                            id="grau_escolaridade"
                                            name="grau_escolaridade"
                                            className="w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent"
                                            value={formData.grau_escolaridade}
                                            onChange={handleChange}
                                        >
                                            <option value="fundamental">Fundamental</option>
                                            <option value="medio">Médio</option>
                                            <option value="superior">Superior</option>
                                        </select>
                                    </div>
                                </label>

                                <label htmlFor="area_atuacao">
                                    Área de atuação
                                    <div className="relative">
                                        <FaBriefcase className="absolute left-2 top-1/2 transform -translate-y-1/2 text-orange" />
                                        <select
                                            id="area_atuacao"
                                            name="area_atuacao"
                                            className="w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent"
                                            value={formData.area_atuacao}
                                            onChange={handleChange}
                                        >
                                            <option value="opt1">opt1</option>
                                            <option value="opt2">opt2</option>
                                            <option value="opt3">opt3</option>
                                        </select>
                                    </div>
                                </label>
                            </div>

                            <div className='flex flex-col gap-7'>
                                <label htmlFor="genero">
                                    Gênero
                                    <div className="relative">
                                        <FaVenusMars className="absolute left-2 top-1/2 transform -translate-y-1/2 text-orange" />
                                        <select
                                            id="genero"
                                            name="genero"
                                            className="w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent"
                                            value={formData.genero}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>Selecionar...</option>
                                            <option value="Masculino">Masculino</option>
                                            <option value="Feminino">Feminino</option>
                                            <option value="Outro">Outro</option>
                                        </select>
                                    </div>
                                </label>

                                <label htmlFor="email">
                                    Email
                                    <div className='relative'>
                                        <FaEnvelope className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"  // Adicionei name aqui para o handleChange funcionar
                                            className='pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent'
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </label>
                                <label htmlFor="cpf">
                                    CPF
                                    <div className='relative'>
                                        <FaIdCard className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                        <input
                                            type="text"
                                            id="cpf"
                                            name="cpf"  // Adicionei name aqui para o handleChange funcionar
                                            className='pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent'
                                            value={formData.cpf}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </label>

                                <label htmlFor="telefone">
                                    Telefone
                                    <div className='relative'>
                                        <FaPhone className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                        <input
                                            type="text"
                                            id="telefone"
                                            name="telefone"  // Adicionei name aqui para o handleChange funcionar
                                            className='pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent'
                                            value={formData.telefone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </label>
                            </div>

                        </div>


                        <label htmlFor="senha">
                            Senha
                            <div className='relative'>
                                <FaLock className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                <input type="password" id="senha" name="senha" className='w-[28vw] pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent' value={formData.senha} onChange={handleChange} />
                            </div>
                        </label>


                    </div>

                    <div className='w-[75vw] border-b-2 border-orange-300 pb-10 pt-10'>
                        <div className='flex items-center gap-4'>
                            <label htmlFor="cep">
                                CEP
                                <div className='relative'>
                                    <FaMapMarkerAlt className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                    <input type="text" id="cep" name='cep' className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent' value={formData.cep} onChange={handleChange} />
                                </div>
                            </label>

                            <label htmlFor="estado">
                                Estado
                                <div className='relative'>
                                    <FaMap className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                    <input type="text" id="estado" name='estado' className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent' value={formData.estado} onChange={handleChange} />
                                </div>
                            </label>

                            <label htmlFor="cidade">
                                Cidade
                                <div className='relative'>
                                    <FaCity className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                    <input type="text" id="cidade" name='cidade' className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent' value={formData.cidade} onChange={handleChange} />
                                </div>
                            </label>

                            <label htmlFor="bairro">
                                Bairro
                                <div className='relative'>
                                    <FaStreetView className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                    <input type="text" id="bairro" name='bairro' className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent' value={formData.bairro} onChange={handleChange} />
                                </div>
                            </label>

                            <label htmlFor="endereco">
                                Endereço
                                <div className='relative'>
                                    <FaHome className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                    <input type="text" id="endereco" name="endereco" className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent' value={formData.endereco} onChange={handleChange} />
                                </div>
                            </label>
                        </div>
                    </div>




                    <div className='w-[75vw] border-b-2 border-orange-300 pb-10 pt-10'>
                        <div className='flex items-center gap-4'>
                            <label htmlFor="linkedin">
                                Linkedin
                                <div className='relative'>
                                    <FaLinkedin className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                    <input type="text" id="linkedin" name='linkedin' className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent' value={formData.linkedin} onChange={handleChange} />
                                </div>
                            </label>

                            <label htmlFor="instagram">
                                Instagram
                                <div className='relative'>
                                    <FaInstagram className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                    <input type="text" id="instagram" name='instagram' className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent' value={formData.instagram} onChange={handleChange} />
                                </div>
                            </label>

                            <label htmlFor="facebook">
                                Facebook
                                <div className='relative'>
                                    <FaFacebook className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                    <input type="text" id="facebook" name="facebook" className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent' value={formData.facebook} onChange={handleChange} />
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
                                    <select
                                        name="monitorouStartup"
                                        id="startup"
                                        className='pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent'
                                        value={formData.monitorouStartup}
                                        onChange={handleChange}
                                    >
                                        <option value="true">Sim</option>
                                        <option value="false">Não</option>
                                    </select>
                                </div>
                            </label>

                            <label htmlFor="descricao">
                                Descreva quais programas de incubação ou aceleração você participou:
                                <div className='relative'>
                                    <FaMapMarkerAlt className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                                    <textarea
                                        className='w-full pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent'
                                        name="descricaoIncubacao"
                                        value={formData.descricaoIncubacao}
                                        onChange={handleChange}
                                    />
                                </div>
                            </label>

                        </div>
                    </div>


                    <button type="submit" className='p-3 outline-none background-orange rounded-xl border-none text-white w-[20vw] font-semibold'>Inscrever-se</button>
                </form>
            </section>
        </>

    )
}

export default AppraiserSignup