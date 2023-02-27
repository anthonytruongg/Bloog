import "./App.css";
import { Routes as Router, Route } from "react-router-dom";
import routes from "./config/routes";
import { UserContextProvider } from "./context/UserContext";
import Home from "./pages/dashboard/Home";
import CreateBlog from "./pages/dashboard/CreateBlog";
import UserPosts from "./pages/dashboard/UserPosts";
import ViewPost from "./pages/dashboard/ViewPost";
import Register from "./pages/register/Register";
import Success from "./pages/register/Success";
import Login from "./pages/login/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";

// function App() {
//   return (
//     <UserContextProvider>
//       <div className="App">
//         <Router>
//           {routes.map((route) => (
//             <Route path={route.path} element={route.element} key={route.path} />
//           ))}
//         </Router>
//       </div>
//     </UserContextProvider>
//   );
// }

// export default App;

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Router>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/register/success" element={<Success />} />
          <Route path="/blog/view/:id" element={<ViewPost />}></Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/user" element={<UserPosts />}></Route>
            <Route path="/create" element={<CreateBlog />}></Route>
          </Route>
        </Router>
      </div>
    </UserContextProvider>
  );
}

export default App;
