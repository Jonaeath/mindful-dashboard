import { useState } from "react";

const Signup = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
            <div className="form-control mt-6">
              <button className="btn btn-success uppercase bg-lime-500">
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
