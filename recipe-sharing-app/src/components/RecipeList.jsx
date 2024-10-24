import React, { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";
import SearchBar from "./SearchBar";

const RecipeList = () => {
  const { filteredRecipes, recipes } = useRecipeStore((state) => ({
    filteredRecipes: state.filteredRecipes,
    recipes: state.recipes,
  }));

  // If recipes are initially set, filter them for the first time
  useEffect(() => {
    if (recipes.length > 0) {
      // Initialize filtered recipes when the component mounts
      useRecipeStore.getState().setSearchTerm("");
    }
  }, [recipes]);

  return (
    <div>
      <SearchBar /> {/* Include the search bar */}
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
