import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { ModeToggle } from "../theme/theme-toggle";
import { sidebarAdmin } from "@/static/sidebars";
import { sidebar_props } from "@/interface/sidebars-interface";
import getIcon from "@/utils/getIcon";

export default function BasicSidebar({ role }: sidebar_props) {
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

  return (
    <div className="h-screen w-64 bg-background border-r flex flex-col">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">D</span>
            </div>
            <span className="font-semibold">EduSphere</span>
          </div>

          <ModeToggle />
        </div>
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
      </div>
      <nav className="flex-1 overflow-y-auto p-4">
        {sidebarAdmin?.map((section, index) => (
          <div key={index} className="space-y-4 mt-2">
            <h2 className="text-sm font-medium text-muted-foreground px-2">
              {section.title}
            </h2>
            <div className="space-y-2">
              {section?.children?.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    slicePath(pathname) === item.path
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  )}
                >
                  {getIcon(item.title)}
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}
