import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"

import Errors from "./Errors";

import { UserContext } from './App';

function LoginForm() {
  const { setUser, setLoading } = useContext(UserContext)

  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
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
        })
    }
    });
  }

  return (
    <div className="loginForm">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <button className="editButton" type="submit">Login</button>
      </form> 
      <Errors errors={errors}/>
    </div>
  );
}

export default LoginForm;