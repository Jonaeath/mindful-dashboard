import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup/Signup';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup/>}/> 
      </Routes>

    </Router>
  );
}

export default App;
