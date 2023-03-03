import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom"

import FriendCard from './FriendCard';
import Errors from './Errors';
import MenuCard from './MenuCard';


import { UserContext } from '../../components/App';


function Friends() {

    const navigate = useNavigate()

    const { friends } = useContext(UserContext)

    const [menu, setMenu] = useState(null)
    const [recipes, setRecipes] = useState([])
    const [errors, setErrors] = useState([])

    function handleMainMenu() {
        navigate("/")
    }

    return (
        <>
            <br></br>
            <button className="button" onClick={handleMainMenu}>Main Menu</button>
            <br></br>
            <br></br>
            <div className='friendContainer'>
                <table className='friendTable'>
                    <tbody>
                        <tr >
                            <td>
                                <b>Friends</b>
                            </td>
                        </tr>
                        {friends.map((friend) => {
                            return <FriendCard
                                key={friend.id}
                                friend={friend}
                                setMenu={setMenu}
                                setRecipes={setRecipes}
                                setErrors={setErrors}
                            />
                        })}
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr >
                            <td>
                                <b>Latest Menu Post</b>
                            </td>
                        </tr>
                        <tr >
                            <td>
                                <Errors errors={errors}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {
                    menu ?
                        <table className='friendMenuTable'>
                            <tbody>
                                {
                                    menu ?
                                        <>
                                            <MenuCard recipes={recipes} />
                                        </>
                                        :
                                        <></>
                                }
                            </tbody>
                        </table>
                        :
                        <></>
                }

            </div>
        </>
    )
}

export default Friends;