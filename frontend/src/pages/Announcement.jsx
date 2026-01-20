import { MoveLeft, EyeOff, Trash2, Eye, EllipsisVertical } from "lucide-react";
import { GoPlus } from "react-icons/go";
import Notice from "../assets/notice2.png";
import { Link } from "react-router-dom";
import { useAnouncement } from "../contexts/AnoucementContext";

const Announcement = () => {
  const { anouncements, loading } = useAnouncement();

  return (
    <div className="">
      <div className="lg:bg-white lg:pb-20 lg:min-h-screen rounded-2xl">
        {/* ===== Header ===== */}
        <div className="flex flex-row items-center justify-between lg:px-4 lg:py-8 lg:border-b lg:border-gray-200">
          <div className="flex flex-row items-center justify-start space-x-4 ">
            <MoveLeft className="" />
            <h1 className=" text-[17px] lg:text-[24px] font-semibold text-gray-800">
              Announcement
            </h1>
          </div>

          <Link
            className=" flex-row items-center justify-center space-x-2 px-8 py-4 rounded-[10px] bg-[#9542e7] text-white hidden lg:flex"
            to="form"
          >
            <GoPlus size={24} />
            <span className="text-[14px] lg:text-[24px]">Add Announcement</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 lg:bg-white lg:p-4 ">
          {anouncements.map((anouncement) => (
            <NoticeAnnouncement
              title={anouncement.title}
              descriptions={anouncement.descriptions}
              like={anouncement.like}
              teacher={anouncement.teacher}
              comment={anouncement.conmment}
              id={anouncement._id}
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
  id,
}) => {
  return (
    <Link
      to={`${id}`}
      className="bg-white col-span-1 flex flex-col space-y-4 border border-gray-100 p-2 lg:p-4 rounded-[14px]"
    >
      <div className="flex flex-row items-center justify-between border border-gray-100 rounded-lg p-2">
        <div className="flex flex-row items-center justidy-start space-x-2">
          <div className="">
            <img className="w-[56px] h-[56px]" src={Notice} alt="" />
          </div>
          <div className="text-[14px]">
            <h2 className="text-[14px] lg:text-[24px] font-lexend">
              Announcement
            </h2>
            <h2 className="text-[14px] lg:text-[17px] text-gray-500 capitalize">
              {teacher}
            </h2>
            <p className="text-[12px] lg:text-[17px] text-gray-400">30/12/25</p>
          </div>
        </div>
        <div className="flex flex-col  justify-between space-y-4">
          <span className=" ">
            <EllipsisVertical size={17} />
          </span>
        </div>
      </div>
      <div className="flex flex-col space-y-1 font-kalpurush">
        <h2 className="text-[14px] lg:text-[17px] font-semibold">{title}</h2>
        <p className="text-[14px] lg:text-[17px] text-gray-500">
          {descriptions}
          <span className="text-[#9542E7]">Read More..</span>
        </p>
      </div>
      <div className="grid grid-cols-2 border border-blue-100 p-2 lg:p-3 rounded-[12px] ">
        <span className="col-span-1 text-center flex items-center justify-center">
          <Eye size={17} /> <span className="pl-1">{like}</span>
        </span>
        <span className="col-span-1 flex items-center justify-center">
          {comment.length} Comment
        </span>
      </div>
    </Link>
  );
};
