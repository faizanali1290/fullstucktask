import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format, getDay, getWeek, addDays, startOfWeek } from "date-fns";
const ClyinderLeftSide = () => {
  const [value, onChange] = useState(new Date());
  const now = new Date();
  const dayOfWeek = format(now, "EEEE");
  const [todayWeekis, setaciveweek] = useState(dayOfWeek.toLowerCase());
  const [whoActive, setWhoActive] = useState(false);
  return (
    <div className="clyinderleftside">
      <div className="calender" id={whoActive ? "showWeek" : ""}>
        <button
          className={`${whoActive ? "" : "ActiveMonth"}`}
          onClick={() => setWhoActive(!whoActive)}
        >
          Month
        </button>
        <button
          className={`${whoActive ? "ActiveMonth" : ""}`}
          onClick={() => setWhoActive(!whoActive)}
        >
          Week
        </button>

        <Calendar
          maxDate={value}
          today={new Date(2017, 0, 1)}
          onChange={onChange}
          value={value}
          view="week"
        />
        {/* week */}

        {whoActive ? (
          <div className="weekname">
            <h2 className={`${todayWeekis == "monday" ? "activeWeekIs" : ""}`}>
              Monday
            </h2>
            <h2 className={`${todayWeekis == "tuesday" ? "activeWeekIs" : ""}`}>
              Tuesday
            </h2>
            <h2
              className={`${todayWeekis == "wednesday" ? "activeWeekIs" : ""}`}
            >
              Wednesday
            </h2>
            <h2
              className={`${todayWeekis == "thursday" ? "activeWeekIs" : ""}`}
            >
              Thursday
            </h2>
            <h2 className={`${todayWeekis == "friday" ? "activeWeekIs" : ""}`}>
              Friday
            </h2>
            <h2
              className={`${todayWeekis == "saturday" ? "activeWeekIs" : ""}`}
            >
              Saturday
            </h2>
            <h2 className={`${todayWeekis == "sunday" ? "activeWeekIs" : ""}`}>
              Sunday
            </h2>
          </div>
        ) : null}
      </div>
      <h2 className="eventHeading">Upcoming Events</h2>
      <div className="upcomingEvent">
        <h3>0800</h3>
        <div className="eventBoxWrapper">
          <div className="d-flex align-items-center flex-column">
            {" "}
            <span className="eventNumber" style={{ marginRight: "5px" }}>
              0900
            </span>
            <div className="Eventbox1">
              <p>Drift Series Frist Round</p>
              <div className="d-flex justify-content-between ">
                <h3 className="eventUserName">JDM</h3>
                <div className="JDM">
                  <img src="./assest/images/image2.jpg" alt="" />
                  <img src="./assest/images/image3.jpg" alt="" />
                  <div>
                    <h2>+8</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="eventNumber">0900</h2>
        <div id="eventRange">
          <span className="eventNumber">10:15</span>
          <input type="range" />
        </div>
        {/* second card */}
        <div className="upcomingEvent">
          <h3>0800</h3>
          <div className="eventBoxWrapper">
            <div className="d-flex align-items-center">
              {" "}
              <span className="eventNumber" style={{ marginRight: "5px" }}>
                0900
              </span>
              <div className="Eventbox1">
                <p>Drift Series Frist Round</p>
                <div className="d-flex justify-content-between ">
                  <h3 className="eventUserName">JDM</h3>
                  <div className="JDM">
                    <img src="./assest/images/image1.jpeg" alt="" />
                    <img src="./assest/images/pic1.jpeg" alt="" />
                    <div>
                      <h2>+8</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="eventNumber">0900</h2>
        </div>
      </div>
    </div>
  );
};

export default ClyinderLeftSide;
