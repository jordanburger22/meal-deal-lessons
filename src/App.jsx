import React, { useState } from 'react';
import ChooseRecipe from "./components/ChooseRecipe"
import Header from "./components/Header"

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

  function handleAddRecipe(){
    setRecipes(prevRecipes => {
      return [
        ...prevRecipes,
        {
          recipeName: "Pancakes",
          ingredients: ["flour", "eggs", "milk"]
        }
      ]
    })
  }



  return (
    <div className={`app ${darkMode}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <ChooseRecipe recipes={recipes} />
      <button onClick={handleAddRecipe}>Add Recipe</button>
    </div>
  )
}

export default App