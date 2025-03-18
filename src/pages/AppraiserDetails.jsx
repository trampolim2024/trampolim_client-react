import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UserDetailsCard from '../components/UserDetailsCard';

const AppraiserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`https://trampolim-api-express.onrender.com/api/v1/users/${id}`);
        setUser(response.data.data);
      } catch (error) {
        console.error('Erro ao buscar detalhes do usuário:', error);
        setError('Erro ao carregar os detalhes do usuário. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Carregando...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  }

  if (!user) {
    return <div className="flex justify-center items-center h-screen">Usuário não encontrado.</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <UserDetailsCard user={user} />
    </div>
  );
};

export default AppraiserDetails;