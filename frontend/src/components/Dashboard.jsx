import React from "react";
import BoltIcon from "@mui/icons-material/Bolt";
import "../Stylesheets/Dashboard.css";
import HeightIcon from "@mui/icons-material/Height";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import DashboardChart from "./DashboardChart";
import AreaChart from "./LineChart";
const Dashboard = () => {
  return (
    <div className="autoAdjacetContent dashboard">
      <div
        className=" d-flex  flex-wrap justify-content-center align-items-center "
        style={{ gap: "3rem" }}
      >
        {" "}
        <div
          className="d-flex flex-wrap "
          style={{
            background: "#A162F7",
            color: "#ffff",
            borderRadius: "20px",
          }}
        >
          <div className="dasboard-card">
            <div className="boltIcon">
              <BoltIcon></BoltIcon>
            </div>
            <h2>Energy</h2>
            <div class="progressWrapper">
              <h2 class="progressvalue">45%</h2>
              <CircularProgressbar
                value="45"
                circleRatio={0.75}
                styles={buildStyles({
                  rotation: 1 / 2 + 1 / 8,
                  strokeLinecap: "white",
                  pathColor: "#FFFFFF",
                  trailColor: "#B37EFC",
                  textColor: "#FFFFFF",
                })}
              />
            </div>
          </div>
        </div>
        {/* second card */}
        <div
          className="d-flex"
          style={{ background: "#cfcfcf", borderRadius: "20px" }}
        >
          <div className="dasboard-card">
            <HeightIcon className="icons" />
            <h2 className="dashboard_h2">Range</h2>
            <div class="progressWrapper">
              <h2 className="progressvalue">10%</h2>

              <CircularProgressbar
                value="19"
                circleRatio={0.75}
                styles={buildStyles({
                  rotation: 1 / 2 + 1 / 8,
                  strokeLinecap: "white",
                  pathColor: "#FF7E86",
                  trailColor: "#F4F5F9",
                  textColor: "black",
                })}
              />
            </div>
          </div>
        </div>
        {/*  */}
        <div
          className="d-flex"
          style={{ background: "#cfcfcf", borderRadius: "20px" }}
        >
          <div className="dasboard-card">
            {/* <HeightIcon className="icons" /> */}
            <img className="icons" src="./assest/icon/Vectorfluid.png" alt="" />

            <h2 className="dashboard_h2">Break Fluid</h2>
            <div class="progressWrapper">
              <h2 className="progressvalue">50%</h2>
              <CircularProgressbar
                value="50"
                circleRatio={0.75}
                styles={buildStyles({
                  rotation: 1 / 2 + 1 / 8,
                  strokeLinecap: "white",
                  pathColor: "#A162F7",
                  trailColor: "#F4F5F9",
                  textColor: "black",
                })}
              />
            </div>
          </div>
        </div>
        {/*  */}
        <div
          className="d-flex"
          style={{ background: "#cfcfcf", borderRadius: "20px" }}
        >
          <div className="dasboard-card">
            <img className="icons" src="./assest/icon/Vectorwear.png" alt="" />

            <h2 className="dashboard_h2">Tire Wear</h2>
            <div class="progressWrapper">
              <h2 className="progressvalue">97%</h2>

              <CircularProgressbar
                value="97"
                circleRatio={0.75}
                styles={buildStyles({
                  rotation: 1 / 2 + 1 / 8,
                  strokeLinecap: "white",
                  pathColor: "#F6CC0D",
                  trailColor: "#F4F5F9",
                  textColor: "black",
                })}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="d-flex flex-wrap justify-content-center"
        style={{ margin: "3rem 0", gap: "3rem" }}
      >
        <DashboardChart></DashboardChart>
        <AreaChart></AreaChart>
      </div>

      <div
        className="d-flex flex-wrap justify-content-center"
        style={{ gap: "3.3rem" }}
      >
        <div
          className="d-flex  flex-column recomendedcar "
          style={{ background: "#e1dfa4" }}
        >
          <div className="d-flex  " style={{ gap: "10px" }}>
            <img
              src="./assest/icon/roundarrow.png"
              style={{ width: "24px" }}
              className="recomed"
              alt="loading fail"
            />
            <h2 className="recomendmessage">64% Recommend</h2>
          </div>
          <img src="./assest/icon/recommendcar1.png" alt="" />
          <h2>Mini Copper</h2>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex " style={{ gap: "20px" }}>
              <img src="./assest/icon/squrearrow.png" alt="" />
              <h3 className="like align-self-center">32k</h3>
              <img
                src="./assest/icon/setting.png"
                style={{ width: "20px", objectFit: "contain" }}
                alt=""
              />
              <img src="./assest/icon/bolt.png" alt="" />
            </div>
            <h3 className="price">$32/h</h3>
          </div>
        </div>
        <div
          className="d-flex  flex-column recomendedcar "
          style={{ background: "#E3ECF1" }}
        >
          <div className="d-flex  " style={{ gap: "10px" }}>
            <img
              src="./assest/icon/roundarrow.png"
              style={{ width: "24px" }}
              className="recomed"
              alt="loading fail"
            />
            <h2 className="recomendmessage">64% Recommend</h2>
          </div>
          <img src="./assest/icon/recommend2.png" alt="" />
          <h2>Prosche 911 Carrrera</h2>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex " style={{ gap: "20px" }}>
              <img src="./assest/icon/squrearrow.png" alt="" />
              <h3 className="like align-self-center">130k</h3>
              <img
                src="./assest/icon/setting.png"
                style={{ width: "20px", objectFit: "contain" }}
                alt=""
              />
              <img src="./assest/icon/bolt.png" alt="" />
            </div>
            <h3 className="price">$28/h</h3>
          </div>
        </div>
        {/*  */}
        <div
          className="d-flex  flex-column recomendedcar "
          style={{ background: "#F4E3E5" }}
        >
          <div className="d-flex  " style={{ gap: "10px" }}>
            <img
              src="./assest/icon/roundarrow.png"
              style={{ width: "24px" }}
              className="recomed"
              alt="loading fail"
            />
            <h2 className="recomendmessage">64% Recommend</h2>
          </div>
          <img src="./assest/icon/recommentd3.png" alt="" />
          <h2>Prosche 911 Carrera</h2>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex " style={{ gap: "20px" }}>
              <img src="./assest/icon/squrearrow.png" alt="" />
              <h3 className="like align-self-center">230k</h3>
              <img
                src="./assest/icon/setting.png"
                style={{ width: "20px", objectFit: "contain" }}
                alt=""
              />
              <img src="./assest/icon/bolt.png" alt="" />
            </div>
            <h3 className="price">$28/h</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
