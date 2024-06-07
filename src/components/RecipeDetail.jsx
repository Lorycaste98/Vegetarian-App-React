import React, { useState } from 'react';

function RecipeDetail({ title, imageUrl, ingredients, detailsSummary, detailsInstructions }) {
  const [showIngredients, setShowIngredients] = useState(true);
  const [showInstructions, setShowInstructions] = useState(false);

  const handleShowIngredients = () => {
    setShowIngredients(true);
    setShowInstructions(false);
  };

  const handleShowRecipe = () => {
    setShowInstructions(true);
    setShowIngredients(false);
  };

  return (
    <div className=" bg-slate-300 rounded-3xl overflow-hidden pb-8 mt-6">
      <div className="flex flex-col md:flex-row md:mb-8">
        <div className="w-full md:w-1/2 overflow-hidden  relative">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover scale-125" />
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/80 to-transparent">
            <h1 className="uppercase font-bold text-xl text-white text-center">{title}</h1>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col p-8">
          <p dangerouslySetInnerHTML={{ __html: detailsSummary }}></p>
        </div>
      </div>
      <div className="px-8">
        <div>
          <button
            onClick={handleShowIngredients}
            className={`py-2 px-4 border-4 border-[#009800] rounded-xl font-bold transition duration-300 mr-3 ${
              showIngredients ? 'bg-[#009800] text-white' : 'text-[#009800] hover:bg-[#009800] hover:text-white'
            }`}
          >
            Ingredienti
          </button>
          <button
            onClick={handleShowRecipe}
            className={`py-2 px-4 border-4 border-[#009800] rounded-xl font-bold transition duration-300 ${
              showInstructions ? 'bg-[#009800] text-white' : 'text-[#009800] hover:bg-[#009800] hover:text-white'
            }`}
          >
            Ricetta
          </button>
        </div>
        <div>
          {showIngredients && ingredients && Array.isArray(ingredients) && (
            <div className="my-4">
              <h2 className="text-lg font-semibold mb-2">INGREDIENTI</h2>
              <ul className="list-disc list-inside">
                {ingredients.map((ingredient) => (
                  <li key={ingredient.id}>{ingredient.original}</li>
                ))}
              </ul>
            </div>
          )}
          {showInstructions && (
            <div className="my-4">
              <h2 className="text-lg font-semibold mb-2">RICETTA</h2>
              <p dangerouslySetInnerHTML={{ __html: detailsInstructions }}></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
