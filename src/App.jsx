import LandingPage from "./components/LandingPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appraiser from "./pages/Appraiser";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/avaliador" element={<Appraiser/>}/>
      </Routes>
    </Router>
  )
}

export default App

{/* <>
<LandingPage />
</> */}
