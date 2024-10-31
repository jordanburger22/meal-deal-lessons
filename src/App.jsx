import React, { useState, useEffect } from 'react';
import ChooseRecipe from "./components/ChooseRecipe";
import Header from "./components/Header";
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode(e) {
    const { checked } = e.target;
    setDarkMode(checked);
  }

  // Load recipes from localStorage or start with an empty array
  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem("recipes");
    return savedRecipes ? JSON.parse(savedRecipes) : [];
  });

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  function addRecipe(newRecipe) {
    setRecipes(prevRecipes => [...prevRecipes, newRecipe]);
  }

  function deleteRecipe(id){
    setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== id));
  }

  function editRecipe(id, updatedRecipe){
    setRecipes(prevRecipes => prevRecipes.map(recipe => recipe.id === id ? updatedRecipe : recipe));
  }

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <ChooseRecipe recipes={recipes} deleteRecipe={deleteRecipe} editRecipe={editRecipe} />
      <AddRecipeForm addRecipe={addRecipe} />
    </div>
  );
}

export default App;