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
  }, []);

  return (
    <div>
      <div>
        <div className="d-flex mx-5 bg-primary">
          <div className="rounded text-white p-3">
            <h2 className="bg-white text-black">User Details</h2>
            <h1>{users.length}</h1>
            <h2>{users.name}</h2>
            <h2>{users.email}</h2>
            <Link to="/">
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
