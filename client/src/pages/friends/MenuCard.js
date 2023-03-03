import React from 'react';

import RecipeCard from './RecipeCard';

function MenuCard({ recipes }) {

    console.log(recipes)

    return (
        <>
            {recipes.map((recipe) => {
                const id = recipe.id * Math.random()
                return <RecipeCard key={id} recipe={recipe} />
            })}
        </>
    )
}

export default MenuCard;