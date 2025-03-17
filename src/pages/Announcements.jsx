import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaFile, FaFilter, FaSearch } from 'react-icons/fa';
import AnnouncementCard from '../components/AnnouncementCard';
import { Link } from 'react-router-dom';
import HeaderPanel from '../components/HeaderPanel';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]); // Estado para armazenar os editais
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  const [error, setError] = useState(null); // Estado para armazenar erros

  // Função para buscar os editais da API
  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get('https://trampolim-api-express.onrender.com/api/v1/announcements');

      // Verifica se a resposta contém um array de editais
      if (Array.isArray(response.data.data)) {
        setAnnouncements(response.data.data); // Atualiza o estado com os editais recebidos
      } else {
        setError('A resposta da API não contém um array de editais.'); // Define um erro
      }
    } catch (error) {
      console.error('Erro ao buscar editais:', error);
      setError('Erro ao carregar os editais. Tente novamente mais tarde.'); // Define um erro
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  // Executa a função ao carregar o componente
  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const handleDelete = (id) => {
    setAnnouncements(announcements.filter(announcement => announcement._id !== id));
  };

  return (
    <main className='flex flex-col h-screen'>
      <HeaderPanel />



      <section className='flex items-center justify-center flex-wrap gap-3 p-5'>
        {loading ? (
          <div className="text-center">Carregando editais...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : announcements.length === 0 ? (
          <div className="text-center flex items-center justify-center flex-col gap-5">
            <h1 className='text-orange text-4xl font-semibold mt-[40%]'>Nenhum edital foi submetido</h1>
            <Link to="/criar-edital">
              <button className='flex items-center gap-2 background-orange text-white p-3 rounded-lg  transition-colors'>
                <FaFile className='text-white' />
                Criar novo edital
              </button>
            </Link>
          </div>
        ) : (
          announcements.map((announcement) => (
            <AnnouncementCard
              key={announcement._id}
              id={announcement._id}
              titulo={`Edital ${announcement._id}`}
              dataInicioSubmissoes={announcement.dataInicioSubmissoes}
              dataFimSubmissoes={announcement.dataFimSubmissoes}
              inicioAvaliacoes={announcement.inicioAvaliacoes}
              fimAvaliacoes={announcement.fimAvaliacoes}
              arquivoEdital={announcement.arquivoEdital}
              createdAt={announcement.createdAt}
              updatedAt={announcement.updatedAt}
              onDelete={handleDelete}
            />
          ))
        )}
      </section>
    </main>
  );
};

export default Announcements;