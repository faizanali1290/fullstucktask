import React, { useState } from "react";
import "../../Stylesheets/Assests.css";
import AssestAreaChart from "./AssestLineChart";

const Assests = () => {
  const [isClickAll, setisClickAll] = useState(false);
  return (
    <div className="autoAdjacetContent">
      <h2 className="assestHeading">Assest</h2>
      <div
        className="Assests flex-lg-wrap justify-content-center  topCarParent "
        style={{ gap: "4rem" }}
      >
        <div className="d- flex-column topcar">
          <div className="d-flex justify-content-between topcarheading">
            <div>
              <h2>Fuel Usage</h2>
              <h3>2903 Ltr</h3>
            </div>
            <div>
              <h2>KM Driven</h2>
              <h3>29089 KM</h3>
            </div>
          </div>
          <div className="d-flex justify-content-between topcarheading">
            <div>
              <h2>Total Cost</h2>
              <h3>$300,290.00</h3>
            </div>
            <div>
              <h2>Top Speed</h2>
              <h3>$5.2k</h3>
            </div>
          </div>
          <img
            src="./assest/images/car-top-view-2c7169ad4f3f8ddd6bff13b3de4d09e8 1car.png"
            alt="loadinf fail"
          />
        </div>

        <div>
          <div id="assstlinechart">
            <AssestAreaChart />
          </div>
          <div
            className="d-flex justify-content-evenly flex-wrap"
            id="assestCard"
            style={{ gap: "4rem" }}
          >
            <div className="noties ">
              <div
                className="d-flex  align-items-center"
                style={{ gap: "2rem" }}
              >
                <div className="imgcover">
                  <img
                    src="./assest/icon/message.png"
                    className="icon"
                    alt="loadinf fail"
                  />
                </div>
                <div>
                  <h2>Monday, 6th April 2020</h2>
                  <p>Book for General Services</p>
                  <button className="asssestCompletedBtn">COMPLETED</button>
                </div>
              </div>
              {/*  */}
              <div
                className="d-flex  align-items-center"
                style={{ gap: "2rem" }}
              >
                <div className="imgcover">
                  <img
                    src="./assest/icon/error.png"
                    className="icon errro"
                    alt="loadinf fail"
                  />
                </div>
                <div>
                  <h2>Monday, 6th April 2020</h2>
                  <p>Book for General Services</p>
                  <button className="assestButton">14:07-21/11/2021</button>
                </div>
              </div>
              {/*  */}
              <div
                className="d-flex  align-items-center"
                style={{ gap: "2rem" }}
              >
                <div className="imgcover">
                  <img src="./assest/icon/Vector .png" alt="loadinf fail" />
                </div>
                <div>
                  <h2>Monday, 6th April 2020</h2>
                  <p>Book for General Services</p>
                  <button className="assestButton">14:07-21/11/2021</button>
                </div>
              </div>
            </div>

            {/*  */}

            <div className="sensors">
              <div
                className="d-flex justify-content-between"
                style={{ width: "100%" }}
              >
                <h2>Avaliable Sensors</h2>
                <select>
                  <option value="one">Assests</option>
                  <option value="two">two</option>
                </select>
              </div>
              <div>
                <div className="d-flex assestSelection">
                  <input
                    type="checkbox"
                    checked={isClickAll ? true : null}
                    className="assestcheck assest1"
                    id="assest1"
                  />
                  <label htmlFor="assest1">Assest - Fuel Consumed (10)</label>

                  <div className="gaph">
                    <img
                      src="./assest/icon/checkgraph.png"
                      className="image "
                      alt="loadinf fail"
                    />{" "}
                    <img
                      src="./assest/icon/graph.png"
                      className="image"
                      alt="loadinf fail"
                    />{" "}
                  </div>
                </div>
                {/*  */}
                <div className="d-flex assestSelection">
                  <input
                    type="checkbox"
                    checked={isClickAll ? true : null}
                    className="assestcheck assest1"
                    id="assest1"
                  />
                  <label htmlFor="assest1" id="faizan">
                    Assest - Fuel Consumed (10)
                  </label>

                  <div className="gaph">
                    <img
                      src="./assest/icon/checkgraph.png"
                      className="image "
                      alt="loadinf fail"
                    />{" "}
                    <img
                      src="./assest/icon/graph.png"
                      className="image"
                      alt="loadinf fail"
                    />{" "}
                  </div>
                </div>
                {/*  */}
                <div className="d-flex assestSelection">
                  <input
                    type="checkbox"
                    className="assestcheck assest1"
                    checked={isClickAll ? true : null}
                    id="assest1"
                  />
                  <label htmlFor="assest1" id="faizan">
                    Assest - Fuel Consumed (10)
                  </label>

                  <div className="gaph">
                    <img
                      src="./assest/icon/checkgraph.png"
                      className="image "
                      alt="loadinf fail"
                    />{" "}
                    <img
                      src="./assest/icon/graph.png"
                      className="image"
                      alt="loadinf fail"
                    />{" "}
                  </div>
                </div>
                {/*  */}
                <div className="d-flex assestSelection">
                  <input
                    type="checkbox"
                    className="assestcheck assest1"
                    id="assest1"
                    checked={isClickAll ? true : null}
                  />
                  <label htmlFor="assest1" id="faizan">
                    Assest - Fuel Consumed (10)
                  </label>

                  <div className="gaph">
                    <img
                      src="./assest/icon/checkgraph.png"
                      className="image "
                      alt="loadinf fail"
                    />{" "}
                    <img
                      src="./assest/icon/graph.png"
                      className="image"
                      alt="loadinf fail"
                    />{" "}
                  </div>
                </div>

                <button
                  className="selectall"
                  onClick={() => setisClickAll(!isClickAll)}
                >
                  Select All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assests;
