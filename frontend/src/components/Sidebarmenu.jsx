import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "../Stylesheets/SidebarMenu.css";
const Sidebarmenu = () => {
  const [istoogle, setToogle] = useState(true);
  return (
    <nav className="sidebarmenu">
      <div id="logo">
        <img src="./assest/icon/logo.png" alt="loading fail" />
        <h2>Motiv.</h2>
        <p onClick={() => setToogle(!istoogle)}>
          {istoogle ? (
            <MenuIcon id={`${istoogle ? "close" : ""}`}></MenuIcon>
          ) : (
            <CloseIcon id={`${istoogle ? "" : "close"}`}></CloseIcon>
          )}
        </p>
      </div>
    </nav>
  );
};

export default Sidebarmenu;
