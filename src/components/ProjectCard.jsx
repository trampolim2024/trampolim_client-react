import React from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectCard = ({ nomeProjeto, nomeLider, estagioIdeia }) => {
  return (
    <Link to="/detalhes-projeto" className="w-full max-w-sm mx-auto"> {/* Limita a largura máxima e centraliza */}
      <div className='flex flex-col md:flex-row items-center gap-5 bg-white rounded-lg shadow-xl p-5 hover:shadow-2xl transition-shadow duration-300'>
        {/* Ícone */}
        <div className="flex-shrink-0">
          <FaLightbulb className='text-orange text-6xl md:text-8xl' /> {/* Tamanho ajustável */}
        </div>

        {/* Informações do projeto */}
        <div className='flex flex-col gap-2 text-center md:text-left'>
          <p className='text-blue font-semibold'>
            Nome do projeto: <span className='text-orange font-normal block md:inline'>{nomeProjeto}</span>
          </p>
          <p className='text-blue font-semibold'>
            Líder do projeto: <span className='text-orange font-normal block md:inline'>{nomeLider}</span>
          </p>
          <p className='text-blue font-semibold'>
            Estágio: <span className='text-orange font-normal block md:inline'>{estagioIdeia}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;