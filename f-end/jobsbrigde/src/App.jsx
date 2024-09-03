import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import Input from "./input";
import './App.css';
import LogIn from "./logIn";
import Profile from "./profile";
import FindJobs from "./findJobs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/FindJobs" element={<FindJobs />} /> {/* Corrected path */}
      </Routes>
    </Router>
  );
}

export default App;
