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

  return (
    <>
      <Header  />
      <ChooseRecipe recipes={recipes} />
    </>
  )
}

export default App