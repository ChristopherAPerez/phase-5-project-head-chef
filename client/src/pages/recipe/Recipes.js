import React, { useEffect, useContext } from "react";

import RecipeBar from "./RecipeBar";
import CurrentMenu from "./CurrentMenu";
import DiscoverBar from './DiscoverBar';
import RecipeList from './RecipeList';

import { RecipeContext } from '../../components/App';

function Recipes() {

    const { allRecipes, setAllRecipes } = useContext(RecipeContext)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        fetch("/recipes").then((r) => {
            if (r.ok) {
                r.json().then((recipes) => {
                    setAllRecipes(recipes)
                })
            }
        });
    }, []);

    function deleteRecipe(id) {
        const updatedRecipes = allRecipes.filter((recipe) => recipe.id !== id);
        setAllRecipes(updatedRecipes);
    }

    return (
        <>
            <RecipeContext.Provider value={{ allRecipes, setAllRecipes, deleteRecipe }}>
                <RecipeBar />
                <CurrentMenu/>
                <DiscoverBar />
                <RecipeList />
            </RecipeContext.Provider>
        </>
    )
}

export default Recipes;