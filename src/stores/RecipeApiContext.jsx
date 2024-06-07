import React, { createContext, useState } from 'react';
import axios from 'axios';

export const RecipeApiContext = createContext({});

export const RecipeApiProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const baseURL = 'https://api.spoonacular.com/recipes/';

  const fetchRecipes = async (url) => {
    setLoading(true); // Imposta lo stato di caricamento su true prima di effettuare la richiesta
    try {
      const response = await axios.get(url);
      setLoading(false); // Imposta lo stato di caricamento su false dopo aver ricevuto la risposta
      return response.data;
    } catch (err) {
      setError(handleError(err));
      setLoading(false); // Imposta lo stato di caricamento su false in caso di errore
      return null;
    }
  };

  const handleError = (err) => {
    if (err.response) {
      switch (err.response.status) {
        case 401:
          return 'Non sei autorizzato';
        case 402:
          return 'Troppe richieste per oggi. Prova domani';
        default:
          return 'Si è verificato un errore imprevisto';
      }
    } else if (err.request) {
      return 'Nessuna risposta dal server';
    } else {
      return `Errore nell'impostazione della richiesta`;
    }
  };

  const getHomepageRecipes = async (offset = 0) => {
    const url = `${baseURL}complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=vegetarian&number=10&offset=${offset}`;
    return await fetchRecipes(url);
  };

  const searchByIngredient = async (name, offset = 0) => {
    const url = `${baseURL}complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=vegetarian&number=10&query=${name}&offset=${offset}`;
    return await fetchRecipes(url);
  };

  const getRecipeDetails = async (id) => {
    const url = `${baseURL}${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`;
    return await fetchRecipes(url);
  };

  return (
    <RecipeApiContext.Provider
      value={{
        getHomepageRecipes,
        searchByIngredient,
        getRecipeDetails,
        error,
        loading,
      }}
    >
      {children}
    </RecipeApiContext.Provider>
  );
};
