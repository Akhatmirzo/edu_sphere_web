import { sidebar_icons_fn } from "@/interface/sidebars-interface";
import {
  BarChart2,
  Briefcase,
  ClipboardList,
  Coins,
  FileText,
  Home,
  Package,
  Settings,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react";

const getIcon = (title: string) => {
  const icons: sidebar_icons_fn = {
    Dashboard: <Home className="w-4 h-4" />,
    Analytics: <BarChart2 className="w-4 h-4" />,
    "E-commerce": <ShoppingCart className="w-4 h-4" />,
    Crypto: <Coins className="w-4 h-4" />,
    Settings: <Settings className="w-4 h-4" />,
    Customers: <Users className="w-4 h-4" />,
    Products: <Package className="w-4 h-4" />,
    Orders: <ClipboardList className="w-4 h-4" />,
    Invoices: <FileText className="w-4 h-4" />,
    Jobs: <Briefcase className="w-4 h-4" />,
    Logistics: <Truck className="w-4 h-4" />,
  };
  return icons[title] || null;
};

export default getIcon;
