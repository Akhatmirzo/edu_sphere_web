import RequiredAuth from "../components/required_auth/index";

const AdminRoutes = {
  path: "/admin",
  element: <RequiredAuth allowedRole={"admin"} />,
  children: [
    {
      path: "",
      element: <h1>Dashboard</h1>,
    },
    {
      path: "analytics",
      element: <h1>analytics</h1>,
    },
  ],
};

export default AdminRoutes;
