import React from "react";
import { Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

const CharacterCard = ({ character, favorites, selectFavorite }) => {
  const isFavorite = favorites.includes(character.id);
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate(`/character/${character.id}`)}
      className="relative bg-cover bg-center rounded-xl overflow-hidden cursor-pointer shadow-lg transform hover:scale-105 transition-transform duration-300"
      style={{ height: "450px", backgroundImage: `url(${character.image})` }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-gray-900"></div>

      {/* Información */}
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-lg font-bold">{character.name}</h3>
        <p className="text-sm">
          <strong>Status:</strong> {character.status}
        </p>
        <p className="text-sm">
          <strong>Species:</strong> {character.species}
        </p>
        <p className="text-sm">
          <strong>Origin:</strong> {character.origin.name}
        </p>
      </div>

      {/* Botón favorito */}
      <IconButton
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          color: isFavorite ? "red" : "white",
        }}
        onClick={(e) => {
          e.stopPropagation();
          selectFavorite(character.id);
        }}
      >
        <FavoriteIcon />
      </IconButton>
    </Box>
  );
};

export default CharacterCard;
