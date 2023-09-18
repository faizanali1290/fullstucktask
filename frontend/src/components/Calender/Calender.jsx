import "../../Stylesheets/Calender.css";
import React from "react";
import CalenderLeft from "./CalenderLeft";
import CalenderRight from "./CalendarRight";

const Cylinder = () => {
  return (
    <>
      <section className="autoAdjacetContent" style={{padding:"0 10px"}}>
        <div className="clyinderTop  flex-wrap flex-column flex-sm-row  justify-content-center align-items-center justify-content-sm-between">
          <h2>Calender</h2>
          <div className="clyinderSlection d-flex flex-wrap justify-content-center row-gap-5 column-gap-4">
            <select name="" id="">
              <option value="toyota">toyota</option>
              <option value="Ford">Ford Mustang</option>
              <option value="Honda Civic">Honda Civic</option>
            </select>
            <select name="" id="">
              <option value="time">time</option>
            </select>
            <select name="" id="">
              <option value="status">Status</option>
            </select>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-evenly">
          <CalenderLeft ></CalenderLeft>
          <CalenderRight></CalenderRight>
        </div>
      </section>
    </>
  );
};

export default Cylinder;
