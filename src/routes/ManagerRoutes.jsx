import RequiredAuth from "../components/required_auth/index";
import Dashboard from "../pages/manager/Dashboard";

const ManagerRoutes = {
  path: "/",
  element: <RequiredAuth allowedRole={"manager"} />,
  children: [
    {
      path: "manager",
      element: <Dashboard />,
    },
  ],
};

export default ManagerRoutes;
