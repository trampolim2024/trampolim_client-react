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
      const response = await fetch("http://localhost:3000/usuarios/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          senha: formData.senha,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const { token, tipo } = data;
        localStorage.setItem("token", token); // Armazena o token
        toast.success("Login realizado com sucesso!");

        // Redireciona com base no tipo de usuário
        if (tipo === "empreendedor") {
          navigate("/painel-empreendedor");
        } else if (tipo === "avaliador") {
          navigate("/painel-avaliador");
        }
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Erro ao realizar o login.");
        toast.error(errorData.message || "Erro ao realizar o login.");
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
            <span className="text-blue text-base border-b border-transparent hover:border-orange-600 w-fit duration-300 transition-all cursor-pointer">
              Esqueci minha senha!
            </span>
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
