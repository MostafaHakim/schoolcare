import { ArrowLeft, Bell, Wallet, Info, LogOut } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import Weather from "../assets/weather.png";
const Notification = () => {
  const { user, logout } = useAuth();

  return (
    <div className="space-y-2 lg:bg-white  lg:p-4">
      {/* ===== Header ===== */}
      <div className="flex items-center lg:p-6 space-x-4">
        <ArrowLeft className="text-gray-600" />
        <h1 className="text-lg lg:text-2xl font-semibold pt-2 lg:pt-0">
          Notification
        </h1>
      </div>
      {/* =================Notification Card======================= */}
      <div className="grid grid-cols-1 lg:px-6">
        <div className="p-2 lg:p-4 border border-gray-100 rounded-2xl relative overflow-hidden">
          <div className="lg:p-4 z-20">
            <div className="flex flex-row items-center justify-between py-2">
              <h2 className="text-md lg:text-2xl text-black">প্রিয় অভিবাবক</h2>
              <p className="text-sm text-textc2-700">
                {new Date().toTimeString().split(" ")[0]}
              </p>
            </div>
            <p className="text-sm text-justify mr-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              repellendus illum
            </p>
          </div>
          <img className="absolute top-0 left-0 z-10" src={Weather} alt="" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:px-6">
        <div className="p-2 lg:p-4 border border-gray-100 rounded-2xl relative overflow-hidden">
          <div className="lg:p-4 z-20">
            <div className="flex flex-row items-center justify-between py-2">
              <h2 className="text-md lg:text-2xl text-black">প্রিয় অভিবাবক</h2>
              <p className="text-sm text-textc2-700">
                {new Date().toTimeString().split(" ")[0]}
              </p>
            </div>
            <p className="text-sm text-justify mr-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              repellendus illum
            </p>
          </div>
          <img className="absolute top-0 left-0 z-10" src={Weather} alt="" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:px-6">
        <div className="p-2 lg:p-4 border border-gray-100 rounded-2xl relative overflow-hidden">
          <div className="lg:p-4 z-20">
            <div className="flex flex-row items-center justify-between py-2">
              <h2 className="text-md lg:text-2xl text-black">প্রিয় অভিবাবক</h2>
              <p className="text-sm text-textc2-700">
                {new Date().toTimeString().split(" ")[0]}
              </p>
            </div>
            <p className="text-sm text-justify mr-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              repellendus illum
            </p>
          </div>
          <img className="absolute top-0 left-0 z-10" src={Weather} alt="" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:px-6">
        <div className="p-2 lg:p-4 border border-gray-100 rounded-2xl relative overflow-hidden">
          <div className="lg:p-4 z-20">
            <div className="flex flex-row items-center justify-between py-2">
              <h2 className="text-md lg:text-2xl text-black">প্রিয় অভিবাবক</h2>
              <p className="text-sm text-textc2-700">
                {new Date().toTimeString().split(" ")[0]}
              </p>
            </div>
            <p className="text-sm text-justify mr-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              repellendus illum
            </p>
          </div>
          <img className="absolute top-0 left-0 z-10" src={Weather} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Notification;
