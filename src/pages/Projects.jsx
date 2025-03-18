import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaFile, FaFilter, FaSearch } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import HeaderPanel from '../components/HeaderPanel';
import Pagination from '../components/Pagination';

const Projects = () => {
  const [projects, setProjects] = useState([]); // Estado para armazenar todos os projetos
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  const [error, setError] = useState(null); // Estado para armazenar erros
  const [searchTerm, setSearchTerm] = useState(''); // Estado para a barra de pesquisa
  const [sortOrder, setSortOrder] = useState('recente'); // Estado para o filtro de ordenação
  const [currentPage, setCurrentPage] = useState(1); // Estado para a página atual
  const [projectsPerPage] = useState(12); // Limite de projetos por página

  // Função para buscar os projetos da API
  const fetchProjects = async () => {
    try {
      const response = await axios.get('https://trampolim-api-express.onrender.com/api/v1/projects');

      // Verifica se a resposta contém um array de projetos
      if (Array.isArray(response.data.data)) {
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

  // Filtra e ordena os projetos
  const filteredProjects = projects
    .filter((project) =>
      project.nomeProjeto.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'recente') {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else if (sortOrder === 'antigo') {
        return new Date(a.createdAt) - new Date(b.createdAt);
      } else {
        return a.nomeProjeto.localeCompare(b.nomeProjeto);
      }
    });

  // Lógica de paginação
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Muda a página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className="flex flex-col h-screen">
      <HeaderPanel />

      <div className="flex items-center gap-5 justify-center w-full py-10">
        {/* Barra de Pesquisa */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Pesquisar por um projeto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[600px] p-2 rounded-xl outline-none border border-transparent focus:border-orange-500 transition-all duration-300"
          />
          <button className="background-orange w-[40px] h-[40px] rounded-lg flex items-center justify-center">
            <FaSearch className="text-blue text-xl" />
          </button>
        </div>

        {/* Filtro de Ordenação */}
        <div className="relative">
          <FaFilter className="absolute top-1/2 left-3 transform -translate-y-1/2 text-orange" />
          <select
            name="type"
            id="type"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="p-2 pl-10 rounded-xl outline-none border border-transparent focus:border-orange-500 transition-all duration-300"
          >
            <option value="recente">Mais Recentes</option>
            <option value="antigo">Mais Antigos</option>
            <option value="maior">A-Z</option>
          </select>
        </div>
      </div>

      {/* Lista de Projetos */}
      <div className="flex flex-col gap-5 items-center justify-center">
        <h1 className="text-5xl text-blue font-semibold py-2">Projetos</h1>

        {/* Condicionais para renderização dos cards */}
        {loading ? (
          <div className="flex justify-center items-center h-[50vh]">Carregando projetos...</div>
        ) : error ? (
          <div className="flex justify-center items-center h-[50vh] text-red-500">{error}</div>
        ) : filteredProjects.length === 0 ? (
          <div className="flex justify-center items-center h-[50vh]">Nenhum projeto encontrado.</div>
        ) : (
          <>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              {currentProjects.map((project) => (
                <ProjectCard
                  key={project._id}
                  id={project._id}
                  nomeProjeto={project.nomeProjeto}
                  nomeLider={project.nomeLider}
                  estagioIdeia={project.estagioIdeia}
                />
              ))}
            </div>

            {/* Paginação */}
            {filteredProjects.length > projectsPerPage && (
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(filteredProjects.length / projectsPerPage)}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default Projects;