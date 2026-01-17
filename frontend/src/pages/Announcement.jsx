import { MoveLeft, EyeOff, Trash2, Eye } from "lucide-react";
import { GoPlus } from "react-icons/go";
import Notice from "../assets/notice.png";
import { Link } from "react-router-dom";
import { useAnouncement } from "../contexts/AnoucementContext";

const Announcement = () => {
  const { anouncements, loading } = useAnouncement();
  console.log(anouncements);
  return (
    <div className="">
      <div className=" ">
        {/* ===== Header ===== */}
        <div className="flex flex-row items-center justify-between bg-white px-4 py-4 rounded-t-2xl lg:border-b-[1px] lg:border-gray-200">
          <div className="flex flex-row items-start justify-start space-x-2">
            <MoveLeft className="flex lg:hidden" />
            <h1 className="text-lg font-semibold text-gray-800">
              Announcement
            </h1>
          </div>

          <Link
            className=" flex-row items-center justify-center space-x-2 px-8 py-3 rounded-[10px] bg-[#9542e7] text-white hidden lg:flex"
            to="form"
          >
            <GoPlus className="text-2xl " />
            <span>Add Announcement</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 bg-white p-4 lg:p-6">
          {anouncements.map((anouncement) => (
            <NoticeAnnouncement
              title={anouncement.title}
              descriptions={anouncement.descriptions}
              like={anouncement.like}
              teacher={anouncement.teacher}
              comment={anouncement.conmment}
            />
          ))}
        </div>
        <div>
          <Link
            className="flex lg:hidden  flex-row items-center justify-center space-x-2 px-8 py-2  h-[48px] rounded-[10px] bg-[#9542e7] text-white w-full"
            to="form"
          >
            <GoPlus className="text-2xl " />
            <span>Add Announcement</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Announcement;

// reuseable Component

const NoticeAnnouncement = ({
  title,
  descriptions,
  like,
  teacher,
  comment,
}) => {
  return (
    <div className="col-span-1 flex flex-col space-y-4 border border-blue-100 p-6 rounded-lg">
      <div className="flex flex-row items-center justify-between border border-blue-100 rounded-lg p-4">
        <div className="flex flex-row items-center justidy-start space-y-2">
          <img className="w-1/3" src={Notice} alt="" />
          <div>
            <h2 className="text-xl font-lexend">Announcement</h2>
            <h2 className="text-lg text-gray-500 capitalize">{teacher}</h2>
            <p className="text-md text-gray-400">30/12/25</p>
          </div>
        </div>
        <div className="flex flex-col  justify-between space-y-4">
          <span className="text-rose-500 p-4 border border-blue-100 rounded-lg ">
            <Trash2 />
          </span>
          <span className="text-gray-700 p-4 border border-blue-100 rounded-lg ">
            <EyeOff />
          </span>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-lg text-gray-500">
          {descriptions}
          <span className="text-[#9542E7]">Read More..</span>
        </p>
      </div>
      <div className="grid grid-cols-2 border border-blue-100 p-3 rounded-lg ">
        <span className="col-span-1 text-center flex items-center justify-center">
          <Eye /> <span className="pl-1">{like}</span>
        </span>
        <span className="col-span-1 flex items-center justify-center">
          {comment.length} Comment
        </span>
      </div>
    </div>
  );
};
