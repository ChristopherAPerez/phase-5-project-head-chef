import React from "react";

function Errors({ errors }) {

    const colorStyle = {
        color: "red"
    }

    return (
        <>
            {errors.map((error, index) => {
                return <p key={index} style={colorStyle}><b>{error}</b></p>
            })}
        </>
    )
}

export default Errors;