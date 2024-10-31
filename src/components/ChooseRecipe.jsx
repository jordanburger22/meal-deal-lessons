import React, { useState } from 'react';



function ChooseRecipe({ recipes }) {

    const recipeOptions = recipes.map((recipe, i) => {
        return (
            <option key={i} value={recipe.recipeName}>{recipe.recipeName}</option>
        )
    })



    return (
        <div>
            <div>
                <h2>Choose Recipe</h2>
                <select>
                    <option value="default">Choose a recipe</option>
                    {recipeOptions}
                </select>
            </div>
            <div>
               
            </div>
        </div>
    )
}

export default ChooseRecipe