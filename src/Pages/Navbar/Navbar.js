import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <div className="container">
        <nav className="header">
          <div className="header_logo">
            <h1>Task Manager</h1>
          </div>
          <div className="header_button">
            <Link to = "/">
              <button>Home</button>
            </Link>
            <button>Login</button>
            <button>SignUp</button>
          </div>
        </nav>
      </div>
  );
};

export default Navbar;
