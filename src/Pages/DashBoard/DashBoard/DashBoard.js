import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchForm from "../../SearchForm/SearchForm";

const DashBoard = () => {
  const [data, setData] = useState([]);
  const [isDataChanged, setIsDataChanged] = useState(false)
 
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, [isDataChanged]);

  const handelDelete = (id) => {
    const proceed = window.confirm('Are you sure you want to delete this user?');
    if (proceed) {
      fetch(`http://localhost:4000/delete/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.success) {
            alert('User deleted successfully.');
          } else {
            alert('Failed to delete user: ' + data.message);
          }
        })
        .catch((err) => console.error(err)).finally(()=> setIsDataChanged(!isDataChanged))
    }
  };
   
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
          {/* Search Form */}
          <SearchForm setData={setData} setIsDataChanged={setIsDataChanged} isDataChanged={isDataChanged}/>
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
                            <Link to={`/editUser/${users._id}`}>
                              <button className="btn btn-success btn-sm uppercase mr-2 bg-lime-500">
                                Edit
                              </button>
                            </Link>
                            <button
                              onClick={() => handelDelete(users._id)}
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
