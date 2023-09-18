import React from "react";
import SellerChartBar from "./SellerChartBar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import { TimeToLeave } from "@material-ui/icons";
import "../../Stylesheets/Seller.css";

const Seller = () => {
  return (
    <div className="autoAdjacetContent">
      <div className="sellCar">
        <h2>Sell Car</h2>
        <div
          className="d-flex flex-wrap flex-column flex-md-row align-items-center justify-content-center"
          style={{ gap: "4rem" }}
        >
          <img src="./assest/images/sellcar.png" className="sellercar" alt="" />
          <SellerChartBar className="sellerChart"></SellerChartBar>
        </div>
      </div>
      <div className="Selleroffer d-flex justify-content-center justify-content-sm-between row-gap-3 align-items-center flex-wrap flex-column flex-sm-row">
        <h2>Offers</h2>
        <div className="SellerSelect">
          <select name="" id="selerSelect1">
            <option value="new">new</option>
            <option value="old">old</option>
          </select>
          <select name="" id="selerSelect2">
            <option value="Toyata">Toyata</option>
            <option value="Jeep">Jeep</option>
            <option value="TeslaModelS">Tesla Model S</option>
          </select>
        </div>
      </div>
      {/* offer */}

      <div className="offerSection">
        <div className="offerdetail1">
          <div className="sellerDetail">
            <div>
              <h2>Killan James</h2>
              <p>
                <span>$16,505</span>
                Average Price
              </p>
            </div>
            <p>market avarage is $16,244</p>
            <ArrowForwardIcon className="arrow" />
          </div>
          {/*  */}
          <div class="sellerProgressWraper">
            <CircularProgressbar
              value="10"
              circleRatio={0.75}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 8,
                strokeLinecap: "white",
                pathColor: "#70CF97",
                trailColor: "#F2F2F2",
              })}
            />
            <h2>100%</h2>
            <h2>Excellent</h2>
            <p>Impression share</p>
          </div>
          <div className="progressCirculars ">
            <CircularProgressbar
              className="sellerCircle"
              value="80"
              // strokeWidth={5}
              circleRatio={0.75}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 8,
                // strokeLinecap: "white",
                pathColor: "#F6CC0D",
                // trailColor: "red",
              })}
            />
            <CircularProgressbar
              className="sellerCircle"
              value="90"
              strokeWidth={3}
              circleRatio={0.75}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 8,
                // strokeLinecap: "white",
                pathColor: "#FF6370",
                // trailColor: "red",
              })}
            />
            <CircularProgressbar
              strokeWidth={3}
              className="sellerCircle"
              value="100"
              circleRatio={0.75}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 8,
                pathColor: "#A162F7",
              })}
            />
          </div>
          {/* hire poration */}
          <div className="SellerModal1">
            <div className="background timeleave">
              <TimeToLeave className="sellerModalIcon" style={{marginTop:"-15px"}} fontSize="large" />
            </div>
            <h2>$1174</h2>
            <p>Model Spend</p>
          </div>

          <div className="SellerModal2">
            <div className="background arrow">
              <ReplyOutlinedIcon style={{marginTop:"-15px"}} fontSize="large" />
            </div>
            <h2>$1174</h2>
            <p>Model Spend</p>
          </div>
          {/*  */}
          <div className="SellerModal3">
            <div className="background dollar" style={{marginTop:"-6px"}} >{/* <TimeToLeave /> */}$</div>
            <h2>$1174</h2>
            <p>Model Spend</p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Seller;
