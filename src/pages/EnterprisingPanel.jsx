import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Filter from "../components/FIlter";
import Searchbar from "../components/Searchbar";
import HeaderPanel from "../components/HeaderPanel";
import { useNavigate } from "react-router-dom";

const EnterprisingPanel = () => {
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
    <main className="h-auto">
      <HeaderPanel />
      <section className="flex p-5 gap-3 h-screen justify-center items-center flex-col">
       
          <h2 className="text-blue text-3xl font-semibold p-5">Bem vindo, empreendedor!</h2>


          <div className="background-white rounded-2xl shadow-xl h-[50%] w-[80vw]">

          </div>
       
      </section>
      <Footer />
    </main>
  );
};

export default EnterprisingPanel;
