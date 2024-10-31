import React, { useState } from 'react';



function ChooseRecipe({ recipes, deleteRecipe, editRecipe }) {

    const [selectedRecipe, setSelectedRecipe] = useState(null)

    const [editState, setEditState] = useState(selectedRecipe)

    const [isFormOpen, setIsFormOpen] = useState(false)

    const recipeOptions = recipes.map((recipe, i) => {
        return (
            <option key={i} value={recipe.recipeName}>{recipe.recipeName}</option>
        )
    })

    const handleRecipeChange = (e) => {
        console.log(e.target.value)
        if (selectedRecipe === 'default') {
            return setSelectedRecipe(null)
        }
        setSelectedRecipe(recipes.find(recipe => recipe.recipeName === e.target.value))
        setEditState(recipes.find(recipe => recipe.recipeName === e.target.value))
    }

    function handleDelete() {
        deleteRecipe(selectedRecipe.id)
        setSelectedRecipe(null)
    }

    function handleToggleForm() {
        setIsFormOpen(prevIsFormOpen => !prevIsFormOpen)
        setEditState(selectedRecipe)
    }

    function handleChange(e) {
        const { name, value } = e.target
        if (name === "ingredients") {
            const ingredients = value.split(",")
            setEditState(prevEditState => {
                return {
                    ...prevEditState,
                    ingredients
                }
            })
            return
        }
        setEditState(prevEditState => {
            return {
                ...prevEditState,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        editRecipe(editState)
        setSelectedRecipe(editState)
        setIsFormOpen(false)
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
            {selectedRecipe ?
                <div>
                    <h2>Selected Recipe</h2>
                    <h3>{selectedRecipe.recipeName}</h3>
                    <p>Ingredients: </p>
                    <ul>
                        {selectedRecipe.ingredients.map((ingredient, i) => {
                            return (
                                <li key={i}>{ingredient}</li>
                            )
                        })}
                    </ul>
                    <button onClick={handleDelete}>Delete</button>
                    <button onClick={handleToggleForm}>Edit</button>
                    {isFormOpen &&
                        <form onSubmit={handleSubmit}>
                            <input name='recipeName' value={editState.recipeName} onChange={handleChange} />
                            <textarea name='ingredients' value={editState.ingredients} onChange={handleChange} />
                            <button type='submit'>Update</button>
                            <button onClick={handleToggleForm}>Cancel</button>
                        </form>}
                </div>
                :
                <div>
                    <h3>No Recipe Selected</h3>
                </div>}
        </div>
    )
}

export default ChooseRecipe