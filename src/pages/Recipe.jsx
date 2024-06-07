import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeDetail from '../components/RecipeDetail';
import { RecipeApiContext } from '../stores/RecipeApiContext';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function Recipe() {
  const { getRecipeDetails, error } = useContext(RecipeApiContext);
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRecipeDetails(id);
      setRecipe(data);
    };

    fetchData();
  }, [id, getRecipeDetails]);

  if (error) {
    return <div className="text-red-700 font-bold text-2xl flex justify-center my-20">Errore: {error}</div>;
  }

  if (!recipe) {
    return (
      <div className="text-white font-bold text-2xl flex justify-center my-20">
        <AiOutlineLoading3Quarters className="animate-spin" />
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-[960px] mx-auto px-10 pb-20">
      <RecipeDetail
        title={recipe.title}
        imageUrl={recipe.image}
        ingredients={recipe.extendedIngredients}
        detailsSummary={recipe.summary}
        detailsInstructions={recipe.instructions}
      />
    </div>
  );
}

export default Recipe;
