import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoutes = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    toast.error("Você precisa estar logado para acessar esta página.");
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoutes;
