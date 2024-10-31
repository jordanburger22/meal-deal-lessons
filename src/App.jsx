

function App() {

  const greeting = <h1>Hello World</h1>

  // JavaScript code above
  return (
    // JSX code below
    // <> (fragment) acts like a div without creating one on the DOM
    <>
      {greeting}
      <p>This is a paragraph</p>
    </>
  )
}

export default App