import React from 'react';
import { FaFileAlt, FaCalendar, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AnnouncementCard = ({ titulo, dataInicio, dataFim, arquivoEdital }) => {
  // Função para fazer o download do arquivo PDF
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = arquivoEdital; // URL do arquivo PDF
    link.download = `edital-${titulo}.pdf`; // Nome do arquivo para download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='flex items-center justify-center gap-5 bg-white w-fit py-10 px-10 rounded-xl shadow-xl cursor-pointer'>
      <FaFileAlt className='text-orange text-7xl' />

      <div className='flex flex-col gap-2'>
        <h1 className='text-blue text-xl font-bold'>{titulo}</h1>
        <div className='flex items-center gap-3'>
          <FaCalendar className='text-orange text-xl' />
          <span className='text-orange font-bold'>Início</span>
          <span className='text-orange'>{dataInicio}</span>
        </div>

        <div className='flex items-center gap-3'>
          <FaCalendar className='text-orange text-xl' />
          <span className='text-orange font-bold'>Término</span>
          <span className='text-orange'>{dataFim}</span>
        </div>

        {/* Botão de download */}
        <button
          onClick={handleDownload}
          className='flex items-center gap-2 background-orange text-white p-2 rounded-lg mt-3'
        >
          <FaDownload className='text-white' />
          Baixar Edital
        </button>
      </div>
    </div>
  );
};

export default AnnouncementCard;