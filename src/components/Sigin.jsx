import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import email from "../assets/email.svg";

const Sigin = () => {
  return (
    <>
      <div className="Sigin">
        <div className="Sigin-info">
          <div className="Sigin-title">Sign Up to Our Newsletter</div>
          <div className="Sigin-paragrf mt-1 mb-4"> Yours could be one of them. </div>
          <div className="input-title">
            
            <div className="Sigin-input">
            <div className="Sigin-imges mt-28">
              {" "}
              <img src={email} alt="sigin-img" />{" "}
            </div>
              {" "}
              <input
                type="input"
                placeholder=" Enter Your Email"
                className="Sigin-inputs form-control"
              />
              {" "}
              <div className="Sigin-Btns">
              {" "}
              <button className="Sigin-Btn"> Send </button>{" "}
            </div>
            </div>
            
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Sigin;
