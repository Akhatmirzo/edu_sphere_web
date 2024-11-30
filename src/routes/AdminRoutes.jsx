import RequiredAuth from "../components/required_auth/index";
import Dashboard from "../pages/admin/Dashboard";

const AdminRoutes = {
  path: "/",
  element: <RequiredAuth allowedRole={"admin"} />,
  children: [
    {
      path: "admin",
      element: <Dashboard />,
    }
  ],
};

export default AdminRoutes;
