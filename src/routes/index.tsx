import { createBrowserRouter } from "react-router-dom";

// project import
import MainRoutes from "./MainRoutes";
import AdminRoutes from "./AdminRoutes";
import EmployerRoutes from "./EmployerRoutes";
import ManagerRoutes from "./ManagerRoutes";
import NotFound from "@/pages/error/NotFound";

// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter([
  MainRoutes,
  AdminRoutes,
  EmployerRoutes,
  ManagerRoutes,
  {
    path: "*", // Not Found route
    element: <NotFound />,
  },
]);

export default router;
