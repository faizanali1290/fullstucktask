import BorderColorIcon from "@mui/icons-material/BorderColor";
import SearchIcon from "@mui/icons-material/Search";
import PushPinIcon from "@mui/icons-material/PushPin";
import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { memo, useState } from "react";
import "../../Stylesheets/Messages.css";
import { NavLink } from "react-router-dom";

const MessagesSideBar = () => {
  const [pin, unPin] = useState(false);
  return (
    <section className="">
      
      <div className="messageSidebarWrapper">
        {/* pin */}

        <div className="messageHeading d-flex ">
          <h2>Messages</h2>
          <BorderColorIcon></BorderColorIcon>
        </div>
        <div className="message_serach">
          <input type="search" placeholder="Search here..." />
          <SearchIcon></SearchIcon>
        </div>

        {/* userProfile with info */}
        <div className="pin" onClick={() => unPin(!pin)}>
          <PushPinIcon></PushPinIcon>
          <span>PINNED</span>
        </div>

        {pin ? (
          <>
            <div className="messageInfoWrapper">
              <img
                className="Messageboxpic"
                src="./assest/images/profile2.png"
                alt=""
              />
              <div className="d-flex flex-column messagesWraper">
                <div className="userNameAndTime">
                  <div className="userNameAndTime">
                    <h2 className="username">Unknow</h2>
                    <h3 className="time">4:30 AM</h3>
                  </div>
                </div>

                <div className="typing">
                  <p className="userTyping setposition">Typing...</p>
                </div>
              </div>
            </div>
            <div className="messageInfoWrapper">
              <img
                className="Messageboxpic"
                src="./assest/icon/profile.jpeg"
                alt=""
              />
              <div className="d-flex flex-column messagesWraper">
                <div className="userNameAndTime">
                  <div className="userNameAndTime">
                    <h2 className="username">ALi</h2>
                    <h3 className="time">4:30 AM</h3>
                  </div>
                </div>

                {/*  */}
                <div className="userArrtiveMessage">
                  <div className="userReadMessage ">
                    <CheckTwoToneIcon />
                    <CheckTwoToneIcon />
                  </div>
                  <p className="userMessage ">hi how are ..</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        {/* <div className="messageInfoWrapper"> */}
        {/* <img
            className="Messageboxpic"
            src="./assest/icon/profile.jpeg"
            alt=""
          />
          <div className="d-flex flex-column messagesWraper">
            <div className="userNameAndTime">
              <div className="userNameAndTime">
                <h2 className="username">faizan</h2>
                <h3 className="time">4:30 AM</h3>
              </div>
            </div> */}

        {/* voice message */}

        {/* <div className="voice">
              <p className="voicemessageinfo  ">voice Message</p>
              <div className="d-flex align-self-start"> */}
        {/* inside notification */}
        {/* <MicNoneOutlinedIcon className="voiceMessageIcon"></MicNoneOutlinedIcon>
              </div>
            </div> */}

        {/* typing */}
        {/* <div className="typing">
              <p className="userTyping setposition">Typing...</p>
              <div className="MessageAlert ">
                <spna className="Msgnotificatin">100</spna>
              </div>
            </div> */}

        {/* <div className="userArrtiveMessage">
              <div className="userReadMessage ">
                <CheckTwoToneIcon />
                <CheckTwoToneIcon />
              </div>
              <p className="userMessage ">hi how are ..</p>
            </div>
          </div>
        </div> */}
        {/* tomparary */}
        <div className="d-flex justify-content-between align-items-center AllMessages">
          <p style={{ minWidth: "max-content" }}>ALl messages</p>

          <ChatOutlinedIcon style={{ marginLeft: "60%" }}></ChatOutlinedIcon>
        </div>

        <div className="messageInfoWrapper" style={{ position: "relative" }}>
          <NavLink to={'/usermessage'}>
            <img
              className="Messageboxpic"
              src="./assest/images/profile1.png"
              alt=""
            />
          </NavLink>
          <div className="isActiveUser"></div>
          <div className="d-flex flex-column messagesWraper">
            <div className="userNameAndTime">
              <div className="userNameAndTime">
                <h2 className="username">Faizan Ali</h2>
                <h3 className="time">4:30 AM</h3>
              </div>
            </div>

            {/* voice message */}

            <div className="voice">
              <p className="voicemessageinfo  ">voice Message</p>
              <div className="d-flex align-self-start">
                {/* inside notification */}
                <MicNoneOutlinedIcon className="voiceMessageIcon"></MicNoneOutlinedIcon>
              </div>
            </div>
          </div>
        </div>

        <div className="messageInfoWrapper">
          <img
            className="Messageboxpic"
            src="./assest/images/profile.png"
            alt=""
          />
          <div className="d-flex flex-column messagesWraper">
            <div className="userNameAndTime">
              <div className="userNameAndTime">
                <h2 className="username">Unknow</h2>
                <h3 className="time">4:30 PM</h3>
              </div>
            </div>

            {/* voice message */}

            <div className="typing">
              <p className="userTyping setposition">Typing...</p>
            </div>
          </div>
        </div>

        <div className="messageInfoWrapper" style={{ position: "relative" }}>
          <img
            className="Messageboxpic"
            src="./assest/images/profile2.png"
            alt=""
          />
          <div className="isActiveUser"></div>

          <div className="d-flex flex-column messagesWraper">
            <div className="userNameAndTime">
              <div className="userNameAndTime">
                <h2 className="username">ALi</h2>
                <h3 className="time">2:30 AM</h3>
              </div>
            </div>

            {/*  */}
            <div className="userArrtiveMessage">
              <div className="userReadMessage ">
                <CheckTwoToneIcon />
                <CheckTwoToneIcon />
              </div>
              <p className="userMessage ">hi how are ..</p>
            </div>
          </div>
        </div>
        {/* tomparary */}

        <div className="messageInfoWrapper">
          <img
            className="Messageboxpic"
            src="./assest/images/profile3.png"
            alt=""
          />
          <div className="d-flex flex-column messagesWraper">
            <div className="userNameAndTime">
              <div className="userNameAndTime">
                <h2 className="username">aloneyo</h2>
                <h3 className="time">4:30 AM</h3>
              </div>
            </div>

            {/* voice message */}

            {/* typing */}
            <div className="typing">
              <p className="userTyping setposition">Typing...</p>
              <div className="MessageAlert ">
                <spna className="Msgnotificatin">100</spna>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(MessagesSideBar);
