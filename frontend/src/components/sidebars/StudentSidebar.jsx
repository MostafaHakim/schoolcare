import { NavLink } from "react-router-dom";
import {
  Home,
  BarChart3,
  BookOpen,
  Award,
  DollarSign,
  User,
  Settings,
  Bell,
} from "lucide-react";

const menu = [
  { path: "/", label: "Home", icon: Home },
  { path: "/student/performance", label: "Performance", icon: BarChart3 },
  { path: "/student/homework", label: "Home work", icon: BookOpen },
  { path: "/student/results", label: "Results", icon: Award },
  { path: "/student/finance", label: "Finance", icon: DollarSign },
  { path: "/student/profile", label: "Profile", icon: User },
  { path: "/student/settings", label: "Setting", icon: Settings },
];

const StudentSidebar = () => {
  return (
    <div className="hidden lg:flex w-64 bg-[#FBFBFD] border-r border-gray-100 flex-col">
      <div className="p-6 flex items-center gap-3">
        <div className="w-9 h-9 bg-[#6C5DD3] rounded-xl flex items-center justify-center text-white font-bold">
          P
        </div>
        <span className="font-semibold">PixLab Solutions</span>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `relative flex items-center gap-3 px-4 py-3 rounded-xl ${
                isActive
                  ? "bg-[#F1EDFF] text-[#6C5DD3]"
                  : "text-gray-500 hover:bg-gray-100"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-[#6C5DD3] rounded-full" />
                )}
                <item.icon size={18} />
                <span className="text-sm font-medium">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t">
        <NavLink
          to="/notice"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-100"
        >
          <Bell size={18} />
          Notification
        </NavLink>
      </div>
    </div>
  );
};

export default StudentSidebar;
