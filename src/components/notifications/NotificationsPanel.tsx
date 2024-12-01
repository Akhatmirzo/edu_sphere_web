import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Mail, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { notification_item } from "@/interface/notification-interfaces";

const notifications: notification_item[] = [
  {
    id: "1",
    avatar: "/placeholder.svg",
    author: "Jie Yan",
    action: "added a new job",
    link: {
      text: "Remote React / React Native Developer",
      href: "#",
    },
    timestamp: "Nov 30, 08:16 PM",
    type: "job",
  },
  {
    id: "2",
    avatar: "/placeholder.svg",
    author: "Fran Perez",
    action: "added a new job",
    link: {
      text: "Senior Golang Backend Engineer",
      href: "#",
    },
    timestamp: "Nov 26, 10:05 PM",
    type: "job",
  },
  {
    id: "3",
    type: "system",
    author: "New feature!",
    action: "Logistics management is now available",
    timestamp: "Nov 24, 08:19 PM",
  },
];

export default function NotificationsPanel() {
  return (
    <div className="w-[380px] bg-white dark:bg-gray-950 rounded-lg shadow-lg border dark:border-gray-800">
      <div className="flex items-center justify-between p-4 border-b dark:border-gray-800">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <Button variant="ghost" size="icon">
          <Mail className="h-5 w-5" />
        </Button>
      </div>
      <ScrollArea className="h-[400px]">
        <div className="flex flex-col">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-start gap-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-900 border-b dark:border-gray-800 relative group"
            >
              <Avatar className="h-10 w-10">
                {notification.type === "job" ? (
                  <AvatarImage src={notification.avatar} />
                ) : (
                  <div className="h-full w-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  </div>
                )}
                <AvatarFallback>{notification.author[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm">
                  <span className="font-medium">{notification.author}</span>{" "}
                  {notification.action}
                  {notification.link && (
                    <>
                      {" "}
                      <a
                        href={notification.link.href}
                        className="text-blue-600 hover:underline"
                      >
                        {notification.link.text}
                      </a>
                    </>
                  )}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                  {notification.timestamp}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-3 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
