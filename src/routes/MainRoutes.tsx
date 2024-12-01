import RequiredAuth from "@/components/required_auth";

const MainRoutes = {
  path: "/",
  element: <RequiredAuth allowedRole="" />,
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
