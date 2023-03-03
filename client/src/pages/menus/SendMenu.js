import React, { useContext  } from "react";

import { PublishContext } from "../../components/App";

function SendMenu( { phoneNumber, setPhoneNumber, sendMenu } ) {

    const { setUnPublishRecipes, setUnpublishMenuToRecipes } = useContext(PublishContext)

    function clearRecipe() {
        fetch(`/clear_menu`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                setUnPublishRecipes([])
                setUnpublishMenuToRecipes([])
            } else {
                r.json().then((err) => {
                    alert(err.error)
                })
            }
        });
    }

    return (
        <>
            <br></br>
            <button className="button" onClick={clearRecipe}>Clear Menu</button><br></br>
            <label><b>Phone Number: </b></label>
            <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button className="button" onClick={sendMenu}>Send Menu</button>
        </>
    );
}

export default SendMenu;