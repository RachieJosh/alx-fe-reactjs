import React from "react";
import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const RecipeList = () => {
  const { filteredRecipes, addFavorite, removeFavorite, favorites } =
    useRecipeStore((state) => ({
      filteredRecipes: state.filteredRecipes,
      addFavorite: state.addFavorite,
      removeFavorite: state.removeFavorite,
      favorites: state.favorites,
    }));

  const isFavorite = (id) => favorites.includes(id);

  return (
    <div>
      <SearchBar />
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
          <button
            onClick={() =>
              isFavorite(recipe.id)
                ? removeFavorite(recipe.id)
                : addFavorite(recipe.id)
            }
          >
            {isFavorite(recipe.id)
              ? "Remove from Favorites"
              : "Add to Favorites"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
