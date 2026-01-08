import { useNavigate } from "react-router-dom"

function Setting(){
    const navigate = useNavigate();

    return (
        <>
        <div><h1>Setting</h1></div>
        <button onClick={() => navigate('/')}>
            Back to Home 
        </button>
        </>
    )
}

export default Setting;