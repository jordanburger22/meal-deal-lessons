import ChooseRecipe from "./components/ChooseRecipe"
import Header from "./components/Header"

function App() {

  return (
    // <Header /> is how we call the Header component function as JSX
    <>
      <Header />
      <ChooseRecipe />
    </>
  )
}

export default App