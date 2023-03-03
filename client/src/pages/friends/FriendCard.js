import React from 'react';

function FriendsCard({ friend, setMenu, setRecipes, setErrors }) {
<<<<<<< HEAD
=======

    function resetErrors() {
        setErrors([])
    }
>>>>>>> b42528944426a688545b343c8f13f4be738bda5a

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
<<<<<<< HEAD
=======
                    setTimeout(() => {
                        resetErrors()
                      }, 2500);
>>>>>>> b42528944426a688545b343c8f13f4be738bda5a
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