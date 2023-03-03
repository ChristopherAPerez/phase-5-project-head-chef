import React from "react";

function AddSteps({ step, setStep, steps, setSteps }) {

    function addStep(e) {
        e.preventDefault();
        setSteps([...steps, step])
        setStep("")
    }

    return (
        <>
            <div className="addStep">
                {step === '' ? <button className="button" type="button" >Add Step</button> : <button className="button" type="button" onClick={addStep}>Add Step</button>}
                <textarea
                    className="stepInput"
                    type="text"
                    value={step}
                    onChange={(e) => setStep(e.target.value)}
                    rows="3"
                    cols="45"
                />
                {steps.map((step, index) => {
                    return <p key={index + 1}><b>Step {index + 1}.</b> {step}</p>
                })}
            </div>
        </>
    )
}

export default AddSteps;