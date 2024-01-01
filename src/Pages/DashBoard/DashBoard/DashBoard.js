import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DashBoard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  const handelDelete = (id) => {};
  return (
    <div>
      <div className="d-flex mx-5 mt-6 bg-blue-100">
        <div className="rounded p-3">
          <h2>Admin Rule</h2>
          <Link to="/createUser">
            <button className="btn btn-success btn-sm uppercase mr-2 bg-lime-500">
              Add New User +
            </button>
          </Link>
          <div className="d-flex justify-content-end mb-3"></div>
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Edit | Delete</th>
              </tr>
            </thead>
            <tbody>
              {data?.length > 0 &&
                data?.map((users, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{users.name}</td>
                      <td>{users.email}</td>
                      <td>{users.phoneNumber}</td>
                      <td>
                          
                            <Link to={`/userDetails/${users._id}`}>
                              <button className="btn btn-success btn-sm uppercase mr-2 bg-lime-500">
                                Details
                              </button>
                            </Link>
                            <Link to={`/edit/${users.id}`}>
                              <button className="btn btn-success btn-sm uppercase mr-2 bg-lime-500">
                                Edit
                              </button>
                            </Link>
                            <button
                              onClick={() => handelDelete(users.id)}
                              className="btn btn-success btn-sm uppercase bg-lime-500"
                            >
                              Delete
                            </button>
                
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
