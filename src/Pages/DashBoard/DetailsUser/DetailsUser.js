import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetailsUser = () => {
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/details/${id}`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex justify-center h-screen">
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">User Details!</h2>
        <h1>{users.length}</h1>
        <h2>{users.name}</h2>
        <h2>{users.email}</h2>
        <div className="card-actions justify-end">
          <Link to="/dashboard">
            <button className="btn btn-sm btn-success">Back</button>
          </Link>
          <Link to={`/editUser/${users._id}`}>
            <button className="btn btn-sm btn-info mx-2">Edit</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default DetailsUser;
