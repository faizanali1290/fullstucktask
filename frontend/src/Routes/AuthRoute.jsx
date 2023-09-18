import React, { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ChangePassword from "../components/auth/ChangePassword";
import Singup from "../components/auth/Singup";
import Login from "../components/auth/Login";
import ResetPassword from "../components/auth/RestPassword";

const AuthRoute = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="singup" element={<Singup />} /> */}
        <Route path="singup" element={<Singup />} />
        <Route path="login" element={<Login />} />
        <Route path="reset_password" element={<ResetPassword />} />
        <Route path="changepassword" element={<ChangePassword />} />
      </Routes>
    </div>
  );
};

export default AuthRoute;

// import React, { lazy, Suspense } from "react";
// import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";

// const Singup = lazy(() => import("../components/auth/Singup"));
// const Login = lazy(() => import("../components/auth/Singup"));
// const ResetPassword = lazy(() => import("../components/auth/Singup"));
// const ChangePassword = lazy(() => import("../components/auth/Singup"));
// const Spinner = lazy(() => import("../components/SideBar"));

// const AuthRoute = () => {
//   return (
//     <div>
//       <Suspense fallback={<Spinner></Spinner>}>
//         <Routes>
//           <Route path="/singup" element={<Singup />}></Route>
//           <Route path="/login" element={<Login />} />
//           <Route path="reset_password" element={<ResetPassword />} />
//           <Route path="changepassword" element={<ChangePassword />} />
//         </Routes>
//       </Suspense>
//     </div>
//   );
// };

// export default AuthRoute;
