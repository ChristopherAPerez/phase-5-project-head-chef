import React from "react";
import { useNavigate } from "react-router-dom"

function RecipeBar() {
    const navigate = useNavigate()

    function handleMainMenu() {
        navigate("/")
    }

    function handleMyRecipe() {
        navigate("/my_recipes")
    }

    function handleRecipes() {
        navigate("/recipes")
    }

    function handleCreateRecipe() {
        navigate("/create_recipe")
    }

    return (
        <>
            <br></br>
            <button className="button" onClick={handleMainMenu}>Main Menu</button>
            <br></br>
            <button className="button" onClick={handleMyRecipe}>My Recipes</button>
            <button className="button" onClick={handleRecipes}>Discover Recipes</button>
            <button className="button" onClick={handleCreateRecipe}>Create Recipe</button>
            <br></br>
            <br></br>
        </>
    )
}

export default RecipeBar;