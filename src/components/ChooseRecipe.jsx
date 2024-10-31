


function ChooseRecipe({recipes}) {


    const recipeOptions = recipes.map((recipe, i) => {
        return (
            <option key={i} value={recipe.recipeName}>{recipe.recipeName}</option>
        )
    })

    return (
        <div>
            <h2>Choose Recipe</h2>
            <select>
                <option value="default">Choose a recipe</option>
                {recipeOptions}
            </select>
        </div>
    )
}

export default ChooseRecipe