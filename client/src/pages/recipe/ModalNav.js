import React from "react";

function ModalNav({ closeModalHandler, handlePage }) {

    return (

        <>
            <button className="closeButton" onClick={closeModalHandler}>Close</button>
            <br></br>
            <br></br>
            <br></br>
            <div className="modalNav">
                <button className="editButton" onClick={() => handlePage("recipe")}>Recipe</button>
                <button className="editButton" onClick={() => handlePage("steps")}>Steps</button>
                <button className="editButton" onClick={() => handlePage("reviews")}>Reviews</button>

            </div>
        </>

    )
}

export default ModalNav;