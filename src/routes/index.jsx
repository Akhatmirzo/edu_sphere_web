import { createBrowserRouter } from "react-router-dom";

// project import
import MainRoutes from "./MainRoutes";
import AdminRoutes from "./AdminRoutes";
import EmployerRoutes from "./EmployerRoutes";
import ManagerRoutes from "./ManagerRoutes";

// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter(
  [MainRoutes, AdminRoutes, EmployerRoutes, ManagerRoutes],
);

export default router;
