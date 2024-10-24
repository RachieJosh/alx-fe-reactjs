import React, { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom"; // Import Link

const RecipeList = () => {
  const { filteredRecipes, recipes } = useRecipeStore((state) => ({
    filteredRecipes: state.filteredRecipes,
    recipes: state.recipes,
  }));

  // Initialize filtered recipes when the component mounts
  useEffect(() => {
    if (recipes.length > 0) {
      useRecipeStore.getState().setSearchTerm("");
    }
  }, [recipes]);

  return (
    <div>
      <SearchBar /> {/* Include the search bar */}
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            {" "}
            {/* Link to the recipe details */}
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
