import React, { useState } from 'react';
import { FaFileAlt, FaCalendar, FaDownload, FaClock, FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import EditAnnouncementModal from './EditAnnouncementModal'; // Componente de edição

const AnnouncementCard = ({
  id,
  titulo,
  dataInicioSubmissoes,
  dataFimSubmissoes,
  inicioAvaliacoes,
  fimAvaliacoes,
  arquivoEdital,
  createdAt,
  updatedAt,
  onDelete, // Função para atualizar a lista após deleção
}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false); // Estado para o modal de deleção
  const [showEditModal, setShowEditModal] = useState(false); // Estado para o modal de edição

  // Função para fazer o download do arquivo PDF
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = arquivoEdital;
    link.download = `edital-${titulo}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Função para deletar o edital
  const handleDelete = async () => {
    try {
      await axios.delete(`https://trampolim-api-express.onrender.com/api/v1/announcements/${id}`);
      onDelete(id); // Atualiza a lista de editais após a deleção
      setShowDeleteModal(false); // Fecha o modal de confirmação
    } catch (error) {
      console.error('Erro ao deletar edital:', error);
      alert('Erro ao deletar edital. Tente novamente.');
    }
  };

  return (
    <div className='bg-white rounded-xl shadow-xl p-8 w-full max-w-4xl mx-auto'>
      {/* Título do Edital */}
      <div className='flex items-center gap-4 mb-6'>
        <FaFileAlt className='text-orange text-4xl' />
        <h1 className='text-blue text-3xl font-bold'>{titulo}</h1>
      </div>

      {/* Período de Submissões */}
      <div className='mb-6'>
        <h2 className='text-blue text-xl font-semibold mb-2'>Período de Submissões</h2>
        <div className='flex items-center gap-3 text-orange'>
          <FaCalendar className='text-xl' />
          <span className='font-bold'>Início:</span>
          <span>{new Date(dataInicioSubmissoes).toLocaleDateString()}</span>
        </div>
        <div className='flex items-center gap-3 text-orange mt-2'>
          <FaCalendar className='text-xl' />
          <span className='font-bold'>Término:</span>
          <span>{new Date(dataFimSubmissoes).toLocaleDateString()}</span>
        </div>
      </div>

      {/* Período de Avaliações */}
      <div className='mb-6'>
        <h2 className='text-blue text-xl font-semibold mb-2'>Período de Avaliações</h2>
        <div className='flex items-center gap-3 text-orange'>
          <FaClock className='text-xl' />
          <span className='font-bold'>Início:</span>
          <span>{new Date(inicioAvaliacoes).toLocaleDateString()}</span>
        </div>
        <div className='flex items-center gap-3 text-orange mt-2'>
          <FaClock className='text-xl' />
          <span className='font-bold'>Término:</span>
          <span>{new Date(fimAvaliacoes).toLocaleDateString()}</span>
        </div>
      </div>

      {/* Datas de Criação e Atualização */}
      <div className='mb-6'>
        <h2 className='text-blue text-xl font-semibold mb-2'>Informações Adicionais</h2>
        <div className='flex items-center gap-3 text-orange'>
          <FaEdit className='text-xl' />
          <span className='font-bold'>Criado em:</span>
          <span>{new Date(createdAt).toLocaleDateString()}</span>
        </div>
        <div className='flex items-center gap-3 text-orange mt-2'>
          <FaEdit className='text-xl' />
          <span className='font-bold'>Atualizado em:</span>
          <span>{new Date(updatedAt).toLocaleDateString()}</span>
        </div>
      </div>

      {/* Botões de Ação */}
      <div className='flex justify-center gap-4 mt-8'>
        <button
          onClick={handleDownload}
          className='flex items-center gap-2 background-orange text-white p-3 rounded-lg hover:bg-orange-600 transition-colors'
        >
          <FaDownload className='text-white' />
          Baixar Edital
        </button>
        <button
          onClick={() => setShowEditModal(true)}
          className='flex items-center gap-2 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors'
        >
          <FaEdit className='text-white' />
          Editar
        </button>
        <button
          onClick={() => setShowDeleteModal(true)}
          className='flex items-center gap-2 bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors'
        >
          <FaTrash className='text-white' />
          Deletar
        </button>

       
      </div>

      {/* Modal de Confirmação de Deleção */}
      {showDeleteModal && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h2 className='text-xl font-bold mb-4'>Tem certeza que deseja deletar este edital?</h2>
            <div className='flex justify-end gap-4'>
              <button
                onClick={() => setShowDeleteModal(false)}
                className='bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors'
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                className='bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors'
              >
                Deletar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Edição */}
      {showEditModal && (
        <EditAnnouncementModal
          id={id}
          initialData={{
            dataInicioSubmissoes,
            dataFimSubmissoes,
            inicioAvaliacoes,
            fimAvaliacoes,
            arquivoEdital,
          }}
          onClose={() => setShowEditModal(false)}
          onUpdate={onDelete} // Atualiza a lista após edição
        />
      )}
    </div>
  );
};

export default AnnouncementCard;