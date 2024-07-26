import { Briefcase, House, Stars, Tag, User } from "lucide-react";
import { SidebarLink } from "../types";

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: <House/>,
    route: "/",
    label: "Home",
  },
  {
    imgURL: <User/>,
    route: "/community",
    label: "Community",
  },
  {
    imgURL: <Stars/>,
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: <Briefcase/>,
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: <Tag/>,
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];


function Home() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-house"
      >
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>
    </div>
  );
}
