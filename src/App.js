import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup/Signup";
import Navbar from "./Pages/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import DashBoard from "./Pages/DashBoard/DashBoard/DashBoard";
import AddUsers from "./Pages/DashBoard/AddUser/AddUsers";
import DetailsUser from "./Pages/DashBoard/DetailsUser/DetailsUser";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<DashBoard/>} />
        <Route path="/createUser" element={<AddUsers/>} />
        <Route path="/userDetails/:id" element={<DetailsUser/>} />
      </Routes>
    </Router>
  );
}

export default App;
