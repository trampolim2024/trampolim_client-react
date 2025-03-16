import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import HeaderPanel from "../components/HeaderPanel";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import ProjectDetailsCard from "../components/ProjectDetailsCard";

const EnterprisingPanel = () => {
  const [userData, setUserData] = useState(null);
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem("user.id");
      const token = localStorage.getItem("token");

      if (!userId || !token) {
        navigate("/login");
        return;
      }

      try {
        // Configuração do Axios para incluir o token de autenticação
        const axiosConfig = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        // Busca os dados do usuário
        const userResponse = await axios.get(
          `https://trampolim-api-express.onrender.com/api/v1/users/${userId}`,
          axiosConfig
        );

        if (userResponse.data) {
          setUserData(userResponse.data.data);

          // Busca os projetos do usuário
          const projectsResponse = await axios.get(
            `https://trampolim-api-express.onrender.com/api/v1/projects/user/${userId}`,
            axiosConfig
          );

          if (projectsResponse.data) {
            setProjects(projectsResponse.data.data);
          } else {
            console.error("Erro ao buscar projetos do usuário");
          }
        } else {
          console.error("Erro ao buscar dados do usuário");
        }
      } catch (error) {
        console.error("Erro de conexão:", error.response ? error.response.data : error.message);
      }
    };

    fetchUserData();
  }, [navigate]);

  // Função para criar um novo projeto
  const createProject = async (projectData) => {
    const userId = localStorage.getItem("user.id");
    const token = localStorage.getItem("token");

    if (!userId || !token) {
      console.error("Usuário não autenticado");
      return;
    }

    try {
      const response = await axios.post(
        "https://trampolim-api-express.onrender.com/api/v1/projects",
        { ...projectData, userId }, // Inclui o userId no corpo da requisição
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Projeto criado:", response.data);

      // Atualiza a lista de projetos após a criação
      setProjects((prevProjects) => [...prevProjects, response.data.data]);
    } catch (error) {
      console.error("Erro ao criar projeto:", error.response ? error.response.data : error.message);
    }
  };

  if (!userData) {
    return <div>Carregando...</div>;
  }

  return (
    <section className='h-screen'>
      <HeaderPanel />

      <div className='flex items-center justify-center gap-[10%] w-full'>
        <div className='w-[300px] h-[300px] rounded-full shadow-xl flex items-center justify-center'>
          <FaUser className='text-blue text-9xl' />
        </div>

        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2 bg-white w-full p-3 rounded-lg shadow-xl'>
            <div className='flex flex-col items-center justify-center gap-1'>
              <FaUser className='text-blue text-3xl' />
            </div>

            <span className='w-full text-orange font-semibold text-center'>{userData.nomeCompleto}</span>
          </div>

          <div className='flex items-center gap-2 bg-white w-full p-3 rounded-lg shadow-xl'>
            <div className='flex flex-col items-center justify-center gap-1'>
              <FaEnvelope className='text-blue text-3xl' />
            </div>

            <span className='w-full text-orange font-semibold text-center'>{userData.email}</span>
          </div>

          <div className='flex items-center gap-2 bg-white w-full p-3 rounded-lg shadow-xl'>
            <div className='flex flex-col items-center justify-center gap-1'>
              <FaPhone className='text-blue text-3xl' />
            </div>

            <span className='w-full text-orange font-semibold text-center'>{userData.telefone}</span>
          </div>
        </div>
      </div>

      <h2 className='text-4xl text-orange font-bold text-center py-20'>Projeto em que {userData.nomeCompleto} participa</h2>

      <div className='flex items-center justify-center flex-wrap gap-5'>
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectDetailsCard
              key={project._id}
              nomeProjeto={project.nomeProjeto}
              nomeLider={project.nomeLider}
              integrantes={project.integrantes}
              estagioIdeia={project.estagioIdeia}
              edital={project.edital}
              descricaoIdeia={project.descricaoIdeia}
              diferencialInovacao={project.diferencialInovacao}
              modeloNegocio={project.modeloNegocio}
              tecnologiasUtilizadas={project.tecnologiasUtilizadas}
              linkPitch={project.linkPitch}
            />
          ))
        ) : (
          <p className="text-blue text-lg">Nenhum projeto encontrado.</p>
        )}
      </div>

      {/* Botão ou formulário para criar um novo projeto */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => {
            // Exemplo de dados para criar um novo projeto
            const newProjectData = {
              nomeProjeto: "Novo Projeto",
              nomeLider: userData.nomeCompleto,
              integrantes: ["Integrante 1", "Integrante 2"],
              estagioIdeia: "Conceitual (Pesquisa)/Ideação",
              edital: "Edital 2025.1",
              descricaoIdeia: "Descrição do novo projeto",
              diferencialInovacao: "Diferencial do novo projeto",
              modeloNegocio: "Modelo de negócio do novo projeto",
              tecnologiasUtilizadas: "Tecnologias do novo projeto",
              linkPitch: "https://exemplo.com/pitch",
            };

            createProject(newProjectData);
          }}
          className="bg-blue text-white px-6 py-3 rounded-lg hover:bg-orange transition-colors"
        >
          Criar Novo Projeto
        </button>
      </div>

      <Footer />
    </section>
  );
};

export default EnterprisingPanel;