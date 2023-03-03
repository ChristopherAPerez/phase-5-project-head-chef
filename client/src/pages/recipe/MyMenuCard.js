import React from "react";

function MyMenuCard({ menu }) {

    return (
        <>
            <tr>
                <td className="myRecipeMenusTabletd" >{menu.user.username} {menu.menu_date}</td>
            </tr>
        </>
    )
}

export default MyMenuCard;