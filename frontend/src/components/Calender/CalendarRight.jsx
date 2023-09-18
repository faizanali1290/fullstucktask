import React, { memo } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../../Stylesheets/Calender.css";

const CalendarRight = () => {
  return (
    <div>
      <div className="CalenderRightHeader d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between">
        <select>
          <option value="Day">Day</option>
          <option value="Week">Week</option>
          <option value="month">Month</option>
        </select>
        <input type="date" />
        <div className="headerarrow">
          <ArrowBackIosIcon></ArrowBackIosIcon>
          <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </div>
      </div>

      {/*  */}
      <div className="d-flex align-items-center flex-wrap gap ">
        <h2 className="rightCalenderTime">08:00 AM</h2>
        <div className="calendarCard1 ">
          <div className="CalenderTime ">
            <h2>08:00 am</h2>
            <h2>Moto Track Day</h2>
            <h3>All motorBikes</h3>
          </div>
          <h2 className="like">154k</h2>
        </div>
      </div>
      {/*  */}

      <div className="d-flex align-items-center flex-wrap gap">
        <h2 className="rightCalenderTime">9:00 AM</h2>
        <div
          className="calendarCard1"
          style={{
            background: "#725CFF",

            boxShadow: "0px 30px 120px rgba(84, 81, 255, 0.21)",
          }}
        >
          <div className="CalenderTime ">
            <h2>09:45 am</h2>
            <h2>Drift Swries Second Rourd</h2>
            <h3>JDM</h3>
          </div>
          <h2 className="like">1h 35min</h2>
        </div>
      </div>

      <div className="d-flex flex-wrap  justify-content-between  align-items-center ">
        <div className="d-flex align-items-center flex-wrap ">
          <h2 className="rightCalenderTime">9:00 AM</h2>
          <div
            className="calendarCard2"
            style={{
              background: "#2884FF",
              marginLeft: "7px",
              boxShadow: "0px 30px 120px rgba(84, 81, 255, 0.21)",
            }}
          >
            <div className="CalenderTime ">
              <h2>09:45 am</h2>
              <h2>Drift Swries Second Rourd</h2>
              <h3>JDM</h3>
            </div>
            <h2 className="like">1h 35min</h2>
          </div>
          {/*  */}

          <div className="d-flex align-items-center flex-wrap gap ">
            <div
              id="calenderMincard"
              className="calendarCard2"
              style={{
                background: "#5F6165",
                // background: "red",

                boxShadow: "0px 30px 120px rgba(84, 81, 255, 0.21)",
              }}
            >
              <div className="CalenderTime ">
                <h2>09:45 am </h2>
                <h2>Drift Swries Second Rourd</h2>
                <h3>JDM</h3>
              </div>
              <h2 className="like">1h 35min</h2>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="d-flex align-items-center flex-wrap gap">
        <h2 className="rightCalenderTime">1:PM AM</h2>
        <div
          className="calendarCard1"
          style={{
            background: "#70CF97",

            boxShadow: "0px 30px 120px rgba(84, 81, 255, 0.21)",
          }}
        >
          <div className="CalenderTime ">
            <h2>09:45 am</h2>
            <h2>Drift Swries Second Rourd</h2>
            <h3>JDM</h3>
          </div>
          <h2 className="like">147 k</h2>
        </div>
      </div>
      {/*  */}
      <div className="d-flex align-items-center flex-wrap gap">
        <h2 className="rightCalenderTime">1:PM</h2>
        <div
          className="calendarCard1"
          style={{
            background: "#FF764C",

            boxShadow: "0px 30px 120px rgba(84, 81, 255, 0.21)",
          }}
        >
          <div className="CalenderTime ">
            <h2>09:45 am</h2>
            <h2>Drift Swries Second Rourd</h2>
            <h3>JDM</h3>
          </div>
          <h2 className="like">147 k</h2>
        </div>
      </div>
      {/*  */}
      <div className="d-flex align-items-center flex-wrap gap">
        <h2 className="rightCalenderTime">1:PM</h2>
        <div
          className="calendarCard1"
          style={{
            background: "#5F6165",

            boxShadow: "0px 30px 120px rgba(84, 81, 255, 0.21)",
          }}
        >
          <div className="CalenderTime ">
            <h2>09:45 am</h2>
            <h2>Drift Swries Second Rourd</h2>
            <h3>JDM</h3>
          </div>
          <h2 className="like">147 k</h2>
        </div>
      </div>
    </div>
  );
};

export default memo(CalendarRight);
