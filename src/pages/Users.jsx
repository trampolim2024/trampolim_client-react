import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeaderPanel from '../components/HeaderPanel';
import { FaFilter, FaSearch } from 'react-icons/fa';
import UserCard from '../components/UserCard';

const Users = () => {
  const [users, setUsers] = useState([]); // Estado para armazenar os usuários
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  const [error, setError] = useState(null); // Estado para armazenar erros

  // Função para buscar os usuários da API
  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://trampolim-api-express.onrender.com/api/v1/users');
      
      // Verifica se a resposta contém um array de usuários
      if (Array.isArray(response.data.data)) {
        // Filtra os usuários para excluir o tipo "admin"
        const filteredUsers = response.data.data.filter(user => user.tipo !== 'admin');
        setUsers(filteredUsers); // Atualiza o estado com os usuários filtrados
      } else {
        setError('A resposta da API não contém um array de usuários.'); // Define um erro
      }
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      setError('Erro ao carregar os usuários. Tente novamente mais tarde.'); // Define um erro
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  // Executa a função ao carregar o componente
  useEffect(() => {
    fetchUsers();
  }, []);

  // Exibe uma mensagem de carregamento
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Carregando usuários...</div>;
  }

  // Exibe uma mensagem de erro
  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  }

  // Exibe uma mensagem se não houver usuários
  if (users.length === 0) {
    return <div className="flex justify-center items-center h-screen">Nenhum usuário encontrado.</div>;
  }

  return (
    <main className='flex flex-col h-screen'>
      <HeaderPanel />

      <div className='flex items-center gap-5 justify-center w-full py-10'>
        <div className='flex items-center gap-2'>
          <input
            type="text"
            placeholder='Pesquisar por um usuário'
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
      </div>

      <div className="flex flex-col gap-5 items-center justify-center">
        <h1 className='text-5xl text-blue font-semibold py-2'>Usuários</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
          {users.map((user) => (
            <UserCard
              key={user._id}
              nomeCompleto={user.nomeCompleto}
              email={user.email}
              tipo={user.tipo}
              area_atuacao={user.area_atuacao}
            />
          ))}
        </div>
        <button className='orange-button'>Ver mais</button>
      </div>
    </main>
  );
};

export default Users;