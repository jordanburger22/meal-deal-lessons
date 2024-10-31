


function ChooseRecipe(props) {

    const {greeting} = props
    // we can pull out the value of greeting from props and assign it to a variable with objeect destructuring

    return (
        <div>
            <h2>Choose Recipe</h2>
            <p>{greeting}</p>
        </div>
    )
}

export default ChooseRecipe