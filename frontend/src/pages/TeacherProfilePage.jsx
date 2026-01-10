import { ArrowLeft, Bell, Wallet, Info } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useClass } from "../contexts/classContext";

const TeacherProfilePage = () => {
  const { user } = useAuth();
  const { classes } = useClass();

  return (
    <div className="space-y-4">
      {/* ===== Header ===== */}
      <div className="flex items-center gap-3">
        <ArrowLeft className="text-gray-600" />
        <h1 className="text-lg font-semibold">Teacher's Profile</h1>
      </div>

      {/* ===== Main Card ===== */}
      <div className="bg-white rounded-2xl border p-4 space-y-4">
        <h2 className="text-2xl font-lexend uppercase text-violet-500">
          {user?.school}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 capitalize">
          {/* ===== Student Info ===== */}
          <div className="border rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-semibold">
                {user?.username.slice(0, 1)}
              </div>
              <div>
                <p className="font-medium">{user?.username}</p>
                <p className="text-xs text-gray-400">ID: {user?.userId}</p>
              </div>
            </div>

            <div className="text-sm text-gray-600 space-y-1 capitalize">
              <p>Phone: {user?.phone}</p>
              <p>Role: {user?.userRole}</p>
              <p>Date of birth: 30 Oct-2025</p>
            </div>
          </div>

          {/* ===== Guardian Info ===== */}
          <div className="border rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-3">
              <div>
                <p className="font-medium">School Information</p>
                <p className="text-xs text-gray-400">EIIN No: 1234</p>
              </div>
            </div>
            <div className="text-sm text-gray-600 space-y-1 capitalize">
              <p>Total Classes: {classes?.length}</p>
              <p>Total Teacher: {user?.length}</p>
              <p>School Contect: 01722440899</p>
            </div>
          </div>

          {/* ===== Right Menu ===== */}
          <div className="border rounded-xl divide-y">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-2">
                <Bell size={16} />
                <span className="text-sm">Notification</span>
              </div>
              <div className="w-10 h-5 bg-purple-600 rounded-full relative">
                <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-0.5"></div>
              </div>
            </div>

            <div className="flex items-center gap-2 p-4">
              <Wallet size={16} />
              <span className="text-sm">Finance</span>
            </div>

            <div className="flex items-center gap-2 p-4">
              <Info size={16} />
              <span className="text-sm">About Us</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfilePage;
