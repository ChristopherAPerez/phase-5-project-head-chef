import React from "react";

function MealCard({ recipe, index }) {
    return (
        <>
            <tr>
                <td className="menuHistorySlot">
                    {index === 0 ? <p><b>Breakfast</b></p> : index === 1 ? <p><b>Lunch</b></p> : <p><b>Dinner</b></p>}
                </td>
                <td className="menuHistorySlot">
                    <p>{recipe.name}</p>
                    <p>{recipe.description.length > 70 ? <span>{recipe.description}...</span> : <span>{recipe.description}</span>}</p>
                </td>
            </tr>
        </>
    )
}

export default MealCard;