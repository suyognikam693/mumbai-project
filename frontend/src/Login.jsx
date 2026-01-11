import { useNavigate } from "react-router-dom"

function Login(){
    const navigate = useNavigate();

    return (
        <>
        <div><h1>Login Page</h1></div>
        <label>Enter Username</label>
        <br/>
        <input name = "Username"/>
        <br />
        <label>Enter Password</label>
        <br />
        <input type="password" name="password" />
        <br />
        <button onClick={() => navigate('/signup')}>
            Don't have an accout?
        </button>
        <br />
        <button onClick={() => navigate('/')}>
            Back to Home 
        </button>
        </>
    )
}

export default Login;