import { sidebar_items } from "@/interface/sidebars-interface";

export const sidebarAdmin: sidebar_items[] = [
  {
    title: "Dashboards",
    path: "#",
    icon: null,
    children: [
      {
        title: "Dashboard",
        path: "",
      },
      {
        title: "Analytics",
        path: "analytics",
      },
      {
        title: "Employers",
        path: "employers",
      },
      {
        title: "Edus",
        path: "edus",
      },
    ],
  },
];

export const sidebarEmployer: sidebar_items[] = [
  {
    title: "Dashboards",
    path: "#",
    icon: null,
    children: [
      {
        title: "Dashboard",
        path: "",
      },
      {
        title: "Analytics",
        path: "analytics",
      },
    ],
  },
  {
    title: "General",
    path: "#",
    icon: null,
    children: [
      {
        title: "Settings",
        path: "settings",
      },
      {
        title: "Managers",
        path: "managers",
      },
      {
        title: "Edus",
        path: "edus",
      },
      {
        title: "Orders",
        path: "orders",
      },
      {
        title: "Invoices",
        path: "invoices",
      },
      {
        title: "Teachers",
        path: "teachers",
      },
      {
        title: "Groups",
        path: "groups",
      },
    ],
  },
];
