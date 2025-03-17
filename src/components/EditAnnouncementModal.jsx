import React, { useState } from 'react';
import axios from 'axios';
import { FaCalendarAlt, FaFileAlt } from 'react-icons/fa';

const EditAnnouncementModal = ({ id, initialData, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    dataInicioSubmissoes: initialData.dataInicioSubmissoes,
    dataFimSubmissoes: initialData.dataFimSubmissoes,
    inicioAvaliacoes: initialData.inicioAvaliacoes,
    fimAvaliacoes: initialData.fimAvaliacoes,
    arquivoEdital: null, // Inicialmente null, pois o arquivo é opcional na edição
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'arquivoEdital') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('dataInicioSubmissoes', formData.dataInicioSubmissoes);
    formDataToSend.append('dataFimSubmissoes', formData.dataFimSubmissoes);
    formDataToSend.append('inicioAvaliacoes', formData.inicioAvaliacoes);
    formDataToSend.append('fimAvaliacoes', formData.fimAvaliacoes);
    if (formData.arquivoEdital) {
      formDataToSend.append('arquivoEdital', formData.arquivoEdital);
    }

    try {
      const response = await axios.put(
        `https://trampolim-api-express.onrender.com/api/v1/announcements/${id}`,
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 200) {
        alert('Edital atualizado com sucesso!');
        onUpdate(); // Atualiza a lista de editais
        onClose(); // Fecha o modal
      }
    } catch (error) {
      console.error('Erro ao atualizar edital:', error);
      alert('Erro ao atualizar edital. Tente novamente.');
    }
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl'>
        <h2 className='text-2xl font-bold mb-6'>Editar Edital</h2>
        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Data para início das submissões */}
          <div className='flex flex-col gap-1'>
            <label htmlFor='dataInicioSubmissoes' className='text-blue font-semibold'>
              Data para início das submissões
            </label>
            <div className='flex items-center gap-2'>
              <FaCalendarAlt className='text-blue text-xl' />
              <input
                type='date'
                id='dataInicioSubmissoes'
                name='dataInicioSubmissoes'
                value={formData.dataInicioSubmissoes}
                onChange={handleChange}
                className='w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue'
                required
              />
            </div>
          </div>

          {/* Data do fim das submissões */}
          <div className='flex flex-col gap-1'>
            <label htmlFor='dataFimSubmissoes' className='text-blue font-semibold'>
              Data do fim das submissões
            </label>
            <div className='flex items-center gap-2'>
              <FaCalendarAlt className='text-blue text-xl' />
              <input
                type='date'
                id='dataFimSubmissoes'
                name='dataFimSubmissoes'
                value={formData.dataFimSubmissoes}
                onChange={handleChange}
                className='w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue'
                required
              />
            </div>
          </div>

          {/* Início das avaliações */}
          <div className='flex flex-col gap-1'>
            <label htmlFor='inicioAvaliacoes' className='text-blue font-semibold'>
              Início das avaliações
            </label>
            <div className='flex items-center gap-2'>
              <FaCalendarAlt className='text-blue text-xl' />
              <input
                type='date'
                id='inicioAvaliacoes'
                name='inicioAvaliacoes'
                value={formData.inicioAvaliacoes}
                onChange={handleChange}
                className='w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue'
                required
              />
            </div>
          </div>

          {/* Fim das avaliações */}
          <div className='flex flex-col gap-1'>
            <label htmlFor='fimAvaliacoes' className='text-blue font-semibold'>
              Fim das avaliações
            </label>
            <div className='flex items-center gap-2'>
              <FaCalendarAlt className='text-blue text-xl' />
              <input
                type='date'
                id='fimAvaliacoes'
                name='fimAvaliacoes'
                value={formData.fimAvaliacoes}
                onChange={handleChange}
                className='w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue'
                required
              />
            </div>
          </div>

          {/* Arquivo do edital */}
          <div className='flex flex-col gap-1'>
            <label htmlFor='arquivoEdital' className='text-blue font-semibold'>
              Arquivo do edital (opcional)
            </label>
            <div className='flex items-center gap-2'>
              <FaFileAlt className='text-blue text-xl' />
              <div className='relative w-full'>
                <input
                  type='file'
                  id='arquivoEdital'
                  name='arquivoEdital'
                  onChange={handleChange}
                  className='opacity-0 absolute w-full h-full cursor-pointer'
                />
                <div className='w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue bg-orange-50 hover:bg-orange-100 transition-colors'>
                  <span className='text-gray-700'>
                    {formData.arquivoEdital ? formData.arquivoEdital.name : 'Selecione um arquivo'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className='flex justify-end gap-4'>
            <button
              type='button'
              onClick={onClose}
              className='bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors'
            >
              Cancelar
            </button>
            <button
              type='submit'
              className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors'
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAnnouncementModal;