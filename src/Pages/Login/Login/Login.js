import "./Login.css";
import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const {
    handleGoogleSignIn,
    handleSignIn,
    handleEmailChange,
    handlePasswordChange,
    error,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogIn = () => {
    handleGoogleSignIn().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div>
      <div className="m-md-4 m-3">
        <h1 className="text-primary m-md-4 fw-bold p-lg-3">Please, Login</h1>
      </div>
      <div className="row">
        <div className="col-md-6 mx-auto text-center">
          <img
            className="w-75 h-75 mx-auto"
            src="https://image.freepik.com/free-vector/doctor-character-background_1270-84.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6">
          <div className="signup text-center">
            <p>Login with Email & Password</p>
            <div className="signup-form bg-grey-lighter mb-5 py-5 mx-auto text-center  flex flex-col">
              <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center">
                <div className="bg-white px-6 rounded shadow-md text-black w-full">
                  <form onSubmit={handleSignIn}>
                    <input
                      onBlur={handleEmailChange}
                      type="text"
                      className="block border border-grey-light w-full p-2 rounded mb-4"
                      name="email"
                      placeholder="Email"
                      required
                    />
                    <input
                      onBlur={handlePasswordChange}
                      type="password"
                      className="block border border-grey-light w-full p-2 rounded mb-4"
                      name="password"
                      placeholder="Password"
                      required
                    />
                    <input
                      type="submit"
                      className="w-full text-center py-2 rounded bg-info text-white hover:bg-green-dark focus:outline-none my-1"
                      value="Login"
                    />
                    <div className="text-grey-dark my-3 text-danger">
                      {error}
                    </div>
                    <div className="text-grey-dark my-3 text-primary">
                      Do not have an account?
                      <Link
                        className="no-underline border-b border-blue fw-bold fst-italic text-primary"
                        to="../signup/"
                      >
                        Sign Up
                      </Link>
                    </div>
                  </form>
                  <div className="mb-3">
                    <p>Login with </p>
                    <button
                      onClick={handleGoogleLogIn}
                      className="btn btn-outline-info"
                    >
                      Google Sign In
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
