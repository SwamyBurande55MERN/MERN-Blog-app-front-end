import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/store.js";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://mern-blog-app-redux-toolkit.onrender.com/api/v1/userauth/user-login`,
        { email, password }
      );
      if (response.data.success) {
        localStorage.setItem("userId", response.data.loggedUser._id);
        // console.log(`user login successfull`);
        dispatch(authActions.login());
        navigate("/home");
      } else {
        console.log("Validation error:", response.data.error);
        setErrorMessage(response.data.error);
      }
    } catch (err) {
      if (err.response) {
        console.log("Error Response Data:", err.response.data);
        setErrorMessage(err.response.data.error);
      } else {
        console.log("Error:", err.message);
        setErrorMessage(`An error occured. Please try again later`);
      }
      console.log(`Error while calling login API: ${err}`);
    }
  };

  return (
    <>
      <div className="maincontainer">
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

        <div className="inputContainer">
          <h1> Welcome to Login </h1>
          <form onSubmit={handleSubmit}>
            <div className="inpt">
              <input
                placeholder="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="inpt">
              <input
                placeholder="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>

          <p className="bottomText">
            don't have an account?{" "}
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "red" }}
            >
              register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
