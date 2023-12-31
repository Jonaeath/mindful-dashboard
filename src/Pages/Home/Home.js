import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
    <Link to="/signup">
      <button className="btn btn-success text-xl uppercase bg-lime-500">
        Mindful Gurukul Dashboard
      </button>
    </Link>
  </div>
  );
};

export default Home;
