// Registration.js

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  // State variables to manage form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleRegistrationSubmit = (e) => {
    e.preventDefault();

    // Gather registration data from state
    const registrationData = { name, email, password };
    console.log("Registration Data:", registrationData);

    // Clear form inputs after submission
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col-xl-10">
          <div className="card border-0">
            <div className="card-body p-0">
              <div className="row no-gutters">
                {/* Left column with registration form */}
                <div className="col-lg-6">
                  <div className="p-5">
                    <form onSubmit={handleRegistrationSubmit}>
                      {/* Input for user's name */}
                      <div className="form-group">
                        <label htmlFor="yourName">Your name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </div>
                      {/* Input for user's email */}
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                      {/* Input for user's password */}
                      <div className="form-group mb-3">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </div>
                      {/* Registration submit button */}
                      <button type="submit" className="continue m-2">
                        Register
                      </button>
                    </form>
                    {/* Link to login page */}
                    <p className="text-muted text-center mt-3 mb-0">
                      Already have an account?
                      <Link to="/Login" className="text-primary ml-1">
                        Login
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Right column with registration welcome message */}
                <div className="col-lg-6 d-none d-lg-inline-block">
                  <div className="account-block rounded-right">
                    <div className="overlay rounded-right"></div>
                    <div className="account-testimonial">
                      <h4 className="text-white m-2">Welcome to spendWise!</h4>
                      <p className="lead text-white">
                        "Track and manage expenses effortlessly. Join now for
                        financial freedom!"
                      </p>
                      <p>- spendWise Team</p>
                    </div>
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

export default Registration;
