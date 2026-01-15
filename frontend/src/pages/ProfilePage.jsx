import { ArrowLeft, Bell, Wallet, Info, LogOut } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useClass } from "../contexts/classContext";
import ProfileIcon from "../assets/profileshadow.png";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
const ProfilePage = () => {
  const { user, logout } = useAuth();

  return (
    <div className="space-y-4 lg:bg-white  lg:p-4">
      {/* ===== Header ===== */}
      <div className="flex items-center lg:p-6 space-x-4">
        <ArrowLeft className="text-gray-600" />
        <h1 className="text-lg lg:text-2xl font-semibold pt-2 lg:pt-0">
          Profile
        </h1>
      </div>

      {/* ===== Main Card ===== */}
      <div className="lg:bg-white rounded-2xl lg:border border-gray-100 lg:p-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 capitalize ">
          {/* ===== Student Info ===== */}
          <div className="border rounded-2xl p-4 space-y-2 bg-white">
            <div className="flex flex-row items-center justify-between border border-gray-100 p-3 rounded-xl relative">
              <div className="flex items-center gap-3 ">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tl from-violet-800 to-purple-400 text-white flex items-center justify-center font-semibold">
                  {user?.name.slice(0, 1)}
                </div>
                <div>
                  <p className="font-medium">{user?.name}</p>
                  <p className="text-xs text-gray-400">ID: {user?.studentId}</p>
                </div>
              </div>
              <div className="absolute bottom-0 right-0">
                <img src={ProfileIcon} alt="" />
              </div>
            </div>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 rounded-xl">
              <legend className="fieldset-legend text-textc2-700">Class</legend>
              <p className="label text-textc1-700">{user.classId}</p>
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 rounded-xl">
              <legend className="fieldset-legend text-textc2-700">Roll</legend>
              <p className="label text-textc1-700">{user.roll}</p>
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 rounded-xl">
              <legend className="fieldset-legend text-textc2-700">
                Date Of Birth
              </legend>
              <p className="label text-textc1-700">
                {new Date().toLocaleDateString()}
              </p>
            </fieldset>
          </div>

          {/* ===== Guardian Info ===== */}
          <div className="border rounded-xl p-4 space-y-3 bg-white">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 rounded-xl">
              <legend className="fieldset-legend text-textc2-700">
                Guardian Name
              </legend>
              <p className="label text-textc1-700">{user.fathername}</p>
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 rounded-xl">
              <legend className="fieldset-legend text-textc2-700">
                Guardian Number
              </legend>
              <p className="label text-textc1-700">{user.phone}</p>
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 rounded-xl">
              <legend className="fieldset-legend text-textc2-700">
                Guardian Address
              </legend>
              <p className="label text-textc1-700">{`Dhaka Banladesh`}</p>
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 rounded-xl">
              <legend className="fieldset-legend text-textc2-700">
                School Name
              </legend>
              <p className="label text-textc1-700">{user.school}</p>
            </fieldset>
          </div>

          {/* ===== Right Menu ===== */}
          <div className="grid grid-cols-1 bg-white">
            <div className="col-span-1 flax flex-col items-center justify-between space-y-2 ">
              <div className="flex flex-col items-center justify-start space-y-2 border border-gray-100 p-4 rounded-xl">
                <div className="flex flex-row w-full items-center justify-between p-4 border boder-gray-100 rounded-xl text-textc2-700">
                  <div className="flex items-center gap-2">
                    <Bell size={20} />
                    <span className="text-xl text-textc1-700">
                      Notification
                    </span>
                  </div>
                  <div className="w-10 h-5 bg-purple-600 rounded-full relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-0.5"></div>
                  </div>
                </div>
                <div className="flex  w-full items-center gap-2 p-4 border border-gray-100 rounded-xl text-textc2-700">
                  <Wallet size={20} />
                  <span className="text-xl text-textc1-700">Finance</span>
                </div>
                <div className="flex  w-full items-center gap-2 p-4 border border-gray-100 rounded-xl text-textc2-700">
                  <Info size={20} />
                  <span className="text-xl text-textc1-700">About Us</span>
                </div>
                <div className="flex  w-full items-center gap-2 p-4 border border-gray-100 rounded-xl text-textc2-700">
                  <Info size={20} />
                  <span className="text-xl text-textc1-700">
                    Terms & Conditions
                  </span>
                </div>
              </div>
              <button className="hidden lg:block w-full py-4 bg-primary-700 text-white capitalize rounded-xl text-xl font-lexend">
                {" "}
                contact with school teacher
              </button>
            </div>
          </div>
        </div>
        <div className="lg:hidden flex flex-row space-x-2 p-4 bg-white border border-blue-100 rounded-xl">
          <button
            className="flex text-primary-700 flex-row items-center justify-between space-x-2"
            onClick={() => logout()}
          >
            <LogOut /> <h2>Log out</h2>
          </button>
        </div>
        <button className="a-full flex flex-row items-center space-x-2 justify-center lg:hidden  w-full py-4 bg-primary-700 text-white capitalize rounded-xl text-xl font-lexend">
          {" "}
          <IoChatbubbleEllipsesOutline />
          <h2 className="text-sm">contact with school teacher</h2>
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
