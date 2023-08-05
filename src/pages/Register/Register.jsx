import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://mern-blog-app-redux-toolkit.onrender.com/api/v1/userauth/user-register",
        { username, email, password }
      );

      if (response.data.success) {
        console.log("User registration successful");
        navigate("/");
      } else {
        console.log("Validation Error:", response.data.error);
        setErrorMessage(response.data.error); // Set the error message state
      }
    } catch (err) {
      if (err.response) {
        console.log("Error Response Data:", err.response.data);
        setErrorMessage(err.response.data.error); // Set the error message state from the response
      } else {
        console.log("Error:", err.message);
        setErrorMessage("An error occurred. Please try again later.");
      }
    }
  };
  return (
    <>
      <div className="maincontainer">
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

        <div className="inputContainer">
          <h1>Welcome to Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="inpt">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Update the individual state for each input
                required
              />
            </div>
            <div className="inpt">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update the individual state for each input
                required
              />
            </div>
            <div className="inpt">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update the individual state for each input
                required
              />
            </div>
            <button type="submit">Register</button>
          </form>
          <p className="bottomText">
            Already have an account?{" "}
            <Link to="/" style={{ textDecoration: "none", color: "red" }}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
