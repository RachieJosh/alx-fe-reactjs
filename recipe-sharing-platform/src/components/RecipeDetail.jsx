import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe by ID from the mock data
    const selectedRecipe = recipesData.find(
      (recipe) => recipe.id === parseInt(id)
    );
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 shadow-lg rounded-lg bg-white">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-60 object-cover rounded-lg mb-4"
      />
      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        <li>{recipe.ingredients}</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Cooking Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;
