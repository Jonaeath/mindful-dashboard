import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const { login } = useContext(authContext);

  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user) {
          alert("Your Login Complete Successfully");
          form.reset();
        }
      })
      .catch((err) => {
        console.error(err.code, err.message);
      });
  };

  return (
    <div className="hero min-h-screen mt-1 bg-base-200">
      <div className="card flex-shrink-0 w-4/12 shadow-2xl bg-base-100">
        <form onSubmit={handelLogin} className="card-body">
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
            />
            <label className="label">
              <Link href="#" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="text-center">
            <Link to='/dashboard'>
            <button className="btn btn-success uppercase w-1/2 bg-lime-500">
              Sign IN
            </button>
            </Link>
          </div>
        </form>
        <div className="text-center pb-2">
        <progress className="progress w-3/4"></progress>

        </div>
        <div className="text-center pb-6">
          <Link to = '/signup'>
            <button className="btn btn-outline btn-success uppercase">
              For Registration! Click
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
