import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Home from "../pages/dashboard/Home";

// function ProtectedRoutes() {
//   const navigate = useNavigate();

//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const tokenExpire = () => {
//     localStorage.clear();
//     setIsLoggedIn(false);
//     // navigate to an expiration page and redirect to signin
//     return navigate("/session/expire");
//   };

//   const checkUserToken = () => {
//     const userToken = localStorage.getItem("user-token");
//     const userEmail = localStorage.getItem("user-email");

//     if (!userToken || userToken === "undefined") {
//       setIsLoggedIn(false);
//       return navigate("/session/expire");
//     }
//     setIsLoggedIn(true);
//   };

//   useEffect(() => {
//     checkUserToken();
//     // 4 hours for token expiration
//     setTimeout(() => {
//       tokenExpire();
//     }, 14400000);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isLoggedIn]);

//   return isLoggedIn ? <Outlet /> : <SignIn />;
// }

// export default ProtectedRoutes;

// const useAuth = () => {
//   const user = { isLoggedIn: true };
//   const userContext = useContext(UserContext);

//   return user && user.isLoggedIn;
// };
// function ProtectedRoutes() {
//   const isAuth = useAuth();
//   return isAuth ? <Outlet /> : <Home />;
// }

// export default ProtectedRoutes;

const useAuth = () => {
  const userContext = useContext(UserContext);

  return userContext.user?.email;
};
function ProtectedRoutes() {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Home />;
}

export default ProtectedRoutes;
