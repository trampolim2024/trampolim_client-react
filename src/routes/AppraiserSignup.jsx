import { useState } from "react";
import axios from "axios";
import {
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaVenusMars,
  FaIdCard,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaFileAlt,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import Header from "../components/Header";

const AppraiserSignUp = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    grau_escolaridade: "",
    area_atuacao: "",
    genero: "",
    cpf: "",
    telefone: "",
    cep: "",
    estado: "",
    cidade: "",
    bairro: "",
    endereco: "",
    linkedin: "",
    instagram: "",
    facebook: "",
    miniCurriculo: "",
    email: "",
    senha: "",
    monitorouStartup: "",
    descricaoIncubacao: "",
  });

  // Definindo o tipo do usuário (alterar conforme necessário)
  const userType = "avaliador"; // Pode ser "empreendedor", "avaliador" ou "admin"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      ...formData,
      tipo: userType, // Define o tipo de usuário direto no código
    };

    try {
      const response = await axios.post(
        "https://trampolim-api-express.onrender.com/api/v1/auth/sign-up",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("Usuário cadastrado com sucesso!");
      console.log(response.data);
    } catch (error) {
      console.error("Erro no cadastro:", error.response?.data || error.message);
      alert("Erro ao cadastrar usuário. Verifique os dados e tente novamente.");
    }
  };

  return (
    <section className="flex flex-col">
      <Header/>

      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 my-10">
        <h2 className="text-2xl font-bold text-blue text-center mb-6">
          Cadastro de Avaliador
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
          {/* Coluna 1 */}
          <div className="space-y-4">
            {/* Nome Completo */}
            <div className="flex flex-col gap-1">
              <label htmlFor="nomeCompleto" className="text-blue font-semibold">
                Nome Completo
              </label>
              <div className="flex items-center gap-2">
                <FaUser className="text-blue text-xl" />
                <input
                  type="text"
                  id="nomeCompleto"
                  name="nomeCompleto"
                  placeholder="Nome Completo"
                  value={formData.nomeCompleto}
                  onChange={handleChange}
                  className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                  required
                />
              </div>
            </div>

            {/* Grau de Escolaridade */}
            <div className="flex flex-col gap-1">
              <label htmlFor="grau_escolaridade" className="text-blue font-semibold">
                Grau de Escolaridade
              </label>
              <div className="flex items-center gap-2">
                <FaGraduationCap className="text-blue text-xl" />
                <input
                  type="text"
                  id="grau_escolaridade"
                  name="grau_escolaridade"
                  placeholder="Grau de Escolaridade"
                  value={formData.grau_escolaridade}
                  onChange={handleChange}
                  className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                  required
                />
              </div>
            </div>

            {/* Área de Atuação */}
            <div className="flex flex-col gap-1">
              <label htmlFor="area_atuacao" className="text-blue font-semibold">
                Área de Atuação
              </label>
              <div className="flex items-center gap-2">
                <FaBriefcase className="text-blue text-xl" />
                <input
                  type="text"
                  id="area_atuacao"
                  name="area_atuacao"
                  placeholder="Área de Atuação"
                  value={formData.area_atuacao}
                  onChange={handleChange}
                  className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                  required
                />
              </div>
            </div>

            {/* Gênero */}
            <div className="flex flex-col gap-1">
              <label htmlFor="genero" className="text-blue font-semibold">
                Gênero
              </label>
              <div className="flex items-center gap-2">
                <FaVenusMars className="text-blue text-xl" />
                <select
                  id="genero"
                  name="genero"
                  value={formData.genero}
                  onChange={handleChange}
                  className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                  required
                >
                  <option value="">Selecione o gênero</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Outro">Outro</option>
                  <option value="Prefiro não informar">Prefiro não informar</option>
                </select>
              </div>
            </div>

            {/* CPF */}
            <div className="flex flex-col gap-1">
              <label htmlFor="cpf" className="text-blue font-semibold">
                CPF
              </label>
              <div className="flex items-center gap-2">
                <FaIdCard className="text-blue text-xl" />
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  placeholder="CPF (somente números)"
                  value={formData.cpf}
                  onChange={handleChange}
                  className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                  required
                />
              </div>
            </div>

            {/* Telefone */}
            <div className="flex flex-col gap-1">
              <label htmlFor="telefone" className="text-blue font-semibold">
                Telefone
              </label>
              <div className="flex items-center gap-2">
                <FaPhone className="text-blue text-xl" />
                <input
                  type="text"
                  id="telefone"
                  name="telefone"
                  placeholder="Telefone (somente números)"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                  required
                />
              </div>
            </div>
          </div>

          {/* Coluna 2 */}
          <div className="space-y-4">
            {/* CEP */}
            <div className="flex flex-col gap-1">
              <label htmlFor="cep" className="text-blue font-semibold">
                CEP
              </label>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue text-xl" />
                <input
                  type="text"
                  id="cep"
                  name="cep"
                  placeholder="CEP (somente números)"
                  value={formData.cep}
                  onChange={handleChange}
                  className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                  required
                />
              </div>
            </div>

            {/* Estado */}
            <div className="flex flex-col gap-1">
              <label htmlFor="estado" className="text-blue font-semibold">
                Estado
              </label>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue text-xl" />
                <input
                  type="text"
                  id="estado"
                  name="estado"
                  placeholder="Estado"
                  value={formData.estado}
                  onChange={handleChange}
                  className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                  required
                />
              </div>
            </div>

            {/* Cidade */}
            <div className="flex flex-col gap-1">
              <label htmlFor="cidade" className="text-blue font-semibold">
                Cidade
              </label>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue text-xl" />
                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  placeholder="Cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                  className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                  required
                />
              </div>
            </div>

            {/* Bairro */}
            <div className="flex flex-col gap-1">
              <label htmlFor="bairro" className="text-blue font-semibold">
                Bairro
              </label>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue text-xl" />
                <input
                  type="text"
                  id="bairro"
                  name="bairro"
                  placeholder="Bairro"
                  value={formData.bairro}
                  onChange={handleChange}
                  className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                  required
                />
              </div>
            </div>

            {/* Endereço */}
            <div className="flex flex-col gap-1">
              <label htmlFor="endereco" className="text-blue font-semibold">
                Endereço
              </label>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue text-xl" />
                <input
                  type="text"
                  id="endereco"
                  name="endereco"
                  placeholder="Endereço"
                  value={formData.endereco}
                  onChange={handleChange}
                  className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                  required
                />
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col gap-1">
              <label htmlFor="linkedin" className="text-blue font-semibold">
                LinkedIn (opcional)
              </label>
              <div className="flex items-center gap-2">
                <FaLinkedin className="text-blue text-xl" />
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  placeholder="LinkedIn"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                />
              </div>
            </div>
          </div>

          {/* Campos que ocupam a largura total */}
          <div className="col-span-2 space-y-4">
            {/* Mini Currículo */}
            <div className="flex flex-col gap-1">
              <label htmlFor="miniCurriculo" className="text-blue font-semibold">
                Mini Currículo
              </label>
              <div className="flex items-center gap-2">
                <FaFileAlt className="text-blue text-xl" />
                <textarea
                  id="miniCurriculo"
                  name="miniCurriculo"
                  placeholder="Mini Currículo"
                  value={formData.miniCurriculo}
                  onChange={handleChange}
                  className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                  required
                />
              </div>
            </div>

            {/* Monitorou Startup? */}
            <div className="flex flex-col gap-1">
              <label htmlFor="monitorouStartup" className="text-blue font-semibold">
                Monitorou Startup?
              </label>
              <div className="flex items-center gap-2">
                <FaFileAlt className="text-blue text-xl" />
                <select
                  id="monitorouStartup"
                  name="monitorouStartup"
                  value={formData.monitorouStartup}
                  onChange={handleChange}
                  className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                  required
                >
                  <option value="">Selecione uma opção</option>
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                </select>
              </div>
            </div>

            {/* Descrição da Incubação */}
            <div className="flex flex-col gap-1">
              <label htmlFor="descricaoIncubacao" className="text-blue font-semibold">
                Descrição da Incubação
              </label>
              <div className="flex items-center gap-2">
                <FaFileAlt className="text-blue text-xl" />
                <textarea
                  id="descricaoIncubacao"
                  name="descricaoIncubacao"
                  placeholder="Descrição da Incubação"
                  value={formData.descricaoIncubacao}
                  onChange={handleChange}
                  className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                  required
                />
              </div>
            </div>

            {/* E-mail */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-blue font-semibold">
                E-mail
              </label>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-blue text-xl" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                  required
                />
              </div>
            </div>

            {/* Senha */}
            <div className="flex flex-col gap-1">
              <label htmlFor="senha" className="text-blue font-semibold">
                Senha
              </label>
              <div className="flex items-center gap-2">
                <FaLock className="text-blue text-xl" />
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  placeholder="Senha"
                  value={formData.senha}
                  onChange={handleChange}
                  className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                  required
                />
              </div>
            </div>
          </div>

          {/* Botão de Cadastro */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AppraiserSignUp;