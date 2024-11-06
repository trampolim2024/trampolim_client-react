import LandingPage from "./components/LandingPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appraiser from "./pages/Appraiser";
import AppraiserSignup from "./routes/AppraiserSignup";
import EnterprisingSignup from "./routes/EnterprisingSIgnup";
import Login from "./routes/Login";
import Panel from "./pages/Panel";
import PrivateRoutes from "./utils/PrivateRoutes"

function App() {

  return (
    <Router>
      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/avaliador" element={<Appraiser />} />
        <Route path="/inscricao-avaliador" element={<AppraiserSignup />} />
        <Route path="/inscricao-empreendedor" element={<EnterprisingSignup />} />
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/painel" element={<Panel />} />
        </Route>
        
      </Routes>
    </Router>
  )
}

export default App
