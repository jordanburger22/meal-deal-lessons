import React, { useState } from 'react';
import ChooseRecipe from "./components/ChooseRecipe"
import Header from "./components/Header"

function App() {

  const state = useState('state')
  console.log(state)

  // updating state to a new value
  const [string, setString] = useState('Hello World')

  function changeString(){
    setString('Updating state')
  }

  // toggling a value

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




  return (
    <div className={`app ${darkMode}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <ChooseRecipe recipes={recipes} />
      <h1>{string}</h1>
      <button onClick={changeString}>Change String</button>
    </div>
  )
}

export default App