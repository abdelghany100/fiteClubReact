import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";
const Join = () => {
  return (
    <div>
      <div className="Join" id="Join-us">
        <div className="left-j">
          <hr />
          <div>
            <span className="stroke-text">READY TO </span>
            <span>LEVEL UP</span>
          </div>
          <div>
            <span>YOUR BODY</span>
            <span className="stroke-text"> WITH US?</span>
          </div>
        </div>
        <div className="right-j">
          <form className="email-container">
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email addres"
            />
            <button className="btn btn-j">Join Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;
