import React, { useContext, useState } from "react";

import Recipe from './Recipe';
import ModalNav from "./ModalNav";
import EditRecipe from "./EditRecipe";
import Ingredients from './Ingredients';
import Steps from "./Steps";
import Errors from "./Errors";

import { UserContext } from '../../components/App';
import { PublishContext } from '../../components/App';
import { RecipeContext } from '../../components/App';

import ReactModal from 'react-modal';
import ReviewCard from "./ReviewCard";


function RecipeCard({ recipe, updatedRecipes }) {

    const { user, friends, setFriends, deleteMyRecipe } = useContext(UserContext)
    const { unpublish, unpublishRecipes, setUnPublishRecipes, unpublishMenuToRecipes, setUnpublishMenuToRecipes } = useContext(PublishContext)
    const { deleteRecipe } = useContext(RecipeContext)

    const [edit, setEdit] = useState(false);

    const [meal, setMeal] = useState(recipe.meal);
    const [pic, setPic] = useState(recipe.recipe_pic);
    const [name, setName] = useState(recipe.recipe_name);
    const [description, setDescription] = useState(recipe.description);
    const [calories, setCalories] = useState(recipe.calories);
    const [prep, setPrep] = useState(recipe.prep_time);
    const [steps, setSteps] = useState(recipe.steps);

    const [ingredients, setIngredients] = useState(recipe.ingredients);

    const [reviews, setReviews] = useState(recipe.reviews)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("")

    const [page, setPage] = useState("recipe");

    const [addNewStep, setAddNewStep] = useState("");

    const [error, setError] = useState("")
    const [errors, setErrors] = useState([])

    function resetErrors() {
        setErrors([])
    }

    function resetError() {
        setError('')
    }

    function handlePage(value) {
        setPage(value)
    }

    function handleEdit() {
        setEdit(!edit)
    }

    function handleMenu() {
        fetch("menu_to_recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                description: description,
                calories: calories,
                prep_time: prep,
                menu_id: unpublish.id,
                recipe_id: recipe.id
            }),
        })
            .then((r) => {
                if (r.ok) {
                    r.json().then((data) => {
                        setUnpublishMenuToRecipes([...unpublishMenuToRecipes, data])
                        setUnPublishRecipes([...unpublishRecipes, recipe])
                    });
                } else {
                    r.json().then((err) => {
                        setError(err.error)
                        console.log(err.error)
                        setTimeout(() => {
                            resetError()
                          }, 2500);
                    })
                }
            })


    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`recipes/${recipe.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                meal: meal,
                recipe_pic: pic,
                recipe_name: name,
                description: description,
                calories: calories,
                prep_time: prep
            }),
        })

            .then((r) => {
                if (r.ok) {
                    r.json().then((update) => {
                        updatedRecipes(update)
                        setEdit(!edit)
                    });
                } else {
                    r.json().then((err) => {
                        setErrors(err.errors)
                        setTimeout(() => {
                            resetErrors()
                          }, 2500);
                    })
                }
            })



    }

    function handleDelete() {
        fetch(`/recipes/${recipe.id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                deleteRecipe(recipe.id);
                deleteMyRecipe(recipe.id);
            } else {
                r.json().then((err) => {
                    alert(err.error)
                })
            }
        });
    }

    function handleReview(e) {
        e.preventDefault();
        fetch(`/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                rating: rating,
                comment: comment,
                recipe_id: recipe.id,
                user_id: user.id,
                username: user.username
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((review) => {
                    setReviews([...reviews, review]);
                    setRating(0)
                    setComment("")
                });
            } else {
                r.json().then((err) => {
                    setErrors(err.errors)
                    setTimeout(() => {
                        resetErrors()
                      }, 2500);
                })
            }
        });
    }

    function handleAddNewStep(e) {
        e.preventDefault();
        const updateStep = [...steps, addNewStep]
        fetch(`recipes/${recipe.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                steps: updateStep
            }),
        })
            .then((r) => {
                if (r.ok) {
                    r.json().then((update) => {
                        setSteps(updateStep)
                        setAddNewStep("")
                    });
                } else {
                    r.json().then((err) => {
                        alert(err.error)
                    })
                }
            })
    }

    function handleFollow() {
        fetch(`/create_friendships/${recipe.user_id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: user.id,
                friend_id: recipe.user_id
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((friendship) => {
                    setFriends([...friends, friendship]);
                });
            } else {
                r.json().then((err) => {
                    setErrors(err.errors)
                    setTimeout(() => {
                        resetErrors()
                      }, 2500);
                })
            }
        });
    }

    //////////  Modal  ///////////

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModalHandler = () => {
        setModalIsOpen(true);
    };

    const closeModalHandler = () => {
        setEdit(false)
        setModalIsOpen(false);
    };

    return (
        <>
            <Recipe unpublish={unpublish} recipe={recipe} openModalHandler={openModalHandler} handleMenu={handleMenu} error={error}/>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModalHandler}
                ariaHideApp={false}
                className="modal"
            >
                <ModalNav closeModalHandler={closeModalHandler} handlePage={handlePage} />
                <>
                    {
                        page === "recipe" ? (
                            <>
                                {edit ? (
                                    <form className="viewTable" onSubmit={handleSubmit}>
                                        <EditRecipe setIngredients={setIngredients} ingredients={ingredients} recipe={recipe} meal={meal} setMeal={setMeal} pic={pic} setPic={setPic} name={name} setName={setName} description={description} setDescription={setDescription} calories={calories} setCalories={setCalories} prep={prep} setPrep={setPrep} steps={steps} setSteps={setSteps} errors={errors}/>
                                        <br></br>
                                    </form>
                                ) : (
                                    <>
                                        <div className="viewTable">
                                            <table className="tableDeetsLeft">
                                                <tbody>
                                                    <tr>
                                                        <td >
                                                            <br></br>
                                                            <b>{recipe.recipe_name}</b>
                                                            <br></br>
                                                            <img className="recipeImage" src={recipe.recipe_pic} alt={recipe.recipe_pic} width="300" height="300" />
                                                            <br></br>
                                                            <br></br>
                                                            {user.id === recipe.user.id ?
                                                                <>
                                                                    <button className="editButton" onClick={handleEdit}>
                                                                        Edit Recipe
                                                                    </button>
                                                                    <button className="editButton" onClick={handleDelete}>
                                                                        Delete Recipe
                                                                    </button>
                                                                </>
                                                                :
                                                                <>
                                                                    <Errors errors={errors} />
                                                                    <b>Created by: </b> <button className="editButton" onClick={handleFollow}>Follow {recipe.user.username}</button>
                                                                </>
                                                            }
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table className="tableDeetsRight">
                                                <tbody>
                                                    <tr>
                                                        <td >
                                                            <table>
                                                                <tbody>

                                                                    <tr>
                                                                        <td>
                                                                            <br></br>
                                                                            <b>Description: </b>{recipe.description}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <b>Meal: </b>{recipe.meal}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <b>Prep-time: </b>{recipe.prep_time}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <b>Calories: </b>{recipe.calories}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <b>Ingredients: </b><br></br>
                                                                            <table>
                                                                                <tbody>
                                                                                    {ingredients.map((ingredient, index) => {
                                                                                        return <Ingredients key={index} setIngredients={setIngredients} ingredients={ingredients} ingredient={ingredient} index={index} />
                                                                                    })}
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </>
                                )}
                            </>
                        ) : page === "steps" ? (
                            <div>
                                <b>Steps: </b>
                                <table className="stepTable">
                                    <tbody>
                                        {steps.map((step, index) => {
                                            return <Steps key={index} recipe={recipe} index={index} steps={steps} step={step} setSteps={setSteps} />
                                        })}
                                    </tbody>
                                </table>
                                <br></br>
                                {user.id === recipe.user.id ? (
                                    <>
                                        <form onSubmit={handleAddNewStep}>
                                            <label>Add New Step:</label>
                                            <br></br>
                                            <textarea
                                                name=""
                                                autoComplete="off"
                                                value={addNewStep}
                                                onChange={(e) => setAddNewStep(e.target.value)}
                                                rows="10" cols="100"
                                            />
                                            <br></br>
                                            {
                                                addNewStep === '' ?
                                                    <></>
                                                    :
                                                    <input
                                                        className="editButton"
                                                        type="submit"
                                                        value="Add New Step"
                                                    />
                                            }
                                        </form>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </div>
                        ) : (
                            <div>
                                <br></br>
                                <span><b>Reviews: </b></span>
                                <br></br>
                                <br></br>
                                {reviews.map((review, index) => {
                                    return <ReviewCard key={review.id} review={review} index={index} />
                                })}
                                {recipe.user_id !== user.id ? (
                                    <>
                                        <form onSubmit={handleReview}>
                                            <p><b>Leave A Review:</b></p>
                                            Rating: <input
                                                type="number"
                                                name=""
                                                autoComplete="off"
                                                value={rating}
                                                onChange={(e) => setRating(e.target.value)}
                                            />/5
                                            <br></br>
                                            Comment:
                                            <br></br>
                                            <textarea
                                                name=""
                                                autoComplete="off"
                                                value={comment}
                                                onChange={(e) => setComment(e.target.value)}
                                                rows="10" cols="100"
                                            />
                                            <input className="editButton" type="submit" />
                                        </form>
                                        <Errors errors={errors} />
                                    </>
                                ) : (
                                    <></>
                                )}

                            </div>
                        )
                    }
                </>
            </ReactModal>

        </>
    )
}

export default RecipeCard;