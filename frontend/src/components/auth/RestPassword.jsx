import React, { memo, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login";
import { NavLink } from "react-router-dom";

import "../../Stylesheets/Auth.css";

const RestPassword = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
  });
  const [errorMsg, setErrorMsg] = useState({});
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
    if (!inputValue.email.trim()) {
      error.email = "email Can not be blank";
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
          <div className="d-flex flex-column">
            <label htmlFor="email" className="inputlabel">
              Email
            </label>
            <input
              className={`${errorMsg?.email ? "errorMsg" : ""} input shdow`}
              type="email"
              id="email"
              name="email"
              onChange={inputHandler}
              placeholder="exmple@gmail.com"
            />

            <small className="text-error ">{errorMsg?.email}</small>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-sm-between remember">
            <NavLink to="/login" className="align-self-center">
              GO Back Login
            </NavLink>
          </div>

          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};


export default memo(RestPassword);
