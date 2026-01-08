import { useNavigate } from "react-router-dom"

function Touristplacesmode(){
    const navigate = useNavigate();
    return (
        <>
        <div><h1>Hello Touristplacesmodeing</h1></div>
        <button onClick={() => navigate('/')}>
            Back to Home 
        </button>
        </>
    )
}

export default Touristplacesmode;