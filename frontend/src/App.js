import { useEffect, useState } from "react";
import "./App.css";
import AuthRoute from "./Routes/AuthRoute";
import { Cookies } from "react-cookie";
import IndexRoute from "./Routes/IndexRoute";
import { useNavigate, useLocation } from "react-router-dom";

function App() {
  const [isUserLogin, setIsuserLogin] = useState(true);
  const navigate = useNavigate();
  const Location = useLocation();
  console.log(Location.pathname);
  const cookie = new Cookies();

  useEffect(() => {
    const token = cookie.get("verified");
    if (token) {
      setIsuserLogin(true);
      navigate(Location.pathname);

      
    } else {
      navigate("/");
      // navigate("/login");
    }
  }, []);
  return <>{isUserLogin ? <IndexRoute /> : <AuthRoute />}</>;
}

export default App;
