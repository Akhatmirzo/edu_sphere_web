import RequiredAuth from "../components/required_auth/index";

const ManagerRoutes = {
  path: "/",
  element: <RequiredAuth allowedRole={"manager"} />,
  children: [
    {
      path: "manager",
      element: <h1>Manager</h1>,
    },
  ],
};

export default ManagerRoutes;
