import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EnterprisingCard from "../components/EnterprisingCard";
import AppraiserCard from "../components/AppraiserCard";
import HeaderPanel from "../components/HeaderPanel";

const AdmPanel = () => {
  const [empreendedores, setEmpreendedores] = useState([]);
  const [avaliadores, setAvaliadores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://trampolim-api-express.onrender.com/api/v1/users/");
        const users = response.data.data;

        const empreendedores = users.filter(user => user.tipo === "empreendedor");
        const avaliadores = users.filter(user => user.tipo === "avaliador");

        setEmpreendedores(empreendedores);
        setAvaliadores(avaliadores);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <main className="h-auto">
      <HeaderPanel />
      <section className="flex flex-col items-center justify-center p-5 gap-3">

        {/* Seção de Empreendedores */}
        <div className="flex flex-col gap-5 items-center justify-center">
          <h1 className='text-5xl text-blue font-semibold py-2'>Empreendedores</h1>
          <div className="flex items-center gap-3">
            {empreendedores.slice(0, 3).map(empreendedor => (
              <EnterprisingCard key={empreendedor._id} user={empreendedor} />
            ))}
            {empreendedores.length === 0 && (
              <p className="text-gray-600">Ainda não há empreendedores cadastrados.</p>
            )}
          </div>
          <button
            className='orange-button'
            onClick={() => navigate("/todos-empreendedores")}
          >
            Ver mais
          </button>
        </div>

        {/* Seção de Avaliadores */}
        <div className="flex flex-col gap-5 items-center justify-center">
          <h1 className='text-5xl text-blue font-semibold py-2'>Avaliadores</h1>
          <div className="flex items-center gap-3">
            {avaliadores.slice(0, 3).map(avaliador => (
              <AppraiserCard key={avaliador._id} user={avaliador} />
            ))}
            {avaliadores.length === 0 && (
              <p className="text-gray-600">Ainda não há avaliadores cadastrados.</p>
            )}
          </div>
          <button
            className='orange-button'
            onClick={() => navigate("/todos-avaliadores")}
          >
            Ver mais
          </button>
        </div>

      </section>
    </main>
  );
};

export default AdmPanel;