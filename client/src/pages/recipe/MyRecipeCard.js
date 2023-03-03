import React from "react";



function MyRecipeCard({ recipe, setPage, setMyRecipesMenus }) {

    function handleRecipeClick() {
        fetch(`/my_recipes_menus/${recipe.id}`).then((r) => {
            if (r.ok) {
                r.json().then((menus) => {
                    setMyRecipesMenus(menus)
                    setPage("menu")
                })
            } else {
                r.json().then((err) => {
                    alert(err.error)
                })
            }
        });
    }

    return (
        <>
            <tr onClick={handleRecipeClick} >
                <td className="myRecipeTabletd">
                    <b>{recipe.recipe_name}</b>
                </td>
            </tr>
        </>
    )
}

export default MyRecipeCard;