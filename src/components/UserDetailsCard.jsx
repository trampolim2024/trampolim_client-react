import React from 'react';
import { FaUser, FaGraduationCap, FaBriefcase, FaTransgender, FaIdCard, FaPhone, FaMapMarker, FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const UserDetailsCard = ({ user }) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
      {/* Título */}
      <div className="flex items-center gap-4 mb-6">
        <FaUser className="text-orange text-4xl" />
        <h2 className="text-2xl font-bold text-blue">{user.nomeCompleto}</h2>
      </div>

      {/* Informações Básicas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center gap-2">
          <FaGraduationCap className="text-blue text-xl" />
          <p className="text-blue font-semibold">Escolaridade: <span className="text-orange font-normal">{user.grau_escolaridade}</span></p>
        </div>
        <div className="flex items-center gap-2">
          <FaBriefcase className="text-blue text-xl" />
          <p className="text-blue font-semibold">Área de Atuação: <span className="text-orange font-normal">{user.area_atuacao}</span></p>
        </div>
        <div className="flex items-center gap-2">
          <FaTransgender className="text-blue text-xl" />
          <p className="text-blue font-semibold">Gênero: <span className="text-orange font-normal">{user.genero}</span></p>
        </div>
        <div className="flex items-center gap-2">
          <FaIdCard className="text-blue text-xl" />
          <p className="text-blue font-semibold">CPF: <span className="text-orange font-normal">{user.cpf}</span></p>
        </div>
        <div className="flex items-center gap-2">
          <FaPhone className="text-blue text-xl" />
          <p className="text-blue font-semibold">Telefone: <span className="text-orange font-normal">{user.telefone}</span></p>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarker className="text-blue text-xl" />
          <p className="text-blue font-semibold">Endereço: <span className="text-orange font-normal">{user.endereco}, {user.bairro}, {user.cidade} - {user.estado}</span></p>
        </div>
      </div>

      {/* Redes Sociais */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-blue mb-2">Redes Sociais</h3>
        <div className="flex items-center gap-4">
          <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">
            <FaLinkedin className="text-blue text-2xl" />
          </a>
          <a href={user.instagram} target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">
            <FaInstagram className="text-blue text-2xl" />
          </a>
          <a href={user.facebook} target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">
            <FaFacebook className="text-blue text-2xl" />
          </a>
        </div>
      </div>

      {/* Mini Currículo */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-blue mb-2">Mini Currículo</h3>
        <p className="text-orange">{user.miniCurriculo}</p>
      </div>

      {/* Email */}
      <div className="flex items-center gap-2">
        <FaEnvelope className="text-blue text-xl" />
        <p className="text-blue font-semibold">Email: <span className="text-orange font-normal">{user.email}</span></p>
      </div>
    </div>
  );
};

export default UserDetailsCard;