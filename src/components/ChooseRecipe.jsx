import React, { useState } from 'react';



function ChooseRecipe({ recipes }) {

    const [selectedRecipe, setSelectedRecipe] = useState(null)

    const recipeOptions = recipes.map((recipe, i) => {
        return (
            <option key={i} value={recipe.recipeName}>{recipe.recipeName}</option>
        )
    })

    const handleRecipeChange = (e) => {
        console.log(e.target.value)
        if(selectedRecipe === 'default') {
           return setSelectedRecipe(null)
        }
        setSelectedRecipe(recipes.find(recipe => recipe.recipeName === e.target.value))
    }


    return (
        <div>
            <div>
                <h2>Choose Recipe</h2>
                <select onChange={handleRecipeChange}>
                    <option value="default">Choose a recipe</option>
                    {recipeOptions}
                </select>
                <button onClick={handleRecipeChange}>Choose Recipe</button>
            </div>
            {selectedRecipe ? <div>
               <h3>{selectedRecipe.recipeName}</h3>
               <p>Ingredients: {selectedRecipe.ingredients.map((ingredient, i) => {
                return (
                    <span key={i}>{ingredient}, </span>
                )
               })}</p>
            </div> :
            <div>
                <h3>No Recipe Selected</h3>
            </div>}
        </div>
    )
}

export default ChooseRecipe