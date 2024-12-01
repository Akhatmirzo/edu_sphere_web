import { SiteHeader } from "@/components/navigations/navigations";
import BasicSidebar from "@/components/sidebars/BasicSidebar";
import { Outlet } from "react-router-dom";

interface Props {
  role: string;
}

export default function RoleLayout({ role }: Props) {
  return (
    <div className="flex h-screen overflow-hidden">
      <BasicSidebar role={role} />

      <div className="flex-1">
        <SiteHeader />
        <div className="px-3 py-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
