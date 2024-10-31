import React, { useState } from 'react';
import ChooseRecipe from "./components/ChooseRecipe"
import Header from "./components/Header"
import AddRecipeForm from './components/AddRecipeForm';

function App() {

  const [darkMode, setDarkMode] = useState('Light')

  function toggleDarkMode(){
    setDarkMode(darkMode === 'Light' ? 'Dark' : 'Light')
  }
  

  const [recipes, setRecipes] = useState([
    {
      recipeName: "Spaghetti",
      ingredients: ["flour", "water"]
    },
    {
      recipeName: "Pizza",
      ingredients: ["dough", "tomato", "cheese"]
    }
  ])


  function addRecipe(newRecipe){
    setRecipes(prevRecipes => {
      return [...prevRecipes, newRecipe]
    })
  }


  return (
    <div className={`app ${darkMode}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <ChooseRecipe recipes={recipes} />
      <AddRecipeForm addRecipe={addRecipe} />
    </div>
  )
}

export default App