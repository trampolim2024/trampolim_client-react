import React, { useEffect, useState } from "react";
import axios from "axios";
import AppraiserCard from "../components/AppraiserCard";
import Pagination from "../components/Pagination"; // Importe o componente de paginação
import HeaderPanel from "../components/HeaderPanel";

const AllAppraisers = () => {
  const [avaliadores, setAvaliadores] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(12); // Limite de usuários por página

  useEffect(() => {
    const fetchAvaliadores = async () => {
      try {
        const response = await axios.get("https://trampolim-api-express.onrender.com/api/v1/users/");
        const users = response.data.data.filter(user => user.tipo === "avaliador");
        setAvaliadores(users);
      } catch (error) {
        console.error("Erro ao buscar avaliadores:", error);
      }
    };

    fetchAvaliadores();
  }, []);

  // Filtra e ordena os avaliadores
  const filteredAvaliadores = avaliadores
    .filter(avaliador =>
      avaliador.nomeCompleto.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "recent") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else if (sortOrder === "oldest") {
        return new Date(a.createdAt) - new Date(b.createdAt);
      } else {
        return a.nomeCompleto.localeCompare(b.nomeCompleto);
      }
    });

  // Lógica de paginação
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredAvaliadores.slice(indexOfFirstUser, indexOfLastUser);

  // Muda a página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className="min-h-screen bg-gray-50  flex flex-col">
      <HeaderPanel/>
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <h1 className="text-4xl font-bold text-blue mb-8 text-center mt-5">
          Todos os Avaliadores
        </h1>

        {/* Barra de Pesquisa e Filtro */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <input
            type="text"
            placeholder="Pesquisar por nome..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full md:w-1/4 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="recent">Mais recentes</option>
            <option value="oldest">Mais antigos</option>
            <option value="az">A-Z</option>
          </select>
        </div>

        {/* Lista de Avaliadores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentUsers.length > 0 ? (
            currentUsers.map(avaliador => (
              <AppraiserCard key={avaliador._id} user={avaliador} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-600 text-lg">Nenhum avaliador encontrado.</p>
            </div>
          )}
        </div>

        {/* Paginação */}
        {filteredAvaliadores.length > usersPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredAvaliadores.length / usersPerPage)}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </main>
  );
};

export default AllAppraisers;