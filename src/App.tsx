import "./App.css";
import { Routes as Router, Route } from "react-router-dom";
import routes from "./config/routes";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { user, login, logout } = useAuth();
  return (
    <div className="App">
      <AuthContext.Provider value={{ user, setUser }}>
        <Router>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/login" element={<Login />}></Route>
//         <Route path="/register" element={<Register />}></Route>
//         <Route path="/register/success" element={<Success />} />
//         <Route path="/blog/view/:id" element={<ViewPost />}></Route>
//         <Route path="/user" element={<UserPosts />}></Route>
//         <Route element={<ProtectedRoutes />}>
//           <Route path="/create" element={<CreateBlog />}></Route>
//         </Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;
