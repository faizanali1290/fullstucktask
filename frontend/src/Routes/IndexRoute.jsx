import { Routes, Route, useNavigate } from "react-router-dom";
import ProfileUpdate from "../components/Setting/profileUpdate";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import ChangePassword from "../components/Setting/ChangePassowrd";
import ChangeEmail from "../components/Setting/ChangeEmail";
import Notification from "../components/Setting/Notification";
import MyDetail from "../components/Setting/MyDetail";
import Dashboard from "../components/Dashboard";
import Assests from "../components/Assets/Assests";
import Booking from "../components/Booking/Booking";
import Seller from "../components/Seller/Seller";
import Calender from "../components/Calender/Calender";
import Services from "../components/Services";
import MessagesSideBar from "../components/Messages/MessagesSideBar";
import Messagess from "../components/Messages/Messagess";

const IndexRoute = () => {
  return (
    <div>
      <div>
        <div id="navar" class="Topar" style={{ zIndex: "2397902389" }}>
          <TopBar></TopBar>
          <SideBar class="SieBar"></SideBar>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/setting_Edit_Profile" element={<ProfileUpdate />} />
            <Route path="/Assest_1" element={<Assests />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="/sellcars" element={<Seller />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/services" element={<Services />} />
            <Route path="/message" element={<MessagesSideBar/>} />
           
            <Route path="/usermessage" element={<Messagess />} />
            {/* <Route
              path="/setting_email"
              element={<ChangePassword></ChangePassword>}
            /> */}
            <Route
              path="/setting_email"
              element={<ChangeEmail></ChangeEmail>}
            />
            <Route path="/setting_password" element={<ChangePassword />} />
            <Route path="/setting_notification" element={<Notification />} />
            <Route path="/setting_detail" element={<MyDetail />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default IndexRoute;
