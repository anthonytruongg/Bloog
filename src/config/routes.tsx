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
  isPrivate: boolean;
}[];

const routes: RouteProps = [
  {
    path: "/",
    element: <Home />,
    isPrivate: false,
  },
  {
    path: "/login",
    element: <Login />,
    isPrivate: false,
  },
  {
    path: "/register",
    element: <Register />,
    isPrivate: false,
  },
  {
    path: "/register/success",
    element: <Success />,
    isPrivate: false,
  },
  {
    path: "/blog/view/:id",
    element: <ViewPost />,
    isPrivate: false,
  },
  {
    path: "/user",
    element: <UserPosts />,
    isPrivate: true,
  },
  {
    path: "/create",
    element: <CreateBlog />,
    isPrivate: true,
  },
];

export default routes;
