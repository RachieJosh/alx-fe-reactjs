import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router, Routes, and Route
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";

const App = () => {
  return (
    <Router>
      {" "}
      {/* Wrap everything in Router */}
      <div>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={<RecipeList />} /> {/* Home Page */}
          <Route path="/add" element={<AddRecipeForm />} />{" "}
          {/* Add Recipe Page */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />{" "}
          {/* Recipe Details Page */}
          <Route path="/edit/:id" element={<EditRecipeForm />} />{" "}
          {/* Edit Recipe Page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
