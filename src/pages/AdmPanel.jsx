import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Filter from "../components/FIlter";
import Searchbar from "../components/Searchbar";
import { useNavigate } from "react-router-dom";
import HeaderAdmPanel from "../components/HeaderAdmPanel";
import EnterprisingCard from "../components/EnterprisingCard";
import AppraiserCard from "../components/AppraiserCard";
import AnnouncementCard from "../components/AnnouncementCard";

const AdmPanel = () => {
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
      <HeaderAdmPanel />
      <section className="flex flex-col items-center justify-center p-5 gap-3">

        <div className="flex flex-col gap-5 items-center justify-center">
          <h1 className='text-5xl text-blue font-semibold py-2'>Empreendedores</h1>
          <div className="flex items-center gap-3">
            <EnterprisingCard />
            <EnterprisingCard />
            <EnterprisingCard />
          </div>
          <button className='orange-button'>Ver mais</button>
        </div>

        <div className="flex flex-col gap-5 items-center justify-center">
          <h1 className='text-5xl text-blue font-semibold py-2'>Avaliadores</h1>
          <div className="flex items-center gap-3">
            <AppraiserCard />
            <AppraiserCard />
            <AppraiserCard />
          </div>
          <button className='orange-button'>Ver mais</button>
        </div>

        {/* <div className="flex flex-col gap-5 items-center justify-center">
          <h1 className='text-5xl text-blue font-semibold py-2'>Todos os editais</h1>
          <div className="flex items-center gap-3">
            <AnnouncementCard />
            <AnnouncementCard />
            <AnnouncementCard />
          </div>
          <button className='orange-button'>Ver mais</button>
        </div> */}

      </section>

    </main>
  );
};

export default AdmPanel;
