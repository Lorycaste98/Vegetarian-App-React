import React, { createContext, useEffect, useState } from 'react';

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  const addFavorite = (recipe) => {
    const updatedFavorites = [...favorites, recipe];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((recipe) => recipe.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const isFavorite = (id) => {
    return favorites.some((recipe) => recipe.id === id);
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
