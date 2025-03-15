import LandingPage from "./components/LandingPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appraiser from "./pages/Appraiser";
import AppraiserSignup from "./routes/AppraiserSignup";
import EnterprisingSignup from "./routes/EnterprisingSIgnup";
import Login from "./routes/Login";
import ProtectedRoutes from "../utils/ProtectedRoutes";
import { ToastContainer } from "react-toastify";
import Enterprising from "./pages/Enterprising";
import AppraiserPanel from "./pages/AppraiserPanel";
import EnterprisingPanel from "./pages/EnterprisingPanel";
import AdmPanel from "./pages/AdmPanel";
import CreateAnnouncement from "./pages/CreateAnnouncement";
import Projects from "./pages/Projects";
import Announcements from "./pages/Announcements";
import SendProject from "./pages/SendProject";
import AppraiserProfile from "./pages/AppraiserProfile";
import EnterprisingProfile from "./pages/EnterprisingProfile";
import AnnoucementDetails from "./pages/AnnoucementDetails";
import ProjectDetails from "./pages/ProjectDetails";
import Users from "./pages/Users";
import EvalueteProjects from "./pages/EvalueteProjects";


function App() {

  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>

          <Route path="/" element={<LandingPage />} />
          <Route path="/avaliador" element={<Appraiser />} />
          <Route path="/empreendedor" element={<Enterprising />} />
          <Route path="/inscricao-avaliador" element={<AppraiserSignup />} />
          <Route path="/inscricao-empreendedor" element={<EnterprisingSignup />} />
          <Route path="/criar-edital" element={<CreateAnnouncement />} />
          <Route path="/perfil-avaliador" element={<AppraiserProfile />} />
          <Route path="/perfil-empreendedor" element={<EnterprisingProfile />} />
          <Route path="/detalhes-edital" element={<AnnoucementDetails />} />
          <Route path="/detalhes-projeto" element={<ProjectDetails />} />
          <Route path="/avaliar-projetos" element={<EvalueteProjects />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/usuarios" element={<Users />} />
          <Route path="/editais" element={<Announcements />} />
          <Route path="/enviar-projeto" element={<SendProject />} />
          <Route path="/login" element={<Login />} />
          <Route path="/painel-empreendedor" element={<ProtectedRoutes><EnterprisingPanel /></ProtectedRoutes>} />
          <Route path="/painel-avaliador" element={<ProtectedRoutes><AppraiserPanel /></ProtectedRoutes>} />
          <Route path="/painel-adm" element={<AdmPanel />} />


        </Routes>
      </Router>
    </>

  )
}

export default App
