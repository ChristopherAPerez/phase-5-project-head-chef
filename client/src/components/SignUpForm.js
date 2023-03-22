import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"

import Errors from "./Errors";

import { UserContext } from './App';

function SignUpForm() {
    const { setUser, setLoading } = useContext(UserContext)

    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
                bio: "",
                profile_pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJQxsk8FXtaFHxBhj0fD0VQSLWLy5ZQ2gZEg&usqp=CAU"
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    setUser(user)
                    setTimeout(() => {
                        window.location.reload();
                    }, 1500);
                    setTimeout(() => {
                        setLoading(false)
                    }, 3000);
                    navigate("/")
                })
            } else {
                r.json().then((err) => {
                    setErrors(err.errors)
                    setUsername("")
                    setPassword("")
                    setPasswordConfirmation("")
                })
            }
        });
    }

    return (
        <div className="signupForm">
            <form onSubmit={handleSubmit}>
                <h1>Sign Up: </h1>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br></br>
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                />
                <br></br>
                <label htmlFor="password">Password Confirmation: </label>
                <input
                    type="password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    autoComplete="current-password"
                />
                <button className="editButton" type="submit">Sign Up</button>
            </form>
            <Errors errors={errors} />
        </div>
    );
}

export default SignUpForm;