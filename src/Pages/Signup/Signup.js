import React,{ useContext, useState } from "react";
import { authContext } from "../../Context/AuthProvider/AuthProvider";

const Signup = () => {

const {createUser} = useContext(authContext)

  const [values, setValues] = useState({
    name: "",
    email: "",
    gender:"",
    phoneNumber:"",
    heardAbout: [],
    city: "", 
    state: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    const form =  e.target;
    const {email,password, name,phoneNumber, gender,heardAbout, city,state  } = values;
    createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            if(user){
                alert('Your SignUp Complete Successfully')
                saveUser(name, email,phoneNumber, gender,heardAbout, city,state);
                form.reset()
                setValues({
                  name: "",
                  email: "",
                  gender: "",
                  phoneNumber: "",
                  heardAbout: [],
                  city: "",
                  state: "",
                }); 
            }
        })
        .catch(err => console.error(err))
}
// Function for send data Database
const saveUser = (name,email,phoneNumber, gender,heardAbout, city,state) =>{
  const user = {name, email ,phoneNumber, gender,heardAbout, city,state};
  fetch('http://localhost:4000/users',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(user)
    }) 
    .then(res => res.json())
  .then(data => {
    console.log(data)
  })      
  };

  const toggleCheckbox = (arr, value) => {
    if (arr.includes(value)) {
      return arr.filter((item) => item !== value);
    } else {
      return [...arr, value];
    }
  };

  const citiesToStates = {
    Mumbai: "Maharashtra",
    Pune: "Maharashtra",
    Ahmedabad: "Gujarat",
    // Add more city-state mappings as needed
  };

  const handleCityChange = (city) => {
    setValues({ ...values, city, state: citiesToStates[city] || "" });
  };

  return (
    <div>
      <div className="hero min-h-screen mt-1 bg-base-200">
        <div className="card flex-shrink-0 w-4/12 shadow-2xl bg-base-100">
          <form onSubmit={handelSubmit} className="card-body">
            <h1 className="text-center uppercase text-xl">Registration</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="phoneNumber"
                name="phoneNumber"
                placeholder="phoneNumber"
                className="input input-bordered"
                required
                onChange={(e) =>
                  setValues({ ...values, phoneNumber: e.target.value })
                }
              />
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
            </div>
            </div>
            <div className="">
              <span className="label">Gender</span>
              <label className="radio mr-3 p-1.5">
                <input
                  type="radio"
                  value="Male"
                  checked={values.gender === "Male"}
                  onChange={(e) =>
                    setValues({ ...values, gender: e.target.value })
                  }
                />
                <span className="label-text ml-1">Male</span>
              </label>
              <label className="radio mr-3 p-1.5">
                <input
                  type="radio"
                  value="Female"
                  checked={values.gender === "Female"}
                  onChange={(e) =>
                    setValues({ ...values, gender: e.target.value })
                  }
                />
                <span className="label-text ml-1">Female</span>
              </label>
              <label className="radio p-1.5">
                <input
                  type="radio"
                  value="Others"
                  checked={values.gender === "Others"}
                  onChange={(e) =>
                    setValues({ ...values, gender: e.target.value })
                  }
                />
                <span className="label-text ml-1">Others</span>
              </label>
            </div>
            <div className="">
              <span className="label m-2">How did you hear about this?</span>
              <label className="checkbox mr-1 p-1">
                <input
                  type="checkbox"
                  value="LinkedIn"
                  checked={values.heardAbout.includes("LinkedIn")}
                  onChange={() =>
                    setValues({
                      ...values,
                      heardAbout: toggleCheckbox(
                        values.heardAbout,
                        "LinkedIn"
                      ),
                    })
                  }
                />
                <span className="label-text ml-1">LinkedIn</span>
              </label>
              <label className="checkbox mr-1 p-1">
                <input
                  type="checkbox"
                  value="Friends"
                  checked={values.heardAbout.includes("Friends")}
                  onChange={() =>
                    setValues({
                      ...values,
                      heardAbout: toggleCheckbox(
                        values.heardAbout,
                        "Friends"
                      ),
                    })
                  }
                />
                <span className="label-text ml-1">Friends</span>
              </label>
              <label className="checkbox mr-1 p-1">
                <input
                  type="checkbox"
                  value="Job Portal"
                  checked={values.heardAbout.includes("Job Portal")}
                  onChange={() =>
                    setValues({
                      ...values,
                      heardAbout: toggleCheckbox(
                        values.heardAbout,
                        "Job Portal"
                      ),
                    })
                  }
                />
                <span className="label-text ml-1">Job Portal</span>
              </label>
              <label className="checkbox mr-1 p-1">
                <input
                  type="checkbox"
                  value="Others"
                  checked={values.heardAbout.includes("Others")}
                  onChange={() =>
                    setValues({
                      ...values,
                      heardAbout: toggleCheckbox(
                        values.heardAbout,
                        "Others"
                      ),
                    })
                  }
                />
                <span className="label-text ml-1">Others</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">City</span>
              </label>
              <select
                value={values.city}
                onChange={(e) => handleCityChange(e.target.value)}
                className="select select-bordered"
              >
                <option value="" disabled>
                  Select City
                </option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Ahmedabad">Ahmedabad</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">State</span>
              </label>
              <input
                type="text"
                value={values.state}
                onChange={(e) =>
                  setValues({ ...values, state: e.target.value })
                }
                className="input input-bordered"
                placeholder="Enter State"
              />
            </div>
            <div className="text-center mt-6">
              <button className="btn btn-success uppercase w-1/2 bg-lime-500">
                Sign UP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
