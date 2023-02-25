import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import UserPosts from "./pages/UserPosts";
import ViewPost from "./pages/ViewPost";
import Register from "./pages/Register";
import ProtectedRoutes from "./ProtectedRoutes";
import Success from "./pages/Success";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/register/success" element={<Success />} />
        <Route path="/blog/view/:id" element={<ViewPost />}></Route>
        <Route path="/user" element={<UserPosts />}></Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/create" element={<CreateBlog />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
