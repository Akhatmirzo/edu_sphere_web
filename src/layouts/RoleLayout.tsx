import { SiteHeader } from "@/components/navigations/navigations";
import BasicSidebar from "@/components/sidebars/BasicSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

interface Props {
  role: string;
}

export default function RoleLayout({ role }: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  return (
    <SidebarProvider
      defaultOpen={true}
      className="flex h-screen overflow-hidden"
    >
      <BasicSidebar role={role} isSidebarOpen={isSidebarOpen} />

      <div className="flex-1">
        <SiteHeader isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div className="px-3 py-1">
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  );
}
