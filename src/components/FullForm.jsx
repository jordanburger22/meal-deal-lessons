import React, { useState } from 'react';

function FullForm() {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
        age: "",
        subscriptionType: "",
        agreeTerms: false,
        favoriteColor: "#000000",
        birthDate: "",
        country: "USA"
    });

    console.log(formData)

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted!");
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input 
                    type="text" 
                    name="username" 
                    value={formData.username} 
                    onChange={handleChange} 
                />
            </label>

            <label>
                Password:
                <input 
                    type="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                />
            </label>

            <label>
                Email:
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                />
            </label>

            <label>
                Age:
                <input 
                    type="number" 
                    name="age" 
                    value={formData.age} 
                    onChange={handleChange} 
                />
            </label>

            <fieldset>
                <legend>Subscription Type:</legend>
                <label>
                    <input 
                        type="radio" 
                        name="subscriptionType" 
                        value="Free" 
                        checked={formData.subscriptionType === "Free"} 
                        onChange={handleChange} 
                    />
                    Free
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="subscriptionType" 
                        value="Premium" 
                        checked={formData.subscriptionType === "Premium"} 
                        onChange={handleChange} 
                    />
                    Premium
                </label>
            </fieldset>

            <label>
                Agree to Terms:
                <input 
                    type="checkbox" 
                    name="agreeTerms" 
                    checked={formData.agreeTerms} 
                    onChange={handleChange} 
                />
            </label>

            <label>
                Favorite Color:
                <input 
                    type="color" 
                    name="favoriteColor" 
                    value={formData.favoriteColor} 
                    onChange={handleChange} 
                />
            </label>

            <label>
                Birth Date:
                <input 
                    type="date" 
                    name="birthDate" 
                    value={formData.birthDate} 
                    onChange={handleChange} 
                />
            </label>

            <label>
                Country:
                <select name="country" value={formData.country} onChange={handleChange}>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">UK</option>
                </select>
            </label>

            <button type="submit">Submit</button>
        </form>
    );
}

export default FullForm;
