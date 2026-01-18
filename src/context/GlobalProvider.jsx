import React from "react";
import { FavoritesProvider } from "./providers/FavouritesContext";

// En este provider añadiremos todos los contextos que necesitemos
export const GlobalProvider = ({ children }) => {
  return (
    <FavoritesProvider>
      {children}
    </FavoritesProvider>
  );
};
