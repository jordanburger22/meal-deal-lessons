import React, { useState } from 'react';
import ChooseRecipe from "./components/ChooseRecipe"
import Header from "./components/Header"
import AddRecipeForm from './components/AddRecipeForm';
import FullForm from './components/FullForm';

function App() {

  const [darkMode, setDarkMode] = useState(false)

  // for our app we only need to toggle the dark mode so we only need the checked property
  function toggleDarkMode(e){
    const {checked} = e.target
    setDarkMode(checked)
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
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <ChooseRecipe recipes={recipes} />
      <AddRecipeForm addRecipe={addRecipe} />

      <FullForm />
    </div>
  )
}

export default App