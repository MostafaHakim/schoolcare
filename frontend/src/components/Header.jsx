import { Bell, LogOut } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 hidden lg:block">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Good Morning!
          </h1>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            ☀️ Let’s get ready to go to your school
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/notice")}
            className="relative p-2 rounded-lg hover:bg-gray-100"
          >
            <Bell size={22} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          <button
            onClick={() => navigate("/profile")}
            className="relative p-2 rounded-lg hover:bg-gray-100"
          >
            <div className="flex items-center gap-3">
              <img src={user.image} className="w-10 h-10 rounded-full" />
              <div className="text-right">
                <p className="text-sm font-semibold capitalize">
                  {user?.username}
                </p>
                <p className="text-xs text-gray-400">{user?.id}</p>
              </div>
            </div>{" "}
          </button>

          {!user?.isGuest && (
            <button
              onClick={() => {
                logout();
              }}
              className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
            >
              <LogOut size={18} />
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
