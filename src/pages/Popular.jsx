import { useContext, useEffect, useState } from 'react';
import Card from '../components/Card';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { RecipeApiContext } from '../stores/RecipeApiContext';

function Popular() {
  const { getHomepageRecipes, error } = useContext(RecipeApiContext);
  const [recipes, setRecipes] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHomepageRecipes(offset);
      setRecipes(data?.results || []);
    };

    fetchData();
  }, [offset, getHomepageRecipes]);

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
    return <div className="text-red-700 font-bold text-2xl flex justify-center my-20 text-center">Errore: {error}</div>;
  }

  // Aggiungi una condizione per verificare se non ci sono ricette disponibili
  if (recipes.length === 0) {
    return <div className="text-white font-bold text-2xl flex justify-center my-20 text-center">Caricamento...</div>;
  }

  return (
    <div className="max-w-[1024px] mx-auto px-20">
      <h1 className="text-[#ededed] font-bold text-2xl my-10">Ricette popolari</h1>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-10 ">
        {recipes.map((recipe) => (
          <Card key={recipe.id} text={recipe.title} image={recipe.image} id={recipe.id} />
        ))}
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
  );
}

export default Popular;
