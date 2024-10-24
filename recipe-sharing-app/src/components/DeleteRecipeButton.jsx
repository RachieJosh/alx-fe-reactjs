import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleDelete = () => {
    deleteRecipe(recipeId); // Delete the recipe
    navigate("/"); // Navigate back to the recipe list after deletion
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
