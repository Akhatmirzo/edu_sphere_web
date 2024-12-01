import {
  Bell,
  User2,
  ChevronDown,
  User,
  Shield,
  CreditCard,
  LogOut,
  PanelRightOpen,
  PanelRightClose,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import NotificationsPanel from "../notifications/NotificationsPanel";
import { useSidebar } from "../ui/sidebar";
import { Dispatch, SetStateAction } from "react";

export function SiteHeader({
  setIsSidebarOpen,
  isSidebarOpen,
}: {
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  isSidebarOpen: boolean;
}) {
  const { toggleSidebar, open } = useSidebar();

  const toggleSidebarButton = () => {
    toggleSidebar();
    setIsSidebarOpen(!open);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-3 flex h-14 items-center">
        <div className="flex flex-1 items-center justify-between space-x-4">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {isSidebarOpen ? (
              <PanelRightOpen
                onClick={toggleSidebarButton}
                size={28}
              />
            ) : (
              <PanelRightClose
                onClick={toggleSidebarButton}
                size={28}
              />
            )}
          </div>
          <nav className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-4 w-4" />
                  <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-600" />
                  <span className="sr-only">Notifications</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <NotificationsPanel />
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon">
              <User2 className="h-4 w-4" />
              <span className="sr-only">Account</span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger className="w-[80px]" asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex items-center space-x-2"
                >
                  <img
                    src="https://flagcdn.com/w20/gb.png"
                    width="20"
                    height="15"
                    alt="United Kingdom"
                    className="rounded"
                  />
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <img
                    src="https://flagcdn.com/w20/gb.png"
                    width="20"
                    height="15"
                    alt="United Kingdom"
                    className="mr-2 rounded"
                  />
                  English (US)
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <img
                    src="https://flagcdn.com/w20/ru.png"
                    width="20"
                    height="15"
                    alt="United States"
                    className="mr-2 rounded"
                  />
                  Russian (RU)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="rounded-full hover:opacity-80">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" alt="User avatar" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[240px] p-3" align="end">
                <div className="mb-3">
                  <div className="font-medium">Sofia Rivers</div>
                  <div className="text-sm text-muted-foreground">
                    sofia@devias.io
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="py-2 cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  Account
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2 cursor-pointer">
                  <Shield className="mr-2 h-4 w-4" />
                  Security
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2 cursor-pointer">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Billing
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="py-2 cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  );
}
