import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";

const App = () => {
  return (
    <Routes>
      {" "}
      {/* Use Routes to wrap your Route components */}
      <Route path="/" element={<RecipeList />} /> {/* Main recipe list */}
      <Route path="/add" element={<AddRecipeForm />} />{" "}
      {/* Form to add a recipe */}
      <Route path="/recipes/:id" element={<RecipeDetails />} />{" "}
      {/* Recipe details page */}
      <Route path="/edit/:id" element={<EditRecipeForm />} />{" "}
      {/* Edit recipe page */}
    </Routes>
  );
};

export default App;
