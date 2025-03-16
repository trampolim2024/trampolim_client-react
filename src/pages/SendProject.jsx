import React, { useState } from "react";
import { FaBook, FaUser, FaClock, FaFile, FaLightbulb, FaChartLine, FaCogs, FaVideo } from "react-icons/fa";
import HeaderPanel from "../components/HeaderPanel";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SendProject = () => {
  const [formData, setFormData] = useState({
    nomeProjeto: "",
    nomeLider: "",
    integrantes: ["", "", "", ""],
    estagioIdeia: "",
    edital: "",
    descricaoIdeia: "",
    diferencialInovacao: "",
    modeloNegocio: "",
    tecnologiasUtilizadas: "",
    linkPitch: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleIntegranteChange = (index, value) => {
    const newIntegrantes = [...formData.integrantes];
    newIntegrantes[index] = value;
    setFormData({
      ...formData,
      integrantes: newIntegrantes,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Verifica se os campos obrigatórios estão preenchidos
      const requiredFields = [
        "nomeProjeto",
        "nomeLider",
        "estagioIdeia",
        "edital",
        "descricaoIdeia",
        "diferencialInovacao",
        "modeloNegocio",
        "tecnologiasUtilizadas",
        "linkPitch",
      ];

      for (const field of requiredFields) {
        if (!formData[field]) {
          alert(`Por favor, preencha o campo: ${field}`);
          return;
        }
      }

      // Obtém o userId do localStorage
      const userId = localStorage.getItem("user.id");
      if (!userId) {
        alert("Usuário não autenticado. Faça login novamente.");
        return;
      }

      // Prepara os dados para envio, incluindo o userId
      const dadosEnviados = {
        ...formData,
        integrantes: formData.integrantes.filter((integrante) => integrante.trim() !== ""), // Remove valores vazios
        userId, // Adiciona o userId ao corpo da requisição
      };

      console.log("Dados enviados:", dadosEnviados);
      const response = await axios.post(
        "https://trampolim-api-express.onrender.com/api/v1/projects",
        dadosEnviados
      );
      console.log("Projeto criado com sucesso:", response.data);

      // Exibe uma notificação de sucesso
      toast.success("Projeto criado com sucesso!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Redireciona para a rota "/perfil-empreendedor" após 3 segundos
      setTimeout(() => {
        navigate("/perfil-empreendedor");
      }, 3000);
    } catch (error) {
      console.error("Erro ao criar projeto:", error.response ? error.response.data : error.message);

      // Exibe uma notificação de erro com detalhes
      toast.error(`Erro ao criar projeto: ${error.response ? error.response.data.message : error.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <main className="flex flex-col h-screen">
      <HeaderPanel />
      <section className="h-auto p-4 flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6">
          <h2 className="text-2xl font-bold text-blue text-center mb-6">Submissão de Projeto</h2>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
            {/* Coluna 1 */}
            <div className="space-y-4">
              {/* Nome do Projeto */}
              <div className="flex flex-col gap-1">
                <label htmlFor="nomeProjeto" className="text-blue font-semibold">
                  Nome do Projeto
                </label>
                <div className="flex items-center gap-2">
                  <FaLightbulb className="text-blue text-xl" />
                  <input
                    type="text"
                    id="nomeProjeto"
                    name="nomeProjeto"
                    placeholder="Nome do Projeto"
                    value={formData.nomeProjeto}
                    onChange={handleChange}
                    className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                    required
                  />
                </div>
              </div>

              {/* Nome do Líder */}
              <div className="flex flex-col gap-1">
                <label htmlFor="nomeLider" className="text-blue font-semibold">
                  Nome do Líder
                </label>
                <div className="flex items-center gap-2">
                  <FaUser className="text-blue text-xl" />
                  <input
                    type="text"
                    id="nomeLider"
                    name="nomeLider"
                    placeholder="Nome do Líder"
                    value={formData.nomeLider}
                    onChange={handleChange}
                    className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Coluna 2 */}
            <div className="space-y-4">
              {/* Estágio da Ideia */}
              <div className="flex flex-col gap-1">
                <label htmlFor="estagioIdeia" className="text-blue font-semibold">
                  Estágio da Ideia
                </label>
                <div className="flex items-center gap-2">
                  <FaClock className="text-blue text-xl" />
                  <select
                    id="estagioIdeia"
                    name="estagioIdeia"
                    value={formData.estagioIdeia}
                    onChange={handleChange}
                    className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                    required
                  >
                    <option value="">Selecione o estágio</option>
                    <option value="Conceitual (Pesquisa)/Ideação">Conceitual (Pesquisa)/Ideação</option>
                    <option value="Em Desenvolvimento">Em Desenvolvimento</option>
                    <option value="Protótipo de Baixa Fidelidade">Protótipo de Baixa Fidelidade</option>
                    <option value="MVP sem clientes pagantes">MVP sem clientes pagantes</option>
                    <option value="MVP com clientes pagantes">MVP com clientes pagantes</option>
                  </select>
                </div>
              </div>

              {/* Edital */}
              <div className="flex flex-col gap-1">
                <label htmlFor="edital" className="text-blue font-semibold">
                  Edital
                </label>
                <div className="flex items-center gap-2">
                  <FaFile className="text-blue text-xl" />
                  <select
                    id="edital"
                    name="edital"
                    value={formData.edital}
                    onChange={handleChange}
                    className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                    required
                  >
                    <option value="">Selecione o edital</option>
                    <option value="Edital 2025.1">Edital 2025.1</option>
                    <option value="Edital 2025.2">Edital 2025.2</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Integrantes */}
            <div className="col-span-2 space-y-4">
              <label className="text-blue font-semibold">Integrantes</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[0, 1, 2, 3].map((index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FaUser className="text-blue text-xl" />
                    <input
                      type="text"
                      placeholder={`Nome do ${index + 1}° integrante`}
                      value={formData.integrantes[index]}
                      onChange={(e) => handleIntegranteChange(index, e.target.value)}
                      className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Campos que ocupam a largura total */}
            <div className="col-span-2 space-y-4">
              {/* Descrição da Ideia */}
              <div className="flex flex-col gap-1">
                <label htmlFor="descricaoIdeia" className="text-blue font-semibold">
                  Descrição da Ideia
                </label>
                <div className="flex items-center gap-2">
                  <FaLightbulb className="text-blue text-xl" />
                  <textarea
                    id="descricaoIdeia"
                    name="descricaoIdeia"
                    placeholder="Descrição da Ideia"
                    value={formData.descricaoIdeia}
                    onChange={handleChange}
                    className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                    required
                  />
                </div>
              </div>

              {/* Diferencial e Inovação */}
              <div className="flex flex-col gap-1">
                <label htmlFor="diferencialInovacao" className="text-blue font-semibold">
                  Diferencial e Inovação
                </label>
                <div className="flex items-center gap-2">
                  <FaLightbulb className="text-blue text-xl" />
                  <textarea
                    id="diferencialInovacao"
                    name="diferencialInovacao"
                    placeholder="Diferencial e Inovação"
                    value={formData.diferencialInovacao}
                    onChange={handleChange}
                    className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                    required
                  />
                </div>
              </div>

              {/* Modelo de Negócio */}
              <div className="flex flex-col gap-1">
                <label htmlFor="modeloNegocio" className="text-blue font-semibold">
                  Modelo de Negócio
                </label>
                <div className="flex items-center gap-2">
                  <FaChartLine className="text-blue text-xl" />
                  <input
                    type="text"
                    id="modeloNegocio"
                    name="modeloNegocio"
                    placeholder="Modelo de Negócio"
                    value={formData.modeloNegocio}
                    onChange={handleChange}
                    className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                    required
                  />
                </div>
              </div>

              {/* Tecnologias Utilizadas */}
              <div className="flex flex-col gap-1">
                <label htmlFor="tecnologiasUtilizadas" className="text-blue font-semibold">
                  Tecnologias Utilizadas
                </label>
                <div className="flex items-center gap-2">
                  <FaCogs className="text-blue text-xl" />
                  <textarea
                    id="tecnologiasUtilizadas"
                    name="tecnologiasUtilizadas"
                    placeholder="Tecnologias Utilizadas"
                    value={formData.tecnologiasUtilizadas}
                    onChange={handleChange}
                    className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                    required
                  />
                </div>
              </div>

              {/* Link do Pitch */}
              <div className="flex flex-col gap-1">
                <label htmlFor="linkPitch" className="text-blue font-semibold">
                  Link do Pitch
                </label>
                <div className="flex items-center gap-2">
                  <FaVideo className="text-blue text-xl" />
                  <input
                    type="url"
                    id="linkPitch"
                    name="linkPitch"
                    placeholder="Link do Pitch"
                    value={formData.linkPitch}
                    onChange={handleChange}
                    className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Botão de Submissão */}
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Submeter
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SendProject;