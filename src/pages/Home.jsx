import React, { useState, useEffect } from "react";
import { getCharacters } from "../services/characterService";
import { Backdrop, CircularProgress } from "@mui/material";
import CharacterPagination from "../components/characterPagination/CharacterPagination";
import NavegationBar from "../components/navegationBar/NavegationBar";
import CharacterCard from "../components/characterCard/CharacterCard";
import { useFavorites } from "../context/providers/FavouritesContext";
const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});
  const [searchName, setSearchName] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const { favorites, selectFavorite } = useFavorites();

  const fetchCharacters = (pageNumber = 1, name = "", gender = "") => {
    setLoading(true);
    getCharacters({ page: pageNumber, name, gender })
      .then((data) => {
        setCharacters(data.results || []);
        setInfo(data.info || {});
      })
      .catch((e) => console.log("Error al cargar personajes", e))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchCharacters(page, searchName, genderFilter);
  }, [page, searchName, genderFilter]);

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden pb-12">
      <NavegationBar
        onSearchChange={(value) => { setPage(1); setSearchName(value); }}
        onGenderChange={(value) => { setPage(1); setGenderFilter(value); }}
      />

      <div className="relative flex flex-col items-center gap-16 mx-4">
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

        <CharacterPagination page={page} setPage={setPage} totalPages={info.pages} />
      </div>

      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Home;
