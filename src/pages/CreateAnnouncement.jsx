import React, { useState } from 'react';
import axios from 'axios'; // Importando o axios
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
      setFormData({ ...formData, [name]: files[0] }); // Armazena o arquivo selecionado
    } else {
      setFormData({ ...formData, [name]: value }); // Atualiza os outros campos
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Cria um objeto FormData para enviar os dados
    const formDataToSend = new FormData();
    formDataToSend.append('dataInicioSubmissoes', formData.dataInicioSubmissoes);
    formDataToSend.append('dataFimSubmissoes', formData.dataFimSubmissoes);
    formDataToSend.append('inicioAvaliacoes', formData.inicioAvaliacoes);
    formDataToSend.append('fimAvaliacoes', formData.fimAvaliacoes);
    formDataToSend.append('arquivoEdital', formData.arquivoEdital);

    try {
      // Faz a requisição POST usando axios
      const response = await axios.post(
        'https://trampolim-api-express.onrender.com/api/v1/announcements',
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Define o tipo de conteúdo como multipart/form-data
          },
        }
      );

      // Se a requisição for bem-sucedida
      if (response.status === 201) {
        alert('Edital criado com sucesso!');
        console.log(response.data); // Exibe os dados retornados pela API
      }
    } catch (error) {
      // Se ocorrer um erro
      console.error('Erro ao enviar o formulário:', error);
      if (error.response) {
        // Se a API retornar um erro
        alert(`Erro: ${error.response.data.error}`);
      } else {
        alert('Erro ao conectar com o servidor');
      }
    }
  };

  return (
    <main className='flex flex-col h-screen'>
      <HeaderPanel />
      <section className='h-screen p-4 flex flex-col items-center justify-center'>
        <form className='flex flex-col items-center gap-10 w-full' onSubmit={handleSubmit}>
          <div className='flex items-center gap-3 py-10'>
            <FaBook className='text-orange' size={40} />
            <h2 className='text-orange text-4xl uppercase'>Criar novo edital</h2>
          </div>

          <div className='flex items-center flex-col justify-center gap-10 w-[80vw]'>
            <label htmlFor="dataInicioSubmissoes">
              Data para início das submissões:
              <div className='relative'>
                <FaCalendarAlt className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                <input
                  type="date"
                  id="dataInicioSubmissoes"
                  className='mt-2 pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent w-[30vw]'
                  name="dataInicioSubmissoes"
                  value={formData.dataInicioSubmissoes}
                  onChange={handleChange}
                  required
                />
              </div>
            </label>

            <label htmlFor="dataFimSubmissoes">
              Data do fim das submissões:
              <div className='relative'>
                <FaCalendarAlt className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                <input
                  type="date"
                  id="dataFimSubmissoes"
                  className='mt-2 pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent w-[30vw]'
                  name="dataFimSubmissoes"
                  value={formData.dataFimSubmissoes}
                  onChange={handleChange}
                  required
                />
              </div>
            </label>

            <label htmlFor="inicioAvaliacoes">
              Início das avaliações:
              <div className='relative'>
                <FaCalendarAlt className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                <input
                  type="date"
                  id="inicioAvaliacoes"
                  className='mt-2 pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent w-[30vw]'
                  name="inicioAvaliacoes"
                  value={formData.inicioAvaliacoes}
                  onChange={handleChange}
                  required
                />
              </div>
            </label>

            <label htmlFor="fimAvaliacoes">
              Fim das avaliações:
              <div className='relative'>
                <FaCalendarAlt className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                <input
                  type="date"
                  id="fimAvaliacoes"
                  className='mt-2 pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent w-[30vw]'
                  name="fimAvaliacoes"
                  value={formData.fimAvaliacoes}
                  onChange={handleChange}
                  required
                />
              </div>
            </label>

            <label htmlFor="arquivoEdital">
              Arquivo do edital:
              <div className='relative'>
                <FaFileAlt className='absolute left-2 top-1/2 transform -translate-y-1/2 text-orange' />
                <input
                  type="file"
                  id="arquivoEdital"
                  className='mt-2 pl-8 p-3 rounded-xl outline-none border-2 border-orange-400 shadow-md bg-transparent w-[30vw]'
                  name="arquivoEdital"
                  onChange={handleChange}
                  required
                />
              </div>
            </label>
          </div>

          <button type="submit" className='p-3 outline-none background-orange rounded-xl border-none text-white w-[30vw] font-semibold'>
            Submeter
          </button>
        </form>
      </section>
    </main>
  );
};

export default CreateAnnouncement;