import { useNavigate } from "react-router-dom"

function Profile(){
    const navigate = useNavigate();
    let name = "Suyog";
    let highscore = 999;

    return (
        <>
        <div><h1>Profile</h1></div>
        <h2>Name : {name}</h2>
        <h2>Highscore : {highscore}</h2>
        <button onClick={() => navigate('/')}>
            Back to Home 
        </button>
        </>
    )
}

export default Profile;