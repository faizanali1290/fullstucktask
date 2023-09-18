import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import "../../Stylesheets/Setting.css";
import SettingNavbar from "./SettingNavbar";
const ProfileUpdate = () => {
  const [isEdit, SetEdit] = useState({
    name: "",
  });
  const [inputValue, SetInputValue] = useState({
    name: "faizan ali",
    adress: "danyore",
    gender: "male",
  });
  console.log(isEdit);
  function editHandler(name, value) {
    SetEdit((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  const inputHandler = (e) => {
    const { value, name } = e.target;
    SetInputValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const Update = () => {
    alert("successfully upate");
  };
  const deleteAccount = () => {
    alert("are you sure to account del");
  };
  return (
    <section className="setting autoAdjacetContent">
      <SettingNavbar></SettingNavbar>
      <div className="profile_heading">
        <h2>Profile</h2>
        <p>UPdate your photo and personal detail here</p>
      </div>
      <hr className="userprofile_hr" />
      <form action="">
        <div className="userprofileParent">
          <div className="wraperTwoField flex-wrap flex-xl-nowrap">
            <div className="upade_field  ">
              <label htmlFor="">Live in</label>
              <HomeIcon className="homeIcon"></HomeIcon>
              <input
                name="name"
                type="text"
                disabled={isEdit?.name == 1 ? false : true}
                value={isEdit?.name == 1 ? inputValue.name : "faizan"}
                onChange={inputHandler}
              />
              <EditIcon
                className="editIcon"
                onClick={() => editHandler("name", 1)}
              ></EditIcon>
            </div>
            <div className="upade_field  ">
              <label htmlFor="">Street</label>
              <HomeIcon className="homeIcon"></HomeIcon>
              <input
                name="adress"
                type="text"
                disabled={isEdit.adress == 2 ? false : true}
                value={isEdit?.adress == 2 ? inputValue.adress : "danyoure "}
                onChange={inputHandler}
              />
              <EditIcon
                className="editIcon"
                onClick={() => editHandler("adress", 2)}
              ></EditIcon>
            </div>
          </div>
          {/*  */}
          <div className="upade_field   ">
            <label htmlFor="">Email</label>
            <EmailOutlinedIcon className="homeIcon"></EmailOutlinedIcon>
            <input
              name="email"
              type="email"
              disabled={isEdit.email == 3 ? false : true}
              value={
                isEdit?.email == 3 ? inputValue?.email : "emple@gmail.com "
              }
              onChange={inputHandler}
            />
            <EditIcon
              className="editIcon"
              onClick={() => editHandler("email", 3)}
            ></EditIcon>
          </div>
          {/*  */}
          <div className="wraperTwoField flex-wrap flex-xl-nowrap">
            <div className="upade_field  ">
              <label htmlFor="">Date Of Birth</label>
              <CakeOutlinedIcon className="homeIcon"></CakeOutlinedIcon>
              <input
                name="birth"
                type="text"
                disabled={isEdit?.birth == 4 ? false : true}
                value={isEdit?.birth == 4 ? inputValue?.Birth : "099"}
                onChange={inputHandler}
              />
              <EditIcon
                className="editIcon"
                onClick={() => editHandler("birth", 4)}
              ></EditIcon>
            </div>
            <div className="upade_field  ">
              <label htmlFor="">Gender</label>
              <HomeIcon className="homeIcon"></HomeIcon>
              <input
                name="gender"
                type="text"
                disabled={isEdit.gender == 5 ? false : true}
                value={isEdit?.gender == 5 ? inputValue?.gender : "male "}
                onChange={inputHandler}
              />
              <EditIcon
                className="editIcon"
                onClick={() => editHandler("gender", 5)}
              ></EditIcon>
            </div>
          </div>
        </div>
      </form>
      {/* userPhoto */}
      <div>
        <div className="UserProfileUpadte flex-sm-wrap flex-column align-items-center justify-content-sm-between  flex-sm-row ">
          <div className="profile_info">
            <h2>Your Photo</h2>
            <p>This will displayed on your profile</p>
          </div>
          <div className="update_userprofile">
            <img src="./assest/icon/profile.jpeg" alt="loading fail" />
            <input type="file" accept="image/*" />
          </div>
          <div className="setting_Profile_btn">
            <button onClick={deleteAccount}>Delete</button>
            <button onClick={Update}>Update</button>
          </div>
        </div>
      </div>
      {/* social media link */}

      <div className="social_media_link ">
        <h2>Social Profiles</h2>
        <div className="upade_field   ">
          <div className="d-flex flex-column ">
            <input
              name="facebook"
              type="email"
              disabled={isEdit.gender == 6 ? false : true}
              value={
                isEdit?.gender == 6
                  ? inputValue?.facebook
                  : "http://www.facebook.com/abs "
              }
              onChange={inputHandler}
            />
            <input
              name="twitter"
              type="email"
              disabled={isEdit.gender == 6 ? false : true}
              value={
                isEdit?.gender == 6
                  ? inputValue?.twitter
                  : "http://www.twitter.com/abs "
              }
              onChange={inputHandler}
            />
          </div>
          <div className=" social_media_link_btn ">
            <button>
              {" "}
              <UpgradeIcon
                className="editIconBtn"
                onClick={() => editHandler("socailmedia", 6)}
              ></UpgradeIcon>
            </button>
            <button>
              {" "}
              <EditIcon
                className="editIconBtn"
                onClick={() => editHandler("gender", 6)}
              ></EditIcon>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileUpdate;
