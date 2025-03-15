import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.senha) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch("https://trampolim-api-express.onrender.com/api/v1/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          senha: formData.senha,
        }),
      });

      const data = await response.json(); // Lê a resposta como JSON diretamente
      console.log(data); // Log da resposta completa

      if (response.ok) {
        const { token, user } = data.data; // Acessa o token e o usuário corretamente
        localStorage.setItem("token", token); // Armazena o token
        toast.success("Login realizado com sucesso!");

        // Redireciona com base no tipo de usuário
        if (user.tipo === "empreendedor") {
          navigate("/painel-empreendedor");
        } else if (user.tipo === "avaliador") {
          navigate("/painel-avaliador");
        }
      } else {
        setError(data.message || "Erro ao realizar o login.");
        toast.error(data.message || "Erro ao realizar o login.");
      }
    } catch (error) {
      setError("Erro ao conectar com o servidor.");
      toast.error("Erro ao conectar com o servidor.");
      console.error("Erro de conexão:", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="h-screen flex items-center justify-center bg-orange-gradient">
        <div className="h-[90vh] rounded-2xl w-[35vw] bg-white flex flex-col items-center justify-center shadow-2xl">
          <img src="/logos/trampolim-hero.png" alt="Logo do programa trampolim" />
          <h2 className="text-blue font-semibold text-3xl my-5">Bem vindo(a)!</h2>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              name="email"
              className="p-1 py-2 rounded-lg outline-none border border-gray-300 focus:border-orange-600 duration-200 transition-all w-[350px]"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="senha"
              className="p-1 py-2 rounded-lg outline-none border border-gray-300 focus:border-orange-600 duration-200 transition-all w-[350px]"
              placeholder="Senha"
              value={formData.senha}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="font-bold text-center p-1 py-2 background-orange text-white rounded-lg outline-none border-none text-xl hover:background-blue duration-300 transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;