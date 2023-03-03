import React from "react";

import Error from "./Error";

function Recipe({ unpublish, recipe, openModalHandler, handleMenu, error }) {

    return (
        <>
            <div className="recipeTableDiv">
                <table className="recipeTable">
                    <tbody>
                        <tr >
                            <td >
                                <p><b>{recipe.recipe_name}</b> by: Username</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="recipeTableTwo">
                    <tbody>
                        <tr>
                            <td>
                                <img className="recipeImage" src={recipe.recipe_pic} alt={recipe.recipe_pic} width="75" height="75" />
                            </td>
                            <td className="recipeText">
                                <p ><b>Description: </b>{recipe.description.substring(0, 200)}...</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr >
                            <td >
                                <button className="editButton" onClick={openModalHandler}>View</button>
                                {unpublish ? <button className="editButton" onClick={handleMenu}>Add to Menu</button> : <></>}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Error error={error} />
            </div>
        </>
    )
}

export default Recipe;