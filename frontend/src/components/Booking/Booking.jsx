import React, { useState } from "react";
import "../../Stylesheets/Booking.css";
import BookingTopBar from "./BookingTopBar";
const Booking = () => {
  const [like, islike] = useState(false);
  return (
    <div className="autoAdjacetContent">
      <div>
        <BookingTopBar></BookingTopBar>

        <div className="d-flex  flex-wrap justify-content-center ">
          <div className="bookingCard " style={{ margin: "0 20px 20px" }}>
            <div className="cardTop d-flex justify-content-between">
              <h2>proshe 718 Caymans</h2>
              <img
                // src="./assest/icon/unlike.png"
                src={`assest/icon/${like ? "unlike" : "like"}.png`}
                onClick={() => islike(!like)}
                className="like"
                alt=""
              />
            </div>
            <h3>couple</h3>
            <img src="./assest/images/car.png" alt="loadin fail" />
            <div className="d-flex justify-content-between">
              <div className="d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center align-content-center">
                  <img
                    style={{ objectFit: "contain" }}
                    src="./assest/icon/4.png"
                    alt=""
                  />
                  <span className="cardinfo">4</span>
                </div>
                <div
                  className="d-flex justify-content-center align-content-center"
                  style={{ marginLeft: "15px" }}
                >
                  <img src="./assest/icon/manual.png" alt="" />
                  <span className="cardinfo">Manual</span>
                </div>
              </div>
              <p className="price">
                $400<span>/d</span>
              </p>
            </div>
          </div>

          {/*  */}
          <div className="bookingCard">
            <div className="cardTop d-flex justify-content-between">
              <h2>proshe 718 Caymans</h2>
              <img src="./assest/icon/like.png" className="like" alt="" />
            </div>
            <h3>couple</h3>
            <img src="./assest/images/car.png" alt="loadin fail" />
            <div className="d-flex justify-content-between">
              <div className="d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center align-content-center">
                  <img
                    style={{ objectFit: "contain" }}
                    src="./assest/icon/4.png"
                    alt=""
                  />
                  <span className="cardinfo">4</span>
                </div>
                <div
                  className="d-flex justify-content-center align-content-center"
                  style={{ marginLeft: "15px" }}
                >
                  <img src="./assest/icon/manual.png" alt="" />
                  <span className="cardinfo">Manual</span>
                </div>
              </div>
              <p className="price">
                $400<span>/d</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
