import Play from "./Play";
import Setting from "./Setting";
import Home from "./Home";
import Streetviewmode from "./Streetviewmode";
import Touristplacesmode from "./Touristplacesmode";
import Leaderboard from "./Leaderboard";
import Signup from "./Signup";
import Login from "./Login";
import Profile from "./Profile";
import { Route,Routes } from "react-router-dom";
import { useState } from "react";
function App() {
  const [isRegistered,setIsRegistered] = useState(false);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home isRegistered = {isRegistered}/>} />
        <Route path="/play" element={<Play/>} />
        <Route path="/play/streetviewmode" element={<Streetviewmode/>} />
        <Route path="/play/touristplacesmode" element={<Touristplacesmode/>} />
        <Route path="/leaderboard" element={<Leaderboard/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/signup" element={<Signup setIsRegistered = {setIsRegistered}/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/setting" element={<Setting/>} />
      </Routes>
    </div>
  )
}

export default App
