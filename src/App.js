import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup/Signup";
import Navbar from "./Pages/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import DashBoard from "./Pages/DashBoard/DashBoard/DashBoard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<DashBoard/>} />        
      </Routes>
    </Router>
  );
}

export default App;
