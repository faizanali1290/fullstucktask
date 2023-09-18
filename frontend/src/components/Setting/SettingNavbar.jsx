import React, { memo } from "react";
import { NavLink } from "react-router-dom";

const SettingNavbar = () => {
  return (
    <div style={{marginTop: "55px" }}>
      <nav>
        <h2>Settings</h2>
        <ul className="settingNavbar">
          <li>
            {" "}
            {/* <NavLink to={"detail"}>My Details</NavLink>{" "} */}
            <NavLink to={"/setting_detail"}>My Details</NavLink>{" "}
          </li>
          <li>
            {" "}
            {/* <NavLink to={"userprofile"}>Profile</NavLink>{" "} */}
            <NavLink to={"/setting_Edit_Profile"}>Edit Profile</NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to={"/setting_password"}>Password</NavLink>{" "}
            {/* <NavLink to={"password"}>Password</NavLink>{" "} */}
          </li>
          <li>
            {" "}
            <NavLink to={"/setting_email"}>Email</NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to={"/setting_notification"}>Notification</NavLink>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default memo(SettingNavbar);
