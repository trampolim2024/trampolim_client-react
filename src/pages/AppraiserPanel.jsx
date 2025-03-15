import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Filter from "../components/FIlter";
import Searchbar from "../components/Searchbar";
import HeaderPanel from "../components/HeaderPanel";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";

const AppraiserPanel = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const checkAuthentication = async () => {
  //     try {
  //       const token = localStorage.getItem("token");

  //       if (!token) {
  //         console.log("Token não encontrado. Redirecionando para login.");
  //         navigate("/login");
  //         return;
  //       }

  //       const response = await fetch("http://localhost:3000/usuarios/painel", {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       if (response.ok) {
  //         console.log("Autenticação bem-sucedida. Usuário autorizado a acessar o painel.");
  //       } else if (response.status === 401 || response.status === 403) {
  //         console.log("Token inválido ou expirado. Redirecionando para login.");
  //         navigate("/login");
  //       } else {
  //         console.log("Erro desconhecido:", response.statusText);
  //       }
  //     } catch (error) {
  //       console.error("Erro na autenticação:", error);
  //       navigate("/login");
  //     }
  //   };

  //   checkAuthentication();
  // }, [navigate]);

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

          <span className='w-full text-orange font-semibold text-center'>Lucas Cordeiro</span>
        </div>

        <div className='flex items-center gap-2 bg-white w-full p-3 rounded-lg shadow-xl'>
          <div className='flex flex-col items-center justify-center gap-1'>
            <FaEnvelope className='text-blue text-3xl' />
          </div>

          <span className='w-full text-orange font-semibold text-center'>lucascordeiro@gmail.com</span>
        </div>

        <div className='flex items-center gap-2 bg-white w-full p-3 rounded-lg shadow-xl'>
          <div className='flex flex-col items-center justify-center gap-1'>
            <FaPhone className='text-blue text-3xl' />
          </div>

          <span className='w-full text-orange font-semibold text-center'>87 98113-2735</span>
        </div>
      </div>
    </div>

    <h2 className='text-4xl text-orange font-bold text-center py-20'>Avaliando os seguintes projetos</h2>

    <div className='flex items-center justify-center flex-wrap gap-3'>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>


  </section>
  );
};

export default AppraiserPanel;
