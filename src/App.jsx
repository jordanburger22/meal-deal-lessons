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

  // prevRecipes is the previous state
  // after the return statement we choose the data type we want to return, it should match the data type of the state
  // we return an array with the previous state and the new state
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

  const [user, setUser] = useState({
    name: "John",
    age: 20
  })

  function updateUser(){
    setUser(prevUser => {
      return {
        ...prevUser,
        age: 21,
        address: "123 Main St"
      }
    })
  }

  console.log(user)

  return (
    <div className={`app ${darkMode}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <ChooseRecipe recipes={recipes} />
      <button onClick={handleAddRecipe}>Add Recipe</button>
      <button onClick={updateUser}>Update User</button>
    </div>
  )
}

export default App