import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import QuemSomos from "./pages/QuemSomos/QuemSomos";
import FaleConosco from "./pages/FaleConosco/FaleConosco";
import AnaliseDados from "./pages/Home/AnaliseDados/AnaliseDados";
import IntroSQL from "./pages/Home/IntroSQL/IntroSQL";
import PowerBI from "./pages/Home/PowerBI/PowerBI";
import Python from "./pages/Home/Python/Python";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QuemSomos" element={<QuemSomos />} />
        <Route path="/FaleConosco" element={<FaleConosco />} />
        <Route path="/AnaliseDados/" element={<AnaliseDados />} />
        <Route path="/IntroducaoAoPythonParaProgramacao/" element={<Python />} /> 
        <Route path="/IntroducaoAoPowerBI/" element={<PowerBI />} />
        <Route path="/IntroducaoASQLParaGerenciamento/" element={<IntroSQL />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
