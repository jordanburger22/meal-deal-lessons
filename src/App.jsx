import ChooseRecipe from "./components/ChooseRecipe"
import Header from "./components/Header"

function App() {

  const greeting = "Hello World"

  return (
    // passing props creates an object with key value pairs, so the name of our prop is greeting and the value is "Hello World"
    <>
      <Header greeting={greeting} />
      <ChooseRecipe greeting={greeting} />
    </>
  )
}

export default App