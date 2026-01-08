import { ArrowLeft, Bell, Wallet, Info } from 'lucide-react';

const ProfilePage = () => {
  return (
    <div className="space-y-4">

      {/* ===== Header ===== */}
      <div className="flex items-center gap-3">
        <ArrowLeft className="text-gray-600" />
        <h1 className="text-lg font-semibold">Profile</h1>
      </div>

      {/* ===== Main Card ===== */}
      <div className="bg-white rounded-2xl border p-4 space-y-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* ===== Student Info ===== */}
          <div className="border rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-semibold">
                T
              </div>
              <div>
                <p className="font-medium">Taskia Jannat Iva</p>
                <p className="text-xs text-gray-400">ID: 67542</p>
              </div>
            </div>

            <div className="text-sm text-gray-600 space-y-1">
              <p>Class: Play</p>
              <p>Role: 02</p>
              <p>Date of birth: 30 Oct-2025</p>
            </div>
          </div>

          {/* ===== Guardian Info ===== */}
          <div className="border rounded-xl p-4 space-y-3">
            <div>
              <p className="text-xs text-gray-400">Guardian Name</p>
              <p className="text-sm font-medium">MD NAJIM UDDIN</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Guardian Number</p>
              <p className="text-sm font-medium">+8801762006582</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Guardian Address</p>
              <p className="text-sm">
                Guragram, Hadar par 3150, Gowinghat, Sylhet
              </p>
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

        {/* ===== Contact Teacher Button ===== */}
        <button className="w-full py-3 rounded-xl text-white font-medium bg-gradient-to-r from-purple-600 to-indigo-600">
          Contact with school teacher
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
