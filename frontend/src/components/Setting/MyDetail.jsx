import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import "../../Stylesheets/Setting.css";
import SettingNavbar from "./SettingNavbar";
const ProfileUpdate = () => {
  return (
    <section className="setting autoAdjacetContent">
      <div>
        <SettingNavbar></SettingNavbar>
      </div>
      <div className="d-flex justify-content-center flex-column align-items-center">
        <img
          src="./assest/icon/profile.png"
          alt="loading fail"
          style={{
            width: "20rem",
            height: "20rem",
            objectFit: "cover",
            borderRadius: "2000px",
          }}
        />
        <h2 style={{ margin: "4rem 0" }}>Faizan Ali</h2>
      </div>
      <hr className="userprofile_hr" />
      <form action="">
        <div className="userprofileParent">
          <div className="wraperTwoField flex-wrap flex-xl-nowrap">
            <div className="upade_field  ">
              <label htmlFor="">Live in</label>
              <HomeIcon className="homeIcon"></HomeIcon>
              <input name="name" type="text" disabled />
            </div>
            <div className="upade_field  ">
              <label htmlFor="">Street</label>
              <HomeIcon className="homeIcon"></HomeIcon>
              <input name="adress" type="text" disabled />
            </div>
          </div>
          {/*  */}
          <div className="upade_field   ">
            <label htmlFor="">Stkeet</label>
            <EmailOutlinedIcon className="homeIcon"></EmailOutlinedIcon>
            <input name="email" type="email" disabled />
          </div>
          {/*  */}
          <div className="wraperTwoField flex-wrap flex-xl-nowrap">
            <div className="upade_field  ">
              <label htmlFor="">Date Of Birth</label>
              <CakeOutlinedIcon className="homeIcon"></CakeOutlinedIcon>
              <input name="birth" disabled type="text" />
            </div>
            <div className="upade_field  ">
              <label htmlFor="">Street</label>
              <HomeIcon className="homeIcon"></HomeIcon>
              <input name="gender" type="text" disabled />
            </div>
          </div>
        </div>
      </form>
      {/* userPhoto */}

      {/* social media link */}

      <h2>Social Profiles</h2>

      <div>
        <div className="userprofileParent">
          <div className="wraperTwoField flex-wrap flex-xl-nowrap">
            <div className="upade_field   ">
              <label htmlFor=""></label>
              <input
                name="facebook"
                type="text"
                value={"http://www.facebook.com/user"}
                disabled
              />
            </div>
          </div>
        </div>
        <div className="userprofileParent">
          <div className="wraperTwoField flex-wrap flex-xl-nowrap">
            <div className="upade_field   ">
              <label htmlFor="">Stkreet</label>
              <input
                name="twitter"
                type="text"
                value={"http://www.twitter.com/user"}
                disabled
              />
            </div>
          </div>
        </div>
        <div
          className="d-flex justifyContent-center"
          style={{ justifyContent: "center", margin: "5rem 0" }}
        >
          <h2>Join january 2022</h2>
        </div>
      </div>
    </section>
  );
};

export default ProfileUpdate;
