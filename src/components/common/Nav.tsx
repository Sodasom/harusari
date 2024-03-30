import { useLocation } from "react-router-dom";

import CalendarIcon from "../../assets/icons/CalendarIcon";
import DocumentIcon from "../../assets/icons/DocumentIcon";
import EditIcon from "../../assets/icons/EditIcon";

export default function Nav() {
  const { pathname } = useLocation();

  const navList = [
    {
      id: "list",
      icon: (
        <DocumentIcon
          width="24"
          height="24"
          fill={pathname === "/list" ? "#52B69A" : ""}
        />
      ),
      title: "하루목록",
      url: "/list",
    },
    {
      id: "today",
      icon: (
        <CalendarIcon
          width="24"
          height="24"
          fill={pathname === "/" ? "#52B69A" : ""}
        />
      ),
      title: "나의하루",
      url: "/",
    },
    {
      id: "write",
      icon: (
        <EditIcon
          width="24"
          height="24"
          fill={pathname === "/write" ? "#52B69A" : ""}
        />
      ),
      title: "하루쓰기",
      url: "/write",
    },
  ];

  return (
    <nav className="nav">
      <ul className="flex justify-center gap-20">
        {navList.map((list) => (
          <li id={list.id}>
            <a
              className="flex flex-col items-center gap-1 cursor-pointer"
              href={list.url}
            >
              {list.icon}
              <span
                className={`text-xs ${
                  pathname === list.url
                    ? "text-base-gray80"
                    : "text-base-gray30"
                }`}
              >
                {list.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
