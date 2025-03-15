import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaFile, FaFilter, FaSearch } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import HeaderPanel from '../components/HeaderPanel';

const Projects = () => {
  const [projects, setProjects] = useState([]); // Estado para armazenar os projetos
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  const [error, setError] = useState(null); // Estado para armazenar erros

  // Função para buscar os projetos da API
  const fetchProjects = async () => {
    try {
      const response = await axios.get('https://trampolim-api-express.onrender.com/api/v1/projects');
      
      // Verifica se a resposta contém um array de projetos
      if (Array.isArray(response.data.data)) { // Acessa response.data.data
        setProjects(response.data.data); // Atualiza o estado com os projetos recebidos
      } else {
        setError('A resposta da API não contém um array de projetos.'); // Define um erro
      }
    } catch (error) {
      console.error('Erro ao buscar projetos:', error);
      setError('Erro ao carregar os projetos. Tente novamente mais tarde.'); // Define um erro
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  // Executa a função ao carregar o componente
  useEffect(() => {
    fetchProjects();
  }, []);

  // Exibe uma mensagem de carregamento
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Carregando projetos...</div>;
  }

  // Exibe uma mensagem de erro
  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  }

  // Exibe uma mensagem se não houver projetos
  if (projects.length === 0) {
    return <div className="flex justify-center items-center h-screen">Nenhum projeto encontrado.</div>;
  }

  return (
    <main className='flex flex-col h-screen'>
      <HeaderPanel />

      <div className='flex items-center gap-5 justify-center w-full py-10'>
        <div className='flex items-center gap-2'>
          <input
            type="text"
            placeholder='Pesquisar por um projeto'
            className='w-[600px] p-2 rounded-xl outline-none border border-transparent focus:border-orange-500 transition-all duration-300'
          />
          <button className='background-orange w-[40px] h-[40px] rounded-lg flex items-center justify-center'>
            <FaSearch className='text-blue text-xl' />
          </button>
        </div>

        <div className='relative'>
          <FaFilter className='absolute top-1/2 left-3 transform -translate-y-1/2 text-orange' />
          <select
            name="type"
            id="type"
            className='p-2 pl-10 rounded-xl outline-none border border-transparent focus:border-orange-500 transition-all duration-300'
          >
            <option defaultChecked disabled>Filtros</option>
            <option value="recente">Mais Recentes</option>
            <option value="antigo">Mais Antigos</option>
            <option value="maior">A-Z</option>
          </select>
        </div>

        <div className='relative'>
          <FaFile className='absolute top-1/2 left-3 transform -translate-y-1/2 text-orange' />
          <select
            name="type"
            id="type"
            className='p-2 pl-10 rounded-xl outline-none border border-transparent focus:border-orange-500 transition-all duration-300'
          >
            <option defaultChecked disabled>Selecionar Edital</option>
            <option value="">Edital 2025.1</option>
            <option value="">Edital 2025.2</option>
            <option value="">Edital 2025.3</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-5 items-center justify-center">
        <h1 className='text-5xl text-blue font-semibold py-2'>Projetos</h1>
        <div className="flex items-center gap-3 flex-wrap justify-center">
          {projects.map((project) => (
            <ProjectCard
              key={project._id} // Usando o ID do projeto como chave única
              nomeProjeto={project.nomeProjeto}
              nomeLider={project.nomeLider}
              estagioIdeia={project.estagioIdeia}
            />
          ))}
        </div>
        <button className='orange-button'>Ver mais</button>
      </div>
    </main>
  );
};

export default Projects;