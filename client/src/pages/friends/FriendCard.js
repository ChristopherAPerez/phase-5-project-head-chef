import React from 'react';

function FriendsCard({ friend, setMenu, setRecipes, setErrors }) {

    function resetErrors() {
        setErrors([])
    }

    function handleClick() {
        fetch(`/friend_last_menu/${friend.id}`).then((r) => {
            if (r.ok) {
                r.json().then((menu) => {
                    setMenu(menu)
                    setRecipes(menu.recipes)
                })
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

    return (
        <>
            <tr>
                <td className='friendTabletd' onClick={handleClick}>
                    <span><b>{friend.username}</b></span>
                </td>
            </tr>
        </>
    )
}

export default FriendsCard;