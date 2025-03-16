import React from 'react';
import { FaLightbulb, FaUsers, FaEdit, FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectDetailsCard = ({
  nomeProjeto,
  nomeLider,
  integrantes,
  estagioIdeia,
  edital,
  descricaoIdeia,
  diferencialInovacao,
  modeloNegocio,
  tecnologiasUtilizadas,
  linkPitch,
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
      {/* Título do Projeto */}
      <div className="flex items-center gap-4 mb-6">
        <FaLightbulb className="text-orange text-4xl" />
        <h2 className="text-2xl font-bold text-blue">{nomeProjeto}</h2>
      </div>

      {/* Informações Básicas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center gap-2">
          <FaUsers className="text-blue text-xl" />
          <p className="text-blue font-semibold">Líder: <span className="text-orange font-normal">{nomeLider}</span></p>
        </div>
        <div className="flex items-center gap-2">
          <FaUsers className="text-blue text-xl" />
          <p className="text-blue font-semibold">Integrantes: <span className="text-orange font-normal">{integrantes.join(", ")}</span></p>
        </div>
        <div className="flex items-center gap-2">
          <FaEdit className="text-blue text-xl" />
          <p className="text-blue font-semibold">Estágio: <span className="text-orange font-normal">{estagioIdeia}</span></p>
        </div>
        <div className="flex items-center gap-2">
          <FaEdit className="text-blue text-xl" />
          <p className="text-blue font-semibold">Edital: <span className="text-orange font-normal">{edital}</span></p>
        </div>
      </div>

      {/* Descrição e Diferencial */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-blue mb-2">Descrição da Ideia</h3>
        <p className="text-orange">{descricaoIdeia}</p>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-bold text-blue mb-2">Diferencial e Inovação</h3>
        <p className="text-orange">{diferencialInovacao}</p>
      </div>

      {/* Modelo de Negócio e Tecnologias */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <h3 className="text-xl font-bold text-blue mb-2">Modelo de Negócio</h3>
          <p className="text-orange">{modeloNegocio}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-blue mb-2">Tecnologias Utilizadas</h3>
          <p className="text-orange">{tecnologiasUtilizadas}</p>
        </div>
      </div>

      {/* Link do Pitch */}
      <div className="flex items-center gap-2">
        <FaLink className="text-blue text-xl" />
        <a
          href={linkPitch}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange hover:underline"
        >
          Ver Pitch
        </a>
      </div>
    </div>
  );
};

export default ProjectDetailsCard;