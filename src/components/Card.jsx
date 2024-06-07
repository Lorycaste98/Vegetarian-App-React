import React, { useContext, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FavoriteContext } from '../stores/FavoritesContext';

function Card({ text, image, id }) {
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoriteContext);
  const isFav = isFavorite(id);

  const handleFavoriteClick = () => {
    if (isFav) {
      removeFavorite(id);
    } else {
      addFavorite({ text, image, id });
    }
  };

  return (
    <div className="bg-slate-300 rounded-3xl flex flex-1 overflow-hidden w-full transform transition-transform duration-500 hover:scale-[1.03] group">
      <div className="w-1/2 overflow-hidden">
        <img
          src={image}
          alt={text}
          className="w-full h-full object-cover scale-125 transition-transform duration-500 transform group-hover:scale-[1.3] "
        />
      </div>
      <div className="w-1/2 flex flex-col p-8">
        <div className="flex justify-end items-center mb-4">
          <button onClick={handleFavoriteClick} className="text-red-500 p-1">
            {isFav ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
          </button>
        </div>
        <div className="mb-4">
          <h1 className="text-xl font-bold mb-4 uppercase">{text}</h1>
          <p className="text-gray-600 hidden lg:block">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolorum!
          </p>
        </div>
        <div className="mt-auto">
          <Link key={id} to={`/recipe/${id}`}>
            <button className=" py-2 px-4 border-4 border-[#009800] text-[#009800] rounded-xl font-bold hover:bg-[#009800] hover:text-white transition duration-300">
              Vedi dettagli
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
