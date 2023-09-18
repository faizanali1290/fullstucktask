import React, { memo, useState } from "react";

import "../../Stylesheets/Auth.css";
import SettingNavbar from "./SettingNavbar";

const ChangePassword = () => {
  const [inputValue, setInputValue] = useState({
    password: "",
    cpassword: "",
    oldpassword: "",
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
    if (!inputValue.oldpassword) {
      error.oldpassword = "old password can be blank";
      return error;
    }
    if (!inputValue.password) {
      error.password = "password Can not be blank";
      return error;
    } else if (!inputValue.cpassword) {
      error.cpassword = "password Can not be blank";
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
    <div>
      <div className="setting autoAdjacetContent">
        <SettingNavbar />
      </div>
      <div>
        <div
          className="col-12 col-md-5 "
          id="FormWrapper"
          style={{ marginTop: "3rem", marginBottom: "3rem" }}
        >
          <form action="" onSubmit={validateForm}>
            <div className={`d-flex flex-column password `}>
              <label htmlFor="cpassword" className="inputlabel">
                Old Password
              </label>
              <input
                className={`${
                  errorMsg?.oldpassword ? "errorMsg" : ""
                } input shdow ${hidepass ? "showpass" : "hidepas"} `}
                placeholder="**********"
                type="text"
                id="oldpassword"
                name="oldpassword"
                onChange={inputHandler}
              />

              <small className="text-error ">{errorMsg?.oldpassword}</small>
            </div>
            <div className={`d-flex flex-column password `}>
              <label htmlFor="password" className="inputlabel">
                New Password
              </label>
              <input
                className={`${
                  errorMsg?.password ? "errorMsg" : ""
                } input shdow ${hidepass ? "showpass" : "hidepas"} `}
                placeholder="**********"
                type="text"
                id="password"
                name="password"
                onChange={inputHandler}
              />
              {hidepass ? (
                <img
                  src="./assest/icon/eye.png"
                  onClick={showPassword}
                  alt="0"
                />
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

            <input className="submit" type="submit" value="Change Password" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default memo(ChangePassword);
