import React, { memo, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login";
import { NavLink } from "react-router-dom";

import "../../Stylesheets/Auth.css";

const ChangePassword = () => {
  const [inputValue, setInputValue] = useState({
    password: "",
    cpassword: "",
  });
  const [errorMsg, setErrorMsg] = useState({});
  const [hidepass, showpas] = useState(false);
  const showPassword = () => {
    showpas(!hidepass);
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;

    setInputValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const validateForm = (e) => {
    e.preventDefault();
    setErrorMsg(CheckInputField(inputValue));
  };
  function CheckInputField(inputValue) {
    const error = {};
    if (!inputValue.password) {
      error.password = "password Can not be blank";
      return error;
    } else if (!inputValue.cpassword) {
      error.cpassword = "email Can not be blank";
      return error;
    } else if (inputValue.password != inputValue.cpassword) {
      error.password = "password is not match";
      error.cpassword = "password is not match";
      return error;
    } else {
      postUserInfo();
      return error;
    }
  }
  function postUserInfo() {
    alert("a");
  }
  return (
    <div id="AuthWrapper">
      <div className="col-12 col-md-5 " id="FormWrapper">
        <form action="" onSubmit={validateForm}>
          <div className={`d-flex flex-column password `}>
            <label htmlFor="password" className="inputlabel">
              New Password
            </label>
            <input
              className={`${errorMsg?.password ? "errorMsg" : ""} input shdow ${
                hidepass ? "showpass" : "hidepas"
              } `}
              placeholder="**********"
              type="text"
              id="password"
              name="password"
              onChange={inputHandler}
            />
            {hidepass ? (
              <img src="./assest/icon/eye.png" onClick={showPassword} alt="0" />
            ) : (
              <img
                className="hideeye"
                src="./assest/icon/hideeye.png"
                onClick={showPassword}
                alt="0"
              />
            )}
            <small className="text-error ">{errorMsg?.password}</small>
          </div>
          <div className={`d-flex flex-column password `}>
            <label htmlFor="cpassword" className="inputlabel">
              Conforim Password
            </label>
            <input
              className={`${
                errorMsg?.cpassword ? "errorMsg" : ""
              } input shdow ${hidepass ? "showpass" : "hidepas"} `}
              placeholder="**********"
              type="text"
              id="cpassword"
              name="cpassword"
              onChange={inputHandler}
            />

            <small className="text-error ">{errorMsg?.cpassword}</small>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-sm-between remember">
            <NavLink to="/login" className="align-self-center">
              Go Back Login
            </NavLink>
          </div>

          <input className="submit" type="submit" value="Change Password" />
        </form>
      </div>
    </div>
  );
};

export default memo(ChangePassword);
