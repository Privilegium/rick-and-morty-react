import MainPage from "../pages/mainPage/MainPage";
import HeroPage from "../pages/heroPage/HeroPage";
import { Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  return (
    <GoogleOAuthProvider clientId="1018246508287-n3mkn6erb9vqqqjfdcnndmp4aup4pna7.apps.googleusercontent.com">
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/hero/:heroId" element={<HeroPage/>} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
