import { Outlet } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const MainRoutes = {
  path: "/",
  element: <Outlet />,
  children: [
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ],
};

export default MainRoutes;
