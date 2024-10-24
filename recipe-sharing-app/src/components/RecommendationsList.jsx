import { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";

const RecommendationsList = () => {
  const { generateRecommendations, recommendations } = useRecipeStore(
    (state) => ({
      generateRecommendations: state.generateRecommendations,
      recommendations: state.recommendations,
    })
  );

  useEffect(() => {
    generateRecommendations(); // Generate recommendations when the component mounts
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
};

export default RecommendationsList;