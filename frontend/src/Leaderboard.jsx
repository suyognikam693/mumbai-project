import { useNavigate } from "react-router-dom"

function Leaderboard(){
    const navigate = useNavigate();

    return (
        <>
        <div><h1>Leaderboard</h1></div>
        <button onClick={() => navigate('/')}>
            Back to Home 
        </button>
        </>
    )
}

export default Leaderboard;