import React, { useState } from 'react';
import axios from 'axios';
import { FaBook, FaCalendarAlt, FaFileAlt } from 'react-icons/fa';
import HeaderPanel from '../components/HeaderPanel';

const CreateAnnouncement = () => {
  const [formData, setFormData] = useState({
    dataInicioSubmissoes: '',
    dataFimSubmissoes: '',
    inicioAvaliacoes: '',
    fimAvaliacoes: '',
    arquivoEdital: null,
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
    formDataToSend.append('arquivoEdital', formData.arquivoEdital);

    try {
      const response = await axios.post(
        'https://trampolim-api-express.onrender.com/api/v1/announcements',
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 201) {
        alert('Edital criado com sucesso!');
        console.log(response.data);
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      if (error.response) {
        alert(`Erro: ${error.response.data.error}`);
      } else {
        alert('Erro ao conectar com o servidor');
      }
    }
  };

  return (
    <main className="flex flex-col h-screen">
      <HeaderPanel />
      <section className="h-screen p-4 flex flex-col items-center justify-center">
        <div className="w-[800px] mx-auto p-8 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <FaBook className="text-blue text-2xl" />
            <h2 className="text-blue text-2xl font-bold">Criar Novo Edital</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Data para início das submissões */}
            <div className="flex flex-col gap-1">
              <label htmlFor="dataInicioSubmissoes" className="text-blue font-semibold">
                Data para início das submissões
              </label>
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-blue text-xl" />
                <input
                  type="date"
                  id="dataInicioSubmissoes"
                  name="dataInicioSubmissoes"
                  value={formData.dataInicioSubmissoes}
                  onChange={handleChange}
                  className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                  required
                />
              </div>
            </div>

            {/* Data do fim das submissões */}
            <div className="flex flex-col gap-1">
              <label htmlFor="dataFimSubmissoes" className="text-blue font-semibold">
                Data do fim das submissões
              </label>
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-blue text-xl" />
                <input
                  type="date"
                  id="dataFimSubmissoes"
                  name="dataFimSubmissoes"
                  value={formData.dataFimSubmissoes}
                  onChange={handleChange}
                  className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                  required
                />
              </div>
            </div>

            {/* Início das avaliações */}
            <div className="flex flex-col gap-1">
              <label htmlFor="inicioAvaliacoes" className="text-blue font-semibold">
                Início das avaliações
              </label>
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-blue text-xl" />
                <input
                  type="date"
                  id="inicioAvaliacoes"
                  name="inicioAvaliacoes"
                  value={formData.inicioAvaliacoes}
                  onChange={handleChange}
                  className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                  required
                />
              </div>
            </div>

            {/* Fim das avaliações */}
            <div className="flex flex-col gap-1">
              <label htmlFor="fimAvaliacoes" className="text-blue font-semibold">
                Fim das avaliações
              </label>
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-blue text-xl" />
                <input
                  type="date"
                  id="fimAvaliacoes"
                  name="fimAvaliacoes"
                  value={formData.fimAvaliacoes}
                  onChange={handleChange}
                  className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue"
                  required
                />
              </div>
            </div>

            {/* Arquivo do edital */}
            <div className="flex flex-col gap-1">
              <label htmlFor="arquivoEdital" className="text-blue font-semibold">
                Arquivo do edital
              </label>
              <div className="flex items-center gap-2">
                <FaFileAlt className="text-blue text-xl" />
                <div className="relative w-full">
                  <input
                    type="file"
                    id="arquivoEdital"
                    name="arquivoEdital"
                    onChange={handleChange}
                    className="opacity-0 absolute w-full h-full cursor-pointer"
                    required
                  />
                  <div className="w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:border-blue bg-orange-50 hover:bg-orange-100 transition-colors">
                    <span className="text-gray-700">
                      {formData.arquivoEdital ? formData.arquivoEdital.name : 'Selecione um arquivo'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Botão de Submeter */}
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Submeter
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default CreateAnnouncement;