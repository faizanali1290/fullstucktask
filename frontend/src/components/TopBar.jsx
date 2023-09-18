import React, { memo, useState } from "react";
import { NavLink } from "react-router-dom";

import "../../src/Stylesheets/Topbar.css";
const TopBar = () => {
  const [showInput, setShowInput] = useState(true);
  return (
    <header>
      <nav className="topbar d-flex flex-column flex-sm-row  align-items-center justify-content-sm-between flex-column-reverse justify-content-lg-around  ">
        <div className="topbar justify-content-between ">
          <div className="serachbar">
            <form action="">
              <input
                id={`${showInput ? "showInput" : ""}`}
                type="search"
                placeholder="Serach or Type "
                className="input"
              />
            </form>
            <img
              src="./assest/icon/magnifying.png"
              id="TopBarSerachIcon"
              alt="loding fail"
              onClick={() => {
                setShowInput(!showInput);
              }}
            />
          </div>
          <div className="userprofile">
            <NavLink to="setting_notification">
              <img
                src="./assest/icon/notification.png"
                className="alert"
                alt="loading fail"
              />
            </NavLink>
            <NavLink to="/setting_detail">
              <img src="./assest/icon/profile.png" alt="loading fail" />
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default memo(TopBar);
