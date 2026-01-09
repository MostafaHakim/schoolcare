import { ArrowLeft, Eye, MessageCircle, Send, Download } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { BiSolidEditAlt } from "react-icons/bi";
import HomeWorkSubjectCard from "./HomeWorkSubjectCard";
import { useHomework } from "../contexts/HomeworkContext";
import { useEffect } from "react";
import Homeworkicon from "../assets/homeworkicon.png";

const TeacherHomeworkDetailPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { fetchHomeworksById, homeworkById } = useHomework();
  console.log(homeworkById);
  useEffect(() => {
    fetchHomeworksById(id);
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-3 py-4">
      <div className="w-full  bg-white rounded-xl overflow-hidden">
        {/* Header */}
        <div className="hidden lg:flex items-center gap-3 px-4 py-3 border-b">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft size={22} />
          </button>
          <h2 className="text-sm font-medium">Homework details</h2>
        </div>

        {/* Image Section */}
        <div className="relative">
          <div className="flex absolute top-6 text-white lg:hidden items-center gap-3 px-4 py-3 ">
            <button onClick={() => navigate(-1)}>
              <ArrowLeft size={22} />
            </button>
            <h2 className="text-sm font-medium">Homework details</h2>
          </div>
          <img
            src={homeworkById[0]?.image}
            alt="Homework"
            className="w-full h-72 sm:h-64 object-cover"
          />

          <button className="hidden lg:absolute top-3 right-3 bg-violet-600 text-white px-3 py-2 rounded-lg shadow">
            Change
          </button>
          <button className="absolute lg:hidden top-6 right-3 text-2xl text-white px-3 p-2 border border-white rounded-lg shadow">
            <BiSolidEditAlt />
          </button>
          <div className="absolute p-4 bg-white rounded-2xl bottom-[-100px] left-4 right-4 md:hidden">
            <HomeWorkSubjectCard
              subject={homeworkById[0]?.subject}
              teacher={homeworkById[0]?.teacher}
              date={homeworkById[0]?.date}
              image={Homeworkicon}
              id={homeworkById[0]?._id}
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-4 py-4 space-y-3 mt-28 md:mt-0">
          {/* Bangla Description */}
          <p>{homeworkById[0]?.details}</p>
          {/* Stats */}
          <div className="grid grid-cols-2 border border-blue-100 p-4 rounded-xl">
            <div className="col-span-1 flex flex-row items-center justify-center space-x-2 border-blue-100">
              <Eye size={16} />
              <span>32</span>
            </div>

            <div className="col-span-1 flex flex-row items-center justify-center space-x-2">
              <MessageCircle size={16} />
              <span>54 Comment</span>
            </div>
          </div>
        </div>

        {/* Comments */}
        <div className="px-4 py-4 space-y-3">
          <div className="flex flex-row item-center justify-between">
            <h2 className="text-sm text-gray-700">Comments</h2>
            <p className="text-sm text-gray-700">01</p>
          </div>

          <div className="flex gap-3 border border-blue-100 rounded-xl p-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs font-semibold">
              T
            </div>

            <div className="flex-1">
              <p className="text-sm font-medium">Taskia jannat Iva</p>
              <p className="text-xs text-gray-400">1 Hour</p>
              <p className="text-sm text-gray-700 mt-1">
                স্যার আমি কালকে লিখবো, আজকে একটু কাজ আছে
              </p>
            </div>
          </div>
        </div>

        {/* Comment Input */}
        <div className="px-4 py-3 flex items-center gap-2">
          <input
            type="text"
            placeholder="Message"
            className="flex-1 text-sm px-3 py-2 border rounded-lg outline-none focus:ring-1 focus:ring-purple-500"
          />
          <button className="bg-purple-500 p-2 rounded-lg text-white">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherHomeworkDetailPage;
