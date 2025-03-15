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

  // Exibe uma mensagem de carregamento
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Carregando editais...</div>;
  }

  // Exibe uma mensagem de erro
  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  }

  // Exibe uma mensagem se não houver editais
  if (announcements.length === 0) {
    return <div className="flex justify-center items-center h-screen">Nenhum edital encontrado.</div>;
  }

  return (
    <main className='flex flex-col h-screen'>
      <HeaderPanel />

      <div className='flex items-center gap-5 justify-center w-full py-10'>
        <div className='flex items-center gap-2'>
          <input
            type="text"
            placeholder='Pesquisar por um edital'
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

        <Link to="/criar-edital">
          <button className='background-orange w-[200px] h-[40px] rounded-lg flex items-center justify-center gap-3 text-white'>
            <FaFile className='text-white' />
            Criar novo edital
          </button>
        </Link>
      </div>

      <section className='flex items-center justify-center flex-wrap gap-3 p-5'>
        {announcements.map((announcement) => (
          <AnnouncementCard
            key={announcement._id}
            titulo={`Edital ${announcement._id}`} // Você pode ajustar o título conforme necessário
            dataInicio={new Date(announcement.dataInicioSubmissoes).toLocaleDateString()}
            dataFim={new Date(announcement.dataFimSubmissoes).toLocaleDateString()}
            arquivoEdital={announcement.arquivoEdital}
          />
        ))}
      </section>
    </main>
  );
};

export default Announcements;