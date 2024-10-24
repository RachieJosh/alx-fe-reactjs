import React, { useState } from "react";

const AddRecipeForm = () => {
  // State to hold the recipe data
  const [recipeData, setRecipeData] = useState({
    title: "",
    ingredients: "",
    steps: "", // Include steps in the state
  });

  // State to hold validation errors
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target; // Use e.target.value
    setRecipeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form inputs
  const validate = () => {
    const validationErrors = {};
    if (!recipeData.title) {
      validationErrors.title = "Title is required";
    }
    if (!recipeData.ingredients) {
      validationErrors.ingredients = "Ingredients are required";
    } else if (recipeData.ingredients.split(",").length < 2) {
      validationErrors.ingredients = "Please list at least two ingredients";
    }
    if (!recipeData.steps) {
      // Validate steps
      validationErrors.steps = "Preparation steps are required";
    }
    return validationErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set validation errors
    } else {
      // Here you can handle the submission of the recipe data
      console.log("Recipe submitted:", recipeData);
      // Reset form and errors if needed
      setRecipeData({ title: "", ingredients: "", steps: "" }); // Reset steps here
      setErrors({});
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={recipeData.title}
            onChange={handleChange}
            className={`w-full p-2 border ${
              errors.title ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="ingredients">
            Ingredients (comma-separated)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={recipeData.ingredients}
            onChange={handleChange}
            className={`w-full p-2 border ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm">{errors.ingredients}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="steps">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps" // Name for steps field
            value={recipeData.steps}
            onChange={handleChange} // Uses e.target.value
            className={`w-full p-2 border ${
              errors.steps ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.steps && (
            <p className="text-red-500 text-sm">{errors.steps}</p>
          )}{" "}
          {/* Display error if any */}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
