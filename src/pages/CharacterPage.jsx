import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCharacterById } from "../services/characterService";
import { CircularProgress, Button } from "@mui/material";

const CharacterPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCharacterById(id)
      .then(setCharacter)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <CircularProgress color="inherit" />
      </div>
    );
  }

  if (!character) return null;

  return (
    <div className="min-h-screen bg-black text-white px-8 py-12">
      
      <h1 className="text-5xl font-bold text-center mb-12">{character.name}</h1>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        <img
          src={character.image}
          alt={character.name}
          className="rounded-xl w-full md:w-1/2"
        />

        <div className="space-y-3 text-lg">
          <p>
            <strong>Status:</strong> {character.status}
          </p>
          <p>
            <strong>Species:</strong> {character.species}
          </p>
          <p>
            <strong>Gender:</strong> {character.gender}
          </p>
          <p>
            <strong>Type:</strong> {character.type || "unknown"}
          </p>
          <p>
            <strong>Origin:</strong> {character.origin.name}
          </p>
          <p>
            <strong>Last location:</strong> {character.location.name}
          </p>
          <p>
            <strong>Episodes:</strong> {character.episode.length}
          </p>
          <p>
            <strong>Created:</strong>{" "}
            {new Date(character.created).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <Button variant="contained" onClick={() => navigate("/")}>
          Discover more characters
        </Button>
      </div>
    </div>
  );
};

export default CharacterPage;
