import { useState } from "react";
import axios from "axios";

const EnterprisingSignUp = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    grau_escolaridade: "",
    area_atuacao: "",
    genero: "",
    cpf: "",
    telefone: "",
    cep: "",
    estado: "",
    cidade: "",
    bairro: "",
    endereco: "",
    linkedin: "",
    instagram: "",
    facebook: "",
    miniCurriculo: "",
    email: "",
    senha: "",
  });

  // Definindo o tipo do usuário (alterar conforme necessário)
  const userType = "empreendedor"; // Pode ser "empreendedor", "avaliador" ou "admin"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      ...formData,
      tipo: userType, // Define o tipo de usuário direto no código
    };

    try {
      const response = await axios.post(
        "https://trampolim-api-express.onrender.com/api/v1/auth/sign-up",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("Usuário cadastrado com sucesso!");
      console.log(response.data);
    } catch (error) {
      console.error("Erro no cadastro:", error.response?.data || error.message);
      alert("Erro ao cadastrar usuário. Verifique os dados e tente novamente.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Cadastro</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nomeCompleto"
          placeholder="Nome Completo"
          value={formData.nomeCompleto}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="grau_escolaridade"
          placeholder="Grau de Escolaridade"
          value={formData.grau_escolaridade}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="area_atuacao"
          placeholder="Área de Atuação"
          value={formData.area_atuacao}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="genero"
          placeholder="Gênero"
          value={formData.genero}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="cpf"
          placeholder="CPF (somente números)"
          value={formData.cpf}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="telefone"
          placeholder="Telefone (somente números)"
          value={formData.telefone}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="cep"
          placeholder="CEP (somente números)"
          value={formData.cep}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="estado"
          placeholder="Estado"
          value={formData.estado}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="cidade"
          placeholder="Cidade"
          value={formData.cidade}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="bairro"
          placeholder="Bairro"
          value={formData.bairro}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="endereco"
          placeholder="Endereço"
          value={formData.endereco}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="url"
          name="linkedin"
          placeholder="LinkedIn (opcional)"
          value={formData.linkedin}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="url"
          name="instagram"
          placeholder="Instagram (opcional)"
          value={formData.instagram}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="url"
          name="facebook"
          placeholder="Facebook (opcional)"
          value={formData.facebook}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <textarea
          name="miniCurriculo"
          placeholder="Mini Currículo"
          value={formData.miniCurriculo}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        ></textarea>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={formData.senha}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default EnterprisingSignUp;
