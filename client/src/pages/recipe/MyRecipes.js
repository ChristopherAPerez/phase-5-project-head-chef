import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"

import RecipeBar from "./RecipeBar";
import MyRecipeCard from './MyRecipeCard';
import MyMenuCard from "./MyMenuCard";

import { UserContext } from '../../components/App';

function MyRecipes() {
    const navigate = useNavigate()

    const { myRecipes } = useContext(UserContext)

    const [page, setPage] = useState("")
    const [myRecipesMenus, setMyRecipesMenus] = useState([])
    

    const length = myRecipesMenus.length

    return (
        <>
            <RecipeBar />
            <div className='myRecipeContainer'>
                <table className='friendTable'>
                    <tbody>
                        <tr >
                            <td>
                                <b>My Recipes</b>
                            </td>
                        </tr>
                        {myRecipes.map((recipe) => {
                            return <MyRecipeCard key={recipe.id} recipe={recipe} setPage={setPage} setMyRecipesMenus={setMyRecipesMenus} />
                        })}
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr >
                            <td>
                                <b>List of Menus</b><br></br>
                                {page === 'menu' ? <span>Your Recipe shows up <b>{length}</b> time in menus</span> : <></>}
                            </td>
                        </tr>
                    </tbody>
                </table>
                {
                    page === "menu" ?
                        <div className="listofMenus">
                            <table>
                                <tbody>
                                    {
                                        page === "menu" ?
                                            <>
                                                {myRecipesMenus.map((menu) => {
                                                    const id = menu.id * Math.random()
                                                    return <MyMenuCard key={id} menu={menu}/>
                                                })}
                                            </>
                                            :
                                            <></>
                                    }
                                </tbody>
                            </table>
                        </div>
                        :
                        <></>
                }
            </div>
        </>
    )
}

export default MyRecipes;