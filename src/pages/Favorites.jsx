import React, { useContext } from 'react';
import { FavoriteContext } from '../stores/FavoritesContext';
import Card from '../components/Card';

function Favorites() {
  const { favorites } = useContext(FavoriteContext);

  return (
    <div className="max-w-[1024px] mx-auto px-20 pb-20">
      <h1 className="text-[#ededed] font-bold text-2xl my-10">I tuoi Preferiti</h1>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-10 ">
        {favorites.map((recipe) => (
          <Card key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
