import React from "react";
import { useNavigate } from "react-router-dom"

function MenuBar() {

    const navigate = useNavigate()

    function handleMainMenu() {
        navigate("/")
    }

    function handleMenuHistory() {
        navigate("/menu_history")
    }

    function handleCreateMenu() {
        navigate("/menu")
    }

    function handleRecipes() {
        navigate("/recipes")
    }

    return (
        <>
            <br></br>
            <button className="button" onClick={handleMainMenu}>Main Menu</button>
            <br></br>
            <button className="button" onClick={handleMenuHistory}>History</button>
            <button className="button" onClick={handleCreateMenu}>Create Menu</button>
            <button className="button" onClick={handleRecipes}>Recipes</button>
            <br></br>
            <br></br>
        </>
    )
}

export default MenuBar;

