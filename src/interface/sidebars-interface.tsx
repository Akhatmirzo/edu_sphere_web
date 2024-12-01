interface sidebar_items {
  title: string;
  path: string;
  icon: React.ReactNode;
  children?: { title: string; path: string }[];
}

interface sidebar_icons_fn {
  [key: string]: React.ReactNode;
}

interface sidebar_props {
  role?: string;
}

export type { sidebar_items, sidebar_icons_fn, sidebar_props };
