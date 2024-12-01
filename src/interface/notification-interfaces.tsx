interface notification_item {
  id: string;
  avatar?: string;
  author: string;
  action: string;
  link?: {
    text: string;
    href: string;
  };
  timestamp: string;
  type: "job" | "system";
}

export type { notification_item };
