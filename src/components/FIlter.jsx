import React from "react";

const Filter = () => {
  return (
    <aside className="h-[80vh] w-[20vw] flex flex-col background-white rounded-xl shadow-2xl p-3">

      <div className="flex flex-col my-5">
        <h1 className="text-blue uppercase font-semibold text-2xl">Filtros de pesquisa</h1>
        <span className="text-[#2F2F2F] text-base">Selecione as opções abaixo para aplicar o filtro</span>
      </div>

      <div className="flex flex-col gap-3 my-5">
        <h1 className="text-blue uppercase font-semibold text-2xl">Carga horária da trilha</h1>
        <div className="flex items-center gap-3">
          <button className="p-1 px-2 rounded-xl border border-[#F79B4B] outline-none text-orange">Até 2 horas</button>
          <button className="p-1 px-2 rounded-xl border border-[#F79B4B]  outline-none text-orange">De 2 a 4 horas</button>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-1 px-2 rounded-xl border border-[#F79B4B]  outline-none text-orange">De 4 a 8 horas</button>
          <button className="p-1 px-2 rounded-xl border border-[#F79B4B]  outline-none text-orange">Mais de 8 horas</button>
        </div>
      </div>

      <div className="flex flex-col gap-3 my-5">
        <h1 className="text-blue uppercase font-semibold text-2xl">Nível de maturidade</h1>
        <div className="flex items-center gap-3">
          <button className="p-1 px-2 rounded-xl border border-[#F79B4B] outline-none text-orange">Ideação</button>
          <button className="p-1 px-2 rounded-xl border border-[#F79B4B]  outline-none text-orange">Validação</button>
          <button className="p-1 px-2 rounded-xl border border-[#F79B4B]  outline-none text-orange">Operação</button>

        </div>

        <div className="flex items-center gap-3">
          <button className="p-1 px-2 rounded-xl border border-[#F79B4B]  outline-none text-orange">Tração</button>
          <button className="p-1 px-2 rounded-xl border border-[#F79B4B]  outline-none text-orange">Escalonamento</button>
        </div>
      </div>

      <div className="flex flex-col gap-3 my-5">
        <h1 className="text-blue uppercase font-semibold text-2xl">Público-alvo</h1>
        <div className="flex items-center gap-3">
          <button className="p-1 px-2 rounded-xl border border-[#F79B4B] outline-none text-orange">Empreendedores</button>
          <button className="p-1 px-2 rounded-xl border border-[#F79B4B]  outline-none text-orange">Mentores</button>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-1 px-2 rounded-xl border border-[#F79B4B]  outline-none text-orange">Avaliadores</button>
          <button className="p-1 px-2 rounded-xl border border-[#F79B4B]  outline-none text-orange">Comunidade</button>
        </div>
      </div>

    </aside>
  );
};

export default Filter;
