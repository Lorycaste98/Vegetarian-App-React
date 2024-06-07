import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { RecipeApiProvider } from './stores/RecipeApiContext';
import { FavoriteProvider } from './stores/FavoritesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecipeApiProvider>
      <FavoriteProvider>
        <App />
      </FavoriteProvider>
    </RecipeApiProvider>
  </React.StrictMode>
);
