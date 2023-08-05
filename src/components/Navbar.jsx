// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Navbar.css";
// import LOGO from "../assets/LOGO.png";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { authActions } from "../redux/store";

// function Navbar() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   // global state
//   const isLogin = useSelector((state) => state.auth.isLogin); // Access isLogin from the auth slice
//   console.log(isLogin);

//   const handleLogout = () => {
//     try {
//       dispatch(authActions.logout());
//       alert(`user Logout successfull!`);
//       navigate("/");
//     } catch (err) {
//       console.log(`error while logging out user, error : ${err}`);
//     }
//   };

//   return (
//     <div className="navbar">
//       <div className="container">
//         <img src={LOGO} alt="logo" className="logo" />

//         {!isLogin && (
//           <>
//             <div className="authLinks">
//               <Link to="/">Login</Link>
//               <Link to="/register">Register</Link>
//             </div>
//           </>
//         )}

//         {isLogin && (
//           <>
//             <div className="links">
//               <Link to="/home">Home</Link>
//               <Link to="/userblogs">My Blogs</Link>
//               <Link to="/createblog">Create Blog</Link>
//               <Link to="" onClick={() => handleLogout()}>
//                 Logout
//               </Link>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import LOGO from "../assets/LOGO.png";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";

function Navbar() {
  // global state
  let isLogin = useSelector((state) => state.auth.isLogin);
  // console.log(isLogin);

  isLogin = isLogin || localStorage.getItem("userId");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      localStorage.removeItem("userId");
      alert(`user Logout successful!`);
      navigate("/");
    } catch (err) {
      console.log(`error while logging out user, error : ${err}`);
    }
  };

  // State variable to control mobile menu visibility
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuVisible((prev) => !prev);
  };

  return (
    <div className="navbar">
      <div className="container">
        <img src={LOGO} alt="logo" className="logo" />
        <button className="hamburger" onClick={toggleMobileMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
        <div className={`links ${mobileMenuVisible ? "mobile-menu" : ""}`}>
          {isLogin ? (
            <>
              <Link to="/home">Home</Link>
              <Link to="/userblogs">My Blogs</Link>
              <Link to="/createblog">Create Blog</Link>
              <Link to="" onClick={() => handleLogout()}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
