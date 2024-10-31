import ChooseRecipe from "./components/ChooseRecipe"
import Header from "./components/Header"

function App() {

  const recipes = [
    {
      recipeName: "Spaghetti",
      ingredients: ["flour", "water"]
    },
    {
      recipeName: "Pizza",
      ingredients: ["dough", "tomato", "cheese"]
    }
  ]

  // Function to toggle the background color between red and dark gray
  // This works because it directly manipulates the DOM, but it's not the best practice in React
  function changeBackgroundColor() {
    if (document.body.style.backgroundColor === "red") {
      document.body.style.backgroundColor = "darkgray"
    } else {
      document.body.style.backgroundColor = "red"
    }
  }

  // Function to add a new recipe to the recipes array
  // This illustrates a common mistake: directly modifying a variable that React is using
  // React does not know that the array has changed, so the component will not re-render
  function addRecipe() {
    recipes.push({
      recipeName: "Pasta",
      ingredients: ["flour", "water"]
    })
    console.log(recipes)
  }

  console.log(recipes)

  return (
    <>
      <Header />
      <ChooseRecipe recipes={recipes} />
      <button onClick={changeBackgroundColor}>Change Background Color</button>
      <button onClick={addRecipe}>Add Recipe</button>
    </>
  )
}

export default App