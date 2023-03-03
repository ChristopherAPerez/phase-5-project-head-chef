import React from "react";

function RecipeInputs( { name, setName, meal, setMeal, description, setDescription, calories, setCalories, prep, setPrep, pic, setPic } ) {
    
    return (
        <>
            <label>
                <b>
                    Name:
                </b>
            </label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br></br>
            <label>
                <b>
                    Meal:
                </b>
            </label>
            <select
                value={meal}
                onChange={(e) => setMeal(e.target.value)}
            >
                <option
                    value="Breakfast"
                >
                    Breakfast
                </option>
                <option
                    value="Lunch"
                >
                    Lunch
                </option>
                <option
                    value="Dinner"
                >
                    Dinner
                </option>
            </select>
            <br></br>
            <label>
                <b>
                    Description:
                </b>
            </label>
            <br></br>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="4"
                cols="45"
            >
            </textarea>
            <br></br>
            <label>
                <b>
                    Calories:
                </b>
            </label>
            <input
                type="number"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
            />
            <br></br>
            <label>
                <b>
                    Prep-time:
                </b>
            </label>
            <input
                type="number"
                value={prep}
                onChange={(e) => setPrep(e.target.value)}
            />
            <br></br>
            <label>
                <b>
                    Pic:
                </b>
            </label>
            <br></br>
            <textarea value={pic}
                onChange={(e) => setPic(e.target.value)}
                rows="4"
                cols="45"
            >
            </textarea>
        </>
    )
}

export default RecipeInputs;




