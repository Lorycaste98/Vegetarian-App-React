import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import { RecipeApiContext } from '../stores/RecipeApiContext';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import SearchBar from '../components/SearchBar';

function Searched() {
  const { search } = useParams();
  const { searchByIngredient, error } = useContext(RecipeApiContext);
  const [recipes, setRecipes] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await searchByIngredient(search, offset);
      setRecipes(data?.results || []);
    };

    fetchData();
  }, [search, offset]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevPage = () => {
    setOffset((prevOffset) => Math.max(prevOffset - 10, 0));
    scrollToTop();
  };

  const handleNextPage = () => {
    setOffset((prevOffset) => prevOffset + 10);
    scrollToTop();
  };

  if (error) {
    return <div className="text-red-700 font-bold text-2xl flex justify-center my-20">Errore: {error}</div>;
  }

  return (
    <>
      <SearchBar />
      <div className="max-w-[1024px] mx-auto px-20">
        <h1 className="text-[#ededed] font-bold text-2xl my-10">Results for "{search}"</h1>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-10 ">
          {recipes.map((recipe) => {
            return <Card key={recipe.id} text={recipe.title} image={recipe.image} id={recipe.id} />;
          })}
        </div>
        <div className="flex justify-between my-10 px-3">
          <button
            onClick={handlePrevPage}
            className={`py-2 px-4 border-4 border-[#009800] bg-slate-300 text-[#009800] rounded-xl font-bold hover:bg-[#009800] hover:text-white transition duration-300 ${
              offset === 0 ? 'invisible' : 'visible'
            }`}
          >
            <FaArrowLeft size={30} />
          </button>
          <button
            onClick={handleNextPage}
            className="py-2 px-4 border-4 border-[#009800] bg-slate-300 text-[#009800] rounded-xl font-bold hover:bg-[#009800] hover:text-white transition duration-300"
          >
            {' '}
            <FaArrowRight size={30} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Searched;
