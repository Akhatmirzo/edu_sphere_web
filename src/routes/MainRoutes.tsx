// import RequiredAuth from "@/components/required_auth";
import { Outlet } from "react-router-dom";

const MainRoutes = {
  path: "/",
  element: <Outlet />,
  children: [
    {
      path: "/",
      element: <h1>Login</h1>,
    },
    {
      path: "/register",
      element: <h1>Register</h1>,
    },
  ],
};

export default MainRoutes;
