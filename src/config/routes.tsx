import Home from "../pages/dashboard/Home";
import CreateBlog from "../pages/dashboard/CreateBlog";
import UserPosts from "../pages/dashboard/UserPosts";
import ViewPost from "../pages/dashboard/ViewPost";
import Register from "../pages/register/Register";
import Success from "../pages/register/Success";
import Login from "../pages/login/Login";

type RouteProps = {
  path: string;
  element: React.ReactNode;
}[];

const routes: RouteProps = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/register/success",
    element: <Success />,
  },
  {
    path: "/blog/view/:id",
    element: <ViewPost />,
  },
  {
    path: "/user",
    element: <UserPosts />,
  },
  {
    path: "/create",
    element: <CreateBlog />,
  },
];

export default routes;
