import RequiredAuth from "../components/required_auth/index";
import Dashboard from "../pages/employer/Dashboard";

const EmployerRoutes = {
  path: "/",
  element: <RequiredAuth allowedRole={"employer"} />,
  children: [
    {
      path: "employer",
      element: <Dashboard />,
    },
  ],
};

export default EmployerRoutes;
