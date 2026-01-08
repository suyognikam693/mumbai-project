import Play from "./Play";
import Setting from "./Setting";
import Home from "./Home";
import Streetviewmode from "./Streetviewmode";
import Touristplacesmode from "./Touristplacesmode";
import Leaderboard from "./Leaderboard";
import Profile from "./Profile";
import { Route,Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/play" element={<Play/>} />
        <Route path="/play/streetviewmode" element={<Streetviewmode/>} />
        <Route path="/play/touristplacesmode" element={<Touristplacesmode/>} />
        <Route path="/leaderboard" element={<Leaderboard/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/setting" element={<Setting/>} />
      </Routes>
    </div>
  )
}

export default App
