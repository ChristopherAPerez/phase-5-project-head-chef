import React from "react";

function Errors({ errors }) {

    const colorStyle = {
        color: "red"
    }

    return (
        <>
            {errors.map((error) => {
                return <>
                    <br></br>
                    <p style={colorStyle}><b>{error}</b></p>
                    <br></br>
                    <br></br>
                </>
            })}
        </>
    )
}

export default Errors;