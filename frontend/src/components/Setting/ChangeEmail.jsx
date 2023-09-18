import React, { memo, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";

import "../../Stylesheets/Auth.css";
import SettingNavbar from "./SettingNavbar";

const ChangeEmail = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
  });
  const inputHandler = (e) => {
    const { name, value } = e.target;

    setInputValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const [disbale, SetDisable] = useState(true);

  const validateForm = (e) => {
    e.preventDefault();
    alert("value can be change");
  };

  return (
    <div id="AuthWrapper">
      <div
        className="setting autoAdjacetContent "
        style={{ marginTop: "-75px" }}
      >
        <SettingNavbar />
      </div>

      <div
        className="col-12 col-md-5  "
        id="FormWrapper"
        style={{ marginTop: "3rem" }}
      >
        <form action="" onSubmit={validateForm}>
          <div className="d-flex flex-column" style={{ position: "relative" }}>
            <label htmlFor="email" className="inputlabel">
              Email
            </label>
            <EditIcon
              onClick={() => SetDisable(!disbale)}
              style={{
                position: "absolute",
                color: "color: #7c7c8d",
                fontSize: "2rem",
                position: "absolute",
                top: "62px",
                right: "9px",
              }}
            ></EditIcon>
            <input
              disabled={disbale}
              className={` input shdow`}
              type="email"
              id="email"
              name="email"
              onChange={inputHandler}
              placeholder="exmple@gmail.com"
            />
          </div>

          <input className="submit" type="submit" value="Update" />
        </form>
      </div>
    </div>
  );
};

export default ChangeEmail;
