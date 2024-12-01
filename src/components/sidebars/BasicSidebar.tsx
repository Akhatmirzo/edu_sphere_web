import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { ModeToggle } from "../theme/theme-toggle";
import { sidebarAdmin, sidebarEmployer } from "@/static/sidebars";
import { sidebar_props } from "@/interface/sidebars-interface";
import getIcon from "@/utils/getIcon";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { useMemo } from "react";

export default function BasicSidebar({ role, isSidebarOpen }: sidebar_props) {
  const { pathname } = useLocation();

  function slicePath(path: string): string {
    const pathArray = path.split("/");
    const endIndexValue: string = pathArray[pathArray.length - 1];
    const isRole: boolean =
      endIndexValue !== "admin" &&
      endIndexValue !== "employer" &&
      endIndexValue !== "manager";

    if (!isRole) {
      return "";
    } else {
      return endIndexValue;
    }
  }

  const roleSideRoute = useMemo(() => {
    if (role === "admin") {
      return sidebarAdmin;
    }

    if (role === "employer") {
      return sidebarEmployer;
    }
  }, [role]);

  return (
    <Sidebar
      collapsible="icon"
      className="h-screen w-64 bg-background border-r flex flex-col"
    >
      <SidebarHeader className={`${isSidebarOpen && "p-6 border-b"}`}>
        <SidebarMenu className="flex items-center justify-between flex-row">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">ED</span>
            </div>
            <span className="font-semibold">EduSphere</span>
          </div>

          <ModeToggle />
        </SidebarMenu>

        {role === "manager" && (
          <Button variant="outline" className="w-full mt-4 justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-orange-500/20 rounded flex items-center justify-center">
                <span className="text-orange-500 text-sm">JF</span>
              </div>
              <span>Devias</span>
            </div>
            <ChevronDown className="w-4 h-4" />
          </Button>
        )}
      </SidebarHeader>
      <SidebarContent
        className={`flex-1 overflow-y-auto ${isSidebarOpen && "p-4"}`}
      >
        {roleSideRoute?.map((section, index) => (
          <SidebarGroup key={index} className="space-y-2">
            <SidebarGroupLabel className="text-md font-medium text-muted-foreground px-2">
              {section.title}
            </SidebarGroupLabel>
            <SidebarGroupContent className="space-y-2">
              <SidebarMenu className="space-y-1">
                {section?.children?.map((item) => (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton asChild>
                      <Link
                        key={item.path}
                        to={item.path}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 text-lg transition-colors",
                          slicePath(pathname) === item.path
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted hover:opacity-100"
                        )}
                      >
                        {getIcon(item.title)}
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
