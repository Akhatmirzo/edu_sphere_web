import RequiredAuth from "../components/required_auth/index";

const EmployerRoutes = {
  path: "/",
  element: <RequiredAuth allowedRole={"employer"} />,
  children: [
    {
      path: "employer",
      element: <h1>Employer</h1>,
    },
  ],
};

export default EmployerRoutes;
