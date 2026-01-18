import React, { createContext, useContext, useState } from "react";
const FavoritesContext = createContext();
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const selectFavorite = (characterId) => {
    setFavorites((actualFavorites) => {
      // Si ya está en favoritos se quita
      if (actualFavorites.includes(characterId)) {
        return actualFavorites.filter((id) => id !== characterId);
      }
      // Si no está se añade
      return [...actualFavorites, characterId];
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, selectFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
