import React, { memo, useCallback, useState } from "react";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import Filter from "./Filter";
const BookingTopBar = () => {
  const [filter, showFilter] = useState(false);

  const ShowFilter = useCallback(() => {
    return;
    }, [filter]);
  return (
    <div className="Bookingtopbar " style={{ position: "relative" }}>
      <Filter show={ShowFilter}></Filter>
      <h2>Booking</h2>
      <div className="BookingTOpBar justify-content-center justify-content-md-between">
        <div className="select">
          <select name="" id="bookingselect1">
            <option value="new">new</option>
            <option value="old">old</option>
          </select>
          <select name="" id="bookingselect2">
            <option value="Toyata">Toyata</option>
            <option value="Jeep">Jeep</option>
            <option value="TeslaModelS">Tesla Model S</option>
          </select>
        </div>

        <div className="filterNav">
          <GridViewOutlinedIcon className="bookingGrid"></GridViewOutlinedIcon>

          <img
            src="./assest/icon/filter.png"
            alt="loading failed"
            onClick={() => showFilter(!filter)}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(BookingTopBar);
