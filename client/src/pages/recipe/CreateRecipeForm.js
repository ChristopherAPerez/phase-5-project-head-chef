import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

import RecipeInputs from "./RecipeInputs";
import AddIngredients from "./AddIngredients";
import AddSteps from "./AddSteps";
import Error from './Errors';

import { UserContext } from '../../components/App';
import { RecipeContext } from '../../components/App';

function CreateRecipeForm() {
    const navigate = useNavigate()

    const { user, myRecipes, setMyRecipes } = useContext(UserContext)
    const { allRecipes, setAllRecipes } = useContext(RecipeContext)

    const [name, setName] = useState("")
    const [meal, setMeal] = useState("Breakfast")
    const [steps, setSteps] = useState([])
    const [step, setStep] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [ingredient, setIngredient] = useState("")
    const [description, setDescription] = useState("")
    const [calories, setCalories] = useState(0)
    const [prep, setPrep] = useState(0)
    const [pic, setPic] = useState("")

    const [errors, setErrors] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


    function handleSubmit(e) {
        e.preventDefault();
        fetch("recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                recipe_name: name,
                meal: meal,
                steps: steps,
                ingredients: ingredients,
                description: description,
                calories: calories,
                prep_time: prep,
                recipe_pic: pic,
                user_id: user.id
            }),
        })
            .then((r) => {
                if (r.ok) {
                    r.json().then((recipe) => {
                        setAllRecipes([...allRecipes, recipe])
                        setMyRecipes([...myRecipes, recipe])

                        setName("")
                        setMeal("Breakfast")
                        setSteps([])
                        setStep("")
                        setIngredients([])
                        setIngredient("")
                        setDescription("")
                        setCalories(0)
                        setPrep(0)
                        setPic("")

                        navigate('/recipes')
                    });
                } else {
                    r.json().then((err) => {
                        setErrors(err.errors)
                    })
                }
            })
    }

    return (
        <>
            <br></br>
            <div className="newRecipeForm">
                <h1><u>Create New Recipe!</u></h1>
                <form className="addRecipeForm" onSubmit={handleSubmit}>
                    <RecipeInputs name={name} setName={setName} meal={meal} setMeal={setMeal} description={description} setDescription={setDescription} calories={calories} setCalories={setCalories} prep={prep} setPrep={setPrep} pic={pic} setPic={setPic} />
                    <br></br>
                    <AddIngredients ingredient={ingredient} setIngredient={setIngredient} ingredients={ingredients} setIngredients={setIngredients}/>
                    <br></br>
                    <AddSteps step={step} setStep={setStep} steps={steps} setSteps={setSteps} />
                    <br></br>
                    <input
                        className="editButton"
                        type="submit" />
                    <br></br>
                </form>
                <br></br>
                <Error errors={errors}/>
            </div>
        </>
    )
}

export default CreateRecipeForm;