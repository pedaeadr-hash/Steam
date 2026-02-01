import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Index";
import Detalhes from "./pages/Detalhes/Detalhes";
import Scrolltop from "./Scrolltop";

function App () {
  return (
    <HashRouter>
      <Scrolltop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Detalhes/:slug" element={<Detalhes />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
