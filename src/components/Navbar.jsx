import React, { useContext } from 'react';
import logo from '../assets/logo-green.png';
import { FaHome, FaInfoCircle, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FavoriteContext } from '../stores/FavoritesContext';

function Navbar() {
  const { favorites } = useContext(FavoriteContext); // Accedi al contesto dei preferiti
  const favoritesCount = favorites.length; // Ottieni il conteggio dei preferiti

  const scrollToFooter = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className=" text-white w-full py-2">
      <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0 flex items-center">
          <img src={logo} alt="Logo" className="w-24" />
          <h1 className="font-bold text-2xl ml-2 hidden md:block">VegetaFlavors</h1>
        </Link>

        {/* Icone per schermi piccoli */}
        <ul className="flex md:hidden">
          <li className="p-4 mx-2">
            <Link to="/">
              <FaHome size={24} />
            </Link>
          </li>
          <li className="p-4 mx-2 relative">
            <Link to="/favorites">
              <FaHeart size={24} />
              {favoritesCount > 0 && (
                <div className="absolute text-xs bg-red-700 rounded-full py-[2px] px-2 top-0 right-0">
                  {favoritesCount}
                </div>
              )}
            </Link>
          </li>
          <li className="p-4 mx-2 cursor-pointer" onClick={scrollToFooter}>
            <FaInfoCircle size={24} />
          </li>
        </ul>

        {/* Testi per schermi grandi */}
        <ul className="hidden font-semibold md:flex">
          <li className="p-4">
            <Link to="/">Homepage</Link>
          </li>
          <li className="p-4 relative">
            <Link to="/favorites">
              Preferiti
              {favoritesCount > 0 && (
                <div className="absolute text-xs bg-red-700 rounded-full py-[2px] px-2 top-0 right-0">
                  {favoritesCount}
                </div>
              )}
            </Link>
          </li>
          <li className="p-4 cursor-pointer" onClick={scrollToFooter}>
            Info
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
