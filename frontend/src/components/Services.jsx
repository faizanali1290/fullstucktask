import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import "../Stylesheets/Services.css";
const Services = () => {
  const [radomNumber, SetRadom] = useState(Math.floor(Math.random() * 100));
  return (
    <>
      <section className="autoAdjacetContent">
        <div>
          <div className="Services  justify-content-center justify-content-lg-start">
            <div className="servicesStation ">
              <h2>Services Station</h2>
              <div>
                <ul>
                  <li>A1</li>
                  <li>A2</li>
                  <li>A3</li>
                  <li style={{ background: "#FF6370" }}>A4</li>
                  <li>A5</li>
                  <li>A6</li>
                  <li>A7</li>
                  <li>A8</li>
                  <li>A9</li>
                  <li className="ServiceStationRed">A10</li>
                </ul>
                <ul>
                  <li style={{ background: "#FF6370" }}>B1</li>
                  <li>B2</li>
                  <li>B3</li>
                  <li>B4</li>
                  <li>B5</li>
                  <li>B6</li>
                  <li style={{ background: "#FF6370" }}>B7</li>
                  <li>B8</li>
                  <li style={{ background: "#A162F7" }}>B9</li>
                  <li>B10</li>
                </ul>
              </div>{" "}
              {/* here eror */}
              <div className="d-flex ServiceStationbootomWraper align-self-center flex-wrap flex-lg-nowrap ">
                <div className="d-flex align-content-center ServiceStationBotom  justify-content-center">
                  <div className="emptyCircle"></div>
                  <span className="ready">Ready</span>
                </div>
                <div className="d-flex align-content-center ServiceStationBotom  justify-content-center ">
                  <div
                    className="emptyCircle1"
                    style={{ background: "#FF6370" }}
                  ></div>
                  <span className="ready">Booked</span>
                </div>
                <div className="d-flex align-content-center ServiceStationBotom justify-content-center ">
                  <div
                    className="emptyCircle1"
                    style={{ background: "#A162F7" }}
                  ></div>
                  <span className="ready">CurrentStation</span>
                </div>
              </div>
              {/*  */}
              {/* here error */}
              <div className="d-flex flex-column justify-content-center flex-wrap ">
                <div className="d-flex orderCardWrapper flex-wrap  justify-content-center justify-content-lg-start ">
                  <div className="order">
                    <h2>Your Order</h2>

                    <div className="ring">
                      <div className="roundecircle1 halfcircle"></div>
                      <div className="ring1 orderRing"></div>
                      <div className="ring2 orderRing"></div>
                      <div className="ring3 orderRing"></div>
                    </div>
                    <div className="RoundCricle"></div>

                    <p className="servicesHeading ">Servies Time</p>
                    <h2 className="orderhour">
                      5, 2{" "}
                      <span style={{ fontSize: "13px", marginLeft: "-5px" }}>
                        h
                      </span>
                    </h2>
                  </div>
                  <div>
                    <div
                      className="BreakFluidCard d-flex "
                      id="breakFluifChange"
                    >
                      <div className="BreakFluid d-flex">
                        <div style={{ background: "#70cf97" }}></div>
                        <h2>Brake fluid change</h2>
                      </div>
                      <span>$32</span>
                    </div>

                    {/*  */}
                    <div className="BreakFluidCard d-flex ">
                      <div className="BreakFluid d-flex">
                        <div style={{ background: "#FF6370" }}></div>
                        <h2>Diagnostics</h2>
                      </div>
                      <span>$32</span>
                    </div>
                    <div className="BreakFluidCard d-flex ">
                      <div className="BreakFluid d-flex">
                        <div style={{ background: "#A162F7" }}></div>
                        <h2>External Washing</h2>
                      </div>
                      <span>$10</span>
                    </div>

                    <button className="addServies">Add Services</button>
                  </div>
                </div>
                <button className="paybuttom">Pay $86</button>
              </div>{" "}
            </div>

            <div className="ServiceCardWrapper d-flex flex-column">
              <h2 className="servicesCardHeading ">Serice Required</h2>
              <div className="serviceCard">
                <div className="d-flex  align-items-center">
                  <div className="ServiceIconCover ">
                    <AccountCircleIcon />
                  </div>
                  <h2>Center Care</h2>
                </div>

                <div className="d-flex priceInfo ">
                  <h3 className="Serviceprice">Price:$48</h3>
                  <p style={{ marginLeft: "30px" }}>Processing:1hour</p>
                </div>
                <div
                  className="verticalline"
                  style={{ background: "#70cf97" }}
                ></div>
              </div>{" "}
              <div className="serviceCard">
                <div className="d-flex  align-items-center">
                  <div className="ServiceIconCover ">
                    <AccountCircleIcon style={{ color: "#A162F7" }} />
                  </div>
                  <h2>Center Care</h2>
                </div>

                <div className="d-flex priceInfo ">
                  <h3 className="Serviceprice">Price:$48</h3>
                  <p style={{ marginLeft: "30px" }}>Processing:1hour</p>
                </div>
                <div
                  className="verticalline"
                  style={{ background: "#A162F7" }}
                ></div>
              </div>
              <div className="serviceCard">
                <div className="d-flex  align-items-center">
                  <div className="ServiceIconCover ">
                    <AccountCircleIcon style={{ color: "#FF6370" }} />
                  </div>
                  <h2>Center Care</h2>
                </div>

                <div className="d-flex priceInfo ">
                  <h3 className="Serviceprice">Price:$48</h3>
                  <p style={{ marginLeft: "30px" }}>Processing:1hour</p>
                </div>
              </div>
              <div className="ServicesSchedule">
                <h2>Services Schedule</h2>
                <div className="schedule d-flex">
                  <input type="radio" checked name="none" />
                  <div>
                    <p className="upgrading">
                      UPgrading you favorite car periodically
                    </p>
                    <div className="time d-flex justify-content-between ">
                      <p>Today,10.00</p>
                      <p>Fis price:$12.00</p>
                    </div>
                  </div>
                </div>
                <div className="schedule d-flex" style={{ marginTop: "15px" }}>
                  <input type="radio" name="none" />
                  <div>
                    <p className="upgrading">
                      UPgrading you favorite car periodically
                    </p>
                    <div className="time d-flex justify-content-between ">
                      <p>Today,10.00</p>
                      <p>Fis price:$12.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ServiesBotomWrapper ">
            <div className="ServiceBootomCard" id="servicesCard1">
              <img src="./assest/images/Ресурс.png" alt="" />
              <h2>Oil Level</h2>
              <div
                className="align-self-start d-flex justify-content-between"
                style={{ width: "100%" }}
              >
                <h3>Engine</h3>
                <h4>Don't Replace</h4>
              </div>
              <div
                className="ServiceProgresLine1"
                style={{
                  width: `${radomNumber || 90}%`,
                  background: "#A162F7",
                }}
              ></div>
              <div className="ServiceProgresLine2"></div>
            </div>
            <div className="ServiceBootomCard">
              <img src="./assest/images/Ресурс1.png" alt="" />
              <h2>Oil Level</h2>
              <div
                className="align-self-start d-flex justify-content-between"
                style={{ width: "100%" }}
              >
                <h3>Engine</h3>
                <h4>Don't Replace</h4>
              </div>
              <div
                className="ServiceProgresLine1"
                style={{
                  width: `${radomNumber || 90}%`,
                  background: "#70CF97",
                }}
              ></div>
              <div className="ServiceProgresLine2"></div>
            </div>
            <div className="ServiceBootomCard">
              <img src="./assest/images/Ресурс2.png" alt="" />
              <h2>Oil Level</h2>
              <div
                className="align-self-start d-flex justify-content-between"
                style={{ width: "100%" }}
              >
                <h3>Engine</h3>
                <h4>Don't Replace</h4>
              </div>
              <div
                className="ServiceProgresLine1"
                style={{
                  width: `${radomNumber || 90}%`,
                  background: "#F6CC0D",
                }}
              ></div>
              <div className="ServiceProgresLine2"></div>
            </div>
            <div className="ServiceBootomCard">
              <img src="./assest/images/Ресурс3.png" alt="" />
              <h2>Oil Level</h2>
              <div
                className="align-self-start d-flex justify-content-between"
                style={{ width: "100%" }}
              >
                <h3>Engine</h3>
                <h4>Don't Replace</h4>
              </div>
              <div
                className="ServiceProgresLine1"
                style={{
                  width: `${radomNumber || 90}%`,
                  background: "#FF764C",
                }}
              ></div>
              <div className="ServiceProgresLine2"></div>
            </div>
          </div>{" "}
        </div>
      </section>
    </>
  );
};

export default Services;
