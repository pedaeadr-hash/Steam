import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Index";
import Detalhes from "./pages/Detalhes/Detalhes";

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path="/Detalhes/:slug" element={<Detalhes/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

