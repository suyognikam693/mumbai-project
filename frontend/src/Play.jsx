import { useNavigate } from "react-router-dom"

function Play(){
    const navigate = useNavigate();
    return (
        <>
        <div><h1>Playing</h1></div>
        <button onClick={() => navigate('/play/streetviewmode')}>
            Go to play Street View
        </button>
        <button onClick={() => navigate('/play/touristplacesmode')}>
            Go to Tourist Places
        </button>
        <button onClick={() => navigate('/')}>
            Back to Home 
        </button>
        </>

    )
}

export default Play;