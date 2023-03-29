// import axios from "axios";
// import { access } from "fs";
// import { useContext } from "react";
// import { UserContext } from "../context/UserContext";

// export const api = axios.create({
//   // baseURL: "https://testme.cyclic.app",
//   baseURL: "http://localhost:3001",
//   headers: {
//     Authorization: `Bearer ${accessToken}`,
//   },
// });

import axios from "axios";

// type AccessToken = {
//   token: string;
// };

// export const setAuthToken = (token: AccessToken) => {
//   if (token) {
//     api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   } else {
//     delete api.defaults.headers.common["Authorization"];
//   }
// };

export const api = axios.create({
  baseURL: "http://localhost:3001",
});
