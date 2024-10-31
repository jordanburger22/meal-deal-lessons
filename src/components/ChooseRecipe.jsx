import React, { useState } from 'react';



function ChooseRecipe({ recipes }) {

    const [selectedRecipe, setSelectedRecipe] = useState(null)

    const recipeOptions = recipes.map((recipe, i) => {
        return (
            <option key={i} value={recipe.recipeName}>{recipe.recipeName}</option>
        )
    })

    const handleRecipeChange = (e) => {
        if(selectedRecipe) {
           return setSelectedRecipe(null)
        }
        setSelectedRecipe(recipes[0])
    }


    return (
        <div>
            <div>
                <h2>Choose Recipe</h2>
                <select>
                    <option value="default">Choose a recipe</option>
                    {recipeOptions}
                </select>
                <button onClick={handleRecipeChange}>Choose Recipe</button>
            </div>
            
            {/* && is for when you want to display something if a condition is met and nothing if it is not */}
            {/* {selectedRecipe && <div>
               <h3>{selectedRecipe.recipeName}</h3>
               <p>Ingredients: {selectedRecipe.ingredients.map((ingredient, i) => {
                return (
                    <span key={i}>{ingredient}, </span>
                )
               })}</p>
            </div>} */}

            {/* the ternary operator is a shorthand way of writing an if else statement when you want to display one thing or another */}
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