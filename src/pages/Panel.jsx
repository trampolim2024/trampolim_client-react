import React from "react";
import Footer from "../components/Footer";
import Filter from "../components/FIlter";
import Searchbar from "../components/Searchbar";
import HeaderPanel from "../components/HeaderPanel";

const Panel = () => {
  return (
    <main className="h-auto">
      <HeaderPanel />
      <section className="flex p-5 gap-3">
        <Filter />
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h1 className="text-orange text-3xl font-semibold text-center my-3">Trilhas e cursos gratuitos</h1>
            <Searchbar />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Panel;
