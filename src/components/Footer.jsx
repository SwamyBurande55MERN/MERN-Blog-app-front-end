import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="connectus">
          <div className="linkedin">
            <a
              id="linkedin"
              href="https://www.linkedin.com/in/swamy-burande-4649a5195"
              target="_blank"
              style={{ color: "white", fontSize: "20px" }}
            >
              Linked-In : Swamy Burande
            </a>
          </div>
          <div>
            <a
              href="https://mail.google.com/"
              target="_blank"
              style={{ color: "white", fontSize: "20px" }}
              className="dissappera"
            >
              Mail us : swamyburande55@gmail.com
            </a>
          </div>
          <div>
            <a
              href=""
              target="_blank"
              style={{ color: "white", fontSize: "18px" }}
              className="dissappera"
            >
              Call us : +91 9370954975
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
