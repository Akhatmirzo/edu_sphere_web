import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import RoleLayout from "@/layouts/RoleLayout";

export default function RequiredAuth({
  allowedRole,
}: {
  allowedRole: string;
}): ReactNode {
  const role: string = "admin";

  if (allowedRole === role) {
    return <RoleLayout role={role} />;
  } else {
    return <Outlet />;
  }
}
