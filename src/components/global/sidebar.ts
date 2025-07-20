import {
  BookOpen,
  CalendarFold,
  CheckCheck,
  Home,
  MessageCircle,
} from "lucide-react";

export const sidebar = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "Tasks",
      url: "/task",
      icon: CheckCheck,
    },
    {
      title: "Message",
      url: "/message",
      icon: MessageCircle,
    },
    {
      title: "Todo",
      url: "/todo",
      icon: BookOpen,
    },
    {
      title: "Calendar",
      url: "/calendar",
      icon: CalendarFold,
    },
    // {
    //   title: "Profile",
    //   url: "/profile",
    //   icon: User,
    // },
    // {
    //   title: "Settings",
    //   url: "/setting",
    //   icon: Settings,
    // },
    // {
    //   title: "Playground",
    //   url: "#",
    //   icon: SquareTerminal,
    //   isActive: true,
    //   items: [
    //     {
    //       title: "History",
    //       url: "/task",
    //     },
    //     {
    //       title: "Starred",
    //       url: "#",
    //     },
    //     {
    //       title: "Settings",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Models",
    //   url: "#",
    //   icon: Bot,
    //   items: [
    //     {
    //       title: "Genesis",
    //       url: "#",
    //     },
    //     {
    //       title: "Explorer",
    //       url: "#",
    //     },
    //     {
    //       title: "Quantum",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Documentation",
    //   url: "#",
    //   icon: BookOpen,
    //   items: [
    //     {
    //       title: "Introduction",
    //       url: "#",
    //     },
    //     {
    //       title: "Get Started",
    //       url: "#",
    //     },
    //     {
    //       title: "Tutorials",
    //       url: "#",
    //     },
    //     {
    //       title: "Changelog",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
};
