import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-orange-gradient">
      <div className="h-[90vh] rounded-2xl w-[35vw] bg-white flex flex-col items-center justify-center shadow-2xl">
        <img src="/logos/trampolim-hero.png" alt="Logo do programa trampolim" />

        <h2 className="text-blue font-semibold text-3xl my-5">
          Bem vindo(a)!
        </h2>

        <div className="flex flex-col gap-5">
          <input
            type="text"
            className="p-1 py-2 rounded-lg outline-none border border-gray-300 focus:border-orange-600 duration-200 transition-all"
            placeholder="Email"
          />
          <input
            type="password"
            className="p-1 py-2 rounded-lg outline-none border border-gray-300 focus:border-orange-600 duration-200 transition-all"
            placeholder="Senha"
          />
          <span className="text-blue text-base border-b border-transparent hover:border-orange-600 w-fit duration-300 transition-all cursor-pointer">
            Esqueci minha senha!
          </span>

          <Link to="/home" className="font-bold text-center p-1 py-2 background-orange text-white rounded-lg outline-none border-none text-xl hover:background-blue duration-300 transition-all">
            <button>
              Login
            </button>
          </Link>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Login;
