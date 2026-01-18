import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { GlobalProvider } from "./context/GlobalProvider";
import "@fontsource/roboto";
import FavoriteCharactersPage from "./pages/FavoriteCharactersPage";
import CharacterPage from "./pages/CharacterPage";
function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<FavoriteCharactersPage />} />
          <Route path="/character/:id" element={<CharacterPage />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
