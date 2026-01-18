import httpClient from "../api/httpClient";

// Obtener lista de personajes
export const getCharacters = async (filters = {}) => {
    const response = await httpClient.get("/character", { params: filters, });
    return response.data;
};

// Obtener personaje por ID
export const getCharacterById = async (id) => {
    const response = await httpClient.get(`/character/${id}`);
    return response.data;
};

// Obtener varios personajes por IDs
export const getCharactersByIds = async (ids = []) => {
    if (!ids.length) return [];
    const response = await httpClient.get(`/character/${ids.join(",")}`);
    return Array.isArray(response.data) ? response.data : [response.data];
};




