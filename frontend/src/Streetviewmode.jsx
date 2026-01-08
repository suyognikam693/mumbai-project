import { useNavigate } from "react-router-dom"

function Streetviewmode(){
    const navigate = useNavigate();
    return (
        <>
        <div><h1>Hello Streetviewmodeing</h1></div>
        <button onClick={() => navigate('/')}>
            Back to Home 
        </button>
        </>
    )
}

export default Streetviewmode;