import React, { useEffect, useState } from "react";
import { useFavorites } from "../context/providers/FavouritesContext";
import CharacterCard from "../components/characterCard/CharacterCard";
import { getCharactersByIds } from "../services/characterService";
import { Backdrop, CircularProgress, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const FavoriteCharactersPage = () => {
  const { favorites, selectFavorite } = useFavorites();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    if (!favorites.length) {
      setCharacters([]);
      setLoading(false);
      return;
    }
    getCharactersByIds(favorites)
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, [favorites]);

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden p-12">
      <div className="flex justify-center items-center w-full mb-12 px-6">
        <h1 className="text-5xl font-bold text-center">Favorite Characters</h1>
      </div>

      <div className="relative flex flex-col items-center gap-16">
        <div className="max-w-screen-xl w-full">
          <div className="grid md:grid-cols-4 gap-10">
            {characters.map((c) => (
              <CharacterCard
                key={c.id}
                character={c}
                favorites={favorites}
                selectFavorite={selectFavorite}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-20 gap-15 text-gray-400">
        {!loading && favorites.length === 0 && (
          <p className="text-xl text-center text-gray-400">
            You have no favorite characters yet.
          </p>
        )}
        <Button variant="contained" onClick={() => navigate("/")}>
          Discover Characters
        </Button>
      </div>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default FavoriteCharactersPage;
