import React from "react";

function Errors({ error }) {

    const colorStyle = {
        color: "red"
    }

    return (
        <>
            <p style={colorStyle}><b>{error}</b></p>
        </>
    )
}

export default Errors;