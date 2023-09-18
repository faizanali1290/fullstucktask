import MessagesSideBar from "./MessagesSideBar";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { useState, useEffect, useRef } from "react";
import "../../Stylesheets/Messages.css";

const Messagess = () => {
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const videoElement = useRef();
  const OpenCamera = () => {
    const video = videoElement.current;
    console.log(video);
    const MediaDevice = navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
      });
  };
  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("messages"));
    if (storedMessages) {
      setMessages(storedMessages);
    }
  }, []);

  const sendMessage = () => {
    if (userMessage.trim() === "") {
      return; // Prevent empty messages from being sent
    }

    const newMessage = {
      content: userMessage,
      time: new Date().toLocaleTimeString(),
      sender: "me",
    };

    setMessages([...messages, newMessage]);
    localStorage.setItem("messages", JSON.stringify([...messages, newMessage]));

    setUserMessage("");
  };

  return (
    <div className="autoAdjacetContent " style={{ marginBottom: "150px" }}>
      <div id="sideBarMessageActive">
        <MessagesSideBar></MessagesSideBar>
      </div>
      {/* MessagesTOPBar */}
      <div className="MessageWrapper">
        <div className="messagesTopBar ">
          <div className="MessagesUserProfile">
            <div className="isActiveUser"></div>
            <img
              className="Messageboxpic"
              src="./assest/icon/profile.jpeg"
              alt=""
            />
            <div className="userActiveAndName">
              <h2>faizan</h2>
              <h3>Active Now</h3>
            </div>
          </div>

          {/* contact us */}
          <div className="UserMeeting">
            <div className="userMettingVideo">
              <VideocamOutlinedIcon onClick={OpenCamera} />
            </div>
            <div className="userMettingAudio">
              <LocalPhoneOutlinedIcon />
            </div>
            <div className="userInfo">
              <MoreVertOutlinedIcon />
            </div>
          </div>
        </div>

        {/* messages show box */}
        <div className="messagesDisplay">
          <div className="messagesShowBoxes">
            <div className="profileImageWrapper d-flex">
              <img
                className="recivedMesageProfile"
                src="./assest/icon/profile.jpeg"
                alt=""
              />
              <p className="recivedMessage">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
                architecto earum ex, corrupti quisquam eum quis corporis rem in
                amet dicta iusto voluptate, et praesentium vel fuga rerum atque
                repellat!
              </p>
            </div>
            <p className="MessageTimeRecived">2:5 pm</p>
          </div>
          {/*  */}
          {messages.map((value) => {
            const { content, time, sender } = value;
            return (
              <>
                <div className="profileImageWrapper d-flex">
                  <div className="d-flex flex-column">
                    <p className="sendMessage">{content}</p>
                  </div>

                  <img
                    className="sendMesageProfile"
                    src="./assest/icon/profile.jpeg"
                    alt=""
                  />
                </div>
                <p className="MessageTime">{time}</p>
              </>
            );
          })}
        </div>

        {/* TYpe message */}

        <div className="textType">
          <AttachFileIcon />
          <input type="file" id="messageInputFile" />
          <input
            type="text"
            placeholder="Type a message"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />
          {!userMessage ? (
            <KeyboardVoiceIcon className="voiceIcon" />
          ) : (
            <SendIcon className="sendIcon" onClick={sendMessage} />
          )}
        </div>
        <div>
          <video
            autoPlay
            ref={videoElement}
            id="VIDEODISPLAY"
            width="300px"
            height="300px"
          ></video>

          <button>close</button>
        </div>
      </div>
    </div>
  );
};

export default Messagess;
