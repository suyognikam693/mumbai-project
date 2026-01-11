import { useNavigate } from "react-router-dom"
import { useState } from "react";
function Signup({setIsRegistered}){
    const navigate = useNavigate();
    function handleClick(){
        setIsRegistered(true);
        navigate("/");
    }
    return (
        <>
        <div><h1>Signup Page</h1></div>
        <label>Enter Username</label>
        <br/>
        <input name = "Username"/>
        <br />
        <label>Create Password</label>
        <br />
        <input type="password" name="password" />
        <br />
        <label>ReEnter Password</label>
        <br />
        <input type="password" name="password" />
        <br />
        <button onClick={handleClick}>
            Sign Up
        </button>
        <button onClick={() => navigate('/')}>
            Back to Home 
        </button>
        </>
    )
}

export default Signup;