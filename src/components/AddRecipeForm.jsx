import React, { useState } from 'react';



function AddRecipeForm(props) {

    const {addRecipe} = props

    const [formData, setFormData] = useState({
        recipeName: "",
        ingredients: ""
    })  

    const handleChange = (e) => {
        const {name, value} = e.target
        if(name === "ingredients") {
            const ingredients = value.split(",")
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    ingredients
                }
            })
            return
        }
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addRecipe(formData)
        alert(`${formData.recipeName} has been added! \nIngredients: ${formData.ingredients}`)
        setFormData({
            recipeName: "",
            ingredients: ""
        })
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label htmlFor="recipeName">Recipe Name</label>
            <input name="recipeName" onChange={handleChange} value={formData.recipeName}/>

            <label htmlFor="ingredients">Ingredients</label>
            <textarea name="ingredients" onChange={handleChange} value={formData.ingredients}></textarea>

            <button>Add Recipe</button>
        </form>
     );
}

export default AddRecipeForm;