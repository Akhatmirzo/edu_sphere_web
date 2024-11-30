import { Outlet } from "react-router-dom";

export default function RequiredAuth({ allowedRole }: { allowedRole: string }) {
  const role: string = "admin";

  if (allowedRole === role) {
    <Outlet />;
  } else {
    <h1>Not Authorized</h1>;
  }
}
