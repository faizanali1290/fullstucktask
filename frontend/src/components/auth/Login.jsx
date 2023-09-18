import React, { memo, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login";
import { NavLink } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "../../Stylesheets/Auth.css";

const Login = () => {
  const [isEmailExist, setisEmailExist] = useState(null);
  const [checkPassword, setCheckpassword] = useState(null);

  const Dashboard = useNavigate();
  const cookie = new Cookies();
  const googleLogin = useGoogleLogin({
    auto_select: true,
    scope:"email profile",
    
    onSuccess: (tokenResponse) => {
      // const { profileObj } = tokenResponse;
      console.log(tokenResponse)
     
      
  
      axios
        .post("http://localhost:9000/v1/auth/google", {
          ...tokenResponse,
          SingupType: "google",
        })
        .then((resp) => {
          cookie.set("verified", resp.data.token, {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
          });
          Dashboard("/");
          window.location.reload();
        })
        .catch((error) => {
          if (error && error?.response?.status === 400) {
            setisEmailExist(error.response.data.message);
          }
        });
    },
  });
  const facebookLogin = async (resp) => {
    axios
      .post("http://localhost:9000/v1/auth/facebook", {
        accessToken: resp.accessToken,
        // email: resp.email,
        SingupType: "facebook",
      })
      .then((resp) => {
        cookie.set("verified", resp.data.token, {
          expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        });
        Dashboard("/");
        window.location.reload();
      })
      .catch((error) => {
        if (error && error?.response?.status === 400) {
          setisEmailExist(error.response.data.message);
        }
      });
  };

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    remember: "",
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
    if (!inputValue.email.trim()) {
      error.email = "email Can not be blank";
      return error;
    } else if (!inputValue.password) {
      error.password = "password Can not be blank";
      return error;
    } else {
      loginUser.mutate();

      return error;
    }
  }

  const loginUser = useMutation(() => {
    axios
      .post("http://localhost:9000/v1/auth/login", { ...inputValue })
      .then((resp) => {
        cookie.set("verified", resp.data.token, {
          expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        });
        Dashboard("/");
        window.location.reload();
      })
      .catch((error) => {
        if (error && error?.response?.status === 400) {
          setisEmailExist(error.response.data.message);
        }
        if (error && error?.response?.status === 406) {
          setCheckpassword(error.response.data.message);
        }
      });
  });

  return (
    <div id="AuthWrapper">
      <div className="col-12 col-md-5 " id="FormWrapper">
        <div className="break">
          <h2 className="getstart align-self-md-start">Get's started.</h2>
          <div
            className="account d-flex align-self-md-start "
            style={{ gap: "7px" }}
          >
            <p>Dont't have an account ? </p>
            <NavLink to="/singup"> sign up</NavLink>
          </div>
          <div className="d-flex gap-3 flex-column flex-md-row">
            <button
              className="googlebtn btn-auth0 "
              onClick={() => googleLogin()}
            >
              <img src="./assest/icon/google.jpeg" alt="loading fail" />
              Sigin in Google
            </button>{" "}
            <FacebookLogin
              fields="name,email,picture"
              autoLoad={false}
              callback={facebookLogin}
              appId="206207125422645"
              icon={
                <img
                  className="facebooicon "
                  style={{ marginLeft: "2.2rem", width: "20px" }}
                  src="./assest/icon/facebook.png"
                  alt="loading fail"
                />
              }
              buttonStyle={{
                height: " 60px",
                borderRadius: "8px",
                padding: "18px",
                width: "268px",
                fontSize: "16px",
                textTransform: "none",
                background: "#4776D0",
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
              textButton="Sigin in Facebook"
            ></FacebookLogin>
          </div>
        </div>
        {/* or */}
        <div className="mt-4 hrParent" id="singup_or">
          <p className="hr"></p>
          <p className="text-center text-gray font-18px or">or</p>
          <p className="hr"></p>
        </div>
        {/*form  */}

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

            <small className="text-error ">
              {errorMsg?.email}
              {checkPassword}
              {isEmailExist}
            </small>
          </div>
          <div className={`d-flex flex-column password `}>
            <label htmlFor="password" className="inputlabel">
              password
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
            <small className="text-error ">
              {errorMsg?.password}
              {checkPassword}
            </small>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-sm-between remember">
            <div className="d-flex  justify-content-sm-center align-items-center gap-3 ">
              <input
                className="shadow"
                id="remeber"
                type="checkbox"
                name="remember"
                onChange={inputHandler}
              />{" "}
              <label htmlFor="remeber">Remember Me</label>
            </div>
            <NavLink to="/reset_password" className="align-self-center">
              Forget your password?
            </NavLink>
          </div>

          <input className="submit" type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default memo(Login);
