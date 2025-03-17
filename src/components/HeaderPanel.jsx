import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HeaderPanel = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState(localStorage.getItem("user.tipo")); // Lê o tipo de usuário com a chave correta

  // Monitora mudanças no localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      setUserType(localStorage.getItem("user.tipo")); // Atualiza o estado com a chave correta
    };

    window.addEventListener("storage", handleStorageChange); // Ouvinte de eventos do localStorage
    return () => {
      window.removeEventListener("storage", handleStorageChange); // Limpa o ouvinte
    };
  }, []);

  console.log("Tipo de usuário no Header:", userType); // Log para depuração

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user.tipo"); // Remove o tipo de usuário com a chave correta
    setUserType(null); // Atualiza o estado para forçar a re-renderização
    navigate("/login");
  };

  return (
    <div className='w-full h-[20vh] p-3 flex items-center justify-around shadow-xl background-white'>
      <Link to="/">
        <img src="logos/trampolim-header.svg" alt="Logo do Programa Trampolim" className='' />
      </Link>

      <div className='flex items-center w-[30%] justify-evenly'>
        {/* Links para Admin */}
        {userType === "admin" && (
          <>
              <Link to="/painel-adm" className='font-semibold text-blue text-xl hover:text-orange transition-all duration-300'>
              Painel
            </Link>
            <Link to="/editais" className='font-semibold text-blue text-xl hover:text-orange transition-all duration-300'>
              Editais
            </Link>
        
            <Link to="/projetos" className='font-semibold text-blue text-xl hover:text-orange transition-all duration-300'>
              Projetos
            </Link>
          </>
        )}

        {/* Links para Avaliador */}
        {userType === "avaliador" && (
          <Link to="/avaliar-projetos" className='font-semibold text-blue text-xl hover:text-orange transition-all duration-300'>
            Avaliar Projetos
          </Link>
        )}

        {/* Links para Empreendedor */}
        {userType === "empreendedor" && (
          <Link to="/enviar-projeto" className='font-semibold text-blue text-xl hover:text-orange transition-all duration-300'>
            Enviar Projeto
          </Link>
        )}

        {/* Botão de Login ou Logout */}
        {userType ? (
          <button
            onClick={handleLogout}
            className='background-orange p-2 px-5 rounded-lg font-semibold text-blue text-lg hover:text-orange hover:background-blue transition-all duration-300'
          >
            Sair
          </button>
        ) : (
          <Link to="/login" className='background-orange p-2 px-5 rounded-lg font-semibold text-blue text-lg hover:text-orange hover:background-blue transition-all duration-300'>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeaderPanel;