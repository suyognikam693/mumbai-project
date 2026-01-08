import { useNavigate } from "react-router-dom"

function Home(){
    const navigate = useNavigate();
    return (
        <>
        <div><h1>HOME PAGE</h1></div>
        <button onClick={() => navigate('/play')}>
            Go to play
        </button>
        <button onClick={() => navigate('/leaderboard')}>
            Go to Leaderboard
        </button>
        <button onClick={() => navigate('/profile')}>
            Go to Profile
        </button>
        <button onClick={() => navigate('/setting')}>
            Go to setting
        </button>
      </>
    )
}

export default Home;