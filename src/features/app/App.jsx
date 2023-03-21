import MainPage from "../pages/mainPage/MainPage";
import HeroPage from "../pages/heroPage/HeroPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/hero/:heroId" element={<HeroPage/>} />
    </Routes>
  );
}

export default App;
