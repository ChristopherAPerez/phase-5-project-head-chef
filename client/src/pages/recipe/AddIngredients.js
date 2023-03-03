import React from "react";

function AddIngredients({ ingredient, setIngredient, ingredients, setIngredients }) {

    function addIngredient(e) {
        e.preventDefault();
        setIngredients([...ingredients, ingredient])
        setIngredient("")
    }

    return (
        <>
            <div className="addIngredient">
                <input
                    className="ingredientInput"
                    type="text"
                    value={ingredient}
                    onChange={(e) => setIngredient(e.target.value)}
                />
                {ingredient === "" ? <button className="button" type="button">Add Ingredient</button> : <button className="button" type="button" onClick={addIngredient}>Add Ingredient</button>}
                {ingredients.map((ingredient, index) => {
                    return <p key={index + 1}><b>{index + 1}.</b> {ingredient}</p>
                })}
            </div>
        </>
    )
}

export default AddIngredients;