import { NavLink } from "react-router-dom";
import {
  Home,
  BookOpen,
  ClipboardCheck,
  Megaphone,
  UserPlus,
  FileText,
  DollarSign,
  MessageCircle,
  User,
} from "lucide-react";

const navItems = [
  { to: "/teacher", label: "Home", icon: Home },
  { to: "/teacher/homework", label: "Home work", icon: BookOpen },
  { to: "/teacher/attendance", label: "Attendance", icon: ClipboardCheck },
  { to: "/teacher/announcement", label: "Announcement", icon: Megaphone },
  { to: "/teacher/admission", label: "Admission", icon: UserPlus },
  { to: "/teacher/results", label: "Results", icon: FileText },
  { to: "/teacher/finance", label: "Finance", icon: DollarSign },
  { to: "/teacher/chat", label: "Chat", icon: MessageCircle },
  { to: "/teacher/profile", label: "Profile", icon: User },
];

const TeacherSidebar = () => {
  return (
    <aside className="hidden lg:block w-64 bg-white border-r min-h-screen px-4 py-6">
      {/* Logo */}
      <h1 className="text-xl font-semibold text-purple-600 mb-8">
        School Care ✍️
      </h1>

      {/* Nav */}
      <nav className="space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/teacher"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition
              ${
                isActive
                  ? "bg-purple-100 text-purple-600 font-medium"
                  : "text-gray-500 hover:bg-gray-100"
              }`
            }
          >
            <item.icon size={18} />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default TeacherSidebar;
