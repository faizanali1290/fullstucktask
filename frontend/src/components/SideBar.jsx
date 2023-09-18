import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TimeToLeave } from "@material-ui/icons";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "../Stylesheets/Sidebar.css";
import { Cookies } from "react-cookie";

const SideBar = () => {
  const [istoogle, setToogle] = useState(true);
  const logoutUser = () => {
    const cookie = new Cookies();
    cookie.remove("verified");

    window.location.reload();
  };
  return (
    <nav className="">
      <div id="logowraper">
        <div id="logo" style={{ zIndex: "23" }}>
          <img src="./assest/icon/logo.png" alt="loading fail" />
          <h2>Motiv.</h2>
          <div className="d-block d-md-none">
            <p
              style={{ display: "inline" }}
              onClick={() => setToogle(!istoogle)}
            >
              {istoogle ? (
                <MenuIcon id={`${istoogle ? "close" : ""}`}></MenuIcon>
              ) : (
                <CloseIcon id={`${istoogle ? "" : "close"}`}></CloseIcon>
              )}
            </p>
          </div>
        </div>
      </div>
      <ul
        id={`${istoogle ? "show" : "hide"}`}
        className="sidebar d-flex flex-column"
      >
        <li>
          <NavLink to={"/"}>
            <GridViewOutlinedIcon></GridViewOutlinedIcon>
            <h2>Dashboard</h2>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/Assest_1"}>
            <AccountCircleIcon></AccountCircleIcon>
            <h2>Assests</h2>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/booking"}>
            <TimeToLeave id="ui"></TimeToLeave>
            <h2>Booking</h2>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/sellcars"}>
            <ShoppingBagOutlinedIcon></ShoppingBagOutlinedIcon>
            <h2>Sells Cars</h2>
          </NavLink>
        </li>
        {/* <li>
          <NavLink to={"/buycars"}>
            <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
            <h2>Buy Cars</h2>
          </NavLink>
        </li> */}
        <li>
          <NavLink to={"/services"}>
            <ContentCutOutlinedIcon></ContentCutOutlinedIcon>
            <h2>Services</h2>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/calender"}>
            <EventNoteOutlinedIcon></EventNoteOutlinedIcon>
            <h2>Calender</h2>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/message"}>
            <ChatOutlinedIcon></ChatOutlinedIcon>
            <h2>message</h2>
          </NavLink>
        </li>
        <li className="sidebarbotom">
          <NavLink to={"/setting_detail"} className="setting">
            <SettingsOutlinedIcon></SettingsOutlinedIcon> <h2>Setting</h2>
          </NavLink>
        </li>
        <li onClick={logoutUser}>
          <NavLink to={"/login"} className="logout">
            <ExitToAppOutlinedIcon></ExitToAppOutlinedIcon>
            <h2>Log out</h2>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
