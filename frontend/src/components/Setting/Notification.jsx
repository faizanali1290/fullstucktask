import React, { useState } from "react";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import "../../Stylesheets/Notification.css";
import SettingNavbar from "./SettingNavbar";
import DeleteForeverOutlined from "@mui/icons-material/DeleteForeverOutlined";

import { NavLink } from "react-router-dom";

const Notification = () => {
  const [on, ofON] = useState(true);
  const a = [
    {
      imagePath: "assest/icon/profile.jpeg",
      message: "abc like your photo",
    },
    {
      imagePath: "assest/icon/g",
      message: "abc like your poto",
    },
  ];

  const [hidenotification, sethidenotification] = useState(a);

  function id(i) {
    const c = hidenotification.filter((a, ind) => {
      return i !== ind;
    });
    sethidenotification(c);
  }

  return (
    <div className="setting autoAdjacetContent">
      <SettingNavbar />
      <div className="notification_patent">
        <p>Allow  Notifications !</p>
        <div className="">
          {on ? (
            <ToggleOnIcon className="icon" onClick={() => ofON(false)} />
          ) : (
            <ToggleOffIcon className="icon" onClick={() => ofON(true)} />
          )}
        </div>
      </div>

      <div className="d-flex flex-column justify-content-center">
        {hidenotification.map((a, index) => {
          return (
            <div
              className="d-flex align-items-center"
              style={{ gap: "1rem", marginTop: "12px" }}
            >
              <NavLink to="/setting_detail">
                <img
                  src={a.imagePath}
                  alt="loading fail"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "322px",
                    objectFit: "cover",
                  }}
                />
              </NavLink>
              <p style={{ color: "#242731" }}>{a.message}</p>
              <DeleteForeverOutlined
                onClick={() => id(index)}
                style={{ fontSize: "2rem", color: "red" }}
              ></DeleteForeverOutlined>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notification;
